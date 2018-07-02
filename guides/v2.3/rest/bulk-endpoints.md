---
group: rest
title: Bulk endpoints
version: 2.3
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
github_link: rest/bulk-endpoints.md
functional_areas:
  - Integration
---

Bulk API endpoints differ from other endpoints in that they combine multiple calls of the same type as an array and execute them as a single request. The endpoint handler splits the array into individual entities and writes them as separate messages to the message queue.

{%
include note.html
type='info'
content='GET requests are not supported.'
%}

### Routes

To call a bulk endpoint, add the prefix `/async/bulk` before the `/V1` of a synchronous endpoint route. For example:

```
POST /async/bulk/V1/products
POST /async/bulk/V1/customers
```

Endpoint routes that contain input parameters require additional changes. For example `PUT /V1/product/:sku/options/:optionId` contains the `:sku` and `:optionId` input parameters. To process these requests correctly, you must change the route so that it does not contain any input parameters. To do this, replace the ` (:) with `by` and change the first letter of the parameter to uppercase. 

 
The following table provides several examples:
 
Synchronous route | Bulk route
--- | ---
`PUT /V1/product/:sku/options/:optionId` | `PUT /V1/product/bySku/options/byOptionId`
`POST /V1/carts/:quoteId/items` | `POST async/bulk/V1/carts/byQuoteId/items`
`DELETE /V1/customers/:customerId` | `DELETE async/bulk/V1/customers/byCustomerId`


### Payloads

The payload of a bulk request contains an array of request bodies. For example, the payload for `POST /async/bulk/V1/products` would be structured as follows: 

```
[{
  "product": 
     {...}
 },
 {
  "product": 
     {...}
 }
 ]
```

### Responses

The response contains a list of operations statuses

```
{
  "bulk_uuid": “GENERATED UUID",
  "request_items": {
    "items": [
      {
        "id": 0,
        "data_hash": null,
        "status": "string"
      },
      {
        "id": 1,
        "data_hash": null,
        "status": "string"
      }
    ]
  }
}
```


