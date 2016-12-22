---
layout: default
group: arch-guide
subgroup: Components
title: Module dependencies
menu_title: Module dependencies
menu_order: 6
level3_menu_node: level3child
level3_subgroup: modules
version: 2.0
github_link: architecture/archi_perspectives/components/modules/mod_depend.md
redirect_from:
  - /guides/v1.0/architecture/modules/mod_depend.html
  - /guides/v2.0/architecture/modules/mod_depend.html
---

## Overview {#m2devgde-moddep-intro}

A *software dependency* identifies  one software component's reliance on another for proper functioning. A core principle of Magento architecture is the **minimization of software dependencies**. Instead of being closely interrelated with other modules, modules are optimally designed to be <i>loosely coupled</i>. Loosely coupled modules require little or no knowledge of other modules to perform their tasks.

Each Magento module is responsible for a unique feature. In practice, this means that:

* Several modules cannot be responsible for one feature.

* One module cannot be responsible for several features.

* Module dependencies on other modules must be declared explicitly. You must also declare any dependency upon other components (for example, a theme, language package, or library).

* Removing or disabling a module does not result in disabling other modules.

## What components can modules depend upon?

Although Magento architecture favors loosely coupled software components, modules can contain dependencies upon these software components:

* other modules

* PHP extensions

* libraries (either Magento Framework library or third party libraries)

<div class="bs-callout bs-callout-warning" id="warning">
<p>Note: You can lose the historical information contained in a module if the module is removed or disabled. We recommend alternative storage of module information before you remove or disable a module.</p></div>

## Managing module dependencies

At a high level, there are three main steps for managing module dependencies:

1. Name and declare the module in the `module.xml` file.

2. Declare any dependencies that the module has (whether on other modules or on a different component) in the module's `composer.json` file.

3. (*Optional*) Define the desired load order of config files and `.css` files in the `module.xml` file.

Example: Module A declares a dependency upon Module B. Thus, in Module A's `module.xml` file, Module B is listed in the &lt;sequence> list, so that B's files are loaded before A's. Additionally, you must declare a dependency upon Module B in A's `composer.json` file. Furthermore, in the <a href="{{page.baseurl}}config-guide/config/config-php.html">deployment configuration</a>, Modules A and B must both be defined as enabled.

## Related topics {#m2arch-module-related}

<a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>

<a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_depend_types.html">Types of module dependencies</a>
