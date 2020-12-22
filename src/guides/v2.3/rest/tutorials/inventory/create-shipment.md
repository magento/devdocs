---
layout: tutorial
group: rest-api
title: Step 12. Create a shipment
menu_title: Step 12. Create a shipment
subtitle: Order processing with Inventory Management
menu_order: 120
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

In the previous step, the SSA recommended shipping 20 `24-WB01` items and 19 `24-WB03` items from Baltimore. It also recommended shipping 31 `24-WB03` items from Reno.

You can always override the SSA recommendations. It would be valid, for example, to ship all the `24-WB01` items and 42 `24-WB03` items from Reno, leaving 8 `24-WB03` items to be shipped from Baltimore.

Fulfilling the order requires two partial shipments (unless you want to create a scenario that also involves the Austin warehouse). In this example, we'll follow the SSA recommendations.

When you complete a partial or full shipment, Magento deducts the reserved products from corresponding sources.

## Recommended: Ship using  `POST /V1/order/:orderId/ship`

Although you can use the `POST V1/shipment` endpoint to create a shipment, the `POST /V1/order/:orderId/ship` endpoint is a better option in that it is more efficient and the payload can be simpler.

### Ship from the Baltimore warehouse

We'll ship 20 `24-WB01` items and 19 `24-WB03` items from the Baltimore warehouse. The `order_item_id` value for `24-WB01` is 3, and the value for `24-WB03` is 4.

**Endpoint:**

`POST <host>/rest/us/V1/order/3/ship`

where `3` is the `orderid`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload:**

```json
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 20
    },
    {
      "order_item_id": 4,
      "qty": 19
    }
  ],
  "notify": true,
  "comment": {
    "comment": "Shipment from Baltimore"
  },
  "arguments": {
    "extension_attributes": {
      "source_code": "baltimore_wh"
    }
  }
}
```

**Response:**

The shipment ID, such as `3`.

### Ship from the Reno warehouse

Use the same endpoint to ship the remaining 31 `24-WB03` items from the Reno warehouse.

**Payload:**

```json
{
  "items": [
    {
      "order_item_id": 4,
      "qty": 31
    }
  ],
  "notify": true,
  "comment": {
    "comment": "Shipment from Reno"
  },
  "arguments": {
    "extension_attributes": {
      "source_code": "reno_wh"
    }
  }
}
```

**Response:**

The shipment ID, such as `4`.

## Alternative: Ship using `POST /V1/shipment`

Magento also supports the `POST /V1/shipment` endpoint for sending full or partial shipments.

### Ship from the Baltimore warehouse

**Endpoint:**

`POST <host>/rest/us/V1/shipment`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload:**

```json
{
  "entity": {
    "billing_address_id": 2,
    "customer_id": 3,
    "order_id": 3,
    "store_id": 2,
    "total_qty": 39,
    "items": [
      {
        "name": "Voyage Yoga Bag",
        "price": 32,
        "product_id": 8,
        "sku": "24-WB01",
        "order_item_id": 3,
        "qty": 20
      },
      {
        "name": "Driven Backpack",
        "price": 36,
        "product_id": 12,
        "sku": "24-WB03",
        "order_item_id": 4,
        "qty": 19
      }
    ],
    "extension_attributes": {
      "source_code": "baltimore_wh"
    }
  }
}
```

**Response:**

```json
{
    "created_at": "2018-08-02 21:14:43",
    "customer_id": 3,
    "entity_id": 13,
    "increment_id": "2000000013",
    "order_id": 3,
    "packages": [],
    "total_qty": 45,
    "updated_at": "2018-08-02 21:14:43",
    "items": [
        {
            "entity_id": 5,
            "name": "Voyage Yoga Bag",
            "parent_id": 13,
            "price": 32,
            "product_id": 8,
            "sku": "24-WB01",
            "order_item_id": 3,
            "qty": 20
        },
        {
            "entity_id": 5,
            "name": "Driven Backpack",
            "parent_id": 13,
            "price": 36,
            "product_id": 12,
            "sku": "24-WB03",
            "order_item_id": 4,
            "qty": 19
        }
    ],
    "tracks": [],
    "comments": [],
    "extension_attributes": {
        "source_code": "baltimore_wh"
    }
}
```

### Ship from the Reno warehouse

Use the same endpoint to ship the remaining 35 `sp2` items from the Reno warehouse.

**Payload:**

```json
{
  "entity": {
    "customer_id": 3,
    "order_id": 3,
    "total_qty": 31,
    "items": [
      {
        "name": "Driven Backpack",
        "price": 36,
        "product_id": 12,
        "sku": "24-WB03",
        "order_item_id": 4,
        "qty": 31
      }
    ],
    "extension_attributes": {
      "source_code": "reno_wh"
    }
  }
}
```

**Response:**

```json
{
    "created_at": "2018-08-02 22:22:23",
    "customer_id": 3,
    "entity_id": 16,
    "increment_id": "2000000016",
    "order_id": 3,
    "packages": [],
    "shipment_status": 1,
    "total_qty": 31,
    "updated_at": "2018-08-02 22:22:23",
    "items": [
        {
            "entity_id": 10,
            "name": "Driven Backpack",
            "parent_id": 16,
            "price": 36,
            "product_id": 12,
            "sku": "24-WB03",
            "order_item_id": 4,
            "qty": 31
        }
    ],
    "tracks": [],
    "comments": [],
    "extension_attributes": {
        "source_code": "reno_wh"
    }
}
```

## Verify this step {#verify-step}

1. Click **Sales** > **Shipments**. The two shipments for this order are displayed in the grid.
1. Click **Catalog** > **Products**. Verify that the **Quantity per Source** values are correct for each product, based on the selections you made at shipment.
