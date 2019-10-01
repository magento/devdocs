---
group: graphql
title: setGuestEmailOnCart mutation
---

For guest customers, you must assign an email to the cart before you place the order.

A logged-in customer specifies an email address when they create an account. Therefore, you can place the order without explicitly setting the email.

## Syntax

`mutation: {setGuestEmailOnCart(input: SetGuestEmailOnCartInput): {SetGuestEmailOnCartOutput}}`

## Example usage

**Request**

``` text
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

**Response**

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
`cart` |[ Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
