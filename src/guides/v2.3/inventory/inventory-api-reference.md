---
group: inventory
title: Inventory API reference
redirect_from:
  - /guides/v2.3/inventory/catalog-inventory-replacements.html
  - /guides/v2.3/inventory/scalable-inventory-replacements.html
---

<!-- Magento 2 inventory project (a.k.a MSI) release branch blob url variable
{% assign  msi_blob_url = 'https://github.com/magento/inventory/blob/1.1.3' %} -->

{{site.data.var.im}} provides new modules, interfaces, and classes to manage inventory quantities, sources, stocks, etc. This reference details deprecated modules and new services available for managing inventory for single and multi source merchants.

## Deprecated modules

{{site.data.var.im}} deprecates `ScalableInventory` and `CatalogInventory` modules.

The `ScalableInventory` module is part of {{site.data.var.ee}}. Its original purpose was to perform inventory processing asynchronously, moving the computation of quantities to a worker that processed the calculations later. This functionality was limited in that the asynchronous processing could be performed on backordered products only.

{{site.data.var.im}} creates reservations for all orders, not just those on backorder. All quantities are calculated asynchronously.

The `CatalogInventory` module is part of {{site.data.var.ce}}. Its original purpose was to retrieve and update stock attributes, including status, quantity, and backorders. {{site.data.var.im}} architecture replaces and expands these capabilities to support multiple stocks and sources, salable quantities, stock quantities, etc.

The following interfaces and classes have been deprecated. They cannot be mapped to new interfaces. The {{site.data.var.im}} architecture eliminates the need for this functionality.

`ScalableInventory` interfaces:

-  `ItemInterface`
-  `ItemsInterface`

`CatalogInventory` interfaces:

-  `QueryProcessorInterface`
-  `RegisterProductSaleInterface`
-  `RevertProductSaleInterface`
-  `StockCollectionInterface`
-  `StockConfigurationInterface`
-  `StockCriteriaInterface`
-  `StockIndexInterface`
-  `StockInterface` (indexer)
-  `StockInterface`
-  `StockItemCollectionInterface`
-  `StockItemCriteriaInterface`
-  `StockItemInterface`
-  `StockItemRepositoryInterface`
-  `StockManagementInterface`
-  `StockRegistryInterface`
-  `StockRepositoryInterface`
-  `StockStateInterface`
-  `StockStatusCollectionInterface`
-  `StockStatusCriteriaInterface`
-  `StockStatusInterface`
-  `StockStatusRepositoryInterface`

`CatalogInventory` classes:

-  `Backorders`
-  `DefaultStock`
-  `DefaultStockqty`
-  `Item`
-  `Minsaleqty`
-  `Qtyincrements`
-  `QuantityValidator`
-  `Status`
-  `Stock` (Helper)
-  `Stock` (model/source)
-  `Stock`
-  `StockFactory`

## {{site.data.var.im}} API

The following services reside under the [`Magento/InventoryApi/Api`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api) namespace, replacing deprecated services and APIs.

Service | Description | Deprecated API
--- | --- | ---
[`SourceRepositoryInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/SourceRepositoryInterface.php) | Retrieves, saves or finds (`getList` method) Source entities | -
[`StockRepositoryInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/StockRepositoryInterface.php) | Retrieves, saves, finds (`getList` method) or deletes Stock entities) |  -
[`StockSourceLinksSaveInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/StockSourceLinksSaveInterface.php) | Saves sources to stocks assignments | -
[`StockSourceLinksDeleteInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/StockSourceLinksDeleteInterface.php) | Removes sources to stocks assignments |  -
[`GetStockSourceLinksInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/GetStockSourceLinksInterface.php) | Retrieves source to stock links according to provided `SearchCriteria` | -
[`GetSourcesAssignedToStockOrderedByPriorityInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/GetSourcesAssignedToStockOrderedByPriorityInterface.php) | Retrieves sources assigned to provided stock sorted by priority | -
[`SourceItemRepositoryInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/SourceItemRepositoryInterface.php) | Finds `SourceItems` (products assigned to sources with Quantity per Source) by provided `SearchCriteria` | [`StockItemRepositoryInterface::getList`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L41)
[`SourceItemsSaveInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/SourceItemsSaveInterface.php) | Saves `SourceItems` (quantites and stock statuses of products on sources) | [`StockItemRepositoryInterface::save`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25)
[`SourceItemsDeleteInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryApi/Api/SourceItemsDeleteInterface.php) | Deletes `SourceItems` (quantites and stock statuses of products on sources) | [`StockItemRepositoryInterface::delete`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L49) or [`deleteById`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L55)

## Inventory Catalog API

The following services reside under the [`Magento/InventoryCatalogApi/Api`]({{ msi_blob_url }}/app/code/Magento/InventoryCatalogApi/Api) namespace.

Service | Description
--- | ---
[``DefaultSourceProviderInterface``]({{ msi_blob_url }}/app/code/Magento/InventoryCatalogApi/Api/DefaultSourceProviderInterface.php) | Retrieves Default Source code
[`DefaultStockProviderInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryCatalogApi/Api/DefaultStockProviderInterface.php) | Retrieves Default Stock id
[`BulkInventoryTransferInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryCatalogApi/Api/BulkInventoryTransferInterface.php) | [Bulk transfers]({{page.baseurl}}/rest/modules/inventory/bulk-inventory.html) the whole quantity of products from origin to destination source
[`BulkPartialInventoryTransferInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryCatalogApi/Api/BulkPartialInventoryTransferInterface.php) | Runs [bulk partial inventory transfer]({{page.baseurl}}/rest/modules/inventory/bulk-inventory.html#bulk-partial-transfer) for specified items

## Inventory Sales API

The following services reside under the [`Magento/InventorySalesApi/Api`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api) namespace, replacing deprecated services and APIs.

Service | Description | Deprecated API
--- | --- | ---
[`StockResolverInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api/StockResolverInterface.php) | Resolves linked Stock by provided sales channel type and code | [`StockRegistryInterface::getStock`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L23)
[`GetStockBySalesChannelInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api/GetStockBySalesChannelInterface.php) | Resolves linked stock to provided sales channel object | [`StockRegistryInterface::getStock`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L23)
[`IsProductSalableInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api/IsProductSalableInterface.php) | Checks whether product salable |  [`StockRegistryInterface::getProductStockStatus`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L62) <br /> [`StockRegistryInterface::getProductStockStatusBySku`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L70) <br /> [`StockRegistryInterface::getStockStatusBySku`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L53)
[`IsProductSalableForRequestedQtyInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api/IsProductSalableForRequestedQtyInterface.php)  | Checks if the product is salable for the requested quantity (used for shopping cart and checkout) | [`StockStateInterface::checkQuoteItemQty`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L41) <br /> [`StockStateInterface::checkQty`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L52)
[`GetProductSalableQtyInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api/GetProductSalableQtyInterface.php)  | Gets product salable quantity (aggregated stock quantity including reservations) |  [`StockStateInterface::getStockQty`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L72) or just retrieve `Qty` from [`StockStatus`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/Data/StockStatusInterface.php#L65) entity
[`PlaceReservationsForSalesEventInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySalesApi/Api/PlaceReservationsForSalesEventInterface.php) | Places reservation in the scope some sales event (such as order placement, shipment creation, credit memo creation, order cancelation, etc) |  [`RegisterProductSaleInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/RegisterProductSaleInterface.php) <br /> [`RevertProductSaleInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/RevertProductSaleInterface.php)

## Inventory Configuration API

The following services reside under the [`Magento/InventoryConfigurationApi/Api`]({{ msi_blob_url }}/app/code/Magento/InventoryConfigurationApi/Api) namespace, replacing deprecated services and APIs.

Service | Description | Deprecated API
--- | --- | ---
[`GetStockItemConfigurationInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryConfigurationApi/Api/GetStockItemConfigurationInterface.php)  |  Retrieves stock item configuration by SKU and stock id |  Catalog inventory configuration stored in [`StockItem`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php) entity
[`SaveStockItemConfigurationInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryConfigurationApi/Api/SaveStockItemConfigurationInterface.php)  | Saves stock item configuration  |  Stock configuration saved using [`StockItemRepositoryInterface::save`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25)

## Inventory Source Selection Algorithm (SSA) API

The following services reside under the [`Magento/InventorySourceSelectionApi/Api`]({{ msi_blob_url }}/app/code/Magento/InventorySourceSelectionApi/Api) namespace.

Service | Description
--- | ---
[`GetDefaultSourceSelectionAlgorithmCodeInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySourceSelectionApi/Api/GetDefaultSourceSelectionAlgorithmCodeInterface.php)  |  Gets the default Source Selection Algorithm (SSA) code
[`GetSourceSelectionAlgorithmListInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySourceSelectionApi/Api/GetSourceSelectionAlgorithmListInterface.php)  |  Gets the entire Source Selection Algorithm (SSA) list
[`SourceSelectionServiceInterface`]({{ msi_blob_url }}/app/code/Magento/InventorySourceSelectionApi/Api/SourceSelectionServiceInterface.php)  |  Runs a specified Source Selection Algorithm (SSA) based on provided Inventory Request object

## Inventory Export Aggregated Stock Data API

The following services reside under the [`Magento/InventoryExportStockApi/Api`]({{ msi_blob_url }}/app/code/Magento/InventoryExportStockApi/Api) namespace.

Service | Description
--- | ---
[`ExportStockIndexDataInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryExportStockApi/Api/ExportStockIndexDataInterface.php)  |  Returns salable quantities for a provided sales channel not including placed reservations for completed orders. The quantity amount is less precise and runs with high performance and speed.
[`ExportStockSalableQtyInterface`]({{ msi_blob_url }}/app/code/Magento/InventoryExportStockApi/Api/ExportStockSalableQtyInterface.php)  |  Returns salable quantities for a provided sales channel including placed reservations (for completed orders). The quantity amount is precise and runs with reduced performance and slower speed.
