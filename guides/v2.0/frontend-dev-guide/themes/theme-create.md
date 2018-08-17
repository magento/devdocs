---
group: fedg
subgroup: A_Themes
title: Create a new storefront theme
menu_title: Create a new storefront theme
menu_order: 2
version: 2.0
redirect_from: /guides/v1.0/frontend-dev-guide/themes/theme-create.html
functional_areas:
  - Frontend
  - Theme
---

## What\'s in this topic   {#layout_theme_how-to_overview}

This topic discusses how to create the files that make up a theme, how to add a logo to a theme, and how to size images.



<div class="bs-callout bs-callout-info" id="info">
<p>A new theme you create is not applied for your store automatically. You need to apply it manually in the Admin panel. This procedure is described in the <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html">Apply and configure a theme in Admin</a> topic.</p>
</div>

## Prerequisites

1. For the sake of compatibility, upgradability, and easy maintenance, do not modify the out of the box Magento themes. To customize the design of your Magento store, create a new custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.
2. [Set]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html). The application mode influences the way {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} are cached by Magento. The recommendations about theme development we provide in this chapter are developer/default-mode specific.

## Create a storefront theme: walkthrough {#theme-gen-walkthrough}

The high-level steps required to add a new theme in the Magento system are the following:

1. Create a directory for the theme under `app/design/frontend/<your_vendor_name>/<your_theme_name>`.
2. Add a declaration file `theme.xml` and optionally create `etc` directory and create a file named `view.xml` to the theme directory.
3. Add a `composer.json` file.
4. Add `registration.php`.
3. Create directories for CSS, JavaScript, images, and fonts.
4. Configure your theme in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel.

## Recommended reading   {#theme-gen-read}

* <a href="{{ site.mage2000url }}app/code/Magento" target="_blank">Checklist of modules</a>
* <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html" target="_blank">Static view files processing</a>

## Create a theme directory {#layout_theme_how-to_dirs}

To create the directory for your theme:

1.	Go to `<your Magento install dir>/app/design/frontend`.

3.	Create a new directory named according to your vendor name: `/app/design/frontend/<Vendor>`.

4.	Under the vendor directory, create a directory named according to your theme.

<pre>
app/design/frontend/
├──&nbsp;&lt;Vendor&gt;/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──...&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;...
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;...
</pre>

The folder name conventionally matches naming used in the theme's code: any alphanumeric set of characters, as the vendor sees fit, is acceptable. This convention is merely a recommendation, so nothing prevents naming this directory in another way.

## Declare your theme {#fedg_create_theme_how-to_declare}

After you create a directory for your theme, you must create `theme.xml` containing at least the theme name and the parent theme name (if the theme <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from one). Optionally you can specify where the theme preview image is stored.

1. Add or copy from an existing `theme.xml` to your theme directory `app/design/frontend/<Vendor>/<theme>`

2. Configure it using the following example:

{% highlight xml %}
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
     <title>New theme</title> <!-- your theme's name -->
     <parent>Magento/blank</parent> <!-- the parent theme, in case your theme inherits from an existing theme -->
     <media>
         <preview_image>media/preview.jpg</preview_image> <!-- the path to your theme's preview image -->
     </media>
 </theme>
{% endhighlight %}

If you change the theme title or parent theme information in `theme.xml` after a theme was already [registered](#register_theme), you need to open or reload any {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} page for your changes to be saved in the database.

## Make your theme a Composer package (optional) {#fedg_create_theme_composer}

Magento default themes are distributed as <a href="https://getcomposer.org/" target="_blank">Composer</a> packages.

To distribute your theme as a package, add a `composer.json` file to the theme directory and register the package on a packaging server. A default public packaging server is <a href="https://packagist.org/" target="_blank" >https://packagist.org/</a>.

`composer.json` provides theme dependency information.

Example of a theme `composer.json`:

{% highlight json %}
{
    "name": "magento/theme-frontend-luma",
    "description": "N/A",
    "require": {
        "php": "~5.5.0|~5.6.0|~7.0.0",
        "magento/theme-frontend-blank": "100.0.*",
        "magento/framework": "100.0.*"
    },
    "type": "magento2-theme",
    "version": "100.0.1",
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
{% endhighlight %}

You can find details about the Composer integration in the Magento system in <a href="{{ page.baseurl }}/extension-dev-guide/build/composer-integration.html">Composer integration</a>.

## Add registration.php {#fedg_create_theme_reg}

To register your theme in the system, in your theme directory add a `registration.php` file with the following content:

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::THEME,
    'frontend/<Vendor>/<theme>',
    __DIR__
);

{% endhighlight %}

Where `<Vendor>` is your vendor name, `<theme>` is the theme code.

For illustration, see the <a href="{{ site.mage2000url }}app/design/frontend/Magento/luma/registration.php">registration.php</a> file of the Magento Luma theme.

## Configure images {#fedg_create_theme_how-to-images}

Product image sizes and other properties used on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} are configured in a `view.xml` configuration file. It is required for a theme, but is optional if exists in the parent theme.

If the product image sizes of your theme differ from those of the parent theme, or if your theme does not inherit from any theme, add `view.xml` using the following steps:

1.	Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the <a href="{{ page.baseurl }}/install-gde/prereq/apache-user.html">the Magento file system owner</a>.)

1.	Create the `etc` directory in your theme folder

2.	Copy `view.xml` from the `etc` directory of an existing theme (for example, from the Blank theme) to your theme's `etc` directory.

3.	Configure all storefront product image sizes in `view.xml`.
For example, you can make the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} grid view product images square by specifying a size of 250 x 250 pixels, here is how the corresponding configuration would look like:

{% highlight XML%}
...
    <image id="category_page_grid" type="small_image">
        <width>250</width>
        <height>250</height>
    </image>
...
{% endhighlight XML%}

For details about images configuration in `view.xml`, see the <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-images.html" target="_blank">Configure images properties for a theme</a> topic.

## Create directories for static files {#fedg_theme_how-to_static}

Your theme will likely contain several types of static files: styles, fonts, {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} and images.
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

In the <code>.../&lt;theme&gt;/web/images</code> you store the general theme related static files. For example, a theme logo is stored in <code>...&lt;theme&gt;/web/images</code>.
It is likely that your theme will also contain module-specific files, which are stored in the corresponding sub-directories, like <code>.../&lt;theme&gt;/&lt;Namespace_Module&gt;/web/css</code> and similar. Managing the module-specific theme files is discussed in the following sections of this Guide.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
<p>

During theme development, when you change any files stored here, you need to clear <code>pub/static</code> (preserving the `.htaccess` file in place) and <code>var/view_preprocessed</code> directories, and then reload the pages. Otherwise the old versions of files are displayed on the storefront.

</p></span>
</div>

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

In the Magento application, the default format and name of a logo image is `logo.svg`. When you put a `logo.svg` image in the conventional location, which is `<theme_dir>/web/images` directory, it is automatically recognized as theme logo. It is displayed in your store page header once the theme is <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html" target="_blank">applied</a>.

In your custom theme, you can use a logo file with a different name and format, but you might need to declare it.

The necessity of declaration depends on whether your theme has a <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html" target="_blank">parent</a> theme and its logo image. The following cases are possible:
<ul>
<li>
Your theme does not have a parent theme:
<ul>
<li> if your logo image name and format is default, <code>logo.svg</code>, there is no need to declare it; </li>
<li>if your logo image name or format is not default, you need to <a href="#logo_declare">declare it in layout</a>.</li>
</ul>
</li>
<li>Your theme has a parent theme:
<ul>
<li>if your theme logo image has the same name and format as the parent's theme logo, there is no need to declare it;</li>
<li>if your logo image has different name or format, declare it in {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}.</li>
</ul>
</li>
</ul>

## Declaring theme logo {#logo_declare}

To declare a theme logo, add an <a href="{{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> `<theme_dir>/Magento_Theme/layout/default.xml` layout.

For example, if your logo file is `my_logo.png` sized 300x300px, you need to declare it as follows:  

{% highlight xml %}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="logo">
            <arguments>
                <argument name="logo_file" xsi:type="string">images/my_logo.png</argument>
                <argument name="logo_img_width" xsi:type="number">300</argument>
                <argument name="logo_img_height" xsi:type="number">300</argument>
            </arguments>
        </referenceBlock>
    </body>
</page>		
{% endhighlight %}

Declaring the logo size is optional.

To learn more about theme layouts, refer to the <a href="{{ page.baseurl }}/frontend-dev-guide/layouts/layout-overview.html" target="_blank">Layout section</a> of this guide.

## What's next {#next}

### Theme registration {#register_theme}

Once you open the Magento Admin (or reload any  Magento Admin page) having added the theme files to the files system, your theme gets registered and added to the database.

### Applying a theme

For information on how to apply the theme for the storefront, see the [Apply and configure a theme in Admin]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html) topic.

## See also

 * [Uninstall a theme]({{ site.gdeurl }}install-gde/install/cli/install-cli-theme-uninstall.html)
