---
group: graphql
title: removeGiftCardFromCart mutation
ee_only: True
---

The `removeGiftCardFromCart` mutation removes a previously-applied gift card from the cart.

## Syntax

 `mutation: removeGiftCardFromCart(input: RemoveGiftCardFromCartInput): RemoveGiftCardFromCartOutput`

## Example usage

 The following example removes a gift card from the cart.

**Request:**

 ``` text
mutation {
  removeGiftCardFromCart(
    input: {
      cart_id: "lOeLKsVkZ1PEvA8A7EaCvmEAk4JRBR7A"
      gift_card_code: "049XDMZ6L81X"
    }
  ) {
    cart {
      applied_gift_cards {
        code
      }
    }
  }
}
```

**Response:**

 ```json
{
  "data": {
    "removeGiftCardFromCart": {
      "cart": {
        "applied_gift_cards": []
      }
    }
  }
}
```

## Input attributes

The `removeGiftCardFromCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`gift_card_code` | String! | The gift card code

## Output attributes

The `removeGiftCardFromCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

 {% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
