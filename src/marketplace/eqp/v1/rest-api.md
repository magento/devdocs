---
group: marketplace-api
title: REST API
---

 {:.bs-callout-info}
The **Marketplace EQP REST API** is completely separate from APIs provided with Magento 2.
<br/>There is no corresponding SOAP API.

The **Marketplace EQP API** gives you access to your **Marketplace Developer Portal** resources.
These resources are managed by a set of REST API endpoints.

## Overview of resources

| Resource       | Purpose |
|----------------|---------|
| authentication | Obtain a session token |
| users          | Manage your profile    |
| files          | Manage your profile avatar, ZIP files, image files, PDF documents |
| packages       | Initiate and manage your submissions                        |
| test results   | Receive information about automated and manual reviews      |
| reports        | Get information about your sales, as well as your Magento Marketplace web pages |
| API callbacks  | Request notification as specific workflow activities happen |

## General concepts

### Base URLs

The API endpoints only accept encrypted communications using HTTPS at the following base URLs:

|Environment|Base Url|
|-----------|--------|
|sandbox    | `https://developer-stg-api.magento.com` |
|production | `https://developer-api.magento.com`     |

### REST HTTP verbs

The Marketplace EQP API is based on REST concepts and uses standard HTTP verbs:

|HTTP Verb|Usage|
|---------|-----|
| GET     | Retrieves a resource, or retrieves a collection of that resource |
| POST    | Creates a resource |
| PUT     | Updates the entire resource, or updates part of a resource (when acting like a PATCH) |
| DELETE  | Removes a resource |

### API versioning

All endpoints start with **/rest/v1**, which supports versioning. The initial release is version 1 (v1).

### JSON

-  Except when creating the [file](files.html) resource, all requests are formatted using JSON.
-  All responses are formatted using JSON.

### UTC timestamps

All timestamps are in UTC ([universal time coordinated](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)).

## Batch processing {#batch}

Some endpoints can handle a **batch request**, such as the following:

```html
POST /rest/v1/products/packages
PUT /rest/v1/products/packages   // used when updating multiple packages in one request
```

### Batch response

Endpoints that are batch requests return responses as follows.
See specific examples in the section about [handling errors](handling-errors.html).

#### Complete processing failure

-  If an error occurs with the entire payload (for example, the user is not authorized to make the request) the appropriate HTTP 4xx code will be returned.
-  No additional processing of the batch request was attempted, and therefore there will **not** be any itemized response.

#### Typical processing

-  If the batch request can be processed, the overall HTTP code of the batch response will always be **HTTP 200 OK** regardless of the pass/fail status of the items in the batch.
-  The batch response contains information about every item in the batch request.
-  The order of these items matches the order in the batch request.
-  Every item in the batch response includes two additional fields that indicate the pass/fail status of the operation on that item:
   -  **code** - Contains an integer status code related to the operation. Failure of an operation is indicated by a non-200 value
   -  **message** - Contains a human readable message that describes the reason for the code.
-  Items in a batch that can be completed successfully will be completed, regardless of the pass/fail status of other items in the batch.

## Special topics

-  Some of the `GET` endpoints offer [filtering](filtering.html).  Use filtering to narrow the search results.
-  See details about [handling error responses](handling-errors.html).
