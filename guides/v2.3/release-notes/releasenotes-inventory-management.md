---
group: release-notes
title: Magento Inventory Management Release Notes
---

*Release notes published January 2019.*

Magento Multi-source inventory 1.1.0 (module version: inventory-composer-metapackage = 1.1.0)  is compatible with Magento 2.3.0 Open Source, Magento Commerce, and Magento Commerce Cloud.  



**Inventory Management (provided by the [Multi Source Inventory (MSI)](https://github.com/magento-engcom/msi) project)** is now available with Magento 2.3.0. Merchants can use Inventory Management to manage inventory for all product types in a single warehouse and across complex shipping networks. Merchants can manage these locations as sources, tracking on-hand inventory quantities per product. Stocks map these sources and sales channels (websites) to provide an accurate, salable quantity as inventory pools for concurrent checkout and product reservations. Inventory Management also updates order and shipment options, giving you full control over your stock. 
  	
Inventory Management is a Magento Community Engineering special project open to contributors. To take part and contribute, see the [MSI GitHub](https://github.com/magento-engcom/msi) repository and [wiki](https://github.com/magento-engcom/msi/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C5FU5E2HY) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

   * [Inventory Management overview](https://devdocs.magento.com/guides/v2.3/inventory/index.html) for developer documentation 

   * [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) for merchant information and instructions 


### v1.1.0

-   {:.new}**Distance Priority Algorithm**
The Distance Priority Algorithm is a new out-of-the-box Source Selection Algorithm for distance-based shipping recommendations. This algorithm compares the location of the shipping destination address with source locations to determine the closest source to fulfill shipments. The distance may be determined by either physical distance or the time spent traveling from one location to another, using imported geocode location data or Google directions (driving, walking, or bicycling). See [Configuring Distance Priority Algorithm](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) in the Magento Admin User Guide.


-   {:.fix}**Added support for Elasticsearch for Single and Multi Sources modes**. You can now configure and use Elasticsearch with custom stocks. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) for 2.3.0 Open Source and Commerce. See [Set up Elasticsearch service](http://devdocs.magento.com/guides/v2.3/config-guide/elasticsearch/es-overview.html) for installation information and [Elasticsearch](https://docs.magento.com/m2/ce/user_guide/catalog/search-elasticsearch.html) to configure through the Admin. <!-- PR https://github.com/magento-engcom/msi/pull/1943 -->
 
-   {:.fix}Resolved performance issues with Default Stock to drastically increase performance with numerous operations. Improvements increase performance for Single Source mode, Transfer Inventory to Source, storefront category pages, and Salable Quantity calculations. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) requiring custom stocks creation for Single
Source merchants for 2.3.0 Open Source and Commerce.  <!-- All Performance Track issues resolved
https://github.com/magento-engcom/msi/issues?q=is%3Aopen+is%3Aissue+label%3APerformance -->
 

-   {:.fix}Resolved issues with Out of Stock status and bulk Inventory Transfer to Stock for configurable and
grouped products. Selecting the parent products and performing bulk actions does not affect the
product status. If the parent product was In Stock, it remains In Stock.
<!-- PR https://github.com/magento-engcom/msi/pull/1972 -->





