---
group: graphql
title: PayPal Payflow Link payment method
---

PayPal [PayFlow Link](https://developer.paypal.com/docs/classic/payflow/integration-guide/) is available for merchants in the United States and Canada only. Customers are not required to have a personal PayPal account. Instead, customers enter their credit card information in a form that is hosted by PayPal.

The Payflow gateway uses a secure token to send non-credit card transaction data to the Payflow server for storage in a way that cannot be intercepted and manipulated maliciously. This token secures the data for a one-time transaction and is valid for 30 minutes. When the PWA client runs the `placeOrder` mutation, Magento requests a secure token. The Payflow server returns the token as a string of up to 32 alphanumeric characters.

## Payflow Link workflow

The following diagram shows the workflow for placing an order when Payflow Link is the selected payment method.

![PayPal Payflow Link sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-payflow-link.svg)

{% include graphql/payment-methods/payflow-link-workflow.md %}

## Additional Payment information

When you set the payment method to Payflow Link in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation, the `payment_method` object must contain a `payflow_link` object, which defines the following objects:

{% include graphql/payment-methods/payflow-link-attributes.md %}

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payflow Link payment method.

**Request:**

```graphql
mutation {
    setPaymentMethodOnCart(input: {
        payment_method: {
            code: "payflow_link"
            payflow_link: {
                return_url: "paypal/action/return.html"
                error_url: "paypal/action/error.html"
                cancel_url: "paypal/action/cancel.html"
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

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "payflow_link",
          "title": "PayPal Payflow Link"
        }
      }
    }
  }
}
```
