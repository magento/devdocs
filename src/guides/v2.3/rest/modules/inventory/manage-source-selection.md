---
group: rest-api
title: Manage source selection algorithms
---

Inventory Management uses the Source Selection Algorithm (SSA) to track the salable quantities of product inventory across all sources and make recommendations for partial and full shipments.

The SSA uses stocks and sources to check the sales channel for incoming product requests and determines the available inventory. The algorithm:

*  Calculates the aggregated virtual salable quantity of all assigned sources per stock
*  Subtracts the Out-of-Stock Threshold amount from salable quantity to protect against overselling and support concurrent checkout
*  Reserves inventory quantities at checkout, deducting from in-stock inventory at order processing and shipment
*  Supports backorders with enhanced options for negative thresholds

The SSA also manages shipments by providing recommendations for the best sources to ship partial or all products or override the selections to:

*  Ship partial shipments, sending only a few products from specific sources and completing the full order at a later date.
*  Ship the entire order from one source.
*  Break the order into partial shipments across multiple sources in different amounts to keep a balanced stock across all warehouses and stores.

Third parties can also extend SSA to create customized algorithms for recommending cost-effective shipments.

**Service names:**

```http
inventorySourceSelectionApiGetSourceSelectionAlgorithmListV1
inventorySourceSelectionApiSourceSelectionServiceV1
inventoryDistanceBasedSourceSelectionApiGetDistanceProviderCodeV1
inventoryDistanceBasedSourceSelectionApiGetDistanceV1
inventoryDistanceBasedSourceSelectionApiGetLatLngFromAddressV1
```

**REST endpoints:**

```http
GET /V1/inventory/source-selection-algorithm-list
POST /V1/inventory/source-selection-algorithm-result
```

## Get the list of available source selection algorithms

Currently, Inventory Management supports only the default SSA for priority. Third-party developers and future releases may add support for additional algorithms.

**Sample usage:**

`GET <host>/rest/us/V1/inventory/source-selection-algorithm-list`

**Payload:**

None

**Response:**

An array containing a list of SSA codes, titles, and descriptions.

```json
[
    {
        "code": "distance",
        "title": "Distance Priority",
        "description": "Algorithm which provides Source Selections based on shipping address distance from the source"
    },
    {
        "code": "priority",
        "title": "Source Priority",
        "description": "Algorithm which provides Source Selections based on predefined priority of Source"
    }
]
```

## Run the SSA

The `POST V1/inventory/source-selection-algorithm-result` endpoint uses the algorithm defined by the `algorithmCode` attribute to calculate the recommended sources and quantities for each item defined in the items array.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/source-selection-algorithm-result`

**inventoryRequest parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`stock_id` | The ID of the stock | Integer | Required
`items` | An array containing the SKU and quantity of items in the order |  Array | Required
`sku` | The SKU of a product to be shipped | String | Required for each item
`qty` | The quantity of a product to be shipped | Float | Required for each item
`algorithmCode` | The name of the SSA to implement. For 2.3, this value must be `priority`. | String | Required
`destination_address` | An extension attribute that defines the shipment address when the Distance Priority SSA is used. | Object | Required for the Distance Priority SSA
`country` | The country code of the shipping address | String | Required for the Distance Priority SSA
`postcode` | The postal code of the shipping address | String | Required for the Distance Priority SSA
`street` | The street address of the shipping address| String | Required for the Distance Priority SSA
`region` | The region code of the shipping address | String | Required for the Distance Priority SSA
`city` | The city of the shipping address | String | Required for the Distance Priority SSA

### Source Priority Algorithm

**Payload:**

```json
{
    "inventoryRequest": {
        "stockId": 2,
        "items": [{
            "sku": "24-WB01",
            "qty": 20
        },
        {
            "sku": "24-WB03",
            "qty": 50
        }]
    },
    "algorithmCode": "priority"
}
```

**Response:**

```json
{
    "source_selection_items": [
        {
            "source_code": "baltimore_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 20,
            "qty_available": 35
        },
        {
            "source_code": "austin_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "reno_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 25
        },
        {
            "source_code": "baltimore_wh",
            "sku": "24-WB03",
            "qty_to_deduct": 19,
            "qty_available": 19
        },
        {
            "source_code": "reno_wh",
            "sku": "24-WB03",
            "qty_to_deduct": 31,
            "qty_available": 42
        }
    ],
    "shippable": true
}
```

### Distance Priority algorithm

**Payload:**

```json
{
    "inventoryRequest": {
        "stockId": 2,
        "items": [{
            "sku": "24-WB01",
            "qty": 20
        },
        {
            "sku": "24-WB03",
            "qty": 50
        }],
        "extension_attributes": {
            "destination_address": {
                "country": "US",
                "postcode": "10577",
                "street": "3003 Purchase St",
                "region": "43",
                "city": "Purchase"
            }
        }
    },
    "algorithmCode": "distance"
}
```

**Response:**

```json
{
    "source_selection_items": [
        {
            "source_code": "baltimore_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 20,
            "qty_available": 35
        },
        {
            "source_code": "austin_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "reno_wh",
            "sku": "24-WB01",
            "qty_to_deduct": 0,
            "qty_available": 25
        },
        {
            "source_code": "baltimore_wh",
            "sku": "24-WB03",
            "qty_to_deduct": 19,
            "qty_available": 19
        },
        {
            "source_code": "reno_wh",
            "sku": "24-WB03",
            "qty_to_deduct": 31,
            "qty_available": 42
        }
    ],
    "shippable": true
}
```

## Determine distances for the Distance Priority algorithm

Magento provides several endpoints to help determine GPS coordinates.

### Get the distance provider code

The `GET /V1/inventory/get-distance-provider-code` endpoint returns the configured distance provider for the Distance Priority algorithm. The value can be `google` or `offline`.

**Sample usage:**

`GET <host>/rest/<store_code>/V1/inventory/get-distance-provider-code`

**Payload:**

None

**Response:**

`offline`

### Get the distance between two points

The `GET /V1/inventory/get-distance` endpoint calculates the distance between two points, given the longitude and latitude of the source and distance.

**URL parameters:**

Name | Description
--- | ---
`source[lat]` | The latitude of the source
`source[lng]` | The longitude of the source
`destination[lat]` | The latitude of the destination
`destination[lng]` | The longitude of the destination

**Sample usage:**

`GET /V1/inventory/get-distance?source[lat]=30.271129&source[lng]=-97.7437&destination[lat]=39.290882&destination[lng]=-76.610759`

**Payload:**

None

**Response:**

The distance, in kilometers

### Get the latitude and longitude of the shipping address

The `GET /V1/inventory/get-latlng-from-address` endpoint calculates the latitude and longitude of the shipping address.

**URL parameters:**

Name | Description
--- | ---
address[country] | The country code of the shipping address
address[postcode] | The postal code of the shipping address
address[street] | The street of the shipping address
address[region] | The region code of the shipping address
address[city] | The city of the shipping address

**Sample usage:**

`GET /V1/inventory/get-latlng-from-address?address[country]=US&address[postcode]=10577&address[street]=123%20Oak&address[region]=NY&address[city]=Purchase`

**Payload:**

None

**Response:**

```json
{
    "lat": 41.0384,
    "lng": -73.7156
}
```
