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

Bulk API is a special type of API endpoint, which combines multiple entities of the same type as an array and uses it for the single API request. The endpoint handler splits the array into individual entities and writes them as separate messages to the Message Queue.

The route to all bulk calls contains the prefix `/async/bulk`, added before `/V1` of a standard synchronous endpoint. For example:

```
POST /async/bulk/V1/products
PUT /async/bulk/V1/products/bySku
DELETE /async/bulk/V1/products/bySku
```

GET requests are not supported.

Body of those requests will look like this: 

```
[{
  "product": {...}
 },
 {
  "product": {...}
 }…. ]
```

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

#### Parameters in URL


Magento Rest API also have different PUT and DELETE requests that contains additional paramethers in endpoints. 
 
Example: 

```
PUT /V1/product/:sku/options/:optionId
```

To process those requests correctly, those parameters have to be converted so that parameters like “sku” and “optionId” are not required as input.

For all bulk requests, the URL path have to be changed in a way, that the colon “:” have to be replaced with the prefix “by”

```
PUT /async/bulk/V1/product/bySku/options/byOptionId
```

You can use generated `bulkUuid` as the key for request your [operation status]({{ page.baseurl }}/rest/operation-status-endpoints.html) later. 

{{site.data.var.ce}} and {{site.data.var.ee}} installations support bulk api web endpoint.



