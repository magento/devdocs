---
group: graphql
title: moveProductsBetweenWishlists mutation
ee_only: true
---

The `moveProductsBetweenWishlists` mutation moves the specified quantities of one or more products to a different wish list.

If you do not specify a quantity for a product, the mutation moves the entire quantity of that product to the target wish list.

Use the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to return a list of wish list IDs and item IDs.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
    moveProductsBetweenWishlists(
        sourceWishlistUid: ID!,
        destinationWishlistUid: ID!,
        wishlistItems: [WishlistItemMoveInput!]!
    ) {
        MoveProductsBetweenWishlistsOutput
    }
}
```

## Example usage

The following example moves an item to another wish list. The ID of the moved product changes.

**Request:**

``` graphql
mutation{
  moveProductsBetweenWishlists(sourceWishlistUid: 2, destinationWishlistUid: 1, wishlistItems: [
    {
      wishlist_item_id: 9
      quantity: 1
    }
  ]){
    source_wishlist {
      id
      items_v2 {
        items {
          id
          product {
            id
            sku
            name
          }
        }
      }
    }
    destination_wishlist {
      id
      items_v2 {
        items {
          id
          product {
            id
            sku
            name
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
    "moveProductsBetweenWishlists": {
      "source_wishlist": {
        "id": "2",
        "items_v2": {
          "items": [
            {
              "id": "8",
              "product": {
                "id": 51,
                "sku": "240-LV08",
                "name": "Advanced Pilates & Yoga (Strength)"
              }
            },
            {
              "id": "10",
              "product": {
                "id": 1452,
                "sku": "WS04",
                "name": "Layla Tee"
              }
            },
            {
              "id": "11",
              "product": {
                "id": 1564,
                "sku": "WS12",
                "name": "Radiant Tee"
              }
            },
            {
              "id": "12",
              "product": {
                "id": 1612,
                "sku": "WB01",
                "name": "Electra Bra Top"
              }
            },
            {
              "id": "13",
              "product": {
                "id": 1644,
                "sku": "WB03",
                "name": "Celeste Sports Bra"
              }
            },
            {
              "id": "14",
              "product": {
                "id": 1724,
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "15",
              "product": {
                "id": 1692,
                "sku": "WT01",
                "name": "Bella Tank"
              }
            }
          ]
        }
      },
      "destination_wishlist": {
        "id": "1",
        "items_v2": {
          "items": [
            {
              "id": "1",
              "product": {
                "id": 13,
                "sku": "24-WB07",
                "name": "Overnight Duffle"
              }
            },
            {
              "id": "2",
              "product": {
                "id": 10,
                "sku": "24-WB05",
                "name": "Savvy Shoulder Tote"
              }
            },
            {
              "id": "3",
              "product": {
                "id": 11,
                "sku": "24-WB06",
                "name": "Endeavor Daytrip Backpack"
              }
            },
            {
              "id": "4",
              "product": {
                "id": 1100,
                "sku": "WH04",
                "name": "Miko Pullover Hoodie"
              }
            },
            {
              "id": "5",
              "product": {
                "id": 1228,
                "sku": "WJ01",
                "name": "Stellar Solar Jacket"
              }
            },
            {
              "id": "6",
              "product": {
                "id": 1724,
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "7",
              "product": {
                "id": 1692,
                "sku": "WT01",
                "name": "Bella Tank"
              }
            },
            {
              "id": "16",
              "product": {
                "id": 18,
                "sku": "24-UG02",
                "name": "Pursuit Lumaflex&trade; Tone Band"
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

The `moveProductsBetweenWishlists` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`destinationWishlistUid` | ID! | The ID of the wishlist to move products to
`sourceWishlistUid` | ID! | The ID of the origin wishlist
`wishlistItems` | [WishlistItemMoveInput!]! | A list of items to be moved

### WishlistItemMoveInput attributes {#WishlistItemMoveInput}

The WishlistItemMoveInput object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`quantity` | Float | The quantity of this item to move to the destination wish list. This value cannot be greater than the quantity in the source wish list
`wishlist_item_id` | ID! | The ID of the item to be moved

## Output attributes

The `MoveProductsBetweenWishlistsOutput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`destination_wishlist` | [Wishlist!](#Wishlist) | The destination wish list containing the moved products
`source_wishlist` | [Wishlist!](#Wishlist) | The wish list that the products were moved from
`user_errors` | [[WishListUserInputError!](#WishListUserInputError)] | An array of errors encountered while copying products in a wish list

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
