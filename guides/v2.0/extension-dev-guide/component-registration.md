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


Magento components (modules, themes, languages) are 






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