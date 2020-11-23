---
group: product-recommendations
title: Product Recommendations
redirect_from:
  - /recommendations/install.html
ee_only: True
---

Product Recommendations are a powerful marketing tool you can use to increase conversions, boost revenue, and stimulate shopper engagement. Product Recommendations are surfaced on the storefront in the form of units such as “Customers who viewed this product also viewed”, “Customers who bought this product also bought", "Recommended for you", and so on. Magento's Product Recommendations are powered by [Adobe Sensei](https://www.adobe.com/sensei.html), which uses artificial intelligence and machine-learning algorithms to perform a deep analysis of aggregated shopper data. This data, when combined with your Magento catalog, results in highly engaging, relevant, and personalized experiences for the shopper.

## Architectural overview

At a high level, Magento's Product Recommendations are deployed as a SaaS service. The Magento side includes the storefront, which contains the event collector and recommendations layout template, and the backend, which includes the Data Services, SaaS Export module, and the Admin UI. Adobe Sensei intelligence services are leveraged on the the SaaS services side.

   ![Product recommendations architecture diagram]({{ page.baseurl }}/recommendations/images/arch-diag-sensei.svg)

Once the recommendation modules are installed and configured, your storefront will begin collecting behavioral data. Adobe Sensei processes this behavioral data along with your catalog data and calculates product associations that are leveraged by the recommendations service. At this point, the merchant can create, manage, and deploy product recommendation units to their storefront directly from the Admin UI.

## Types of data

Product Recommendations require the following data:

-  **Behavioral** - Data from a shopper's engagement on your site, such as product views, items added to a cart, and purchases. Magento and Adobe Sensei do not collect personally identifiable information.

-  **Catalog** - Product metadata, such as name, price, availability, and so on.

When you install the `magento/product-recommendations` module, Adobe Sensei aggregates the behavioral and catalog data, creating Product Recommendations for each recommendation type. The Product Recommendations service then deploys those recommendations to your storefront.

## Next steps

Read the following topics to get started with Product Recommendations:

-  [How to Implement Product Recommendations]({{ page.baseurl }}/recommendations/implementation.html)

-  [Install and configure Product Recommendations]({{ page.baseurl }}/recommendations/install-configure.html)

-  [Create Product Recommendations](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html)
