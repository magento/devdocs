---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Modules providing advanced reporting
landing-page: Advanced Reporting
menu_title: Modules
menu_order: 2
menu_node:
version: 2.2
github_link: advanced-reporting/modules/index.md
---

Advanced reporting functionality is implemented in the following Magento modules:

* [Analytics]
  * enables subscription to the Magento Business Intelligence (MBI) and automatic re-subscription
  * changes the base URL with the same MBI account remained
  * declares the configuration schemas for [report data collection]
  * collects the Magento instance data as reports for the MBI
  * introduces API that provides the collected data
  * extends Magento configuration with the module parameters:
    * subscription status (enabled/disabled)
    * industry (a business area in which the instance website works)
    * time of data collection (time of the day when the module collects data)

* [CatalogAnalytics]
  * Configures data definitions for data collection related to the Catalog module entities
  
* [CustomerAnalytics]
  * Configures data definitions for data collection related to the Customer module entities
  
* [QuoteAnalytics]
  * Configures data definitions for data collection related to the Quote module entities
  
* [ReviewAnalytics]
  * Configures data definitions for data collection related to the Review module entities
  
* [SalesAnalytics]
  * Configures data definitions for data collection related to the Sales module entities
  
* [WishlistAnalytics]
  * Configures data definitions for data collection related to the Review module entities

<!-- LINK DEFINITIONS -->

[Analytics]: {{page.baseurl}}mrg/ce/Analytics.html
[CatalogAnalytics]: {{page.baseurl}}mrg/ce/CatalogAnalytics.html
[CustomerAnalytics]: {{page.baseurl}}mrg/ce/CustomerAnalytics.html
[QuoteAnalytics]: {{page.baseurl}}mrg/ce/QuoteAnalytics.html
[ReviewAnalytics]: {{page.baseurl}}mrg/ce/ReviewAnalytics.html
[SalesAnalytics]: {{page.baseurl}}mrg/ce/SalesAnalytics.html
[WishlistAnalytics]: {{page.baseurl}}mrg/ce/WishlistAnalytics.html

[report data collection]: ./data-collection

<!-- ABBREVIATIONS -->
*[MBI]: Magento Business Analytics