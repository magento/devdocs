---
group: rest-api
title: Search using REST endpoints
---

POST, PUT, and DELETE requests to the REST Web [API](https://glossary.magento.com/api) require the service method parameters to be in the body of the request. For example, to create a Customer, you would specify a JSON array (or [XML](https://glossary.magento.com/xml) structure) in the body of the message.

For search APIs that invoke a `*Repository::getList(SearchCriteriaInterface *)` call, the searchCriteria must be specified in the [URL](https://glossary.magento.com/url) of the GET request. The basic pattern for specifying the criteria is

```http
searchCriteria[filter_groups][<index>][filters][<index>][field]=<field_name>
searchCriteria[filter_groups][<index>][filters][<index>][value]=<search_value>
searchCriteria[filter_groups][<index>][filters][<index>][condition_type]=<operator>
```

where:

*  `field` is an attribute name.
*  `value` specifies the value to search for.
*  `condition_type` is one of the following values:

Condition | Notes
--- | ---
`eq` | Equals.
`finset` | A value within a set of values
`from` | The beginning of a range. Must be used with `to`
`gt` | Greater than
`gteq` |  Greater than or equal
`in` | In. The `value` can contain a comma-separated list of values.
`like` | Like. The `value` can contain the SQL wildcard characters when `like` is specified.
`lt` | Less than
`lteq` | Less than or equal
`moreq` | More or equal
`neq` | Not equal
`nfinset` | A value that is not within a set of values
`nin` | Not in. The `value` can contain a comma-separated list of values.
`notnull` | Not null
`null` | Null
`to` | The end of a range. Must be used with `from`

{:.bs-callout-info}
`condition_type` is optional if the operator is `eq`.

The `filter_groups` array defines one or more `filters`. Each filter defines a search term, and the `field`, `value`, and `condition_type` of a search term must be assigned the same index number, starting with 0. Increment additional terms as needed.

When constructing a search, keep the following in mind:

*  To perform a logical OR, specify multiple `filters` within a `filter_groups`.
*  To perform a logical AND, specify multiple `filter_groups`.
*  You cannot perform a logical OR across different `filter_groups`, such as `(A AND B) OR (X AND Y)`. ORs can be performed only within the context of a single `filter_groups`.
*  You can only search top-level attributes.

The following sections provide examples of each type of search. These examples use the {{site.data.var.ce}} sample data.

## Simple search

The {{site.data.var.ce}} sample data uses the `category_gear` field to describe the categories for each item listed under Gear on sample store. Each item can be assigned to multiple categories. Electronics are assigned the code 86. The following example returns all gear tagged as electronics.

```http
GET <host>/rest/<store_code>/V1/products/?
searchCriteria[filter_groups][0][filters][0][field]=category_gear&
searchCriteria[filter_groups][0][filters][0][value]=86&
searchCriteria[filter_groups][0][filters][0][condition_type]=finset
```

The system creates an array, as shown in the following pseudo-code.

```http
searchCriteria => [
  'filterGroups' => [
    0 => [
      'filters' => [
         0 => [
           'field' => 'category_gear',
           'value' => '86',
           'condition_type' => 'finset'
         ]
      ]
    ]
  ]
```

The query returns 9 items.

## Simple search using a timestamp

The following search finds all invoices created after the specified time (midnight, July 1 2016). You can set up a similar search to run periodically to poll for changes.

```http
GET <host>/rest/<store_code>/V1/invoices?
searchCriteria[filter_groups][0][filters][0][field]=created_at&
searchCriteria[filter_groups][0][filters][0][value]=2016-07-01 00:00:00&
searchCriteria[filter_groups][0][filters][0][condition_type]=gt
```

### Logical OR search

The following example searches for all products whose names contain the string `Leggings` or `Parachute`. The instances of `%25` in the example are converted into the SQL wildcard character `%`.

```http
GET <host>/rest/<store_code>/V1/products?
searchCriteria[filter_groups][0][filters][0][field]=name&
searchCriteria[filter_groups][0][filters][0][value]=%25Leggings%25&
searchCriteria[filter_groups][0][filters][0][condition_type]=like&
searchCriteria[filter_groups][0][filters][1][field]=name&
searchCriteria[filter_groups][0][filters][1][value]=%25Parachute%25&
searchCriteria[filter_groups][0][filters][1][condition_type]=like
```

The system creates an array, as shown in the following pseudo-code.

```http
searchCriteria => [
  'filterGroups' => [
    0 => [
      'filters' => [
         0 => [
           'field' => 'name',
           'value' => '%25Leggings%25',
           'condition_type' => 'like'
         ]
         1 => [
           'field' => 'name',
           'value' => '%25Parachute%25',
           'condition_type' => 'like'
         ]
      ]
    ]
  ]
```

The search returns 14 products that contain the string `Leggings` in the `name` field and 14 products that contain the string `Parachute`.

### Logical AND search

This sample searches for women's shorts that are size 31 and costs less than $30. In the CE sample data, women's shorts have a `sku` value that begins with `WSH`. The `sku` also contains the size and color, such as `WSH02-31-Yellow`.

```http
GET <host>/rest/<store_code>/V1/products?
searchCriteria[filter_groups][0][filters][0][field]=sku&
searchCriteria[filter_groups][0][filters][0][value]=WSH%2531%25&
searchCriteria[filter_groups][0][filters][0][condition_type]=like&
searchCriteria[filter_groups][1][filters][0][field]=price&
searchCriteria[filter_groups][1][filters][0][value]=30&
searchCriteria[filter_groups][1][filters][0][condition_type]=lt
```

The system creates an array, as shown in the following pseudo-code.

```http
searchCriteria => [
  'filterGroups' => [
    0 => [
      'filters' => [
         0 => [
           'field' => 'sku',
           'value' => 'WSH%31%',
           'condition_type' => 'like'
         ]
    1 => [
      'filters' => [
         0 => [
           'field' => 'price',
           'value' => '30',
           'condition_type' => 'lt'
         ]
      ]
    ]
  ]
```

The query returns 9 items.

### Logical AND and OR search

This sample is similar the Logical AND sample. It searches the `sku`s for women's shorts (WSH%) or pants (WP%)in size 29. The system performs two logical ANDs to restrict the results to those that cost from $40 to $49.99

```http
GET <host>/rest/<store_code>/V1/products?
searchCriteria[filter_groups][0][filters][0][field]=sku&
searchCriteria[filter_groups][0][filters][0][value]=WSH%2529%25&
searchCriteria[filter_groups][0][filters][0][condition_type]=like&
searchCriteria[filter_groups][0][filters][1][field]=sku&
searchCriteria[filter_groups][0][filters][1][value]=WP%2529%25&
searchCriteria[filter_groups][0][filters][1][condition_type]=like&
searchCriteria[filter_groups][1][filters][0][field]=price&
searchCriteria[filter_groups][1][filters][0][value]=40&
searchCriteria[filter_groups][1][filters][0][condition_type]=from&
searchCriteria[filter_groups][2][filters][0][field]=price&
searchCriteria[filter_groups][2][filters][0][value]=49.99&
searchCriteria[filter_groups][2][filters][0][condition_type]=to
```

The query returns 37 items.

## Other search criteria

The following searchCriteria can be used to determine the sort order and the number of items to return.

*  `searchCriteria[sortOrders][<index>][field]=<field-name>` - Specifies the field to sort on. By default, search results are returned in descending order. You can sort on multiple fields. For example, to sort on `price` first and then by `name`, call `searchCriteria[sortOrders][0][field]=price&searchCriteria[sortOrders][1][field]=name`.

*  `searchCriteria[sortOrders][<index>][direction]=ASC | DESC` - Specifies whether to return results in ascending (ASC) or descending (DESC) order. To expand the previous example and sort the `price` fields in descending order and the `name` fields in ascending order, call `searchCriteria[sortOrders][0][field]=price&searchCriteria[sortOrders][1][field]=name&searchCriteria[sortOrders][1][direction]=ASC`.

*  `searchCriteria[pageSize]` - Specifies the maximum number of items to return. The value must be an integer. If the `pageSize` is not specified, the system returns all matches.

*  `searchCriteria[currentPage]` - Returns the current page.

### Example for search criteria to determine the sort order and attributes to return

This example shows how to use search criteria to determine the sort order and attributes to return. It returns orders with status `pending`.

**Endpoint:**

`GET <host>/rest/<store_code>/V1/orders/`

**Headers:**

`Content-Type` `application/json`

`Authorization` `Bearer <administrator token>`

**Parameters:**

Parameter | Value | Description
--- | --- | ---
searchCriteria[filter_groups][0][filters][0][field] | status | Attribute name to filter
searchCriteria[filter_groups][0][filters][0][value] | pending | Attribute value to filter
fields | items[increment_id,entity_id] | Attributes to return in the response. If you do not specify this parameter, all attributes will be returned.

**Payload:**

Not applicable

**Request:**

```http
GET <host>/rest/V1/orders?
searchCriteria[filter_groups][0][filters][0][field]=status&
searchCriteria[filter_groups][0][filters][0][value]=pending&
searchCriteria[sortOrders][0][field]=increment_id&
fields=items[increment_id,entity_id]
```

**Response:**

```json
{
    "items": [
        {
            "entity_id": 3003,
            "increment_id": "WA0003003"
        },
        {
            "entity_id": 3140,
            "increment_id": "WA0003140"
        },
        {
            "entity_id": 9435,
            "increment_id": "WA0009435"
        }
    ]
}
```
