---
layout: default
group: extension-dev-guide
subgroup: 03_Build
title: Register your component
menu_title: Register your component
menu_order: 4
github_link: extension-dev-guide/build/component-registration.md
---

##{{page.menu_title}}

#### Contents

*   [Registration overview](#register-overview)
*   [Register modules](#register-modules)
*   [Register themes](#register-themes)
*   [Register language packages](#register-lagpacks)
*   [Invoke `registration.php` in `composer.json` with autoload](#register-autoload)
*   [Sample `registration.php` file](#register-sample)

## Registration overview {#register-overview}
Magento components, including modules, themes, and language packages, must be registered in the Magento system through the Magento `ComponentRegistrar` class.

Each component must have a file called `registration.php` in its root directory. For example, here is the `registration.php` file for Magento's [AdminNotification module]({{ site.mage2100url }}app/code/Magento/AdminNotification/registration.php). Depending on the type of component, registration is performed through `registration.php` by adding to it as follows:

## Register modules {#register-modules}
Register modules with:

     ComponentRegistrar::register(ComponentRegistrar::MODULE, '<VendorName_ModuleName>', __DIR__);

where &lt;VendorName> is the name of the company providing the module and &lt;ModuleName> is the name of the module.

Do not use "Ui" for your custom module name because the <code>%Vendor%_Ui</code> notation, required when specifying paths, might cause issues.

###Example
    use \Magento\Framework\Component\ComponentRegistrar;
    ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);

##Register themes {#register-themes}
Register themes with:

     ComponentRegistrar::register(ComponentRegistrar::THEME, '<area>/<vendor>/<theme name>', __DIR__);

where &lt;area> is the functional area of the module (frontend, controller, and so on.), &lt;vendor> is the name of the company providing the theme, and &lt;theme name> is the name of the theme.


###Example
     ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Magento/luma', __DIR__);

<p>&nbsp;</p>


##Register language packages {#register-lagpacks}
Register language packages with:

     ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, '<VendorName>_<packageName>', __DIR__);

where &lt;VendorName> is the name of the company providing the package and &lt;packageName> is the name of the package.

###Example
     ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_de_de', __DIR__);

<p>&nbsp;</p>

##Invoke `registration.php` in `composer.json` with autoload {#register-autoload}
After you create your `registration.php` file and you are creating [your component's composer.json file]({{ site.gdeurl21 }}extension-dev-guide/build/composer-integration.html), invoke your `registration.php` file in the `autoload` section of `composer.json`:

     {
    "name": "Acme-vendor/bar-component",
    "autoload": {
        "psr-4": { "AcmeVendor\\BarComponent\\": "" },
        "files": [ "registration.php" ]
    }
}

<p>&nbsp;</p>

##Sample `registration.php` file {#register-sample}

{% highlight php startinline=true %}
<?php

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);
?>
{%endhighlight %}

####Next
[URN schema validation]({{ site.gdeurl21 }}extension-dev-guide/build/XSD-XML-validation.html)
