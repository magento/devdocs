---
group: software-update-guide
title: Apply patches
functional_areas:
  - Upgrade
---

{:.bs-callout-warning}
We strongly recommend testing all patches in a staging or development environment before deploying to production. We also strongly recommend backing up your data before applying a patch. See [Back up and roll back the file system][].

## How patches work

Patch (or diff) files are text files that note:

-  The file(s) to be changed.
-  The line number to begin the change and the number of lines to be changed.
-  The new code to swap in.

When the [patch][] program is run, this file is read in and the specified changes are made to the file(s).

There are three types of patches:

-  **Hotfixes**—Patches that Magento publishes on the [Magento Security Center][].
-  **Individual patches**—Patches that Magento Support creates and distributes on an individual basis.
-  **Custom patches**—Unofficial patches that you can create from a git commit.

### Hotfixes

Hotfixes are patches that contain high-impact security or quality fixes that affect a large number of Magento merchants. These fixes are applied to the next patch release for the applicable Magento minor version. Magento releases hot fixes as needed.

You can find hotfixes in the [Magento Security Center][]. Follow the instructions on the page to download the patch file, depending on your Magento version and installation type. Use the [command line](#command-line) or [Composer](#composer) to apply hot fix patches.

{:.bs-callout-info}
Hot fixes can contain backward incompatible changes.

### Individual patches

Individual patches contain low-impact quality fixes for a specific issue. These fixes are applied to the most recently supported minor version of Magento (for example, 2.4.x), but could be missing from the previous supported minor version of Magento (for example, 2.3.x). Magento releases individual patches as needed.

Use the [Magento Quality Patches (MQP) package](#mqp) to apply individual patches.

{:.bs-callout-info}
Individual patches do not contain backward incompatible changes.

### Custom patches

Sometimes it takes a while for the Magento Engineering Team to include a bug fix made on GitHub in a Magento 2 Composer release. In the meantime, you can create a patch from GitHub and use the [`cweagans/composer-patches`][1] plugin to apply it to your Composer-based Magento 2 installation.

Use the [command line](#command-line) or [Composer](#composer) to apply custom patches.

There are many ways to create custom patch files. The following example focuses on creating a patch from a known git commit.

To create a custom patch:

1. Create a `patches/composer` directory in your local project.
1. Identify the GitHub commit or pull request to use for the patch. This example uses the [`2d31571`][2] commit, linked to Magento 2 GitHub issue [#6474][3].
1. Append the `.patch` or the `.diff` extensions to the commit URL. Use `.diff` for a smaller file size. For example: [https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.diff][4]
1. Save the page as a file in the `patches/composer` directory. For example, `github-issue-6474.diff`.
1. Edit the file and remove `app/code/<VENDOR>/<PACKAGE>` from all paths so that they are relative to the `vendor/<VENDOR>/<PACKAGE>` directory.

   {:.bs-callout-info}
   Text editors that automatically remove trailing whitespace or add new lines can break the patch. Use a simple text editor to make these changes.

The following example shows the previously mentioned diff file after removing all instances of `app/code/Magento/Payment`:

```diff
diff --git a/view/frontend/web/js/view/payment/iframe.js b/view/frontend/web/js/view/payment/iframe.js
index c8a6fef58d31..7d01c195791e 100644
--- a/view/frontend/web/js/view/payment/iframe.js
+++ b/view/frontend/web/js/view/payment/iframe.js
@@ -154,6 +154,7 @@ define(
              */
              clearTimeout: function () {
                  clearTimeout(this.timeoutId);
                  this.fail();
                  return this;
            },
```

## Applying patches

You can apply patches using any of the following methods:

-  Magento Quality Patch (MQP) package
-  Command line
-  Composer

{:.bs-callout-info}
To apply a patch to a {{site.data.var.ece}} project, see [Apply patches][].

### Magento Quality Patch (MQP) package {#mqp}

The [MQP package][] delivers individual patches developed by Magento and allows you to apply, revert, and view general information about all individual patches that are available for the installed version of {{ site.data.var.ee }} or {{ site.data.var.ce }}.

#### Install the MQP package

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

### Command line

1. Upload the local file into the `<Magento_root>` on the server using FTP, SFTP, SSH or your normal transport method.
1. Log into the server as the [Magento admin user][] and verify the file is in the correct directory.
1. In the command line interface, run the following commands according to the patch extension:

   ```bash
   patch < patch_file_name.patch
   ```

   The command assumes the file to be patched is located relative to the patch file.

    {:.bs-callout-info}
   If the command line shows: `File to patch:`, it means it cannot locate the intended file, even if the path seems correct. In the box displayed in the command line terminal, the first line shows the file to be patched. Copy the file path and paste it into the `File to patch:` prompt and press `Enter` and the patch should complete.

1. For the changes to be reflected, refresh the cache in the Admin under **System** > Tools > **Cache Management**.

  Alternatively, the patch can be applied locally with the same command, then committed and pushed normally.

### Composer

{:.bs-callout-warning}
Always perform comprehensive testing before deploying any custom patch.

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

<!-- Link Definitions -->

[MQP package]:https://github.com/magento/quality-patches
[Magento Security Center]:https://magento.com/security/patches
[-p1 instead of -p0]:http://man7.org/linux/man-pages/man1/patch.1.html
[Back up and roll back the file system]:{{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html
[patch]:https://en.wikipedia.org/wiki/Patch_(Unix)
[Magento Help Center]:https://support.magento.com/hc/en-us/articles/360005484154-Create-a-patch-for-a-Magento-2-Composer-installation-from-a-GitHub-commit
[Magento Admin user]:{{ page.baseurl }}/config-guide/cli/config-cli.html#config-install-cli-first
[1]: https://github.com/cweagans/composer-patches/
[2]: https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede
[3]: https://github.com/magento/magento2/issues/6474
[4]: https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.diff
[Apply patches]:{{ site.baseurl }}/cloud/project/project-patch.html
