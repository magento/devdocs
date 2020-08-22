---
group: graphql
title: updateProductsInWishlist mutation

---

The `updateProductsInWishlist` mutation changes the quantity, description and option information for the specified items in the customer's wish list.

{:.bs-callout-info}
Use the `removeProductsFromWishlist` mutation to remove an item from the wish list. Do not set the quantity of an item to 0.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

`mutation: updateProductsInWishlist(wishlistId: ID! wishlistItems: [WishlistItemUpdateInput!]!): UpdateProductsInWishlistOutput`

## Example usage

The following example changes the quantity of the product represented by wish list item `16` to `2` and adds a description for item `17`.

**Request:**

``` graphql
mutation {
  updateProductsInWishlist(
  wishlistId: 1
  wishlistItems: [
    {
      wishlist_item_id: 16
      quantity: 2
    }
    {
      wishlist_item_id: 17
      description: "I love this!"
    }
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
          ... on BundleProduct {
            items {
              sku
              options {
                id
                uid
              }
            }
          }
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
    "updateProductsInWishlist": {
      "wishlist": {
        "id": "1",
        "items_count": 3,
        "items": [
          {
            "id": 16,
            "qty": 2,
            "product": {
              "name": "Joust Duffle Bag",
              "sku": "24-MB01",
              "id": 1,
              "price_range": {
                "minimum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 34
                  }
                },
                "maximum_price": {
                  "regular_price": {
                    "currency": "USD",
                    "value": 34
                  }
                }
              }
            }
          },
          {
            "id": 17,
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
          },
          {
            "id": 18,
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
          }
        ]
      },
      "user_errors": []
    }
  }
}
```

## Input attributes

The `updateProductsInWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the customer's wish list
`wishlistItems`| [[WishlistItemUpdateInput!](#WishlistItemUpdateInput)]! | An array containing products to be updated

### WishlistItemUpdateInput attributes {#WishlistItemUpdateInput}

The `WishlistItemUpdateInput` object defines each item to add to the wish list.

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | Customer-entered comments about the item
`entered_options`| [EnteredOptionInput] | An array of options that the customer entered
`quantity` | Float | The amount or number of items to add
`selected_options` | [ID!] | An array of strings corresponding to options the customer selected
`wishlist_item_id` | ID! | The ID of the wishlist item to update

### EnteredOptionInput attributes {#EnteredOptionInput}

{% include graphql/entered-option-input.md %}

## Output attributes

The `UpdateProductsInWishlistOutput` object contains the customer's wish list and error message information.

Attribute |  Data Type | Description
--- | --- | ---
`user_errors` | [WishListUserInputError!]! | An array of errors encountered while adding products to a wish list
`wishlist` | Wishlist! | Contains the wish list with all items that were successfully added

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
