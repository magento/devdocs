---
group: inventory
title: Deprecated ScalableInventory entities
---

The `ScalableInventory` module is part of Magento Commerce. Its original purpose was to perform inventory processing asynchronously, moving the computation of quantities to a worker that processed the calculations later.
This functionality was limited in that the asynchronous processing could be performed on backordered products only. 

Inventory Management creates reservations for all orders, not just those on backorder. All quantities are calculated asynchronously. 

The following `ScalableInventory` interfaces have been deprecated. They cannot be mapped to new interfaces. The Inventory Management architecture eliminates the need for this functionality.


* `ItemInterface` 
* `ItemsInterface`