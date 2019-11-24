---
group: graphql
title: Authorization tokens
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_from:
  - /guides/v2.3/graphql/get-customer-authorization-token.html
---

Magento provides separate token services for customers and administrators. When you request a token from one of these services, the service returns a unique access token in exchange for the username and password for a Magento account.

Magento GraphQL provides a mutation that returns a token on behalf of a logged-in customer. You must use a REST call to fetch an admin token. Use this token in the Authorization request header field for any queries and mutations. See [Request headers]({{page.baseurl}}/graphql/send-request.html#headers)

## Customer tokens

The [`generateCustomerToken` mutation]({{page.baseurl}}/graphql/mutations/generate-customer-token.html) requires the customer email address and password in the payload, as shown in the following example:

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

## Admin tokens
