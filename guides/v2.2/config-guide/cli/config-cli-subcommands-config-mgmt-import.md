---
layout: default
group: config-guide
subgroup: 04_CLI
title: Import data from configuration files
menu_title: Import data from configuration files
menu_node:
level3_menu_node: level3child
level3_subgroup: cli-config-mgmt
menu_order: 253
version: 2.2
github_link: config-guide/cli/config-cli-subcommands-config-mgmt-import.md
---

{::options syntax_highlighter="rouge" /}

When you set up a production system in the Magento 2.2 [split deployment model]({{ page.baseurl }}config-guide/prod/prod_deploy-over.html), you must _import_ configuration settings into the database. These settings include configuration paths and valuees, websites, stores, store views, and themes.

After importing websites, stores, store views, and themes, you can create product attributes and apply them to websites, stores, and store views, on the production system.

## First steps {#first}

{% include install/first-steps-cli.html %}

## Import configuration data
On your production system, run the following command to import data from deployment configuration files to the database:

    bin/magento app:config:import [-n, --no-interaction]

Use the optional `[-n, --no-interaction]` flag to import data without any interaction.

If you enter `magento app:config:import` without the optional flag, you're required to confirm the changes.

For example, if configuration file contains one new website and one new store, the following  message is displayed:

    These Websites will be created: New Website
    These Groups will be created: New Store
    Do you want to continue [yes/no]?

To continue the import, enter `yes`.

If deployment configuration files contain some data to import, a message similar to the following is displayed:

    Start import:
    Some information about importing

If deployment configuration files do not contain any data to import, a message similar to the following is displayed:

    Start import:
    Nothing to import

## What we import
The following sections discuss in detail what data we import.

### System configuration
_System_ configuration values cannot be imported directly into Magento because they require some pre- and post-processing actions. (These values are in the `system` array in `config.php` or `env.php`.)

For example, the value of the configuration path `web/secure/base_url` must be validated with backend models.

#### Backend models
Backend models are the mechanism for processing changes in system configuration. You define backend modules in `<module_name>/adminhtml/system.xml`.

All backend models must extend the [`Magento\Framework\App\Config\Value`]({{ site.mage2200url }}lib/internal/Magento/Framework/App/Config/Value.php){:target="_blank"} class.

When we import backend models, we don't save the configuration values.

### Websites, stores, and store groups configuration
We import the following types of configurations. (These configurations are under the `scopes` array in `config.php`.)

*   `websites`: websites related configuration
*   `groups`: stores related configuration
*   `stores`: store views related configuration

The preceding configurations can be imported in the following modes:

*   `create`: `config.php` contains new entities (`websites`, `groups`, `stores`) that are absent in the production environment
*   `update`: `config.php` contains entities (`websites`, `groups`, `stores`) that are different from the production environment
*   `delete`: `config.php` does _not_ contain entities (`websites`, `groups`, `stores`) that are present on production environment

<div class="bs-callout bs-callout-info" id="info" markdown="1">
We don't import the root category associated with stores. You must associate a root category with a store using the Magento Admin.
</div> 

### Theme configuration
Theme configuration includes all themes registered in your Magento system; the data comes directly from the `theme` database table. (Theme configuration is in the `themes` array in `config.php`.)

#### Structure of theme data
The key of array is full theme path: `area` + `theme path`

For example, `frontend/Magento/luma`. `frontend` is area and `Magento/luma` is theme path.

The value of array is data about theme: code, title, path, parent id and etc.

Full example:

```php
'frontend/Magento/luma' => 
   array (
      'parent_id' => 'Magento/blank',
      'theme_path' => 'Magento/luma',
      'theme_title' => 'Magento Luma',
      'is_featured' => '0',
      'area' => 'frontend',
      'type' => '0',
      'code' => 'Magento/luma',
),
``` 
    
<div class="bs-callout bs-callout-info" id="info" markdown="1">
*   _Theme registration_. If a theme data is defined in `config.php` but the theme's source code is  not present in the file system, the theme is ignored (that is, not registered).
*   _Theme removal_. If a theme is not present in `config.php` but the source code is present on the file system, the theme is not removed.
</div> 

#### For more information
*   [Deployment general overview]({{ page.baseurl }}config-guide/prod/prod_deploy-over.html)
*   [`magento app:config:dump`]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-config-mgmt-export.html)

