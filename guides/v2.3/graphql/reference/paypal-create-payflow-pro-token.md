---
group: graphql
title: createPayflowProToken mutation
---

The `createPayflowProToken` mutation Initiates a PayFlowPro transaction and receives a token.

See [Paypal Payflow Pro payment method]({{page.baseurl}}/graphql/payment-methods/payflow-pro.html) for detailed information about the workflow of PayPal Payflow Pro transactions.

## Syntax

`getPayflowLinkToken(input: PayflowLinkTokenInput): PayflowLinkToken`

## Example

The following example requests a token in a Payflow Pro transaction.

**Request**

```text
mutation {
    createPayflowToken(input: {
        cart_id: 123,
        code: "payflowpro",
        urls: {
            return_url: "https://www.example.com/paypal/return",
            cancel_url: "https://www.example.com/paypal/cancel",
            error_url: "https://www.example.com/paypal/error"
        }
    })
}
```

**Response**

```json

```

## Input attributes

### PayflowProTokenInput

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer's cart
`urls` | PayflowProUrlInput! | URL that PayPal uses for callback.

### PayflowProUrlInput

Attribute |  Data Type | Description
--- | --- | ---
`cancel_url` | String! | The URL of the original page on your website where the buyer initially chose PayPal as  a payment type
`error_url` | String! | The URL of the page on your website where any error in the transaction is handled
`return_url` | String! | The URL of the final review page on your website where the buyer confirms the order and payment

## Output attributes

### PayflowProToken

Attribute |  Data Type | Description
--- | --- | ---
`response_message` | String! | 
`result` | Int! |
`result_code` | Int! |
`secure_token` |  String!
`secure_token_id` | String! |
