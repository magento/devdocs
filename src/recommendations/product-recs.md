---
group: product-recommendations
title: Overview
redirect_from:
  - /recommendations/install.html
ee_only: True
migrated_to: https://experienceleague.adobe.com/docs/commerce-merchant-services/product-recommendations/developer/development-overview.html
layout: migrated
---

Product Recommendations are a powerful marketing tool you can use to increase conversions, boost revenue, and stimulate shopper engagement. Product Recommendations are surfaced on the storefront in the form of units such as “Customers who viewed this product also viewed”, “Customers who bought this product also bought", "Recommended for you", and so on. Adobe Commerce Product Recommendations are powered by [Adobe Sensei](https://www.adobe.com/sensei.html), which uses artificial intelligence and machine-learning algorithms to perform a deep analysis of aggregated shopper data. This data, when combined with your Commerce catalog, results in highly engaging, relevant, and personalized experiences for the shopper.

{:.bs-callout-info}
If your storefront is implemented using PWA Studio, refer to the [PWA documentation](https://developer.adobe.com/commerce/pwa-studio/integrations/product-recommendations/). If you use a custom frontend technology such as React or Vue JS, refer to the user guide to learn how to integrate Product Recommendations in a [headless]({{ site.user_guide_url }}/recommendations/headless.html) environment.

## Architectural overview

At a high level, Commerce Product Recommendations are deployed as SaaS. The Commerce side includes the storefront, which contains the event collector and recommendations layout template, and the backend, which includes the Data Services, SaaS Export module, and the Admin UI. Adobe Sensei intelligence services are leveraged on the SaaS side.

   ![Product recommendations architecture diagram]({{ page.baseurl }}/recommendations/images/arch-diag-sensei.svg)

Once the recommendation modules are installed and configured, your storefront will begin collecting behavioral data. Adobe Sensei processes this behavioral data along with your catalog data and calculates product associations that are leveraged by the recommendations service. At this point, the merchant can create, manage, and deploy product recommendation units to their storefront directly from the Admin UI.

## Types of data {#typesofdata}

Product Recommendations require the following data:

-  **Behavioral** - Data from a shopper's engagement on your site, such as product views, items added to a cart, and purchases. Commerce and Adobe Sensei do not collect personally identifiable information.

-  **Catalog** - Product metadata, such as name, price, availability, and so on.

When you install the `magento/product-recommendations` module, Adobe Sensei aggregates the behavioral and catalog data, creating Product Recommendations for each recommendation type. The Product Recommendations service then deploys those recommendations to your storefront.

## Next steps

Read the following topics to get started with Product Recommendations:

-  [How to Implement Product Recommendations]({{ site.user_guide_url }}/recommendations/implementation-workflow.html)

-  [Install and configure Product Recommendations]({{ site.user_guide_url }}/recommendations/install-configure.html)

-  [Create Product Recommendations]({{ site.user_guide_url }}/recommendations/create.html)
