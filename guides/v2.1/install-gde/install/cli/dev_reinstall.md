---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Reinstall the Magento software
menu_title: Reinstall the Magento software
menu_order: 200
menu_node: 
version: 2.1
github_link21: install-gde/install/cli/dev_reinstall.md
---

A contributing developer reinstalls Magento by updating `composer.json` to specify the Magento product version and component versions desired and runs `composer update`. 

To reinstall the Magento software as a contributing developer:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl21 }}install-gde/prereq/file-sys-perms-over.html">>switch to the Magento file system owner</a>.
3.	Make a backup copy of `composer.json` in your Magento installation directory:

		cd <your Magento install dir>
		cp composer.json composer.json.bak

4.	Open `composer.json` in a text editor.
5.	Locate the following line:

		 "require": {
        	"magento/product-community-edition": "<version>"
    	},

5.	Replace `<version>` with the version to which you want to upgrade, where `<version>` is the product version to use. 
	
	(The product version is in the format `2.0.x`)
<!-- is the `magento/product-community-edition` version from -->.
5.	Save your changes to `composer.json` and exit the text editor.
6.	Enter the following command:

		composer update

	Wait for dependencies to update.

4.	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli.html">Install the Magento software</a>.

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
