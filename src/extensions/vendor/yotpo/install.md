---
group: extensions
title: Install
permalink: extensions/vendor/yotpo/install/
---

To install an independent release:

1. Backup your `composer.json` file.

   ```bash
   cp composer.json composer.json.bak
   ```

1. Add the "edge" package to your `composer.json` file :

   ```bash
   composer require yotpo/magento2-module-yotpo-reviews-bundle-edge
   ```

1. Update the database schema and data:

   ```bash
   bin/magento setup:upgrade
   ```
