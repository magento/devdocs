---
layout: tutorial
group: rest-api
title: Step 3. Create the bundle product 
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
---

Let's add the bundle product. We will use two bundle options: `RAM` and `Monitor`.

**Endpoint:**

```html
POST http://domain.com/rest/default/V1/products
```

**Payload:**

```json
{
  "product": {
    "sku": "Desktop-Computer",
    "name": "Desktop Computer",
    "attribute_set_id": 4,
    "price": 1000,
    "status": 1,
    "visibility": 4,
    "type_id": "bundle",
    "extension_attributes": {
      "stock_item": {
        "qty": 100,
        "is_in_stock":true
      },
      "website_ids": [
        1
      ],
      "category_links": [
            {
                "position": 0,
                "category_id": "32"
            }
      ],
      "bundle_product_options": [
        {
          "option_id": 0,
          "position": 1,
          "sku": "compuer-ram",
          "title": "RAM",
          "type": "select",
          "required": true,
          "product_links": [
            {
              "sku": "RAM-12G",
              "option_id": 1,
              "qty": 1,
              "position": 1,
              "is_default": false,
              "price": 0,
              "price_type": 0,
              "can_change_quantity": 0
            },
            {
              "sku": "RAM-24G",
              "option_id": 1,
              "qty": 1,
              "position": 2,
              "is_default": false,
              "price": 0,
              "price_type": 0,
              "can_change_quantity": 0
            }
          ]
        },
        {
          "option_id": 1,
          "position": 2,
          "sku": "computer-monitor",
          "title": "Monitor",
          "type": "select",
          "required": true,
          "product_links": [
            {
              "sku": "Monitor-15",
              "option_id": 2,
              "qty": 1,
              "position": 1,
              "is_default": false,
              "price": 0,
              "price_type": 0,
              "can_change_quantity": 0
            },
            {
              "sku": "Monitor-17",
              "option_id": 2,
              "qty": 1,
              "position": 2,
              "is_default": false,
              "price": 0,
              "price_type": 0,
              "can_change_quantity": 0
            }
          ]
        }
      ]
    },
    "custom_attributes": [
      {
        "attribute_code": "price_view",
        "value": "0"
      }
    ]
  },
  "saveOptions": true
}
```

**Response:**

{% collapsible Show response %}

```json
{
    "id": 20,
    "sku": "Desktop-Computer",
    "name": "Desktop Computer",
    "attribute_set_id": 4,
    "price": 0,
    "status": 1,
    "visibility": 4,
    "type_id": "bundle",
    "created_at": "2022-04-12 21:11:44",
    "updated_at": "2022-04-12 21:11:44",
    "weight": 0,
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
            "item_id": 20,
            "product_id": 20,
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
                "option_id": 12,
                "title": "RAM",
                "required": true,
                "type": "select",
                "position": 1,
                "sku": "Desktop-Computer",
                "product_links": [
                    {
                        "id": "15",
                        "sku": "RAM-12G",
                        "option_id": 12,
                        "qty": 1,
                        "position": 1,
                        "is_default": false,
                        "price": 25,
                        "price_type": null,
                        "can_change_quantity": 0
                    },
                    {
                        "id": "16",
                        "sku": "RAM-24G",
                        "option_id": 12,
                        "qty": 1,
                        "position": 2,
                        "is_default": false,
                        "price": 25,
                        "price_type": null,
                        "can_change_quantity": 0
                    }
                ]
            },
            {
                "option_id": 13,
                "title": "Monitor",
                "required": true,
                "type": "select",
                "position": 2,
                "sku": "Desktop-Computer",
                "product_links": [
                    {
                        "id": "17",
                        "sku": "Monitor-15",
                        "option_id": 13,
                        "qty": 1,
                        "position": 1,
                        "is_default": false,
                        "price": 25,
                        "price_type": null,
                        "can_change_quantity": 0
                    },
                    {
                        "id": "18",
                        "sku": "Monitor-17",
                        "option_id": 13,
                        "qty": 1,
                        "position": 2,
                        "is_default": false,
                        "price": 25,
                        "price_type": null,
                        "can_change_quantity": 0
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
            "attribute_code": "msrp_display_actual_price_type",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "desktop-computer"
        },
        {
            "attribute_code": "price_view",
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
            "attribute_code": "sku_type",
            "value": "0"
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
            "attribute_code": "weight_type",
            "value": "0"
        },
        {
            "attribute_code": "category_ids",
            "value": [
                "32"
            ]
        }
    ]
}
```

## Verify this step

*  On the Luma storefront page, search for `Desktop Computer`. There will be 1 result.

  ![Search]({{ page.baseurl }}/rest/tutorials/bundle-product/images/search-desktop-computer.png)

*  Click on the Desktop Computer product.

  ![Product]({{ page.baseurl }}/rest/tutorials/bundle-product/images/site-desktop-computer.png)

*  Customize Desktop Computer and add to the shopping cart.

  ![Shopping Cart]({{ page.baseurl }}/rest/tutorials/bundle-product/images/shopping-cart-desktop-computer.png)

 {:.bs-callout-info}
You might want to reindex and clear cache if you don't see the bundle product on the frontend.
