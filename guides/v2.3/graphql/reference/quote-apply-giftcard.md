---
group: graphql
title: applyGiftCardToCart mutation
ee_only: True
---

The `applyGiftCardToCart` mutation applies a pre-defined gift card code to the specified cart.

## Syntax

 `mutation: applyGiftCardToCart(input: ApplyGiftCardToCartInput): ApplyGiftCardToCartOutput`

## Example usage

The following example adds a gift card code called `048FQEGYUA73` to a cart.

**Request**

``` text
mutation {
   applyGiftCardToCart( input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
      gift_card_code: "048FQEGYUA73"
   }
)  {
    cart {
       applied_gift_cards {
          code
      }
    }
}
```

**Response**

```json
{
 "applyGiftCardToCart": {
      "cart": {
          "applied_gift_cards": [
              {
                "code": "048FQEGYUA73"
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
`cart` |[ Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

 {% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
