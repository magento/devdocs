---
group: graphql
title: Get customer authorization token
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

To successfully retrieve information about a specific customer using GraphQL, you need to provide the customer's authorization token.

The following example shows how to retrieve a customer's authorization token:

**Request:**

```text
mutation {
  generateCustomerToken(email: "customer@example.com", password: "password") {
    token
  }
}
```

**Response:**

```json
 {
   "data": {
     "generateCustomerToken": {
       "token": "hoyz7k697ubv5hcpq92yrtx39i7x10um"
     }
   }
 }
```

You can now use this token in the Authorization request header field for any queries and mutations.

![GraphiQL Authorization Bearer]({{ page.baseurl }}/graphql/images/graphql-authorization.png)

If necessary, you also can [revoke the customer's token]({{ page.baseurl }}/graphql/mutations/revoke-customer-token.html).
