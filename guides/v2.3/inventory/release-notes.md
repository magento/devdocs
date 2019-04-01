---
group: inventory
title: Release Notes
redirect_from: /guides/v2.3/release-notes/release-management.html
---

*Release notes published January 2019.*

**{{site.data.var.im}} (provided by the [Multi Source Inventory (MSI)](https://github.com/magento-engcom/msi) project)** is now available with Magento 2.3.0. Merchants can use {{site.data.var.im}} to manage inventory for all product types in a single warehouse and across complex shipping networks. Merchants can manage these locations as sources, tracking on-hand inventory quantities per product. Stocks map these sources and sales channels (websites) to provide an accurate, salable quantity as inventory pools for concurrent checkout and product reservations. {{site.data.var.im}} also updates order and shipment options, giving you full control over your stock.

{{site.data.var.im}} is a Magento Community Engineering special project open to contributors. To take part and contribute, see the [MSI GitHub](https://github.com/magento-engcom/msi) repository and [wiki](https://github.com/magento-engcom/msi/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C5FU5E2HY) channel (or [self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

See the following documentation:

- [{{site.data.var.im}} overview](https://devdocs.magento.com/guides/v2.3/inventory/index.html) for developer documentation
- [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) for merchant information and instructions
- [Manage Inventory Management modules]({{page.baseurl}}/comp-mgr/install-extensions/inventory-management-installation.html) for module maintenance, updates, and upgrades

The release notes include:

-   {:.new}New features
-   {:.fix}Fixes and improvements

### v1.1.0

{{site.data.var.im}} 1.1.0 (module version: inventory-composer-metapackage = 1.1.0)  is compatible with version 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. 

- {:.new} **Distance Priority Algorithm**—The Distance Priority Algorithm is a new, out-of-the-box Source Selection Algorithm for distance-based shipping recommendations. This algorithm compares the location of the shipping destination address with source locations to determine the closest source to fulfill shipments. The distance may be determined by either physical distance or the time spent traveling from one location to another, using imported geocode location data or Google directions (driving, walking, or bicycling). See [Configuring Distance Priority Algorithm](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) in the _Magento Admin User Guide_.

- {:.new} **Expanded source quantity list**—Merchants with a high number of sources can easily hover and view all sources per product through the Product Grid. Each product displays a minimum of five sources and matching quantities. When hovering over the sources, you can scroll through the entire list of sources and current quantities. See [Managing Inventory Quantities](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-manage-inventory-quantities.html).

- {:.fix} **Added support for Elasticsearch for single and multi sources modes**—You can now configure and use Elasticsearch with custom stocks. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}. See [Set up Elasticsearch service](http://devdocs.magento.com/guides/v2.3/config-guide/elasticsearch/es-overview.html) for installation information and [Elasticsearch](https://docs.magento.com/m2/ce/user_guide/catalog/search-elasticsearch.html) to configure through the Admin. <!-- PR https://github.com/magento-engcom/msi/pull/1943 -->

- {:.fix} Resolved performance issues with Default Stock to drastically increase performance with numerous operations. Improvements increase performance for Single Source mode, Transfer Inventory to Source, Storefront Category pages, and Salable Quantity calculations. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) requiring custom stocks creation for Single
Source merchants in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}.  <!-- All Performance Track issues resolved
https://github.com/magento-engcom/msi/issues?q=is%3Aopen+is%3Aissue+label%3APerformance -->

- {:.fix} Resolved issues with Out of Stock status and bulk Inventory Transfer to Stock for configurable and
grouped products. Selecting the parent products and performing bulk actions does not affect the
product status. If the parent product was In Stock, it remains In Stock.
<!-- PR https://github.com/magento-engcom/msi/pull/1972 -->

- Known issue with Magento v2.3.1 - Asynchronous migration of data between sources will encounter issues due to changes in Asynchronous APIs with topic names reflecting PHP class and method names. We recommend using synchronous operations, setting **Run asynchronously** to "No". To configure, see [Configure Global Options](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-options-global.html) in the Magento User Guide.