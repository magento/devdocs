---
layout: default  
group: fedg 
subgroup: A_Themes
title: Create a custom Admin theme
menu_title: Create a custom Admin theme
menu_order: 8
github_link: frontend-dev-guide/themes/admin_theme_create.md
---
<h2 id="favicon-intro">What's in this topic</h2>

This topic describes how to create your custom theme for Magento Admin, referencing the similar [flow for creating a custom storefront theme]({{site.gdeurl}}frontend-dev-guide/themes/theme-create.html).

**Contents**

* TOC
{:toc}

## Prerequisites 

[Set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). The application mode influences the way static files are cached by Magento. 

## Create an Admin theme

To create a custom Admin theme, take the following steps:

1. [Create a theme directory.](#create_dir)
2. [Add a declaration `theme.xml`.](#declare_theme)
3. [Add `registration.php`.](#add_registry)
4. [Optionally add `composer.json`.](#make_composer)
5. [Optionally change theme logo.](#logo)

Each step is described further.

### Create a theme directory {#create_dir}
In the `app/design/adminhtml` directory create a new `<Vendor>/<admin_theme>` directory.

### Add a declaration `theme.xml` {#declare_theme}

In the theme directory, add `theme.xml` containing at least the theme name and the parent theme name (if the theme [inherits]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) from one). We recommend you to inherit from the default Magento Admin theme: `Magento/backend`.

Add or copy from an existing `theme.xml` to your theme directory `app/design/adminhtml/<Vendor>/<admin_theme>`.

Configure it using the following example (replace placeholders with your theme information):

{%highlight xml%}
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
     <title>%Theme title%</title> <!-- your theme's name -->
     <parent>%vendor_dir%/%parent_theme_dir%</parent> <!-- the parent theme. Example: Magento/backend -->
 </theme>

If you change the theme title or parent theme information in `theme.xml` after a theme was already [registered](#register_theme), you need to open or reload any Magento Admin page for your changes to be saved in the database.

{%endhighlight%}

### Add `registration.php` {#add_registry}
In your theme directory, create a `registration.php` file.
In this file, add the following code, having replaced placeholders with your theme information:

{%highlight php%}
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::THEME,
    'adminhtml/%vendor_dir/your_theme_dir%', // Example: 'adminhtml/Magento/backend'
    __DIR__
);  
{%endhighlight%}

### Optionally add `composer.json` {#make_composer}
See the [Make your theme a Composer package (optional)]({{page.baseurl}}frontend-dev-guide/themes/theme-create.html#fedg_create_theme_composer)


### Admin theme logo (optional) {#logo}

In the default `Magento/backend` theme `lib/web/images/magento-logo.svg` is used as theme logo. 
To override it, in your theme directory, create a `web/images` sub-directory, and add your custom file named `magento-logo.svg`. 
If you want to use the file with other name and/or format, you need to additionally declare it as described in [Declaring theme logo]({{page.baseurl}}frontend-dev-guide/themes/theme-create.html#logo_declare).


### Theme registration {#register_theme}

Once you open the Magento Admin (or reload any  Magento Admin page) having added the theme files to the files system, your theme gets registered and added to the database.

## Apply the Admin theme

See the [Apply a custom Admin theme topic]({{page.baseurl}}frontend-dev-guide/themes/admin_theme.html).

