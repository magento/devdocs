---
group: graphql
title: setPaymentMethodOnCart mutation
---

The `setPaymentMethodOnCart` mutation defines which payment method to apply to the cart. Magento GraphQL supports the following payment methods:

Title | Code
--- | ---
Bank Transfer Payment | `banktransfer`
Cash on Delivery | `cashondelivery`
Check / Money order | `checkmo`
Credit Card (Authorize.Net) | `authorizenet_acceptjs`
No Payment Information Required | `free`
[PayPal Express Checkout]({{ page.baseurl}}/graphql/reference/paypal.html) | `paypal_express`
[PayPal Express Checkout Payflow Edition]({{ page.baseurl}}/graphql/reference/paypal.html) | `payflow_express`
PayPal Payflow Pro | `payflowpro`
PayPal Payflow Link | `payflow_link`
Purchase Order | `purchaseorder`

Apply the `setPaymentMethodOnCart` mutation after setting the shipping address, shipping method, and after applying any discounts to the cart.

## Syntax

`mutation: {setPaymentMethodOnCart(input: SetPaymentMethodOnCartInput): SetPaymentMethodOnCartOutput}}`

## Example usage

### Offline payment method

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

## Input attributes

The top-level `SetPaymentMethodOnCartInput` object is listed first. All child objects are listed in alphabetical order.

### SetPaymentMethodOnCartInput attributes {#SetPaymentMethodOnCartInput}

The `SetPaymentMethodOnCartInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart
`payment_method` | [PaymentMethodInput!](#PaymentMethodInput) | An object containing the payment method code

### PaymentMethodInput attributes {#PaymentMethodInput}

The `PaymentMethodInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`additional_data` | [PaymentMethodAdditionalDataInput](#PaymentMethodAdditionalDataInput) | Additional payment data
`code` | String! | The internal name for the payment method
`purchase_order_number` | String | The purchase order number. Optional for most payment methods

## Output attributes

The `SetPaymentMethodOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[ Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
