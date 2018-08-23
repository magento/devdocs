---
layout: tutorial
title: Step 13. Create a shipment
menu_title: Step 13. Create a shipment
subtitle: Order processing with MSI
menu_order: 130
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

In the previous step, the SSA recommended shipping 20 `sp1` items and 25 `sp2`items from Baltimore. It also recommended shipping 35 `sp2` items from Reno.

You can always override the SSA recommendations. It would be valid, for example, to ship all the `sp1` items and 50 `sp2` items from Reno, leaving 15 `sp2` items to be shipped from Baltimore.

Fulfilling the order requires two partial shipments (unless you want to create a scenario that also involves the Austin warehouse). In this example, we'll follow the SSA recommendations.

When you complete a partial or full shipment, Magento deducts the reserved products from corresponding sources.

## Ship from the Baltimore warehouse

Although you can use the `POST V1/shipment` endpoint to create a shipment, the `POST /V1/order/:orderId/ship` endpoint is a better option in that it is more efficient and the payload can be simpler.

We'll ship 20 `sp1` items and 25 `sp2` items from the Baltimore warehouse. The `order_item_id` value for `sp1` is 12, and the value for `sp2` is 13.

**Endpoint**

`POST http://<host>/rest/us/V1/order/5/ship`

where `5` is the `orderid`

**Scope**

`us` store view

**Headers**


`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload**

``` json
{
  "items": [
    {
      "order_item_id": 12,
      "qty": 20
    },
    {
      "order_item_id": 13,
      "qty": 25
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

**Response**

The shipment ID, such as `18`.

## Ship from Reno

Use the same endpoint to ship the remaining 35 `sp2` items from the Reno warehouse.

**Payload**

``` json
{
  "items": [
    {
      "order_item_id": 13,
      "qty": 35
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

**Response**

The shipment ID, such as `19`.


## Verify this step {#verify-step}

1. Click **Sales** > **Shipments**. The two shipments for this order are displayed in the grid.
2. Click **Catalog** > **Products**. Verify that the **Quantity per Source** values are correct for each product, based on the selections you made at shipment.
