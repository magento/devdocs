---
group: rest-api
title: Manage stocks
---

Stocks map your sources to sales channels, providing a direct link to salable quantities and inventories.

All stores start with a default stock. When the inventory management functionality is enabled, Magento automatically assigns products to the default source and stock. Single Source merchants use the default stock only. Multi Source merchants create and configure stocks as needed to best fit their stores and order fulfillment processes.

The `stock_id` of the default stock is `1`.  You cannot delete or add sources to the default stock, but you can perform these actions with custom stocks.

Any sales channels that are not explicitly assigned to a custom stock are assigned to the Default Stock.

**Service name:**

`inventoryApiStockRepositoryV1`

**REST endpoints:**

```http
POST /V1/inventory/stocks
PUT /V1/inventory/stocks/:stockId
GET /V1/inventory/stocks/:stockId
DELETE /V1/inventory/stocks/:stockId
GET /V1/inventory/stocks
```

**StockInterface parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`stock_id` | An ID generated when a stock is created. | Integer | Required for PUT, DELETE, and GET operations
`name` | The display name of the stock. | String | Required for POST and PUT operations
`sales_channels` | Defines the sales channel for this stock. Currently, only websites are supported. | Array | Required for POST operations
`type` | Defines the type of sales channel. This value must be `website`. | String | Required for POST operations
`code` | Specifies a valid website code name | String | Required for POST operations

## Create a stock

Only one stock can be mapped to each sales channel. If you assign a sales channel that is already mapped to another stock, the sales channel will be removed from the original stock.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/stocks`

**Payload:**

```json
{
  "stock": {
    "name": "Central Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "test_site"
        }
      ]
    }
  }
}
```

**Response:**

A `stock_id`, such as `4`.

## Update a stock

You can change the name of a custom stock and its associated sales channels. Each PUT call overwrites the previous set of assigned sales channels. If you omit the `sales_channel` array, all sales channels will be unassigned from the stock.

If you change a sales channel between stocks, we recommend that you first complete any open orders and shipments that may need access to the assigned sources.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/inventory/stocks/4`

**Payload:**

```json
{
  "stock": {
    "name": "St. Louis Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "test_site"
        }
      ]
    }
  }
}
```

**Response:**

A `stock_id`, such as `4`.

## Return all information about a stock

This call returns detailed information about the specified stock.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/stocks/4`

**Payload:**

None

**Response:**

```json
{
  "stock": {
    "name": "St. Louis Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "test_site"
        }
      ]
    }
  }
}
```

## Delete a stock

You cannot delete a stock if it is assigned to a sales channel. You can unassign a stock's sales channels by omitting the `sales_channels` array in a `PUT /V1/inventory/stocks/:stockId` call.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/inventory/stocks/4`

**Payload:**

None

**Response:**

Magento returns an empty array.

`[]`

## Search for stocks

The following call returns all stocks whose name contains the string `Stock`.

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/stocks?searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][value]=%25Stock%25&searchCriteria[filter_groups][0][filters][0][condition_type]=like`

**Payload:**

None

**Response:**

{% collapsible Show code sample %}
```json
{
    "items": [
        {
            "stock_id": 1,
            "name": "Default Stock",
            "extension_attributes": {
                "sales_channels": [
                    {
                        "type": "website",
                        "code": "base"
                    }
                ]
            }
        },
        {
            "stock_id": 4,
            "name": "St. Louis Stock",
            "extension_attributes": {
                "sales_channels": [
                    {
                        "type": "website",
                        "code": "test_site"
                    }
                ]
            }
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "name",
                        "value": "%Stock%",
                        "condition_type": "like"
                    }
                ]
            }
        ]
    },
    "total_count": 2
}
```
{% endcollapsible %}
