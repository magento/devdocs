---
group: inventory
title: Inventory API reference
redirect_from:
  - /guides/v2.3/inventory/catalog-inventory-replacements.html
  - /guides/v2.3/inventory/scalable-inventory-replacements.html
---

{{site.data.var.im}} provides new modules, interfaces, and classes to manage inventory quantities, sources, stocks, etc. This reference details deprecated modules and new services available for managing inventory for single and multi source merchants.

## Deprecated modules

{{site.data.var.im}} deprecates `ScalableInventory` and `CatalogInventory` modules.

The `ScalableInventory` module is part of {{site.data.var.ee}}. Its original purpose was to perform inventory processing asynchronously, moving the computation of quantities to a worker that processed the calculations later. This functionality was limited in that the asynchronous processing could be performed on backordered products only.

{{site.data.var.im}} creates reservations for all orders, not just those on backorder. All quantities are calculated asynchronously.

The `CatalogInventory` module is part of {{site.data.var.ce}}. Its original purpose was to retrieve and update stock attributes, including status, quantity, and backorders. {{site.data.var.im}} architecture replaces and expands these capabilities to support multiple stocks and sources, salable quantities, stock quantities, etc.

The following interfaces and classes have been deprecated. They cannot be mapped to new interfaces. The {{site.data.var.im}} architecture eliminates the need for this functionality.

`ScalableInventory` interfaces:

- `ItemInterface`
- `ItemsInterface`

`CatalogInventory` interfaces:

- `QueryProcessorInterface`
- `RegisterProductSaleInterface`
- `RevertProductSaleInterface`
- `StockCollectionInterface`
- `StockConfigurationInterface`
- `StockCriteriaInterface`
- `StockIndexInterface`
- `StockInterface` (indexer)
- `StockInterface`
- `StockItemCollectionInterface`
- `StockItemCriteriaInterface`
- `StockItemInterface`
- `StockItemRepositoryInterface`
- `StockManagementInterface`
- `StockRegistryInterface`
- `StockRepositoryInterface`
- `StockStateInterface`
- `StockStatusCollectionInterface`
- `StockStatusCriteriaInterface`
- `StockStatusInterface`
- `StockStatusRepositoryInterface`

`CatalogInventory` classes:

- `Backorders`
- `DefaultStock`
- `DefaultStockqty`
- `Item`
- `Minsaleqty`
- `Qtyincrements`
- `QuantityValidator`
- `Status`
- `Stock` (Helper)
- `Stock` (model/source)
- `Stock`
- `StockFactory`

## {{site.data.var.im}} API

The following services reside under the [`Magento/InventoryApi/Api`](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventoryApi/Api) namespace, replacing deprecated services and APIs.

Service | Description | Deprecated API
--- | --- | ---
[`SourceRepositoryInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceRepositoryInterface.php) | Service to retrieve, save or find (`getList` method) Source entities | -
[`StockRepositoryInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/StockRepositoryInterface.php) | Service to retrieve, save, find (`getList` method) or delete Stock entities) |  -
[`StockSourceLinksSaveInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/StockSourceLinksSaveInterface.php) | Save sources to stocks assignments | -
[`StockSourceLinksDeleteInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/StockSourceLinksDeleteInterface.php) | Remove sources to stocks assignments |  -
[`GetStockSourceLinksInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/GetStockSourceLinksInterface.php) | Service to retrieve source to stock links according to provided `SearchCriteria` | -
[`GetSourcesAssignedToStockOrderedByPriorityInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/GetSourcesAssignedToStockOrderedByPriorityInterface.php) | Service to retrieve sources assigned to provided stock sorted by priority | -
[`SourceItemRepositoryInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceItemRepositoryInterface.php) | Service to find `SourceItems` (products assigned to sources with Quantity per Source) by provided `SearchCriteria` | [`StockItemRepositoryInterface::getList`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L41)
[`SourceItemsSaveInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceItemsSaveInterface.php) | Service to save `SourceItems` (quantites and stock statuses of products on sources) | [`StockItemRepositoryInterface::save`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25)
[`SourceItemsDeleteInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceItemsDeleteInterface.php) | Service to delete `SourceItems` (quantites and stock statuses of products on sources) | [`StockItemRepositoryInterface::delete`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L49) or [`deleteById`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L55)

## Inventory Catalog API

The following services reside under the [`Magento/InventoryCatalogApi/Api`](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventoryCatalogApi/Api) namespace.

Service | Description
--- | ---
[``DefaultSourceProviderInterface``](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryCatalogApi/Api/DefaultSourceProviderInterface.php) | Service to retrieve Default Source code
[`DefaultStockProviderInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryCatalogApi/Api/DefaultStockProviderInterface.php) | Service to retrieve Default Stock id
[`BulkInventoryTransferInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryCatalogApi/Api/BulkInventoryTransferInterface.php) | Service to [bulk transfer](https://devdocs.magento.com/guides/v2.3/rest/modules/inventory/bulk-inventory.html) the whole quantity of products from origin to destination source
[`BulkPartialInventoryTransferInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryCatalogApi/Api/BulkPartialInventoryTransferInterface.php) | Service to run [bulk partial inventory transfer](https://devdocs.magento.com/guides/v2.3/rest/modules/inventory/bulk-inventory.html#bulk-partial-transfer) for specified items

## Inventory Sales API

The following services reside under the [`Magento/InventorySalesApi/Api`](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventorySalesApi/Api) namespace, replacing deprecated services and APIs.

Service | Description | Deprecated API
--- | --- | ---
[`StockResolverInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventorySalesApi/Api/StockResolverInterface.php) | Service to resolve linked Stock by provided sales channel type and code | [`StockRegistryInterface::getStock`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L23)
[`GetStockBySalesChannelInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventorySalesApi/Api/GetStockBySalesChannelInterface.php) | Service to resolve linked stock to provided sales channel object | [`StockRegistryInterface::getStock`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L23)
[`IsProductSalableInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventorySalesApi/Api/IsProductSalableInterface.php) | Service to check whether product salable |  [`StockRegistryInterface::getProductStockStatus`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L62) <br /> [`StockRegistryInterface::getProductStockStatusBySku`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L70) <br /> [`StockRegistryInterface::getStockStatusBySku`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockRegistryInterface.php#L53)
[`IsProductSalableForRequestedQtyInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventorySalesApi/Api/IsProductSalableForRequestedQtyInterface.php)  | Service to check if the product is salable for the requested quantity (used for shopping cart and checkout) | [`StockStateInterface::checkQuoteItemQty`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L41) <br /> [`StockStateInterface::checkQty`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L52)
[G`etProductSalableQtyInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventorySalesApi/Api/GetProductSalableQtyInterface.php)  | Get product salable quantity (aggregated stock quantity including reservations) |  [`StockStateInterface::getStockQty`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockStateInterface.php#L72) or just retrieve `Qty` from [`StockStatus`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/Data/StockStatusInterface.php#L65) entity
[`PlaceReservationsForSalesEventInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventorySalesApi/Api/PlaceReservationsForSalesEventInterface.php) | Place reservation in the scope some sales event (such as order placement, shipment creation, credit memo creation, order cancelation, etc) |  [`RegisterProductSaleInterface`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/RegisterProductSaleInterface.php) and [`RevertProductSaleInterface`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/RevertProductSaleInterface.php)

## Inventory Configuration API

The following services reside under the [`Magento/InventoryConfigurationApi/Api`](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventoryConfigurationApi/Api) namespace, replacing deprecated services and APIs.

Service | Description | Deprecated API
--- | --- | ---
[`GetStockItemConfigurationInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryConfigurationApi/Api/GetStockItemConfigurationInterface.php)  |  Service to retrieve stock item configuration by SKU and stock id |  Catalog inventory configuration stored in [`StockItem`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php) entity
[`SaveStockItemConfigurationInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryConfigurationApi/Api/SaveStockItemConfigurationInterface.php)  | Service to save stock item configuration  |  Stock configuration saved using [`StockItemRepositoryInterface::save`](https://github.com/magento/magento2/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25)

## Inventory Source Selection Algorithm (SSA) API

The following services reside under the [`Magento/InventorySourceSelectionApi/Api`](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventorySourceSelectionApi/Api) namespace.

Service | Description
--- | ---
[`GetDefaultSourceSelectionAlgorithmCodeInterface`]  |  Service to get the default Source Selection Algorithm (SSA) code
[`GetSourceSelectionAlgorithmListInterface`]  |  Service to get the entire Source Selection Algorithm (SSA) list
[`SourceSelectionServiceInterface`]  |  Service to run a specified Source Selection Algorithm (SSA) based on provided Inventory Request object

## Inventory Export Aggregated Stock Data API

The following services reside under the [`Magento/InventoryExportStockApi/Api`](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventoryExportStockApi/Api) namespace.

Service | Description
--- | ---
[`ExportStockIndexDataInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryExportStockApi/Api/ExportStockIndexDataInterface.php)  |  Service to return salable quantities for a provided sales channel not including placed reservations for completed orders. Less precise with high performance and speed.
[`ExportStockSalableQtyInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryExportStockApi/Api/ExportStockSalableQtyInterface.php)  |  Service to return salable quantities for a provided sales channel including placed reservations (for completed orders). Preceise with reduced performance and slow speed.
