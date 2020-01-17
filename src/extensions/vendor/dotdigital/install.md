---
group: extensions
title: Install
permalink: extensions/vendor/dotdigital/install/
---

To install an independent release:

1. Backup your `composer.json` file.

   ```bash
   cp composer.json composer.json.bak
   ```

1. Add the "edge" package to your `composer.json` file:

   ```bash
   composer require dotmailer/dotmailer-magento2-extension-package-edge
   ```

1. Update the database schema and data:

   ```bash
   bin/magento setup:upgrade
   ```
