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

In order to track statuses of Asynchronous operations, Magento provides two REST API endpoints.

### Get the Short Status

Returns back the status of the operation:

```
GET /V1/bulk/:bulkUuid/status
```

#### Response:

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

### Get the Detailed Status

Returns information about operations status and also a detailed response of each operation. (Field: `result_serialized_data`)

 
```
GET /V1/bulk/:bulkUuid/detailed-status
```

#### Response:

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

bulkUuid - is an UUID that generates by [Magento Asynchronous API Requests](/asynchronous-web-endpoints.md).