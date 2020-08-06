---
group: marketplace-api
title: Handling errors
---

Consider these tips when handling errors.

## Complete processing failure

All HTTP 4xx errors contain a JSON payload with the following structure:

```json
{
  "code" : 1208,
  "message" : "Insufficient information for Technical Submission"
}
```

## Batch processing

Unless there was a complete failure in processing a [batch request](rest-api.html#batch), a **batch response** always returns an overall HTTP 200 response code.  However, each item in the batch array contains a `code` and `message` pair indicating its specific pass/fail result.

-  a `code` of 200 indicates successful processing of the item
-  a non-200 `code` indicates an error occurred while attempting to process the item

```json
// the overall HTTP response code will be a 200 ...
[
    {
      // ... however each subsection of the batch response might have a non-200 error code
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
