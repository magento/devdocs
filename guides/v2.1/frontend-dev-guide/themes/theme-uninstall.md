---
layout: default  
group: fedg
subgroup: A_Themes
title: Uninstall a storefront theme
menu_title: Uninstall a storefront theme
menu_order: 2
version: 2.1
github_link: frontend-dev-guide/themes/theme-uninstall.md
---

## Overview

This topic describes to uninstall a storefront theme in Magento 2.

The way a theme should be uninstalled is defined by two factors:

* the way the theme was added: manually added (installed or created) or installed as composer package.
* the way Magento was installed: [using the source files from Github]({{page.baseurl}}install-gde/install/cli/install-cli-sample-data-clone.html) or [using Composer]({{page.baseurl}}install-gde/install/cli/install-cli-sample-data-composer.html). 

The following sections describe the flow for uninstalling themes in each case.

## Prerequisites 

1. [Set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html).
2. Make sure that the theme is not applied on the storefront. To do this, in the Admin panel navigate to **Content** > **Design** > **Configuration** and make sure that your custom theme is not applied for any store view.
2. Make sure that the theme is not defined as a parent for any registered theme. To do this, in the Admin panel, navigate to **Content** > **Design** > **Themes**. Make sure that your theme is not mentioned in the **Parent Theme** column. If it is mentioned, you need to uninstall the child theme first. 


## Uninstall a manually added theme

In case if your theme was created or installed manually, the uninstall procedure is the same, regardless the way Magento was installed.

To uninstall a manually added theme:

1. Navigate to the vendor directory where the theme was installed. The path would look like following:  `<Magento root dir>/app/design/frontend/<VendorName>`.
2. Remove the theme directory.
3. Remove the theme record from database. If you are using MySQL, run the following command to do this:

```
mysql -u <user> -p -e "delete from <dbname>.theme where theme_path ='<Vendor>/<theme>' AND area ='frontend' limit 1"
```
Where:

- `<user>`: your Magento database user name
- `<dbname>`: your Magento database name
- `<Vendor>/<theme>`: relative path to the theme directory

## Uninstall a theme package

The flow for uninstalling a theme that is Composer package is different depending on the way your Magento instance was installed.  

### Uninstall a theme package if your Magento was installed using Composer

If both the theme and the Magento instance were installed using Composer, you can use a special CLI command. Follow the instructions from the [Uninstall theme Composer package]({{page.baseurl}}install-gde/install/cli/install-cli-theme-uninstall.html) topic.

### Uninstall a theme package if your Magento was installed by cloning the repository

To uninstall a theme Composer package if your Magento instance was installed by cloning the git repository, you can also uninstall it using the CLI command, but having removed it from the list of dependencies first.

Take the following steps:

1. Open the `<Magento root dir>/composer.json` file.
2. Find a line with a reference to theme package and delete it. The reference would look like following:

   {%highlight json%}
   ...
   "require": {
    ...
       "<vendor>/<theme-name>": "<version>"
   },
   ...
   {%endhighlight%}
 
3. To update the project dependencies, run:  
 
    composer update

4. Use the `theme:uninstall` CLI command as described in the [Uninstall theme Composer package]({{page.baseurl}}install-gde/install/cli/install-cli-theme-uninstall.html) topic.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can use the Composer remove command to remove the dependency, but in that case you will also to delete theme record from database manually.
</div>