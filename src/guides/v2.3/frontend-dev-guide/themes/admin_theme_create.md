---
group: frontend-developer-guide
title: Create an Admin theme
functional_areas:
  - Frontend
  - Theme
---
## What's in this topic {#favicon-intro}

This topic describes how to create your custom theme for Magento Admin, referencing the similar [flow for creating a custom storefront theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html).

## Prerequisites

[Set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html). The application mode influences the way [static files](https://glossary.magento.com/static-files) are cached by Magento.

## Overview

To create a custom [Admin](https://glossary.magento.com/admin) theme, take the following steps:

1. [Create a theme directory.](#create_dir)
1. [Add a declaration `theme.xml`.](#declare_theme)
1. [Add `registration.php`.](#add_registry)
1. [Optionally add `composer.json`.](#make_composer)
1. [Optionally change theme logo.](#logo)

Each step is described further.

## Create a theme directory {#create_dir}

In the `app/design/adminhtml` directory create a new `<Vendor>/<admin_theme>` directory.

## Add a declaration `theme.xml` {#declare_theme}

In the theme directory, add `theme.xml` containing at least the theme name and the parent theme name (if the theme [inherits]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) from one). We recommend you to inherit from the default Magento Admin theme: `Magento/backend`.

Add or copy from an existing `theme.xml` to your theme directory `app/design/adminhtml/<Vendor>/<admin_theme>`.

Configure it using the following example (replace placeholders with your [theme](https://glossary.magento.com/theme) information):

```xml
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
     <title>%Theme title%</title> <!-- your theme's name -->
     <parent>%vendor_dir%/%parent_theme_dir%</parent> <!-- the parent theme. Example: Magento/backend -->
</theme>
```

If you change the theme title or parent theme information in `theme.xml` after a theme was already [registered](#register_theme), you need to open or reload any [Magento Admin](https://glossary.magento.com/magento-admin) page for your changes to be saved in the database.

## Add `registration.php` {#add_registry}

In your theme directory, create a `registration.php` file.
In this file, add the following code, having replaced placeholders with your theme information:

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
use \Magento\Framework\Component\ComponentRegistrar;
ComponentRegistrar::register(ComponentRegistrar::THEME, 'adminhtml/%vendor_dir/your_theme_dir%', __DIR__); // Example: 'adminhtml/Magento/backend'
```

## Optionally add `composer.json` {#make_composer}

See the [Make your theme a Composer package (optional)]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#fedg_create_theme_composer)

## Admin theme logo (optional) {#logo}

In the default `Magento/backend` theme `lib/web/images/magento-logo.svg` is used as theme logo.
To override it, in your theme directory, create a `web/images` sub-directory, and add your custom file named `magento-logo.svg`.
If you want to use the file with other name and/or format, you need to additionally declare it as described in [Declaring theme logo]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html#logo_declare).

To customize the Admin theme logo:

1. Create a new XML file in the theme named `app/design/adminhtml/<Vendor>/<theme>/Magento_Backend/layout/admin_login.xml`.

1. Add the following sample code to the new file.

   ```xml
   <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" layout="admin-login" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
       <body>
           <referenceBlock name="logo">
               <arguments>
                   <argument name="logo_image_src" xsi:type="string">images/custom-logo.svg</argument>
                   <argument name="logo_width" xsi:type="number">150</argument> <!-- Add custom logo width -->
                   <argument name="logo_height" xsi:type="number">80</argument> <!-- Add custom logo height -->
               </arguments>
           </referenceBlock>
       </body>
    </page>
   ```

1. Add your custom logo to the `app/design/adminhtml/<Vendor>/<theme>/web/images/` directory.

## Theme registration {#register_theme}

Once you open the Magento Admin (or reload any  Magento Admin page) having added the theme files to the files system, your theme gets registered and added to the database.

## Apply the Admin theme

See the [Apply a custom Admin theme topic]({{ page.baseurl }}/frontend-dev-guide/themes/admin_theme_apply.html).
