---
group: graphql
title: applyGiftCardToCart mutation
ee_only: True
redirect from:
  - /guides/v2.3/graphql/reference/quote-apply-giftcard.html
---

The `applyGiftCardToCart` mutation applies a pre-defined gift card code to the specified cart.

## Syntax

 `mutation: applyGiftCardToCart(input: ApplyGiftCardToCartInput): ApplyGiftCardToCartOutput`

## Example usage

The following example adds a gift card with the code `0330CEIVTLB4` to the cart. The gift card has a value of $20.

**Request:**

```graphql
mutation {
  applyGiftCardToCart(
    input: {
      cart_id: "lY8PnKhlHBGc4WS5v0Y3dWjxiA5PvvgY"
      gift_card_code: "0330CEIVTLB4"
    }
  ) {
    cart {
      applied_gift_cards {
        applied_balance {
          value
          currency
        }
        code
        current_balance {
          value
          currency
        }
        expiration_date
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "applyGiftCardToCart": {
      "cart": {
        "applied_gift_cards": [
          {
            "applied_balance": {
              "value": 20,
              "currency": "USD"
            },
            "code": "0330CEIVTLB4",
            "current_balance": {
              "value": 20,
              "currency": "USD"
            },
            "expiration_date": null
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `applyGiftCardToCart` mutation requires the `cart_id` and `gift_card_code`.

### ApplyGiftCardToCartInput object {#ApplyGiftCardToCartInput}

The `ApplyGiftCardToCartInput` object must contain the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`gift_card_code` | String! | The gift card code

## Output attributes

The `ApplyGiftCardToCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

 {% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.