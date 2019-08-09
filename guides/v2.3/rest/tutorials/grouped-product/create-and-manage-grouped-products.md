---
group: rest-api
title: Create and manage grouped products tutorial
functional_areas:
  - Integration
---

A grouped product consists of simple standalone products that are presented as a group. You can offer variations of a single product, or group them by season or theme.

This tutorial describes how you can use the Magento REST API to create and manage grouped products.

## 1. Create an empty grouped product

### Service name

`catalogProductRepositoryV1`

### Service endpoint

`POST V1/products`

### Example

```json
    {
       "product":{
          "sku":"new-grouped",
          "name":"New Grouped Product",
          "attribute_set_id":11,
          "type_id":"grouped",
          "visibility":4
       }
    }
```

## 2. Populate the grouped product with simple products

### Service name

`catalogProductLinkManagementV1`

### Service endpoint

`POST V1/products/{sku}/links`

### Example

```json
    {
       "items":[
          {
             "sku":"new-grouped",
             "link_type":"associated",
             "linked_product_sku":"24-WB01",
             "linked_product_type":"simple",
             "position":1,
             "extension_attributes":{
                "qty":1
             }
          },
          {
             "sku":"new-grouped",
             "link_type":"associated",
             "linked_product_sku":"24-WB02",
             "linked_product_type":"simple",
             "position":2,
             "extension_attributes":{
                "qty":1
             }
          },
          {
             "sku":"new-grouped",
             "link_type":"associated",
             "linked_product_sku":"24-WB05",
             "linked_product_type":"simple",
             "position":3,
             "extension_attributes":{
                "qty":1
             }
          }
       ]
    }
```

## 3. Add another simple product to the grouped product

### Service name

`catalogProductLinkManagementV1`

### Service endpoint

`PUT /V1/products/{sku}/links`

### Example

```json
    {
       "entity":{
          "sku":"new-grouped",
          "link_type":"associated",
          "linked_product_sku":"24-UG01",
          "linked_product_type":"simple",
          "position":4,
          "extension_attributes":{
             "qty":1
          }
       }
    }
```

## Verify the steps

1. Log into the Magento Admin.
1. Select **Catalog > Products**.
1. Click on the **New Grouped Product** grouped product and expand the **Grouped Products** section.

  ![New grouped product]({{ page.baseurl }}/rest/images/new-grouped-product.png)

You also can use the `DELETE` endpoint to delete a simple product from the group product:

`DELETE /V1/products/{sku}/links/{type}/{linkedProductSku}`

## Related services

* `catalogProductRepositoryV1`
* `catalogProductLinkManagementV1`
* `catalogProductLinkRepositoryV1`
