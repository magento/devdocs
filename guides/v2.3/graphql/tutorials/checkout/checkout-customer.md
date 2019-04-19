---
layout: tutorial
group: graphql
title: Step 1. Define customer
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
- As a logged-in user
- As a guest user who does not create an account

{:.bs-callout .bs-callout-tip}
Skip this step if you want to place order as a guest user.

If you want to place order as a new customer use `createCustomer` mutation to register new customer in the store.

**Request**

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

**Response**

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

Check ["Customer endpoint"]({{ page.baseurl }}/graphql/reference/customer.html#create-a-customer) page to get the additional information about `createCustomer` parameters.

If you want to place order as a new customer or a registered customer then you should get customer's authorization token. Use `generateCustomerToken` mutation for that.

**Request**

```text
mutation {
  generateCustomerToken(email: "john.doe@example.com", password: "b1b2b3l@w+") {
    token
  }
}
```

**Response**

```json
{
  "data": {
    "generateCustomerToken": {
      "token": "zuo7zor5jfldft2nmu2gtylnm8ui7e8t"
    }
  }
}
```

See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) to get more details.
