---
layout: default
group: extension-dev-guide
subgroup: 3_Build
title: Component registration
menu_title: Component registration
menu_order: 4
github_link: extension-dev-guide/composer-integration.md
redirect_from: /guides/v1.0/extension-dev-guide/composer-integration.html

---
##{{page.menu_title}}


Magento components, including modules, themes, and languages, must be registered in the Magento system through the Magento `ComponentRegistrar` class.

Each component must have a file called `registration.php` in its root directory. For example, here is the `registration.php` file for Magento's [AdminNotification module](https://github.corp.ebay.com/magento2/magento2ce/blob/develop/app/code/Magento/AdminNotification/registration.php). Depending on the type of component, registration is performed through `registration.php` by adding to it as follows:

###Modules

Modules are registered with:

     ComponentRegistrar::register(ComponentRegistrar::MODULE, '<VendorName_ModuleName>', __DIR__);

where &lt;VendorName> is the name of the company providing the module and &lt;ModuleName> is the name of the module.
     
#####Example
     ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);
<p>&nbsp;</p>


###Themes

Themes are registered with:

     ComponentRegistrar::register(ComponentRegistrar::THEME, '<area>/<vendor>/<theme name>', __DIR__);

where &lt;area> is the functional area of the module (frontend, controller, and so on.), &lt;vendor> is the name of the company providing the theme, and &lt;theme name> is the name of the theme.


#####Example
     ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Magento/luma', __DIR__);

<p>&nbsp;</p>


###Languages
Languages are registered with:

     ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, '<VendorName>_<packageName>', __DIR__);

where &lt;VendorName> is the name of the company providing the package and &lt;packageName> is the name of the package.

#####Example
     ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_de_de', __DIR__);

<p>&nbsp;</p>

###Invoke registration.php in composer.json

After you create your `registration.php` file and you are creating [your module's composer.json file](create_module.html#add-the-module8217s-composerjson-file), remember to invoke your `registration.php` file in the autoload section of `composer.json`:

     {
    "name": "Acme-vendor/bar-component",
    "autoload": {
        "psr-4": { "AcmeVendor\\BarComponent\\": "" },
        "files": [ "registration.php" ]
    }
}

<p>&nbsp;</p>

##Sample registration.php file

{% highlight php startinline=true %}
    <?php

\Magento\Framework\Component\ComponentRegistrar::register(
  \Magento\Framework\Component\ComponentRegistrar::MODULE,
  'Magento_AdminNotification',
  __DIR__
);

{%endhighlight %}

##Next

[Create a module](create_module.html)
