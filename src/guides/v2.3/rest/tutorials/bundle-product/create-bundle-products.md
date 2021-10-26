---
layout: tutorial
group: rest-api
title: Step 3. Create the bundle product
subtitle: Create a bundle product tutorial
menu_title: Step 3. Create the bundle product
menu_order: 20
level3_subgroup: bundle-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: Ziffity
contributor_link: https://ziffity.com/
---

We have the information we need to create the Quest Pursuit Jump Cardio Ball Clone bundle product.

The `visibility` attribute is set to 4, meaning the product can be found by browsing or searching.

The below table shows the equivalent code for the visibility attribute:

Visibility | Code
--- | ---
`Not Visible Individually` | 1
`Catalog` | 2
`Search` | 3
`Catalog, Search` | 4

**Endpoint:**

`POST <host>/rest/default/V1/products`

**Payload:**

```json
{
   "product":{
      "sku":"24-UG00",
      "name":"Quest Pursuit Jump Cardio Ball Kit",
      "attribute_set_id":11,
      "type_id":"bundle",
      "extension_attributes":{
         "stock_item":{
            "is_in_stock":true,
            "qty":100
         },
         "website_ids":[
            1
         ],
         "category_links":[
            {
               "position":0,
               "category_id":"3"
            },
            {
               "position":1,
               "category_id":"5"
            }
         ],
         "bundle_product_options":[
            {
               "option_id":1,
               "title":"Bands",
               "required":true,
               "type":"radio",
               "position":1,
               "sku":"24-UG00",
               "product_links":[
                  {
                     "id":"1",
                     "sku":"24-UG01",
                     "option_id":1,
                     "qty":1,
                     "position":1,
                     "is_default":true,
                     "price":23,
                     "price_type":null,
                     "can_change_quantity":1
                  },
                  {
                     "id":"2",
                     "sku":"24-UG02",
                     "option_id":1,
                     "qty":1,
                     "position":2,
                     "is_default":false,
                     "price":16,
                     "price_type":null,
                     "can_change_quantity":1
                  }
               ]
            },
            {
               "option_id":2,
               "title":"Jump Rope",
               "required":true,
               "type":"radio",
               "position":2,
               "sku":"24-UG00",
               "product_links":[
                  {
                     "id":"4",
                     "sku":"24-UG04",
                     "option_id":2,
                     "qty":1,
                     "position":1,
                     "is_default":true,
                     "price":12,
                     "price_type":null,
                     "can_change_quantity":1
                  }
               ]
            },
            {
               "option_id":3,
               "title":"Cardio Ball",
               "required":true,
               "type":"radio",
               "position":4,
               "sku":"24-WG080",
               "product_links":[
                  {
                     "id":"8",
                     "sku":"24-UG07",
                     "option_id":3,
                     "qty":1,
                     "position":1,
                     "is_default":true,
                     "price":12,
                     "price_type":null,
                     "can_change_quantity":1
                  }
               ]
            }
         ]
      },
      "custom_attributes":[
         {
            "attribute_code":"price_view",
            "value":"0"
         },
         {
            "attribute_code":"meta_title",
            "value":"Quest Pursuit Jump Cardio Ball Kit"
         },
         {
            "attribute_code":"meta_keyword",
            "value":"Quest Pursuit Jump Cardio Ball Kit"
         },
         {
            "attribute_code":"meta_description",
            "value":" <p>Set of three products like Quest Lumaflex™ Band, Pursuit Lumaflex™ Tone Band, Zing Jump Rope, Dual Handle Cardio Ball</p>"
         },
         {
            "attribute_code":"short_description",
            "value":"<p>The Quest Pursuit Jump Cardio Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle Cardio ball. Choose what you want. The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
         },
         {
            "attribute_code":"description",
            "value":"<p>The Quest Pursuit Jump Cardio Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle Cardio ball. Choose what you want. The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
         }
      ]
   },
   "saveOptions":true
}
```

**Response:**

{% collapsible Show code sample %}
```json
{
    "id": 2307,
    "sku": "24-UG00",
    "name": "Quest Pursuit Jump Cardio Ball Kit",
    "attribute_set_id": 11,
    "price": 0,
    "status": 1,
    "visibility": 4,
    "type_id": "bundle",
    "created_at": "2021-06-15 00:00:00",
    "updated_at": "2021-07-07 16:11:23",
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
            "item_id": 2341,
            "product_id": 2307,
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
                "option_id": 47,
                "title": "Bands",
                "required": true,
                "type": "radio",
                "position": 1,
                "sku": "24-UG00",
                "product_links": [
                    {
                        "id": "92",
                        "sku": "24-UG01",
                        "option_id": 47,
                        "qty": 1,
                        "position": 1,
                        "is_default": true,
                        "price": 23,
                        "price_type": null,
                        "can_change_quantity": 1
                    },
                    {
                        "id": "93",
                        "sku": "24-UG02",
                        "option_id": 47,
                        "qty": 1,
                        "position": 2,
                        "is_default": false,
                        "price": 16,
                        "price_type": null,
                        "can_change_quantity": 1
                    }
                ]
            },
            {
                "option_id": 48,
                "title": "Jump Rope",
                "required": true,
                "type": "radio",
                "position": 2,
                "sku": "24-UG00",
                "product_links": [
                    {
                        "id": "94",
                        "sku": "24-UG04",
                        "option_id": 48,
                        "qty": 1,
                        "position": 1,
                        "is_default": true,
                        "price": 12,
                        "price_type": null,
                        "can_change_quantity": 1
                    }
                ]
            },
            {
                "option_id": 49,
                "title": "Cardio Ball",
                "required": true,
                "type": "radio",
                "position": 4,
                "sku": "24-UG00",
                "product_links": [
                    {
                        "id": "95",
                        "sku": "24-UG07",
                        "option_id": 49,
                        "qty": 1,
                        "position": 1,
                        "is_default": true,
                        "price": 12,
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
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "quest-pursuit-jump-Cardio-ball-kit"
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
            "value": "Quest Pursuit Jump Cardio Ball Kit"
        },
        {
            "attribute_code": "sku_type",
            "value": "0"
        },
        {
            "attribute_code": "meta_keyword",
            "value": "Quest Pursuit Jump Cardio Ball Kit"
        },
        {
            "attribute_code": "price_type",
            "value": "0"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "meta_description",
            "value": " <p>Set of three products like  Quest Lumaflex™ Band, Pursuit Lumaflex™ Tone Band, Zing Jump Rope, Dual Handle Cardio Ball</p>"
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
            "value": "<p>The Quest Pursuit Jump Cardio Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle cardio ball. Choose what you want. The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
        },
        {
            "attribute_code": "description",
            "value": "<p>The Quest Pursuit Jump Cardio Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle cardio ball. Choose what you want. The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
        }
    ]
}
```
{% endcollapsible %}

## Verify this step

Log in to the Luma website and select **Catalog > Products**. The product appears in the grid.

  ![Product page with bundle product]({{ page.baseurl }}/rest/images/new-bundle-product.png)

## Congratulations! You've finished.
{:.no_toc}

{:.ref-header}
Related topic

[Order Processing with REST APIs Tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html)