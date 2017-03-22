---
layout: default
group: config-guide
subgroup: 999_prod
title: Set up your build system
menu_title: Set up your build system
menu_node: 
menu_order: 22
level3_menu_node: level3child
level3_subgroup: deploy-setup
version: 2.2
github_link: config-guide/prod/prod_deploy-setup-build.md
---

You can have one build system that meets the following requirements:

*	All Magento code is under source control in the same repository as the development and production systems
*	Make sure all of the following are _included_ in source control:

	*	`app/etc/config.php` 
	*	`generated` directory (and subdirectories)
	*	`pub/static` directory (and subdirectories)
*	Must have a compatible PHP version installed:

	*	[CentOS]({{ page.baseurl }}install-gde/prereq/php-centos.html)
	*	[Ubuntu]({{ page.baseurl }}install-gde/prereq/php-ubuntu.html)
*	Must have Composer installed

The build system does _not_ need any of the following:

*	Magento database connection
*	Magento software installed (only the code must be present)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The build machine can be on its own host or on the same host as an installed Magento system.
</div>

{% include install/composer-clone.md %}

## Configure the build machine

To configure a build machine:

1.	Retrieve the Magento code from source control.

	If you use Git, use the following command:

		git clone [-b <branch name>] <repository URL>
2.	Change to the Magento root directory and enter:

		composer install
3.	Wait for Magento dependencies to update.
4.	If you use Git, open `.gitignore` in a text editor.
5.	Start each of the following lines with a `#` character to comment them out:

		# generated/*
		# pub/static/*
6.	Save your changes to `.gitignore` and exit the text editor.

#### Related topics
*	[]()
*	[]()
*	[]()

