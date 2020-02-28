---
group: installation-guide
subgroup: 99_contrib
title: Update the Magento application
menu_title: Update the Magento application
menu_order: 2
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

This topic discusses how a contributing developer can update the Magento application without reinstalling it. To perform an upgrade if you're *not* a contributing developer, see [Updating the Magento application and components]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

To update the Magento software if you're a contributing developer:

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Save any changes you made to `composer.json` because the following steps will overwrite it:

   ```bash
   cd <magento_root>
   ```

   ```bash
   cp composer.json composer.json.old
   ```

1. Update your local repository to get the latest code:

   ```bash
   git pull origin develop
   ```

    {:.bs-callout-info}
   If `git pull origin develop` fails, see [troubleshooting](https://support.magento.com/hc/en-us/articles/360034229872).

1. Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.
1. Enter the following command:

   ```bash
   composer update
   ```

1. Update the Magento database:

   ```bash
   <magento_root>/bin/magento setup:upgrade
   ```

1. Clean the cache:

   ```bash
   bin/magento cache:clean
   ```
