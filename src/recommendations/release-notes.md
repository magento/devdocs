---
group: product-recommendations
title: Release Notes
ee_only: True
---

The release notes contain updates to the following Product Recommendations modules:

-  Product Recommendations metapackage: `magento/product-recommendations`
-  Page Builder support in Product Recommendations (optional) module: `magento/module-page-builder-product-recommendations`

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## 3.0.5 of magento/product-recommendations for Magento Commerce 2.4.0

-  {:.fix}Fixed the "Unable to retrieve product options data" error that could occur during catalog export
-  {:.fix}The currency symbol in the **Revenue** column on the **Product Recommendations** dashboard now correctly reflects the configured base currency

## 3.0.4 of magento/product-recommendations for Magento Commerce 2.4.0

-  {:.fix}Added support for Magento Commerce 2.4.0

## 3.0.3 of magento/product-recommendations for Magento Commerce 2.3.x

-  {:.fix}Improved symbol implementation in storefront template

## 1.0.4 of magento/module-page-builder-product-recommendations for Page Builder for Magento Commerce 2.3.1 and later

-  {:.new}Added Product Recommendation name when editing the Page Builder content type

## 3.0.2 magento/product-recommendations for Magento Commerce 2.3.x

-  {:.new}Added a status column on the grid when selecting Recommendation units in Page Builder
-  {:.fix}Fixed an issue with incorrect http/https protocols in product and image URLs

## 3.0.1 of magento/product-recommendations for Magento Commerce 2.3.x

This is a major version release. You must [edit your project's root composer.json file]({{ page.baseurl }}/recommendations/install-configure.html#update-your-product-recommendations-installation).

-  {:.new}Fetch Product Recommendations from alternate SaaS environments. This allows you to use product recommendations computed in your product environment on other, non-production environments. [Switching SaaS Environments](https://docs.magento.com/user-guide/marketing/recommendation-change-source.html) further describes this feature.

-  {:.fix}Fixed an issue where checkout was inhibited for shoppers using uBlock Origin
-  {:.fix}Fixed an issue sending extraneous add-to-cart events

## 1.0.3 of magento/module-page-builder-product-recommendations for Page Builder for Magento Commerce 2.3.1 and later

-  {:.new}Page Builder support. With the Page Builder integration, you can accurately and granularly place Recommendation units in any arbitrary location on Page Builder-authored content. You also can style the headings and recommendation units themselves. [Page Builder support](https://docs.magento.com/user-guide/marketing/page-builder-add-product-recs.html) further describes this feature.

## 2.0.0 of magento/product-recommendations for Magento Commerce 2.3.x

-  {:.new}General availability release!

## Documentation

To learn more about Product Recommendations and Product Recommendations development:

-  [Developer Documentation]({{ page.baseurl }}/recommendations/product-recs.html)
-  [User Guide](https://docs.magento.com/user-guide/marketing/product-recommendations.html)
