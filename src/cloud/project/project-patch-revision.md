---
group: cloud-guide
title: Apply patches
functional_areas:
  - Cloud
  - Upgrade
---
The [Magento Cloud Patches](https://github.com/magento/magento-cloud-patches) package
provides Magento Cloud patches which improve the integration of all {{site.data.var.ee}} versions with Cloud environments and supports quick delivery of critical fixes.

The {{ site.data.var.mcp }} package is a dependency for the {{site.data.var.ct}} package and is installed or updated when you install or update the {{ site.data.var.ct }} package version.

Whenever you push code changes to a remote {{site.data.var.ece}} environment, {{site.data.var.ece}} checks for pending patches and updates and applies them automatically during the deployment process.

You can also use the {{site.data.var.mcp}} to complete the following tasks:

- Apply [custom patches]({{ site.baseurl }}/guides/v2.3/comp-mgr/patching.html#custom-patches) provided by support or third-party extension developers
- Manually apply patches in a local development environment
- Use the {{site.data.var.mcp}} package as a stand-alone package to apply patches to any {{site.data.var.ee}} project.

{% include cloud/note-upgrade.md %}

{:.procedure}
To apply and test a custom patch:

1. In the project root, create a directory called `m2-hotfixes` if it does not exist

    ```bash
    mkdir m2-hotfixes
    ```

1. Copy the patch file to the `/m2-hotfixes` directory.

    {:.bs-callout-info}
    Make sure to test all patches in a pre-production environment.  For Magento Cloud, new branches can be created with `magento-cloud environment:branch <branch-name>`

{:.procedure}
To apply {{site.data.var.ece}} patches manually:

1. From the project root, apply the patches.

    ```bash
     php ./vendor/bin/ece-patches apply
    ```

1. Clear the Magento cache.

    ```bash
    php ./bin/magento cache:clean
    ```

    You can also clean the cache using the [Magento Admin Cache Management](http://docs.magento.com/m2/ee/user_guide/system/cache-management.html).

1. Test the patches, make any necessary changes to custom patches.

{:.procedure}
To use {{ site.data.var.mcp }} as a stand-alone package:

1. From the root directory for your project, add the {{site.data.var.mcp}} package to the `composer.json` file.

    ```bash
    composer require magento/magento-cloud-patches
    ```

1. Wait for the dependencies to update.

1. Enable the module.

   ```php
   php bin/magento module:enable magento/magento-cloud-patches
   ```

After you have enabled the module, use the `php ./vendor/bin/ece-patches` command to apply patches to your project.