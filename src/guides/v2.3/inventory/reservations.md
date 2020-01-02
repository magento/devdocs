---
group: inventory
title: Reservations
---

Magento uses _reservations_ to calculate and keep track of the salable quantity of each product assigned to a stock. When a customer places an order, Magento checks whether the quantity requested for each item is available for sale. If yes, Magento creates a reservation as an inventory request for each item, thereby reducing the salable quantity available for purchase. As items are shipped, cancelled or refunded, Magento issues additional reservations that compensate the original. A cron job removes the original reservation and all compensatory reservations from the database when all ordered items have been shipped, cancelled, or refunded.

Reservations prevent the merchant from overselling products, even in cases where the latency between order placement and order processing is high. In addition, reservations are append-only operations that help prevent blocking operations and race conditions at the time of checkout.

## Reservation calculations

Magento creates a reservation for each product when the following events occur:

*  A customer or merchant places an order.
*  A customer or merchant fully or partially cancels an order.
*  The merchant creates a shipment for a physical product.
*  The merchant creates an invoice for a virtual or downloadable product.
*  The merchant issues a credit memo.

Reservations are append-only operations, similar to a log of events. The initial reservation is assigned a negative quantity value. All subsequent reservations created while processing the order are positive values. When the order is complete, the sum of all reservations for the product is 0.

Before Magento can issue a reservation in response to a new order, it determines whether there are enough salable items to fulfill the order. The following quantities factor into the calculation:

*  **StockItem quantity**. The StockItem quantity is the aggregated amount of inventory from all the physical sources for the current sales channel. If the Baltimore source has 20 units of a product, the Austin source has 25 units of the same product, while the Reno source has 10, and all these sources are linked to Stock A, then the StockItem count for thus product is 55 (20 + 25 + 10). (When items are shipped, the Inventory indexer updates the quantities available at each source.)

*  **Outstanding reservations**. Magento totals all the initial reservations that have not been compensated. This number will always be negative. If customer A has a reservation for 10 items, and customer B has a reservation 5 for items, then outstanding reservations for the product total -15.

Therefore, the merchant can fulfill an incoming order as long as the customer orders less than 40 (55 + -15) units.

When you complete processing an order (Complete, Canceled, Closed), all reservations in the scope of that order should resolve to `0`. This clears all salable quantity holds.

 {:.bs-callout-info}
Backorders (with Out-of-Stock Thresholds) and Notify for Quantity Below Threshold settings also affect the calculation of salable quantities, but they are outside the scope of this topic. For more information about these settings, see [Configuring Inventory Management](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-configure-inventory-management.html) in the _Magento User Guide_.

## Reservation objects

A reservation contains the following information:

Parameter | Data type | Description
--- | --- | ---
`reservation_id` | Integer | A system-generated ID
`stock_id` | Integer | The ID of the stock the product is assigned to
`sku` | String | The SKU of the product
`quantity` | Float | The number of items in this reservation
`metadata` | String | The event type, object type, and object ID for this reservation. For example, `{"event_type":"order_placed","object_type":"order","object_id":"8"}`

The metadata `event_type` can have the following values:

*  `order_placed`
*  `order_canceled`
*  `shipment_created`
*  `creditmemo_created`
*  `invoice_created`

Currently, the metadata object type must be `order`, and the object ID is the order ID.

In future releases, it might be possible to create a reservation when a customer adds an item to a shopping cart. Each item could be reserved for a fixed amount of time, such as 15 minutes, allowing the customer to reserve items while continuing to shop. When this type of reservation is enabled, the metadata could contain additional types of information.

## Reservation lifecycle

The following example shows the sequence of reservations generated for a simple order.

1. The customer makes a purchase order for 25 units of product `SKU-1`. The reservation contains the following information:

   ```text
   reservation_id = 1
   stock_id = 1
   sku = SKU-1
   quantity = -25
   event_type = order_placed
    ```

1. The customer sends an invoice for 20 items, essentially canceling 5 of the units ordered.

   ```text
   reservation_id = 2
   stock_id = 1
   sku = SKU-1
   quantity = 5
   event_type = order_canceled
   ```

1. The merchant ships the purchased 20 units.

   ```text
   reservation_id = 3
   stock_id = 1
   sku = `SKU-1`
   quantity = 20
   event_type = shipment_created
   ```

The three `quantity` values sum up to 0 (-25 + 5 + 20). Note that Magento does not modify any existing reservations.

## Removing processed reservations

Magento provides the `inventory_cleanup_reservations` cron job to clear the reservation table. By default, it runs daily at midnight, though you can configure the times and frequency. The cron job runs a script that queries the database to find complete reservation sequences in which the sum of quantity values is 0. When all reservations for a given product that originated on the same day (or other configured time) have been compensated, Magento subsequently deletes these reservations all at once.

Often, all initial reservations produced in a single day cannot compensated that same day.  This situation could occur when a customer places an order minutes before the cron job begins or makes the purchase with an offline payment method, such as a bank transfer. The compensated reservation sequences remain in the database until they have all been compensated. This practice does not interfere with reservation calculations, because the total for each reservation is 0.

 {:.bs-callout-info}
{{site.data.var.im}} provides commands to detect and manage reservation inconsistencies. See [Inventory CLI reference]({{page.baseurl}}/inventory/inventory-cli-reference.html).

## Interfaces and services

All interfaces and services are defined in the `InventoryReservations` and `InventoryReservationsApi` modules.

### Data interface

`ReservationInterface` defines the constants and getter methods required for managing reservations.

### Reservation services

When an event such as an order placement, cancellation, refund, or shipment occurs, the Append Reservation Service creates a reservation for each SKU, indicating how many items to add to the salable quantity total. The service guarantees the client does not use the `ReservationAppend` service to update existing reservations. (Reservations are append-only entities.) For example, use the service to check whether the `ReservationId`, which is passed in the scope of `ReservationInterface`, has been nullified.

```php
interface AppendReservationsInterface
{
    /**
     * Append reservations
     *
     * @param ReservationInterface[] $reservations
     * @return void
     * @throws \Magento\Framework\Exception\InputException
     * @throws \Magento\Framework\Exception\CouldNotSaveException
     */
    public function execute(array $reservations): void;
}
```

Do NOT use the `AppendReservationsInterface` service directly in the business logic that creates a business event. Instead, use a more high-level service:

```php
namespace Magento\InventorySalesApi\Api;

/**
 * This service is responsible for creating reservations upon a sale event.
 *
 * @api
 */
interface PlaceReservationsForSalesEventInterface
{
    /**
     * @param \Magento\InventorySalesApi\Api\Data\ItemToSellInterface[] $items
     * @param \Magento\InventorySalesApi\Api\Data\SalesChannelInterface $salesChannel
     * @param \Magento\InventorySalesApi\Api\Data\SalesEventInterface $salesEvent
     * @return void
     *
     * @throws \Magento\Framework\Exception\LocalizedException
     * @throws \Magento\Framework\Exception\InputException
     * @throws \Magento\Framework\Exception\CouldNotSaveException
     */
    public function execute(
        array $items,
        \Magento\InventorySalesApi\Api\Data\SalesChannelInterface $salesChannel,
        \Magento\InventorySalesApi\Api\Data\SalesEventInterface $salesEvent
    ): void;
}
```

### Checkout services

In Inventory Management, a product's `Quantity` value is not static. The salable quantity is now retrieved as a result of a dedicated service call. This differs from the previous `CatalogInventory` implementation, which defined the `Product` `StockItem` interface. (`CatalogInventory` has been deprecated.)

Use the following dynamic services introduced instead of `StockItem`:

Interface | Description
--- | ---
`GetProductSalableQtyInterface` | Returns the salable product quantity for the specified stock ID
`IsProductSalableInterface` | Checks whether the product is salable
`IsProductSalableForRequestedQtyInterface` |  Checks whether there is enough salable quantity to fulfill an order or place the product into a shopping cart

## Web API support

Magento Web APIs (REST and SOAP) imposes restrictions for entity interfaces that are outside the scope of reservations. Most notably, Web APIs require getter and setter methods. Because reservations are append-only immutable entities, there are no reservation setter methods. Therefore, reservation Web APIs are not supported.
