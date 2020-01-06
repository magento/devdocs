---
group: graphql
title: updateCartItems mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-update-cart-items.html
---

The `updateCartItems` mutation allows you to replace the current quantity of one or more cart items with the specified quantities. It does not perform calculations to determine the quantity of cart items.

{:.bs-callout-info}
Setting the quantity to `0` removes an item from the cart.

## Syntax

`mutation: {updateCartItems(input: UpdateCartItemsInput): {UpdateCartItemsOutput}}`

## Example usage

The following example changes the quantity of cart item `13`. The new quantity is `3`.

**Request:**

```graphql
mutation {
  updateCartItems(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG",
      cart_items: [
        {
          cart_item_id: 13
          quantity: 3
        }
      ]
    }
  ){
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
```

**Response:**

```json
{
  "data": {
    "updateCartItems": {
      "cart": {
        "items": [
          {
            "id": "13",
            "product": {
              "name": "Strive Shoulder Pack"
            },
            "quantity": 3
          },
          {
            "id": "14",
            "product": {
              "name": "Affirm Water Bottle "
            },
            "quantity": 1
          }
        ],
        "prices": {
          "grand_total": {
            "value": 103,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Input attributes

The `UpdateCartItemsInput` object is listed first. All child objects are listed in alphabetical order.

### UpdateCartItemsInput object {#UpdateCartItemsInput}

The `UpdateCartItemsInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [CartItemUpdateInput!](#CartItemUpdateInput) | Contains the cart item IDs and quantity of each item

### CartItemUpdateInput object {#CartItemUpdateInput}

The `CartItemUpdateInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_item_id` | Int! | The unique ID assigned when a customer places an item in the cart
`quantity` | Float! | The new quantity of the item. A value of `0` removes the item from the cart

## Output attributes

The `UpdateCartItemsOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
