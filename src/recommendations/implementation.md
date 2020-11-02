---
group: product-recommendations
title: How to Implement Product Recommendations
ee_only: True
---

To help you implement product recommendations on your storefront, use the following workflow:

1. **Deploy data collection to production**

   Product Recommendations are made up of two main data sources: [catalog and behavioral]({{ page.baseurl }}/recommendations/product-recs.html#types-of-data). By deploying data collection to production, you are enabling a JavaScript application to collect the behavioral data. The more data you collect, the more accurate your recommendations will be. As soon as you start collecting data, you can pull that data into your non-production environment and experiment with different recommendation types on different pages.

   {:.bs-callout-tip}
   Deploying data collection does not change your storefront's appearance or your shopper's experience. Only creating and deploying recommendation units alters the customer experience on your storefront. Make sure you test on your non-production environment before deploying to production. Also, do not create recommendation units until you customize your template. See the next step.

   See [Install and configure the Product Recommendations module]({{ page.baseurl }}/recommendations/install-configure.html) to learn how to complete this step.

1. **Customize the template to match your style**

   Your storefront represents your brand, so make sure you modify the product recommendations template to match the style of your site.

   {:.bs-callout-tip}
   By customizing the template, you can specify your stylesheet, overwrite where a recommendation unit will appear on a page, and so on.

   See [Customize]({{ page.baseurl }}/recommendations/customize.html) to learn how to complete this step.

1. **Test recommendations on your non-production environment**

   It is always a best practice to test a new technology on your non-production environment before you deploy to production. Testing recommendations on your non-production environment allows you to play with different recommendation unit types, positioning, and pages. You can pull recommendations based on behavioral data already gathered while testing in your non-production environment, so that recommendation results are based on the shopping behavior of actual customers.

   {:.bs-callout-tip}
   Ensure your non-production environment catalog is largely the same as the one that you have in production. Using similar catalogs ensures that the products returned in the recommendation units closely mimic those on production.

   See [Fetch behavioral data from your production environment]({{ page.baseurl }}/recommendations/test.html) to learn how to complete this step.

1. **Create and deploy recommendations to your production storefront**

   Now that you have deployed the behavioral data collection in production, modified the product recommendations template, and tested recommendations using actual shopper behavior, you are now ready to promote all code to production and [create and deploy product recommendations](https://docs.magento.com/user-guide/marketing/create-new-rec.html) for your customers.

   {:.bs-callout-tip}
   While this is the final step in implementing recommendations, there are [further actions you can take](https://docs.magento.com/user-guide/marketing/recommendation-best-practices.html) to make sure product recommendations increase conversions, boost revenue, and stimulate shopper engagement.
