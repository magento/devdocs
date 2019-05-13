---
group: installation-guide
subgroup: 99_contrib
title: Add or update components
menu_title: Add or update components
menu_order: 5
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

A contributing developer updates components by specifying components and their versions in Magento's `composer.json`.

To update components if you're *not* a contributing developer, see [Updating the Magento application and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

You can either add a `require` section to `composer.json` or you can use the `composer require` command as follows:

1. Log in to the Magento server, or switch to, the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}.
2. Change to the directory to which you cloned the Magento application. For example,

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

Wait while {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} updates dependencies and installs the component.

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

### For more information

If you have issues, see [Composer troubleshooting](https://getcomposer.org/doc/articles/troubleshooting.md){:target="_blank"}.

<!-- ABBREVIATIONS -->

If you have issues, see [Composer troubleshooting](https://getcomposer.org/doc/articles/troubleshooting.md){:target="_blank"}.
