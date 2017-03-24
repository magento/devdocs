---
layout: default
group: config-guide
subgroup: 999_prod
title: Set up your development systems
menu_title: Set up your development systems
menu_node: 
menu_order: 21
level3_menu_node: level3child
level3_subgroup: deploy-setup
version: 2.2
github_link: config-guide/prod/prod_deploy-setup-dev.md
---

You can have any number of development systems, provided the following is true of all of them:

*	They all run Magento 2.2 or later
*	All Magento code is under source control in the same repository as the build and production systems
*	Each development system should use either [default mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-default) or [developer mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-developer)
*	Make sure all of the following are _excluded_ from source control:

	*	`vendor` directory (and subdirectories)
	*	`generated` directory (and subdirectories)
	*	`pub/static` directory (and subdirectories)
	*	`app/etc/env.php` file
*	Make sure `app/etc/config.php` is _included_ in source control

If you use Git, Magento's `.gitignore` provides all of the preceding.

#### Next step
[Set up a build system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-build.html)