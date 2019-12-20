---
layout: tutorial
group: rest-api
title: Step 2. Create the configurable product
subtitle: Create a configurable product tutorial
menu_title: Step 2. Create the configurable product
menu_order: 20
level3_subgroup: configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

We have the information we need to create the Champ Tee configurable product.

The sample payload does not contain the price or the size. These attributes will be defined in the simple products.

The `visibility` attribute is set to 4, meaning the product can be found by browsing or searching. This value will be changed for the simple products.

{:.bs-callout-info}
Before you using this code sample, verify that the attribute values are the same in your installation. See [Get the list of attributes defined in an attribute searchCriteria]({{ page.baseurl }}/rest/tutorials/configurable-product/plan-product.html#get-attributes) for more information.

**Endpoint:**

`POST <host>/rest/default/V1/products`

**Payload:**

```json
{
  "product": {
    "sku": "MS-Champ",
    "name": "Champ Tee",
    "attribute_set_id": 9,
    "status": 1,
    "visibility": 4,
    "type_id": "configurable",
    "weight": "0.5",
    "extension_attributes": {
        "category_links": [
            {
                "position": 0,
                "category_id": "11"
            },
            {
                "position": 1,
                "category_id": "12"
            },
            {
                "position": 2,
                "category_id": "16"
            }
        ]
    },
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "material",
            "value": "148"
        },
        {
            "attribute_code": "pattern",
            "value": "196"
        },
        {
            "attribute_code": "color",
            "value": "52"
        }
    ]
  }
}
```

**Response:**

{% collapsible Show code sample %}
```json
{
    "id": 2078,
    "sku": "MS-Champ",
    "name": "Champ Tee",
    "attribute_set_id": 9,
    "price": 0,
    "status": 1,
    "visibility": 4,
    "type_id": "configurable",
    "created_at": "2017-11-29 19:57:20",
    "updated_at": "2017-11-29 19:57:20",
    "weight": 0.5,
    "extension_attributes": {
        "website_ids": [
            1
        ],
        "category_links": [
            {
                "position": 0,
                "category_id": "11"
            },
            {
                "position": 1,
                "category_id": "12"
            },
            {
                "position": 2,
                "category_id": "16"
            }
        ],
        "stock_item": {
            "item_id": 2078,
            "product_id": 2078,
            "stock_id": 1,
            "qty": 0,
            "is_in_stock": false,
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
        "configurable_product_options": [],
        "configurable_product_links": []
    },
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
        },
        {
            "attribute_code": "color",
            "value": "52"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "11",
                "12",
                "16"
            ]
        },
        {
            "attribute_code": "options_container",
            "value": "container2"
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
            "attribute_code": "url_key",
            "value": "champ-tee"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "material",
            "value": "148"
        },
        {
            "attribute_code": "size",
            "value": "91"
        },
        {
            "attribute_code": "pattern",
            "value": "196"
        }
    ]
}
```
{% endcollapsible %}

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. The product appears in the grid.

  ![Product page with configurable product]({{ page.baseurl }}/rest/images/products-page.png)

*  On the Luma storefront page, search for `Champ`. No results are returned.
