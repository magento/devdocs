---
group: frontend-developer-guide
title: Create a new storefront theme
functional_areas:
  - Frontend
  - Theme
---

This topic discusses how to create the files that make up a theme, how to add a logo to a theme, and how to size images.

 {:.bs-callout-info}
A new theme you create is not applied for your store automatically. You need to apply it manually in the Admin panel. This procedure is described in the [Apply and configure a theme in Admin]({{page.baseurl}}/frontend-dev-guide/themes/theme-apply.html) topic.

## Prerequisites

1. For the sake of compatibility, upgradability, and easy maintenance, do not modify the out of the box Magento themes. To customize the design of your Magento store, create a new custom [theme](https://glossary.magento.com/theme).
1. [Set]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html). The application mode influences the way [static files](https://glossary.magento.com/static-files) are cached by Magento. The recommendations about theme development we provide in this chapter are developer/default-mode specific.

## Create a storefront theme: walkthrough {#theme-gen-walkthrough}

The high-level steps required to add a new theme in the Magento system are the following:

1. Create a directory for the theme under `app/design/frontend/<your_vendor_name>/<your_theme_name>`.
1. Add a declaration file `theme.xml` and optionally create `etc` directory and create a file named `view.xml` to the theme directory.
1. Add a `composer.json` file.
1. Add `registration.php`.
1. Create directories for CSS, JavaScript, images, and fonts.
1. Configure your theme in the [Admin](https://glossary.magento.com/admin) panel.

## Recommended reading

*  [Checklist of modules]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento){:target="_blank"}
*  [Static view files processing]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html)

## Create a theme directory

To create the directory for your theme:

1. Go to `<magento_root>/app/design/frontend`.

1. Create a new directory named according to your vendor name: `/app/design/frontend/<Vendor>`.

1. Under the `<vendor>` directory, create a directory named according to your theme.

   <pre>
    app/design/frontend/
    ├──&nbsp;&lt;Vendor&gt;/
    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──...&lt;theme&gt;/
    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;...
    │&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;...
   </pre>

The folder name conventionally matches naming used in the theme's code: any alphanumeric set of characters, as the vendor sees fit, is acceptable. This convention is merely a recommendation, so nothing prevents naming this directory in another way.

## Declare your theme {#fedg_create_theme_how-to_declare}

After you create a directory for your theme, you must create `theme.xml` containing at least the theme name. Optionally, you can specify the parent theme name (if the theme [inherits]({{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html) from one) and, if necessary, where the theme preview image is stored.

1. Add or copy from an existing `theme.xml` file to your theme directory `app/design/frontend/<Vendor>/<theme>`.

1. Configure it using the following example:

   ```xml
   <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
      <title>New theme</title> <!-- your theme's name -->
      <parent>Magento/blank</parent> <!-- the parent theme, in case your theme inherits from an existing theme -->
      <media>
         <preview_image>media/preview.jpg</preview_image> <!-- the path to your theme's preview image -->
      </media>
   </theme>
   ```

   If you do not have a preview image for your theme, remove the `<media>` node:

   ```xml
   <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
         <title>New theme</title> <!-- your theme's name -->
         <parent>Magento/blank</parent> <!-- the parent theme, in case your theme inherits from an existing theme -->
   </theme>
   ```

If you change the theme title or parent theme information in `theme.xml` after a theme was already [registered](#register_theme), you need to open or reload any [Magento Admin](https://glossary.magento.com/magento-admin) page for your changes to be saved in the database.

## Make your theme a Composer package {#fedg_create_theme_composer}

Magento default themes are distributed as [Composer](https://getcomposer.org/){:target="_blank"} packages.

To distribute your theme as a package, add a `composer.json` file to the theme directory and register the package on a packaging server. A default public packaging server is [https://packagist.org/](https://packagist.org/){:target="_blank"}.

The `composer.json` file provides theme dependency information. Refer to a current `theme.xml` file for the correct dependencies and their versions. If your parent theme is something other than `Magento/blank`, you may need additional modules in the `"require"` section.

Example of a theme `composer.json` file:

```json
{
    "name": "magento/theme-frontend-luma",
    "description": "N/A",
    "config": {
        "sort-packages": true
    },
    "require": {
        "php": "~7.2.0||~7.3.0",
        "magento/framework": "*",
        "magento/theme-frontend-blank": "*"
    },
    "type": "magento2-theme",
    "license": [
        "OSL-3.0",
        "AFL-3.0"
    ],
    "autoload": {
        "files": [
            "registration.php"
        ]
    }
}
```

You can find details about the Composer integration in the Magento system in [Composer integration]({{page.baseurl}}/extension-dev-guide/build/composer-integration.html).

## Add registration.php {#fedg_create_theme_reg}

To register your theme in the system, add a `registration.php` file in your theme directory with the following content:

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/<Vendor>/<theme>', __DIR__);
```

Where `<Vendor>` is your vendor name and `<theme>` is the theme code.

For illustration, see the [registration.php]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/luma/registration.php){:target="_blank"} file in the Magento Luma theme.

## Configure images {#fedg_create_theme_how-to-images}

Product image sizes and other properties used on the [storefront](https://glossary.magento.com/storefront) are configured in a `view.xml` configuration file. It is required for a theme, but is optional if exists in the parent theme.

If the product image sizes of your theme differ from those of the parent theme, or if your theme does not inherit from any theme, add `view.xml` using the following steps:

1. Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/apache.html).)

1. Create the `etc` directory in your theme folder.

1. Copy the `view.xml` file from the `etc` directory of the parent theme or copy it from the Blank theme. For example, copy `theme-frontend-blank/etc/view.xml` to your theme's `etc` directory.

1. Configure all storefront product image sizes in the `view.xml` file. For example, you can make the [category](https://glossary.magento.com/category) grid view product images square by specifying a size of 250 x 250 pixels:

   ```xml
     <image id="category_page_grid" type="small_image">
         <width>250</width>
         <height>250</height>
     </image>
   ```

For details about images configuration in the `view.xml` file, see the [Configure images properties for a theme]({{page.baseurl}}/frontend-dev-guide/themes/theme-images.html) topic.

## Create directories for static files {#fedg_theme_how-to_static}

Your theme will likely contain several types of static files:

*  Styles
*  Fonts
*  [JavaScript](https://glossary.magento.com/javascript)
*  Images

Each type should be stored in a separate sub-directory of `web` in your theme folder:

<pre>
app/design/&lt;area&gt;/&lt;Vendor&gt;/&lt;theme&gt;/
├──&nbsp;web/
│&nbsp;├──&nbsp;css/
│&nbsp;│&nbsp;├──&nbsp;source/&nbsp;
│&nbsp;├──&nbsp;fonts/
│&nbsp;├──&nbsp;images/
│&nbsp;├──&nbsp;js/
</pre>

In the `.../<theme>/web/images` directory, you store the general theme-related static files. For example, a theme logo is stored in `...<theme>/web/images`.

It is likely that your theme will also contain module-specific files, which are stored in the corresponding sub-directories, like `.../<theme>/<Namespace_Module>/web/css` and similar. Managing the module-specific theme files is discussed in the following sections of this guide.

 {:.bs-callout-info}
When you change files stored here during theme development, you need to clear the `pub/static` and `var/view_preprocessed` directories, and then reload the pages. Otherwise, the old versions of files are displayed on the storefront.

### To clear the `pub/static` directory:

```bash
rm -rf <magento_root>/pub/static/*
```

### To clear the `var/view_preprocessed` directory:

```bash
rm -rf <magento_root>/var/view_preprocessed/*
```

## Your theme directory structure now {#fedg_theme_how-to_structure}

At this point your theme file structure looks as follows:

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;etc/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;view.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;images
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;logo.svg
│&nbsp;&nbsp;&nbsp;├──&nbsp;registration.php
│&nbsp;&nbsp;&nbsp;├──&nbsp;theme.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;composer.json
</pre>

## Theme logo {#theme_logo}

In the Magento application, the default format and name of a logo image is `logo.svg`. When you put a `logo.svg` image in the conventional location, which is the `<theme_dir>/web/images` directory, it is automatically recognized as the theme logo. It is displayed in your store page header once the theme is [applied]({{page.baseurl}}/frontend-dev-guide/themes/theme-apply.html).

In your custom theme, you can use a logo file with a different name and format, but you might need to declare it.

The necessity of declaration depends on whether your theme has a [parent]({{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html) theme and its logo image. The following cases are possible:

*  Your theme does not have a parent theme:
   *  If your logo image name and format uses the default naming convention (`logo.svg`), there is no need to declare it.
   *  If your logo image name or format does not use the default naming convention, you need to [declare it in layout](#logo_declare).
*  Your theme has a parent theme:
   *  If your theme logo image has the same name and format as the parent's theme logo, there is no need to declare it.
   *  If your logo image has a different name or format, declare it in the [layout](https://glossary.magento.com/layout).

## Declaring theme logo {#logo_declare}

To declare a theme logo, add an [extending]({{page.baseurl}}/frontend-dev-guide/layouts/layout-extend.html) `<theme_dir>/Magento_Theme/layout/default.xml` layout.

For example, if your logo file is `my_logo.png` sized 300x300px, you need to declare it as follows:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="logo">
            <arguments>
                <argument name="logo_file" xsi:type="string">images/my_logo.png</argument>
                <argument name="logo_width" xsi:type="number">300</argument>
                <argument name="logo_height" xsi:type="number">300</argument>
                <argument name="logo_alt" xsi:type="string">Logo name</argument>
            </arguments>
        </referenceBlock>
    </body>
</page>
```

Declaring the logo size is optional.

To learn more about theme layouts, refer to the [Layout section]({{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html) of this guide.

## Troubleshooting {#trouble}

When your theme changes are not visible even after clearing the cache, try redeploying your static files using the `bin/magento setup:static-content:deploy` command, or add the `-f` argument to force deploy static content in any deployment mode in case you are not in production mode.

 {:.bs-callout-info}
Running this command with the `-f` argument can fix issues regarding deployment of static content, but removes **all** symlinks and deploys the actual static content files.

## What's next {#next}

### Theme registration {#register_theme}

After adding your theme files to the file system and opening the Magento Admin (or reloading any Magento Admin page), your theme gets registered and added to the database. If a theme is removed, the default theme will automatically be used, but the theme's database record is not automatically removed.

### Applying a theme

For information on how to apply the theme for the storefront, see the [Apply and configure a theme in Admin]({{page.baseurl}}/frontend-dev-guide/themes/theme-apply.html) topic.

## See also

*  [Uninstall a theme]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
