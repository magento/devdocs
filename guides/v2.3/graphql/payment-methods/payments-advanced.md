---
group: graphql
title: PayPal Payments Advanced payment method
---

The PayPal Payments Advanced payment solution allows merchants to enable their online stores to collect payments directly via credit card, PayPal Express Checkout, or PayPal's PayPal Credit service. From a GraphQL integration standpoint, PayPal Payments Advanced payment method is identical to the PayPal [Payflow Link]({{page.baseurl}}/graphql/payment-methods/payflow-link.html) payment method, with the exception of the payment method `code`. The PayPal [Payments Advanced documentation](https://developer.paypal.com/docs/classic/products/paypal-payments-advanced/) describes other ways in which the payment methods differ.

PayPal Payments Advanced is available in the US and Canada only.

## PayPal Payments Advanced workflow

The following diagram shows the workflow for placing an order when Payments Advanced is the selected payment method.

![PayPal Payments Advanced sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-payflow-link.svg)

{% include graphql/payment-methods/payflow-link-workflow.md %}

## Additional Payment information

When you set the payment method code to `payflow_advanced` in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html) mutation, the `additional_data` object must contain a `payflow_link` object, which defines the following attributes:

{% include graphql/payment-methods/payflow-link-attributes.md %}

## Example setPaymentMethodOnCart mutation

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payments Advanced payment method.

**Request**

```text
mutation {
    setPaymentMethodOnCart(input: {
        payment_method: {
            code: "payflow_advanced"
            additional_data: {
                payflow_link: {
                  return_url: "paypal/action/return.html"
                  error_url: "paypal/action/error.html"
                  cancel_url: "paypal/action/cancel.html"
                }
            }
        }
        cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
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
          "code": "payflow_advanced",
          "title": "Credit Card"
        }
      }
    }
  }
}
```
