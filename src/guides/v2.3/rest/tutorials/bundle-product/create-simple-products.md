---
layout: tutorial
group: rest-api
title: Step 2. Create the simple products
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
---

 {:.bs-callout-info}
Before you run the code, please verify that the attribute values are the same in your installation. See [Get the list of attributes defined in an attribute set]({{ page.baseurl }}/rest/tutorials/bundle-product/plan-product.html#get-attributes) for more information.

We will create 4 simple products: `RAM 12G`, `RAM 24G`, `Monitor 15'` and `Monitor 17'`.

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products
```

**Payload 1:**

```json
{
  "product": {
    "sku": "RAM-12G",
    "name": "RAM 12G",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "qty": "10",
            "is_in_stock": true
        }
    },
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "RAM 12G Unit"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
  }
}
```

**Response 1:**

{% collapsible Show code sample %}

```json
{
    "id": 16,
    "sku": "RAM-12G",
    "name": "RAM 12G",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2022-04-08 21:57:34",
    "updated_at": "2022-04-08 21:57:34",
    "weight": 0.5,
    "extension_attributes": {
        "website_ids": [
            1
        ],
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "item_id": 16,
            "product_id": 16,
            "stock_id": 1,
            "qty": 10,
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
        }
    },
    "options": [],
    "media_gallery_entries": [],
    "custom_attributes": [
        {
            "attribute_code": "options_container",
            "value": "container2"
        },
        {
            "attribute_code": "msrp_display_actual_price_type",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "ram-12g"
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
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "32"
            ]
        },
        {
            "attribute_code": "description",
            "value": "RAM 12G Unit"
        }
    ]
}
```

**Payload 2:**

```json
{
  "product": {
    "sku": "RAM-24G",
    "name": "RAM 24G",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "qty": "10",
            "is_in_stock": true
        }
    },
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "RAM 24G Unit"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
  }
}
```

**Response 2:**

{% collapsible Show code sample %}

```json
{
    "id": 17,
    "sku": "RAM-24G",
    "name": "RAM 24G",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2022-04-08 22:02:40",
    "updated_at": "2022-04-08 22:02:40",
    "weight": 0.5,
    "extension_attributes": {
        "website_ids": [
            1
        ],
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "item_id": 17,
            "product_id": 17,
            "stock_id": 1,
            "qty": 10,
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
        }
    },
    "options": [],
    "media_gallery_entries": [],
    "custom_attributes": [
        {
            "attribute_code": "options_container",
            "value": "container2"
        },
        {
            "attribute_code": "msrp_display_actual_price_type",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "ram-24g"
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
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "32"
            ]
        },
        {
            "attribute_code": "description",
            "value": "RAM 24G Unit"
        }
    ]
}
```

**Payload 3:**

```json
{
  "product": {
    "sku": "Monitor-15",
    "name": "Monitor 15'",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "qty": "10",
            "is_in_stock": true
        }
    },
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "Monitor 15'"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
  }
}
```

**Response 3:**

{% collapsible Show code sample %}

```json
{
    "id": 18,
    "sku": "Monitor-15",
    "name": "Monitor 15'",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2022-04-08 22:04:11",
    "updated_at": "2022-04-08 22:04:11",
    "weight": 0.5,
    "extension_attributes": {
        "website_ids": [
            1
        ],
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "item_id": 18,
            "product_id": 18,
            "stock_id": 1,
            "qty": 10,
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
        }
    },
    "options": [],
    "media_gallery_entries": [],
    "custom_attributes": [
        {
            "attribute_code": "options_container",
            "value": "container2"
        },
        {
            "attribute_code": "msrp_display_actual_price_type",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "monitor-15"
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
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "32"
            ]
        },
        {
            "attribute_code": "description",
            "value": "Monitor 15'"
        }
    ]
}
```

**Payload 4:**

```json
{
  "product": {
    "sku": "Monitor-17",
    "name": "Monitor 17'",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "qty": "10",
            "is_in_stock": true
        }
    },
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "Monitor 17'"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
  }
}
```

**Response 4:**

{% collapsible Show code sample %}

```json
{
    "id": 19,
    "sku": "Monitor-17",
    "name": "Monitor 17'",
    "attribute_set_id": 4,
    "price": 25,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2022-04-08 22:06:21",
    "updated_at": "2022-04-08 22:06:21",
    "weight": 0.5,
    "extension_attributes": {
        "website_ids": [
            1
        ],
        "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
        ],
        "stock_item": {
            "item_id": 19,
            "product_id": 19,
            "stock_id": 1,
            "qty": 10,
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
        }
    },
    "options": [],
    "media_gallery_entries": [],
    "custom_attributes": [
        {
            "attribute_code": "options_container",
            "value": "container2"
        },
        {
            "attribute_code": "msrp_display_actual_price_type",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "monitor-17"
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
            "attribute_code": "tax_class_id",
            "value": "2"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "32"
            ]
        },
        {
            "attribute_code": "description",
            "value": "Monitor 17'"
        }
    ]
}
```

## Verify this step

*  Log in to the Luma website and select <b>Catalog > Products</b>. The products appear in the grid.

  ![Simple products]({{ page.baseurl }}/rest/tutorials/bundle-product/images/simple-products-admin-grid.png)

