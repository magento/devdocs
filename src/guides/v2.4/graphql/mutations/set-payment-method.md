---
group: graphql
title: setPaymentMethodOnCart mutation
---

The `setPaymentMethodOnCart` mutation defines which payment method to apply to the cart. Magento GraphQL supports the following offline payment methods:

Title | Code
--- | ---
Bank Transfer Payment | `banktransfer`
Cash on Delivery | `cashondelivery`
Check / Money order | `checkmo`
No Payment Information Required | `free`
Purchase Order | `purchaseorder`

Supported online payment methods include:

-  [Braintree]({{page.baseurl}}/graphql/payment-methods/braintree.html)
-  [Braintree Vault]({{page.baseurl}}/graphql/payment-methods/braintree-vault.html)
-  [PayPal Express Checkout]({{page.baseurl}}/graphql/payment-methods/paypal-express-checkout.html)
-  [PayPal Payflow Link]({{page.baseurl}}/graphql/payment-methods/payflow-link.html)
-  [PayPal Payflow Pro]({{page.baseurl}}/graphql/payment-methods/payflow-pro.html)
-  [PayPal Payflow Pro Vault]({{page.baseurl}}/graphql/payment-methods/payflow-pro-vault.html)
-  [PayPal Payments Advanced]({{page.baseurl}}/graphql/payment-methods/payments-advanced.html)
-  [PayPal Website Payments Pro Hosted Solution]({{page.baseurl}}/graphql/payment-methods/hosted-pro.html)
-  [Express Checkout for other PayPal solutions]({{page.baseurl}}/graphql/payment-methods/payflow-express.html)

## Syntax

`mutation: {setPaymentMethodOnCart(input: SetPaymentMethodOnCartInput): SetPaymentMethodOnCartOutput}}`

## Example usage

### Offline payment method

The following example assigns the `banktransfer` payment method to the specified cart.

**Request:**

```graphql
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

**Response:**

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
`code` | String! | The internal name for the payment method
`purchase_order_number` | String | The purchase order number. Optional for most payment methods

For all online payment methods, the payload must include an object that defines additional information specific to that payment method.

## Output attributes

The `SetPaymentMethodOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.

## Errors

Error | Description
--- | ---
`Could not find a cart with ID "XXX"` | The specified `cart_id` value does not exist in the `quote_id_mask` table.
`Required parameter "cart_id" is missing.` | The value specified in the `cart_id` argument is empty.
`Required parameter "code" for "payment_method" is missing.` | The value specified in the `code` argument is empty.
`The current user cannot perform operations on cart "XXX"` | An unauthorized user (guest) tried to set a payment method for an order on behalf of an authorized user (customer), or a customer tried to set a payment method for an order on behalf of another customer.
`The requested Payment Method is not available.` | Specified in the `payment_method` argument payment method is disabled or does not exist.
`The shipping address is missing. Set the address and try again.` | You ran `setPaymentMethodOnCart` mutation before [setShippingAddressesOnCart]({{ page.baseurl }}/graphql/mutations/set-shipping-method.html). Set a shipping address first. [GraphQL checkout tutorial](https://devdocs.magento.com/guides/v2.3/graphql/tutorials/checkout/index.html) shows the order placement sequence.
