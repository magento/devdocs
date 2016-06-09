---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Add or update components
menu_title: Add or update components
menu_order: 5
menu_node: 
version: 2.1
github_link21: install-gde/install/cli/dev_add-update.md
---


A contributing developer updates components by specifying components and their versions in Magento's `composer.json`. 

To update components if you're *not* a contributing developer, see <a href="{{ site.gdeurl21 }}comp-mgr/bk-compman-upgrade-guide.html">Updating the Magento application and components</a>.

You can either add a `require` section to `composer.json` or you can use the `composer require` command as follows:

1.	Log in to the Magento server, or switch to, the Magento file system owner.
2.	Change to the directory to which you cloned the Magento application. For example,

		cd /var/www/magento2

You have the following options:

### Use the `composer require` command
Command usage:

	composer require <vendor>/<name>:<version>

For example,

	composer require example/module:1.0.0

Wait while Composer updates dependencies and installs the component.

### Add a `require` section to `composer.json`
Open `composer.json` in a text editor.

Add a `require` section like the following:

```JSON
	"require": {
		"<vendor>/<name>": "<version>",
		"<vendor>/<name>": "<version>"
	}
```

Save your changes to `composer.json`, exit the text editor, and enter `composer update`

### For more information
If you have issues, see <a href="https://getcomposer.org/doc/articles/troubleshooting.md" target="_blank">Composer troubleshooting</a>.

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
