## Command-line upgrade to Magento {{ page.guide_version }} with sample data

These instructions apply to {{site.data.var.ce}} and {{site.data.var.ee}} users *only* if all of the following are true:

*  You have installed optional sample data
*  You are upgrading to Magento {{ page.guide_version }} (including a Release Candidate) from any earlier version using the command line

To upgrade to Magento {{ page.guide_version }} sample data using the command line:

1. Log in to your Magento server as, or switch to, the [Magento file system owner].
1. Change to the Magento installation directory.
1. Back up your current `composer.json` file:

   ```bash
   cp composer.json composer.json.bak
   ```

1. Upgrade the Magento software version using commands of the following format:

   ```bash
   composer require <product> <version> --no-update
   ```

   ```bash
   composer require <sample data module-1>:<version> ... <sample data module-n>:<version> --no-update
   ```

   *  Example for {{site.data.var.ce}}:

      ```bash
      composer require magento/product-community-edition {{ page.guide_version }}.0 --no-update
      ```

      ```bash
      composer require magento/module-bundle-sample-data:100.4.* magento/module-widget-sample-data:100.4.* magento/module-theme-sample-data:100.4.* magento/module-catalog-sample-data:100.4.* magento/module-customer-sample-data:100.4.* magento/module-cms-sample-data:100.4.*  magento/module-catalog-rule-sample-data:100.4.* magento/module-sales-rule-sample-data:100.4.* magento/module-review-sample-data:100.4.* magento/module-tax-sample-data:100.4.* magento/module-sales-sample-data:100.4.* magento/module-grouped-product-sample-data:100.4.* magento/module-downloadable-sample-data:100.4.* magento/module-msrp-sample-data:100.4.* magento/module-configurable-sample-data:100.4.* magento/module-product-links-sample-data:100.4.* magento/module-wishlist-sample-data:100.4.* magento/module-swatches-sample-data:100.4.* magento/sample-data-media:100.4.* magento/module-offline-shipping-sample-data:100.4.* --no-update
      ```

   *  Example for {{site.data.var.ee}}:

      ```bash
      composer require magento/product-enterprise-edition {{ page.guide_version }}.0 --no-update
      ```

      ```bash
      composer require magento/module-bundle-sample-data:100.4.* magento/module-widget-sample-data:100.4.* magento/module-theme-sample-data:100.4.* magento/module-catalog-sample-data:100.4.* magento/module-customer-sample-data:100.4.* magento/module-cms-sample-data:100.4.*  magento/module-catalog-rule-sample-data:100.4.* magento/module-sales-rule-sample-data:100.4.* magento/module-review-sample-data:100.4.* magento/module-tax-sample-data:100.4.* magento/module-sales-sample-data:100.4.* magento/module-grouped-product-sample-data:100.4.* magento/module-downloadable-sample-data:100.4.* magento/module-msrp-sample-data:100.4.* magento/module-configurable-sample-data:100.4.* magento/module-product-links-sample-data:100.4.* magento/module-wishlist-sample-data:100.4.* magento/module-swatches-sample-data:100.4.* magento/sample-data-media:100.4.* magento/module-offline-shipping-sample-data:100.4.* magento/module-gift-card-sample-data:100.4.* magento/module-customer-balance-sample-data:100.4.* magento/module-target-rule-sample-data:100.4.* magento/module-gift-registry-sample-data:100.4.* magento/module-multiple-wishlist-sample-data:100.4.* --no-update
      ```

   {% include note.html
      type="info"
    content="To upgrade to a Release Candidate, append `-rc<x>` to the version of each module. For example, `-rc3`."
  %}

1. Update dependencies:

   ```bash
   composer update
   ```

1. If prompted, enter your [authentication keys].
1. Wait for dependencies to update.

### Finish your upgrade

After you have reset file system permissions:

1. If you have not done so already, log in to your Magento server as, or switch to, the Magento file system owner.
1. Change to your Magento installation directory.
1. Manually clear the `var/cache`, `var/page_cache`, and `var/generation` directories.

   A sample command follows:

   ```bash
   rm -rf var/cache/* var/page_cache/* var/generation/*
   ```

1. Upgrade Magento:

   ```bash
   bin/magento setup:upgrade
   ```

{% include install/sampledata/file-sys-perms-digest.md %}

<!-- Link definitions -->
[Magento file system owner]: {{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html
[authentication keys]: {{ page.baseurl }}/install-gde/prereq/connect-auth.html
