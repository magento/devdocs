---
group: marketplace-api
title: Introduction
---

{: .bs-callout-info }
These APIs are not yet public. This is a preview of version 1.0. Please send all feedback to <magento-marketplace-eqp-apis@adobe.com>.

The Magento Extension Quality Program (EQP) REST APIs provide access to the [Magento Developer Portal](https://developer.magento.com).

Use these APIs to submit Magento 1 and Magento 2 extensions and themes to the Magento EQP for publication on the [Magento Marketplace](https://marketplace.magento.com). You can also manage extensions that you have uploaded to the [Developer Portal](https://developer.magento.com).
The Magento EQP REST APIs are completely separate from those provided with Magento 1 and Magento 2. There are no corresponding SOAP APIs.

## EQP API requests

The APIs only accept encrypted communications using HTTPS at the following base URLs:

    https://developer-api.magento.com - Production
    https://developer-api-sandbox.magento.com - Sandbox

EQP APIs are based on REST concepts and use standard HTTP verbs:

-  GET
-  POST
-  PUT
-  DELETE

All endpoints start with **/rest/v1**, which supports API versioning. The initial release is version 1 (v1).
All request and response content is formatted using JSON, including error information.

## Error handling

All HTTP 4xx errors contain a JSON payload with the following structure:

```json
{
  "code" : 1208,
  "message" : "Insufficient information for Technical Submission"
}
```

Batch responses return a HTTP 200 response code, but each item in the batch array contains the `code` and `message` pair indicating an error. A `code` of 200 indicates success.

```json
[
    {
      "code" : 1208,
      "message" : "Insufficient information for Technical Submission"
    },
    {
      "code" : 1210,
      "message" : "Invalid SKU given. SKU must be of the form 'vendor_name/package_name'"
    },
    {
      "code" : 200,
      "message" : "Success",
      // ... etc. Successful batch submissions also have all the fields from a successful result.
    }
]
```
