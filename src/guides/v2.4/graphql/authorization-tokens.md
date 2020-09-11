---
group: graphql
title: Authorization tokens
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_from:
  - /guides/v2.4/graphql/get-customer-authorization-token.html
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

You can now use this token in the Authorization request header field for any queries and mutations.

![GraphQL Authorization Bearer]({{site.baseurl}}/common/images/graphql/graphql-authorization.png)

If necessary, you also can [revoke the customer's token]({{ page.baseurl }}/graphql/mutations/revoke-customer-token.html

## Admin tokens

In Magento GraphQL, you specify an admin token only if you need to query products, categories, price rules, or other entities that are scheduled to be in a campaign (staged content). Staging is supported in {{site.data.var.ee}} only. See [Staging queries]({{page.baseurl}}/graphql/queries/index.html#staging) for more information.

Magento does not provide a GraphQL mutation that generates an admin token. You must use a REST endpoint such as `POST /V1/tfa/provider/google/authenticate` instead. [Generate the admin token]({{page.baseurl}}/rest/tutorials/prerequisite-tasks/create-admin-token.html) shows how to use this endpoint.
