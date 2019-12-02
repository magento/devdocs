---
group: javascript-developer-guide
title: Conventional notations used in this Guide
---

## Conventional notations for paths to modules and themes

Magento application components, including modules, themes, and language packages technically can be located anywhere under the Magento root directory. This refers to both Magento default and custom components.

The following relative paths are used for modules and themes:

**- `<theme_dir>`:**

[Theme](https://glossary.magento.com/theme) directory. Usually used when talking about custom themes, or any theme in general.

For Magento out of the box [frontend](https://glossary.magento.com/frontend) themes, usually one of the following:

-  `app/design/frontend/<Vendor>/<theme>`
-  `vendor/magento/theme-frontend-<theme>`

**- `<module_dir>`:**

Module directory. When talking about a particular Magento module, also notation similar to the following is used: `<Magento_Checkout_module_dir>`

For Magento modules, the absolute path is usually one of the following:

-  `app/code/<Vendor>/<Module>`
-  `vendor/magento/module-<module>-<name>`
