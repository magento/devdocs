---
group: msi
title: Manage stocks
---

Stock represents a virtual, aggregated inventory of products for sources of your sales channels. Each stock maps sales channels with sources to determine available inventories and salable quantities.

All stores start with a default stock. When the inventory functionality is installed, Magento automatically assigns products to the default source and stock. Single source merchants use the default stock only. Multi source merchants create and configure stocks as needed to best fit their stores and order fulfillment processes.

The `stock_id` of the default stock is `1`.  You cannot delete or add sources to the default stock, but you can perform these actions with custom stocks.

**Service name**

`InventoryApiStockRepositoryV1`

**REST endpoints**

```
POST /V1/inventory/stocks
PUT /V1/inventory/stocks/:stockId
GET /V1/inventory/stocks/:stockId
DELETE /V1/inventory/stocks/:stockId
GET /V1/inventory/stocks
```

**StockInterface parameters**

Name | Description | Type | Requirements
--- | --- | --- | ---
`stock_id` |
`name`

{:style="table-layout:auto;"}

## Create a stock



**Sample Usage**

`POST /V1/inventory/stocks`

**Payload**

``` json

```

**Response**

Magento returns an empty array.

`[]`

## Update a stock



**Sample Usage**

`PUT /V1/inventory/stocks/:id`

**Payload**

``` json

```

**Response**

Magento returns an empty array.

`[]`

## Return all information about a stock

This call returns detailed information about the specified stock.

**Sample Usage**

`GET /V1/inventory/stocks/:id`


**Payload**

None

**Response**

``` json

```

## Search for stocks

The following call returns all Stocks that

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage**

`GET /V1/inventory/stocks?searchCriteria[filter_groups][0][filters][0][field]=country_id&searchCriteria[filter_groups][0][filters][0][value]=US&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

**Payload**

None

**Response**

{% collapsible Show code sample %}
``` json

```
{% endcollapsible %}
