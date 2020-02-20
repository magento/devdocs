---
group: product-recommendations
title: Test Recommendations
---

Before you deploy recommendations to your production environment, you should test on a non-production environment to ensure everything is working as expected.

When testing recommendations in a non-production environment, it is likely you will not have any behavioral data from shoppers. Therefore, the best recommendations to test are those that do not rely on any behavioral data or data that requires inputs.

The following recommendation types are listed in the recommended order when testing in a non-production environment:

1. **More like this** - Does not require any input data. Uses a direct content similarity match.
1. **Most popular** - Requires minimal input data. Testers need to view products.
1. **Viewed this, viewed that** - Requires testers to view multiple products.
1. **Bought this, bought that** - Requires testers to add products to a cart and purchase those items.

## Testing recommendations on a non-production environment

1. Deploy the `product-recommendations` module to a non-production environment where the catalog data is similar to your production catalog.

1. <a href="mailto:magento-product-recs-feedback@adobe.com">Request</a> a non-production SaaS Environment ID.

1. Use this non-production ID when you [set]({{ page.baseurl }}/recommendations/configure.html#envid) the SaaS Environment ID in the Magento Admin.

### Caveats

-  You can use generated data, such as views, products added to a cart, and checkouts, and so on in your testing environment as identified by the non-production SaaS Environment ID Magento provides.

-  Because you will not have large amounts of behavioral data, input data for computing product associations is sparse. However, that data is still sent to Sensei to compute the machine learning models and provide recommendations based on data you generated within this environment.
