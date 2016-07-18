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

This topic describes how to create your custom theme for Magento Admin, mostly referencing the the very similar [flow for creating a custom storefront theme]({{site.gdeurl}}frontend-dev-guide/themes/theme-create.html).

**Contents**

* TOC
{:toc}

## Prerequisites 

[Set]({{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html) your Magento application to the developer [mode]({{page.baseurl}}config-guide/bootstrap/magento-modes.html). The application mode influences the way static files are cached by Magento. 

## Create an Admin theme: Overview

To create a custom Admin theme, take the following steps:

1. Create a theme directory: in the `app/design/adminhtml` directory create a new `<Vendor>/<admin_theme>` directory.

2. Declare your theme. After you create a directory for your theme, you must create `theme.xml` containing at least the theme name and the parent theme name (if the theme [inherits]({{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html) from one). We recomend you to inherit from the default Magento Admin theme: `Magento/backend`.

Add or copy from an existing `theme.xml` to your theme directory `app/design/adminhtml/<Vendor>/<admin_theme>`.

Configure it using the following example:

{%highlight xml%}
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
     <title>New theme</title> <!-- your theme's name -->
     <parent>Magento/backend</parent> <!-- the parent theme -->
 </theme>

{%endhighlight%}


3. [Make your theme a Composer package (optional)]({{site.gdeurl}}frontend-dev-guide/themes/theme-create.html#fedg_create_theme_composer)

4. Add registration.php
Example of the registration.php file for the Admin theme:

{%highlight php%}
<?php
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::THEME,
    'adminhtml/Magento/backend',
    __DIR__
);
{%endhighlight%}

5. Admin theme logo.

In the default Magento/backend theme the lib/web/images/magento-logo.svg is used as theme logo. 
To override this logo in your theme, in your theme directory, create a `web/images` sub-directory, and add your custom file named `magento-logo.svg`. 
If you want to use the file with other name and/or formar, you need to additionally declare it as described in [Declaring theme logo]({{site.gdeurl}}frontend-dev-guide/themes/theme-create.html#logo_declare).

6. What’s next
See the [Apply a custom Admin theme topic]({{site.gdeurl}}frontend-dev-guide/themes/admin_theme.html).
<p class="q">Uninstall a theme </p>
