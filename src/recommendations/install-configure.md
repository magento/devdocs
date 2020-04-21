---
group: product-recommendations
title: Install and Configure Recommendations
redirect_from:
  - /recommendations/configure.html
ee_only: True
---

Deploying Product Recommendations to your storefront requires that you install, configure, then [create the recommendations in the Admin UI](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html).

## Install Product Recommendations {#install}

Install the `magento/product-recommendations` module with Composer:

   ```bash
   composer require magento/product-recommendations
   ```

The `magento/product-recommendations` module requires the following dependencies:

-  **data-services** — This module enables behavioral data collection by tracking [user events on the page]({{ page.baseurl }}/recommendations/events.html). This type of data is required by Adobe Sensei to compute product affinities based on production shopper behavior like product views, products added to a cart, and checkouts. Adobe Sensei then uses this information to create and train machine learning models for each website and store view. This unlocks recommendation types like "Customers who viewed this, also viewed...", which automatically adjusts with shopper behavior over time. Magento and Adobe Sensei do not collect personally identifiable information.

-  **saas-export** — This module syncs catalog data. This type of data provides product information to the Product Recommendations service so it can accurately return product names, pricing, images, URLs, inventory and availability, and other attributes.

   {:.bs-callout-info}
   If you prefer, you can install the above modules explicitly using Composer: `composer require magento/data-services` and `composer require magento/saas-export`

### Update your Product Recommendations installation

If for any reason you need to update the `magento/product-recommendations` module, run the following:

```bash
composer update magento/product-recommendations --with-dependencies
```

### Uninstall Product Recommendations

If needed, you can [uninstall the product-recommendations module]({{ site.baseurl }}/guides/v{{ site.version }}/install-gde/install/cli/install-cli-uninstall-mods.html).

## Configure Product Recommendations {#configure}

After you install the `magento/product-recommendations` module, you must configure the module by [specifying the API Key and selecting a SaaS Environment](https://docs.magento.com/m2/ce/user_guide/configuration/services/saas.html).

To ensure catalog export is running correctly, confirm that the [cron]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-cron.html) jobs and the [indexers]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-index.html) are running and the `Product Feed` indexer is set to `Update by Schedule`.

When you successfully link to Magento Services through the API key and specify the SaaS Environment, the catalog sync initiates and [behavioral data collection]({{ page.baseurl }}/recommendations/verify.html) begins on your storefront.
