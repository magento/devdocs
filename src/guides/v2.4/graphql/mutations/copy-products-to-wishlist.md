---
group: graphql
title: copyProductsToWishlist mutation
ee_only: true
---

The `copyProductsToWishlist` mutation copies the specified quantities of one or more products to a different wish list. The original wish list is unchanged.

Use the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to return a list of wish list IDs and item IDs.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
    copyProductsToWishlist(
        wishlistId: ID!
        wishlistItems: [WishlistItemMoveInput!]!
    ) {
        UpdateProductsInWishlistOutput
    }
}
```

## Example usage

The following example copies two items to another wish list.

**Request:**

``` graphql
mutation {
  copyProductsToWishlist(
    wishlistId: 4
    wishlistItems: [{
      wishlist_item_id: 28
      quantity: 1
    }
    {
      wishlist_item_id:29
      quantity: 1
    }]
  ) {
    wishlist {
      id
      name
      items_v2 {
        id
        quantity
        product {
          sku
          name
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
    "copyProductsToWishlist": {
      "wishlist": {
        "id": "4",
        "name": "My favorite things",
        "items_v2": [
          {
            "id": "26",
            "quantity": 1,
            "product": {
              "sku": "24-WG080",
              "name": "Sprite Yoga Companion Kit"
            }
          },
          {
            "id": "27",
            "quantity": 1,
            "product": {
              "sku": "WSH12",
              "name": "Erika Running Short"
            }
          },
          {
            "id": "30",
            "quantity": 1,
            "product": {
              "sku": "24-WB02",
              "name": "Compete Track Tote"
            }
          },
          {
            "id": "31",
            "quantity": 1,
            "product": {
              "sku": "24-UG07",
              "name": "Dual Handle Cardio Ball"
            }
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `copyProductsToWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the target wish list
`wishlistItems` | [WishlistItemCopyInput!]! | An array containing a set of wish list IDs that are to be copied

### WishlistItemCopyInput attributes {#WishlistItemCopyInput}

The WishlistItemCopyInput object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`quantity` | Float | The quantity of this item to move to the destination wish list. This value cannot be greater than the quantity in the source wish list
`wishlist_item_id` | ID! | The ID of the item to be moved

## Output attributes

The `UpdateProductsInWishlistOutput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`user_errors` | [[WishListUserInputError!](#WishListUserInputError)] | An array of errors encountered while adding products to a wish list
`wishlist` | [Wishlist!](#Wishlist) | Contains the wish list with all items that were successfully added

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
