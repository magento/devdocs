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

In the previous step, the SSA recommended shipping 35 `24-WB01` items and 20 `24-WB03` items from the Northeast warehouse. It also recommended shipping 5 `24-WB01` items from the West warehouse.

You can always override the SSA recommendations. It would be valid, for example, to ship 25 `24-WB01` items and 5 `24-WB03` items each from the Brooklyn, Manhattan, and Huntington stores.

Fulfilling the order requires a minimum of two partial shipments. In this example, we will follow the SSA recommendations.

When you complete a partial or full shipment, Magento deducts the reserved products from corresponding sources.

## Send a partial shipment

{:.bs-callout-info}
Although you can use the `POST V1/shipment` endpoint to create a shipment, the `POST /V1/order/:orderId/ship` endpoint is a better option in that it is more efficient and the payload can be simpler.

We'll ship 35 `24-WB01` items and 20 `24-WB03` items from the Northeast warehouse. The `order_item_id` value for `24-WB01` is 3, and the value for `24-WB03` is 4.

**Endpoint:**

`POST <host>/rest/default/V1/order/3/ship`

where `3` is the `orderid`

**Scope:**

`default` store view

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
    "comment": "Shipment from the Northeast warehouse"
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

### Ship from the West warehouse

Use the same endpoint to ship the remaining five `24-WB03` items from the West warehouse.

**Payload:**

```json
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 5
    }
  ],
  "notify": true,
  "comment": {
    "comment": "Shipment from the West warehouse"
  },
  "arguments": {
    "extension_attributes": {
      "source_code": "west_wh"
    }
  }
}
```

**Response:**

The shipment ID, such as `4`.

## Verify this step {#verify-step}

1. Click **Sales** > **Shipments**. The two shipments for this order are displayed in the grid.
1. Click **Catalog** > **Products**. Verify that the **Quantity per Source** values are correct for each product, based on the selections you made at shipment.
