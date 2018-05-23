---
group: howdoi
title: Create a GitHub patch for a Composer installation
version: 2.2
github_link: howdoi/patch_from_github.md
functional_areas:
  - Install
  - System
  - Setup
---

Sometimes it takes a while for us to include a bug fix made on GitHub in a Magento 2 Composer release. In the meantime, you can create a patch from GitHub and use the `composer-patches` plugin to apply it to your Composer-based Magento 2 installation.

<div class="bs-callout bs-callout-warning" markdown="1">
Always perform comprehensive testing before deploying any unreleased patch.
</div>

## Create a patch

To create a patch file from a GitHub commit or pull request, append `.patch` to the url, [https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.patch](https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.patch).

<div class="bs-callout bs-callout-info" markdown="1">
You must change the paths in the patch file to correspond to the `vendor/***` directories.
</div>

## Apply a patch

1. Create a `patches/composer` directory.
1. Prepare your patch file so that the paths are relative to the `vendor/<VENDOR>/<PACKAGE>` directory. For example `vendor/magento/module-payment`.
1. Name the patch file appropriately and move it to the `patches/composer` directory.
2. Add the `cweagans/composer-patches` plugin to the `composer.json` file.

   ```bash
   composer require cweagans/composer-patches
   ```

1. Edit the `composer.json` file and add the following section, specifying the Composer package to apply the patch to, as well as a description of the patch and a reference to the file location:

   ```json
   "extra": {
        "magento-force": "override",
        "composer-exit-on-patch-failure": true,
        "patches": {
            "magento/module-payment": {
                "MAGETWO-56934: Checkout page freezes when ordering with Authorize.net with invalid credit card": "patches/composer/github-issue-6474.patch"
            }
        }
   }
   ```

2. Apply the patch.

   ```bash
   composer install
   ```

1. Update the `composer.lock` file. The lock file tracks which patches have been applied to each Composer package in an `extra > patches_applied` object.

   ```bash
   composer update <PACKAGE NAME>
   ```