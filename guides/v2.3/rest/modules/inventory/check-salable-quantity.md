---
group: rest-api
title: Check salable quantities
---

Magento provides two endpoints that allow you to check whether a product from a specified stock is salable and the available quantity.

**Service names**

```
inventorySalesApiIsProductSalableV1
inventorySalesApiGetProductSalabilituV1
```

**REST endpoints**

```
GET /V1/inventory/is-product-salable/:sku/:stockId
GET /V1/inventory/get-product-salable-quantity/:sku/:stockId
```

## Check whether a product is salable

This call returns boolean value that indicates whether the product from the specified stock is salable.

**Sample usage**

`GET /V1/inventory/is-product-salable/sp2/2`

**Payload**

None

**Response**

`true` or `false`

## Check the available quantity of a salable product

This call returns the available quantity of a product assigned to the specified stock ID.

**Sample usage**

GET /V1/inventory/get-product-salable-quantity/sp2/2

**Payload**

None

**Response**

An integer, such as `15`.
