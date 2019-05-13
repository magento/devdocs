---
group: graphql
title: Payment method mutations
---

You can use GraphQL to set the payment method on a cart. GraphQL supports the following payment methods:

Title | Code
--- | ---
Bank Transfer Payment | `banktransfer`
Cash on Delivery | `cashondelivery`
Check / Money order | `checkmo`
No Payment Information Required | `free`
Purchase Order | `purchaseorder`

## Set the payment method {#setPaymentMethodOnCart}

Apply the `setPaymentMethodOnCart`  mutation after setting the shipping address, shipping method and any discounts have been applied to the cart.

### Syntax

`mutation: {setPaymentMethodOnCart(input: SetPaymentMethodOnCartInput): SetPaymentMethodOnCartOutput}}`

### Example usage

The following example assigns the `banktransfer` payment method to the specified cart.

**Request**

```text
mutation {
  setPaymentMethodOnCart(input: {
      cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
      payment_method: {
          code: "banktransfer"
      }
  }) {    
    cart {
      selected_payment_method {
        code
        title
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "banktransfer",
          "title": "Bank Transfer Payment"
        }
      }
    }
  }
}
```

### Input attributes

The top-level `SetPaymentMethodOnCartInput` object is listed first. All child objects are listed in alphabetical order.

#### SetPaymentMethodOnCartInput attributes {#SetPaymentMethodOnCartInput}

The `SetPaymentMethodOnCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart
`payment_method` | [PaymentMethodInput!](#PaymentMethodInput) | An object containing the payment method code

#### PaymentMethodInput attributes {#PaymentMethodInput}

The `PaymentMethodInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The internal name for the payment method
`purchase_order_number` | String | The purchase order number. Optional for most payment methods

### Output attributes

The `SetPaymentMethodOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` | Cart! | Describes the contents of the specified shopping cart.

#### SetPaymentMethodOnCartOutput attributes {#SetPaymentMethodOnCartOutput}

The `SetPaymentMethodOnCartOutput` object contains the `Cart` object.

{% include graphql/cart-object.md %}