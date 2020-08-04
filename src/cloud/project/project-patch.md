---
group: cloud-guide
title: Apply patches
functional_areas:
  - Cloud
  - Upgrade
---
The [{{site.data.var.mcp-prod}}](https://github.com/magento/magento-cloud-patches) package
delivers Magento patches, which improve the integration of all `{{site.data.var.ee}}` versions with Cloud environments and supports quick delivery of critical and custom fixes.

The {{ site.data.var.mcp }} package is a dependency for the {{site.data.var.ct}} package and is installed or updated when you install or update the {{ site.data.var.ct }} package version. You can also use and manage the {{ site.data.var.mcp-prod }} as a stand-alone package for an existing {{ site.data.var.ee }} project.

The {{ site.data.var.mcp-prod }} package can deliver the following patch types:

-  Required patches included in the {{ site.data.var.mcp-prod }} package

-  Optional Magento patches included in the `/m2-hotfixes` directory

-  Custom patches included in the `/m2-hotfixes` directory

When you deploy changes to the remote environment, `{{site.data.var.ct}}` uses `{{site.data.var.mcp-package}}` to check for pending patches and applies them automatically in the following order:

1. Apply required patches from Magento included in the `{{site.data.var.mcp-package}}` package.
1. Apply optional and custom patches in the `/m2-hotfixes` directory in alphabetical order by patch name.

Also, you can apply patches manually in your local environment.

{:.bs-callout-info}
All patch file names must end with the `.patch` extension.

## Prerequisites

{% include cloud/note-upgrade.md %}

To apply the latest patches, [install the latest version of {{site.data.var.ct}}]({{site.baseurl}}/cloud/project/ece-tools-update.html).

## Apply patches manually

You can apply patches manually in a local environment and test them before you deploy.

{:.procedure}
To apply {{site.data.var.ece}} patches manually:

1. From the project root, apply the patches.

   ```bash
   php ./vendor/bin/ece-tools patch
   ```

1. Clear the Magento cache.

   ```bash
   php ./bin/magento cache:clean
   ```

   You can also clean the cache using the [Magento Admin Cache Management](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1. Test the patches, make any necessary changes to custom patches.

## Apply a custom patch

When you deploy, `{{site.data.var.ct}}` applies all Magento patches and any custom patches that you add to the `/m2-hotfixes` directory in the Magento project root.

{:.procedure}
To apply and test a custom patch:

1. In the project root, create a directory called `m2-hotfixes` if it does not exist

   ```bash
   mkdir m2-hotfixes
   ```

1. Copy the patch file to the `/m2-hotfixes` directory.

1. Add, commit, and push code changes.

   ```bash
   git add -A
   ```

   ```bash
   git commit -m "Apply patch"
   ```

   ```bash
   git push origin <branch-name>
   ```

   {:.bs-callout-info}
   Make sure to test all patches in a pre-production environment.  For Magento Cloud, new branches can be created with     `magento-cloud environment:branch <branch-name>`

## Apply patches to a Magento enterprise or open source project

You can use `{{site.data.var.mcp-prod}}` as a stand-alone package to apply Magento patches and hotfixes to a Magento project that is not deployed on the Cloud platform.

{:.procedure}
To use magento-cloud-patches as a stand-alone package:

1. Add the magento-cloud-patches package to your `composer.json` file.

   ```bash
   composer require magento/magento-cloud-patches
   ```

1. From the project root, apply the patches.

   ```bash
   php ./vendor/bin/ece-tools patch
   ```

   This command applies Magento patches and any custom patches found in the `/m2-hotfixes` directory.

1. Clear the Magento cache.

   ```bash
   php ./bin/magento cache:clean
   ```

   You can clean the cache using the Magento Admin Cache Management.

1. Test the patches, and make any necessary changes to custom patches.
