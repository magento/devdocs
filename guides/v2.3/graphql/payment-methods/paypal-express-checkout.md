---
group: graphql
title: PayPal Express payment method
---

The PayPal Express Checkout payment method enables customers to pay by credit card or from the security of their personal PayPal accounts. During checkout, the customer is redirected to the secure PayPal site to complete the payment information. The customer is then returned to your store to complete the remainder of the checkout process. 

The merchant can use PayPal Express Checkout as a standalone option, or combine it with one of these other PayPal payment solutions:

* PayPal Payflow Link
* PayPal Payment Standard
* Website Payments Standard (Australia only)
* Website Payments Standard (United Kingdom only)

When these other payment solutions are combined with PayPal Express Checkout, they use the same workflow as PayPal Express Checkout. From the GraphQL perspective, the only difference is the payment method `code` specified in the `setPaymentMethodOnCart` mutation.

## PayPal Express Checkout workflow

The following steps describe the flow of calls required to complete a typical PayPal Express Checkout authorization. A successful purchase requires that you send three mutations to PayPal, and the buyer must approve the purchase by logging in to PayPal.

1. **Send a token request.** When the buyer clicks a PayPal button, the frontend executes the [`createPaypalExpressToken`]({{page.baseurl}}/mutations/create-paypal-express-token.html) mutation. The Magento `PaypalGraphQl` module gathers information in the specified cart and sends this information to PayPal.

2. **PayPal returns a token.** If the token request succeeds, PayPal returns a token and a payer ID. PayPal also sends payment-related data that is outside the scope of GraphQL. You must include this token in subsequent steps. The buyer is redirected to the payment confirmation page, which was specified in the token request.

3. **Redirect the customer to PayPal for approval.** Depending on your implementation, the buyer is either redirected to the PayPal login screen, or the buyer enters their credentials in-context.

4. **PayPal redirects the customer back to your site.** If the customer approves the payment, PayPal directs the customer back to the payment confirmation page.

5. **Set the payment method.** The frontend runs the [`setPaymentMethodOnCart`({{page.baseurl}}/reference/quote-payment-method.html) mutation. The payload includes the PayPal token and the payer ID. The cart may have been updated since the token was requested with shipping costs, taxes, and other adjustments. Magento submits the updated cart to PayPal.

6. **Complete the transaction.** Place the order with the [`placeOrder`]({{page.baseurl}}/reference/quote-place-order.html) mutation. PayPal captures the payment by transferring the funds from the customer account to the appropriate merchant account. Magento creates an order, ready for fulfillment.

## Additional Payment information

The value of the payment method `code` in the [`setPaymentMethodOnCart`({{page.baseurl}}/reference/quote-payment-method.html) mutation can be one of the following:

[PayPal Express Checkout]({{page.baseurl}}/graphql/payment-methods/paypal-express-checkout.html) | `paypal_express`
[PayPal Express Checkout Payflow Edition]({{page.baseurl}}/graphql/payment-methods/paypal-express-checkout.html) | `payflow_express`


Attribute |  Data Type | Description
--- | --- | ---

### Set the payment method

Magento GraphQL supports the `paypal_express` and `paypal_payflow` payment methods.

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

### Place the order

**Request**

``` text
mutation {
  placeOrder(
    input: {
      cart_id: "rMQdWEecBZr4SVWZwj2AF6y0dNCKQ8uH"
    }
  ) {
    order {
      order_id
    }
  }
}
```

**Response**

```json
{
  "data": {
    "placeOrder": {
      "order": {
        "order_id": "000000006"
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
`express_button`: | Boolean | Indicates whether the buyer selected the PayPal Express Checkout button. The default value is `false`
`urls` | [`PaypalExpressUrlsInput`](#PaypalExpressUrlsInput) | Defines a set of URLs to redirect to in response to the token request
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

### PayflowExpressInput {#PayflowExpressInput}

The `PayflowExpressInput` object contains the required input for PayPal Payflow Express Checkout payments

Attribute |  Data Type | Description
--- | --- | ---
`payer_id` | String! | The unique ID of the PayPal user
`token` |  String! | The token returned by the createPaypalExpressToken mutation

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
