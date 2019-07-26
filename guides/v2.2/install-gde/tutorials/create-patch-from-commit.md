---
title: Create a patch from a GitHub commit
group: installation-guide
---

Sometimes it takes a while for the Magento Engineering Team to include a bug fix made on GitHub in a Magento 2 Composer release. In the meantime, you can create a patch from GitHub and use the [`cweagans/composer-patches`][1] plugin to apply it to your Composer-based Magento 2 installation.

{:.bs-callout-warning}
Always perform comprehensive testing before deploying any unreleased patch.

## Create a patch

There are many ways to create patch files. The example below focuses on creating a patch from a known commit.

To create a patch file, follow these steps:

1. Create a `patches/composer` directory in your local project.
1. Identify the GitHub commit or pull request to use for the patch. This example uses the [`2d31571`][2] commit, linked to Magento 2 GitHub issue [#6474][3].
1. Append the `.patch` or the `.diff` extensions to the commit URL. Use `.diff` for a smaller file size. For example: [https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.diff][4]
1. Save the page as a file in the `patches/composer` directory. For example, `github-issue-6474.diff`.
1. Edit the file and remove `app/code/<VENDOR>/<PACKAGE>` from all paths so that they are relative to the `vendor/<VENDOR>/<PACKAGE>` directory.

   The following example shows the previously mentioned diff file after removing all instances of `app/code/Magento/Payment`\:

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

   {:.bs-callout-info}
   Text editors that automatically remove trailing whitespace or add new lines can break the patch. Use a simple text editor to make these changes.

## Apply a patch

To apply a patch, follow these steps:

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

1. Update the `composer.lock` file. The lock file tracks which patches have been applied to each Composer package in an object``.

   ```bash
   composer update --lock
   ```

[1]: https://github.com/cweagans/composer-patches/
[2]: https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede
[3]: https://github.com/magento/magento2/issues/6474
[4]: https://github.com/magento/magento2/commit/2d31571f1bacd11aa2ec795180abf682e0e9aede.diff