---
group: advanced-reporting
title: Modules providing advanced reporting
functional_areas:
    - Reports
---

Advanced reporting functionality is implemented in the following Magento modules.

[Analytics] implements the following:

  * Enabling subscription to the Magento Business Intelligence (MBI) and automatic re-subscription
  * Changing the base URL without change of the MBI account
  * Declaring the configuration schemas for [report data collection]
  * Collecting the Magento instance data as reports for the MBI
  * Introducing API that provides the collected data
  * Extending Magento configuration with the module parameters:
    * Subscription status (enabled/disabled)
    * Industry (a business area in which the instance website works)
    * Time of data collection (time of the day when the module collects data)

[CatalogAnalytics] configures data definitions for data collection related to the Catalog module entities

[CustomerAnalytics] configures data definitions for data collection related to the Customer module entities

[QuoteAnalytics] configures data definitions for data collection related to the Quote module entities

[ReviewAnalytics] configures data definitions for data collection related to the Review module entities

[SalesAnalytics] configures data definitions for data collection related to the Sales module entities

[WishlistAnalytics] configures data definitions for data collection related to the Wishlist module entities

<!-- LINK DEFINITIONS -->

[Analytics]: {{ page.baseurl }}/mrg/ce/Analytics.html
[CatalogAnalytics]: {{ page.baseurl }}/mrg/ce/CatalogAnalytics.html
[CustomerAnalytics]: {{ page.baseurl }}/mrg/ce/CustomerAnalytics.html
[QuoteAnalytics]: {{ page.baseurl }}/mrg/ce/QuoteAnalytics.html
[ReviewAnalytics]: {{ page.baseurl }}/mrg/ce/ReviewAnalytics.html
[SalesAnalytics]: {{ page.baseurl }}/mrg/ce/SalesAnalytics.html
[WishlistAnalytics]: {{ page.baseurl }}/mrg/ce/WishlistAnalytics.html

[report data collection]: ./data-collection.html

<!-- ABBREVIATIONS -->
*[MBI]: Magento Business Analytics