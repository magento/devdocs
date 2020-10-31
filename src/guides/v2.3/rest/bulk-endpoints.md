---
group: rest-api
title: Bulk endpoints
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
functional_areas:
  - Integration
---

Bulk API endpoints differ from other REST endpoints in that they combine multiple calls of the same type into an array and execute them as a single request. The endpoint handler splits the array into individual entities and writes them as separate messages to the message queue.

{:.bs-callout-info}
Use the [`bin/magento queue:consumers:start async.operations.all`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-queue.html) command to start the consumer that handles asynchronous and bulk API messages. Also, before using the Bulk API to process messages, you must install and configure RabbitMQ, which is the default message broker. See [RabbitMQ]({{ page.baseurl }}/install-gde/prereq/install-rabbitmq.html).

## Routes

To call a bulk endpoint, add the prefix `/async/bulk` before the `/V1` of a synchronous endpoint route. For example:

```http
POST /async/bulk/V1/products
POST /async/bulk/V1/customers
```

Endpoint routes that contain input parameters require additional changes. For example, `PUT /V1/products/:sku/media/:entryId` contains the `:sku` and `:entryId` input parameters. The route of a bulk request cannot contain input parameters, so you must change the route so that it does not contain any. To do this, replace the colon (`:`) with `by` and change the first letter of the parameter to uppercase.

The following table provides several examples:

Synchronous route | Bulk route
--- | ---
`PUT /V1/products/:sku/media/:entryId` | `PUT async/bulk/V1/products/bySku/media/byEntryId`
`POST /V1/carts/:quoteId/items` | `POST async/bulk/V1/carts/byQuoteId/items`

{:.bs-callout-info}
GET requests are not supported.

## Payloads

The payload of a bulk request contains an array of request bodies. For example, the minimal payload for creating four customers with `POST /async/bulk/V1/customers` would be structured as follows:

```json
[{
    "customer": {
        "email": "mshaw@example.com",
        "firstname": "Melanie Shaw",
        "lastname": "Doe"
    },
    "password": "Strong-Password"
},
{
    "customer": {
        "email": "bmartin@example.com",
        "firstname": "Bryce",
        "lastname": "Martin"
    },
    "password": "Strong-Password"
},
{
    "customer": {
        "email": "bmartin@example.com",
        "firstname": "Bryce",
        "lastname": "Martin"
    },
    "password": "Strong-Password"
},
{
    "customer": {
        "email": "tgomez@example.com",
        "firstname": "Teresa",
        "lastname": "Gomez"
    },
    "password": "Strong-Password"
}
]
```

{:.bs-callout-tip}
The second and third requests are duplicates.

## Responses

The response contains an array that indicates whether the call successfully added each request to the message queue. Although the duplicated request to create a customer will fail, Magento added it to the message queue successfully.

```json
{
    "bulk_uuid": "799a59c0-09ca-4d60-b432-2953986c1c38",
    "request_items": [
        {
            "id": 0,
            "data_hash": "3d3d853839dd442d0b99a1badea756a03f19ffb0fb7aab672c05f83d5a914181",
            "status": "accepted"
        },
        {
            "id": 1,
            "data_hash": "bf8859d03545f0fa80084a47348a629cdf571fc064b952e7396c338d5cf3bf6e",
            "status": "accepted"
        },
        {
            "id": 2,
            "data_hash": "876f3f2e4b226d54dcbf3f5ce752a9f748a45310261d2dd5cc7a7c9ef74b4369",
            "status": "accepted"
        },
        {
            "id": 3,
            "data_hash": "9c1bd4bfd8defcc856ddf129cc01d172625d139d5f7dcf53b6cb09a0e9a843a3",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## DELETE requests

The following call asynchronously deletes CMS blocks with IDs `1` and `2`:

```http
DELETE <host>/rest/async/bulk/V1/cmsPage/byPageId
```

### DELETE request payload

```json
[
    {
        "page_id": "1"
    },
    {
        "page_id": "2"
    }
]
```

## Store scopes

You can specify a store code in the route of an asynchronous endpoint so that it operates on a specific store, as shown below:

```http
POST /<store_code>/async/bulk/V1/products
PUT /<store_code>/async/bulk/V1/products/bySku
```

As a result, the asynchronous calls update the products on the specific store, instead of the default store.

You can specify the `all` store code to perform operations on all existing stores:

```http
POST /all/async/bulk/V1/products
PUT /all/async/bulk/V1/products/bySku
```

## Fallback and creating/updating objects when setting store scopes

The following rules apply when you create or update an object, such as a product.

*  If you do not set the store code while creating a new product, Magento creates a new object with all values set globally for each scope.
*  If you do not set the store code while updating a product, then by fallback, Magento updates values for the default store only.
*  If you include the `all` parameter, then Magento updates values for all store scopes (in case a particular store doesn't yet have its own value set).
*  If `<store_code>` parameter is set, then values for only defined store will be updated.
