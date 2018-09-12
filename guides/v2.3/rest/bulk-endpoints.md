---
group: rest-api
title: Bulk endpoints
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
functional_areas:
  - Integration
---

Bulk API endpoints differ from other endpoints in that they combine multiple calls of the same type into an array and execute them as a single request. The endpoint handler splits the array into individual entities and writes them as separate messages to the message queue.

{:.bs-callout .bs-callout-tip}
GET requests are not supported.

### Routes

To call a bulk endpoint, add the prefix `/async/bulk` before the `/V1` of a synchronous endpoint route. For example:

```
POST /async/bulk/V1/products
POST /async/bulk/V1/customers
```

Endpoint routes that contain input parameters require additional changes. For example, `PUT /V1/product/:sku/options/:optionId` contains the `:sku` and `:optionId` input parameters. The route of a bulk request cannot contain input parameters, so you must change the route so that it does not contain any. To do this, replace the colon (`:`) with `by` and change the first letter of the parameter to uppercase. 

 
The following table provides several examples:
 
Synchronous route | Bulk route
--- | ---
`PUT /V1/product/:sku/options/:optionId` | `PUT /V1/product/bySku/options/byOptionId`
`POST /V1/carts/:quoteId/items` | `POST async/bulk/V1/carts/byQuoteId/items`
`DELETE /V1/customers/:customerId` | `DELETE async/bulk/V1/customers/byCustomerId`


### Payloads

The payload of a bulk request contains an array of request bodies. For example, the minimal payload for creating four customers with `POST /async/bulk/V1/customers` would be structured as follows: 

``` json
[{
	"customer": {
		"email": "mshaw@example.com",
		"firstname": "Melanie Shaw",
		"lastname": "Doe"
	}
},
{
	"customer": {
		"email": "bmartin@example.com",
		"firstname": "Bryce",
		"lastname": "Martin"
	}
},
{
	"customer": {
		"email": "bmartin@example.com",
		"firstname": "Bryce",
		"lastname": "Martin"
	}
},
{
	"customer": {
		"email": "tgomez@example.com",
		"firstname": "Teresa",
		"lastname": "Gomez"
	}
}
]
```

{:.bs-callout .bs-callout-tip}
The second and third requests are duplicates.

### Responses

The response contains an array that indicates whether the call successfully added each request to the message queue. Although the duplicated request to create a customer will fail, Magento added it to the message queue successfully.

``` json
{
    "bulk_uuid": "799a59c0-09ca-4d60-b432-2953986c1c38",
    "request_items": [
        {
            "id": 0,
            "data_hash": null,
            "status": "accepted"
        },
        {
            "id": 1,
            "data_hash": null,
            "status": "accepted"
        },
        {
            "id": 2,
            "data_hash": null,
            "status": "accepted"
        },
        {
            "id": 3,
            "data_hash": null,
            "status": "accepted"
        }
    ],
    "errors": false
}
```
