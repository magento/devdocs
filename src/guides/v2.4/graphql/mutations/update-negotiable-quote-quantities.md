---
group: graphql
title: updateNegotiableQuoteQuantities mutation
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/negotiable-quote/mutations/update-quantities/
status: migrated
---

The `updateNegotiableQuoteQuantities` mutation changes the quantity of one or more products in an active negotiable quote.

{:.bs-callout-info}
Use the `removeNegotiableQuoteItems` mutation to completely remove a product from a negotiable quote.

This query requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
updateNegotiableQuoteQuantities(
    input: UpdateNegotiableQuoteQuantitiesInput!
): UpdateNegotiableQuoteItemsQuantityOutput
```

## Example usage

The following example changes the quantity of two products in a negotiable quote.

**Request:**

```graphql
mutation {
  updateNegotiableQuoteQuantities(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
      items: [
        { quote_item_uid: "MTU=", quantity: 7 }
        { quote_item_uid: "MTY=", quantity: 8 }
      ]
    }
  ) {
    quote {
      uid
      name
      updated_at
      items {
        uid
        product {
          uid
          sku
          name
        }
        quantity
        prices {
          price {
            value
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
    "updateNegotiableQuoteQuantities": {
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
        "name": "April 22 request",
        "updated_at": "2021-04-23 14:43:42",
        "items": [
          {
            "uid": "MTU=",
            "product": {
              "uid": "MjA=",
              "sku": "24-UG01",
              "name": "Quest Lumaflex&trade; Band"
            },
            "quantity": 7,
            "prices": {
              "price": {
                "value": 19
              }
            }
          },
          {
            "uid": "MTY=",
            "product": {
              "uid": "MTg=",
              "sku": "24-UG02",
              "name": "Pursuit Lumaflex&trade; Tone Band"
            },
            "quantity": 8,
            "prices": {
              "price": {
                "value": 16
              }
            }
          },
          {
            "uid": "MTc=",
            "product": {
              "uid": "MTc=",
              "sku": "24-UG04",
              "name": "Zing Jump Rope"
            },
            "quantity": 10,
            "prices": {
              "price": {
                "value": 12
              }
            }
          }
        ]
      }
    }
}
```

## Input attributes

The `UpdateNegotiableQuoteQuantitiesInput` input object specifies the negotiable quote ID and the items to be updated.

### UpdateNegotiableQuoteQuantitiesInput attributes {#UpdateNegotiableQuoteQuantitiesInput}

The `UpdateNegotiableQuoteQuantitiesInput` object contains the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`items` | [NegotiableQuoteItemQuantityInput]! | An array of items to update
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

### NegotiableQuoteItemQuantityInput attributes {#NegotiableQuoteItemQuantityInput}

The `NegotiableQuoteItemQuantityInput` object contains the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`quantity` | Float! | The new quantity of the negotiable quote item
`quote_item_uid` | ID! | The unique ID of a CartItemInterface object

## Output attributes

The `UpdateNegotiableQuoteItemsQuantityOutput` output object contains the following attribute.

Attribute | Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote! | Contains details about the negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
