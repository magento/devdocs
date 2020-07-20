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

The Voyage Yoga Bags (`24-WB01`) have sold well in the United States, but not in Europe. The Northeast warehouse is out of stock, and the Brooklyn store is running low. In this step, we'll bulk transfer all of the stock from the Leipzig warehouse for this product to the Northeast warehouse, and all of the stock from the Frankfurt store to Brooklyn. As a result, the product cannot be shipped from either of these European sources.

In this scenario, there are no pending orders that contain the product, nor is the product on back-order. In production, make sure that you fulfill any pending orders before you bulk transfer a product. You might want to remove the product from the European website before performing the bulk transfer.

## Bulk transfer the product from Leipzig to Northeast

The `POST /V1/inventory/bulk-product-source-transfer` endpoint allows you to specify an array of SKUs to bulk transfer from one source to another, but this example includes only one SKU. If you set the `unassignFromOrigin` attribute to `true`, the origin source is no longer associated with the specified products. If the attribute is `false`, Magento designates the products as being out of stock at the origin source with a quantity of 0.

**Endpoint:**

`POST <host>/rest/all/V1/inventory/bulk-product-source-transfer`

**Scope:**

`all` store views

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

```json
{
  "skus": [
    "24-WB01"
  ],
  "originSource": "de_wh",
  "destinationSource": "ne_wh",
  "unassignFromOrigin": true
}
```

**Response:**

`true`

## Bulk transfer the product from Frankfurt to Brooklyn

Use the same endpoint to bulk transfer the product to Brooklyn.

**Payload:**

```json
{
  "skus": [
    "24-WB01"
  ],
  "originSource": "frankfurt",
  "destinationSource": "brooklyn",
  "unassignFromOrigin": true
}
```

**Response:**

`true`

## Verify this step

In Admin, click **Catalog** > **Products**. Scroll down to the Driven Backpack row.

*  The stock has been transferred from Berlin to Baltimore. The Baltimore warehouse now has 32 units.
*  The Austin warehouse now has 7 units.
*  The **Salable Quantity** column no longer lists European stock.
