---
group: inventory
title: Deprecated ScalableInventory entities
redirect_from:
  - /guides/v2.3/inventory/catalog-inventory-replacements.html
  - /guides/v2.3/inventory/scalable-inventory-replacements.html
---

## Deprecated ScalableInventory entities

The `ScalableInventory` module is part of Magento Commerce. Its original purpose was to perform inventory processing asynchronously, moving the computation of quantities to a worker that processed the calculations later.
This functionality was limited in that the asynchronous processing could be performed on backordered products only.

Inventory Management creates reservations for all orders, not just those on backorder. All quantities are calculated asynchronously.

The following `ScalableInventory` interfaces have been deprecated. They cannot be mapped to new interfaces. The Inventory Management architecture eliminates the need for this functionality.


* `ItemInterface`
* `ItemsInterface`

## Deprecated CatalogInventory entities

The following `CatalogInventory` interfaces and classes have been deprecated. We will include information about replacement interfaces and classes soon.

## Interfaces

Interface | Replacement
--- | ---
QueryProcessorInterface | TBD
RegisterProductSaleInterface | TBD
RevertProductSaleInterface | TBD
StockCollectionInterface | TBD
StockConfigurationInterface | TBD
StockCriteriaInterface | TBD
StockIndexInterface | TBD
StockInterface (indexer) | TBD
StockInterface | TBD
StockItemCollectionInterface | TBD
StockItemCriteriaInterface | TBD
StockItemInterface | TBD
StockItemRepositoryInterface | TBD
StockManagementInterface | TBD
StockRegistryInterface | TBD
StockRepositoryInterface | TBD
StockStateInterface | TBD
StockStatusCollectionInterface | TBD
StockStatusCriteriaInterface | TBD
StockStatusInterface | TBD
StockStatusRepositoryInterface | TBD

## Classes

Class | Replacement
--- | ---
Backorders | TBD
DefaultStock | TBD
DefaultStockqty | TBD
Item | TBD
Minsaleqty  | TBD
Qtyincrements | TBD
QuantityValidator | TBD
Status | TBD
Stock (Helper) | TBD
Stock (model/source) | TBD
Stock | TBD
StockFactory | TBD

## Inventory Management API

The following services reside under the [Magento/InventoryApi/Api](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventoryApi/Api) namespace.

Service | Description | Legacy
--- | --- | ---
[`SourceRepositoryInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceRepositoryInterface.php) | Service to Retrieve, Save or Find (`getList` method) Source entities | none
[`StockRepositoryInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/StockRepositoryInterface.php) | Service to Retrieve, Save, Find (`getList` method) or delete Stock entities) |  none
[`StockSourceLinksSaveInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/StockSourceLinksSaveInterface.php) | Save Sources to Stocks assignments | none
[`StockSourceLinksDeleteInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/StockSourceLinksDeleteInterface.php) | Remove Sources to Stocks assignments |  none
[`GetStockSourceLinksInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/GetStockSourceLinksInterface.php) | Service to retrieve Source to Stock links according to provided SearchCriteria | none
[`GetSourcesAssignedToStockOrderedByPriorityInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/GetSourcesAssignedToStockOrderedByPriorityInterface.php) | Service to Retrieve Sources assigned to provided Stock sorted by priority | none
[`SourceItemRepositoryInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceItemRepositoryInterface.php) | Service to Find SourceItems (products assigned to sources with Quantity per Source) by provided SearchCriteria | [`StockItemRepositoryInterface::getList`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L41)
[`SourceItemsSaveInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceItemsSaveInterface.php) | Service to save SourceItems (quantites and stock statuses of products on Sources) | [`StockItemRepositoryInterface::save`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L25)
[`SourceItemsDeleteInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryApi/Api/SourceItemsDeleteInterface.php) | Service to delete SourceItems (quantites and stock statuses of products on Sources) | [`StockItemRepositoryInterface::delete`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/CatalogInventory/Api/StockItemRepositoryInterface.php#L49) or `deleteById`

## Inventory Catalog API

The following services reside under the [Magento/InventoryApi/Api](https://github.com/magento-engcom/msi/tree/2.3-develop/app/code/Magento/InventoryApi/Api) namespace.

Service | Description | Legacy
--- | --- | ---
[`DefaultSourceProviderInterface`](https://github.com/magento-engcom/msi/blob/2.3-develop/app/code/Magento/InventoryCatalogApi/Api/DefaultSourceProviderInterface.php) | Service to retrieve Default Source code | none
  |   |
