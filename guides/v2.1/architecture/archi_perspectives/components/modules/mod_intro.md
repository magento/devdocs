---
group: architecture-guide
title: Module overview
menu_title: Module overview
---

## What is a Magento module? {#arch-modules-overview}

A *module* is a logical group -- that is, a directory containing blocks, controllers, helpers, models -- that are related to a specific business feature. In keeping with Magento's commitment to optimal modularity, a [module](https://glossary.magento.com/module) encapsulates one feature and has minimal dependencies on other modules.

Modules and themes are the units of customization in Magento. Modules provide business features, with supporting logic,  while themes strongly influence user experience and [storefront](https://glossary.magento.com/storefront) appearance. Both components have a life cycle that allows them to be installed, deleted, and disabled. From the perspective of both merchants and [extension](https://glossary.magento.com/extension) developers, modules are the central unit of Magento organization.

The Magento Framework provides a set of core logic: [PHP](https://glossary.magento.com/php) code, libraries, and the basic functions that are inherited by the modules and other components.

## Module purpose

The purpose of each module is to provide specific product features by implementing new functionality or extending the functionality of other modules. Each module is designed to function independently, so the inclusion or exclusion of a particular module does not typically affect the functionality of other modules.

## Module components

A module is a directory that contains the PHP and [XML](https://glossary.magento.com/xml) files (blocks, controllers, helpers, models) that are related to a specific business feature, such as Shipping. Specifically, a Magento module is composed of these software components: [themes]({{page.baseurl}}/frontend-dev-guide/themes/theme-overview.html), [libraries]({{page.baseurl}}/architecture/archi_perspectives/third-party-libs.html), and [language packages]({{page.baseurl}}/frontend-dev-guide/translations/xlate.html#m2devgde-xlate-languagepack).

## Where do modules live?

Modules typically live in the `vendor` directory of a Magento installation, in a directory with the following PSR-0 compliant format: `vendor/<vendor>/<type>-<module-name>`, where `<type>` can be one of the following values:
 - **`module`** - for modules (`module-customer-import-export`)
 - **`theme`** - for frontend and admin themes (`theme-frontend-luma` or `theme-adminhtml-backend`)
 - **`language`** - for language packs (`language-de_de`)

For example, the Customer Import/Export module of Magento can be found at `vendor/magento/module-customer-import-export`.

But if you are creating a new module for distribution, you can just create the `app/code/<vendor>/<type>-<module-name>` directory and the required directories within it.

Inside this folder, you will find all the code related to this module, including the `etc/module.xml` file, which contains the name and version of the module, as well as any dependencies.

## Working with modules

Magento developers, administrators, and anyone building a Magento website will want to review all relevant topics surrounding their particular goals and use cases.

See [PHP Developer Guide]({{page.baseurl}}/extension-dev-guide/bk-extension-dev-guide.html) for specific instructions on extending modules 


See [Frontend Developer Guide]({{page.baseurl}}/frontend-dev-guide/bk-frontend-dev-guide.html) for information on implementing themes and other components.

## Related topics {#arch-modules-related}

[Module dependencies]({{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_depend.html)

[Modules and areas]({{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_and_areas.html)

[Module location and naming conventions]({{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_conventions.html)

