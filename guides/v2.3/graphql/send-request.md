---
group: graphql
title: GraphQL requests
---

In Magento 2.3.1, you must send all queries and mutations as HTTP POST requests. 

## Request headers

Magento accepts the following headers in a GraphQL request:

Header name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <authorization_token>` | A customer token. [Get customer authorization token]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) describes how to generate the token.
`Content-Type` | `application/json` | Required for all POST requests.
`Store` | `<store_code>` | The store code on which to perform the request. The value can be `default` or the store code that is defined when a store view is created.