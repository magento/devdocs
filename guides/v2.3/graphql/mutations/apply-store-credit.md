---
group: graphql
title: applyStoreCreditToCart mutation
ee_only: true
---

The `applyStoreCreditToCart` mutation applies store credit to the specified cart.

Store credit is an amount that the merchant applies to a customer account as a result of a refund or similar transaction. A customer can use store credit to pay for purchases.

The amount returned in the `current_balance` indicates how much store credit at the time you run the `applyStoreCreditToCart` mutation. This amount is not decreased until you place the order.

## Syntax

`mutation: {applyStoreCreditToCart(input: ApplyStoreCreditToCartInput): {ApplyStoreCreditToCartOutput}}`

## Example usage

In the following example, the customer starts with $10 of store credit. The subtotal of the items in the cart before applying the store credit plus shipping and tax is $34.64. The grand total on the cart after applying the store credit is $24.64.

**Request**

```text
mutation {
  applyStoreCreditToCart(
    input: {
      cart_id: "4HHaKzxpKM2ZwD0IcheRfcPNBWS3OvRM"
    }
  ) {
    cart {
      applied_store_credit {
        applied_balance {
          currency
          value
        }
        current_balance {
          currency
          value
        }
      }
      prices {
        grand_total {
          currency
          value
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "applyStoreCreditToCart": {
      "cart": {
        "applied_store_credit": {
          "applied_balance": {
            "currency": "USD",
            "value": 34.64
          },
          "current_balance": {
            "currency": "USD",
            "value": 10
          }
        },
        "prices": {
          "grand_total": {
            "currency": "USD",
            "value": 24.64
          }
        }
      }
    }
  }
}
```

## Input attributes

The `ApplyStoreCreditToCartInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart

## Output attributes

The `ApplyStoreCreditToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
