---
group: graphql
title: removeItemFromCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-remove-item.html
---

The `removeItemFromCart` mutation deletes the entire quantity of a specified item from the cart. If you remove all items from the cart, the cart continues to exist.

## Syntax

`mutation: {removeItemFromCart(input: RemoveItemFromCartInput): {RemoveItemFromCartOutput}}`

## Example usage

The following example removes cart item 14 from the cart.

**Request:**

```graphql
mutation {
  removeItemFromCart(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
      cart_item_id: 14
    }
  )
 {
  cart {
    items {
      id
      product {
        name
      }
      quantity
    }
    prices {
      grand_total{
        value
        currency
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
    "removeItemFromCart": {
      "cart": {
        "items": [
          {
            "id": "13",
            "product": {
              "name": "Strive Shoulder Pack"
            },
            "quantity": 3
          }
        ],
        "prices": {
          "grand_total": {
            "value": 96,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Input attributes

### RemoveItemFromCartInput object {#RemoveItemFromCartInput}

The `RemoveItemFromCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_item_id` | Int! | The unique ID assigned when a customer places an item in the cart

## Output attributes

The `RemoveItemFromCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

## Errors

Error | Description
--- | ---
`Cart doesn't contain the ZZZ item.` | The item ID specified in the `cart_item_id` argument does not exist in the requested shopping cart.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Required parameter "cart_id" is missing.` | The value specified in the `cart_id` argument is empty.
`Required parameter "cart_item_id" is missing.` | The value specified in the `cart_item_id` argument is equal to zero.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to remove a product from the shopping cart of authorized user (customer), or a customer tried to remove a product from the shopping cart of another customer.

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
