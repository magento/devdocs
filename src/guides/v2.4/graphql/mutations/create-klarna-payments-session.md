---
group: graphql
title: createKlarnaPaymentsSession mutation
contributor_name: Klarna
contributor_link: https://www.klarna.com/
---

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
      "client_token": "1yJhbGciOiJSUzI1NiIsImtpZCI6IjgyMzA1ZWJjLWI4MTEtMzYzNy1hYTRjLTY2ZWNhMTg3NGYzZCJ9.ewogICJzZXNzaW9uX2lkIiA6ICJkY2FiZDBmNy1iNTc2LTE5MzUtODQxMC1jNjM0YjE1OGU2YTciLAogICJiYXNlX3VybCIgOiAiaHR0cHM6Ly9rbGFybmEtcGF5bWVudHMtbmEucGxheWdyb3VuZC5rbGFybmEuY29tL3BheW1lbnRzIiwKICAiZGVzaWduIiA6ICJrbGFybmEiLAogICJsYW5ndWFnZSIgOiAiZW4iLAogICJwdXJjaGFzZV9jb3VudHJ5IiA6ICJVUyIsCiAgInRyYWNlX2Zsb3ciIDogZmFsc2UsCiAgImVudmlyb25tZW50IiA6ICJwbGF5Z3JvdW5kIiwKICAibWVyY2hhbnRfbmFtZSIgOiAiTjEwMDAyMiIsCiAgInNlc3Npb25fdHlwZSIgOiAiUEFZTUVOVFMiLAogICJjbGllbnRfZXZlbnRfYmFzZV91cmwiIDogImh0dHBzOi8vbmEucGxheWdyb3VuZC5rbGFybmFldnQuY29tIiwKICAiZXhwZXJpbWVudHMiIDogWyBdCn0.Qpjp1BfnDLr698A0W3vfW7--6GrDv-gT0mnmLVivAPK40Sxbcmf3eWzL-KR7YfaDVjgaOF3Xgs64pWs6Yg-RM01daVtwfkd84VK8ihQuTe8R2BUeG2l8-c_SV5lNyDxXRJV4AEvZwaqkS5WIFO2GDDUNM6q6OhX9SdxX116BKna72gSh4seXxFqGjCB91gUmtC1MFCLZpnRqjzMgDQUUajVY6ggYuBxN22ybKQaHTXSGrZZxcy0Q3hVD-FN4Wg04acdb8SgmYeLvnsLXZMsnWdaoslQAglIgJVyxarWzX_aCCft67kHR9fTfU055DHEcxqdb5GpOXh5ZALEgm0Dqw",
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

### createKlarnaPaymentsSessionInput

## Output attributes

### createKlarnaPaymentsSessionOutput

## Errors

Error | Description
--- | ---
`The Klarna payment method is not active.` | The [Klarna](https://docs.magento.com/user-guide/payment/klarna.html) payment method is disabled in admin.
