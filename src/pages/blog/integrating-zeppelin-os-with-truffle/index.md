---
layout:    post
title:     "Integrating Zeppelin OS with Truffle"
author:    "Brendan Asselstine"
category:  blog
date:      "2018-11-30T15:00:00.200Z"
draft:     false
tags: ["truffle", "zos", "zeppelin", "openzeppelin", "ethereum", "blockchain"]
socialImage: "./integrating-zeppelin.jpeg"
from_medium: true
---

_tldr; easily integrate Zeppelin OS into an existing Truffle-based project using a migration pattern and Zeppelin OS to Truffle merge command. You can find a mirror of the tutorial and example code on Github_

<!-- more -->

![Drawing of a Zeppelin](./integrating-zeppelin.jpeg)

[Zeppelin OS](https://zeppelinos.org/) is a tool that manages contract deployment, upgrades, and packaging. It even cleverly detects and warns about memory structure changes in upgradeable contracts. With very little effort you can make all of your contracts upgradeable and enjoy an easy-to-use command line tool to manage them. It’s essential.

ZOS is designed to integrate with [Truffle](https://truffleframework.com/); a well-regarded suite of tools that allow one to easily migrate, deploy and test smart contracts.

### Migrations

ZOS handles contract upgrades, but doesn’t go so far as to directly support Truffle migrations. Migrations are valuable because they capture deployment logic in discrete, versioned steps. Developers can add new migrations and incrementally migrate their environment.

To integrate Truffle migrations with Zeppelin OS, we’ll need to take care of two major issues:

1. Contracts must be instantiated using Zeppelin OS by a separate ‘administrator’ account. Zeppelin OS separates the role of contract ‘administrator’ and contract ‘user’: the administrator is the one who creates and upgrades the target contracts and the user is anyone who calls the original contract functions. Zeppelin calls this the [transparent proxy pattern](https://blog.zeppelinos.org/the-transparent-proxy-pattern/).

2. Truffle migrations rely on the version as stored in the deployed Migrations contract. If the build artifacts are re-created we need to merge the addresses from the zos.*.json file into the Truffle artifacts.

Let’s take care of these two steps.

### Project Setup

The complete code is on [Github](https://github.com/asselstine/zos-truffle-migrations-tutorial), but if you’d like to follow along you can run these commands to setup your project:

```bash
$ mkdir zos-truffle-migrations
$ cd zos-truffle-migrations
$ npm init # config doesn't matter
$ npm i --save-dev zos truffle-hdwallet-provider openzeppelin-eth shelljs ganache-cli zos-truffle-merge
$ zos init .
```

In a separate terminal start ganache-cli:

```bash
$ ganache-cli -m "ignore deer have enable syrup wall link pudding celery require black office"
```

Now you will be able to follow the article.

### Separating Contract Creation from Privileged Interaction

Many contracts define a special address as being the ‘owner’. The owner of a contract is able to use privileged administrative functions: such as mint on an ERC20 contract. ZOS does not allow the proxy admin to interact with the contract, so the owner cannot deploy the contract. We'll need to adapt our migrations so that a separate 'proxy admin' account actually deploys the contract.

Having multiple transaction signing accounts introduces an added wrinkle: we now need more than one account ‘unlocked’ in the Truffle network config. For our local `ganache-cli` that's not a problem because the first ten accounts are unlocked in ganache-cli, but for a test network such as Ropsten we need to unlock them manually.

### Truffle Network Config

The [truffle-hdwallet-provider](https://github.com/trufflesuite/truffle-hdwallet-provider) allows one to unlock multiple addresses using an offset and count as it’s third and fourth parameters:

```js
// truffle-config.js
'use strict';

var HDWalletProvider = require("truffle-hdwallet-provider")

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        "fat puzzle vicious turtle follow onion measure car embrace civil shadow smoke",
        "https://ropsten.infura.io/<YourAccessKey>",
        0, // we start with address[0]
        2 // notice that we unlock two: which will be address[0] and address[1]
      ),
      network_id: 3,
      gas: 8000000,
      gasPrice: 20 * 1000000000
    }
  }
}
```

We’ve unlocked `address[0]` and `address[1]`. Since Truffle uses the first address to update the migration version, let's use the second address as the proxy admin.

### Migrations.sol

Our first migration to update will be the `1_initial_migration.js` that comes with every Truffle project. It deploys the Migrations contract that Truffle depends on for migration versioning. The `Migrations.sol` contract will need to be updated to be compatible with ZOS. Notice that we're using `Ownable.sol` from the [openzeppelin-eth](https://github.com/OpenZeppelin/openzeppelin-eth) module, which is a special branch of the OpenZeppelin library that integrates with ZOS.

```solidity
// Migrations.sol

pragma solidity ^0.4.24;

import "openzeppelin-eth/contracts/ownership/Ownable.sol";

contract Migrations is Ownable {
  uint public last_completed_migration;

  function setCompleted(uint completed) public onlyOwner {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public onlyOwner {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
```

Next we’ll need to update the `1_initial_migration.js` script to use ZOS. I prefer using the shell commands, but ZOS does offer a JavaScript API.

```js
// 1_initial_migration.js
const shell = require('shelljs')

module.exports = function(deployer, networkName, accounts) {
  deployer.then(() => {
    if (shell.exec(`zos create Migrations --init initialize --args ${accounts[0]} --network ${networkName} --from ${accounts[1]}`).code !== 0) {
      throw new Error('Migration failed')
    }
  })
};
```

Notice that we’re initializing the contract using the inherited function `initialize(address _owner)` with `accounts[0]`.

### CallMeMaybe.sol

To complete the picture, let’s add an arbitrary contract where we need call a function in a migration:


```solidity
// CallMeMaybe.sol

pragma solidity ^0.4.24;

import "openzeppelin-eth/contracts/ownership/Ownable.sol";

contract CallMeMaybe is Ownable {
  string public name;

  function init(address _owner, string _name) public initializer {
    Ownable.initialize(_owner);
    name = _name;
  }

  function setName(string _newName) public onlyOwner {
    name = _newName;
  }
}
```

Let’s add two migrations for CallMeMaybe, the first to create it and the second to set it (arbitrary example).

```js
// 2_create_call_me_maybe.js
const shell = require('shelljs')

module.exports = function(deployer, networkName, accounts) {
  deployer.then(() => {
    if (shell.exec(`zos create CallMeMaybe --init init --args ${accounts[0]},maybe --network ${networkName} --from ${accounts[1]}`).code !== 0) {
      throw new Error('Migration failed')
    }
  })
};
```

```js
// 3_update_call_me_maybe.js
const CallMeMaybe = artifacts.require('CallMeMaybe.sol')

module.exports = function(deployer, networkName, accounts) {
  deployer.then(async () => {
    const instance = await CallMeMaybe.deployed()
    await instance.setName('or not')
  })
};
```

This demonstrates the integration with Truffle: we can simply pull in the contract artifacts as we do normally and call them.

The contracts and migrations are done! Now let’s run them.

### Running the Migrations

Assuming `accounts[0]` (owner) is **0x2c1e88eeb8a1aa907dcaa141f8a930565637ff57** and `accounts[1]` (proxy admin) is **0x81ff0179eeb3545e7d9a0e80672ea9ba88d68817** let's now deploy our contract:

```bash
$ zos add Migrations CallMeMaybe
$ zos push --network local --from 0x81ff0179eeb3545e7d9a0e80672ea9ba88d68817
$ truffle migrate --network local
```

Check the name using the Truffle console:


```bash
$ truffle console --network local
truffle(local)> CallMeMaybe.deployed().then(i => i.name())
or not
```

### Merging Addresses back into Truffle Artifacts: zos-truffle-merge

When the Truffle build artifacts are destroyed and re-created, they lose all of the address information from Zeppelin. To merge the address information back into the files you can use a handy tool I wrote call zos-truffle-merge.

To merge ZOS addresses from Ropsten back into the artifacts:

```bash
$ truffle compile
$ zos-truffle-merge -n 3 zos.ropsten.json
```

This will merge the deployed contract addresses defined in `zos.ropsten.json` into the Truffle artifacts in `build/contracts` for the network id `3`.

Zeppelin OS has added this feature to their [backlog](https://github.com/zeppelinos/zos/issues/420), so this command may eventually be replaced with built-in functionality.

### Summary

I greatly enjoy working with Zeppelin OS and Truffle; the two tools are a powerful combination. If you’re a Truffle user I hope this article helps you transition to using Zeppelin OS, as I think people can benefit from it greatly.
