---
group: graphql
title: reorderItems mutation
---

The `reorderItems` mutation allows a logged-in user to add all the products from a previous order into their cart. The **Stores** > Settings > **Sales** > **Sales** > **Reorder** > **Allow Reorder** field must be set to **Yes** to enable reorders. You must provide a customer authorization token with the call.

The mutation returns an error if it cannot add a product to the customer's cart:

Error code | Description
--- | ---
INSUFFICIENT_STOCK | The requested quantity is greater than the available stock.
NOT_SALABLE | The product is out of stock, disabled, or otherwise prevented from being sold.
REORDER_NOT_AVAILABLE | Reorders have been disabled.
PRODUCT_NOT_FOUND | The product has been deleted.
UNDEFINED | An unknown error occurred.

The `reorderItems` mutation will not add any products to the cart if it encounters the REORDER_NOT_AVAILABLE error. For any other error code, the mutation will add the product to the cart, if possible, and it will continue adding other products, if applicable.

## Syntax

`mutation: {reorderItems(orderNumber: String!) {ReorderItemsOutput}}`

## Example usage

In the following example, the customer previously created an order containing the following items:

Item Name | SKU | Quantity Ordered
--- | --- | ---
Aeon Capri | WP07-29-Black | 3
Dual Handle Cardio Ball | 24-UG07 | 1
Elisa EverCool Tee | WS06-S-Gray | 1
Sprite Foam Yoga Brick | 24-WG084 | 1

The customer wants to reorder these items, but the status of some of these items has changed:

-  Aeon Capri (WP07-29-Black) is in stock, but fewer than three items are available for sale.
-  The Sprite Foam Yoga Brick (24-WG084) is out of stock.

These items will not be added to the cart.

**Request:**

```graphql
mutation{
  reorderItems(orderNumber: "000000003"){
    cart {
      id
      items {
        id
        product {
          sku
        }
        quantity
        prices {
          price {
            value
          }
        }
      }
    }
    userInputErrors{
      code
      message
      path
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "reorderItems": {
      "cart": {
        "id": "LrMHhWHUaOqiBGC6S0KOcnYKsINUHTWz",
        "items": [
          {
            "id": "44",
            "product": {
              "sku": "24-UG07"
            },
            "quantity": 1,
            "prices": {
              "price": {
                "value": 12
              }
            }
          },
          {
            "id": "45",
            "product": {
              "sku": "WS06"
            },
            "quantity": 1,
            "prices": {
              "price": {
                "value": 29
              }
            }
          }
        ]
      },
      "userInputErrors": [
        {
          "code": "NOT_SALABLE",
          "message": "Could not add the product with SKU \"24-WG084\" to the shopping cart: Product that you are trying to add is not available.",
          "path": [
            "orderNumber"
          ]
        },
        {
          "code": "INSUFFICIENT_STOCK",
          "message": "Could not add the product with SKU \"WP07-29-Black\" to the shopping cart: The requested qty is not available",
          "path": [
            "orderNumber"
          ]
        }
      ]
    }
  }
}
```

## Input attributes

The `reorderItems` mutation requires a valid order number. The customer associated with the authorization token must match the customer who placed the specified order.

Attribute | Type | Description
--- | --- | ---
`orderNumber` | String! | The ID of the order to be used as the source for reordering products

## Output attributes

The `ReorderItemsOutput` object contains the following objects:

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart
`userInputErrors` | [CheckoutUserInputError]! | An array of reordering errors

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

### userInputErrors object

The `userInputErrors` object contains an array of errors encountered while attempting to reorder products.

Attribute |  Data Type | Description
--- | --- | ---
`userInputErrors` |[CheckoutUserInputError]!| An array of reordering errors

### CheckoutUserInputError object

Attribute |  Data Type | Description
--- | --- | ---
`message` | String! | A localized error message
`path` | [String]! | The value for this mutation is `orderNumber`

## Related topics

-  [customer]({{page.baseurl}}/graphql/queries/customer.html) query
