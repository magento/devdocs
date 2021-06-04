---
group: rest-api
title: Create bundle products tutorial
functional_areas:
  - Integration
---

A bundle is a build your own, customizable product. Each bundle product can be either
[Simple Product](https://docs.magento.com/user-guide/catalog/product-create-simple.html) or [Virtual Product](https://docs.magento.com/user-guide/catalog/product-create-virtual.html)

This tutorial describes how you can use the Magento REST API to create bundle products.

{:.bs-callout-info}
Install a Magento 2.3 (or later) instance with sample data defines a functional store, called Luma. Use REST client to send calls to Magento , see [Postman](https://www.getpostman.com/). Obtain an admin authorization token. See [How to generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information. [REST Tutorials]({{ page.baseurl }}/rest/tutorials/index.html) provides additional information about completing any Magento REST tutorial.

## 1. Create an bundle product

The first step is to create the bundle product.

### Endpoint

`POST V1/products`

### Payload

```json
    {
       "product": {
          "sku": "new-bundle-sku",
          "name": "New bundle product",
          "attribute_set_id": 4,
          "status": 1,
          "visibility": 4,
          "type_id": "bundle",
          "created_at": "2020-05-28 00:00:00",
          "extension_attributes": {
             "stock_item": {
                "is_in_stock": true,
                "qty": 0
             },
             "website_ids": [
                1
             ],
             "category_links": [
                {
                   "position": 0,
                   "category_id": "3"
                },
                {
                   "position": 1,
                   "category_id": "5"
                }
             ],
             "bundle_product_options": [
                {
                   "option_id": 0,
                   "position": 1,
                   "sku": "bundle-option-sku",
                   "title": "New bundle products",
                   "type": "radio",
                   "required": true,
                   "product_links": [
                      {
                         "sku": "24-MB01",
                         "option_id": 1,
                         "qty": 1,
                         "position": 1,
                         "is_default": true,
                         "price": null,
                         "price_type": null,
                         "can_change_quantity": 1
                      },
                      {
                         "sku": "24-MB04",
                         "option_id": 1,
                         "qty": 1,
                         "position": 2,
                         "is_default": false,
                         "price": null,
                         "price_type": null,
                         "can_change_quantity": 1
                      }
                   ]
                }
             ]
          },
          "custom_attributes": [
             {
                "attribute_code": "meta_title",
                "value": "New bundle"
             },
             {
                "attribute_code": "meta_keyword",
                "value": "New bundle"
             },
             {
                "attribute_code": "meta_description",
                "value": "New bundle"
             },
             {
                "attribute_code": "short_description",
                "value": "<p>New bundle</p>"
             }
          ]
       },
       "saveOptions": true
    }
```

### Response

```json
    {
       "id": 2063,
       "sku": "new-bundle-sku",
       "name": "New bundle product",
       "attribute_set_id": 4,
       "price": 0,
       "status": 1,
       "visibility": 4,
       "type_id": "bundle",
       "created_at": "2020-05-28 00:00:00",
       "updated_at": "2021-06-03 13:58:16",
       "weight": 0,
       "extension_attributes": {
          "website_ids": [
             1
          ],
          "category_links": [
             {
                "position": 0,
                "category_id": "3"
             },
             {
                "position": 1,
                "category_id": "5"
             }
          ],
          "stock_item": {
             "item_id": 2061,
             "product_id": 2063,
             "stock_id": 1,
             "qty": 0,
             "is_in_stock": true,
             "is_qty_decimal": false,
             "show_default_notification_message": false,
             "use_config_min_qty": true,
             "min_qty": 0,
             "use_config_min_sale_qty": 1,
             "min_sale_qty": 1,
             "use_config_max_sale_qty": true,
             "max_sale_qty": 10000,
             "use_config_backorders": true,
             "backorders": 0,
             "use_config_notify_stock_qty": true,
             "notify_stock_qty": 1,
             "use_config_qty_increments": true,
             "qty_increments": 0,
             "use_config_enable_qty_inc": true,
             "enable_qty_increments": false,
             "use_config_manage_stock": true,
             "manage_stock": true,
             "low_stock_date": null,
             "is_decimal_divided": false,
             "stock_status_changed_auto": 0
          },
          "bundle_product_options": [
             {
                "option_id": 21,
                "title": "New bundle products",
                "required": true,
                "type": "radio",
                "position": 1,
                "sku": "new-bundle-sku",
                "product_links": [
                   {
                      "id": "41",
                      "sku": "24-MB01",
                      "option_id": 21,
                      "qty": 1,
                      "position": 1,
                      "is_default": true,
                      "price": 34,
                      "price_type": null,
                      "can_change_quantity": 1
                   },
                   {
                      "id": "42",
                      "sku": "24-MB04",
                      "option_id": 21,
                      "qty": 1,
                      "position": 2,
                      "is_default": false,
                      "price": 32,
                      "price_type": null,
                      "can_change_quantity": 1
                   }
                ]
             }
          ]
       },
       "options": [],
       "media_gallery_entries": [],
       "custom_attributes": [
          {
             "attribute_code": "shipment_type",
             "value": "0"
          },
          {
             "attribute_code": "options_container",
             "value": "container2"
          },
          {
             "attribute_code": "price_view",
             "value": "34"
          },
          {
             "attribute_code": "url_key",
             "value": "new-bundle-product"
          },
          {
             "attribute_code": "msrp_display_actual_price_type",
             "value": "0"
          },
          {
             "attribute_code": "required_options",
             "value": "0"
          },
          {
             "attribute_code": "has_options",
             "value": "0"
          },
          {
             "attribute_code": "meta_title",
             "value": "New bundle"
          },
          {
             "attribute_code": "sku_type",
             "value": "0"
          },
          {
             "attribute_code": "meta_keyword",
             "value": "New bundle"
          },
          {
             "attribute_code": "price_type",
             "value": "0"
          },
          {
             "attribute_code": "meta_description",
             "value": "New bundle"
          },
          {
             "attribute_code": "tax_class_id",
             "value": "2"
          },
          {
             "attribute_code": "weight_type",
             "value": "0"
          },
          {
             "attribute_code": "category_ids",
             "value": [
                "3",
                "5"
             ]
          },
          {
             "attribute_code": "short_description",
             "value": "<p>New bundle</p>"
          }
       ]
    }
```

## 2. Upload product image for bundle product

Now that we have created a bundle product, we need to upload product image to it.

1. Update the product image by `SKU`.
1. The product image should be `base64encode`.
1. Image supported `type` must be `image/png`.

### Endpoint

`POST V1/products/<sku>/media`

### Payload

```json
    {
       "entry": {
          "media_type": "image",
          "types": [
             "image",
             "small_image",
             "thumbnail"
          ],
          "content": {
             "type": "image/png",
             "name": "bag.png",
             "base64_encoded_data": "iVBO....mCC"
          }
       }
    }
```

### Response

1234

The above response returns `<value_id>` from `catalog_product_entity_varchar table`

### Output

![New bundle product]({{ page.baseurl }}/rest/images/new-bundle-product.png)