---
group: graphql
title: PayPal Express Checkout payment method
---

The PayPal Express Checkout payment method enables customers to pay by credit card or from the security of their personal PayPal accounts. During checkout, the customer is redirected to the secure PayPal site to complete the payment information. The customer is then returned to the store to complete the remainder of the checkout process.

Some alternate PayPal solutions have the same GraphQL workflow when Express Checkout is enabled. The information in this topic also applies to the following PayPal solutions:

-  Payments Standard
-  Website Payments Standard

## PayPal Express Checkout workflow

The following diagram shows the workflow for placing an order when PayPal Express Checkout is the selected payment method.

![PayPal Express Checkout sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-express-checkout.svg)

The following steps describe the flow of calls required to complete a typical PayPal Express Checkout authorization. A successful purchase requires that you send three mutations to PayPal, and the buyer must approve the purchase by logging in to PayPal.

{% include graphql/payment-methods/paypal-express-checkout-workflow.md %}

## `setPaymentMethodOnCart` mutation

When you set the payment method to Express Checkout, you must set the `code` attribute to `paypal_express`. In addition, the payload must contain a `paypal_express` object, which defines the following attributes:

{% include graphql/payment-methods/paypal-express-checkout-attributes.md %}

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the PayPal Express payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
    payment_method: {
      code: "paypal_express"
      paypal_express: {
        payer_id: "<PayPal_PayerID>"
        token: "<PayPal_Token>"
      }
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
          "code": "paypal_express",
          "title": "PayPal Express Checkout"
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
