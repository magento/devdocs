---
layout: default
group: arch-guide
subgroup: Components
title: Module overview
menu_title: Module overview
menu_order: 3
level3_menu_node: level3child
level3_subgroup: modules
version: 2.1
github_link: architecture/archi_perspectives/components/modules/mod_intro.md
redirect_from:
  - /guides/v1.0/architecture/modules/mod_intro.html
  - /guides/v2.0/architecture/modules/mod_intro.html
---

## What is a Magento module? {#arch-modules-overview}

A <i>module</i> is a logical group -- that is, a directory containing blocks, controllers, helpers, models -- that are related to a specific business feature. In keeping with Magento's commitment to optimal modularity, a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} encapsulates one feature and has minimal dependencies on other modules.

Modules and themes are the units of customization in Magento. Modules provide business features, with supporting logic,  while themes strongly influence user experience and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} appearance. Both components have a life cycle that allows them to be installed, deleted, and disabled. From the perspective of both merchants and {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers, modules are the central unit of Magento organization.

The Magento Framework provides a set of core logic: {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} code, libraries, and the basic functions that are inherited by the modules and other components.

## Module purpose

The purpose of each module is to provide specific product features by implementing new functionality or extending the functionality of other modules. Each module is designed to function independently, so the inclusion or exclusion of a particular module does not typically affect the functionality of other modules.

## Module components

A module is a directory that contains the PHP and {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} files (blocks, controllers, helpers, models) that are related to a specific business feature, such as Shipping. Specifically, a Magento module is composed of these software components: <a href="{{page.baseurl}}/frontend-dev-guide/themes/theme-overview.html">themes</a>, <a href="{{page.baseurl}}/architecture/archi_perspectives/third-party-libs.html">libraries</a>, and <a href="{{page.baseurl}}/frontend-dev-guide/translations/xlate.html#m2devgde-xlate-languagepack">language packages</a>.

## Where do modules live?

Modules typically live in the `vendor` directory of a Magento installation, in a directory with the following PSR-0 compliant format: `vendor/<vendor>/<type>-<module-name>`, where `<type>` can be one of the following values:
 - **`module`** - for modules (`module-customer-import-export`)
 - **`theme`** - for frontend and admin themes (`theme-frontend-luma` or `theme-adminhtml-backend`)
 - **`language`** - for language packs (`language-de_de`)

For example, the Customer Import/Export module of Magento can be found at `vendor/magento/module-customer-import-export`.

But if you are creating a new module for distribution, you can just create the `app/code/<vendor>/<type>-<module-name>` directory and the required directories within it.

Inside this folder, you will find all the code related to this module, including the `etc/module.xml` file, which contains the name and version of the module, as well as any dependencies.

## Working with modules

Magento developers, administrators, and anyone building a Magento web site will want to review all relevant topics surrounding their particular goals and use cases.

See <a href="{{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html">PHP Developer Guide</a> for specific instructions on extending modules.

See
<a href="{{page.baseurl}}/frontend-dev-guide/bk-frontend-dev-guide.html">Frontend Developer Guide</a> for information on implementing themes and other components.

## Related topics {#arch-modules-related}

<a href="{{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_depend.html">Module dependencies</a>

<a href="{{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_and_areas.html">Modules and areas</a>

<a href="{{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_conventions.html">Module location and naming conventions</a>
