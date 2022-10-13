---
layout: tutorial
group: rest-api
title: Step 11. Run the Source Selection Algorithms
subtitle: Order processing with Inventory Management
menu_title: Step 11. Run the Source Selection Algorithms
menu_order: 110
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

One of the most significant parts of Inventory Management is the Source Selection Algorithm (SSA). The Source Priority SSA analyzes and determines the best match for sources and shipping based on the priorities you specified in [Step 4. Link stocks and sources
]({{ page.baseurl }}/rest/tutorials/inventory/assign-source-to-stock.html). The Distance Priority SSA calculates the distance between the sources and the shipping address. Both algorithms also provide a list of source items with quantities to deduct per each source item.

For more information about shipping and SSAs, see [About Source Selection Algorithm and Reservations](https://docs.magento.com/m2/ce/user_guide/catalog/inventory-about-ssa.html) in the _Magento User Guide_.

## Get the list of algorithms

Currently, Magento supports SSAs based on priority and on distance. Third-party developers and future releases may add support for additional algorithms.

**Endpoint:**

`GET <host>/rest/us/V1/inventory/source-selection-algorithm-list`

**Scope:**

`us` store view

**Headers:**

`Content-Type` `application/json`

`Authorization` `Bearer <admin token>`

**Payload:**

Not applicable

**Response:**

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

## Run an SSA

The `POST V1/inventory/source-selection-algorithm-result` endpoint uses the algorithm defined by the `algorithmCode` attribute to calculate the recommended sources and quantities for each item defined in the `items` array. In this example, we'll select the `priority` SSA. [Manage source selection algorithms]({{ page.baseurl }}/rest/modules/inventory/manage-source-selection.html) includes an example using the `distance` priority.

This tutorial does not consider complications such selling out of products or back ordering. We can ask the SSA to determine the best way to immediately ship all the items ordered (20 items of product `24-WB01` and 50 items of product `24-WB03`). If the `shippable` attribute in the response is `false`, there are not enough salable items to complete a full shipment, but the merchant can still perform a partial shipment.

**Endpoint:**

`POST <host>/rest/us/V1/inventory/source-selection-algorithm-result`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

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

The SSA recommends shipping from the following sources:

Product | Source | Quantity
--- | --- | ---
`24-WB01` | Baltimore | 20
`24-WB03` | Baltimore | 19
`24-WB03` | Reno | 31

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

## Verify this step {#verify-step}

1. Click **Sales** > **Orders**.
1. Click the **View** link in the Action column for the order.
1. Click **Ship**.
1. Select different sources from the **Sources** menu.
