---
layout: default  
group: fedg
subgroup: A_Themes
title: Install a ready to go storefront theme
menu_title: Install a ready to go storefront theme
menu_order: 2
version: 2.0
github_link: frontend-dev-guide/themes/theme-install.md
---

## Overview

This topic describes to install a third-party theme for Magento 2 store.

To install a theme, you need to add its code to your Magento 2 instance code base and register it in the database. There are two ways to do this, depending on the way the theme is distributed:

- if the theme is just a set of files, for example an archive, you need to add it manually.   

- if the theme is a composer package, you need to install using composer.

Both ways are described in the following sections.

## Install a theme manually 

To install a theme manually:

1. Make sure that structure is following: <VendorName>/<theme_code>/.

<pre>
&lt;VendorName&gt;/
├──&lt;theme_dir&gt;/
</pre>

2. Copy this directory to the `<Magento root dir>/app/design/frontend` directory.

## Install a theme as composer package 

To install the theme as composer package, follow the instructions in the [Install extensions]({{page.baseurl}}cloud/howtos/install-components.html) topic.

## Register a theme 

Once you open the Magento Admin (or reload any Magento Admin page) having added the theme files to the files system, your theme gets registered and added to the database.

To make sure the theme is registered, in the Magento Admin navigate to **Content** > **Design** > **Themes**. If the theme is registered, it is displayed in the list of available themes.



