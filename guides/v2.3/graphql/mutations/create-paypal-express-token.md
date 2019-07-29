---
group: graphql
title: createPaypalExpressToken mutation
---

The `createPaypalExpressToken` mutation begins the authorization process for the following payment methods:

* PayPal Express Checkout
* PayPal Payflow Pro with Express Checkout
* PayPal Payflow Link with Express Checkout

The input includes the cart ID, the payment method code, and a set of URLs that PayPal uses to respond to the token request. If the request is successful, PayPal returns a token. The `setPaymentMethodOnCart` mutation uses this token later in the authorization process.

The raw response from PayPal also includes the payer ID in the URL. Extract the payer ID in your client code. You will also specify this value in the `setPaymentMethodOnCart` mutation.

## Syntax

`mutation: {createPaypalExpressToken(input: PaypalExpressTokenInput!): {PaypalExpressToken}}`

## Example usage

**Request**

```text
mutation {
    createPaypalExpressToken(
        input: {
            cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
            code: "paypal_express"
            express_button: true
            urls: {
                return_url: "http://magento.test/paypal/express/return/"
                cancel_url: "http://magento.test/paypal/express/cancel/"
            }
        }
    )
    {
        token
        paypal_urls{
            start
            edit
        }
    }
}
```

**Response**

```json
{
  "data": {
    "createPaypalExpressToken": {
      "token": "<PayPal_Token>"
      "paypal_urls": {
        "start": "https://www.sandbox.paypal.com/checkoutnow?token=<PayPal_Token>"
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
`urls` | [`PaypalExpressUrlsInput!`](#PaypalExpressUrlsInput)! | Defines a set of URLs to redirect to in response to the token request
`use_paypal_credit` | Boolean | Indicates whether the buyer clicked the Paypal credit button. The default value is `false`

### PaypalExpressUrlsInput {#PaypalExpressUrlsInput}

The `PaypalExpressUrlsInput` object contains a set of URLs that PayPal uses to respond to a token request.

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` | String! | The redirect URL when the buyer cancels the transaction. This should be the page on your website where the buyer initially chose PayPal as the payment type
`pending_url` | String! | The URL to redirect for a pending transactions. Not applicable to most PayPal solutions
`return_url` | String! | The URL of the final review page on your website where the buyer confirms the order and payment
`success_url` | String! | The URL to redirect upon success. Not applicable to most PayPal solutions

## Output attributes

### PaypalExpressToken {#PaypalExpressToken}

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
