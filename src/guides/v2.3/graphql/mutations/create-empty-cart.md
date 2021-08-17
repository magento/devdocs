---
group: graphql
title: createEmptyCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-create-cart.html
---

The `createEmptyCart` mutation creates an empty shopping cart for a guest or logged in customer. You can allow the system to generate a cart ID, or assign a specific ID.

If you are creating a cart for a logged in customer, you must include the customer's authorization token in the header of the request.

## Syntax

```graphql
mutation {
  createEmptyCart {
    String
  }
}
```

## Example usage

### Create a cart with a randomly-generated cart ID

**Request:**

```graphql
mutation {
  createEmptyCart
}
```

**Response:**

The response is the cart ID, which is sometimes called the quote ID. The remaining examples in this topic will use this cart ID.

```json
{
  "data": {
    "createEmptyCart": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
  }
}
```

### Create an empty cart with an assigned cart ID

You can also create an empty cart with a specified `cart_id`.

**Request:**

```graphql
mutation {
  createEmptyCart(
    input: {
      cart_id: "x2345678901234567890123456789012"
    }
  )
}
```

**Response:**

The mutation returns the same `cart_id`.

```json
{
  "data": {
    "createEmptyCart": "x2345678901234567890123456789012"
  }
}
```

## Input attributes

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String | An optional 32-character string

## Output attributes

The `createEmptyCart` mutation returns the cart ID.

## Errors

Error | Description
--- | ---
`Cart with ID "XXX" already exists.` | The specified cart ID was previously used to create a cart.
`Cart ID length should to be 32 symbols.` | The cart ID is not the required length.
