---
group: cloud-guide
title: Apply patches
functional_areas:
  - Cloud
  - Upgrade
---
The [Magento Cloud Patches](https://github.com/magento/magento-cloud-patches) package
provides Magento Cloud patches which improve the integration of all {{site.data.var.ee}} versions with Cloud environments and supports quick delivery of critical fixes. You can also add and apply custom patches using {{ site.data.var.mcp }}.

The {{ site.data.var.mcp }} package is a dependency for the {{site.data.var.ct}} package and is installed or updated when you install or update the {{ site.data.var.ct }} package version. You can also use and manage the {{ site.data.var.mcp }} as a stand-alone package for an existing {{ site.data.var.ece }} project.

You can also use {{site.data.var.mcp}} to apply [custom patches]({{ site.baseurl }}/guides/v2.3/comp-mgr/patching.html#custom-patches) provided by support or third-party extension developers.  To use this feature,  copy the custom patch to the `/m2-hotfixes` directory in the {{ site.data.var.ee }} project root directory. Then, test the patch on your local workstation.

{% include cloud/note-upgrade.md %}

{:.procedure}
To implement Magento Cloud Patches:

1. Add the Magento Cloud Patches package to your `composer.json`

    ```bash
    composer require magento/magento-cloud-patches
    ```
    
{:.procedure}
To apply patches for testing:

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
To apply and test a custom patch:

1. In the project root, create a directory called `m2-hotfixes` if it does not exist

    ```bash
    mkdir m2-hotfixes
    ```

1. Copy the patch file to the `/m2-hotfixes` directory.

    {:.bs-callout-info}
    Make sure to test all patches in a pre-production environment.  For Magento Cloud, new branches can be created with `magento-cloud environment:branch <branch-name>`
