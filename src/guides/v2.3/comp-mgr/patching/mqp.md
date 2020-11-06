---
group: software-update-guide
title: Apply patches using Magento Quality Patches Tool (MQP)
functional_areas:
  - Upgrade
---

The [Magento Quality Package (MQP) package][] delivers individual patches developed by Magento and allows you to apply, revert, and view general information about all individual patches that are available for the installed version of {{ site.data.var.ee }} or {{ site.data.var.ce }}. See the [Apply Patches]({{ site.baseurl }}/cloud/project/project-patch.html) topic in the _Cloud Guide_ for details on installing and using  MQP for {{ site.data.var.ece }}.

{:.bs-callout-warning}
We do not recommend using the MQP package to apply large numbers of patches because it increases the complexity of your code, which makes upgrading to a new version of Magento more difficult.

#### Install the MQP package

{:.bs-callout-info}
If it is not already installed, you must install [Git](https://github.com/git-guides/install-git) or [Patch](https://man7.org/linux/man-pages/man1/patch.1.html) before installing the MQP package.
Add the `magento/quality-patches` Composer package to your `composer.json` file:

```bash
composer require magento/quality-patches
```

#### View individual patches

To view the list of individual patches available for your version of Magento:

```bash
./vendor/bin/magento-patches status
```

You will see output similar to the following:

```terminal
╔════════════════╤═════════════════════════════════════════════════╤══════════╤═════════════╤═════════════════════════════════╗
║ Id             │ Title                                           │ Type     │ Status      │ Details                         ║
╠════════════════╪═════════════════════════════════════════════════╪══════════╪═════════════╪═════════════════════════════════╣
║ MAGECLOUD-5069 │ FPC is getting disabled during deployments      │ Optional │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-page-cache    ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MCLOUD-5650    │ Hold deployment config after reading from file  │ Optional │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - magento/framework            ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MCLOUD-5684    │ Pagination Not working - product_list_limit=all │ Optional │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-elasticsearch ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MCLOUD-5837    │ Fix load balancer issue                         │Deprecated│ Applied     │ Recommended replacement: MC-1   ║
║                │                                                 │          │             │ Affected components:            ║
║                │                                                 │          │             │  - magento/framework            ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ BUNDLE-2554    │ Set Payment info bug                            │ Optional │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - amzn/amazon-pay-module       ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-1           │ Fixes issue 1                                   │ Optional │ Applied     │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-2           │ Fixes issue 2                                   │ Optional │ Not applied │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-3           │ Fixes issue 3                                   │ Optional │ Not applied │ Required patches:               ║
║                │                                                 │          │             │  - MC-2                         ║
║                │                                                 │          │             │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╟────────────────┼─────────────────────────────────────────────────┼──────────┼─────────────┼─────────────────────────────────╢
║ MC-3-V2        │ Updated fix for issue 3, replaces MC-3 patch    │ Optional │ N/A         │ Affected components:            ║
║                │                                                 │          │             │  - magento/module-cms           ║
╚════════════════╧═════════════════════════════════════════════════╧══════════╧═════════════╧═════════════════════════════════╝
Magento 2 Enterprise Edition, version 2.3.5.0
```

The status table contains the following types of information:

-  **Type**:
   -  `Optional`—All patches from the MQP package and the [Magento Cloud Patches]({{ site.baseurl }}/cloud/project/project-patch.html) package are optional for {{ site.data.var.ee }} and {{ site.data.var.ce }} installations.
   -  `Deprecated`—Magento has deprecated the individual patch. If you have applied the patch, we recommend that you revert it. The revert operation also removes the patch from the status table.

-  **Status**:
   -  `Applied`—The patch has been applied.
   -  `Not applied`—The patch has not been applied.
   -  `N/A`—The status of the patch cannot be defined due to conflicts.

-  **Details**:
   -  `Affected components`—The list of affected Magento modules.
   -  `Required patches`—The list of patches that must be applied for an indicated patch to work properly (dependencies).
   -  `Recommended replacement`—The patch that is a recommended replacement for a deprecated patch.

{:.bs-callout-info}
After upgrading to a new version of Magento, you must re-apply patches if the patches are not included in the new version. See [Re-apply patches after an upgrade](#upgrade).

#### Apply individual patches

{:.bs-callout-warning}
We strongly recommend testing all patches in a staging or development environment before deploying to production. We also strongly recommend backing up your data before applying a patch. See [Back up and roll back the file system][].

To apply a single patch, run the following command where `MAGETWO-XXXX` is the patch ID specified in the status table:

```bash
./vendor/bin/magento-patches apply MAGETWO-XXXX
```

Also, you can apply several patches at the same time by separating each additional patch ID with a space:

```bash
./vendor/bin/magento-patches apply MAGETWO-XXXX MAGETWO-YYYY
```

You must clean the cache after applying patches to see changes in the Magento application:

```bash
./bin/magento cache:clean
```

{:.bs-callout-info}
Consider keeping a list of applied patches in a separate location. You might need to re-apply some of them after upgrading to a new version of Magento. See [Re-apply patches after an upgrade](#upgrade).

#### Revert individual patches

{:.bs-callout-warning}
We strongly recommend testing all patches in a staging or development environment before deploying to production. We also strongly recommend backing up your data before applying a patch. See [Back up and roll back the file system][].

To revert a single patch, run the following command where `MAGETWO-XXXX` is the patch ID specified in the status table:

```bash
./vendor/bin/magento-patches revert MAGETWO-XXXX
```

Also, you can revert several patches at the same time by separating each additional patch ID with a space:

```bash
./vendor/bin/magento-patches revert MAGETWO-XXXX MAGETWO-YYYY
```

To revert all applied patches:

```bash
./vendor/bin/magento-patches revert --all
```

You must clean the cache after reverting patches to see changes in the Magento application:

```bash
./bin/magento cache:clean
```

#### Get updates

Magento periodically releases new individual patches. You must update the MQP package to get new individual patches:

```bash
composer update magento/quality-patches
```

View the added patches:

{:.bs-callout-tip}
New add patches display at the bottom of the table.

```bash
./vendor/bin/magento-patches status
```

#### Re-apply patches after an upgrade {#upgrade}

When you upgrade to a new version of Magento, you must re-apply patches if the patches are not included in the new version.

{:procedure}
To re-apply patches:

1. Update the MQP package:

   ```bash
   composer update magento/quality-patches.
   ```

1. Open the list of previously applied patches, which was recommended in [Apply individual patches](#apply-individual-patches).

1. Apply the patches:

   ```bash
   ./vendor/bin/magento-patches apply MAGETWO-XXXX
   ```

   The best practice is to apply patches one at a time.

1. Clean the cache:

   ```bash
   ./bin/magento cache:clean
   ```

   {:.bs-callout-info}
   When you run the `status` command, the patches that where included in the new version are no longer displayed in the table of available patches.

#### Logging

The MQP package logs all operations in the `<Magento_root>/var/log/patch.log` file.

<!-- Link Definitions -->

[Magento Quality Package (MQP) package]: https://github.com/magento/quality-patches
