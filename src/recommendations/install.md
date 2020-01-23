---
group: product-recommendations
title: Product Recommendations
---

Product recommendations are a powerful marketing tool you can use to increase conversions, boost revenue, and stimulate shopper engagement. Product recommendations are surfaced on the storefront in the form of units such as “Customers who viewed this product also viewed”. Because these suggestions are backed by a deep analysis of aggregated visitor data, they result in highly engaging, relevant, and personalized experiences for the shopper.

Using recommendations on your storefront requires that you:

1. Install and deploy the product recommendations module to your storefront to begin collecting shopper behavior and catalog data.

1. Configure recommendations on your storefront using the Admin UI.

## Install Product Recommendations

For the Early Access Program, deploying recommendations to your site requires that you complete the following tasks:

1. Sign up through [this form](https://forms.gle/VE9VSSj9TMUTJ41u6). You will receive a SaaS Environment ID after signing up. You will use this ID to complete the installation steps below.

1. Install the product recommendation module via the following composer command:

    ```bash
    composer require magento/product-recommendations
    ```

    The `product-recommendations` module pulls in the following extensions:

    -  **module-data-services** - This module enables behavioral data collection by tracking [user events on the page]{{ page.baseurl }}/recommendations/events.html). This type of data is required by Adobe Sensei to compute product affinities based on production shopper behavior like product views, adds-to-cart, and checkouts. Magento does not collect personally identifiable information. Adobe Sensei then uses this information to create and train machine learning models for each store. This unlocks recommendation types like "Customers who viewed this, also viewed...", which adjust with shopper behavior over time.

    -  **saas-export** - This module syncs catalog data. This type of data provides product information to the Recommendations service so it can accurately return product names, pricing, images, URLs, and other attributes. It is also aware of inventory and configuration changes that impact product visibility.

    {:.bs-callout-info}
    If you prefer, you can install the above extensions explicitly via the following composer commands: `composer require magento/module-data-services` and `composer require magento/saas-export`

1. After you install the `product-recommendations` module, you need to:

    -  [Configure the environment]({{ page.baseurl }}/recommendations/configure.html#configureenv)

    -  [Install the SaaS Export module]({{ page.baseurl }}/recommendations/configure.html#installcatalogsaas)

    -  [Enter the SaaS Environment ID you received when you signed up]({{ page.baseurl }}/recommendations/configure.html#envid)

1. Now that you have installed and configured the recommendations module, [create the recommendations in the Admin UI](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html).

## Uninstall Product Recommendations

If needed, you can [uninstall the product recommendations module]({{ site.baseurl }}/guides/v{{ site.version }}/install-gde/install/cli/install-cli-uninstall-mods.html).
