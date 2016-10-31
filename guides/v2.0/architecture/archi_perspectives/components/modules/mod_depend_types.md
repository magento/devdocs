---
layout: default
group: arch-guide
subgroup: Components
title: Module dependency types
menu_title: Module dependency types
menu_order: 7
level3_menu_node: level3child
level3_subgroup: modules
version: 2.0
github_link: architecture/archi_perspectives/components/modules/mod_depend_types.md
redirect_from: /guides/v1.0/architecture/modules/mod_depend_types.html
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

## Overview {#m2devgde-moddep-declare-dep}
There are two types of Magento module dependencies: hard and soft dependencies.

## Hard dependencies

Modules with a <i>hard dependency</i> on another module cannot function without the module it depends on. Specifically:

* The module contains code that directly uses logic from another module  (for example, the latter module's instances, class constants, static methods, public class properties, interfaces, and traits).

* The module contains strings that include class names, method names, class constants, class properties, interfaces, and traits from another module.

* The module deserializes an object declared in another module.

* The module uses or modifies the database tables used by another module.

## Soft dependencies

Modules with a  <i>soft dependency</i> on another module can function properly without the other module, even if it has a dependency upon it. Specifically:

* The module directly checks another module's availability.

* The module extends another module's configuration.

* The module extends another module's layout.

<div class="bs-callout bs-callout-warning" id="warning">
<p>Note: If a module uses code from another module, it should declare the dependency explicitly.
</p>
</div>

Magento installs modules in the following order:

1) the module serving as a dependency for another module

2) the module dependent on it

## Inappropriate dependencies {#m2devgde-moddep-inapp-dep}

Avoid creating the following dependencies:

* Circular (both direct and indirect)

* Undeclared

* Incorrect

## Dependencies between modules in different product layers {#m2devgde-moddep-diff-layer}

You can build dependencies between the modules belonging to different layers.

## Dependencies in the Framework layer {#m2devgde-moddep-frmwk-layer}

Modules belonging to the Magento Framework can be used in the application layer by an explicit dependency.

<div class="bs-callout bs-callout-info" id="info">
  <p>Note: In this case, using interfaces is preferable to using classes. </p>
  <p>You can build dependencies between classes in the Magento Framework  even if they belong to different modules.</p>
</div>

## Dependencies in the Application layer {#m2devgde-moddep-app-layer}
Modules belonging to the application layer cannot be used in the Magento Framework.

You can build dependencies between classes in the application layer, but these classes must belong to the same module. Dependencies between the modules of the application layer should be built only by the service contract or the service provider interface (SPI).

## Related topics {#m2arch-module-related}

<a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_depend.html">Module dependencies</a>
