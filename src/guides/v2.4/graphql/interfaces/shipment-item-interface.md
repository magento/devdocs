---
group: graphql
title: ShipmentItemInterface attributes and implementations
---

`ShipmentItemInterface` provides details about items in a customer's order history that were shipped. It has the following implementations:

*  [`BundleShipmentItem`](#BundleShipmentItem)
*  [`GiftCardShipmentItem`](#GiftCardShipmentItem)
*  [`ShipmentItem`](#ShipmentItem)

## Attributes

The `ShipmentItemInterface` describes a specific shipmemt.

{% include graphql/shipment-item-interface.md %}

## Implementations

### BundleShipmentItem attributes {#BundleShipmentItem}

The `BundleShipmentItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

{% include graphql/item-selected-bundle-option.md %}

### GiftCardShipmentItem attributes {#GiftCardShipmentItem}

The `GiftCardShipmentItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected properties for a shipped gift card

{% include graphql/gift-card-item.md %}

### ShipmentItem attributes {#ShipmentItem}

The `ShipmentItem` object does not introduce any additional attributes to `ShipmentItemInterface`.
