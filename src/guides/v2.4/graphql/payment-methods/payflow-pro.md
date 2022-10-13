---
group: graphql
title: PayPal Payflow Pro payment method
---

Payflow Pro is a payment gateway that processes debit and credit card payments. It is available for customers of the United States, Canada, Australia, and New Zealand.

Other PayPal solutions have the same GraphQL workflow as Payflow Pro. The information in this topic also applies to the following PayPal solution:

-  Payments Pro

If Payflow Pro has been configured to implement Express Checkout, use the [PayPal Express Checkout for Payflow payment method]({{page.baseurl}}/graphql/payment-methods/payflow-express.html) instead.

{:.bs-callout-info}
If the `is_active_payment_token_enabler` attribute is set to `1` (true), in future orders, the logged-in customer can use the [Payflow Pro Vault payment method]({{page.baseurl}}/graphql/payment-methods/payflow-pro-vault.html).

## Payflow Pro workflow

The following diagram shows the workflow for placing an order when Payflow Pro is the selected payment method.

![PayPal Payflow Pro sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-payflow-pro.svg)

{% include graphql/payment-methods/payflow-pro-workflow.md %}

## Additional Payment information

When you set the payment method to Payflow Pro in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation, the `payment_method` object must contain a `payflowpro` object and a `CreditCardDetailsInput` object.

### payflowpro object

The `payflowpro` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_details` | CreditCardDetailsInput! | Required input for credit card related information
`is_active_payment_token_enabler` | Boolean | States whether details about the customer's credit/debit card should be tokenized for later use. Required only if Vault is enabled for PayPal Payflow Pro payment integration.

### CreditCardDetailsInput object

The `CreditCardDetailsInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cc_exp_month` | Int! | Credit card expiration month
`cc_exp_year` | Int! | Credit card expiration year
`cc_last_4` | Int! | Last four digits of the credit card
`cc_type` | String! | Credit card type

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payflow Pro payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "payflowpro"
      payflowpro: {
        cc_details: {
          cc_exp_month: 12
          cc_exp_year: 2023
          cc_last_4: 1111
          cc_type: "VI"
        }
        is_active_payment_token_enabler: 1
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

**Response:**

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
