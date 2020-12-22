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

## Example usage

The following query returns shipping details about order ID `000000005`. The `BundleOrderItem`  fragment returns item-specific information. The order also included a downloadable product, but downloadable products are not shipped.

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
        shipments {
          id
          items {
            id
            product_sku
            product_name
            ... on BundleShipmentItem {
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
            "shipments": [
              {
                "id": "MDAwMDAwMDA0",
                "items": [
                  {
                    "id": "Ng==",
                    "product_sku": "24-WG080-24-WG082-blue-24-WG084-24-WG087-24-WG088",
                    "product_name": "Sprite Yoga Companion Kit",
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
                    "id": "Nw==",
                    "product_sku": "WS12-XS-Orange",
                    "product_name": "Radiant Tee"
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
