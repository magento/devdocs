---
group: graphql
title: moveProductsToWishlist mutation
ee_only: true
---

The `moveProductsToWishlist` mutation moves the specified quantities of one or more products to a different wish list. Because the `wishlist_item_id` for each item placed in a wish list is unique, there is no need to specify the original wish list.

If you do not specify a quantity for a product, the mutation moves the entire quantity of that product to the target wish list.

Use the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to return a list of wish list IDs and item IDs.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
    moveProductsToWishlist(
        wishlistId: ID!
        wishlistItems: [WishlistItemMoveInput!]!
    ) {
        UpdateProductsInWishlistOutput
    }
}
```

## Example usage

The following example moves an item to another wish list. The ID of the moved product changes.

**Request:**

``` graphql
mutation {
  moveProductsToWishlist(
    wishlistId: 4
    wishlistItems: {
      wishlist_item_id: 20
      quantity: 1
    }
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
    "moveProductsToWishlist": {
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
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `moveProductsToWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the wish list to update
`wishlistItems` | [WishlistItemMoveInput!]! | An array containing a set of wish list IDs that are to be moved

### WishlistItemMoveInput attributes {#WishlistItemMoveInput}

The WishlistItemMoveInput object contains the following attributes.

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
