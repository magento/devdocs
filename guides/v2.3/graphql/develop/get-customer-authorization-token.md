---
group: graphql
title: Get customer authorization token
---

To successfully retrieve information about a specific customer using GraphQL, you need to provide the customer's authentication token.

The following example shows how to retrieve a customer's authorization token:

**Request**

```text
mutation {
  generateCustomerToken(email: "customer@example.com", password: "password") {
    token
  }
}
```

**Response**

```text
 {
   "data": {
     "generateCustomerToken": {
       "token": "c9l4ihcgs45kz2c8h7bb2jp4mzyzz7q0"
     }
   }
 }
```

You can now use this token in the Authorization request header field for any queries and mutations.

![GraphiQL Authorization Bearer]({{ page.baseurl }}/graphql/images/graphql-authorization.png)

If necessary, you also can [revoke the customer's token]({{ page.baseurl }}/graphql/reference/customer.html#revoke-a-customer-token).
