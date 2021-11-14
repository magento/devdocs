---
group: software-update-guide
title: Add or update components
menu_title: Add or update components
menu_order: 5
menu_node:
functional_areas:
  - Upgrade
redirect_from: /guides/v2.4/install-gde/install/cli/dev_add-update.html
---

A contributing developer updates components by specifying components and their versions in Magento's `composer.json`.

To update components if you are *not* a contributing developer, see [Updating the Magento application and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

You can either add a `require` section to `composer.json` or you can use the `composer require` command as follows:

1. Log in to the Magento server, or switch to, the [file system owner](https://glossary.magento.com/magento-file-system-owner).
1. Change to the directory to which you cloned the Magento application. For example,

   ```bash
   cd /var/www/magento2
   ```

You have the following options:

### Get available module versions

Command usage:

```bash
composer show --all <vendor>/<name>
```

For example,

```bash
composer show --all example/module
```

### Use the `composer require` command to install

Command usage:

```bash
composer require <vendor>/<name>:<version>
```

For example:

```bash
composer require example/module:1.0.0
```

Wait while [Composer](https://glossary.magento.com/composer) updates dependencies and installs the component.

### Add a `require` section to `composer.json`

Open `composer.json` in a text editor.

Add a `require` section like the following:

```json
"require": {
  "<vendor>/<name>": "<version>",
  "<vendor>/<name>": "<version>"
}
```

Save your changes to `composer.json`, exit the text editor, and enter `composer update`

{:.ref-header}
Related topics

If you have issues, see [Composer troubleshooting](https://getcomposer.org/doc/articles/troubleshooting.md).

<!-- ABBREVIATIONS -->

If you have issues, see [Composer troubleshooting](https://getcomposer.org/doc/articles/troubleshooting.md).
