---
layout: tutorial
group: rest
title: Step 7. Create products
menu_title: Step 7. Create products
menu_order: 70
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/7-create-products.md
functional_areas:
  - Integration
---


We'll create two simple products and one virtual product.

{:.bs-callout .bs-callout-tip}
This step contain additional product types in the future.

## Create a simple product

We'll assign a quantity of 100 items to SKU `sp1`. Magento assigns these items to the default source.

**Endpoint**

`POST http://<host>/rest/all/V1/products`

**Scope**

`all` store views

**Headers**

Content-Type application/json
Authorization: Bearer <admin_token>

**Payload**

``` json
{
	"product": {
    "name": "Simple Product 1",
		"sku": "sp1",
		"attribute_set_id": 4,
		"price": 5,
		"status": 1,
		"visibility": 4,
		"type_id": "simple",
		"weight": 0.8,
		"extension_attributes": {
			"website_ids": ["1", "2", "3"],
			"stock_item": {
				"qty": 100,
				"is_in_stock": true,
				"is_qty_decimal": false
			}
		}
	}
}
```

**Response**


``` json
{
    "id": 7,
    "sku": "sp1",
    "name": "Simple Product 1",
    "attribute_set_id": 4,
    "price": 5,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2018-07-26 15:41:05",
    "updated_at": "2018-07-26 15:41:05",
    "weight": 0.8,
    "extension_attributes": {
        "website_ids": [
            1,
            2,
            3
        ],
        "stock_item": {
            "item_id": 7,
            "product_id": 7,
            "stock_id": 1,
            "qty": 100,
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
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
        {
            "attribute_code": "category_ids",
            "value": []
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
            "value": "simple-product-1"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
}
```

## Create a second simple product

Use the same endpoint to create the second product. This time, we'll create 150 items.

**Payload**

``` json
{
	"product": {
    "name": "Simple Product 2",
		"sku": "sp2",
		"attribute_set_id": 4,
		"price": 10,
		"status": 1,
		"visibility": 4,
		"type_id": "simple",
		"weight": 0.8,
		"extension_attributes": {
			"website_ids": ["1", "2", "3"],
			"stock_item": {
				"qty": 150,
				"is_in_stock": true,
				"is_qty_decimal": false
			}
		}
	}
}
```

**Response**

``` json
{
    "id": 8,
    "sku": "sp2",
    "name": "Simple Product 2",
    "attribute_set_id": 4,
    "price": 10,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2018-07-26 15:42:51",
    "updated_at": "2018-07-26 15:42:51",
    "weight": 0.8,
    "extension_attributes": {
        "website_ids": [
            1,
            2,
            3
        ],
        "stock_item": {
            "item_id": 8,
            "product_id": 8,
            "stock_id": 1,
            "qty": 150,
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
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
        {
            "attribute_code": "category_ids",
            "value": []
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
            "value": "simple-product-2"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
}
```


## Create a virtual product

**Endpoint**

`POST http://<host>/rest/test/V1/products`

**Headers**

Content-Type application/json
Authorization: Bearer <admin_token>

**Payload**

``` json
{
	"product": {
    "name": "Gold Club Membership",
		"sku": "vp1",
		"attribute_set_id": 4,
		"price": 20,
		"status": 1,
		"visibility": 4,
		"type_id": "virtual",
		"extension_attributes": {
      "website_ids": ["1", "2", "3"]
		}
	}
}
```

**Response**

``` json
{
    "id": 19,
    "sku": "vp1",
    "name": "Gold Club",
    "attribute_set_id": 4,
    "price": 20,
    "status": 1,
    "visibility": 4,
    "type_id": "virtual",
    "created_at": "2018-07-26 04:09:07",
    "updated_at": "2018-07-26 04:09:07",
    "extension_attributes": {
        "website_ids": [
            1,
            2,
            3
        ],
        "stock_item": {
            "item_id": 19,
            "product_id": 19,
            "stock_id": 1,
            "qty": null,
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
        }
    },
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
        {
            "attribute_code": "category_ids",
            "value": []
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
            "value": "gold-club"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
}
```

## Verify this step

In Admin, click **Catalog** > **Products**.  The new products are displayed in the Catalog grid.
