---
group: inventory
title: Release Notes
---

**{{site.data.var.im}} (provided by the [Magento Inventory (was MSI)](https://github.com/magento/inventory) project)** is available with {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}} 2.3.x. Merchants can use {{site.data.var.im}} to manage inventory for all product types in a single warehouse and across complex shipping networks. Manage these locations as sources, tracking on-hand inventory quantities per product. Stocks connect these sources with sales channels (websites) to provide an accurate salable quantity, calculating available on-hand products, pending orders (reservations), and configured thresholds. {{site.data.var.im}} also updates order and shipment options, giving you full control over your inventory and deductions at the source level.

{{site.data.var.im}} is a Magento Community Engineering special project open to contributors. To take part and contribute, see the [MSI GitHub](https://github.com/magento/inventory) repository and [wiki](https://github.com/magento/inventory/wiki) to get started. Join us in our [Slack](https://magentocommeng.slack.com/archives/C5FU5E2HY) channel ([self signup](https://opensource.magento.com/slack)) to discuss the project.

See the following documentation:

-  [{{site.data.var.im}} overview]({{ page.baseurl }}/inventory/index.html) for developer documentation
-  [Managing Inventory](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-management.html) for merchant information and instructions
-  [Install {{site.data.var.im}}]({{site.baseurl}}/extensions/inventory-management/) for module maintenance, updates, and upgrades
-  [Upcoming releases]({{site.baseurl}}/release/) for supported and compatible releases

The release notes include:

-  {:.new}New features
-  {:.fix}Fixes and improvements
-  {:.bug}Known issues

### v1.2.x

{{site.data.var.im}} 1.2.x (module version: `magento/inventory-metapackage = 1.2.4`) is supported with version 2.4.4 and compatible with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} The default inventory stock status of bundle and grouped products is now updated as expected when a merchant creates a shipment from the Admin. Previously, the status of these products remained unchanged after a shipment was created. <!--- ACP2E-418-->

-  {:.fix} Configurable products are now returned back to stock when one of these conditions is met: the parent product has at least one saved child in stock, or the configurable product itself was updated and set as **in stock** and had at least one child in stock. <!--- ACP2E-443-->

-  {:.fix} Inventory changes implemented through the REST API are now reflected as expected on product detail pages. The cache for catalog products is now cleaned after comparing the last and current stock statuses. Previously, omitting the callback function resulted in the incorrect evaluation of stock status changes, which did not trigger the necessary cache cleaning. As a result, the storefront did not reflect the inventory changes. <!--- ACP2E-161-->

-  {:.fix} Products that are assigned to default stock and that were previously out of stock are now visible on the storefront after updating the source item using `V1/inventory/source-items`. Previously, this REST API endpoint set the wrong 'stock_status`. <!--- ACP2E-562-->

-  {:.fix} Unassigning inventory sources through bulk action (**Catalog** > **Products** > **Select Products** > **Actions - Unassign Inventory Source**) now works as expected when sources include SKUs that are duplicates with the exception of a leading zero (for example, `01234` and `1234`). Previously, Magento did not unassign inventory sources and threw an error. <!--- ACP2E-2641-->

-  {:.fix} Product stock status is now always **in stock** on the storefront when infinite back orders are enabled and the product is assigned to a custom stock, regardless of the quantity backordered. Previously, products went out of stock even when back orders were enabled. <!--- ACP2E-664-->

-  {:.fix} Configurable product parent and child product stock is now updated correctly after the source item is updated with `POST /V1/inventory/source-items`. After the child product has been updated through the API, a new Inventory plugin for default stock checks and updates configurable product quantity and status. <!--- ACP2E-442-->

-  {:.fix} Out-of-stock grouped products are no longer listed on the storefront Category page. <!--- ACP2E-2082-->

-  {:.fix} Corrected the package name in `CatalogInventory` `composer.json`. <!--- ACP2E-2914-->

-  {:.fix} Back order status is now correctly represented in the Admin after placing an order with zero quantity product in a multi source/stock deployment. [GitHub-33756](https://github.com/magento/magento2/issues/33756) <!--- ACP2E-713-->

-  {:.fix} Out-of-stock bundle products are no longer displayed on the storefront Category page when the bundle product is updated from the stocks section. <!--- ACP2E-2012-->

-  {:.fix} Compatibility issues with PHP 7.4 have been resolved. <!--- AC-3192-->

-  {:.fix} The performance of save operations that include bundle products that contain many options (several hundred) has been improved. Previously, saving these large bundle products took several minutes and sometimes resulted in timeouts in deployments with Inventory services enabled. [GitHub-34732](https://github.com/magento/magento2/issues/34732) <!--- AC-1901-->

-  {:.fix} The product bulk action tool (**Catalog** > **Products** > **Select Products** > **Actions** > **Assign Inventory Source**) now works as expected when assigning inventory source to multiple products when SKUs are duplicated with the exception of a leading 0 (for example, 01234 and 1234). Previously, only one product was assigned an Inventory source. [GitHub-35171](https://github.com/magento/magento2/issues/35171) <!--- AC-2584-->

### v1.2.4

{{site.data.var.im}} 1.2.4 (module version: `magento/inventory-metapackage = 1.2.4`) is supported with version 2.4.4 and compatible with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} {{ site.data.var.ce }} now displays an accurate salable quantity value for all products in the Admin product list view. Previously, {{ site.data.var.ce }} displayed a blank value for salable quantity of in-stock products with SKUs that contained special characters. <!--- MC-41936-->

-  {:.fix} Performance has improved for cart-and-checkout actions such as adding products to the cart in deployments with many (approximately 10,000) inventory sources. <!--- MC-42570-->

-  {:.fix} The `bin/magento inventory:reservation:list-inconsistencies` command now handles orders with partial shipments correctly even if the reservations are missed from the database and the cache has been cleared. Previously, when this command was executed with a pre-cleared cache, Magento displayed this error: `Area code is not set`. <!--- MC-42142-->

-  {:.fix} The `bin/magento inventory:reservation:list-inconsistencies` command no longer returns an undefined index error. <!--- MC-42006-->

-  {:.fix} Incremental indexing of grouped product child products no longer causes other grouped products to be incorrectly indexed when children are shared. <!--- MC-41963-->

-  {:.fix} The storefront category page now displays the correct product count after removing a product from a category by API. Previously, the category page product count was incorrect until re-indexing occurred. <!--- MC-42287-->

-  {:.fix} Configurable products can now be returned to stock when creating a credit memo when the **Manage Stock** option is disabled. Previously, {{ site.data.var.ce }} did not display the **Return to stock** checkbox on the credit memo creation page when this option was disabled. <!--- MC-42002-->

-  {:.fix} Management of Inventory stock that exceeds 10,000 items has improved. Previously, performance issues sometimes prevented merchants from editing stock in the Admin before launching their website. <!--- MC-42643-->

-  {:.fix} The Admin **SYSTEM** > **Permissions** > **User Roles** page has been changed to provide administrators with restricted permissions access to delivery methods configuration. The Shipping methods section has been renamed to Delivery methods, and In-Store Pickup has been moved under Delivery methods section. [GitHub-30053](https://github.com/magento/magento2/issues/30053)  <!--- MC-41545-->

-  {:.fix} {{site.data.var.ce}} no longer creates a duplicate product reservation after a credit memo is updated by API. <!--- MC-41757-->

-  {:.fix} Switching from the Pick in Store tab to the Shipping tab in the checkout workflow no longer triggers a JavaScript error when only In-Store Pickup Delivery is available. <!--- MC-42808-->

-  {:.fix} Saleable product quantity and in-stock product quantity are now synced correctly. Previously, inventory reservation compensation was not recreated for canceled orders. <!--- MC-42485-->

-  {:.fix} We’ve optimized the performance of the validator that prevents adding new source to a bundled product’s child product with shipment type `Ship Together`. <!--- MC-43039-->

-  {:.fix} The `Allocated sources` column is now included as expected in order export CSV files. Previously, this column was omitted. <!--- ACP2E-3-->

-  {:.fix} Product stock update through import now takes into account back orders and `Out-of-Stock Threshold` configuration settings when determining product stock status. Product stock status is now automatically set to out-of-stock if the product does not meet the stock requirements. If product stock does meet the threshold, the  user-defined stock status `is_in_stock` is used. <!--- ACP2E-14-->

-  {:.fix} Shoppers now receive a message when they try to order a product quantity that exceeds the salable quantity. Previously, {{site.data.var.ee}} did not display an error message.  <!--- ACP2E-26-->

-  {:.fix} Merchants can now successfully save a Company account that contains a custom `company_name` attribute. Previously, {{ site.data.var.ce }} threw an error when you tried to save the Company account.  <!--- ACP2E-156-->

-  {:.fix} Products no longer go out of stock after being imported with zero (0) quantity when back orders are enabled. <!--- ACP2E-244-->

-  {:.fix} Stock status for a configurable product with multiple sources during import no longer changes when child products are assigned to the non-default stock. They are listed as in-stock because the other source has quantity greater than 0. Previously, the configurable product was listed as out of stock. <!--- ACP2E-337-->

### v1.2.3

{{site.data.var.im}} 1.2.3 (module version: `magento/inventory-metapackage = 1.2.3`) is supported with version 2.4.3 and compatible with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} Fixed several issues related to the composite product visibility on the frontend.

-  {:.fix} Improved cart page management performance with the minimum required quantity.

-  {:.fix} Several bug fixes targeted to resolve issues with source creation, out of stock items, stock sourcing, sorting allocated sources, in-store delivery, and inventory commands.

-  {:.fix} Magento now supports three-digit Canadian postal codes for in-store delivery. Six-digit codes are not supported due to limitations set by `geonames.org`.

-  {:.fix} The Admin now displays the correct quantity of default stock for disabled products on the **Products** grid and the **Edit Product** page for multi-store deployments.

-  {:.fix} Magento now refreshes the category product cache when a bundle product comes back in stock.

### v1.2.2

{{site.data.var.im}} 1.2.2 (module version: `magento/inventory-metapackage = 1.2.2`) is supported with version 2.4.2 and compatible with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} Fixed several issues related to the composite product visibility on the frontend.

-  {:.fix} Improved cart page performance during quantity update on B2B.

-  {:.fix} Several bug fixes targeted to resolve issues with in-store pickup, mass updates, and inventory threshold.

-  {:.new} **Functional tests.** Introduced new functional tests and provided fixes for existing tests to make them more stable.

### v1.2.1

{{site.data.var.im}} 1.2.1 (module version: `magento/inventory-metapackage = 1.2.1`) is supported with version 2.4.1 and compatible with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} Fixed known issue related to `inventory_cleanup_reservations` cron job, addressed issue related to In-Store Pickup functionality for bundle products, general improvements to stock calculation, bundle product support and backorders functionality.

-  {:.new} **Functional tests.** Introduced new functional tests to provide additional coverage for In-Store Pickup functionality.

### v1.2.0

{{site.data.var.im}} 1.2.0 (module version: `magento/inventory-metapackage = 1.2.0`) is supported with version 2.4.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} Numerous bug fixes to resolve issues with source assignment, scalable environment feature support, and compatibility with PHP 7.4, MySQL 8, and PHPUNIT 9.

-  {:.new} **In-store delivery method.** Added a new option for users to select a source to be used as a pickup location during checkout. See [In-store Delivery]({{ site.user_guide_url }}/shipping/shipping-in-store-delivery.html).

-  {:.new} **Bundle product support for multi source mode.** Inventory supports all product types with multiple sources.

-  {:.new} **Asynchronous stock re-indexing.** Added the ability to asynchronously re-index stock and improved the performance of several critical scenarios.

-  {:.new} **Bulk interfaces.** Introduced new bulk interfaces for salability check: `\Magento\InventorySalesApi\Api\AreProductsSalableInterface`, `\Magento\InventorySalesApi\Api\AreProductsSalableForRequestedQtyInterface`.

-  {:.new} **Increased test coverage.** New functionality covered with automated tests, extended coverage for discovered and fixed issues.

-  {:.bug} **Known issue.** The absence of the `object_id` field in the reservations metadata is preventing the `inventory_cleanup_reservations` cron job from working properly. This issue was introduced in [magento/inventory#3046](https://github.com/magento/inventory/pull/3046).

   **Workaround:** Execute the following MySQL queries to manually cleanup reservations:

   ```sql
   SELECT GROUP_CONCAT(reservation_id) FROM inventory_reservation GROUP BY stock_id, sku HAVING SUM(quantity) = 0;
   DELETE FROM inventory_reservation where reservation_id IN (result_of_the_first_query);
   ```

### v1.1.6

{{site.data.var.im}} 1.1.6 (module version: `inventory-composer-metapackage = 1.1.6`) is supported with version 2.3.6 and compatible with version 2.3.5, 2.3.4, 2.3.3, 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} Bug fixes to resolve issues related to backorders, credit memos, low stock report grid, fixes connected to "resolve inconsistencies" CLI tool and general improvements.

-  {:.new} **Asynchronous stock re-indexing.** Added the ability to asynchronously re-index stock and improved the performance of several critical scenarios.

### v1.1.5
{{site.data.var.im}} 1.1.5 (module version: `inventory-composer-metapackage = 1.1.5`) is supported with version 2.3.5 and compatible with version 2.3.4, 2.3.3, 2.3.2, 2.3.1, and 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.new} **Update inventory once product SKU is changed.** Introduced a new configuration setting to switch to the new behavior: "Synchronize with Catalog".

-  {:.new} **Functional tests.** Introduced new functional tests to eliminate the test coverage gap. Fixed several issues to make tests more stable and reliable).

-  {:.bug} Bug fixes to prevent product oversell, "Out of stock" products visibility on the storefront, numerous fixes for scalable environment support and user interface improvements.

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

-  {:.new} **Added a Bulk Partial Stock Transfer Endpoint** - Current bulk transfer endpoints move all assigned quantity from an origin to a destination source. The new `/rest/V1/inventory/bulk-partial-source-transfer` endpoint allows merchants to transfer partial stock from source-to-source as a bulk operation. Enter a request to the endpoint with the `sku`, `qty`, `origin_source_code`, and `destination_source_code` to transfer a specific amount of quantity. Transfers verify the source is assigned to the `sku`, enough quantity exists to transfer, etc. See [Inventory Bulk Actions]({{ page.baseurl }}/rest/modules/inventory/bulk-inventory.html). <!-- https://github.com/magento/inventory/pull/2117 -->

-  {:.new} **Added Reservation CLI** - New commands give you options to detect and resolve reservation inconsistencies. As orders submit and change status, {{site.data.var.im}} generates initial reservations and updates through compensation reservations. These commands return a list of detected inconsistencies by Order ID, SKU, and Stock ID and create reservations to resolve. See [Inventory CLI reference]({{ page.baseurl }}/inventory/inventory-cli-reference.html). <!-- https://github.com/magento/inventory/pull/2199 https://github.com/magento/inventory/pull/2184 https://github.com/magento/inventory/pull/2171 https://github.com/magento/inventory/pull/2148  -->

-  {:.new} **Performance improvements for sources and SSA options** -  Sorting and selecting sources during shipment caused performance degradation for stocks with high numbers of sources. This release provides significant performance improvements to list and sort available sources when reviewing and selecting SSA options in shipments. <!-- https://github.com/magento/inventory/pull/2056 https://github.com/magento/inventory/pull/2090 -->

-  {:.new} **Added GraphQL support for {{site.data.var.im}}** - This release installs a new `magento/module-inventory-graph-ql` module. The GraphQL [Products endpoint]({{ page.baseurl }}/graphql/queries/products.html) now includes the `only_x_left_in_stock` and `stock_status` attributes for {{site.data.var.im}} support. <!-- https://github.com/magento/inventory/pull/2124 -->

-  {:.new} **Simplified UI for Assigned Sources** - The Assigned Sources table in product pages has simplified content for easier updates and increased performance when displaying many sources. All sources list by source name (hover over for `source_code`).

-  {:.new} **Export Aggregated Stock Service** - This release provides a new export aggregated stock service (retaining reservations in the system) to support external Sales Channels like Amazon, eBay, Google Shopping ads, etc.  <!-- https://github.com/magento/inventory/pull/2067 -->

### v1.1.0

{{site.data.var.im}} 1.1.0 (module version: `inventory-composer-metapackage = 1.1.0`)  is supported and compatible with version 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}. {{site.data.var.im}} 1.1.1 released only as a package name update, supported with version 2.3.1 and compatible with version 2.3.0 of {{site.data.var.ce}}, {{site.data.var.ee}}, and {{site.data.var.ece}}.

-  {:.fix} **Added support for Elasticsearch for single and multi sources modes** — You can now configure and use Elasticsearch with custom stocks. This resolves a [known issue]({{ page.baseurl }}/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}. See [Set up the search engine]({{ page.baseurl }}/config-guide/elasticsearch/es-overview.html) for installation information and [Elasticsearch](https://docs.magento.com/m2/ce/user_guide/catalog/search-elasticsearch.html) to configure through the Admin. <!-- PR https://github.com/magento/inventory/pull/1943 -->

-  {:.fix} Resolved performance issues with Default Stock to drastically increase performance with numerous operations. Improvements increase performance for Single Source mode, Transfer Inventory to Source, Storefront Category pages, and Salable Quantity calculations. This resolves a [known issue]({{ page.baseurl }}/release-notes/ReleaseNotes2.3.0OpenSource.html#known-issues) requiring custom stocks creation for Single Source merchants in version 2.3.0 of {{site.data.var.ce}} and {{site.data.var.ee}}.

<!-- All Performance Track issues resolved https://github.com/magento/inventory/issues?q=is%3Aopen+is%3Aissue+label%3APerformance -->

-  {:.fix} Resolved issues with Out of Stock status and bulk Inventory Transfer to Stock for configurable and grouped products. Selecting the parent products and performing bulk actions does not affect the product status. If the parent product was In Stock, it remains In Stock.

<!-- PR https://github.com/magento/inventory/pull/1972 -->

-  {:.new} **Distance Priority Algorithm** — The Distance Priority Algorithm is a new, out-of-the-box Source Selection Algorithm for distance-based shipping recommendations. This algorithm compares the location of the shipping destination address with source locations to determine the closest source to fulfill shipments. The distance may be determined by either physical distance or the time spent traveling from one location to another, using imported geocode location data or Google directions (driving, walking, or bicycling). See [Configuring Distance Priority Algorithm](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-distance-priority.html) in the _User Guide_.

-  {:.new} **Expanded source quantity list** — Merchants with a high number of sources can easily hover and view all sources per product through the Product Grid. Each product displays a minimum of five sources and matching quantities. When hovering over the sources, you can scroll through the entire list of sources and current quantities. See [Managing Inventory Quantities](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-manage-inventory-quantities.html).

-  {:.bug} Known issue with Magento v2.3.1 - Asynchronous migration of data between sources will encounter issues due to changes in Asynchronous APIs with topic names reflecting PHP class and method names. We recommend using synchronous operations, setting **Run asynchronously** to "No". To configure, see [Configure Global Options](https://docs.magento.com/m2/ee/user_guide/catalog/inventory-options-global.html) in the Magento User Guide.
