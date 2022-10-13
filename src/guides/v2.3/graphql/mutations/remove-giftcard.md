---
group: graphql
title: removeGiftCardFromCart mutation
ee_only: True
---

The `removeGiftCardFromCart` mutation removes a previously-applied gift card from the cart.

## Syntax

```graphql
mutation {
  removeGiftCardFromCart(
    input: RemoveGiftCardFromCartInput
  ) {
    RemoveGiftCardFromCartOutput
  }
}
```

## Example usage

 The following example removes a gift card from the cart.

**Request:**

```graphql
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

 {% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID \"xxxxx\"` | The ID provided in the `cart_id` field is invalid or the cart does not exist for the customer.
`The gift card couldn't be deleted from the quote.` | The value provided in the `gift_card_code` field is invalid or the gift card with that specific ID does not exist in the cart.
