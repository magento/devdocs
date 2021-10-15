---
group: product-recommendations
title: Release Notes
ee_only: True
---

The release notes contain updates to the following Product Recommendations modules:

-  As of March 2021, Product Recommendations are now supported in [PWA Studio](https://magento.github.io/pwa-studio/product-recs) storefronts.
-  Product Recommendations metapackage: `magento/product-recommendations`
-  Page Builder support in Product Recommendations (optional) module: `magento/module-page-builder-product-recommendations`
-  Visual similarity recommendation type support for Product Recommendations (optional) module: `magento/module-visual-product-recommendations`

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements

## 3.3.5 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Added [B2B support](https://docs.magento.com/user-guide/marketing/product-recommendations.html#b2bsupport) in Product Recommendations
-  {:.new}Added new feeds to [sync catalog data to Commerce services via the command line]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-catalog-sync.html)

## 3.3.3 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Added new recommendation types: [Conversion (view to cart)](https://docs.magento.com/user-guide/marketing/prex-type-convcart.html), [Conversion (view to purchase)](https://docs.magento.com/user-guide/marketing/prex-type-convpurchase.html), and [Recently viewed](https://docs.magento.com/user-guide/marketing/prex-type-recentview.html). Note that these new recommendation types are available in the `magento/product-recommendations` module 3.2.2 and later.
-  {:.fix}Fixed an issue where Fastly's Web Application Firewall (WAF) was incorrectly blocking a cookie
-  {:.fix}Fixed issue where products assigned to the non-default Store View were not being displayed in the **Recommendations Product Preview** panel when creating a recommendation for that specific Store View
-  {:.fix}Fixed issue where certain recommendation unit names in Page Builder prevented the recommendation unit to display on the storefront

## 3.3.2 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Fixed missing dependency for B2B support

## 3.3.1 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Added support for B2B customer group pricing. When you set a [price filter on a recommendation unit](https://docs.magento.com/user-guide/marketing/recommendation-incl-excl.html#filtertypes), B2B customers who are logged in will see the customer group pricing set for the products displayed.

## 3.3.0 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Added support for Adobe Client Data Layer to standardize behavioral data collection across {{site.data.var.ee}} features and services. See the [readme](https://github.com/adobe/magento-storefront-event-collector/blob/main/README.md) to learn more.

## 3.2.6 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Fixed a JavaScript modal error
-  {:.fix}Fixed an issue where Fastly's Web Application Firewall (WAF) was incorrectly blocking a cookie

## 3.2.5 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Renamed Magento Services to [Commerce Services](https://docs.magento.com/user-guide/system/saas.html) and improved usability in the Admin

## 3.2.4 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Fixed the "Unable to retrieve configurable product options data" error when indexing product attributes

## 3.2.3 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Fixed the "Unable to retrieve configurable product options data" error during Catalog Sync
-  {:.fix}Fixed an issue where the store code was not being set correctly when you enabled the "Add store code to URL" configuration
-  {:.fix}Improved detection of Admin Panel configuration changes to ensure these changes are reflected in Catalog Sync data

## 3.2.2 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Added the ability to [preview recommendation results](https://docs.magento.com/user-guide/marketing/create-new-rec.html#preview) at creation time. This might require that you update your module to the latest version.
-  {:.new}Added the ability to [monitor and manage](https://docs.magento.com/user-guide/system/catalog-sync.html) the catalog sync process from the Admin Panel
-  {:.new}Added [inclusion and exclusion filters](https://docs.magento.com/user-guide/marketing/recommendation-incl-excl.html) to control what products can and cannot be displayed in recommendations
-  {:.new}Added the [Visual similarity recommendation type](https://docs.magento.com/user-guide/marketing/prex-type-visualsim.html)

## 1.2.1 of magento/module-page-builder-product-recommendations for Page Builder for {{site.data.var.ee}} 2.4.0 and later

-  {:.new}Added support for the 3.2.0+ version of the `magento/product-recommendations` module

## 3.1.0 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}Added the ability to [resync your catalog to SaaS services via command line]({{ site.baseurl }}/guides/v{{ site.version }}/config-guide/cli/config-cli-subcommands-catalog-sync.html)
-  {:.new}Added support for database table prefixes
-  {:.fix}Removed PHP 7.1 support

## 3.0.8 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Fixed an issue where events were sent for data collection before the module was configured, causing invalid traffic

## 3.0.6 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}**(Beta)** Includes support for new [Visual similarity recommendation type](https://docs-beta.magento.com/user-guide/marketing/prex-type-visualsim.html)

## 1.0.0 of magento/module-visual-product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.new}**(Beta)** [Visual similarity](https://docs-beta.magento.com/user-guide/marketing/prex-type-visualsim.html). With the _Visual similarity_ recommendation type, you can deploy a recommendation unit to your product detail page that displays products that are visually similar to the product being viewed.

## 3.0.5 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Fixed the "Unable to retrieve product options data" error that could occur during catalog export
-  {:.fix}The currency symbol in the **Revenue** column on the **Product Recommendations** dashboard now correctly reflects the configured base currency

## 3.0.4 of magento/product-recommendations for {{site.data.var.ee}} 2.4.0

-  {:.fix}Added support for {{site.data.var.ee}} 2.4.0

## 3.0.3 of magento/product-recommendations for {{site.data.var.ee}} 2.3.x

-  {:.fix}Improved symbol implementation in storefront template

## 1.0.4 of magento/module-page-builder-product-recommendations for Page Builder for {{site.data.var.ee}} 2.3.1 and later

-  {:.new}Added Product Recommendation name when editing the Page Builder content type

## 3.0.2 magento/product-recommendations for {{site.data.var.ee}} 2.3.x

-  {:.new}Added a status column on the grid when selecting Recommendation units in Page Builder
-  {:.fix}Fixed an issue with incorrect http/https protocols in product and image URLs

## 3.0.1 of magento/product-recommendations for {{site.data.var.ee}} 2.3.x

This is a major version release. You must [edit your project's root composer.json file]({{ page.baseurl }}/recommendations/install-configure.html#update-your-product-recommendations-installation).

-  {:.new}Fetch Product Recommendations from alternate SaaS Data Spaces. This allows you to use product recommendations computed in your product environment on other, non-production environments. [Switching SaaS Data Spaces](https://docs.magento.com/user-guide/marketing/recommendation-change-source.html) further describes this feature.

-  {:.fix}Fixed an issue where checkout was inhibited for shoppers using uBlock Origin
-  {:.fix}Fixed an issue sending extraneous add-to-cart events

## 1.0.3 of magento/module-page-builder-product-recommendations for Page Builder for {{site.data.var.ee}} 2.3.1 and later

-  {:.new}Page Builder support. With the Page Builder integration, you can accurately and granularly place Recommendation units in any arbitrary location on Page Builder-authored content. You also can style the headings and recommendation units themselves. [Page Builder support](https://docs.magento.com/user-guide/marketing/page-builder-add-product-recs.html) further describes this feature.

## 2.0.0 of magento/product-recommendations for {{site.data.var.ee}} 2.3.x

-  {:.new}General availability release!

## Documentation

To learn more about Product Recommendations and Product Recommendations development:

-  [Developer Documentation]({{ page.baseurl }}/recommendations/product-recs.html)
-  [User Guide](https://docs.magento.com/user-guide/marketing/product-recommendations.html)
