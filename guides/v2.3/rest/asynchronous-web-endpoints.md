---
group: rest
title: Asynchronous web endpoints
version: 2.3
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
github_link: rest/asynchronous-web-endpoints.md
functional_areas:
  - Integration
---

An asynchronous web endpoint intercepts messages to a Web API and writes them to the message queue. Each time the system accepts such an API request, it generates a UUID identifier. Magento includes this UUID when it adds the message to the queue. Then, a consumer reads the messages from the queue and executes them one-by-one.

Magento supports the following types of asynchronous requests:

* POST
* PUT
* DELETE
* PATCH

GET requests are not supported. Although Magento does not currently implement any PATCH requests, they are supported in custom extensions.


The route to all asynchronous calls contains the prefix `/async`, added before `/V1` of a standard synchronous endpoint. For example:

```
POST /async/V1/products
PUT /async/V1/products/{sku}
DELETE /async/V1/products/{sku}
```

{{site.data.var.ce}} and {{site.data.var.ee}} installations support asynchronous web endpoint.

The [Swagger documentation]({{ site.baseurl }}/swagger/index.html) provides a list of all current Magento API routes.

#### Response

Response of any Asynchronous request looks like: 

```
{
  "bulk_uuid": "GENERATED UUID,
  "request_items": {
    "items": [
      {
        "id": 0,
        "data_hash": null,
        "status": "string"
      }
    ]
  }
}
```

`bulkUuid` will be generated each time Asynchronous request is executed. 

You can use generated `bulkUuid` as the key for request your [operation status]({{ page.baseurl }}/rest/operation-status-endpoints.html) later. 