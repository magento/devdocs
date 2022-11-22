---
group: graphql
title: addWishlistItemsToCart mutation
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/wishlist/mutations/add-items-to-cart/
layout: migrated
---
The `addWishlistItemsToCart` mutation moves items from the specified wish list to the customer's cart.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  addWishlistItemsToCart (
    wishlistId: ID!
    wishlistItemIds: [ID!]
  ) {
    AddWishlistItemsToCartOutput
  }
}
```

## Example usage

The following example moves two items from a wishlist to the cart.

**Request:**

```graphql
mutation {
  addWishlistItemsToCart(
    wishlistId: 1
    wishlistItemIds: [2, 3])
  {
    status
    add_wishlist_items_to_cart_user_errors {
      code
      message
    }
    wishlist {
      id
      items_v2 {
        items {
          id
          product {
            uid
            sku
            name
          }
        }
      }
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addWishlistItemsToCart": {
      "status": true,
      "add_wishlist_items_to_cart_user_errors": [],
      "wishlist": {
        "id": "1",
        "items_v2": {
          "items": [
            {
              "id": "1",
              "product": {
                "uid": "MTM=",
                "sku": "24-WB07",
                "name": "Overnight Duffle"
              }
            },
            {
              "id": "4",
              "product": {
                "uid": "MTEwMA==",
                "sku": "WH04",
                "name": "Miko Pullover Hoodie"
              }
            },
            {
              "id": "5",
              "product": {
                "uid": "MTIyOA==",
                "sku": "WJ01",
                "name": "Stellar Solar Jacket"
              }
            },
            {
              "id": "6",
              "product": {
                "uid": "MTcyNA==",
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "7",
              "product": {
                "uid": "MTY5Mg==",
                "sku": "WT01",
                "name": "Bella Tank"
              }
            }
          ]
        }
      }
    }
  }
}
```

## Input attributes

The `addWishlistItemsToCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistItemIds`| [ID!] | An array of IDs presenting products to be added to the cart. If no IDs are specified, all items in the wish list will be added to the cart
`wishlistId`| ID! | The unique ID of the wish list

## Output attributes

The `addWishlistItemsToCart` mutation returns the status of the operation as well an array of any errors that occurred.

Attribute |  Data Type | Description
--- | --- | ---
`add_wishlist_items_to_cart_user_errors` | [[WishlistCartUserInputError!](#WishlistCartUserInputError)] | Indicates why the attempt to add items to the wish list was not successful
`status` | Boolean! | Indicates whether the attempt to add items to the cart was successful
`wishlist` | [Wishlist!](#Wishlist) | The wish list after moving items to the cart

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishlistCartUserInputError attributes {#WishlistCartUserInputError}

The `WishlistCartUserInputError` type contains a list of errors that indicate why the attempt to add items to the cart was not successful.

Attribute |  Data Type | Description
--- | --- | ---
`code` | [WishlistCartUserInputErrorType!](#WishlistCartUserInputErrorType) | An error code that describes the error encountered.
`message` | String! | A localized error message

### WishlistCartUserInputErrorType! {#WishlistCartUserInputErrorType}

Type | Description
--- | ---
`INSUFFICIENT_STOCK` | The requested quantity of a product is greater than the quantity available
`NOT_SALABLE` | A requested product is not available
`PRODUCT_NOT_FOUND` | A product with the specified ID does not exist.
`UNDEFINED` | The error message does not match any error code
