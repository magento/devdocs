---
layout: default  
group: fedg
subgroup: A_Themes
title: Install a third-party storefront theme
menu_title: Install a a third-party storefront theme
menu_order: 2
version: 2.0
github_link: frontend-dev-guide/themes/theme-install.md
---

## What's in this topic

This topic describes how to install a third-party theme for a Magento 2 store.

To install a theme, you need to add its code to your Magento 2 instance code base, and then register it in the database. The way a theme is distributed determines how to do this:

- if a theme is just a set of files, for example an archive, add the theme manually.   
- if a theme is a composer package, install it using composer.
- if a theme is distributed as an extension, use the **Web Setup Wizard** in Magento Admin.

The following sections contain more installation about each installation flow.

## Prerequisites 

[Set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer or default [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). 

## Install a theme manually 

To install a theme manually:

1. Make sure that the directory structure you are copying is `<VendorName>/<theme>`. And all the [theme files]({{page.baseurl}}frontend-dev-guide/themes/theme-structure.html) are in the `<theme>` directory.

2. Copy this directory to the `<Magento root dir>/app/design/frontend` directory.

## Install a theme as composer package 

To install the theme as composer package, follow the instructions in the [Install extensions]({{page.baseurl}}cloud/howtos/install-components.html) topic.

## Install a theme as an extension

If a theme is distributed on [Magento Marketplace](https://marketplace.magento.com/), install it with **Web Setup Wizard**. For details, see [Install the Extension](http://docs.magento.com/marketplace/user_guide/quick-tour/install-extension.html).

## Register a theme 

After you create or install a theme, open the Magento Admin or reload any Magento Admin page. This way the theme gets registered and added to the database.

To make sure the theme is registered, in the Magento Admin navigate to **Content** > **Design** > **Themes**. If a theme is registered, it is displayed in the list of available themes.





