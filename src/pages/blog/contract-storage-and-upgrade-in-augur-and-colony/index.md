---
layout:    post
title:     "Contract Storage and Upgrade in Augur and Colony"
author:    "Brendan Asselstine"
category:  blog
date:      "2018-03-26T15:00:00.200Z"
draft:     false
tags:      ["smart contracts", "software architecture", "ethereum", "blockchain", "design patterns", "software design patterns"]
socialImage: "./augur-colony-logos.png"
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

This allows any contract to look up another using a hashed name. It also means that contracts can be replaced at runtime by re-registering them; keeping in mind that the storage shape must only be appended to.

### Deployment

Augur uses a set of custom deployment scripts written in TypeScript to deploy their contracts. When the application is first deployed:

1. The controller is deployed.

2. The Augur contract is deployed and updated with the Controller address.

3. The remaining contracts are each deployed, updated with the Controller address, and then registered with the Controller.

In this way we can see that the system is partially upgradeable. The Controller and Augur contracts are static, but the rest of the contracts can be upgraded.

### Storage

Augur stores some of it’s data in [singletons](https://en.wikipedia.org/wiki/Singleton_pattern); i.e. there is only one global instance. The rest of the data is stored in Delegator contracts created by factories.

A Delegator is a contract that delegates all function calls to another contract using the DELEGATECALL opcode. The Delegators will therefore adopt the same storage shape and behaviour as the target contract.

```solidity
contract Delegator is DelegationTarget {
    function Delegator(IController _controller, bytes32 _controllerLookupName) public {
        controller = _controller;
        controllerLookupName = _controllerLookupName;
    }

    function() external payable {
        address _target = controller.lookup(controllerLookupName);
        // assembly { DELEGATECALL }
    }
}
```

### Factories

Some contracts are created dynamically at runtime. Each of these contracts will have a corresponding factory. The factories instantiate Delegator contracts that point to their actual contracts.

For example:

```solidity
// Assume that ExampleValueObject has been created and registered with the Controller under 'ExampleValueObject'

contract ExampleFactory is Controlled {
  function createExample() external returns (IExampleValueObject) {
    Delegator d = new Delegator(controller, 'ExampleValueObject');
    IExampleValueObject exampleValueObject = IExampleValueObject(d);
    exampleValueObject.initialize();
    return exampleValueObject;
  }
}

contract IExampleValueObject {
  function initialize() external;
  function get() external view returns (uint);
}

contract ExampleValueObject is DelegationTarget, IExampleValueObject {
  uint private value;

  function initialize() external {
    value = uint(42);
  }

  function get() external view returns (uint) {
    return value;
  }
}
```

The caller will use the Controller to lookup the contract factory then call the factory’s create method to create a new instance of a delegator pointing to the contract.

### Singletons

Singleton contracts are registered twice in the controller: the first being an instance of the contract and the second being an instance of a Delegator registered under the original name and pointing to the first instance. In this way the Delegator instance is the place of storage for the contract, while the actual contract is registered separately and can be swapped out for different behaviour.

### Upgrades

Augur is partially upgradeable. The majority of contracts can be swapped out at runtime by re-registering them in the Controller, but some core contracts such as Controller and Augur cannot be swapped out: changing these contracts would necessitate an entirely new app deployment.

It’s interesting to note that they plan on locking down the registry by disabling a [‘dev-mode’](https://github.com/AugurProject/augur-core/blob/7f3c79a5dd471a98df8f66a640902e063f15f796/source/contracts/Controller.sol#L6) in the Controller. At some point they will freeze the contracts in production and lock themselves out of the Controller. Afterwards, if they want to upgrade, they will need to deploy an entirely new version of the application.

### Colony

[Colony](https://colony.io/) is a platform for creating decentralized organizations. The code has recently been made public on Github under the [colonyNetwork](https://github.com/JoinColony/colonyNetwork) project. The project history began in early 2016.

Colony consists of about 14 smart contracts. The smart contracts use the [EtherRouter](https://github.com/ownage-ltd/ether-router) pattern to upgrade contracts. Conceptually, these contracts can be divided into those that concern the Colony Network as a whole, and those that concern an individual Colony. Concretely, the two groups are delineated by their inheritance hierarchy; all contracts inherit from either the [ColonyNetworkStorage](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyNetworkStorage.sol) or the [ColonyStorage](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyStorage.sol) contracts. The ColonyNetworkStorage and ColonyStorage contracts store all of the state variables for their respective descendants.

An individual Colony is defined by the contracts [Colony](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/Colony.sol), [ColonyTask](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyTask.sol), [ColonyFunding](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyFunding.sol), and [ColonyTransactionReviewer](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyTransactionReviewer.sol). These contracts all inherit from ColonyStorage.

The Colony Network is defined by two contracts: [ColonyNetwork](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyNetwork.sol) and [ColonyNetworkStaking](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyNetworkStaking.sol). These contracts inherit from ColonyNetworkStorage.

Each group of contracts has a [Resolver](https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/Resolver.sol) instance in which they are all registered. The Resolver acts as a function registry. An EtherRouter is bound to a Resolver and looks up function addresses to delegate to. In this way an EtherRouter will take on all the functions in a Resolver and the shape of the registered contracts.

```solidity
// Simplified for brevity

contract Resolver is DSAuth {
  struct Pointer { address destination; uint outsize; }
  mapping (bytes4 => Pointer) public pointers;

  function register(string signature, address destination, uint outsize) public auth {
    pointers[stringToSig(signature)] = Pointer(destination, outsize);
  }

  function lookup(bytes4 sig) public view returns(address, uint) {
    return (destination(sig), outsize(sig));
  }
}
```

This means that function signatures [must be unique](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/helpers/upgradable-contracts.js#L12) across any contracts that are registered with the Resolver. This also means that the registered contracts must share the same storage shape, because [EtherRouter](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/EtherRouter.sol) instances that point to this Resolver will take on the behaviour of all the registered contract functions.

The set of contracts for an individual colony are registered with a Resolver then that resolver is registered as a version in the ColonyNetwork contract using the [addColonyVersion()](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyNetwork.sol#L153) method.

```solidity
contract ColonyNetwork is ColonyNetworkStorage {
  function addColonyVersion(uint _version, address _resolver) public auth {
    colonyVersionResolver[_version] = _resolver;
    if (_version > latestColonyVersion) {
      latestColonyVersion = _version;
    }
  }
}
```

New Colonies are created through the ColonyNetwork contract using the [createColony()](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyNetwork.sol#L111) method. This method will create a new EtherRouter instance and register it under the desired name. The EtherRouter is then bound to the most recent Colony Resolver version.

```solidity
// Simplified for brevity

contract ColonyNetwork is ColonyNetworkStorage {
  function createColony(bytes32 _name) {
    var etherRouter = new EtherRouter();
    etherRouter.setResolver(colonyVersionResolver[latestColonyVersion]);
    _colonies[_name] = colony;
  }
}
```

### Deployment

Colony uses Truffle for contract deployment. The steps are as follows:

1. The Colony Network contracts are deployed:
    * ColonyNetwork
    * ColonyNetworkStaking
    * EtherRouter
    * Resolver

2. The ColonyNetwork and ColonyNetworkStaking contracts are registered with the Resolver

3. The EtherRouter is set to point to the Resolver and serves as the main point of contact for the Colony Network

4. The Colony contracts are deployed:
    * Colony
    * ColonyTask
    * ColonyFunding
    * ColonyTransactionReviewer

5. A new Resolver is created and each of the contracts from step 4 are registered.

6. The new Resolver is added to the Colony Network as the first Colony version.

### Storage

The first EtherRouter that is deployed becomes the main point of entry for the platform and will take on the storage shape and behaviour of the contracts in the first Resolver. The first resolver contains the Colony Network contracts and will therefore have the same shape as ColonyNetworkStorage.

The Colony Network creates new colonies by creating new EtherRouter instances that point to the latest version of the Resolvers. Each Colony can upgrade their contract versions independently.

### Upgrades

Colony is almost entirely upgradeable; the only exceptions are the EtherRouter and the Resolver.

To upgrade the Colony Network contracts the user would need to deploy and register the new contracts with the global Resolver. The global EtherRouter would immediately refer to the new code and the behaviour of the Colony Network would change.

To upgrade the Colony, ColonyTask, ColonyFunding or ColonyTransactionReviewer contracts the user would need to deploy and register the contracts with a new Resolver, then add that resolver as a new version in the Colony Network. They can then use the [ColonyNetwork#upgradeColony(...)](https://github.com/JoinColony/colonyNetwork/blob/82764b58a52c19326957316e46328662e3e80de7/contracts/ColonyNetwork.sol#L171) to upgrade their Colony to the new version.

### Summary

Both Augur and Colony rely on a generic proxy contract bound to a contract registry. Augur always uses the latest version of a contract, while Colony allows colonies to be individually versioned. Augur plans on locking down their contracts eventually, while Colony will remain upgradeable.

The contract registries reminded me of the [Service locator](https://martinfowler.com/articles/injection.html#UsingAServiceLocator) pattern; when an object wants to use a service it uses the service locator to retrieve the desired dependency. [Dependency injection](https://martinfowler.com/articles/injection.html#FormsOfDependencyInjection) is similar, but instead the service has all of it’s dependencies added to it by a container. [Aragon](https://aragon.one/) is a good example of constructor dependency injection. Aragon ‘apps’ declare their dependencies in a JSON file. When the app is deployed the Aragon OS ‘container’ injects the dependencies into the app smart contract. You can see how the Vault dependency is injected into the Finance app in the [contract initializer](https://github.com/aragon/aragon-apps/blob/c1182ccc0975a4f5e828eec4c81aa8a2c8baad45/apps/finance/contracts/Finance.sol#L114).

Another big takeaway for me was the complexity that delegates introduce. Developers must be very careful about how storage variables change! If the existing storage shape of a delegate doesn’t match it’s contract then the storage will be clobbered. Currently, there is no code to enforce these rules; only developer convention.

Diving into the code bases was a really interesting exercise. Thanks for reading!
