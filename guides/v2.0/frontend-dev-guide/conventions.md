---
group: fedg
title: Conventional notations used in this Guide
menu_title: Conventional notations used in this Guide
menu_order: 2
version: 2.0
github_link: frontend-dev-guide/conventions.md
functional_areas:
  - Frontend
---

## Conventional notations for paths to modules and themes

Magento application components, including modules, themes, and language packages technically can be located anywhere under the Magento root directory. This refers to both, Magento default and custom components. 

The following relative paths are used for modules and themes:

**- `<theme_dir>`**

{% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}Theme{% endglossarytooltip %} directory. Usually used when talking about custom themes, or any theme in general.

For Magento out of the box {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} themes, the absolute path usually is one of the following:

 - `app/design/frontend/Magento/<theme>`
 - `vendor/magento/theme-frontend-<theme>`

**- `<module_dir>`**

Module directory. When talking about a particular Magento module, also notation similar to the following is used: `<Magento_Checkout_module_dir>`


For Magento modules, usually one of the following:

 - `app/code/Magento/<Module>`
 - `vendor/magento/module-<module>-<name>`
