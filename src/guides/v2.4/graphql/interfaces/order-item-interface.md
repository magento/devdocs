---
group: graphql
title: OrderItemInterface attributes and implementations
---

`OrderItemInterface` provides details about items in a customer's order history. It has the following implementations:

*  [`OrderItem`](#OrderItem)
*  [`BundleOrderItem`](#BundleOrderItem)
*  [`DownloadableOrderItem`](#DownloadableOrderItem)
*  [`GiftCardOrderItem`](#GiftCardOrderItem)

## Attributes

{% include graphql/order-item-interface.md %}

## Implementations

### OrderItem attributes {#OrderItem}

The `OrderItem` object does not introduce any additional attributes to `OrderItemInterface`.

### BundleOrderItem attributes {#BundleOrderItem}

The `BundleOrderItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

{% include graphql/item-selected-bundle-option.md %}

### DownloadableOrderItem attributes {#DownloadableOrderItem}

The `DownloadableOrderItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links that were ordered from the downloadable product

{% include graphql/downloadable-items-links.md %}

### GiftCardOrderItem attributes {#GiftCardOrderItem}

The `GiftCardOrderItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for an order item

{% include graphql/gift-card-item.md %}
