---
group: inventory
title: Inventory management
---

Magento 2.3 introduces a new inventory management system that replaces and expands on the capabilities provided in previous releases.





{:.bs-callout .bs-callout-info}
If the Manage Stock option ( **Stores** > **Configuration** > **Catalog** > **Inventory** > **Product Stock Options** ) is set to **No**, Magento does not implement the inventory management system.


## Sources

**Sources** represent locations that store and ship available products. A merchant can designate any location that can fulfill orders or has stock available as a source. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. Any location can be designated as a source for virtual products.

When you upgrade to Magento 2.3, Magento creates a default source and assigns all products to this source. Unless you create custom sources, all newly-created products are also assigned to the default source. Likewise, in fresh installations, Magento automatically assigns all products to the default source, unless you have created custom sources.

 **Single source merchants** (those that ship all products from one location) do not need to create custom sources. These merchants use the default source as their single point of inventory location and shipments. **Multi source merchants** 



 As the merchant adds new products to the system, New products are assigned to the Default Source until configured with additional sources.

are the physical locations where product inventory is managed and shipped for order fulfillment, or where services are available. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers. The merchant allocates inventory quantities to these sources, and Magento automatically aggregates the total salable products for their stocks. A merchant may have multiple sources in different geographic locations by country and continent, locations in a city, and even services.

A source can have priority in the scope of stock in one warehouse, but not necessarily in all warehouses as the source can be re-used in different stocks. The number of stocks and sources adds to the complexity for determining the best warehouse or store to fulfill an order.






Inventory management now gives merchants the ability to:

* Create sources with specific locations (like warehouses and storefronts) and available shipping options
* Create stock to aggregate a virtual inventory from all or some sources
* Associate stock to sales channels (websites and extended options) with prioritized sources
* Override and rerun source matching for order shipments
* Ship partial and distributed shipments from multiple locations
* Support orders for multiaddress shipping
* Track, update, and transfer inventory quantities per source
* Receive notifications for low available/salable inventory, out-of-stock, and backorders
Extend algorithms for customized source and order matching per sales channel
Integrate with 3rd party inventory systems, warehouses, and order management using MSI APIs
At the heart of MSI are advanced algorithms and features to ensure smooth stock tracking and order fulfillment across your multiples sources and websites. With concurrent checkout, MSI tracks and reserves sales, preventing concurrent sales from overselling your available stock. The source selection algorithm manages the reservation of stock, prioritizes the fulfillment across your sources using warehouse stock prior to store inventory, and finally deducts inventory for a source when creating a shipment.



Magento 2.3 introduced significant improvements to inventory management functionality. Merchants can now manage inventory across multiple locations and sales channels with concurrent checkout protection and shipment matching algorithms. MSI features and algorithms best support single and multisite configurations with multiple inventory sources fulfilling orders. If you have a single store and website with one source, you may not need to enable and use MSI immediately. As your business expands and changes, add more stock, sources, update inventory, and extend to new sales channels as you need.

MSI helps all merchants regardless of size, and scales as your business grows. It supports all product types, simple to bundle products, including downloads and virtual products. Manage your inventory regardless of warehouse location, type of product or service, or sales channel. Automatically ship from multiple warehouses, brick-and-mortar stores, distribution centers, and drop shipping to complete orders with a focus on balanced inventory, shipping costs, and more.

MSI gives you the ability to:



This guide introduces these concepts, examines the algorithms, and details steps to get started with MSI.
