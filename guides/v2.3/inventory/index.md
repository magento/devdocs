---
group: inventory
title: Inventory Management overview
landing-page: Inventory
---

{{site.data.var.ce}} and {{site.data.var.ee}} v2.3 include new and expanded features and APIs for {{site.data.var.im}}. {{site.data.var.im}} replaces all core APIs in the Open Source `CatalogInventory` module and the `ScalableInventory` module in Commerce. It also provides additional APIs to extend and add functionality.

{{site.data.var.im}} features include

*  Different configurations for merchants whose inventory originates from a single source and from multiple sources
*  Stocks for tracking available aggregated quantities through assigned sources
*  Concurrent checkout protection
*  Shipment matching algorithms

Merchants install {{site.data.var.im}} as part of v2.3.x and upgrades with the name `magento/inventory-composer-metapackage`. For details, see [Install {{site.data.var.im}}]({{site.baseurl}}/extensions/inventory-management/).

**Magento Community Contribution** – Magento thanks the many contributors to the [Magento Inventory (was MSI) project](https://github.com/magento/inventory), developing these features as part of the Magento Community Engineering program.

## Terminology

The following terms are important as you work with {{site.data.var.im}} APIs:

*  **Sources** represent physical locations that store and ship available products. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. (Any location can be designated as a source for virtual products.)

*  **Stocks** map a sales channel (currently limited to websites) to source locations and on-hand inventory. A stock can map to multiple sales channels, but a sales channel can be assigned to only one stock.

*  **Aggregate Salable Quantity** is the total virtual inventory that can be sold through a sales channel. The amount is calculated across all sources assigned to a stock.

*  **Reservations** track deductions from the salable quantity as customers add products to carts and complete checkout. When an order ships, the reservation clears and deducts the shipped amounts from specific source inventory quantities.

## A simple scenario

The following diagram illustrates the relationship between source stocks, aggregate stocks, and sales channels:

![Source and aggregate stock](images/inventory-diagram-stock.png)

In this diagram, a bicycle merchant has inventory for a mountain bike in two warehouses and a drop shipper. He has two stocks with configured website sales channels and sources. When a customer shops through the UK website, Magento aggregates bike inventory from the UK warehouse and the drop shipper sources, for a salable quantity of 95. The bike can be shipped from either the warehouse or the drop shipper, but not the NY warehouse. Amazon Marketplace has the same stock, drawing from the same aggregate stock as the UK website.

## Important {{site.data.var.im}} objects

*  `Source` – Defines a physical stock.

*  `SourceItem` – A relation object that represents the amount of a specific product at a physical source. We use this entity for updating inventory on each source. Quantities might change as a result of synchronizing with an external Product Information Management (PIM) or Enterprise Resource Planning (ERP) system, or internally as a stock deduction during the checkout process. A `SourceItem` cannot be used for retrieving data that must be rendered on front-end, because only aggregated data should be used for all validations and UI representation.

*  `StockItem` – Also known as Aggregated Virtual Stock. This is read-only data that the re-indexation process generates. Based on a pre-defined mapping, we define what sources are assigned to the current scope (sales channel) and aggregate quantities from all assigned sources. We also use `StockItem` to check if a product is in or out of stock.  Making this segregation by Read-Only interface (`StockItem`) and Write-Only interface (`SourceItem`), the Inventory architecture achieves Command Query Responsibility Segregation (CQRS). As a result, all `GET` HTTP requests should use `StockItem` entity, and all `POST/PUT` should use `SourceItem`.

## Shipping algorithms

When merchants are ready to make a partial or full shipment, they select the source or sources from which to send the products. Customers typically want low-cost shipping and a guarantee of safe arrival of products, while the merchant needs to ensure minimal overhead for the inventory storage and shipping costs. {{site.data.var.im}} includes an algorithm that takes these considerations into account and recommends the best shipping option or options. Magento provides an algorithm for Priority, using the source priority per stock, where each source is given a priority in the scope of a specific sales channel, and for Distance, using the locations of sources and shipping destinations. {{site.data.var.im}} also supports developer-provided extensions for other algorithms based on criteria such as cheapest shipping and closest GPS location.
