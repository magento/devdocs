---
group: product-recommendations
title: Test Recommendations
ee_only: True
---

Before you deploy recommendations to your production environment, you should test on a non-production environment to ensure everything is working as expected.

The most effective way to test Product Recommendations is to use recommendations generated from shopper behavioral data collected from your storefront. In a non-production environment, however, it is likely you will not have any behavioral data from shoppers. The only recommendation type you can test without behavioral data is **More like this**. This recommendation type does not require any input data as it uses a direct content similarity match.

The following recommendation types require behavioral data:

-  **Most Viewed**
-  **Viewed this, viewed that**
-  **Bought this, bought that**

So how can you test your recommendations in a non-production environment using behavioral data? There are a couple of options.

## Fetch recommendations from your production environment (recommended)

Magento allows you to fetch recommendations from your production environment and preview them in your non-production environment by switching the [SaaS Environment](https://docs.magento.com/user-guide/marketing/recommendation-change-source.html).

## Generate behavioral data on your non-production environment

1. Deploy the `magento/product-recommendations` module to a non-production environment where the catalog data is similar to your production catalog.

1. Use one of the non-production SaaS Environment IDs for [configuration](https://docs.magento.com/m2/ce/user_guide/configuration/services/saas.html) in the Magento Admin.

1. Recruit testers who will mimic the behavior of actual shoppers. Through their testing, they will generate behavioral events on your non-production environment. Those events will be used to produce the product affinities that power recommendations. Magento suggests testers interact with the following recommendation types:

   -  **Most Viewed** - Requires minimal input data. Testers need to view products.
   -  **Viewed this, viewed that** - Requires multiple testers to view multiple products.
   -  **Bought this, bought that** - Requires multiple testers to purchase multiple products.

### Caveats

-  The non-production SaaS Environment ID identifies an isolated environment in which the resulting product recommendations will be based entirely on the behavioral data generated on the associated storefront.

-  Because you will not have large amounts of behavioral data, input data for computing product associations is sparse. However, that data is still sent to Sensei to compute the machine learning models and provide recommendations based on data you generated within this environment.
