---
group: howdoi
subgroup: Applying patches to Magento 2 from github
title: Applying patches to Magento 2 from github
menu_title: Applying patches to Magento 2 from github
menu_node: parent
menu_order: 1
version: 2.1
github_link: howdoi/patch_from_github.md
---

## Applying patches to Magento 2 from github
There are occasions when a core bug has been fixed in GitHub but it has not yet been released via a composer release.
It is possible with the help of a composer plugin to include any patch from GitHub into composer project. 
Please note that care must be taken when adding an unreleased patch and detailed testing should be completed before deployment. 

### Generating a patch from GitHub

To create a patch file from a Github commit or PR, append `.patch` to the url, [for example](https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.patch).
Note that you will need to change the paths in the patch file to correspond to the `vendor/***` directories.

### Apply a patch using the composer-patches plugin

1.	Create a `patches/composer` directory. This will house patches that are to be applied by composer.
2.	Prepare your patch file so that the paths are relative to the `vendor/<VENDOR>/<PACKAGE>` directory (e.g, vendor/magento/module-payment).
3.	Name the patch file appropriately and move it into the `patches/composer` directory.
4.	Run this command in the root of your local project: `composer require cweagans/composer-patches`
5.	Edit the composer.json file in the root of your Magento installation and add the following section, specifying the Composer package to apply the patch to, as well as a description of the patch and a reference to the file location:
    
    ```
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
    
6.	Run `composer install` to apply the patch.
7.	Run `composer update <PACKAGE NAME>` (e.g. `composer update magento/module-payment`) to update the composer lock file. The lock file tracks which patches have been applied to each composer package in an extra > patches_applied object.
