---
group: graphql
title: InvoiceItemInterface attributes and implementations
---

`InvoiceItemInterface` provides details about items in a customer's order history that were invoiced. It has the following implementations:

*  [`BundleInvoiceItem`](#BundleInvoiceItem)
*  [`DownloadableInvoiceItem`](#DownloadableInvoiceItem)
*  [`GiftCardInvoiceItem`](#GiftCardInvoiceItem)
*  [`InvoiceItem`](#InvoiceItem)

## Attributes

The `InvoiceItemInterface` describes a specific invoice.

{% include graphql/invoice-item-interface.md %}

## Implementations

### BundleInvoiceItem attributes {#BundleInvoiceItem}

The `BundleInvoiceItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

{% include graphql/item-selected-bundle-option.md %}

### DownloadableInvoiceItem attributes {#DownloadableInvoiceItem}

The `DownloadableInvoiceItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links from the invoiced downloadable product

{% include graphql/downloadable-items-links.md %}

### GiftCardInvoiceItem attributes {#GiftCardInvoiceItem}

The `GiftCardInvoiceItem` object defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for an invoiced item

{% include graphql/gift-card-item.md %}

### InvoiceItem attributes {#InvoiceItem}

The `InvoiceItem` object does not introduce any additional attributes to `InvoiceItemInterface`.
