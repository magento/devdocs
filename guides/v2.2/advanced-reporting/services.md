---
layout: default
group: analytics
subgroup: Advanced Reporting
title: File download
menu_title: File download
menu_order: 9
menu_node:
version: 2.2
github_link: advanced-reporting/data-collection.md
---

Magento 2 provides API for the pull link and the initialization vector.

## Request and Responses through API

**Request and response when the file has been already prepared:**

|Request|Response|
|--- |--- |
|/rest/V1/analytics/link|HTTP_CODE: 200 OK;  BODY: {"url":"http://magento.dev/pub/media/analytics/jsldjsfdkldf/data.tgz","initialization_vector":"base64encodedData"}|

**Request and response when the file has not been prepared yet:**

|Request|Response|
|--- |--- |
|/rest/V1/analytics/link|HTTP_CODE: 404 Not Found; BODY: {"message":"File is not ready yet."}|

**Request and response when 'HTTP' has been used instead of the secure 'HTTPS':**

|Request|Response|
|--- |--- |
|/rest/V1/analytics/link|HTTP_CODE: 400 Bad request; BODY: {"message":"Operation allowed only in HTTPS"}|

**Request and response when authorization has failed:**

|Request|Response|
|--- |--- |
|/rest/V1/analytics/link|HTTP_CODE: 401 Unauthorized;  BODY:{"message":"Consumer is not authorized to access %resources","parameters":{"resources":"Magento_Analytics::analytics_api"}}|

## File lifecycle

 ![File lifecycle](./docs/images/mbi_file_exchange.png)

## File decoding

The file can be decoded using any tools that support the algorithm from the [Encryption of collected data](#encryption-of-collected-data) section below.

## Web API declaration

In the declaration below, we declare a service with the secure flag. It means that we allow only HTTPS connections to this service. Also, an API user must have permissions to use the Analytics API.

```
<route url="/V1/analytics/link" method="GET" secure="true">
    <service class="Magento\Analytics\Api\LinkProviderInterface" method="get"/>
    <resources>
        <resource ref="Magento_Analytics::analytics_api" />
    </resources>
</route>
```