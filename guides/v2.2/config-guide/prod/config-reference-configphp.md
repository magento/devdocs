---
group: config-guide
subgroup: 07_conf
title: config.php reference
menu_title: config.php reference
menu_order: 5800
menu_node:
level3_menu_node: level3child
level3_subgroup: config-ref
version: 2.2
github_link: config-guide/prod/config-reference-configphp.md
functional_areas:
  - Configuration
  - System
  - Setup
---

The `config.php` file contains the following sections:

| Name      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `system`  | The system configurations required for static content deployment.                   |
| `scopes`  | The list of stores, store groups and websites with related information.             |
| `i18n`    | All inline translation data. Reading from this section is currently not supported.  |
| `modules` | The list of enabled and disabled modules.                                           |
| `themes`  | The configuration of installed themes.                                              |
