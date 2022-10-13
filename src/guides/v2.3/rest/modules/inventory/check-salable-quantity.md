---
group: rest-api
title: Check salable quantities
---

Magento provides several endpoints that allow you to check whether a product from a specified stock is salable and the available quantity.

**Service names:**

```http
inventorySalesApiGetProductSalabilityV1
inventorySalesApiIsProductSalableV1
inventorySalesApiIsProductSalableForRequestedQtyV1
inventorySalesApiStockResolverV1
```

**REST endpoints:**

```http
GET /V1/inventory/get-product-salable-quantity/:sku/:stockId
GET /V1/inventory/is-product-salable/:sku/:stockId
GET /V1/inventory/is-product-salable-for-requested-qty/:sku/:stockId/:requestedQty
GET /V1/inventory/stock-resolver/:type/:code
```

**Path parameters:**

Name | Description | Type
--- | --- | ---
`sku` | The SKU of the product | String
`stock_id` | The ID of the stock the product is assigned to | Integer
`requestedQty` | The requested quantity of products | Float
`type` | The type of sales channel the stock is assigned to. For 2.3, this value must be `website`. | String
`code` | The code of the sales channel (website) | String

## Check the available quantity of a salable product

This call returns the available quantity of a product assigned to the specified stock ID.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/get-product-salable-quantity/sp2/2`

Name | Description | Type
--- | --- | ---
`sku` | The SKU of the product | String
`stock_id` | The ID of the stock the product is assigned to | Integer

**Payload:**

None

**Response:**

An integer indicating the salable quantity of the product, such as `75`.

## Check whether a product is salable

This call returns a boolean value that indicates whether the product from the specified stock is salable.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/is-product-salable/sp2/2`

**Payload:**

None

**Response:**

`true` or `false`

## Check whether a product is salable for a specified quantity

This call indicates whether a product is salable for the specified quantity and stock ID.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/is-product-salable-for-requested-qty/sp2/2/30`

**Payload:**

None

**Response:**

```json
{
  "salable": true,
  "errors": []
}
```

## Get the stock ID and name for a sales channel

This call returns the stock ID associated with the specified sales channel type and name.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/inventory/stock-resolver/website/na_site`

**Payload:**

None

**Response:**

```json
{
  "stock_id": 2,
  "name": "North America Stock",
  "extension_attributes": {
    "sales_channels": [
      {
        "type": "website",
        "code": "na_site"
      }
    ]
  }
}
```
