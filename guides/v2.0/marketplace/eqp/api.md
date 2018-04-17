---
layout: default
group: marketplace-api
title: Introduction
version: 2.0
github_link: marketplace/eqp/api.md
---

The Magento Extension Quality Program (EQP) REST APIs provide access to the [Magento Developer Portal](https://developer.magento.com). 

Use these APIs to submit Magento 1 and Magento 2 extensions and themes to the Magento EQP for publication on the [Magento Marketplace](https://marketplace.magento.com). You can also manage extensions that you have uploaded to the [Developer Portal](https://developer.magento.com).

EQP APIs are based on REST concepts and use standard HTTP verbs:

- GET
- POST
- PUT
- DELETE

All request and response content is formatted using JSON, including error information.

All endpoints start with **/rest/v1**, which supports API versioning. The initial release is version 1 (v1).

The APIs only accept encrypted communications using HTTPS at the following base URL:

    https://developer-api.magento.com - Production
    https://developer-api-sandbox.magento.com - Sandbox

## Error Handling

All HTTP 4xx errors contain a JSON payload with the following structure:

```json
{
  “code” : 1208
  “message” : “Insufficient information for Technical Submission”
}
```

Batch responses return a HTTP 200 response code, but each item in the batch contains the `code` and `message` pair indicating an error. A `code` of 200 indicates success.