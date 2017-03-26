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
*	Must have a compatible PHP version installed
*	Must have Composer installed

The build system does _not_ need any of the following:

*	Magento database connection
*	Magento software installed (only the code must be present)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The build machine can be on its own host or on the same host as an installed Magento system.
</div>

## Configure the build machine
The following sections discuss how to configure the build machine.

### Install Composer

{% include install/composer-clone.md %}

### Install PHP
To install PHP, see one of the following topics:

*	[CentOS]({{ page.baseurl }}install-gde/prereq/php-centos.html)
*	[Ubuntu]({{ page.baseurl }}install-gde/prereq/php-ubuntu.html)

### Set up the build system
To set up the build system:

1.	Log in to the build system as, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3  %}Magento file system owner{% endglossarytooltip %}. 
2.	Retrieve the Magento code from source control.

	If you use Git, use the following command:

		git clone [-b <branch name>] <repository URL>
2.	Change to the Magento root directory and enter:

		composer install
3.	Wait for Magento dependencies to update.
4.	If you use Git, open `.gitignore` in a text editor.
5.	Start each of the following lines with a `#` character to comment them out:

		# app/etc/config.php
		# pub/media/*
		# generated/*
		# pub/static/*
6.	Save your changes to `.gitignore` and exit the text editor.
7.	If you use Git, use the following commands to commit the change:

		git add .gitignore && git commit -m "Modify .gitignore for build and production"

#### Related topics
*	[Set up your development systems]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-dev.html)
*	[Set up your production system]({{ page.baseurl }}config-guide/prod/prod_deploy-setup-prod.html)

