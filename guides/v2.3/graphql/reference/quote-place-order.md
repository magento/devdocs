---
group: graphql
title: Place an order
---

For guest customers, you must assign an email to the cart before you place the order. 

The email is already associated with a logged-in customer's account. Therefore, you can place the order without setting the email.

## Set the guest's email on the cart

The following example sets the guest email.

### Syntax

`mutation: {setGuestEmailOnCart(input: SetGuestEmailOnCartInput): {SetGuestEmailOnCartOutput}}`


### Example usage

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

### Input attributes

The `SetGuestEmailOnCartInput` object must contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart
`email` | String! | The guest user's email

### Output attributes

The `SetGuestEmailOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### SetGuestEmailOnCartOutput attributes {#SetGuestEmailOnCartOutput}

The `SetGuestEmailOnCartOutput` object contains the `Cart` object.

{% include graphql/cart-object.md %}

## Place the order

The `placeOrder` mutation converts the cart into an order and returns an order ID. You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST or SOAP calls to manage orders to their completion.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String | A 32-character string

### Syntax

`mutation: {placeOrder(input: PlaceOrderInput): {PlaceOrderOutput}}`

### Example usage

**Request**

``` text
mutation {
  placeOrder(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG" 
    }
  ) {
    order {
      order_id
    }
  }
}
```

**Response**


```json
{
  "data": {
    "placeOrder": {
      "order": {
        "order_id": "000000006"
      }
    }
  }
}
```

### Input attributes

The `placeOrderInput` object must contain the following attribute:


Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart

### Output attributes

The `placeOrderOutput` object contains the `order` object, which contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`order_id` | String! | The unique ID that identifies the order
