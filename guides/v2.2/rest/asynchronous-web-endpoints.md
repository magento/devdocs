---
group: rest-api
title: Asynchronous web endpoints
ee_only: True
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
functional_areas:
  - Integration
---

An asynchronous web endpoint intercepts messages to a Web API and writes them to the message queue. Each time the system accepts such an API request, it generates a UUID identifier. Magento includes this UUID when it adds the message to the queue. Then, a consumer reads the messages from the queue and executes them one-by-one.

{:.bs-callout .bs-callout-tip}
Use the `bin/magento queue:consumers:start async.operations.all` command to start the consumer that handles asynchronous and bulk API messages.

Magento supports the following types of asynchronous requests:

* POST
* PUT
* PATCH

{:.bs-callout .bs-callout-info}
GET and DELETE requests are not supported. Although Magento does not currently implement any PATCH requests, they are supported in custom extensions.

The route to all asynchronous calls contains the prefix `/async`, added before `/V1` of a standard synchronous endpoint. For example:

```
POST /async/V1/products
PUT /async/V1/products/:sku
```

{{site.data.var.ce}} and {{site.data.var.ee}} installations support asynchronous web endpoints.

The [REST API documentation](https://devdocs.magento.com/redoc/2.3/) provides a list of all current synchronous Magento API routes.

The response of an asynchronous request contains the following fields:

Field name | Data type | Description
--- | --- | ---
`bulk_uuid` | String | A generated universally unique identifier.
`request_items` | Object | An array containing information about the status of the asynchronous request.
`id` | Integer | A generated ID that identifies the request.
`data_hash` | String | Reserved for future use. Currently, the value is always `null`.
`status` | String | Reserved for future use. Currently, the value is always `accepted`.
`errors` | Boolean | Reserved for future use. Currently, the value is always `false`. If an error occurs, the system provides all error-related information as a standard `webapi` exception.

## Sample usage

The following call asynchronously changes the price of the product that has a `sku` of `24-MB01`:

PUT <host>/rest/<store_code>/async/V1/products/24-MB01

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
            "data_hash": null,
            "status": "accepted"
        }
    ],
    "errors": false
}
```

