---
group: configuration-guide
title: config.php reference
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

## system

Contains array of system field configuration values.

```conf
'system'=> [
    'default' =>[
        'checkout' => [
            'cart' => [
                'delete_quote_after' => 31
            ]
        ]
    ]
]
```

## scopes

Contains array of scope configuration values.It has following subnodes.

*  `websites`: websites related configuration
*  `groups`: stores related configuration
*  `stores`: store views related configuration

```conf
'scopes' => [
  'websites' => [
    'admin' => [
      'website_id' => '0',
      'code' => 'admin',
      'name' => 'Admin',
      'sort_order' => '0',
      'default_group_id' => '0',
      'is_default' => '0'
    ]
  ],
  'groups' => [
    [
      'group_id' => '0',
      'website_id' => '0',
      'code' => 'default',
      'name' => 'Default',
      'root_category_id' => '0',
      'default_store_id' => '0'
    ]
  ],
  'stores' => [
    'admin' => [
      'store_id' => '0',
      'code' => 'admin',
      'website_id' => '0',
      'group_id' => '0',
      'name' => 'Admin',
      'sort_order' => '0',
      'is_active' => '1'
    ]
  ]
]
```

## modules

Contains array of modules with their status(enable/disable).If module is enabled, value is 1 otherwise value is 0.

```conf
'modules' => [
    'Magento_Store' => 1,
    'Magento_Theme' => 0,
    'Magento_Backend' => 0,
    'Magento_Eav' => 1
]
```

## themes

Contains array of values for theme configuration.

```conf
'themes' => [
  'frontend/Magento/luma' => [
    'parent_id' => 'Magento/blank',
    'theme_path' => 'Magento/luma',
    'theme_title' => 'Magento Luma',
    'is_featured' => '0',
    'area' => 'frontend',
    'type' => '0',
    'code' => 'Magento/luma'
  ]
]
```
