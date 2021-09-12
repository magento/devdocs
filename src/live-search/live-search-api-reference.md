---
group: live-search
title: Live Search API Reference
ee_only: True
---

Populate all fields with information that is specific to the Magento account and storefront of the {{site.data.var.ee}} license holder. The `apiKey` parameter should be hard coded to `search_gql`.

## Create client

|**Parameter**|**Type**|**Description**|
|---|---|---|---|
|`environmentId`|string|(Required)<br />Example:<br />`beb38e17-2969-46bb-b294-e140ec60c212`|
|`websiteCode`|string|(Required)<br />Example:<br />`base`|
|`storeCode`|string|(Required)<br />Example:<br />`main_website_store`|
|`storeViewCode`|string|(Required)<br />Example:<br />`default`|
|`apiKey`|string|(Required)<br />Example:<br />`search_gql`|

## productSearch

Scenario: Used on a search page to retrieve products and facets for filtering.

|**Parameter**|**Type**|**Required**|**Example**|
|---|---|---|---|
|`phrase`|string|(Required)<br />Example: `yoga`|
|`page_size`|number||Default:`20`<br />Example: `10`|
|`current_page`|string|Default:`1`<br />Example: `2`|
|`filter`|[]|Default: []<br />Example:<br />`[{attribute: "color", eq: "red"}]`|
|`sort`|[]|Default: []<br />Example:<br />`[{attribute: "price", direction: "ASC"}]`|

## categorySearch

Scenario: Used on search page to retrieve categories for filtering.

|**Parameter**|**Type**|**Required**|**Example**|
|---|---|---|---|
|`phrase`|string|(Required)<br />Example: `yoga`|
|`category_size`|number|Default: `5`<br />Example: `10`|

## quickSearch

Scenario: Used in a search box to return product and category matches, as well as search suggestions.

|**Parameter**|**Type**|**Required**|**Example**|
|---|---|---|---|
|`phrase`|string|(Required)<br />Example: `yoga`|
|`category_size`|number|Default: `10`<br />Example: `20`|
|`page_size`|number|Default: `10`<br />Example: `20`|
|`current_page`|string|Default: `1`<br />Example: `2`|
|`filter`|[]|Default: []<br />Example:<br /> `[{attribute: "color", eq: "red"}]`|
|`sort`|[]|Default: []<br />Example:<br /> `[{attribute: "price", direction: "ASC"}]`|
