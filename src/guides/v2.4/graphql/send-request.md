---
group: graphql
title: GraphQL requests and headers
---

Magento GraphQL supports the HTTP GET and POST methods. You can send a query as a GET or POST request. Mutations must be POST requests. You can optionally send a GET query request in a URL. In these requests, you must specify `query` as the query string. You might need to encode the query, as shown below:

`http://<host>/graphql?query=%7Bproducts(filter%3A%7Bsku%3A%7Beq%3A%2224-WB01%22%7D%7D)%7Bitems%7Bname%20sku%7D%7D%7D`

The previous example is equivalent to the following query. You could send the query as either a GET or POST request,

**Request:**

```text
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

```text
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
`Preview-Version` | A timestamp (seconds since January 1, 1970). Use this header to query products, categories, price rules, and other entities that are scheduled to be in a campaign (staged content). Staging is supported in {{site.data.var.ee}} only.
`Store` | `<store_view_code>` | The store view code on which to perform the request. The value can be `default` or the code that is defined when a store view is created.

### Specify request headers in a GraphQL browser

GraphQL browsers, such as GraphiQL, allow you to enter a set of header name/value pairs. The following example shows an example customer authorization token and content type headers.

![GraphiQL Authorization Bearer]({{site.baseurl}}/common/images/graphql/graphql-authorization.png)

### Specify request headers with the `curl` command

Use the curl command with a separate `-H` argument to specify each request header. The following example uses the same request headers as those used in the GraphQL browser.

```bash
curl 'http://magento.config/graphql' -H 'Authorization: Bearer hoyz7k697ubv5hcpq92yrtx39i7x10um' -H 'Content-Type: application/json'  --data-binary '{"query":"query {\n  customer {\n    firstname\n    lastname\n    email\n  }\n}"}'
```

## CORS support

Best security practices do not permit a browser to access assets on resources beyond the current website, unless additional security is provided. For example, your PWA storefront might need to load images, fonts, or other data that are hosted on another domain. Without the extra security,the browser will not allow it. Cross-Origin Resource Sharing (CORS) is a set of security policies that grant permission to retrieve assets in other domains. When you implement CORS, your client application uses specific HTTP headers to request permission from Magento to access external assets. When Magento grants access, it sends a corresponding set of HTML headers that the browser honors, thereby allowing your client application to retrieve the external assets.

With CORS, the client generates preflight requests to determine whether the server understands CORS requests. The browser uses an `OPTIONS` request to pass values for the `Origin`, `Access-Control-Request-Headers`, and `Access-Control-Request-Method` headers. Magento returns values in the `Access-Control-Allow-Origin`, `Access-Control-Allow-Headers`, and `Access-Control-Allow-Methods`. If these response headers are properly configured, the browser allows the request to access external assets.

CORS is not enabled by default on Magento. To enable it, in the Admin set **Stores** > Configuration > **Services** > **GraphQL** > **CORS Headers Enabled** to **Yes**. Configure the fields as needed to allow browser access to external assets. See [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for information about the CORS architecture and details about HTTP headers.
