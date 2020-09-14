---
group: product-recommendations
title: Install and Configure Recommendations
redirect_from:
  - /recommendations/configure.html
ee_only: True
---

Deploying Product Recommendations to your storefront requires that you install, configure, then [create the recommendations in the Admin UI](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html).

## Install Product Recommendations {#install}

Because the Product Recommendations module is a stand-alone metapackage, updates are released more frequently than Magento Commerce. To make sure you are up-to-date with the latest bug fixes and features, refer to the [release notes]({{ page.baseurl }}/recommendations/release-notes.html).

Install the `magento/product-recommendations` module with Composer:

   ```bash
   composer require magento/product-recommendations
   ```

The `magento/product-recommendations` module requires the following dependencies:

-  **data-services** — This module enables behavioral data collection by tracking [user events on the page]({{ page.baseurl }}/recommendations/events.html). This type of data is required by Adobe Sensei to compute product affinities based on production shopper behavior like product views, products added to a cart, and checkouts. Adobe Sensei then uses this information to create and train machine learning models for each website and store view. This unlocks recommendation types like "Customers who viewed this, also viewed...", which automatically adjusts with shopper behavior over time. Magento and Adobe Sensei do not collect personally identifiable information.

-  **saas-export** — This module syncs catalog data. This type of data provides product information to the Product Recommendations service so it can accurately return product names, pricing, images, URLs, inventory and availability, and other attributes.

   {:.bs-callout-info}
   If you prefer, you can install the above modules explicitly using Composer: `composer require magento/data-services` and `composer require magento/saas-export`

### Add Page Builder support {#pbsupport}

Product Recommendations for [Page Builder]({{ site.baseurl }}/page-builder/docs/index.html) is an optional module and is installed separately. To use Product Recommendations with Page Builder, install the module by running the following command:

```bash
composer require magento/module-page-builder-product-recommendations
```

By enabling Product Recommendations in Page Builder, you can [add an existing, active recommendation unit](https://docs.magento.com/user-guide/marketing/page-builder-add-product-recs.html) to any content created in Page Builder, such as pages, blocks, and dynamic blocks.

### Add Visual similarity recommendation type {#vissimsupport}

   {:.bs-callout-info}
   This feature is in beta.

The _Visual similarity_ recommendation type allows you to [deploy a recommendation unit](https://docs-beta.magento.com/user-guide/marketing/prex-type-visualsim.html) to your product detail page that displays products that are visually similar to the product being viewed. This recommendation type is most useful where images and visual aspects of the products are important parts of the shopping experience. Install the _Visual similarity_ recommendation type by running the following command:

```bash
composer require magento/module-visual-product-recommendations
```

### Update your Product Recommendations installation

Like all of Magento, Product Recommendations uses Composer for installation and updates. To update the `magento/product-recommendations` module, run the following:

```bash
composer update magento/product-recommendations --with-dependencies
```

To update to a major version, such as from 2.0 to 3.0, you must edit your project's root `composer.json` file. (See the [release notes]({{ page.baseurl }}/recommendations/release-notes.html) for information about the latest version.) For example, let's open the main `composer.json` file and search for the `magento/product-recommendations` module:

```json
"require": {
    ...
    "magento/product-recommendations": "^2.0",
    ...
}
```

Let's bump the major version from `2.0` to `3.0`:

```json
"require": {
    ...
    "magento/product-recommendations": "^3.0",
    ...
}
```

Save the the `composer.json` file and run:

```bash
composer update magento/product-recommendations --with-dependencies
```

### Uninstall Product Recommendations

If needed, you can [uninstall the product-recommendations module]({{ site.baseurl }}/guides/v{{ site.version }}/install-gde/install/cli/install-cli-uninstall-mods.html).

## Configure Product Recommendations {#configure}

After you install the `magento/product-recommendations` module, you must configure the module by [specifying the API Key and selecting a SaaS Environment](https://docs.magento.com/m2/ce/user_guide/configuration/services/saas.html).

To ensure catalog export is running correctly, confirm that the [cron]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-cron.html) jobs and the [indexers]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-index.html) are running and the `Product Feed` indexer is set to `Update by Schedule`.

When you successfully link to Magento Services through the API key and specify the SaaS Environment, the catalog sync initiates and [behavioral data collection]({{ page.baseurl }}/recommendations/verify.html) begins on your storefront.
