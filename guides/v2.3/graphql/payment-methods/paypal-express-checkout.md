---
group: graphql
title: PayPal Express Checkout payment method
---

The PayPal Express Checkout payment method enables customers to pay by credit card or from the security of their personal PayPal accounts. During checkout, the customer is redirected to the secure PayPal site to complete the payment information. The customer is then returned to your store to complete the remainder of the checkout process.

The merchant can use PayPal Express Checkout as a standalone option, or combine it with one of these other PayPal payment solutions:

- PayPal Payflow Link
- PayPal Payment Standard
- Website Payments Standard (Australia only)
- Website Payments Standard (United Kingdom only)

When these other payment solutions are combined with PayPal Express Checkout, they use the same workflow as PayPal Express Checkout. From the GraphQL perspective, the only difference is the payment method `code` specified in the `setPaymentMethodOnCart` mutation.

## PayPal Express Checkout workflow

The following diagram shows the workflow for placing an order when PayPal Express Checkout is the selected payment method.

![PayPal Express Checkout sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-express-checkout.svg)

The following steps describe the flow of calls required to complete a typical PayPal Express Checkout authorization. A successful purchase requires that you send three mutations to PayPal, and the buyer must approve the purchase by logging in to PayPal.

{% include graphql/payment-methods/paypal-express-checkout-workflow.md %}

## Additional Payment information

When you set the payment method code to `paypal_express` in the `setPaymentMethodOnCart` mutation, you must also specify attributes specific to this payment method in `additional_data` object. These attributes are defined in the   `paypal_express` object:

{% include graphql/payment-methods/paypal-express-checkout-attributes.md %}

## Example setPaymentMethodOnCart mutation

The following example shows the `setPaymentMethodOnCart` mutation constructed for the PayPal Express payment method.

**Request**

```text
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
    payment_method: {
        code: "paypal_express"
        additional_data: {
            paypal_express: {
                payer_id: "<PayPal_PayerID>"
                token: "<PayPal_Token>"
            }
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

**Response**

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

- [`createPaypalExpressToken` mutation]({{page.baseurl}}/graphql/mutations/create-paypal-express-token.html)
- [`placeOrder` mutation]({{page.baseurl}}/graphql/reference/quote-place-order.html)
- [`setPaymentMethodOnCart` mutation]({{page.baseurl}}/graphql/reference/quote-payment-method.html)
