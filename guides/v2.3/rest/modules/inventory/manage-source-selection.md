---
group: rest-api
title: Manage source selection algorithms
---

Inventory Management uses the Source Selection Algorithm (SSA) to track the salable quantities of product inventory across all sources and make recommendations for partial and full shipments. 

The SSA uses stocks and sources to check the sales channel for incoming product requests and determines the available inventory. The algorithm:

* Calculates the aggregated virtual salable quantity of all assigned sources per stock
* Subtracts the Out-of-Stock Threshold amount from salable quantity to protect against overselling and support concurrent checkout
* Reserves inventory quantities at checkout, deducting from in-stock inventory at order processing and shipment
* Supports backorders with enhanced options for negative thresholds

The SSA also manages shipments by providing recommendations for the best sources to ship partial or all products or override the selections to:

* Ship partial shipments, sending only a few products from specific sources and completing the full order at a later date.
* Ship the entire order from one source.
* Break the order into partial shipments across multiple sources in different amounts to keep a balanced stock across all warehouses and stores.

Third parties can also extend SSA to create customized algorithms for recommending cost-effective shipments.

**Service names**

```
inventorySourceSelectionApiGetSourceSelectionAlgorithmListV1
inventorySourceSelectionApiSourceSelectionServiceV1
```

**REST endpoints**

```
GET /V1/inventory/source-selection-algorithm-list
POST /V1/inventory/source-selection-algorithm-result
```

## Get the list of available source selection algorithms

Currently, Inventory Management supports only the default SSA for priority. Third-party developers and future releases may add support for additional algorithms.

**Sample usage**

`GET http://<host>/rest/us/V1/inventory/source-selection-algorithm-list`

**Payload**

None

**Response**

An array containing a list of SSA codes, titles, and desriptions.

``` json
[
    {
        "code": "priority",
        "title": "Source Priority",
        "description": "Algorithm which provides Source Selections based on predefined priority of Source"
    }
]
```

## Run the SSA

The `POST V1/inventory/source-selection-algorithm-result` endpoint uses the algorithm defined by the `algorithmCode` attribute to calculate the recommended sources and quantities for each item defined in the items array.

**Sample usage**

`POST /V1/inventory/source-selection-algorithm-result`

**inventoryRequest parameters**

Name | Description | Type | Requirements
--- | --- | --- | ---
`stock_id` | The stock ID | Integer | Required
`items` | An array containing the SKU and quantity of items in the order |  Array | Required
`sku` | The SKU of a product to be shipped | String | Required for each item 
`qty` | The quantity of a product to be shipped | Number | Required for each item
`algorithmCode` | The name of the SSA to implement. For 2.3, this value must be `priority`. | String | Required
{:style="table-layout:auto;"}


**Payload**

```
{
    "inventoryRequest": {
        "stockId": 2,
        "items": [{
            "sku": "sp1",
            "qty": 20
        },
        {
            "sku": "sp2",
            "qty": 60
        }]
    },
    "algorithmCode": "priority"
}
```

**Response**

``` json
{
    "source_selection_items": [
        {
            "source_code": "baltimore_wh",
            "sku": "sp1",
            "qty_to_deduct": 20,
            "qty_available": 50
        },
        {
            "source_code": "austin_wh",
            "sku": "sp1",
            "qty_to_deduct": 0,
            "qty_available": 10
        },
        {
            "source_code": "reno_wh",
            "sku": "sp1",
            "qty_to_deduct": 0,
            "qty_available": 100
        },
        {
            "source_code": "baltimore_wh",
            "sku": "sp2",
            "qty_to_deduct": 25,
            "qty_available": 25
        },
        {
            "source_code": "reno_wh",
            "sku": "sp2",
            "qty_to_deduct": 35,
            "qty_available": 50
        }
    ],
    "shippable": true
}
```
