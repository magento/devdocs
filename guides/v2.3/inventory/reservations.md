---
group: inventory
title: Reservations
---

Magento manages inventory by issuing a set of _reservations_ for each product order. 

When Magento receives an order, Inventory Management issues a reservation tracks inventory using reservations against the salable quantity, deducting from inventory quantity when invoicing and shipping the products.

Magento tracks inventory using _reservations_. A reservation represents product quantities that have been set aside ordered but not shipped. 
  against the salable quantity, deducting from inventory quantity when invoicing and shipping the products.


is an entity which is used to keep calculation of Salable product quantity consistent, and prevent overselling. It is created as an "inventory request" when an order is placed and exists until the time when the order would be processed and corresponding source deduction (deduction of specific SourceItems) happen, along with that the initial Reservation should be compensated. Introducing Reservation entity we could be sure that merchant would not sell more products than he has in stock even if latency between order placement and order processing (deduction of specific SourceItems) is high. Reservations are append-only operations and help us to prevent blocking operations and race conditions at the time of checkout.

## Reservations scenario




## Data interface

The `ReservationInterface` 

## Reservation services

When an event such as an order placement, cancellation, refund, or shipment occurs, the Append Reservation Service creates a reservation for each SKU, indicating the how many to add to the salable quantity total. The service guarantees the client does not use the `ReservationAppend` service to update existing reservations. (Reservations are append-only entities.) For example, use the service to check whether the `ReservationId`, which is passed in the scope of `ReservationInterface`, has been nullified.

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


## Checkout services

In Inventory Management, a product's `Quantity` value is not static. The salable quantity is now retrieved as a result of a dedicated service call. This differs from the previous `CatalogInventory` implementation, which defined the `StockItem` interface.  `CatalogInventory` has been deprecated. The `Product` `StockItem` data interface  is that Quantity is not a static data and should be always retrieved as a result of dedicated Service call. That's why we don't have anymore `StockItem` data interface which is part of Product entity. 

Use the following dynamic services introduced instead of `StockItem`:

Interface | Description
--- | ---
`GetProductSalableQtyInterface` | Returns the salable product quantity for the specified stock ID
`IsProductSalableInterface` | Checks whether the product is in stock
`IsProductSalableForRequestedQtyInterface` |  Checks whether there is enough salable quantity to fulfill an order or place the product into a shopping cart 


## Removing processed reservations

Once a reservation is created, Magento does not modify its status. Instead,  when an event occurs that requires an update to the status of a reservation, Magento creates another reservation the completely or partially negates the existing reservation. 

For example, if a customer places an order for 30 items of SKU-1, Magento creates a reservation with the quantity of -30.  When the order is shipped or canceled, Magento creates another reservation with a quantity of 30. 

Magento provides the `inventory_cleanup_reservations` cron job to clear the reservation table. By default, it runs daily at midnight. The cron job runs a script that queries the database to find complete reservation chains in which the sum of quantity values is 0. Magento subsequently deletes these reservations.

## Web APIs

Magento Web APIs (REST and SOAP) imposes restrictions for entity interfaces that outside of the scope of reservations. Most notably, Web APIs require getter and setter methods. Because reservations are append-only immutable entities, there are no setter methods. Reservations 
The reservation APIs are not expoWe no need to expose Reservation API for WebAPI (REST and SOAP), because we can consider Reservations as SPI, which created as a side-effect of some particular business operation (like order placement, or return). Currently, in Magento 2 WebAPI imposes some restrictions for entity interfaces (existence getter and setter methods). Thus, if we would not expose Reservation entity for WebAPI (REST, SOAP) -> we could use any interface we want (don't have mandatory setter methods). And because we agreed that Reservations are append-only immutable entities we could eliminate all the setter methods. So, we will end-up with ReservationInterface consisting of just getter methods. 

And we need to introduce ReservationBuilderInterface which will allow the possibility to set data into the reservation when we need to create one. After that, we could build Reservation entity.

```php
$reservations[] = $this->reservationBuilder
  ->setSku($item->getSku())
  ->setQuantity((float)$item->getQuantity())
  ->setStockId($stockId)
  ->setMetadata($this->serializer->serialize($this->salesEventToArrayConverter->execute($salesEvent)))
  ->build(); 
$reservationAppend->execute($reservations);
```
Doing so, we could ensure immutability on the level of Reservation interface.