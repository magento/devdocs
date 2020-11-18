---
group: graphql
title: addWishlistItemsToCart mutation
---

The `addWishlistItemsToCart` mutation adds items.

## Syntax

```graphql
addWishlistItemsToCart(
    wishlistUid: ID!,
    wishlistItemUids: [ID!]
    ): AddWishlistItemsToCartOutput
```

## Example usage

**Request:**

``` graphql

```

**Response:**

```json

```

## Input attributes

The `addWishlistItemsToCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---


### WishlistItemInput attributes {#WishlistItemInput}

The `WishlistItemInput` object defines each item to add to the wish list.

Attribute |  Data Type | Description
--- | --- | ---

## Output attributes

The

Attribute |  Data Type | Description
--- | --- | ---


### Wishlist attributes {#Wishlist}

{% include graphql/wishlist.md %}

### WishListUserInputError attributes {#WishListUserInputError}

{% include graphql/wishlist-user-input-errors.md %}
