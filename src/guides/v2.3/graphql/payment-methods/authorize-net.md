---
group: graphql
title: Authorize.Net payment method
---

{:.bs-callout-warning}
The Authorize.Net payment method has been deprecated for Magento 2.3.5 and will be removed in Magento 2.4.0.

Accept.js is a JavaScript-based solution for sending secure payment data directly to Authorize.Net. The Accept JavaScript library intercepts the payment data before it is passed to Magento and submits it directly to Authorize.Net, which replaces it with a one-time-use token, or payment nonce. This payment nonce, which is returned by the JavaScript library, is used in place of payment data.

## Authorize.Net workflow

The following diagram shows the workflow for placing an order when Authorize.Net is the selected payment method.

![Authorize.Net sequence diagram]({{site.baseurl}}/common/images/graphql/authorize-net.svg)

1. The customer clicks on the **Place order** button. The embedded `Accept.js` library captures the payment data and submits it directly to Authorize.Net.

1. Authorize.Net returns a payment nonce and order details. The client's browser then posts the nonce to the Magento server along with all the other order information. The payment nonce expires after 24 hours.

1. The client uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation to send the payment nonce and the last four digits of the card to Magento.

1. Magento returns a `Cart` object.

1. The client runs the [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html) mutation, which creates an order in Magento and begins the authorization process.

1. Magento sends a transaction request that includes the payment nonce. The nonce replaces the payment details provided in standard Authorize.Net API calls.

1. Authorize.Net sends a transaction response.

1. Magento creates an order and sends an order ID in response to the `placeOrder` mutation.

## Additional payment information

When you set the payment method to `authorizenet_acceptjs` in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation, the payload must contain an `authorizenet_acceptjs` object.

Attribute |  Data Type | Description
--- | --- | ---
`cc_last_4` | Int! | The last four digits of the credit or debit card
`opaque_data_descriptor` | String! | Authorize.Net's description of the transaction request
`opaque_data_value` | String! | The nonce returned by Authorize.Net

### Example usage

The following example assigns the `authorizenet_acceptjs` payment method to the specified cart.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "lvdqOLzryManseE2artECZuPClxFgG1o"
    payment_method: {
      code: "authorizenet_acceptjs"
      authorizenet_acceptjs: {
        cc_last_4: 1111
        opaque_data_descriptor: "COMMON.ACCEPT.INAPP.PAYMENT"
        opaque_data_value: "<nonce_value>"
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
          "code": "authorizenet_acceptjs",
          "title": "Credit Card (Authorize.Net)"
        }
      }
    }
  }
}
```
