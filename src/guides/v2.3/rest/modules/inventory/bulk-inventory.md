---
group: rest-api
title: Inventory mass actions
---

Magento provides several endpoints that allow Multi Source merchants to make quick updates across multiple products. This is helpful for transferring inventory between sources and removing a source without editing each product individually.

*  The bulk transfer endpoint moves all quantities of products from one source to another.
*  The bulk assign source endpoint adds sources to multiple products.
*  The bulk unassign source endpoint removes sources from the products. Any inventory quantity assigned to that source is no longer available.

**Service names:**

```http
inventoryCatalogApiBulkInventoryTransferV1
inventoryCatalogApiBulkPartialInventoryTransferV1
inventoryCatalogApiBulkSourceAssignV1
inventoryCatalogApiBulkSourceUnassignV1
```

**REST endpoints:**

```http
POST /V1/inventory/bulk-product-source-transfer
POST /V1/inventory/bulk-partial-source-transfer
POST /V1/inventory/bulk-product-source-assign
POST /V1/inventory/bulk-product-source-unassign
```

## Bulk transfer

Multi Source merchants may need to transfer product inventory from one source location to another. For example, the merchant might decide to stop shipping specific products from a location or completely close the facility. In these cases, all operations for those products move to a new location.

Bulk transfer allows you to specify multiple products, the origin source from which to transfer inventory, and the destination source to receive quantities. The bulk transfer process moves all product inventory from the origin source. Use [bulk partial transfer](#bulk-partial-transfer) to transfer specific quantities of one or more products.

 Unlike an unassign source action, Magento also retains product data by moving the status (in stock/out of stock), and the Notify Quantity from one source to another. If the origin and destination sources are in different stocks, performing a bulk transfer affects the aggregated Salable Quantity and reservations for in-progress orders.

**Parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`skus` | A  comma-separated list of existing SKUs to transfer | Array | Required
`originSource` | The current source of the SKUs | String | Required
`destinationSource` | The target source for the SKUs. This source must be already defined. | String | Required
`unassignFromOrigin` | If `true`, the current source is removed as a source for the products. If `false`, the original source is retained, but the products are marked as being out of stock with a quantity of 0. | Boolean | Required

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/bulk-product-source-transfer`

**Payload:**

```json
{
  "skus": [
    "testConfigProduct-red",
    "testConfigProduct-blue"
  ],
  "originSource": "default",
  "destinationSource": "central",
  "unassignFromOrigin": true
}
```

**Response:**

`true` if the request was successful

## Bulk partial transfer

You can use the `V1/inventory/bulk-partial-source-transfer` endpoint to transfer a limited quantity of a product from one source to another. As with full transfers, Magento keeps track of the stock status as well as the Notify Quantity when you move products from one source to another.

**Parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`originSourceCode` | The current source of the products to be transferred | String | Required
`destinationSourceCode` | The target source. This source must be already defined. | String | Required
`items` | An array containing a set of products to be transferred | Array | Required
`sku` | A product to transfer | String | Required
`qty` | The quantity of the product to transfer | Float | Required

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/bulk-partial-source-transfer`

**Payload:**

```json
{
  "originSourceCode": "default",
  "destinationSourceCode": "central",
  "items": [
    {
      "sku": "testConfigProduct-yellow",
      "qty": 10
    },
    {
      "sku": "testConfigProduct-green",
      "qty": 50
    }
  ]
}
```

**Response:**

An empty array

## Bulk assign sources

Use the `POST /V1/inventory/bulk-product-source-assign` endpoint to add one or more sources to your products. This endpoint helps when creating and assigning custom sources to your default or custom stocks and preparing new locations and inventory.

After adding new custom sources, you can add inventory quantities per product or for multiple products using the `POST V1/inventory/source-items` endpoint. [Assign products to a source]({{ page.baseurl }}/rest/modules/inventory/manage-source-items.html#assign) describes this endpoint.

The sources are added to the products with an inventory quantity of 0. You can add inventory amounts as available per source.

**Parameters:**

Name | Description | Type | Requirements
--- | --- | --- | ---
`skus` | A comma-separated list of existing SKUs to assign | Array | Required
`sourceCodes` | A comma-separated list of existing sources | Array | Required

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/bulk-product-source-assign`

**Payload:**

```json
{
  "skus": [
    "new-product3",
    "new-product4"
  ],
  "sourceCodes": [
    "central",
    "east"
  ]
}
```

**Response:**

An ID that identifies the request, such as `1`.

## Bulk unassign sources

When unassigning a source from a product, you are indicating the product will no longer be stocked at that location. This process completely clears all inventory data (quantity, stock status, Notify Quantity threshold) for the source currently assigned to the product. If you need to move the existing inventory to a new location, consider using the bulk transfer endpoint (`POST /V1/inventory/bulk-product-source-transfer`).

{:.bs-callout-warning}
When you unassign a source from a product, Magento deletes all source data, including inventory amounts, from that product. This can affect salable quantities and reservations for unprocessed orders. After checkout and before shipment, all product quantities in the order have associated reservations. If you unassign a source, you can cause issues with reservations and processing orders.

We strongly recommend completing all orders and shipments for those products prior to removing the source.

If you unassign all sources from a product, you will not be able to sell the product.

**Sample usage:**

`POST <host>/rest/<store_code>/V1/inventory/bulk-product-source-unassign`

**Payload:**

```json
{
  "skus": [
    "testSimpleProduct",
    "testSimpleProduct2"
  ],
  "sourceCodes": [
    "default"
  ]
}
```

**Response:**

An ID that identifies the request, such as `1`.