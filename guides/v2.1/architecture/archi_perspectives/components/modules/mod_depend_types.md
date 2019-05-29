---
group: architecture-guide
title: Module dependency types
---

## Module install order

Magento installs modules in the following order:

1. The module serving as a dependency for another module
2. The module dependent on it

## Two types of dependencies {#m2devgde-moddep-declare-dep}

There are two types of Magento [module](https://glossary.magento.com/module) dependencies: hard and soft.

### Hard dependencies

A module with a *hard dependency* on another module cannot function without the module it depends on. These modules:

* Contain code that directly uses logic from another module, such as class constants, static methods, public class properties, interfaces, and traits.
* Contain strings that include class names, method names, class constants, class properties, interfaces, and traits from another module.
* Deserializes an object declared in another module.
* Uses or modifies the database tables used by another module.

### Soft dependencies

A module with a *soft dependency* on another module can function properly without the other module, even if they have a dependency upon it. These modules:

* Directly check another module's availability.
* Extend another module's configuration.
* Extend another module's [layout](https://glossary.magento.com/layout).

{:.bs-callout .bs-callout-tip} 
If a module uses code from another module, it should declare the dependency explicitly.

## Inappropriate dependencies {#m2devgde-moddep-inapp-dep}

Avoid creating these dependencies:

* Circular (both direct and indirect)
* Undeclared
* Incorrect

## Dependencies between modules in different product layers {#m2devgde-moddep-diff-layer}

You can build dependencies between the modules belonging to different layers.

## Dependencies in the Framework layer {#m2devgde-moddep-frmwk-layer}

A module belonging to the Magento Framework can be used in the application layer by an explicit dependency.

{:.bs-callout .bs-callout-tip} 
In this case, using interfaces is preferable to using classes. You can build dependencies between classes in the Magento Framework even if they belong to different modules.

## Dependencies in the application layer {#m2devgde-moddep-app-layer}

A module belonging to the application layer cannot be used in the Magento Framework.

You can build dependencies between classes in the application layer, but these classes must belong to the same module. Dependencies between the modules of the application layer should be built only by the [service contract](https://glossary.magento.com/service-contract) or the service provider interface (SPI).

## Related topics {#m2arch-module-related}

[Module dependencies]({{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_depend.html)
