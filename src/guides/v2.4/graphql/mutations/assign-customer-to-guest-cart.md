---
group: graphql
title: assignCustomerToGuestCart mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `assignCustomerToGuestCart` mutation assigns a logged in customer and merge customer's shopping cart items to the specified guest shopping cart.

The customer must be logged in (You must specify the customer’s authorization token in the headers).

If this mutation is successful, the customer's shopping cart becomes inactive and all the products it contains are added to the contents of the guest cart (the active one).
Customer now is assigned to that active cart.

*Note:*
Customer cart becomes inactive and the guest cart remains active; but for guest cart new `masked_id` is being generated.
`quote_id` remains same.

The other similar mutation, [mergeCarts]({{page.baseurl}}/graphql/mutations/merge-carts.html), just merges cart items.
Unlike `assignCustomerToGuestCart`, it transfers the contents of a guest cart into the customer's cart. The mutation deletes the original guest cart.

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
`cart_id` | String! | The unique ID that identifies the guest's cart

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
