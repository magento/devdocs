---
group: graphql
title: setNegotiableQuotePaymentMethod mutation
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/negotiable-quote/mutations/set-payment-method/
layout: migrated
---

The `setNegotiableQuotePaymentMethod` mutation defines which payment method to apply to the cart. The negotiable quote must be in the UPDATED state to successfully apply the payment method.

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

The following offline payment methods are also supported:

Title | Code
--- | ---
Bank Transfer Payment | `banktransfer`
Cash on Delivery | `cashondelivery`
Check / Money order | `checkmo`
No Payment Information Required | `free`
Purchase Order | `purchaseorder`

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
{
    setNegotiableQuotePaymentMethod(
        input: SetNegotiableQuotePaymentMethodInput!
    ): SetNegotiableQuotePaymentMethodOutput
}
```

## Example usage

The following example sets the payment method .

**Request:**

```graphql
mutation {
  setNegotiableQuotePaymentMethod(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
      payment_method: { code: "checkmo" }
    }
  ) {
    quote {
      uid
      name
      status
      available_payment_methods {
        code
        title
      }
      selected_payment_method {
        code
        title
        purchase_order_number
      }
      items {
        product {
          sku
          name
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setNegotiableQuotePaymentMethod": {
      "quote": {
        "uid": "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb",
        "name": "April 22 request",
        "status": "UPDATED",
        "available_payment_methods": [
          {
            "code": "checkmo",
            "title": "Check / Money order"
          }
        ],
        "selected_payment_method": {
          "code": "checkmo",
          "title": "Check / Money order",
          "purchase_order_number": null
        }
      }
    }
  }
}
```

## Input attributes

The `SetNegotiableQuotePaymentMethodInput` input object specifies the company user's cart ID and the payment method.

### SetNegotiableQuotePaymentMethodInput attributes {#SetNegotiableQuotePaymentMethodInput}

The `SetNegotiableQuotePaymentMethodInput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`payment_method`| NegotiableQuotePaymentMethodInput! | The payment method to be assigned to the negotiable quote
`quote_uid` | ID! | The unique ID of a `NegotiableQuote` object

### NegotiableQuotePaymentMethodInput attributes

Attribute |  Data Type | Description
--- | --- | ---
`code` | String! | The internal name for the payment method
`purchase_order_number` | String | The purchase order number. Optional for most payment methods.

## Output attributes

The `SetNegotiableQuotePaymentMethodOutput` output object contains the following attribute.

Attribute |  Data Type | Description
--- | --- | ---
`quote` | NegotiableQuote | The updated negotiable quote

### NegotiableQuote attributes {#NegotiableQuote}

{% include graphql/negotiable-quote.md %}
