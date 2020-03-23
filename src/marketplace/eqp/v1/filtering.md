---
group: marketplace-api
title: Filtering
---

Some GET batch request endpoints support sorting, filtering, and pagination.

Currently, the `files` endpoints support pagination only. The `package` endpoints support all three.

## Paginating batch requests

The following GET request parameters are passed to request a subset of the results.

|Field|Type|Default|Description|
|-----|----|-------|-----------|
|offset|int|0|The record in the list from which to begin. The list starts at 0.|
|limit|int|20|Number of records to return, starting from `offset`. -1 will return all remaining records.|

The result includes a `X-Total-Count` header, which provides the total number of records.

## Sorting batch requests

If a field is listed as filterable, it is also sortable. To sort, pass in the `sort` GET parameter:

|Field|Type|Description|
|-----|----|-----------|
|sort|string|Comma-separated list of field names to sort by. Fields may be prefixed with `-` to sort in descending order, or `+` for ascending.|

For example, to sort all versions of all packages (M2 packages first, then M1)
grouped alphabetically by name with the newest packages first:

```http
GET /rest/v1/products/packages/?sort=-platform,+name,-version
```

## Filtering batch requests

You can use multiple response fields as filters in batch GET requests.

For example, to get a package with the submission_id "12345", one way is
to call the single-object convenience endpoint without using filters:

```http
GET /rest/v1/products/packages/12345/
```

Or alternatively, call the batch endpoint to return a list and filter it by `submission_id`,
so that the list contains only one item:

```http
GET /rest/v1/products/packages/?submission_id=12345
```

The difference is that the first returns a single object or an error, while the second returns a list containing zero or one elements.
The following request filters all `themes` sorted by `platform` in ascending order and `created_at` in descending order:

**Request:**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/products/packages?type=theme&sort=+platform,-created_at
```

**Response:**

This response contains a list of theme packages, each with the structure described in [Get package details](packages.html#get-package-details).
