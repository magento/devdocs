---
group: graphql
title: GraphQL requests
---

Magento GraphQL supports the HTTP GET and POST methods. You can send a query as a GET or POST request. GET requests can be cached, although Magento does not currently support this feature. Mutations must be POST requests.

You can optionally send a GET query request in a URL. In these requests, you must specify `query` as the query string. You might need to encode the query, as shown below:  

`http://<host>/graphql?query=%7Bproducts(filter%3A%7Bsku%3A%7Blike%3A%2224-WB%25%22%7D%7D)%7Bitems%7Bsku%7D%7D%7D`

The previous example is equivalent to the following query. You could send the query as either a GET or POST request,

```text
{
  products(
    filter: { sku: { like: "24-WB%" } }
  ) {
    items {
      sku
    }
  }
}
```

## Request headers

Magento accepts the following headers in a GraphQL request:

Header name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <authorization_token>` | A customer token. [Get customer authorization token]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) describes how to generate the token.
`Content-Type` | `application/json` | Required for all requests.
`Store` | `<store_code>` | The store code on which to perform the request. The value can be `default` or the store code that is defined when a store view is created.