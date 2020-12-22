---
group: graphql
title: createPaypalExpressToken mutation
---

The `createPaypalExpressToken` mutation begins the authorization process for the following payment methods:

*  PayPal Express Checkout
*  PayPal Payflow Pro with Express Checkout
*  PayPal Payflow Link with Express Checkout

The input includes the cart ID, the payment method code, and a set of URLs that PayPal uses to respond to the token request. If the request is successful, PayPal returns a token. The [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation uses this token later in the authorization process.

## Syntax

```graphql
mutation {
  createPaypalExpressToken(
    input: PaypalExpressTokenInput!
  ) {
    PaypalExpressTokenOutput
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  createPaypalExpressToken(
    input: {
      cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
      code: "paypal_express"
      express_button: true
      urls: {
        return_url: "paypal/action/return.html"
        cancel_url: "paypal/action/cancel.html"
      }
    }
  ) {
    token
    paypal_urls {
      start
      edit
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createPaypalExpressToken": {
      "token": "<PayPal_Token>",
      "paypal_urls": {
        "start": "https://www.sandbox.paypal.com/checkoutnow?token=<PayPal_Token>",
        "edit": "https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&useraction=continue&token=<PayPal_Token>"
      }
    }
  }
}
```

## Input attributes

### PaypalExpressTokenInput {#PaypalExpressTokenInput}

The `PaypalExpressTokenInput` object defines the attributes required to receive a payment token from PayPal.

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`code` | String! | Payment method code
`express_button` | Boolean | Indicates whether the buyer selected the PayPal Express Checkout button. The default value is `false`
`urls` | [`PaypalExpressUrlsInput!`](#PaypalExpressUrlsInput) | A set of relative URLs that PayPal will use in response to various actions during the authorization process.
`use_paypal_credit` | Boolean | Indicates whether the buyer clicked the PayPal credit button. The default value is `false`

### PaypalExpressUrlsInput {#PaypalExpressUrlsInput}

The `PaypalExpressUrlsInput` object contains a set of relative URLs that PayPal will use in response to various actions during the authorization process. Magento prepends the base URL to this value to create a full URL. For example, if the full URL is `https://www.example.com/path/to/page.html`, the relative URL is `path/to/page.html`. Use this input for Express Checkout and Payments Standard payment methods.

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` | String! | The relative URL of the page that PayPal will redirect to when the buyer cancels the transaction in order to choose a different payment method. If the full URL to this page is `https://www.example.com/paypal/action/cancel.html`, the relative URL is `paypal/action/cancel.html`.
`pending_url` | String | The relative URL of the page that PayPal will redirect to when the payment has been put on hold for additional review. This condition mostly applies to ACH transactions, and is not applicable to most PayPal solutions. If the full URL to this page is `https://www.example.com/paypal/action/success_pending.html`, the relative URL is `paypal/action/success_pending.html`.
`return_url` | String! | The relative URL of the final confirmation page that PayPal will redirect to upon payment success. If the full URL is `https://www.example.com/paypal/action/success_review.html`, the relative URL is `paypal/action/success_review.html`.
`success_url` | String | The relative URL of the order confirmation page that PayPal will redirect to when the payment is successful and additional confirmation is not needed. Not applicable to most PayPal solutions. If the full URL to this page is `https://www.example.com/paypal/action/success.html`, the relative URL is `paypal/action/success.html`.

## Output attributes

{:.bs-callout-info}
The `createPaypalExpressToken` mutation previously returned a `PaypalExpressToken` object, which has been deprecated. The mutation now returns a `PaypalExpressTokenOutput` object. The contents of these objects are identical.

### PaypalExpressTokenOutput {#PaypalExpressTokenOutput}

The `PaypalExpressToken` object contains a token returned by PayPal and a set of URLs that allow the buyer to authorize payment and adjust checkout details.

Attribute |  Data Type | Description
--- | --- | ---
`paypal_urls` | [PaypalExpressUrlList](#PaypalExpressUrlList) | A set of URLs that allow the buyer to authorize payment and adjust checkout details
`token` | String | The token returned by PayPal

### PaypalExpressUrlList {#PaypalExpressUrlList}

The `PaypalExpressUrlList` object defines a set of URLs that allow the buyer to authorize payment and adjust checkout details.

Attribute |  Data Type | Description
--- | --- | ---
`edit` | String | The PayPal URL that allows the buyer to edit their checkout details
`start` | String | The URL to the PayPal login page
