---
group: rest-api
title: Asynchronous web endpoints
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
functional_areas:
  - Integration
---

An asynchronous web endpoint intercepts messages to a Web API and writes them to the message queue. Each time the system accepts such an API request, it generates a UUID identifier. Magento includes this UUID when it adds the message to the queue. Then, a consumer reads the messages from the queue and executes them one-by-one.

{:.bs-callout-tip}
Use the `bin/magento queue:consumers:start async.operations.all` command to start the consumer that handles asynchronous and bulk API messages.

Magento supports the following types of asynchronous requests:

*  POST
*  PUT
*  DELETE
*  PATCH

{:.bs-callout-info}
GET requests are not supported. Although Magento does not currently implement any PATCH requests, they are supported in custom extensions.

The route to all asynchronous calls contains the prefix `/async`, added before `/V1` of a standard synchronous endpoint. For example:

```http
POST /async/V1/products
PUT /async/V1/products/:sku
```

{{site.data.var.ce}} and {{site.data.var.ee}} installations support asynchronous web endpoints.

The [REST API documentation]({{site.baseurl}}/redoc/{{page.guide_version}}/) provides a list of all current synchronous Magento API routes.

The response of an asynchronous request contains the following fields:

Field name | Data type | Description
--- | --- | ---
`bulk_uuid` | String | A generated universally unique identifier.
`request_items` | Object | An array containing information about the status of the asynchronous request.
`id` | Integer | A generated ID that identifies the request.
`data_hash` | String | SHA256 encoded content of incoming message.
`status` | String | Reserved for future use. Currently, the value is always `accepted`.
`errors` | Boolean | Reserved for future use. Currently, the value is always `false`. If an error occurs, the system provides all error-related information as a standard `webapi` exception.

## Sample usage

The following call asynchronously changes the price of the product that has a `sku` of `24-MB01`:

```http
PUT <host>/rest/<store_code>/async/V1/products/24-MB01
```

## Payload

```json
{
  "product": {
    "price": 29
  }
}
```

## Response

Magento generates a `bulk_uuid` for each asynchronous request. Use the `bulk_uuid` to determine the [operation status]({{ page.baseurl }}/rest/operation-status-endpoints.html) of your request.

```json
{
    "bulk_uuid": "fbfca270-7a90-4c4e-9f32-d6cf3728cdc7",
    "request_items": [
        {
            "id": 0,
            "data_hash": "9c1bd4bfd8defcc856ddf129cc01d172625d139d5f7dcf53b6cb09a0e9a843a3",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Store scopes

You can specify a store code in the route of an asynchronous endpoint so that it operates on a specific store, as shown below:

```http
POST /<store_code>/async/V1/products
PUT /<store_code>/async/V1/products/:sku
```

As a result, the asynchronous calls update the products on the specific store, instead of the default store.

You can specify the `all` store code to perform operations on all existing stores:

```http
POST /all/async/V1/products
PUT /all/async/V1/products/:sku
```

### Fallback and creating/updating objects when setting store scopes

The following rules apply when you create or update an object, such as a product.

*  If you do not set the store code while creating a new product, Magento creates a new object with all values set globally for each scope.
*  If you do not set the store code while updating a product, then by fallback, Magento updates values for the default store only.
*  If you include the `all` parameter, then Magento updates values for all store scopes (in case a particular store doesn't yet have its own value set).
*  If `<store_code>` parameter is set, then values for only defined store will be updated.
