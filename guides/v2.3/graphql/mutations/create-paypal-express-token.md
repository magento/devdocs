---
group: graphql
title: createPaypalExpressToken mutation
---

The `createPaypalExpressToken` mutation begins the authorization process for the following payment methods:

* PayPal Express Checkout
* PayPal Something 1
* PayPal Something 2
* PayPal Something 3

This mutation requires as input the cart ID, the payment method code, and a set of URLs that PayPal uses to respond to the token request. If the request is successful, PayPal returns a token. The `setPaymentMethodOnCart` mutation uses this token later in the authorization process. 

The raw response from PayPal also includes the payer ID in the URL. Extract the payer ID in your client code. You will also specify this value in the `setPaymentMethodOnCart` mutation.

## Syntax

`mutation: {createPaypalExpressToken(input: PaypalExpressTokenInput!): {PaypalExpressToken}}`

## Sample usage

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
`urls` | [`PaypalExpressUrlsInput`](#PaypalExpressUrlsInput)! | Defines a set of URLs to redirect to in response to the token request
`use_paypal_credit` | Boolean | Indicates whether the buyer clicked the Paypal credit button. The default value is `false`

### PaypalExpressUrlsInput {#PaypalExpressUrlsInput}

The `PaypalExpressUrlsInput` object contains a set of URLs that PayPal uses to respond to a token request.

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` | String! | The redirect URL when the buyer cancels the transaction. This should be the page on your website where the buyer initially chose PayPal as the payment type
`pending_url` | String! | The URL to redirect for a pending transactions. Not applicable to most PayPal solutions
`return_url` | String! | The URL of the final review page on your website where the buyer confirms the order and payment
`success_url` | String! | The URL to redirect upon success. Not applicable to most PayPal solutions

### PaymentMethodAdditionalDataInput {#PaymentMethodAdditionalDataInput}

The `PaymentMethodAdditionalDataInput` data type attributes are used when setting a PayPal payment method. [setPaymentMethodOnCart mutation]({{ page.baseurl}}/graphql/reference/quote-payment-method.html) provides more context.

Attribute |  Data Type | Description
--- | --- | ---
`payflow_express` | [PayflowExpressInput](#PayflowExpressInput) | Required input for PayPal Payflow Express Checkout payments
`paypal_express` | [PaypalExpressInput](#PaypalExpressInput) | Required input for PayPal Express Checkout payments

### PaypalExpressInput {#PaypalExpressInput}

The `PaypalExpressInput` object contains the required input for PayPal Express Checkout payments.

Attribute |  Data Type | Description
--- | --- | ---
`payer_id` | String! | The unique ID of the PayPal customer
`token` | String! | The token returned by the createPaypalExpressToken mutation


## Output attributes

The `createPaypalExpressToken` object contains .

Attribute |  Data Type | Description
--- | --- | ---