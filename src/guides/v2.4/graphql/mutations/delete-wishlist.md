---
group: graphql
title: deleteWishlist mutation
ee_only: true
---

The `deleteWishlist` mutation deletes the specified wish list. In {{site.data.var.ee}}, you cannot delete the customer's default (first) wish list. This mutation is not available in {{site.data.var.ce}}.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  deleteWishlist(wishlistId: ID!)
}
```

## Example usage

The following example deletes a wish list.

**Request:**

``` graphql
mutation {
  deleteWishlist(wishlistId: 3)
}
```

**Response:**

```json
{
  "data": {
    "deleteWishlist": true
  }
}
```

## Input attributes

The `deleteWishlist` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistId` | ID! | The ID of the wish list to update

## Output attributes

The `deleteWishlist` object returns a Boolean value, indicating whether the request was successful.
