---
group: software-update-guide
title: Upgrade using the custom script
functional_areas:
  - Upgrade
---

Upgrading your Magento installation with our script, which makes the upgrade process semi-automated, is the preferred method.

{:.bs-callout-info}
Use [the manual process] if you previously made updates to the same values that the upgrade script affects, because the script will override those values.

The upgrade script:

-  Updates Magento with the {{ page.guide_version }} requirements.
-  Backs up the `composer.json` file.
-  Specifies the new version of the Magento metapackage.
-  Updates the `"require-dev"` section in the `composer.json` file.
-  Adds `"Zend\\Mvc\\Controller\\": "setup/src/Zend/Mvc/Controller/"` to the `"autoload":"psr-4"` section in the `composer.json` file.
-  Backs up and updates the `magento/updater`, if it has been installed.
-  Updates the `"name"`, `"version"`, and `"description"` fields in the `composer.json` file.

## Before you begin

Refer to [Prerequisites].

If you need to upgrade PHP, do it before you run the script.

### Download the script

Download, or copy, the script file from the `magento/magento2` repo, [`/dev/tools/UpgradeScripts/pre_composer_update_{{ page.guide_version }}.php`][script].

### Show script options

```bash
php -f pre_composer_update_{{ page.guide_version }}.php -- --help
```

### Run the script

```bash
php -f pre_composer_update_{{ page.guide_version }}.php -- --root='<path/to/magento/install/dir>' --repo=https://repo.magento.com/ <options>
```

### Apply updates

```bash
composer update
```

### Clear caches and generated content

Clear the `var` and `generated` subdirectories:

```bash
rm -rf <Magento install dir>/var/cache/*
```

```bash
rm -rf <Magento install dir>/var/page_cache/*
```

```bash
rm -rf <Magento install dir>/generated/code/*
```

```bash
rm -rf <Magento install dir>/generated/metadata/*
```

{:.bs-callout-info}
If you use cache storage other than the filesystem, such as Redis or Memcached, you must manually clear the cache there too.

### Update the database schema and data

```bash
bin/magento setup:upgrade
```

### Disable maintenance mode

```bash
bin/magento maintenance:disable
```

### Restart Varnish

_Optional_—If you use Varnish for page caching, restart it:

```bash
service varnish restart
```

### Check your work

Open your storefront URL in a web browser to check whether the upgrade was successful. If your upgrade was unsuccessful, your storefront will not load properly.

If the application fails with a  `We're sorry, an error has occurred while generating this email.` error:

1. Reset [file system ownership and permissions] as a user with `root` privileges.
1. Clear these directories:
   -  `<magento_root>/var/cache`
   -  `<magento_root>/var/page_cache`
   -  `<magento_root>/generated/code`
   -  `<magento_root>/generated/metadata`
1. Check your storefront in your web browser again.

<!-- Link definitions -->

[file system ownership and permissions]: {{ page.baseurl }}/install-gde/prereq/file-system-perms.html
[Prerequisites]: cli-upgrade.html#prerequisites
[script]: https://raw.githubusercontent.com/magento/magento2/{{ page.guide_version }}/dev/tools/UpgradeScripts/pre_composer_update_{{ page.guide_version }}.php
[the manual process]: cli-upgrade.html
