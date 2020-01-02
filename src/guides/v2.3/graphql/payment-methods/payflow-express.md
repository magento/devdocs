---
group: graphql
title: Express Checkout for other PayPal solutions
---

Set the payment method code to `payflow_express` to process Express Checkout transactions when the payment method is set to any of the following:

-  Payflow Link
-  Payflow Pro
-  Payments Advanced
-  Payments Pro

PayPal Express Checkout enables customers to pay by credit card or from the security of their personal PayPal accounts. During checkout, the customer is redirected to the secure PayPal site to complete the payment information. The customer is then returned to the store to complete the remainder of the checkout process.

From a GraphQL integration standpoint, this payment method is identical to the [PayPal Express Checkout]({{page.baseurl}}/graphql/payment-methods/payflow-link.html) payment method, with the exception that in the `setPaymentMethodOnCart` mutation, the payment method `code` is set to `payflow_express`.

## PayPal Express Checkout workflow

The following diagram shows the workflow for placing an order when `payflow_express` is the specified payment method.

![PayPal Express Checkout sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-express-checkout.svg)

The following steps describe the flow of calls required to complete a typical PayPal Express Checkout authorization. A successful purchase requires that you send three mutations to PayPal, and the buyer must approve the purchase by logging in to PayPal.

{% include graphql/payment-methods/paypal-express-checkout-workflow.md %}

## `setPaymentMethodOnCart` mutation

When you set the payment method to one of the Express Checkout payment solutions discussed in this topic, you must set the `code` attribute to `payflow_express`. In addition, the payload must contain a `payflow_express` object, which defines the following attributes:

{% include graphql/payment-methods/paypal-express-checkout-attributes.md %}

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation with the `code` set to `payflow_express`.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
    payment_method: {
        code: "payflow_express"
        payflow_express: {
          payer_id: "<PayPal_PayerID>"
          token: "<PayPal_Token>"
        }
      }
  }) {
    cart {
      selected_payment_method {
        code
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
          "code": "payflow_express",
        }
      }
    }
  }
}
```

## Related topics

-  [`createPaypalExpressToken` mutation]({{page.baseurl}}/graphql/mutations/create-paypal-express-token.html)
-  [`placeOrder` mutation]({{page.baseurl}}/graphql/mutations/place-order.html)
-  [`setPaymentMethodOnCart` mutation]({{page.baseurl}}/graphql/mutations/set-payment-method.html)
