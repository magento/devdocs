---
group: inventory
title: Release Notes
---

**{{site.data.var.im}} (provided by the [Magento Inventory (was MSI)](https://github.com/magento/inventory) project)** is available with {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}} 2.3.x. Merchants can use {{site.data.var.im}} to manage inventory for all product types in a single warehouse and across complex shipping networks. Manage these locations as sources, tracking on-hand inventory quantities per product. Stocks connect these sources with sales channels (websites) to provide an accurate salable quantity, calculating available on-hand products, pending orders (reservations), and configured thresholds. {{site.data.var.im}} also updates order and shipment options, giving you full control over your inventory and deductions at the source level.

{{site.data.var.im}} is a Magento Community Engineering special project open to contributors. To take part and contribute, see the [MSI GitHub](https://github.com/magento/inventory) repository and [wiki](https://github.com/magento/inventory/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/messages/C5FU5E2HY) channel ([self signup](https://tinyurl.com/engcom-slack)) to discuss the project.

See the following documentation:

-  [{{site.data.var.im}} overview]({{ page.baseurl }}/inventory/index.html) for developer documentation
-  [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) for merchant information and instructions
-  [Install {{site.data.var.im}}]({{site.baseurl}}/extensions/inventory-management/) for module maintenance, updates, and upgrades
-  [Upcoming releases]({{site.baseurl}}/release/) for supported and compatible releases

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

### v1.2.1
{{site.data.var.im}} 1.2.1 (module version: `magento/inventory-metapackage = 1.2.1`) is supported with version 2.4.1 and compatible with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} Fixed known issue related to `inventory_cleanup_reservations` cron job, addressed issue related to In-Store Pickup functionality for bundle products, general improvements to stock calculation, bundle product support and backorders functionality.

-  {:.new} **Functional tests.** Introduced new functional tests to provide additional coverage for In-Store Pickup functionality.

### v1.2.0

{{site.data.var.im}} 1.2.0 (module version: `magento/inventory-metapackage = 1.2.0`) is supported with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new} **In-store delivery method.** Added a new option for users to select a source to be used as a pickup location during checkout. See [In-store Delivery](https://docs.magento.com/user-guide/shipping/shipping-in-store-delivery.html).

-  {:.new} **Bundle product support for multi source mode.** Inventory supports all product types with multiple sources.

-  {:.new} **Asynchronous stock re-indexing.** Added the ability to asynchronously re-index stock and improved the performance of several critical scenarios.

-  {:.new} **Bulk interfaces.** Introduced new bulk interfaces for salability check: `\Magento\InventorySalesApi\Api\AreProductsSalableInterface`, `\Magento\InventorySalesApi\Api\AreProductsSalableForRequestedQtyInterface`.

-  {:.new} **Increased test coverage.** New functionality covered with automated tests, extended coverage for discovered and fixed issues.

-  {:.fix} Numerous bug fixes to resolve issues with source assignment, scalable environment feature support, and compatibility with PHP 7.4, MySQL 8, and PHPUNIT 9.

-  {:.bug} **Known issue.** The absence of the `object_id` field in the reservations metadata is preventing the `inventory_cleanup_reservations` cron job from working properly. This issue was introduced in [magento/inventory#3046](https://github.com/magento/inventory/pull/3046).

   **Workaround:** Execute the following MySQL queries to manually cleanup reservations:

   ```sql
   SELECT GROUP_CONCAT(reservation_id) FROM inventory_reservation GROUP BY stock_id, sku HAVING SUM(quantity) = 0;
   DELETE FROM inventory_reservation where reservation_id IN (result_of_the_first_query);
   ```

### v1.1.6
{{site.data.var.im}} 1.1.6 (module version: `inventory-composer-metapackage = 1.1.6`) is supported with version 2.3.6 and compatible with version 2.3.5, 2.3.4, 2.3.3, 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new} **Asynchronous stock re-indexing.** Added the ability to asynchronously re-index stock and improved the performance of several critical scenarios.

-  {:.fix} Bug fixes to resolve issues related to backorders, credit memos, low stock report grid, fixes connected to "resolve inconsistencies" CLI tool and general improvements.

### v1.1.5

{{site.data.var.im}} 1.1.5 (module version: `inventory-composer-metapackage = 1.1.5`) is supported with version 2.3.5 and compatible with version 2.3.4, 2.3.3, 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new} **Update inventory once product SKU is changed.** Introduced a new configuration setting to switch to the new behavior: "Synchronize with Catalog".

-  {:.bug} Bug fixes to prevent product oversell, "Out of stock" products visibility on the storefront, numerous fixes for scalable environment support and user interface improvements.

-  {:.new} **Functional tests.** Introduced new functional tests to eliminate the test coverage gap. Fixed several issues to make tests more stable and reliable).

### v1.1.4

{{site.data.var.im}} 1.1.4 (module version: `inventory-composer-metapackage = 1.1.4`) is supported with version 2.3.4 and compatible with version 2.3.3, 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix}**Increased performance.** Introduced bunching logic for Inventory Reservations CLI command to reduce memory usage and avoid cases when the process is stuck without any response.

-  {:.new}**Increased test coverage.** Introduced many new Functional tests. Almost all manual Inventory scenarios are covered with automated tests.

-  {:.bug} Numerous bug fixes targeted to resolve issues with credit memos, grouped products, source and stock mass actions.

### v1.1.3

{{site.data.var.im}} 1.1.3 (module version: `inventory-composer-metapackage = 1.1.3`) is supported with version 2.3.3 and compatible with version 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix}**Better integration with {{site.data.var.ee}} and {{site.data.var.b2b}} features.** {{site.data.var.im}} now works correctly with the following features for websites using non-default inventory sources and stocks:
   -  Order by SKU ({{site.data.var.ee}})
   -  Quick order ({{site.data.var.b2b}})
   -  Requisition lists ({{site.data.var.b2b}})

-  {:.new}**Increased performance.** Storefront catalog browsing performance has significantly improved for websites running the default inventory stock and source.

-  {:.new}**Increased test coverage.** The automated Functional and Integration test coverage has increased significantly.

### v1.1.2

{{site.data.var.im}} 1.1.2 (module version: `inventory-composer-metapackage = 1.1.2`) is supported with version 2.3.2 and compatible with version 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new} **Added a Bulk Partial Stock Transfer Endpoint** - Current bulk transfer endpoints move all assigned quantity from an origin to a destination source. The new `/rest/V1/inventory/bulk-partial-source-transfer` endpoint allows merchants to transfer partial stock from source-to-source as a bulk operation. Enter a request to the endpoint with the `sku`, `qty`, `origin_source_code`, and `destination_source_code` to transfer a specific amount of quantity. Transfers verify the source is assigned to the `sku`, enough quantity exists to transfer, etc. See [Inventory Bulk Actions]({{ page.baseurl }}/rest/modules/inventory/bulk-inventory.html). <!-- https://github.com/magento/inventory/pull/2117 -->

-  {:.new} **Added Reservation CLI** - New commands give you options to detect and resolve reservation inconsistencies. As orders submit and change status, {{site.data.var.im}} generates initial reservations and updates through compensation reservations. These commands return a list of detected inconsistencies by Order ID, SKU, and Stock ID and create reservations to resolve. See [Inventory CLI reference]({{ page.baseurl }}/inventory/inventory-cli-reference.html). <!-- https://github.com/magento/inventory/pull/2199 https://github.com/magento/inventory/pull/2184 https://github.com/magento/inventory/pull/2171 https://github.com/magento/inventory/pull/2148  -->

-  {:.new} **Performance improvements for sources and SSA options** -  Sorting and selecting sources during shipment caused performance degradation for stocks with high numbers of sources. This release provides significant performance improvements to list and sort available sources when reviewing and selecting SSA options in shipments. <!-- https://github.com/magento/inventory/pull/2056 https://github.com/magento/inventory/pull/2090 -->

-  {:.new} **Added GraphQL support for {{site.data.var.im}}** - This release installs a new `magento/module-inventory-graph-ql` module. The GraphQL [Products endpoint]({{ page.baseurl }}/graphql/queries/products.html) now includes the `only_x_left_in_stock` and `stock_status` attributes for {{site.data.var.im}} support. <!-- https://github.com/magento/inventory/pull/2124 -->

-  {:.new} **Simplified UI for Assigned Sources** - The Assigned Sources table in product pages has simplified content for easier updates and increased performance when displaying many sources. All sources list by source name (hover over for `source_code`).

-  {:.new} **Export Aggregated Stock Service** - This release provides a new export aggregated stock service (retaining reservations in the system) to support external Sales Channels like Amazon, eBay, Google Shopping ads, etc.  <!-- https://github.com/magento/inventory/pull/2067 -->

-  {:.fix} Added `source_code` to the response for the GET `/V1/shipments` REST endpoint. <!-- https://github.com/magento/inventory/pull/2142 -->

-  {:.fix} Resolved issue to correctly clear reservations and update product quantities after issuing a credit memo for an unshipped order. When you select the option to <!-- https://github.com/magento/inventory/pull/2179 -->

-  {:.fix} Resolved issue to correctly save quantity for configurable product children when entering quantities during product creation. <!-- https://github.com/magento/inventory/pull/2158 -->

New modules for Inventory Management 1.1.2 Beta include:

```php
        'Magento_InventoryGraphQl' => 1,
        'Magento_InventoryReservations' => 1,
        'Magento_InventoryReservationsApi' => 1,
        'Magento_InventoryReservationCli' => 1,
        'Magento_InventoryExportStock' => 0,
        'Magento_InventoryExportStockApi' => 0,
```

### v1.1.0

{{site.data.var.im}} 1.1.0 (module version: `inventory-composer-metapackage = 1.1.0`)  is supported and compatible with version 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. {{site.data.var.im}} 1.1.1 released only as a package name update, supported with version 2.3.1 and compatible with version 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new} **Distance Priority Algorithm** — The Distance Priority Algorithm is a new, out-of-the-box Source Selection Algorithm for distance-based shipping recommendations. This algorithm compares the location of the shipping destination address with source locations to determine the closest source to fulfill shipments. The distance may be determined by either physical distance or the time spent traveling from one location to another, using imported geocode location data or Google directions (driving, walking, or bicycling). See [Configuring Distance Priority Algorithm](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) in the _Magento Admin User Guide_.

-  {:.new} **Expanded source quantity list** — Merchants with a high number of sources can easily hover and view all sources per product through the Product Grid. Each product displays a minimum of five sources and matching quantities. When hovering over the sources, you can scroll through the entire list of sources and current quantities. See [Managing Inventory Quantities](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-manage-inventory-quantities.html).

-  {:.fix} **Added support for Elasticsearch for single and multi sources modes** — You can now configure and use Elasticsearch with custom stocks. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}. See [Set up Elasticsearch service]({{ page.baseurl }}/config-guide/elasticsearch/es-overview.html) for installation information and [Elasticsearch](https://docs.magento.com/m2/ce/user_guide/catalog/search-elasticsearch.html) to configure through the Admin. <!-- PR https://github.com/magento/inventory/pull/1943 -->

-  {:.fix} Resolved performance issues with Default Stock to drastically increase performance with numerous operations. Improvements increase performance for Single Source mode, Transfer Inventory to Source, Storefront Category pages, and Salable Quantity calculations. This resolves a [known issue](https://devdocs.magento.com/guides/v2.3/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) requiring custom stocks creation for Single Source merchants in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}.

<!-- All Performance Track issues resolved https://github.com/magento/inventory/issues?q=is%3Aopen+is%3Aissue+label%3APerformance -->

-  {:.fix} Resolved issues with Out of Stock status and bulk Inventory Transfer to Stock for configurable and grouped products. Selecting the parent products and performing bulk actions does not affect the product status. If the parent product was In Stock, it remains In Stock.

<!-- PR https://github.com/magento/inventory/pull/1972 -->

-  {:.bug} Known issue with Magento v2.3.1 - Asynchronous migration of data between sources will encounter issues due to changes in Asynchronous APIs with topic names reflecting PHP class and method names. We recommend using synchronous operations, setting **Run asynchronously** to "No". To configure, see [Configure Global Options](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-options-global.html) in the Magento User Guide.
