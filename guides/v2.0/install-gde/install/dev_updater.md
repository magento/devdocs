---
layout: default
group: install_pre
subgroup: T_Developer
title: Update components
menu_title: Update components
menu_order: 100
menu_node: 
github_link: install-gde/install/dev_updater.md
redirect_from: /guides/v2.0/install-gde/prereq/prereq_updater.html
---

Contributing developers update components by specifying components in Magento's `composer.json`. You *cannot* use the graphical Component Manager or System Upgrade utilities to do this.

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

#### Next step
<a href="{{ site.gdeurl }}install-gde/install/file-system-perms.html">Set file system ownership and permissions</a>
