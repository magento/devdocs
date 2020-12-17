---
group: graphql
title: PayPal Payflow Pro Vault payment method
---

PayPal Payflow Pro Vault payment method processes credit and debit card payments using information stored in the Magento vault. This payment method is available for customers of the United States, Canada, Australia, and New Zealand.

The following conditions must be true to use this payment method:

-  The shopper must be a logged-in customer.

-  The customer must have previously saved their payment information in the Magento vault.

You cannot use this payment method if the customer decides to use a credit or debit card that is not stored in the Magento vault.

If the customer's stored payment information becomes outdated, use the [deletePaymentToken mutation]({{page.baseurl}}/graphql/mutations/delete-payment-token.html) to remove the token. Then perform the actions described in the [PayPal Payflow Pro payment method]({{page.baseurl}}/graphql/) to generate a new token and process the order.

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) and specify the `payment_payflowpro_cc_vault_active` attribute to determine whether the Vault feature is enabled for Payflow Pro.

## Payflow Pro workflow

The following diagram shows the workflow for placing an order when Payflow Pro Vault is the selected payment method.

![PayPal Payflow Pro Vault sequence diagram]({{site.baseurl}}/common/images/graphql/paypal-payflow-pro-vault.svg)

1. Use the [`customerPaymentTokens`]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html) query to retrieve the payment tokens the customer has stored in the vault.

1. Magento returns an array of payment tokens.

1. The client renders the token information, and the customer selects a payment method.

   When the customer selects a stored payment method, the PWA uses the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation to set the payment method to `payflowpro_cc_vault`. The vaulted public hash is passed in the [`payflowpro_cc_vault`](#payflowpro_cc_vault) object.

1. Magento returns a `Cart` object.

1. The client runs the [`placeOrder`]({{page.baseurl}}/graphql/mutations/place-order.html) mutation.

1. Magento sends an authorization request to the gateway.

1. The gateway sends the response to Magento.

1. Magento creates an order and sends an order ID in response to the `placeOrder` mutation.

## Additional Payment information

When you set the payment method to Payflow Pro Vault in the [`setPaymentMethodOnCart`]({{page.baseurl}}/graphql/mutations/set-payment-method.html) mutation, the `payment_method` object must contain a `payflowpro_cc_vault` object, which contains the customer's public hash.

### payflowpro_cc_vault attributes {#payflowpro_cc_vault}

The `payflowpro_cc_vault` object must contain the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`public_hash` | String! | The public hash of the payment token

### Example usage

The following example shows the `setPaymentMethodOnCart` mutation constructed for the Payflow Pro payment method.

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
    cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
    payment_method: {
      code: "payflowpro_cc_vault"
      payflowpro_cc_vault: {
          public_hash: "<public-hash-value>"
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

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "payflowpro_cc_vault"
        }
      }
    }
  }
}
```
