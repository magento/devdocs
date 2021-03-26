---
group: graphql
title: GraphQL requests
---

Magento GraphQL supports the HTTP GET and POST methods. You can send a query as a GET or POST request. Mutations must be POST requests. You can optionally send a GET query request in a URL. In these requests, you must specify `query` as the query string. You might need to encode the query, as shown below:

`http://<host>/graphql?query=%7Bproducts(filter%3A%7Bsku%3A%7Beq%3A%2224-WB01%22%7D%7D)%7Bitems%7Bname%20sku%7D%7D%7D`

The previous example is equivalent to the following query. You could send the query as either a GET or POST request.

**Request:**

```graphql
{
  products(
    filter: { sku: { eq: "24-WB01" } }
  ) {
    items {
      name
      sku
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Voyage Yoga Bag",
          "sku": "24-WB01"
        }
      ]
    }
  }
}
```

Some queries sent as a GET request can be cached. See [GraphQL caching]({{page.baseurl}}/graphql/caching.html) for more information.

## Request headers {#headers}

Magento accepts the following headers in a GraphQL request:

Header name | Value | Description
--- | --- | ---
`Authorization` | `Bearer <authorization_token>` | A customer or admin token. [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) describes how to generate tokens.
`Content-Currency` | A valid currency code, such as `USD` | This header is required only if the currency is not the store view's default currency.
`Content-Type` | `application/json` | Required for all requests.
`Preview-Version` | A timestamp (seconds since January 1, 1970). | Use this header to query products, categories, price rules, and other entities that are scheduled to be in a campaign (staged content). Staging is supported in {{site.data.var.ee}} only.
`Store` | `<store_view_code>` | The store view code on which to perform the request. The value can be `default` or the code that is defined when a store view is created.
`X-Captcha` | Shopper-entered CAPTCHA value | Required when a shopper enters a CAPTCHA value on the frontend, unless an integration token is provided. Forms requiring CAPTCHA values are configured at **Stores** > **Configuration** > **Customers** > **Customer Configuration** > **CAPTCHA** > **Forms**.

### Specify request headers in a GraphQL browser

GraphQL browsers, such as GraphiQL, allow you to enter a set of header name/value pairs. The following example shows an example customer authorization token and content type headers.

![GraphiQL Authorization Bearer]({{site.baseurl}}/common/images/graphql/graphql-authorization.png)

### Specify request headers with the `curl` command

Use the curl command with a separate `-H` argument to specify each request header. The following example uses the same request headers as those used in the GraphQL browser.

```bash
curl 'http://magento.config/graphql' -H 'Authorization: Bearer hoyz7k697ubv5hcpq92yrtx39i7x10um' -H 'Content-Type: application/json'  --data-binary '{"query":"query {\n  customer {\n    firstname\n    lastname\n    email\n  }\n}"}'
```
