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

## Example usage

The following query returns details about order ID `000000005`. The `BundleOrderItem` and `DownloadableOrderItem` fragments return item-specific information.

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
          eq: "000000005"
        }
      }) {
      items {
        id
        items {
          id
          product_name
          product_sku
          product_type
          quantity_ordered
          quantity_invoiced
          quantity_shipped
          quantity_refunded
          ...on BundleOrderItem {
            bundle_options {
              id
              label
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
          ...on DownloadableOrderItem {
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
            "items": [
              {
                "id": "MTU=",
                "product_name": "Yoga Adventure",
                "product_sku": "240-LV06",
                "product_type": "downloadable",
                "quantity_ordered": 1,
                "quantity_invoiced": 1,
                "quantity_shipped": 0,
                "quantity_refunded": 0,
                "downloadable_links": [
                  {
                    "uid": "ZG93bmxvYWRhYmxlLzM=",
                    "title": "Yoga Adventure"
                  }
                ]
              },
              {
                "id": "MTY=",
                "product_name": "Sprite Yoga Companion Kit",
                "product_sku": "24-WG080-24-WG082-blue-24-WG084-24-WG087-24-WG088",
                "product_type": "bundle",
                "quantity_ordered": 1,
                "quantity_invoiced": 1,
                "quantity_shipped": 1,
                "quantity_refunded": 0,
                "bundle_options": [
                  {
                    "id": "Mg==",
                    "label": "Sprite Foam Yoga Brick",
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
                    "label": "Sprite Foam Roller",
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
                    "label": "Sprite Stasis Ball",
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
                    "label": "Sprite Yoga Strap",
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
                "id": "MjE=",
                "product_name": "Radiant Tee",
                "product_sku": "WS12-XS-Orange",
                "product_type": "configurable",
                "quantity_ordered": 1,
                "quantity_invoiced": 1,
                "quantity_shipped": 1,
                "quantity_refunded": 1
              }
            ]
          }
        ]
      }
    }
  }
}
```
