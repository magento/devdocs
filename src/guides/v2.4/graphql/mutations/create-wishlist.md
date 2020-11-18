---
group: graphql
title: createWishlist mutation
ee_only: true
---

The `createWishlist` mutation creates a wish list for the logged in customer. {{site.data.var.ee}} allows customers to have multiple wish lists.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the following attributes to determine whether multiple wish lists are supported:

*  `enable_multiple_wishlists`
*  `magento_wishlist_general_is_enabled`
*  `maximum_number_of_wishlists`

## Syntax

```graphql
mutation {
  createWishlist(input: CreateWishlistInput!) {
    CreateWishlistOutput
  }
}
```

## Example usage

The following example creates the `My favorites` public wish list.

**Request:**

``` graphql
mutation {
  createWishlist(
    name: "My favorites"
    visibility: PUBLIC
  ) {
    uid
    visibility
  }
}
```

**Response:**

```json
{
  "data": {
    "createWishlist": {
      "uid": "4",
      "visibility": "PUBLIC"
    }
  }
}
```

## Input attributes

The `CreateWishlistInput` object requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The ID of the customer's wish list
`visibility`| WishlistVisibilityEnum! | Describes the visibility of the wish list. Possible values are `PRIVATE` and `PUBLIC`

## Output attributes

The `CreateWishlistOutput` object returns the `uid` of the new wish list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The wish list name
`uid` | ID! | The ID of the new wish list
`visibility` | WishlistVisibilityEnum! | The wish list visibility. Possible values are `PRIVATE` and `PUBLIC`
