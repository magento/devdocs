---
group: product-recommendations
title: Product Recommendations
---

Product recommendations are a powerful marketing tool you can use to increase conversions, boost revenue, and stimulate shopper engagement. Product recommendations are surfaced on the storefront in the form of units such as “Customers who viewed this product also viewed”. Because these suggestions are backed by a deep analysis of aggregated visitor data, they result in highly engaging, relevant, and personalized experiences for the shopper.

Using recommendations on your storefront requires:

1. Behavioral data - Needed to compute the product affinities used as the basis for recommendations.

1. Catalog data - Needed to correctly reflect product metadata (name, price, availability, and so on) in recommendations

1. Admin UI - Needed to configure recommendations on your storefront

## Install Product Recommendations {#install}

For the Early Access Program, deploying recommendations to your site requires that you complete the following tasks:

1. Sign up through [this form](https://forms.gle/VE9VSSj9TMUTJ41u6). Within 24 hours, you will receive an email that contains your SaaS Environment ID from Magento. This ID identifies a production or non-production cloud service environment for use with Product Recommendations. You must use this ID to complete the module [configuration]({{ page.baseurl }}/recommendations/configure.html). If, after 24 hours, you have not received your ID, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.

1. Install the `product-recommendations` module with composer:

   ```bash
   composer require magento/product-recommendations
   ```

   The `product-recommendations` module requires the following dependencies:

    -  **module-data-services** — This module enables behavioral data collection by tracking [user events on the page]({{ page.baseurl }}/recommendations/events.html). This type of data is required by Adobe Sensei to compute product affinities based on production shopper behavior like product views, adds-to-cart, and checkouts. Magento does not collect personally identifiable information. Adobe Sensei then uses this information to create and train machine learning models for each website and storeview. This unlocks recommendation types like "Customers who viewed this, also viewed...", which automatically adjusts with shopper behavior over time.

    -  **saas-export** — This module syncs catalog data. This type of data provides product information to the Product Recommendations service so it can accurately return product names, pricing, images, URLs, inventory and availability, and other attributes.

        {:.bs-callout-info}
        If you prefer, you can install the above modules explicitly using composer: `composer require magento/module-data-services` and `composer require magento/saas-export`

    -  Other modules responsible for configuration

1. After you install the `product-recommendations` module, you must [configure the module]({{ page.baseurl }}/recommendations/configure.html).

1. Now that you have installed and configured the recommendations module, [create the recommendations in the Admin UI](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html).

### Update Product Recommendations installation

If you need to update your existing product recommendations installation, run:

```bash
composer update magento/product-recommendations --with-dependencies
```

## Uninstall Product Recommendations

If needed, you can [uninstall the product-recommendations module]({{ site.baseurl }}/guides/v{{ site.version }}/install-gde/install/cli/install-cli-uninstall-mods.html).
