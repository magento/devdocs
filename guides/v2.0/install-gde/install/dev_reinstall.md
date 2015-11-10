---
layout: default
group: install_cli 
subgroup: 99_contrib
title: TBD
menu_title: TBD
menu_order: 2
menu_node: 
github_link: install-gde/install/dev_reinstall.md
---


<h3 id="instgde-install-reinst-update-sys">Reinstall as a contributing developer</h3>
To reinstall the Magento software as a contributing developer:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-switch">switch to the Magento file system owner</a>).
3.	Make a backup copy of `composer.json` in your Magento installation directory:

		cd <your Magento install dir>
		cp composer.json composer.json.bak

4.	Open `composer.json` in a text editor.
5.	Locate the following line:

		 "require": {
        	"magento/product-community-edition": "<version>"
    	},

5.	Replace `<version>` with the version to which you want to upgrade, where `<version>` is the `magento/product-community-edition` version from <a href="http://packages.magento.com/#magento/product-community-edition" target="_blank">packages.magento.com</a>.
5.	Save your changes to `composer.json` and exit the text editor.
6.	Enter the following command:

		composer update

	Wait for dependencies to update.

4.	Install the Magento software:

	*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>