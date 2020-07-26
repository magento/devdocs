---
layout: tutorial
group: graphql
title: Step 1. Generate the customer token
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 10
functional_areas:
  - Integration
---

This step generates an authentication token for the customer defined in the [Order Processing with Inventory Management]({{page.baseurl}}/rest/tutorials/inventory/index.html) tutorial.

Use the `generateCustomerToken` mutation to generate the token. You must include the customer's email and password as input.

**Headers:**

`Store: default`

**Request:**

```text
mutation {
  generateCustomerToken(email: "jdoe@example.com", password: "Password1") {
    token
  }
}
```

**Response:**

```json
{
  "data": {
    "generateCustomerToken": {
      "token": "zhcg02vmrd88jsz0m08pxuo9yxp61e71"
    }
  }
}
```

[Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) describes the mutation further.

## Verify this step {#verify-step}

Sign in as a customer to the website using the email `jdoe@example.com` and password `Password1`. You should be successfully logged in.
