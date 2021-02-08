---
group: graphql
title: addWishlistItemsToCart mutation
---
The `addWishlistItemsToCart` mutation moves items from the specified wish list to the customer's cart.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  addWishlistItemsToCart (
    wishlistId: ID!
    wishlistItemIds: [ID!]
  ) {
    AddWishlistItemsToCartOutput
  }
}
```

## Example usage

The following example adds items to the cart.

**Request:**

```graphql
mutation {
  addWishlistItemsToCart(
    wishlistId: 2 
    wishlistItemIds: [9, 11])
  {
    status
    add_wishlist_items_to_cart_user_errors {
      code
      message
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addWishlistItemsToCart": {
      "status": true,
      "add_wishlist_items_to_cart_user_errors": []
    }
  }
}
```

## Input attributes

The `addWishlistItemsToCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`wishlistItemIds`| [ID!] | An array of IDs presenting products to be added to the cart. If no IDs are specified, all items in the wish list will be added to the cart
`wishlistId`| ID! | The unique ID of the wish list

## Output attributes

The `addWishlistItemsToCart` mutation returns the status of the operation as well an array of any errors that occurred.

Attribute |  Data Type | Description
--- | --- | ---
`add_wishlist_items_to_cart_user_errors` | [[WishlistCartUserInputError!](#WishlistCartUserInputError)] | Indicates why the attempt to add items to the wish list was not successful
`status` | Boolean! | Indicates whether the attempt to add items to the cart was successful
`wishlist` | [Wishlist!](#Wishlist) | Contains the wish list with all items that were successfully added
### WishlistCartUserInputError attributes {#WishlistCartUserInputError}

The `WishlistCartUserInputError` type contains a list of errors that indicate why the attempt to add items to the cart was not successful.

Attribute |  Data Type | Description
--- | --- | ---
`code` | [WishlistCartUserInputErrorType!](#WishlistCartUserInputErrorType) | An error code that describes the error encountered.
`message` | String! | A localized error message

### WishlistCartUserInputErrorType! {#WishlistCartUserInputErrorType!}

Type | Description
--- | ---
`INSUFFICIENT_STOCK` | The requested product is out of stock
`NOT_SALABLE` | A requested product is not available
`PRODUCT_NOT_FOUND` | A product with the specified ID does not exist.
`UNDEFINED` | The error message does not match any error code

### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}
