---
group: graphql
title: setGuestEmailOnCart mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-set-guest-email.html
---

For guest customers, you must assign an email to the cart before you place the order.

A logged-in customer specifies an email address when they create an account. Therefore, you can place the order without explicitly setting the email.

## Syntax

```graphql
mutation {
  setGuestEmailOnCart(
    input: SetGuestEmailOnCartInput
  ) {
    SetGuestEmailOnCartOutput
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  setGuestEmailOnCart(
    input: {
      cart_id: "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"
      email: "jdoe@example.com"
    }
  ) {
    cart {
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setGuestEmailOnCart": {
      "cart": {
        "email": "jdoe@example.com"
      }
    }
  }
}
```

## Input attributes

The `SetGuestEmailOnCartInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart
`email` | String! | The guest user's email

## Output attributes

The `SetGuestEmailOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The ID specified in the `cart` argument does not exist.
`Invalid email format` | The value specified in the `email` argument has an incorrect format.
`Required parameter "cart_id" is missing` | The `cart_id` argument was omitted or contains an empty value.
`Required parameter "email" is missing` | The `email` argument was omitted or contains an empty value.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set the email address on the customer's cart.
`The request is not allowed for logged in customers` | An authorized user (customer) is not allowed to use the `setGuestEmailOnCart` mutation.
