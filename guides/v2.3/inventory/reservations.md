---
group: inventory
title: Reservations
---

Magento tracks inventory using _reservations_. A reservation represents product quantities that have been ordered but not shipped. 
  against the salable quantity, deducting from inventory quantity when invoicing and shipping the products.


is an entity which is used to keep calculation of Salable product quantity consistent, and prevent overselling. It is created as an "inventory request" when an order is placed and exists until the time when the order would be processed and corresponding source deduction (deduction of specific SourceItems) happen, along with that the initial Reservation should be compensated. Introducing Reservation entity we could be sure that merchant would not sell more products than he has in stock even if latency between order placement and order processing (deduction of specific SourceItems) is high. Reservations are append-only operations and help us to prevent blocking operations and race conditions at the time of checkout.

## Data interface

The `ReservationInterface` 

## Reservation services

## Checkout services

## Removing processed reservations

## Web APIs