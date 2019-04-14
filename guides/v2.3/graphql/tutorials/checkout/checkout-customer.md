---
layout: tutorial
group: graphql
title: Step 1. Define customer
subtitle: GraphQl checkout tutorial
return_to:
  title: GraphQl checkout tutorial
  url: graphql/tutorials/index.html
menu_order: 1
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Customers can make purchases in two ways:
- As a logged-in user
- As a guest user who does not create an account

If you want to place order as guest then skip this step.

If you want to place order as a new customer then you should use `createCustomer` mutation to register new customer in the store.

**Request**
```text
mutation {
  createCustomer(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
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
        "id": 5,
        "firstname": "Bob",
        "lastname": "Loblaw",
        "email": "bobloblaw@example.com",
        "is_subscribed": true
      }
    }
  }
}
```

Check this ["Customer endpoint"]({{ page.baseurl }}/graphql/reference/customer.html#create-a-customer) page to get the additional information.

If you want to place order as a new customer or a registered customer then you should get customer's authorization token. Use `generateCustomerToken` mutation for that.
**Request**
```text
mutation {
  generateCustomerToken(email: "bobloblaw@example.com", password: "b0bl0bl@w") {
    token
  }
}
``` 

**Response**
```json
{
   "data": {
     "generateCustomerToken": {
       "token": "hoyz7k697ubv5hcpq92yrtx39i7x10um"
     }
   }
 }
``` 

See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) topic to get more details.
