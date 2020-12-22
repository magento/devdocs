---
group: rest-api
title: Link and unlink stocks and sources

---

In Admin, you can assign (link) sources to a stock when you create the stock. In REST, creating a stock and assigning sources to it are separate steps.

To link a source to a stock, you must specify the `source_code`, `stock_id`, and `priority` attributes. The `priority` value indicates where the source ranks in descending order. The Source Selection Algorithm uses this priority order when recommending order fulfillment. All sources linked to a stock are displayed in prioritized order in the Admin.

**Service names:**

```http
inventoryApiStockSourceLinksSaveV1
inventoryApiStockSourceLinksDeleteV1
InventoryApiGetStockSourceLinksV1
inventoryApiGetSourcesAssignedToStockOrderedByPriorityV1
```

**REST endpoints:**

```http
POST /V1/inventory/stock-source-links
POST /V1/inventory/stock-source-links-delete
GET /V1/inventory/stock-source-links
```

**StockSourceLink parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`stock_id` | Stock ID | Integer | Required for POST operations
`source_code` | Source code of the link | String | Required for POST operations
`priority` | Priority of the link | Integer | Required when linking a stock to a source

## Link stocks and sources

If you specify a sales channel that is already assigned to another stock, Magento reassigns the sales channel from the previous stock to the current stock.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/stock-source-links`

**Payload:**

```json
{
   "links" : [
      {
         "source_code" : "central",
         "stock_id" : 4,
         "priority" : 1
      },
      {
        "source_code" : "east",
        "stock_id" : 4,
        "priority" : 2
      }
   ]
}
```

**Response:**

Magento returns empty array.

`[]`

## Delete links between stocks and sources

The `POST /V1/inventory/stock-source-links-delete` endpoint breaks the link between a stock and one or more sources. Magento does not recalculate priority of sources after you delete links.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/inventory/stock-source-links-delete`

**Payload:**

```json
{
   "links" : [
      {
        "source_code" : "south",
        "stock_id" : 4
      }
   ]
}
```

**Response:**

Magento returns empty array.

`[]`

## Search for links

The following call returns the link information for `stock_id = 4`.

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/stock-source-links?searchCriteria[filter_groups][0][filters][0][field]=stock_id&searchCriteria[filter_groups][0][filters][0][value]=4&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

**Payload:**

None

**Response:**

{% collapsible Show code sample %}

```json
{
    "items": [
        {
            "stock_id": 4,
            "source_code": "central",
            "priority": 1
        },
        {
            "stock_id": 4,
            "source_code": "east",
            "priority": 2
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "stock_id",
                        "value": "4",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 2
}
```

{% endcollapsible %}

## Get sources assigned to a stock

The `GET /V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/:stock_id` endpoint returns details about each source that is assigned to the specified stock. [Manage sources]({{ page.baseurl }}/rest/modules/inventory/manage-sources.html) provides definitions for each attribute returned.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/get-sources-assigned-to-stock-ordered-by-priority/4`

**Payload:**

None

**Response:**

{% collapsible Show code sample %}

```json
[
    {
        "source_code": "central",
        "name": "Central Shipping Center",
        "email": "hsmith@example.com",
        "contact_name": "Harold Smith",
        "enabled": true,
        "description": "Primary source for the central region",
        "latitude": 38.74132,
        "longitude": -90.363267,
        "country_id": "US",
        "region_id": 36,
        "city": "St. Louis",
        "street": "123 Warehouse Blvd",
        "postcode": "63145",
        "phone": "(314) 555-1234",
        "use_default_carrier_config": true,
        "carrier_links": []
    },
    {
        "source_code": "east",
        "name": "Eastern Shipping Center",
        "email": "dsimons@example.com",
        "contact_name": "Daryl Simons",
        "enabled": true,
        "description": "Primary source for the eastern region",
        "country_id": "US",
        "region_id": 45,
        "city": "Raleigh",
        "street": "456 Shipping Center Blvd",
        "postcode": "27614",
        "phone": "(919) 555-8888",
        "use_default_carrier_config": true,
        "carrier_links": []
    }
]
```

{% endcollapsible %}
