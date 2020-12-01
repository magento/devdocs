---
group: graphql
title: copyProductsBetweenWishlists mutation
ee_only: true
---

The `copyProductsBetweenWishlists` mutation copies the specified quantities of one or more products to a different wish list. The original wish list is unchanged.

Use the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to return a list of wish list IDs and item IDs.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  copyProductsBetweenWishlists(
    sourceWishlistUid: ID!,
    destinationWishlistUid: ID!,
    wishlistItems: [WishlistItemCopyInput!]!
  ){
    CopyProductsBetweenWishlistsOutput
  }
}
```

## Example usage

The following example copies two items to another wish list.

**Request:**

``` graphql
mutation{
  copyProductsBetweenWishlists(sourceWishlistUid: 1, destinationWishlistUid: 2, wishlistItems: [
    {
      wishlist_item_id: 6
      quantity: 1
    }
    {
      wishlist_item_id: 7
      quantity: 1
    }
  ]){
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
    "copyProductsBetweenWishlists": {
      "destination_wishlist": {
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
              "id": "9",
              "product": {
                "id": 18,
                "sku": "24-UG02",
                "name": "Pursuit Lumaflex&trade; Tone Band"
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
      "user_errors": []
    }
  }
}
```

## Input attributes

The `copyProductsToWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`destinationWishlistUid` | ID! | The ID of the wishlist to copy products to
`sourceWishlistUid` | ID! | The ID of the origin wishlist
`wishlistItems` | [WishlistItemCopyInput!]! | A list of items to be copied

### WishlistItemCopyInput attributes {#WishlistItemCopyInput}

The WishlistItemCopyInput object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`quantity` | Float | The quantity of this item to move to the destination wish list. This value cannot be greater than the quantity in the source wish list
`wishlist_item_id` | ID! | The ID of the item to be copied

## Output attributes

The `CopyProductsBetweenWishlistsOutput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`destination_wishlist` | [Wishlist!](#Wishlist) | The destination wish list containing the copied products
`source_wishlist` | [Wishlist!](#Wishlist) | The wish list that the products were copied from
`user_errors` | [[WishListUserInputError!](#WishListUserInputError)] | An array of errors encountered while copying products in a wish list

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
