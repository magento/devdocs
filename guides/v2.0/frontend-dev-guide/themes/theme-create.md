---
layout: default  
group: fedg
subgroup: A_Themes
title: Create a theme
menu_title: Create a theme
menu_order: 2
github_link: frontend-dev-guide/themes/theme-create.md
redirect_from: /guides/v1.0/frontend-dev-guide/themes/theme-create.html
---

<h2 id="layout_theme_how-to_overview">What's in this topic</h2>

This topic discusses how to create the files that make up a theme, how to add a logo to a theme, and how to size images.

<h3>Contents</h3>

- <a href="#layout_theme_how-to_dirs">Create a theme directory</a>
- <a href="#fedg_create_theme_how-to_declare">Declare your theme</a>
- <a href="#fedg_create_theme_composer">Make your theme a Composer package (optional)</a>
- <a href="#fedg_create_theme_reg">Add <code>registration.php</code></a>
- <a href="#fedg_create_theme_how-to-images">Configure images</a>
- <a href="#fedg_theme_how-to_static">Create directories for static files</a>
- <a href="#fedg_theme_how-to_structure">Your theme directory structure now</a>
- <a href="#logo_declare">Declaring theme logo</a>



<h2 id="layout_theme_how-to_dirs">Create a theme directory</h2>

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

<h2 id="fedg_create_theme_how-to_declare">Declare your theme</h2>

After you create a directory for your theme, you must create `theme.xml` containing at least the theme name and the parent theme name (if the theme <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from one). Optionally you can specify where the theme preview image is stored.

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


<h2 id="fedg_create_theme_composer">Make your theme a Composer package (optional)</h2>


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
        "magento/theme-frontend-blank": "1.0.0-beta",
        "magento/framework": "1.0.0-beta",
        "magento/magento-composer-installer": "*"
    },
    "type": "magento2-theme",
    "version": "1.0.0-beta",
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

You can find details about the Composer integration in the Magento system in <a href="{{site.gdeurl}}extension-dev-guide/composer-integration.html">Composer integration</a>.

<h2 id="fedg_create_theme_reg">Add registration.php</h2>

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

For illustration, see the <a href="{{site.mage2000url}}app/design/frontend/Magento/luma/registration.php">registration.php</a> file of the Magento Luma theme.


<h2 id="fedg_create_theme_how-to-images">Configure images</h2>

Product image sizes and other properties used on the storefront are configured in a `view.xml` configuration file. It is required for a theme, but is optional if exists in the parent theme.

If the product image sizes of your theme differ from those of the parent theme, or if your theme does not inherit from any theme, add `view.xml` using the following steps:

1.	Log in to your Magento server as a user with permissions to create directories and files in the Magento installation directory. (Typically, this is the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">the Magento file system owner</a>.)

1.	Create the `etc` directory in your theme folder

2.	Copy `view.xml` from the `etc` directory of an existing theme (for example, from the Blank theme) to your theme's `etc` directory.

3.	Configure all storefront product image sizes in `view.xml`.
For example, you can make the category grid view product images square by specifying a size of 250 x 250 pixels, here is how the corresponding configuration would look like:

{% highlight XML%}
...
    <image id="category_page_grid" type="small_image">
        <width>250</width>
        <height>250</height>
    </image>
...
{% endhighlight XML%}

For details about images configuration in `view.xml`, see the <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-images.html" target="_blank">Configure images properties for a theme</a> topic.

<h2 id="fedg_theme_how-to_static">Create directories for static files</h2>

Your theme will likely contain several types of static files: styles, fonts, JavaScript and images.
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

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p>In the <code>.../&lt;theme&gt;/web/images</code> you store the general theme related static files. For example, a theme logo is stored in <code>...&lt;theme&gt;/web/images</code>.
It is likely that your theme will also contain module-specific files, which are stored in the corresponding sub-directories, like <code>.../&lt;theme&gt;/&lt;Namespace_Module&gt;/web/css</code> and similar. Managing the module-specific theme files is discussed in the following sections of this Guide.</p></span>
</div>


<h2 id="fedg_theme_how-to_structure">Your theme directory structure now</h2>

At this point your theme file structure looks as follows:

<pre>
app/design/frontend/&lt;Vendor&gt;/
├──&nbsp;&lt;theme&gt;/
│&nbsp;&nbsp;&nbsp;├──&nbsp;etc/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;view.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;web/
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;images
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├──&nbsp;logo.svg
│&nbsp;&nbsp;&nbsp;├──&nbsp;theme.xml
│&nbsp;&nbsp;&nbsp;├──&nbsp;composer.json
</pre>



<h2 id="theme_logo">Theme logo</h2>

In the Magento application, the default format and name of a logo image is <code>logo.svg</code>. When you put a <code>logo.svg</code> image in the conventional location, which is <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/images</code> directory, it is automatically recognized as theme logo. It is displayed in your store page header once the theme is <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html" target="_blank">applied</a>.

In your custom theme, you can use a logo file with a different name and format, but you might need to declare it. 

The necessity of declaration depends on whether your theme has a <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">parent</a> theme and its logo image. The following cases are possible:
<ul>
<li>
Your theme does not have a parent theme:
<ul>
<li> if your logo image name and format is default, <code>logo.svg</code>, there is no need to declare it; </li>
<li>if you logo image name or format is not default, you need to <a href="#logo_declare">declare it in layout</a>.</li>
</ul>
</li>
<li>Your theme has a parent theme:
<ul>
<li>if your theme logo image has the same name and format as the parent's theme logo, there is no need to declare it;</li>
<li>if your logo image has different name or format, declare it in layout.</li>
</ul>
</li>
</ul>

<h3 id="logo_declare">Declaring theme logo</h3>

To declare a theme logo, add an <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_Theme/layout/default.xml</code> layout. 

For example, if your logo file is <code>my_logo.png</code> sized 300x300px, you need to declare it as follows:  

{% highlight xml %}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd">
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

To learn more about theme layouts, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">Layout section</a> of this guide.

<!--

Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>

-->
