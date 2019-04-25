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
- [Manage Inventory Management modules]({{site.baseurl}}/extensions/inventory-management/) for module maintenance, updates, and upgrades

The release notes include:

-   {:.new}New features
-   {:.fix}Fixes and improvements
-   {:.bug}Known issue

### v1.1.2

{{site.data.var.im}} 1.1.2 (module version: inventory-composer-metapackage = 1.1.2) is compatible with version 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

- {:.new} **Performance improvements for product operations** - Currently, when saving or deleting a product assigned to the Default Stock, the system synchronizes data with the Legacy Catalog Inventory. These improvements dramatically increased the performance and reduce the time to save for synchronous updates. A new [Legacy stock alignment](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-options-global.html) option runs these saves asynchronously for increased performance. We further increased performance for sorting sources when reviewing and selecting SSA options in shipments. <!-- https://github.com/magento-engcom/msi/pull/2056 https://github.com/magento-engcom/msi/pull/2090 -->

- {:.new} **Added GraphQL support for MSI** - To support Inventory Management orders in GraphQL, Inventory Management includes a new `magento/module-inventory-graph-ql` module and attributes. The GraphQL [Products endpoint](https://devdocs.magento.com/guides/v2.3/graphql/reference/products.html) includes the `only_x_left_in_stock` and `stock_status` attributes. <!-- https://github.com/magento-engcom/msi/pull/2124 -->

- {:.new} **Added a Partial Stock Transfer API** - Current bulk trasfer endpoints move all assigned quantity from an origin to destination source. The new `/rest/V1/inventory/bulk-partial-source-transfer` endpoint allows merchants to transfer partial stock from source-to-source as a bulk operation. Enter a request to the endpoint with the `sku`, `qty`, `origin_source_code`, and `destination_source_code` to transfer a specific amount of quantity. Transfers verify the source is assigned to the sku, enough quantity exists to transfer, etc. See [Inventory Bulk Actions](https://devdocs.magento.com/guides/v2.3/rest/modules/inventory/bulk-inventory.html). <!-- https://github.com/magento-engcom/msi/pull/2117 -->

- {:.new} **Added Reservation CLI commands** - A set of new CLI commands give you options to check and resolve reservation inconsistencies. All reservations automatically generate and update through compensation reservations for submitted orders, canceled orders, issued credit memos, etc. These commands return a list of detected inconsistencies by Order ID, SKU, and Stock ID. See [Inventory CLI reference](https://devdocs.magento.com/guides/v2.3/inventory/inventory-cli-reference.html). <!-- https://github.com/magento-engcom/msi/pull/2199 https://github.com/magento-engcom/msi/pull/2184 https://github.com/magento-engcom/msi/pull/2171 https://github.com/magento-engcom/msi/pull/2148  -->

- {:.new} **Simplified UI for Assigned Sources** - To better display assigned sources and allow for modifying quantities, the Assigned Sources table in product views has been simplified. All sources list by source name, not by code. Hover over the name to see the code. The Notify Quantity threshold and actions have reduced text for use of use.

- {:.new} **Magento B2B products support** - This release fully supports B2B products assigned to the default and custom sources. B2B merchants can fully use Single and Multi source features for Inventory Management. <!-- https://github.com/magento/partners-magento2ee/pull/18 https://github.com/magento-engcom/msi/issues/1828 -->

- {:.fix} Properly return `source_code` in the response for the `/rest/V1/shipments` REST endpoint. <!-- https://github.com/magento-engcom/msi/pull/2142 -->

- {:.fix} Resolved issue to correctly clear reservations and update product quantities after issuing a credit memo for an unshipped order. When you select the option to <!-- https://github.com/magento-engcom/msi/pull/2179 -->

- {:.fix} Resolved issue to correctly save quantity for configurable product children when entering quantities during product creation. <!-- https://github.com/magento-engcom/msi/pull/2158 -->


### v1.1.0

{{site.data.var.im}} 1.1.0 (module version: inventory-composer-metapackage = 1.1.0) is compatible with version 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

- {:.new} **Distance Priority Algorithm** — The Distance Priority Algorithm is a new, out-of-the-box Source Selection Algorithm for distance-based shipping recommendations. This algorithm compares the location of the shipping destination address with source locations to determine the closest source to fulfill shipments. The distance may be determined by either physical distance or the time spent traveling from one location to another, using imported geocode location data or Google directions (driving, walking, or bicycling). See [Configuring Distance Priority Algorithm](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) in the _Magento Admin User Guide_.

- {:.new} **Expanded source quantity list** — Merchants with a high number of sources can easily hover and view all sources per product through the Product Grid. Each product displays a minimum of five sources and matching quantities. When hovering over the sources, you can scroll through the entire list of sources and current quantities. See [Managing Inventory Quantities](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-manage-inventory-quantities.html).

- {:.fix} **Added support for Elasticsearch for single and multi sources modes** — You can now configure and use Elasticsearch with custom stocks. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}. See [Set up Elasticsearch service](http://devdocs.magento.com/guides/v2.3/config-guide/elasticsearch/es-overview.html) for installation information and [Elasticsearch](https://docs.magento.com/m2/ce/user_guide/catalog/search-elasticsearch.html) to configure through the Admin. <!-- PR https://github.com/magento-engcom/msi/pull/1943 -->

- {:.fix} Resolved performance issues with Default Stock to drastically increase performance with numerous operations. Improvements increase performance for Single Source mode, Transfer Inventory to Source, Storefront Category pages, and Salable Quantity calculations. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) requiring custom stocks creation for Single
Source merchants in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}.  <!-- All Performance Track issues resolved
https://github.com/magento-engcom/msi/issues?q=is%3Aopen+is%3Aissue+label%3APerformance -->

- {:.fix} Resolved issues with Out of Stock status and bulk Inventory Transfer to Stock for configurable and grouped products. Selecting the parent products and performing bulk actions does not affect the product status. If the parent product was In Stock, it remains In Stock.
<!-- PR https://github.com/magento-engcom/msi/pull/1972 -->

- {:.bug} Known issue with Magento v2.3.1 - Asynchronous migration of data between sources will encounter issues due to changes in Asynchronous APIs with topic names reflecting PHP class and method names. We recommend using synchronous operations, setting **Run asynchronously** to "No". To configure, see [Configure Global Options](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-options-global.html) in the Magento User Guide.
