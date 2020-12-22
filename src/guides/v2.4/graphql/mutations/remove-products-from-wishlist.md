---
group: graphql
title: removeProductsFromWishlist mutation
---

The `removeProductsFromWishlist` mutation completely removes the specified items from the customer's wish list. Use the [`updateProductsInWishlist` mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-wishlist.html) to change the quantity of specific items in the wish list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  removeProductsFromWishlist(
    wishlistId: ID!
    wishlistItemsIds: [ID!]!
  ) {
    RemoveProductsFromWishlistOutput
  }
}
  ```

## Example usage

The following example removes an item that was added in the [`addProductsToWishlist` mutation]({{page.baseurl}}/graphql/mutations/add-products-to-wishlist.html) example.

**Request:**

``` graphql
mutation {
  removeProductsFromWishlist(
  wishlistId: 4
  wishlistItemsIds: [
    26
  ]){
    wishlist {
      id
      items_count
      items_v2 {
        items {
          id
          quantity
          product {
            uid
            name
            sku
            price_range {
              minimum_price {
                regular_price  {
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
        "id": "4",
        "items_count": 2,
        "items_v2": {
          "items": [
            {
              "id": "27",
              "quantity": 1,
              "product": {
                "uid": "MTIyNg==",
                "name": "Stellar Solar Jacket",
                "sku": "WJ01",
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
            },
            {
              "id": "28",
              "quantity": 1,
              "product": {
                "uid": "NTI=",
                "name": "Sprite Yoga Companion Kit",
                "sku": "24-WG080",
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
            }
          ]
        }
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

## Errors

Error | Description
--- | ---
`The current user cannot perform operations on wishlist` | An unauthorized user (guest) tried to add an item to a wishlist, or an authorized user (customer) tried to add an item to a wishlist of another customer.
`The wishlist was not found.` | The value provided in the `wishlistId` field is invalid or does not exist for the customer.
