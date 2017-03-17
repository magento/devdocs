---
layout: default
group: config-guide
subgroup: 999_prod
title: Set up your production system
menu_title: Set up your production system
menu_node: 
menu_order: 23
level3_menu_node: level3child
level3_subgroup: setup
version: 2.2
github_link: config-guide/prod/prod_deploy-setup-prod.md
---

You can have one production system. All of the following must be true:

*	All Magento code is in source control in the same repository as the development and build systems
*	Make sure all of the following are _included_ in source control:

	*	`app/etc/config.php` 
	*	`generated` directory (and subdirectories)
	*	`pub/static` directory (and subdirectories)
*	The production system must be set for [production mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-production)

#### Related topics
*	[]()
*	[]()
*	[]()
