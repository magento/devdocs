---
group: product-recommendations
title: Product Recommendations
redirect_from:
  - /recommendations/install.html
---

Product recommendations are a powerful marketing tool you can use to increase conversions, boost revenue, and stimulate shopper engagement. Recommendations are surfaced on the storefront in the form of units such as “Customers who viewed this product also viewed”. Because these suggestions are backed by a deep analysis of aggregated visitor data using Adobe Sensei, they result in highly engaging, relevant, and personalized experiences for the shopper. Magento and Adobe Sensei do not collect personally identifiable information.

Magento Commerce will soon bring the power of creating and managing smart product recommendations to its merchant community. Marketing managers will be able to quickly create, manage, and deploy recommendations across their store views directly from the Magento Admin panel.

## Participate in the Early Access Program

By participating in this Early Access Program, you will play a key role in helping to drive the direction and scope of this new technology. Your contributions and feedback will have a direct impact on the Magento Commerce experience for all of our customers.

## Get started

Sign up through [this form](https://forms.gle/VE9VSSj9TMUTJ41u6). Within 24 hours, you will receive an email that contains your SaaS Environment ID from Magento. This ID identifies a production or non-production cloud service environment for use with Product Recommendations. You must use this ID to complete the module [configuration]({{ page.baseurl }}/recommendations/configure.html). If, after 24 hours, you have not received your ID, <a href="mailto:magento-product-recs-feedback@adobe.com">E-mail us</a>.

### Types of data

Product recommendations require the following data:

-  **Behavioral** - Data from a shopper's engagement on your site, such as product views, items added to a cart, and purchases.

-  **Catalog** - Product metadata, such as name, price, availability, and so on.

Adobe Sensei aggregates the behavioral data and combines it with the catalog data to create product recommendations that are engaging, relevant, and personalized.

To collect this data, you must install the `product-recommendations` module.

### Install Product Recommendations {#install}

1. Install the `magento/product-recommendations` module with Composer:

   ```bash
   composer require magento/product-recommendations
   ```

   The `magento/product-recommendations` module requires the following dependencies:

   -  **module-data-services** — This module enables behavioral data collection by tracking [user events on the page]({{ page.baseurl }}/recommendations/events.html). This type of data is required by Adobe Sensei to compute product affinities based on production shopper behavior like product views, products added to a cart, and checkouts. Adobe Sensei then uses this information to create and train machine learning models for each website and storeview. This unlocks recommendation types like "Customers who viewed this, also viewed...", which automatically adjusts with shopper behavior over time. Magento and Adobe Sensei do not collect personally identifiable information.

   -  **saas-export** — This module syncs catalog data. This type of data provides product information to the Product Recommendations service so it can accurately return product names, pricing, images, URLs, inventory and availability, and other attributes.

       {:.bs-callout-info}
       If you prefer, you can install the above modules explicitly using Composer: `composer require magento/module-data-services` and `composer require magento/saas-export`

   -  Other modules responsible for configuration

1. After you install the `magento/product-recommendations` module, you must [configure the module]({{ page.baseurl }}/recommendations/configure.html).

1. Now that you have installed and configured the recommendations module, [create the recommendations in the Admin UI](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html).

## Update your Product Recommendations installation

Throughout the EAP, we will make updates to the `product-recommendations` module. When we notify you of an update, run the following:

```bash
composer update magento/product-recommendations --with-dependencies
```

## Uninstall Product Recommendations

If needed, you can [uninstall the product-recommendations module]({{ site.baseurl }}/guides/v{{ site.version }}/install-gde/install/cli/install-cli-uninstall-mods.html).

## A note about the documentation

This documentation is constantly evolving. As we develop new and refine existing features, expect to see those updates reflected here. If you notice errors or omissions in the documentation, please feel free to suggest an update using the "Edit this page on GitHub" link in the upper right side of each page.
