---
group: software-update-guide
title: Applying patches
functional_areas:
  - Upgrade
---

{:.bs-callout-warning}
We strongly recommend that test all patches in a staging/development environment before deploying to production. We also strongly recommend that you back up your data before applying a patche. See [Back up and roll back the file system][].

## How patches work

There are two types of patches:

- **Official patches**—patches that Magento publishes on the [Magento Security Center][].
- **Custom patches**—unofficial patches that you can create from a git commit.

Patch (or diff) files are text files that note:

- The file(s) to be changed.
- The line number to begin the change and the number of lines to be changed.
- The new code to swap in.

When the [patch][] program is run, this file is read in and the specified changes are made to the file(s).

## Official patches

You can find official Magento patches in the [Magento Security Center][]. Follow the instructions on the page to download the patch file, depending on your version and installation type.

## Custom patches

Sometimes it takes a while for the Magento Engineering Team to include a bug fix made on GitHub in a Magento 2 Composer release. In the meantime, you can create a patch from GitHub and use the [`cweagans/composer-patches`][1] plugin to apply it to your Composer-based Magento 2 installation.

There are many ways to create patch files. The example below focuses on creating a patch from a known commit.

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

There are two ways to apply patches:

- Using the command line
- Using Composer

### Command line

1. Upload the local file into the `<Magento_root>` on the server using FTP, SFTP, SSH or your normal transport method.
1. Login to the server as the [Magento admin user][] and verify the file is in the correct directory.
1. In the command line interface, run the following commands according to the patch extension:

   ```bash
   patch < patch_file_name.patch
   ```

   The command assumes the file to be patched is located relative to the patch file.

   {: .bs-callout-info}
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
    - **Module:** *\"magento/module-payment\"*
    - **Title:** *\"MAGETWO-56934: Checkout page freezes when ordering with Authorize.net with invalid credit card\"*
    - **Path to patch:** *\"patches/composer/github-issue-6474.diff\"*

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
