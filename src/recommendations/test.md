---
group: product-recommendations
title: Test Recommendations
ee_only: True
---

Before you deploy recommendations to your production environment, you should test on a non-production environment to ensure everything is working as expected.

Product Recommendations return products based on shopper [behavioral data]({{ page.baseurl }}/recommendations/product-recs.html#types-of-data) collected from your storefront. In a non-production environment, however, it is likely you will not have any behavioral data from shoppers. The only recommendation type you can test without behavioral data is **More like this** and **Visual Similarity**. These recommendation types do not require any input data, as they use a direct content similarity match.

How can you test your recommendations in a non-production environment using behavioral data? There are a couple of options.

## Fetch recommendations from your production environment (recommended)

Magento allows you to fetch recommendations from your production environment and preview them in your non-production environment by switching the SaaS Data Space.

To fetch recommendations from your production environment, you must make sure that:

-  Storefront data collection is [configured and enabled]({{ page.baseurl }}/recommendations/verify.html) on production.
-  Your non-production environment catalog is largely the same as the one that you have in production. Using similar catalogs ensures that the products returned in the recommendation units closely mimic those on production.

See the [user guide](https://docs.magento.com/user-guide/marketing/recommendation-change-source.html) for more information.

## Generate behavioral data on your non-production environment

1. Deploy the `magento/product-recommendations` module to a non-production environment where the catalog data is similar to your production catalog.

1. Use one of the non-production Data Space IDs for [configuration](https://docs.magento.com/m2/ce/user_guide/configuration/services/saas.html) in the Admin.

1. Generate the data yourself by clicking around your storefront to mimic the behavior of actual shoppers (or create an automation script to do this). Through your testing, you will generate behavioral events on your non-production environment. Those events will be used to produce the product affinities that power recommendations. For testing, Magento suggests you interact with the following recommendation types:

   -  **Most Viewed** - Requires minimal input data. Users need to view products.
   -  **Viewed this, viewed that** - Requires multiple users to view multiple products.
   -  **Bought this, bought that** - Requires multiple users to purchase multiple products.

### Caveats

-  The behavioral and catalog data associated with your non-production SaaS Data Space identifies an isolated environment. This results in Product Recommendations based entirely on the behavioral data generated on the associated storefront.

-  Because you will not have large amounts of behavioral data, input data for computing product associations is sparse. However, that data is still sent to Adobe Sensei to compute the machine learning models and provide recommendations based on data you generated within this environment.
