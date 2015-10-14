---
layout: default
group: extension-dev-guide
subgroup: 2_Prepare
title: Component registration
menu_title: Component registration
menu_order: 3
github_link: extension-dev-guide/composer-integration.md
redirect_from: /guides/v1.0/extension-dev-guide/composer-integration.html

---
##{{page.menu_title}}


Magento components (modules, themes, languages) are registered in the Magento system through the Magento ComponentRegistrar class. 

Each component must have a file called `registration.php` in their root directory. Depending on the type of component, registration is performed through registration.php by adding to it as follows:

###Modules
     ComponentRegistrar::register(ComponentRegistrar::MODULE, '<VendorName>_<ModuleName>', __DIR__);

     
For example
ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Magento_AdminNotification', __DIR__);
Themes should be registered using
ComponentRegistrar::register(ComponentRegistrar::THEME, '<area>/<vendor>/<theme name>', __DIR__);
For example
ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Magento/luma', __DIR__);
Languages should be registered using
ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, '<VendorName>_<packageName>', __DIR__);
For example
ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_de_de', __DIR__);
Libraries should be registered using
ComponentRegistrar::register(ComponentRegistrar::LIBRARY, '<library name>', __DIR__);
For example
ComponentRegistrar::register(ComponentRegistrar::LIBRARY, 'magento/framework', __DIR__);
Also, each component's composer.json file will invoke this file in the autoload section as follow
{
    "name": "foo-vendor/bar-component",
    "autoload": {
        "psr-4": { "FooVendor\\BarComponent\\": "" },
        "files": [ "registration.php" ]
    }
}



##Registration.php


    <?php
	/**
 	* Copyright © 2015 Magento. All rights reserved.
 	* See COPYING.txt for license details.
 	*/
	\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Magento_AdminNotification',
    __DIR__
	);