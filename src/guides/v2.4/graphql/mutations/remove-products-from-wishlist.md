---
group: graphql
title: removeProductsFromWishlist mutation
---

The `removeProductsFromWishlist` mutation completely removes the specified items from the customer's wish list. Use the [`updateProductsInWishlist` mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-wishlist.html) to change the quantity of specific items in the wish list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

`mutation: removeProductsFromWishlist(wishlistId: ID! wishlistItemsIds: [ID!]!): RemoveProductsFromWishlistOutput`

## Example usage

The following example removes an item that was added in the [`addProductsToWishlist` mutation]({{page.baseurl}}/graphql/mutations/add-products-to-wishlist.html) example.

**Request:**

``` graphql
mutation {
  removeProductsFromWishlist(
  wishlistId: 1
  wishlistItemsIds: [
    12
  ]){
    wishlist {
      id
      items_count
      items {
        id
        qty
        product {
          name
          sku
          id
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
            }
            maximum_price {
              regular_price {
                currency
                value
              }
            }
          }
        }
      }
    }
    user_errors {
      code
      message
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "removeProductsFromWishlist": {
      "wishlist": {
        "id": "1",
        "items_count": 2,
        "items": [
          {
            "id": 11,
            "qty": 1,
            "product": {
              "name": "Sprite Yoga Companion Kit",
              "sku": "24-WG080",
              "id": 46,
              "price_range": {
                "minimum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 61
                  }
                },
                "maximum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 77
                  }
                }
              }
            }
          },
          {
            "id": 13,
            "qty": 1,
            "product": {
              "name": "Stellar Solar Jacket",
              "sku": "WJ01",
              "id": 1226,
              "price_range": {
                "minimum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 75
                  }
                },
                "maximum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 75
                  }
                }
              }
            }
          }
        ]
      },
      "user_errors": []
    }
  }
}
```

## Input attributes

The `removeProductsFromWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the customer's wish list
`wishlistItemsIds`| [ID!]! | An array of wish list item IDs to be removed

## Output attributes

The `RemoveProductsFromWishlistOutput` object contains the customer's wish list and error message information.

Attribute |  Data Type | Description
--- | --- | ---
`user_errors` | [WishListUserInputError!]! | An array of errors encountered while adding products to a wish list
`wishlist` | Wishlist! | Contains the wish list with all items that were successfully added

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
