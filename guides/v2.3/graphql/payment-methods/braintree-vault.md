---
group: graphql
title: Braintree Vault payment method
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
---

Braintree Vault is a payment gateway that processes debit and credit card payments from the Magento_Vault.

## Braintree Vault workflow

1. Use the [`customerPaymentTokens`]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html) query to retrieve
   the payment tokens the customer has stored in the vault.

2. Magento returns an array of payment tokens.

3. The client renders the token information, and the customer selects a payment method.

4. Customer selects stored Braintree payment method.

5. When the customer clicks **Place Order**, the PWA uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html)
   mutation to set the payment method to `braintree_cc_vault`. The vaulted public hash is passed with other optional
   properties in the [`braintree_cc_vault`](#braintree_cc_vault-object).

6. Magento returns a `Cart` object.

7. The client runs the [`placeOrder`]({{page.baseurl}}/graphql/reference/quote-place-order.html) mutation.

8. Magento sends an authorization request to the gateway.

9. The gateway sends the response to Magento.

10. Magento creates an order and sends an order ID in response to the `placeOrder` mutation.

## `setPaymentMethodOnCart` mutation

When you set the payment method to Braintree in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/reference/quote-payment-method.html)
mutation, the `payment_method` object must contain a `braintree_cc_vault` object.

### braintree_cc_vault object

The `braintree_cc_vault` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`public_hash` | String! | Required input for Magento_Vault public hash for the selected stored payment method
`device_data` | String | Optional. JSON-encoded device data for Kount integration

### Example Usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Braintree Vault payment method.

**Request**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "braintree_cc_vault"
      braintree_cc_vault: {
        public_hash: "fake-public-hash"
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
          "code": "braintree_cc_vault"
        }
      }
    }
  }
}
```
