---
layout: default
group: fedg
title: Conventional notations used in this Guide
menu_title: Conventional notations used in this Guide
menu_order: 2
github_link: frontend-dev-guide/conventions.md
---

## Conventional notations for paths to modules and themes

Magento application components, including modules, themes, and language packages technically can be located anywhere under the Magento root directory. This refers to both, Magento default and custom components. 

The following relative paths are used for modules and themes:

**- `<theme_dir>`**

Theme directory. Usually used when talking about custom themes, or any theme in general.

Possible absolute path: `app/design/frontend/<Vendor>/<theme>`

**- `<module_dir>`**

Module directory. When talking about a particular Magento module, also notation similar to the following is used: `<Magento_Checkout_module_dir>`

Possible absolute path: `app/code/<Vendor>/<Module>`
For Magento modules, usually one of the following:

 - `app/code/Magento/<Module>`
  - `vendor/magento/module-<module>-<name>`