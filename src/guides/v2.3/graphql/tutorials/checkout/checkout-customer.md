---
layout: tutorial
group: graphql
title: Step 1. Create a customer
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 10
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Customers can make purchases in two ways:

*  As a logged-in user
*  As a guest user who does not create an account

To place order as a new customer, use the `createCustomer` mutation to register the new customer account in the store.

{:.bs-callout-info}
Skip this step if you want to place order as a guest user.

**Request:**

```text
mutation {
  createCustomer(
    input: {
      firstname: "John"
      lastname: "Doe"
      email: "john.doe@example.com"
      password: "b1b2b3l@w+"
      is_subscribed: true
    }
  ) {
    customer {
      id
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": 6,
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "is_subscribed": true
      }
    }
  }
}
```

["Customer endpoint"]({{ page.baseurl }}/graphql/mutations/create-customer.html) describes additional `createCustomer` parameters.

To place an order as a new customer, you must get the customer's authorization token. Use the `generateCustomerToken` mutation for that.

**Request:**

```text
mutation {
  generateCustomerToken(email: "john.doe@example.com", password: "b1b2b3l@w+") {
    token
  }
}
```

**Response:**

```json
{
  "data": {
    "generateCustomerToken": {
      "token": "zuo7zor5jfldft2nmu2gtylnm8ui7e8t"
    }
  }
}
```

["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) describes the mutation further.

## Verify this step {#verify-step}

Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`. You should be successfully logged in.
