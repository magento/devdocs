---
layout: default
group: arch-guide
subgroup: Components
title: Module conventions
menu_title: Module conventions
menu_order: 5
level3_menu_node: level3child
level3_subgroup: modules
version: 2.0
github_link: architecture/archi_perspectives/components/modules/mod_conventions.md
redirect_from:
  - /guides/v1.0/architecture/modules/mod_conventions.html
  - /guides/v2.0/architecture/modules/mod_conventions.html
---

## Overview {#m2arch-module-conventions-overview}

Modules must conform to Magento conventions regarding code location and file names. Keep these conventions in mind when working with or developing modules.

Be sure to research additional Magento conventions, beyond those applicable to modules. For  more information, see <a href="{{page.baseurl}}coding-standards/bk-coding-standards.html">Coding Standards</a>.

## Module location conventions {#m2arch-module-conventions-location}

The following table shows the *recommended* location within the Magento file system for specific components.

(A module must include a `registration.php` file in its root folder.)

We refer to a component's root directory as the top-level directory in which you develop component code. Typically, this directory is located in one of the following directories relative to the Magento root directory:

|Entity|Location|
|---|---|
|Code base of your custom module|`/app/code/<Vendor>/<Module>`|
|Custom theme files (storefront)|`/app/design/frontend/<Vendor>/<theme>`|
|Custom theme files (modules)|`<Module>/<theme>`|
|If you want to use a library|`/lib/<Vendor_Library>`|
