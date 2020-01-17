---
group: extensions
title: Install
permalink: extensions/vendor/amazon-pay/install/
---

To install an independent release:

1. Backup your `composer.json` file.

   ```bash
   cp composer.json composer.json.bak
   ```

1. Add the "edge" package to your `composer.json` file:

   ```bash
   composer require amzn/amazon-pay-and-login-magento-2-module-edge
   ```

1. Update the database schema and data:

   ```bash
   bin/magento setup:upgrade
   ```
