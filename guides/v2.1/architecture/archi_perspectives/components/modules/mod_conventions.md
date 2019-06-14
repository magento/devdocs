---
group: architecture-guide
title: Module conventions
menu_title: Module conventions
---

## Overview {#m2arch-module-conventions-overview}

Modules must conform to Magento conventions regarding code location and file names. Keep these conventions in mind when working with or developing modules.

Be sure to research additional Magento conventions, beyond those applicable to modules. For  more information, see [Coding Standards]({{page.baseurl}}/coding-standards/bk-coding-standards.html).

## Module location conventions {#m2arch-module-conventions-location}

The following table shows the *recommended* location within the Magento file system for specific components.

(A [module](https://glossary.magento.com/module) must include a `registration.php` file in its root folder.)

We refer to a component's root directory as the top-level directory in which you develop component code. Typically, this directory is located in one of the following directories relative to the Magento root directory:

|Entity|Location|
|---|---|
|Code base of your custom module|`/app/code/<Vendor>/<Module>`|
|Custom theme files (storefront)|`/app/design/frontend/<Vendor>/<theme>`|
|Custom theme files (modules)|`<Module>/<theme>`|
|If you want to use a library|`/lib/<Vendor_Library>`|
