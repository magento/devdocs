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

This step creates a customer account and generates an authentication token for that customer. You can skip this step if you want to perform this tutorial as a guest user.

## Create a customer

Use the `createCustomer` mutation to register the new customer account in the store.

**Request:**

```graphql
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
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "is_subscribed": true
      }
    }
  }
}
```

The [`createCustomer`]({{ page.baseurl }}/graphql/mutations/create-customer.html) mutation describes additional parameters.

## Generate an authentication token for the customer

To place an order as a customer, you must obtain an authorization token by calling the `generateCustomerToken` mutation. You must include the customer's email and password as input.

**Request:**

```graphql
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

## Specify an Authorization header

To send requests on behalf of the customer, you must supply the generated token as a header in your GraphQL browser.
The name of the header is `Authorization` and the value is `Bearer <token>`.

[Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) describes the mutation further.

## Verify this step {#verify-step}

Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`. You should be successfully logged in.
