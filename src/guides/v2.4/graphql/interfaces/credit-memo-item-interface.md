---
group: graphql
title: CreditMemoItemInterface attributes and implementations
---

`CreditMemoItemInterface` provides details about items in a customer's order history that were refunded. It has the following implementations:

*  [`BundleCreditMemoItem`](#BundleCreditMemoItem)
*  [`CreditMemoItem`](#CreditMemoItem)
*  [`DownloadableCreditMemoItem`](#DownloadableCreditMemoItem)
*  [`GiftCardCreditMemoItem`](#GiftCardCreditMemoItem)

## Attributes

The `CreditMemoItemInterface` describes a specific credit memo.

{% include graphql/credit-memo-item-interface.md %}

## Implementations

### BundleCreditMemoItem attributes {#BundleCreditMemoItem}

The `BundleCreditMemoItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

{% include graphql/item-selected-bundle-option.md %}

### CreditMemoItem attributes {#CreditMemoItem}

The `CreditMemoItem` object does not introduce any additional attributes to `CreditMemoItemInterface`.

### DownloadableCreditMemoItem attributes {#DownloadableCreditMemoItem}

The `DownloadableCreditMemoItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links that were refunded from the downloadable product

{% include graphql/downloadable-items-links.md %}

### GiftCardCreditMemoItem attributes {#GiftCardCreditMemoItem}

The `GiftCardCreditMemoItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for an order item

{% include graphql/gift-card-item.md %}
