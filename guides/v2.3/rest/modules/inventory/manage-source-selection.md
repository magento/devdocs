---
group: rest-api
title: Manage source selection algorithms
---



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

**sourceItemConfigurations parameters**

Name | Description | Type | Requirements
--- | --- | --- | ---



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
