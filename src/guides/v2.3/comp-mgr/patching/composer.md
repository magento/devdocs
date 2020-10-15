---
group: software-update-guide
title: Apply patches using Composer
functional_areas:
  - Upgrade
---


{:.bs-callout-warning}
Always perform comprehensive testing before deploying any custom patch.

{.:procedure}
To apply a custom patch using Composer:

1. Open your command line application and navigate to your project directory.
1. Add the `cweagans/composer-patches` plugin to the `composer.json` file.

   ```bash
   composer require cweagans/composer-patches
   ```

1. Edit the `composer.json` file and add the following section to specify:
   -  **Module:** *\"magento/module-payment\"*
   -  **Title:** *\"MAGETWO-56934: Checkout page freezes when ordering with Authorize.net with invalid credit card\"*
   -  **Path to patch:** *\"patches/composer/github-issue-6474.diff\"*

   For example:

   ```json
     "extra": {
         "composer-exit-on-patch-failure": true,
         "patches": {
             "magento/module-payment": {
                 "MAGETWO-56934: Checkout page freezes when ordering with Authorize.net with invalid credit card": "patches/composer/github-issue-6474.diff"
             }
         }
     }
   ```

    If a patch affects multiple modules, you must create multiple patch files targeting multiple modules.

1. Apply the patch. Use the `-v` option only if you want to see debugging information.

   ```bash
   composer -v install
   ```

1. Update the `composer.lock` file. The lock file tracks which patches have been applied to each Composer package in an object.

   ```bash
   composer update --lock
   ```
