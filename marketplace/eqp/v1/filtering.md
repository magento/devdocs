---
group: marketplace-api
title: Filtering
---

Some GET batch request endpoints support sorting, filtering, and pagination.

Currently, the files endpoints support only pagination, while package endpoints support all three.

## Paginating batch requests

The following GET request parameters can be passed, to request a subset of the expected results.

|Field|Type|Default|Description|
|-----|----|-------|-----------|
|offset|int|0|Which record in a list to begin the page from. The list starts at 0.|
|limit|int|20|How many records to return in the requested batch, starting from `offset`. -1 will return all remaining records.|

The result will also come with a header `X-Total-Count`, which gives the number of total records.

## Sorting batch requests

If a field is listed as filterable, it is also sortable. To sort, pass in the `sort` GET parameter:

|Field|Type|Description|
|-----|----|-----------|
|sort|string|Comma-separated list of field names to sort by. Fields may be prefixed with '-' to sort in descending order, or '+' for ascending.|

So to sort all versions of all packages, M2 packages first, then M1,
grouped alphabetically by name, with newest packages first: 

```HTTP
GET /rest/v1/products/packages/?sort=-platform,+name,-version
```

## Filtering batch requests

You can use many response fields as filters in the batch GET request.

For example, to get a package with the submission_id "12345", one way is
to call the single-object convenience endpoint like so, without using filters:

```HTTP
GET /rest/v1/products/packages/12345/
```

But you can instead call the batch endpoint to return a list and filter it by submission_id,
so that the list contains only one item:

```HTTP
GET /rest/v1/products/packages/?submission_id=12345
```

The difference is that the first returns a single object or an error, while the second returns a list containing or one elements.

The following request filters all `themes` sorted by `platform` in ascending order and `created_time` in descending order:

**Request**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages?type=theme&sort=+platform,-created_time
```

**Response**

A list of theme packages can be returned in the same way as described in [Get package details](packages.html#get-package-details).
