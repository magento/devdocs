---
group: product-recommendations
title: Release Notes
ee_only: True
---

The release notes contain updates to the following Product Recommendations modules:

-  Product Recommendations metapackage: `magento/product-recommendations`
-  Page Builder support in Product Recommendations (optional) module: `magento/module-page-builder-product-recommendations`
-  **(Beta)** Visual similarity recommendation type support for Product Recommendations (optional) module: `magento/module-visual-product-recommendations`

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## 3.1.0 of magento/product-recommendations for Magento Commerce 2.4.0

-  {:.new}Added the ability to [resync your catalog to SaaS services via command line]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-catalog-sync.html)
-  {:.new}Added support for database table prefixes
-  {:.fix}Removed PHP 7.1 support

## 3.0.8 of magento/product-recommendations for Magento Commerce 2.4.0

-  {:.fix}Fixed an issue where events were sent for data collection before the module was configured, causing invalid traffic

## 3.0.6 of magento/product-recommendations for Magento Commerce 2.4.0

-  {:.new}**(Beta)** Includes support for new [Visual similarity recommendation type](https://docs-beta.magento.com/user-guide/marketing/prex-type-visualsim.html)

## 1.0.0 of magento/module-visual-product-recommendations for Magento Commerce 2.4.0

-  {:.new}**(Beta)** [Visual similarity](https://docs-beta.magento.com/user-guide/marketing/prex-type-visualsim.html). With the _Visual similarity_ recommendation type, you can deploy a recommendation unit to your product detail page that displays products that are visually similar to the product being viewed.

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
