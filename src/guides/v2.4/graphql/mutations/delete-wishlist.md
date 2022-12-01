---
group: graphql
title: deleteWishlist mutation
ee_only: true
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/wishlist/mutations/delete/
layout: migrated
---

The `deleteWishlist` mutation deletes the specified wish list. In {{site.data.var.ee}}, you cannot delete the customer's default (first) wish list. This mutation is not available in {{site.data.var.ce}}.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  deleteWishlist(wishlistId: ID!): DeleteWishlistOutput
}
```

## Example usage

The following example deletes a wish list.

**Request:**

``` graphql
mutation{
  deleteWishlist(wishlistId: 3){
    status
    wishlists {
      id
      name
      items_count
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteWishlist": {
      "status": true,
      "wishlists": [
        {
          "id": "1",
          "name": "Vacation Wants",
          "items_count": 7
        },
        {
          "id": "2",
          "name": "Lose the Muffintop",
          "items_count": 6
        }
      ]
    }
  }
}
```

## Input attributes

The `deleteWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the wish list to delete

## Output attributes

The DeleteWishlistOutput object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`status` | Boolean! | Indicates whether the wish list was deleted
`wishlists` | [Wishlist]! | An array of wish lists that have not been deleted

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}
