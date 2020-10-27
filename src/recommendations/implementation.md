---
group: product-recommendations
title: Implementation Steps
ee_only: True
---

To help you implement product recommendations on your storefront, use the following workflow:

1. **Deploy data collection to production**
   -  **Why** - The more data you collect the more accurate your recommendations will be. As soon as you start collecting data, you can pull that data into your non-production environment and experiment with different recommendation types on different pages.
   -  **How** - [Install the Product Recommendations module]({{ page.baseurl }}/recommendations/install-configure.html).
   -  **Notes** - Deploying data collection will not change your storefront's appearance or your shopper's experience. Only creating and deploying recommendation units will introduce new sections on your storefront. Do not create recommendation units until you customize your template.

1. **Customize the template to match your style**
   -  **Why** - Your storefront represents your brand so make sure you modify the product recommendations template to match the style of your site.
   -  **How** - [Customize]({{ page.baseurl }}/recommendations/customize.html) the product recommendations template.
   -  **Notes** - By customizing the template you can specify your stylesheet, overwrite where a recommendation unit will appear on a page, and so on.

1. **Test recommendations on your non-production environment**
   -  **Why** - It is always a best practice to test a new technology on your non-production site before you deploy to production. Testing recommendations on your non-production site allows you to play with different recommendation unit types, positioning, and pages. Because you already deployed the data collection JavaScript to production, you can now pull behavioral data from production so the recommendations you create on your non-production site reflect shopping behavior from actual customers.
   -  **How** - [Fetch behavioral data from your production environment]({{ page.baseurl }}/recommendations/test.html)
   -  **Notes** - Ensure your non-production environment catalog is largely the same as the one that you have in production. Using similar catalogs ensures that the products returned in the recommendation units closely mimic those on production.

1. **Create and Deploy recommendations to your production storefront**
   -  **Why** - Now now that you have deployed the data collection JavaScript to production, modified the product recommendations template, and tested recommendations using actual shopper behavior, you are now ready to create and deploy recommendations on production.
   -  **How** - [Create product recommendations](https://docs.magento.com/m2/ee/user_guide/marketing/create-new-rec.html)
   -  **Notes** - While this is the final step in implementing recommendations, there are [further actions you can take](https://docs.magento.com/user-guide/marketing/recommendation-best-practices.html) to make sure recommendations increase conversions, boost revenue, and stimulate shopper engagement.
