---
group: msi
title: Multisource Inventory Developer Guide

---


This guide is written to help software developers extend the functionality of the Magento application through development of its Multisource Inventory (MSI) Modules, Application Programming Interfaces (APIs), and Endpoints.

## Application Programming Interfaces

The MSI Application Programming Interfaces (APIs) are helpful if you have many products and inventory locations.

The APIs can be helpful for building structures to move stock, create reports, synchronize with external Enterprise Resource Planning (ERP) systems, and so on.

## Using APIs for MSI Development

It is also possible to build alternative algorithms to prioritize sources, if you extend the MSI Source Selection Algorithm feature with custom development. You could have one priority algorithm based upon geography, and another based upon expense of stock or a customer attribute. When the cost of stock changes, you could easily change algorithms to ensure the lowest cost.

## Modules, APIs, and Endpoints

### Modules

The modules in MSI were designed to add flexibility to the design of the application. MSI generally has three modules per feature, while Magento Core and B2B have one module per feature.  The modules in the table below are arranged in triplets to show this structure.


| Name | Description | Web Enabled? |
|---|---|---:|
| Inventory | provides implementation for inventory management | No |
| InventoryAdminUi | provides implementation for inventory management interface | No |
| InventoryApi | provides interfaces for inventory management | Yes |
|   |   |   |
| InventoryBundle |   | No  |
| InventoryCache |   | No |
|   |   |   |
| InventoryCatalog | provides implementation for bridge between Inventory and Catalog. This is a dedicated module that adds logic to the Default Role of the Source on installations with single source and stock. | No  |
| InventoryCatalogAdminUi |   | No |
| InventoryCatalogApi | provides implementation for bridge between Inventory and Catalog. This is a dedicated module that adds logic to the Default Role of the Source on installations with single source and stock | No |
| InventoryCatalogSearch | adapts CatalogSearch to work properly with Inventory | No |
|   |   |   |
| InventoryConfigurableProduct |   | No |
| InventoryConfigurableProductAdminUI |   | No |
| InventoryConfigurableProductIndexer |   | No |
|   |   |   |
| InventoryConfiguration |   | No |
| InventoryConfigurationApi |   | No |
|   |   |   |
| InventoryGroupedProduct |   | No |
| InventoryImportExport | provides implementation for bridge between Inventory and Catalog. This is dedicated module which add logic to Default Role of the Source on installations with single source/stock | No |
| InventoryIndexer | Update by schedule isn't supported | No |
|   |   |   |
| InventoryLowQuantityNotification |   | No |
| InventoryLowQuantityNotificationAdminUi |   | No |
| InventoryLowQuantityNotificationApi |   | Yes |
|   |   |   |
| InventoryMultiDimensionalIndexerApi | provides functionality of multi-dimension index creation and handling. Library introduces a set of extension points which split monolithic index by specified Dimension (Scope), creating independent index (i.e. dedicated MySQL table) per each Dimension. Along with that library provides index name resolving mechanism based on provided scope. The Multi-Dimension indexes introduced for the sake of data scalability and ability to reindex data in the scope of particular Dimension only. Aliasing mechanism guarantees zero downtime to make Front-End responsive while Full Reindex being processed. | No |
| InventoryProductAlert |   | No |
| InventoryReservations |   | No |
| InventoryReservationsApi |   | No |
|   |   |   |
| InventorySales |   | No |
| InventorySalesAdminUi |   | No |
| InventorySalesApi |   | Yes |
|   |   |   |
| InventoryShipping |   | No |
| InventoryShippingAdminUi |   | No |
|   |   |   |
| InventorySourceSelection |   | No |
| InventorySourceSelectionApi |   | Yes |

For Headless Magento usage (without the Admin User Interface), MSI is dependent on APIs of these Magento modules:

 - Catalog
 - Sales
 - CatalogInventory(legacy)
 - Store
 - ConfigurableProd
 - GroupedProd
 - BundleProd
 - EAV
 - ImportExport

For Non-Headless (including Admin UI part) case, Magento MSI will have additional dependencies on the following:

 - UI
 - Backend
 - Reports
 - Directory
 - Shipping

### API Groups

 Four groups, with a total of 17 endpoints.

    Source
      <route url="/V1/inventory/source" method="GET">
      <route url="/V1/inventory/source/:sourceCode" method="GET">
      <route url="/V1/inventory/source" method="POST">
      <route url="/V1/inventory/source/:sourceCode" method="PUT">
      <route url="/V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/:stockId" method="GET">

    Stock
      <route url="/V1/inventory/stock" method="GET">
      <route url="/V1/inventory/stock/:stockId" method="GET">
      <route url="/V1/inventory/stock" method="POST">
      <route url="/V1/inventory/stock/:stockId" method="DELETE">
      <route url="/V1/inventory/stock/:stockId" method="PUT">
      <route url="/V1/inventory/stock/:stockId" method="DELETE">

    StockSourceLink
      <route url="/V1/inventory/stock-source-link" method="POST">
      <route url="/V1/inventory/stock-source-link" method="DELETE">

    SourceItem
      <route url="/V1/inventory/source-item" method="GET">
      <route url="/V1/inventory/source-item" method="POST">
      <route url="/V1/inventory/source-item" method="DELETE">
