---
group: graphql
title: PayPal Payflow Pro payment method
---

Payflow Pro is a payment gateway that processes debit and credit card payments. It is available for customers of the United States, Canada, Australia, and New Zealand.

## Payflow Pro workflow

The following diagram shows the workflow for placing an order when Payflow Pro is the selected payment method.

![PayPal Payflow Pro sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-payflow-pro.svg)

{% include graphql/payment-methods/payflow-pro-workflow.md %}

## Additional Payment information

When you set the payment method to Payflow Pro in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html) mutation, the `additional_data` object must contain a `payflowpro` object and a `CreditCardDetailsInput` object.

{% include graphql/payment-methods/payflow-pro-attributes.md %}

## Example setPaymentMethodOnCart mutation

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payflow Pro payment method.

**Request**

```text
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "payflowpro"
      additional_data: {
        payflowpro: {
          cc_details: {
            cc_exp_month: 12
            cc_exp_year: 2021
            cc_last_4: 1111
            cc_type: "VI"
          }
        }
      }
    }
  })
  {
    cart {
      selected_payment_method {
        code
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
          "code": "payflowpro"
        }
      }
    }
  }
}
```
