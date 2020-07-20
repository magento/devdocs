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

In the previous step, the SSA recommended shipping 35 `24-WB01` items and 20 `24-WB03` items from the Northeast warehouse. It also recommended shipping 5 `24-WB01` items from the Brooklyn store.

You can always override the SSA recommendations. It would be valid, for example, to ship 25 `24-WB01` items and 5 `24-WB03` items each from the Brooklyn, Manhattan, and Huntingdon stores.

Fulfilling the order requires two partial shipments (unless you want to create a scenario that also involves more than one store). In this example, we'll follow the SSA recommendations.

When you complete a partial or full shipment, Magento deducts the reserved products from corresponding sources.

## Recommended: Ship using `POST /V1/order/:orderId/ship`

Although you can use the `POST V1/shipment` endpoint to create a shipment, the `POST /V1/order/:orderId/ship` endpoint is a better option in that it is more efficient and the payload can be simpler.

### Ship from the Northeast warehouse

We'll ship 35 `24-WB01` items and 20 `24-WB03` items from the Northeast warehouse. The `order_item_id` value for `24-WB01` is 9, and the value for `24-WB03` is 8.

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
      "qty": 35
    }
  ],
  "notify": true,
  "comment": {
    "comment": "Shipment from Northeast warehouse"
  },
  "arguments": {
    "extension_attributes": {
      "source_code": "ne_wh"
    }
  }
}
```

**Response:**

The shipment ID, such as `3`.

### Ship from the Brooklyn store

Use the same endpoint to ship the remaining five `24-WB03` items from the Brooklyn store.

**Payload:**

```json
{
  "items": [
    {
      "order_item_id": 4,
      "qty": 5
    }
  ],
  "notify": true,
  "comment": {
    "comment": "Shipment from Brooklyn"
  },
  "arguments": {
    "extension_attributes": {
      "source_code": "brooklyn"
    }
  }
}
```

**Response:**

The shipment ID, such as `4`.

## Alternative: Ship using `POST /V1/shipment`

Magento also supports the `POST /V1/shipment` endpoint for sending full or partial shipments.

### Ship from the Northeast warehouse

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
    "billing_address_id": 4,
    "customer_id": 3,
    "order_id": 3,
    "store_id": 2,
    "total_qty": 55,
    "items": [
      {
        "name": "Voyage Yoga Bag",
        "price": 32,
        "product_id": 8,
        "sku": "24-WB01",
        "order_item_id": 3,
        "qty": 35
      },
      {
        "name": "Driven Backpack",
        "price": 36,
        "product_id": 12,
        "sku": "24-WB03",
        "order_item_id": 4,
        "qty": 20
      }
    ],
    "extension_attributes": {
      "source_code": "ne_wh"
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
          "qty": 35
        },
        {
          "entity_id": 5,
          "name": "Driven Backpack",
          "parent_id": 13,
          "price": 36,
          "product_id": 12,
          "sku": "24-WB03",
          "order_item_id": 4,
          "qty": 20
        }
    ],
    "tracks": [],
    "comments": [],
    "extension_attributes": {
        "source_code": "ne_wh"
    }
}
```

### Ship from the Brooklyn store

Use the same endpoint to ship the remaining five items from the Brooklyn store.

**Payload:**

```json
{
  "entity": {
    "customer_id": 3,
    "order_id": 3,
    "total_qty": 5,
    "items": [
      {
        "name": "Voyage Yoga Bag",
        "price": 32,
        "product_id": 8,
        "sku": "24-WB01",
        "order_item_id": 3,
        "qty": 5
      }
    ],
    "extension_attributes": {
      "source_code": "brooklyn"
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
          "name": "Voyage Yoga Bag",
          "parent_id": 16,
          "price": 32,
          "product_id": 12,
          "sku": "24-WB01",
          "order_item_id": 3,
          "qty": 5
        }
    ],
    "tracks": [],
    "comments": [],
    "extension_attributes": {
        "source_code": "brooklyn"
    }
}
```

## Verify this step {#verify-step}

1. Click **Sales** > **Shipments**. The two shipments for this order are displayed in the grid.
1. Click **Catalog** > **Products**. Verify that the **Quantity per Source** values are correct for each product, based on the selections you made at shipment.
