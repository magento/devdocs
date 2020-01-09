---
group: cloud-guide
title: Apply patches
functional_areas:
  - Cloud
  - Upgrade
---
The [Magento Cloud Patches](https://github.com/magento/magento-cloud-patches) package is a set of patches, previously used within the ece-tools package to improve the integration of all Magento versions with Cloud environments and to deliver critical fixes quickly. This can also be integrated to an existing Magento project as a standalone package.

Magento Cloud Patches can also apply [custom patches]({{ site.baseurl }}/guides/v2.3/comp-mgr/patching.html#custom-patches) provided by support or third-party extension developers. Copy the custom patch to a directory called `/m2-hotfixes` in the project root and test it on your local workstation.

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


