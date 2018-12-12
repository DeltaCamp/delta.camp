---
layout:    post
title:     "Contract Storage and Upgrade in Augur and Colony"
author:    "Brendan Asselstine"
category:  blog
date:      "2018-03-26T15:00:00.200Z"
draft: false
tags: ["smart contracts", "ethereum", "blockchain"]
shared_square_image: posts/etherplate-logo.png
from_medium: true
---

In this article I’ll examine two major Ethereum projects to see how they approach contract storage and upgrades. I try to stick strictly to analysis and avoid giving opinions or making assumptions (at least until the summary!). I examined [Augur](http://www.augur.net/) and [Colony](https://colony.io/) because they are mature and have public code bases.

<!-- more -->

![Augur and Colony Logos](./augur-colony-logos.png)

My background is in web and mobile application development. After writing my first few dapps, I quickly realized there were major shortcomings in my application architecture. The immutability of smart contracts requires the developer to carefully consider how code will be updated. I read all about upgradeable contract patterns, but I still didn’t see how they fit into the application as a whole. I decided to read the code bases of a number of projects. Augur and Colony were my favourites.

Before continuing you **must** have a solid understanding of the [DELEGATECALL](http://solidity.readthedocs.io/en/develop/assembly.html) opcode. Martin Swende gives an excellent [explanation](http://martin.swende.se/blog/EVM-Assembly-trick.html) of it's usage. Most projects use this opcode to implement upgradeable contracts. Quite often the pattern is called Proxy, Delegator, or Dispatcher. Because the `returndatasize` opcode was introduced in Byzantium, there are two different styles of patterns. The newer style uses the `returndatasize` opcode to provide a generic solution. The old style requires the developer to track the return value storage size of each function registered. For a post-Byzantium example of generic opcode usage see Manuel Aráoz's [Dispatcher](https://github.com/maraoz/solidity-proxy/blob/master/contracts/Dispatcher.sol). For a pre-Byzantium example see [EtherRouter](https://github.com/ownage-ltd/ether-router).

For a high-level overview of the different storage and upgrade patterns, see [Jack Tanner’s article](https://blog.indorse.io/ethereum-upgradeable-smart-contract-strategies-456350d0557c). He has also listed numerous useful links.

### Augur

[Augur](http://www.augur.net/) is a prediction market; it allows people to bet on the outcomes of future events. It’s been under development since 2014. Augur publishes it’s smart contracts to Github under [augur-core](https://github.com/AugurProject/augur-core).

Augur consists of 70+ smart contracts. Nearly all of the contracts inherit from [Controlled](https://github.com/AugurProject/augur-core/blob/7f3c79a5dd471a98df8f66a640902e063f15f796/source/contracts/Controlled.sol). Controlled contracts store a reference to a [Controller](https://github.com/AugurProject/augur-core/blob/7f3c79a5dd471a98df8f66a640902e063f15f796/source/contracts/Controller.sol).

```solidity
contract Controlled is IControlled {
    IController internal controller;
}
```

The Controller acts as a contract registry. It provides a [lookup(bytes32)](https://github.com/AugurProject/augur-core/blob/7f3c79a5dd471a98df8f66a640902e063f15f796/source/contracts/Controller.sol#L97) method so that contracts can be retrieved by name.

```solidity
// Note that the code has been simplified

contract Controller {
    struct ContractDetails {
        bytes32 name;
        address contractAddress;
    }
    mapping(bytes32 => ContractDetails) public registry;

    function lookup(bytes32 _key) public view returns (address) {
        return registry[_key].contractAddress;
    }

    function registerContract(bytes32 _key, address _address) {
        registry[_key] = ContractDetails(_key, _address);
    }
}
```

...
