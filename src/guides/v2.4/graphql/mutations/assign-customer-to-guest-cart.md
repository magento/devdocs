---
group: graphql
title: assignCustomerToGuestCart mutation
---

The `assignCustomerToGuestCart` mutation assigns a logged in customer and merge customer's shopping cart items to the specified guest shopping cart.

## Syntax

```graphql
mutation {
    assignCustomerToGuestCart(
        cart_id: String!
    ) {
        Cart!
    }
}
```

## Example usage

Assuming that there is a logged in customer who has an item in the cart, this call will merge customer's cart item to the specified guest shopping cart (which also contains an item).

**Request:**

```graphql
mutation {
  assignCustomerToGuestCart(
    cart_id: "MDYKgqIdWMKr7VD1zlYwxrB7kuX8lR5s"
  ) {
    items {
      quantity
      product {
        sku
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "assignCustomerToGuestCart": {
      "items": [
        {
          "quantity": 1,
          "product": {
            "sku": "customer_item"
          }
        },
        {
          "quantity": 1,
          "product": {
            "sku": "guest_item"
          }
        }
      ]
    }
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart

## Output attributes

The `assignCustomerToGuestCart` mutation returns a `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`The current customer isn't authorized.` | The current customer is not currently logged in.
`Unable to assign the customer to the guest cart` | The current customer can't be assigned to the provided guset cart.
`The cart isn't active` | The cart with the specified cart ID is unavailable, because the items have been purchased and the cart ID becomes inactive.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`The current user cannot perform operations on cart "XXX"` | Tried to assign the customer to the customer's cart.
