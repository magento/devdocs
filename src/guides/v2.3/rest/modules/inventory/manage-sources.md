---
group: rest-api
title: Manage sources
---

Sources represent locations storing and shipping available product stock. Any location with available stock and capable of order fulfillment can be added as a source. These locations can include warehouses, brick-and-mortar stores, distribution centers, and drop shippers.

All stores begin with a default source that must remain enabled. Single Source merchants (merchants who ship all products from one location) use the default source for their single point of inventory location and shipments. Multi Source merchants create as many sources as they need to represent each location.

You cannot rename, delete, or disable the default source. You can create, modify, enable, and disable custom sources, but you cannot rename or delete a custom source.

Disabling a custom source has the following effects:

*  Magento ignores and does not list the source for shipment or order processing
*  Stocks do not access inventory quantities from the source for aggregated inventory totals
*  Order shipments cannot be assigned to disabled locations.

{:.bs-callout-info}
Bundle and grouped products currently do not support multi-sourcing and must be assigned to the default source and default stock.

**Service name:**

`inventoryApiSourceRepositoryV1`

**REST endpoints:**

```http
POST /V1/inventory/sources
GET /V1/inventory/sources/:sourceCode
PUT /V1/inventory/sources/:sourceCode
GET /V1/inventory/sources
```

**SourceInterface parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`source_code` | A unique identifier for the source | String | Required to create a source. This value cannot be changed with a PUT call.
`name` | A unique display name for the source. | String | Required for all POST and PUT calls
`email` | The email for the source's contact | String | Optional
`contact_name` | The name of the contact for the source | String | Optional
`enabled` | Indicates whether the source is enabled. The default value is `true`. | Boolean | Optional
`description` | A description of the source (Maximum: 1000 characters)| String | Optional
`latitude` | The latitude of the source's physical location. The value, along with the `longitude` value, could be used to determine the closest source to a customer's shipping address. | Float | Optional
`longitude` |The latitude of the source's physical location. | Float | Optional
`country_id` | The country ID of the source's physical location | String | Required for all POST and PUT calls.
`region_id` | The region ID of the state or province of the source  | Integer | Optional
`region` | The region name for countries whose provinces are not defined in Magento | String | Optional
`city` | Th city in which the source is located | String | Optional
`street` | The physical street address of the source | String | Optional
`postcode` | The zip or postal code of the source's physical address | String | Required for all POST and PUT calls
`phone` | The contact's phone number | String | Optional
`fax` | The contact's fax number | String | Optional
`use_default_carrier_config` | Reserved for future use | Boolean | Optional
`carrier_code` | Reserved for future use | String | Optional
`position` | Reserved for future use | Integer | Optional

## Create a source

The value of the `source_code` parameter can contain upper and lower case letters, numbers, dashes, and underscores. You use this ID when assigning stock to sources and when exporting or importing data.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/inventory/sources`

**Payload:**

```json
{
   "source" : {
      "name" : "Central Shipping Center",
      "source_code" : "central",
      "enabled" : true,
      "description": "Primary source for the central region",
      "latitude": "38.741320",
      "longitude": "-90.363267",
      "contact_name": "Harold Smith",
      "email": "hsmith@example.com",
      "phone": "(314) 555-1234",
      "country_id" : "US",
      "region_id": 36,
      "city": "St. Louis",
      "street": "123 Warehouse Blvd",
      "postcode" : "63145"
   }
}
```

**Response:**

Magento returns an empty array.

`[]`

## Update a source

All PUT requests must contain the `name`, `country_id`, and `postcode` parameters.

This example updates the contact information (`contact_name`, `email`, and `phone` parameters) of the source.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/inventory/sources/central`

**Payload:**

```json
{
   "source" : {
      "name": "Central Shipping Center",
      "contact_name": "Donna Milton",
      "email": "dmilton@example.com",
      "phone": "(314) 555-1237",
      "country_id" : "US",
      "postcode" : "63145"
   }
}
```

**Response:**

Magento returns an empty array.

`[]`

## Return all information about a source

This call returns detailed information about the specified source.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/sources/central`

**Payload:**

None

**Response:**

```json
{
    "source_code": "central",
    "name": "Central Shipping Center",
    "email": "dmilton@example.com",
    "contact_name": "Donna Milton",
    "enabled": true,
    "description": "Primary source for the central region",
    "latitude": 38.74132,
    "longitude": -90.363267,
    "country_id": "US",
    "region_id": 36,
    "city": "St. Louis",
    "street": "123 Warehouse Blvd",
    "postcode": "63145",
    "phone": "(314) 555-1237",
    "use_default_carrier_config": true,
    "carrier_links": []
}
```

## Search for sources

The following call returns all sources that are located in the United States (`country_id` = `US`)

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/sources?searchCriteria[filter_groups][0][filters][0][field]=country_id&searchCriteria[filter_groups][0][filters][0][value]=US&searchCriteria[filter_groups][0][filters][0][condition_type]=eq`

**Payload:**

None

**Response:**

{% collapsible Show code sample %}

```json
{
    "items": [
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
            "source_code": "default",
            "name": "Default Source",
            "enabled": true,
            "description": "Default Source",
            "latitude": 0,
            "longitude": 0,
            "country_id": "US",
            "postcode": "00000",
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
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "country_id",
                        "value": "US",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 3
}
```

{% endcollapsible %}
