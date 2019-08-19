---
group: graphql
title: Braintree payment method
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
---

Braintree is a payment gateway that processes debit and credit card payments.

## Braintree workflow

1. The client uses [`createBraintreeClientToken`]({{page.baseurl}}/graphql/mutations/braintree-create-client-token.html)

2. Initialize the [Braintree hosted fields](https://developers.braintreepayments.com/guides/hosted-fields/overview/javascript/v3)
   using the client token to collect and tokenize payment information via a secure iframe.

3. On the checkout page, the customer selects **Credit Card** as the payment method and inputs payment information using
   the Braintree hosted fields.

4. The customer clicks **Place Order**

5. The client requests the Braintree SDK tokenize the user-input payment information.

6. The Braintree SDK submits the payment information to Braintree client-side and returns a [payment token](https://braintree.github.io/braintree-web/3.46.0/HostedFields.html#tokenize)
   to the client.

7. The client extracts the payment nonce from the [Tokenized Payload](https://braintree.github.io/braintree-web/3.46.0/HostedFields.html#~tokenizePayload).

8. The client uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html) mutation
   to set the payment method to `braintree`. The payment method nonce is passed with other required and optional
   properties in the [`braintree`](#braintree-object).

9. Magento returns a `Cart` object.

10. The client uses the [`placeOrder`]({{page.baseurl}}/graphql/reference/quote-place-order.html) mutation.

11. Magento sends an authorization request to the gateway.

12. The gateway sends the response to Magento.

13. Magento creates an order and sends an order ID in response to the `placeOrder` mutation.

## `setPaymentMethodOnCart` mutation

When you set the payment method to Braintree in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html)
mutation, the `payment_method` object must contain a `braintree` object.

### braintree object

The `braintree` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`payment_method_nonce` | String! | Required input for Braintree client-side generated nonce
`is_active_payment_token_enabler` | Boolean! | Required input dictating if payment should be stored in `Magento_Vault`
`device_data` | String | Optional. JSON-encoded device data for Kount integration

## Example Usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Braintree payment method.

**Request**

```text
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "braintree"
      braintree: {
        payment_method_nonce: "fake-nonce"
        is_active_payment_token_enabler: false
      }
    }
  }) {
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
          "code": "braintree"
        }
      }
    }
  }
}
```
