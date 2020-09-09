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

## Example usage

The following query returns invoice details about order ID `000000005`. The `BundleOrderItem` and `DownloadableOrderItem` fragments return item-specific information.

**Request:**

```graphql
{
  customer {
    firstname
    lastname
    email
    orders(
      filter: {
        number: {
          match: "000000005"
        }
      }) {
      items {
        id
        invoices {
          id
          items {
            id
            product_sku
            product_name
            quantity_invoiced
            ... on BundleInvoiceItem {
              bundle_options {
                id
                values {
                  id
                  product_name
                  product_sku
                  quantity
                  price {
                    value
                    currency
                  }
                }
              }
            }
            ... on DownloadableInvoiceItem {
              id
              downloadable_links {
                uid
                title
              }
            }
          }
        }
      }
    }
  }
}

```
**Response:**

```json
{
  "data": {
    "customer": {
      "firstname": "Roni",
      "lastname": "Costello",
      "email": "roni_cost@example.com",
      "orders": {
        "items": [
          {
            "id": "NQ==",
            "invoices": [
              {
                "id": "NA==",
                "items": [
                  {
                    "id": "OQ==",
                    "product_sku": "240-LV06",
                    "product_name": "Yoga Adventure",
                    "quantity_invoiced": 1,
                    "downloadable_links": [
                      {
                        "uid": "ZG93bmxvYWRhYmxlLzM=",
                        "title": "Yoga Adventure"
                      }
                    ]
                  },
                  {
                    "id": "MTA=",
                    "product_sku": "24-WG080-24-WG082-blue-24-WG084-24-WG087-24-WG088",
                    "product_name": "Sprite Yoga Companion Kit",
                    "quantity_invoiced": 1,
                    "bundle_options": [
                      {
                        "id": "Mg==",
                        "values": [
                          {
                            "id": "MTg=",
                            "product_name": "Sprite Foam Yoga Brick",
                            "product_sku": "24-WG084",
                            "quantity": 1,
                            "price": {
                              "value": 5,
                              "currency": "USD"
                            }
                          }
                        ]
                      },
                      {
                        "id": "NA==",
                        "values": [
                          {
                            "id": "MjA=",
                            "product_name": "Sprite Foam Roller",
                            "product_sku": "24-WG088",
                            "quantity": 1,
                            "price": {
                              "value": 19,
                              "currency": "USD"
                            }
                          }
                        ]
                      },
                      {
                        "id": "MQ==",
                        "values": [
                          {
                            "id": "MTc=",
                            "product_name": "Sprite Stasis Ball 65 cm",
                            "product_sku": "24-WG082-blue",
                            "quantity": 1,
                            "price": {
                              "value": 27,
                              "currency": "USD"
                            }
                          }
                        ]
                      },
                      {
                        "id": "Mw==",
                        "values": [
                          {
                            "id": "MTk=",
                            "product_name": "Sprite Yoga Strap 10 foot",
                            "product_sku": "24-WG087",
                            "quantity": 1,
                            "price": {
                              "value": 21,
                              "currency": "USD"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "MTU=",
                    "product_sku": "WS12-XS-Orange",
                    "product_name": "Radiant Tee",
                    "quantity_invoiced": 1
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```
