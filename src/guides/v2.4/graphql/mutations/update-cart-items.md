---
group: graphql
title: updateCartItems mutation
---

The `updateCartItems` mutation allows you to modify items in the specified cart. You can also replace the current quantity of one or more cart items with the specified quantities. The mutation does not perform calculations to determine the quantity of cart items.

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

### UpdateCartItemsInput attributes {#UpdateCartItemsInput}

The `UpdateCartItemsInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`cart_items` | [CartItemUpdateInput!](#CartItemUpdateInput) | Contains the cart item IDs and quantity of each item

### CartItemUpdateInput attributes {#CartItemUpdateInput}

The `CartItemUpdateInput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_item_id` | Int! | The unique ID assigned when a customer places an item in the cart
`customizable_options` | [CustomizableOptionInput!] | An array that defines customizable options for the product
`gift_message` | [GiftMessageInput](#GiftMessageInput) | Gift message details for the cart item
`gift_wrapping_id` | ID | The unique identifier of the gift wrapping to be used for the cart item
`quantity` | Float | The new quantity of the item. A value of `0` removes the item from the cart

### CustomizableOptionInput attributes {#CustomizableOptionInputSimple}

The `CustomizableOptionInput` object must contain the following attributes.

{% include graphql/customizable-option-input.md %}

### GiftMessageInput attributes {#GiftMessageInput}

The `GiftMessageInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`from` | String! | The name of the gift sender
`message` | String! | The text of the gift message
`to` | String! | The name of the gift recipient

## Output attributes

The `UpdateCartItemsOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find cart item with id: XXX` | The specified `input`.`cart_items`.`cart_item_id` value does not exist in the `quote_item` database table.
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` database table.
`Required parameter "cart_id" is missing.` | The value specified in the `cart_id` argument is empty.
`Required parameter "cart_items" is missing.` | The `cart_items` argument is empty, or its value is specified as a non-array value.
`Required parameter "quantity" for "cart_items" is missing.` | The required `input`.`cart_items`.`quantity` argument must be specified.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to update a customer's cart, or an authorized user (customer) tried to update the cart of another customer.
