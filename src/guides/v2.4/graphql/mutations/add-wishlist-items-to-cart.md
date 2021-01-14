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
    wishlistUid: ID
    wishlistItemUids: [ID!]
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
    wishlistUid: "Mg==" 
    wishlistItemUids: ["OA==" "OQ=="])
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
`wishlistItemUids`| [ID!] | An array of UIDs presenting products to be added to the cart. If no UIDs are specified, all items in the wish list will be added to the cart
`wishlistUid`| ID! | The unique ID of the wish list

## Output attributes

The `addWishlistItemsToCart` mutation returns the status of the operation as well an array of any errors that occurred.

Attribute |  Data Type | Description
--- | --- | ---
`add_wishlist_items_to_cart_user_errors` | [[CartUserInputError!](#CartUserInputError)] | Indicates why the attempt to add items to the wish list was not successful
`status` | Boolean! | Indicates whether the attempt to add items to the cart was successful

### CartUserInputError attributes {#CartUserInputError}

The `CartUserInputError` type contains a list of errors that indicate why the attempt to add items to the cart was not successful.

Attribute |  Data Type | Description
--- | --- | ---
`code` | [CartUserInputErrorType!!](#CartUserInputErrorType) | The Error type
`message` | String! | A description of the error

### CartUserInputErrorType! {#CartUserInputErrorType!}

Type | Description
--- | ---
`CART_ID_INVALID` | The specified cart ID is invalid.
`PRODUCT_NOT_FOUND` | A product with the SKU specified in the argument `data`.`sku` does not exist.
`NOT_SALABLE` | A requested product is not available
`INSUFFICIENT_STOCK` | The requested product is out of stock
`UNDEFINED` | The error message does not match any error code
