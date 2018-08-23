---
layout: tutorial
group: rest
title: Step 5. Create products
subtitle: Order processing with MSI
menu_title: Step 5. Create products
menu_order: 50
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---


This step creates two simple products and one virtual product. Magento assigns these items to the default source.

{:.bs-callout .bs-callout-tip}
In later revisions of this topic, we'll migrate products already defined in the Luma store.

## Create a simple product

In a single-source inventory environment, you would use the `qty` field in the `stock_item` object to specify how many items are available for sale. In MSI, you manage quantities with a different call.

**Endpoint**

`POST http://<host>/rest/all/V1/products`

**Scope**

`all` store views

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

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
      "website_ids": ["1", "2", "3"]
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
    "created_at": "2018-08-02 16:03:19",
    "updated_at": "2018-08-02 16:03:19",
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

Use the same endpoint to create the second simple product.

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
			"website_ids": ["1", "2", "3"]
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
    "created_at": "2018-08-02 16:03:58",
    "updated_at": "2018-08-02 16:03:58",
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

Virtual products do not require a shipment. We will create one just to show that the Source Selection Algorithm does not consider virtual products.

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
    "id": 9,
    "sku": "vp1",
    "name": "Gold Club Membership",
    "attribute_set_id": 4,
    "price": 20,
    "status": 1,
    "visibility": 4,
    "type_id": "virtual",
    "created_at": "2018-08-02 16:05:29",
    "updated_at": "2018-08-02 16:05:29",
    "extension_attributes": {
        "website_ids": [
            1,
            2,
            3
        ],
        "stock_item": {
            "item_id": 9,
            "product_id": 9,
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
            "value": "gold-club-membership"
        },
        {
            "attribute_code": "tax_class_id",
            "value": "2"
        }
    ]
}
```

## Verify this step

In Admin, click **Catalog** > **Products**. With multiple sources added, the Product grid includes new columns:

* The **Quantity** column is replaced with the **Quantity Per Source** column, which contains the assigned quantity value for an assigned source.

* A new **Salable Quantity** column contains the aggregated quantity per stock value, calculated for all assigned sources.

These new products display a **Quantity Per Source** value of **Default Source: 0** and **Salable Quantity** value of **Default Stock: 0**.
