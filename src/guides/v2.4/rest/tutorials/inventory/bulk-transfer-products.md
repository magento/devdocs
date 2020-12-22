---
layout: tutorial
group: rest-api
title: Step 13. Bulk transfer products
subtitle: Order processing with Inventory Management
menu_title: Step 13. Bulk transfer products
menu_order: 130
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

The Northeast warehouse is out of stock of Voyage Yoga Bags (`24-WB01`). In this step, we'll bulk transfer all of the stock from the Huntington store to the Northeast warehouse. As a result, the product cannot be shipped from that store. We will also transfer five bags from the Sausalito store to the West warehouse.

In this scenario, there are no pending orders that contain the product, nor is the product on back-order. In production, make sure that you fulfill any pending orders before you bulk transfer a product. You might want to remove the product from the European website before performing the bulk transfer.

## Bulk transfer the product from the Huntington store to the Northeast warehouse

The `POST /V1/inventory/bulk-product-source-transfer` endpoint allows you to specify an array of SKUs to bulk transfer from one source to another, but this example includes only one SKU. If you set the `unassignFromOrigin` attribute to `true`, the origin source is no longer associated with the specified products. If the attribute is `false`, Magento designates the products as being out of stock at the origin source with a quantity of 0.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/bulk-product-source-transfer`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
  "skus": [
    "24-WB01"
  ],
  "originSource": "huntington",
  "destinationSource": "ne_wh",
  "unassignFromOrigin": false
}
```

**Response:**

`true`

## Partially transfer the product from Sausalito to the West warehouse

Use the `bulk-partial-source-transfer endpoint` to transfer a portion of in-stock units from one source to another.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/bulk-partial-source-transfer`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
  "originSourceCode": "sausalito",
  "destinationSourceCode": "west_wh",
  "items": [
    {
      "sku": "24-WB01",
      "qty": 5
    }
  ]
}
```

**Response:**

An empty array.

[]

## Verify this step

In Admin, click **Catalog** > **Products**. Scroll down to the Driven Backpack row and note the new quantities.
