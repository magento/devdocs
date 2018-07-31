---
group: rest
title: Status endpoints
version: 2.3
contributor_name: comwrap GmbH
contributor_link: https://www.comwrap.com/
github_link: rest/operation-status-endpoints.md
functional_areas:
  - Integration
---

Magento generates a `bulkUuid` each time it executes an [asynchronous API request]({{ page.baseurl }}/rest/asynchronous-web-endpoints.html). You can track the status of an asynchronous operation with the following endpoints:

* `GET /V1/bulk/:bulkUuid/status`
* `GET /V1/bulk/:bulkUuid/detailed-status` 

## Get the status summary

The `GET /V1/bulk/:bulkUuid/status` endpoint returns the simplified status of the specified operation.

**Response**

```json
{
  "operations_list": [
    {
      "id": 0,
      "status": 0,
      "result_message": "string",
      "error_code": 0
    }
  ],
  "extension_attributes": {},
  "bulk_id": "string",
  "description": "string",
  "start_time": "string",
  "user_id": 0,
  "operation_count": 0
}
```

## Get the Detailed Status

The `GET /V1/bulk/:bulkUuid/detailed-status` endpoint returns detailed information about an operation's status. The `operations_list` array contains the message queue `topic_name` and `result_serialized_data` for each operation.

**Response**

```json
{
  "operations_list": [
    {
      "id": 0,
      "topic_name": "string",
      "status": 0,
      "result_serialized_data": "string",
      "result_message": "string",
      "error_code": 0
    }
  ],
  "extension_attributes": {},
  "bulk_id": "string",
  "description": "string",
  "start_time": "string",
  "user_id": 0,
  "operation_count": 0
}
```
