---
group: product-recommendations
title: How to Implement Product Recommendations
ee_only: True
---

To help you implement product recommendations on your storefront, use the following workflow:

{:.bs-callout-info}
If your storefront is implemented using PWA Studio, refer to the [PWA documentation](https://developer.adobe.com/commerce/pwa-studio/integrations/product-recommendations/). If you use a custom frontend technology such as React or Vue JS, learn how to [integrate]({{ site.devdocs_url }}/recommendations/headless.html) Product Recommendations into your headless storefront.

1. **Deploy data collection to production**

   Deploying Product Recommendations requires two main data sources: [catalog and behavioral]({{ page.baseurl }}/recommendations/product-recs.html#types-of-data). Because production is the only environment where your shoppers' actions are captured and analyzed, it is in your best interest to start data collection on production as early as possible. See the [user guide]({{ site.user_guide_url }}/marketing/product-recommendations.html#trainmlmodels) to learn how Adobe Sensei trains machine learning models that results in higher quality recommendations. As an added benefit, when you start collecting behavioral data on production, you can [fetch recommendations based on this production data while operating in non-production environments]({{ page.baseurl }}/recommendations/test.html). This allows you to test and experiment with different recommendations that are computed based on real shopper data collected in production.

   To deploy data collection to production, you need to [install and configure the Product Recommendations module]({{ page.baseurl }}/recommendations/install-configure.html) by [providing an API key]({{ site.user_guide_url }}/system/saas.html#apikey).

   {:.bs-callout-tip}
   Deploying data collection does not change your storefront's appearance or your shoppers' experience. Only creating and deploying recommendation units alters the customer experience on your storefront. Make sure you test on your non-production environment before deploying to production. Also, do not create recommendation units until you customize your template. See the next step.

1. **Customize the template to match your style**

   Your storefront represents your brand, so make sure you modify the product recommendations template to match your site theme.

   {:.bs-callout-tip}
   By customizing the template, you can specify your stylesheet, overwrite where a recommendation unit will appear on a page, and so on.

   See [Customize]({{ page.baseurl }}/recommendations/customize.html) to learn how to complete this step.

1. **Test recommendations on your non-production environment**

   It is always a best practice to test a new technology on your non-production environment before you deploy to production. Testing recommendations on your non-production environment allows you to play with different recommendation unit types, positioning, and pages. You can pull recommendations based on behavioral data already gathered on production while testing in your non-production environment, so that recommendation results are based on the shopping behavior of actual customers.

   {:.bs-callout-tip}
   Ensure your non-production environment catalog is largely the same as the one that you have in production. Using similar catalogs ensures that the products returned in the recommendation units closely mimic those on production.

   See [Fetch behavioral data from your production environment]({{ page.baseurl }}/recommendations/test.html) to learn how to complete this step.

1. **Create and deploy recommendations to your production storefront**

   Now that you have deployed the behavioral data collection in production, modified the product recommendations template, and tested recommendations using actual shopper behavior, you are now ready to promote all code to production and [create shopper-facing product recommendations]({{ site.user_guide_url }}/marketing/create-new-rec.html).

   {:.bs-callout-tip}
   While this is the final step in implementing recommendations, there are [further actions you can take]({{ site.user_guide_url }}/marketing/recommendation-best-practices.html) to make sure product recommendations increase conversions, boost revenue, and stimulate shopper engagement.
