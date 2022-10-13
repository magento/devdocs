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
            uid
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
            uid
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
                "uid": "NDk=",
                "sku": "240-LV08",
                "name": "Advanced Pilates & Yoga (Strength)"
              }
            },
            {
              "id": "10",
              "product": {
                "uid": "MTQ1MA==",
                "sku": "WS04",
                "name": "Layla Tee"
              }
            },
            {
              "id": "11",
              "product": {
                "uid": "MTU2Mg==",
                "sku": "WS12",
                "name": "Radiant Tee"
              }
            },
            {
              "id": "12",
              "product": {
                "uid": "MTYxMA==",
                "sku": "WB01",
                "name": "Electra Bra Top"
              }
            },
            {
              "id": "13",
              "product": {
                "uid": "MTY0Mg==",
                "sku": "WB03",
                "name": "Celeste Sports Bra"
              }
            },
            {
              "id": "15",
              "product": {
                "uid": "MTcyMg==",
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "16",
              "product": {
                "uid": "MTY5MA==",
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
                "uid": "MTM=",
                "sku": "24-WB07",
                "name": "Overnight Duffle"
              }
            },
            {
              "id": "2",
              "product": {
                "uid": "MTA=",
                "sku": "24-WB05",
                "name": "Savvy Shoulder Tote"
              }
            },
            {
              "id": "3",
              "product": {
                "uid": "MTE=",
                "sku": "24-WB06",
                "name": "Endeavor Daytrip Backpack"
              }
            },
            {
              "id": "4",
              "product": {
                "uid": "MTA5OA==",
                "sku": "WH04",
                "name": "Miko Pullover Hoodie"
              }
            },
            {
              "id": "5",
              "product": {
                "uid": "MTIyNg==",
                "sku": "WJ01",
                "name": "Stellar Solar Jacket"
              }
            },
            {
              "id": "6",
              "product": {
                "uid": "MTcyMg==",
                "sku": "WT03",
                "name": "Nora Practice Tank"
              }
            },
            {
              "id": "7",
              "product": {
                "uid": "MTY5MA==",
                "sku": "WT01",
                "name": "Bella Tank"
              }
            },
            {
              "id": "17",
              "product": {
                "uid": "MTg=",
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
`wishlist_item_id` | ID! | The unique ID of the `WishlistItemInterface` item to be moved

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
