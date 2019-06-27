---
group: graphql
title: handlePayflowProResponse mutation
---

The `handlePayflowProResponse` mutation 

See [Paypal Payflow Pro payment method]({{page.baseurl}}/graphql/payment-methods/payflow-pro.html) for detailed information about the workflow of PayPal Payflow Pro transactions.

## Syntax

`handlePayflowProResponse(input: PayflowProResponseInput!): PayflowProResponseOutput`

## Example

The following example
 in a Payflow Pro transaction.

**Request**

```text

```

**Response**

```json

```

## Input attributes

### PayflowProResponseInput

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`paypal_payload` | String! | 

## Output attributes

### PayflowProResponseOutput

### Cart object {#CartObject}

{% include graphql/cart-object.md %}

[Cart query output]({{page.baseurl}}/graphql/reference/quote.html#cart-output) provides more information about the `Cart` object.
