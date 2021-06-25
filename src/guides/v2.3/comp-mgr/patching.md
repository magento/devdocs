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

You can find hotfixes in the [Magento Security Center][]. Follow the instructions on the page to download the patch file, depending on your Magento version and installation type. Use the [command line][] or [Composer][] to apply hot fix patches.

{:.bs-callout-info}
Hot fixes can contain backward incompatible changes.

### Individual patches

Individual patches contain low-impact quality fixes for a specific issue. These fixes are applied to the most recently supported minor version of Magento (for example, 2.4.x), but could be missing from the previous supported minor version of Magento (for example, 2.3.x). Magento releases individual patches as needed.

Use the [Magento Quality Patches (MQP) package][MQP] to apply individual patches.

{:.bs-callout-info}
Individual patches do not contain backward incompatible changes.

### Custom patches

Sometimes it takes a while for the Magento Engineering Team to include a bug fix made on GitHub in a Magento 2 Composer release. In the meantime, you can create a patch from GitHub and use the [`cweagans/composer-patches`][1] plugin to apply it to your Composer-based Magento 2 installation.

Use the [command line][] or [Composer][] to apply custom patches.

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

-  [Magento Quality Patch (MQP) package][MQP]
-  [Command line][]
-  [Composer][]

{:.bs-callout-info}
To apply a patch to a {{site.data.var.ece}} project, see [Apply patches][].

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
[Apply patches]:{{ site.baseurl }}/cloud/project/project-patch.html
[Command line]:{{ page.baseurl }}/comp-mgr/patching/command-line.html
[Composer]:{{ page.baseurl }}/comp-mgr/patching/composer.html
[MQP]: {{ page.baseurl }}/comp-mgr/patching/mqp.html
