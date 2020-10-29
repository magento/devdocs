---
group: graphql
title: createKlarnaPaymentsSession mutation
contributor_name: Klarna
contributor_link: https://www.klarna.com/
---

The `createKlarnaPaymentsSession` mutation initiates a Klarna session. You can create a session at any time before you display the available payment methods, but ideally, the cart would already contain products, the billing address, shipping address, and shipping method. If the cart changes afterward, you must run the mutation again to ensure that the latest payment methods are made available to the shopper. Factors such as the cart contents, the shipping and billing addresses, and the grand total after applying coupons can determine the payment methods Klarna offers.

The mutation response includes an array of payment method categories. When the shopper selects a Klarna payment method, prepend the string `klarna_` to the selected `identifer`, and use the resulting string as the `payment_method.code` value in the subsequent `setPaymentMethodOnCart` mutation. For example, if the shopper selects the "Pay later in 30 days" payment method, the `identifier` value is `pay_later`, and the `payment_method.code` value is `klarna_pay_later`.

The response also contains a client token. You must also supply this value in the `setPaymentMethodOnCart` mutation.

[Klarna payment method]({{page.baseurl}}/graphql/payment-methods/klarna.html) provides additional information about the workflow of Klarna transactions.

## Syntax

```graphql
mutation {
  createKlarnaPaymentsSession(
    input: createKlarnaPaymentsSessionInput!
  ) {
    createKlarnaPaymentsSessionOutput
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  createKlarnaPaymentsSession(
    input: {
      cart_id: "VaP2GtqImwsTEXEf7azrh4vopebXp8gl"}
  ) {
    client_token
    payment_method_categories {
      identifier
      name
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createKlarnaPaymentsSession": {
      "client_token": "<token_value>",
      "payment_method_categories": [
        {
          "identifier": "pay_later",
          "name": "Pay later in 30 days"
        },
        {
          "identifier": "pay_over_time",
          "name": "Buy now, pay later"
        }
      ]
    }
  }
}
```

## Input attributes

### createKlarnaPaymentsSessionInput attributes

The `createKlarnaPaymentsSessionInput` object must contain the following attribute.

Attribute | Data type | Description
--- | --- | ---
`cart_id` | String! | The masked ID that identifies the shopper's cart

## Output attributes

### createKlarnaPaymentsSessionOutput attributes

The `createKlarnaPaymentsSessionOutput` object can contain the following attributes.

Attribute | Data type | Description
--- | --- | ---
`client_token` |  String | The payment method client token
`payment_method_categories` | [Categories] | An array of payment method categories

### Categories attributes

The `Categories` object can contain the following attributes.

Attribute | Data type | Description
--- | --- | ---
`asset_urls` | [Assets] | The payment method assets
`identifier` | String! | The payment method identifier
`name` | String! | The payment method name

### Assets attributes

The `Assets` object can contain the following attributes.

Attribute | Data type | Description
--- | --- | ---
`descriptive` | String | The payment method logo url (descriptive)
`standard` | String | The payment method logo url (standard)

## Errors

Error | Description
--- | ---
`The Klarna payment method is not active.` | The [Klarna](https://docs.magento.com/user-guide/payment/klarna.html) payment method is disabled in admin.
