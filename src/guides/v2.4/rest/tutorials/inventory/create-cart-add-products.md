---
layout: tutorial
group: rest-api
title: Step 7. Create a cart and add products to it
subtitle: Order processing with Inventory Management
menu_title: Step 7. Create a cart and add products to it
menu_order: 70
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

Next, we'll create a cart and add the items that we modified in [Step 5. Reassign products to custom sources](reassign-products-to-another-source.html).

## Create a cart

The call to create a cart and add items must contain the customer’s authorization token in the authorization header.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

**Payload:**

None

**Response:**

The response is the `quoteId`: 3

## Check for product availability

In [Step 5. Reassign products to custom sources](reassign-products-to-another-source.html), we defined the quantities of products `24-WB01` and `24-WB03` for the US source as follows:

Product | Northeast Warehouse | Brooklyn Store  | Manhattan Store | Long Island Store | West Warehouse | Berkeley Store | Sausalito Store
--- | --- | --- | ---
`24-WB01` | 35 | 10 | 10 | 10 | 15 | 10 | 10
`24-WB03` | 50 | 0 | 0 | 0 | 10 | 20 | 20

Later in this step, we'll order 40 `24-WB01` items and 20 `24-WB03` items. We can see that we have enough salable items for both products, but let's check programmatically.

### Check for product `24-WB01`

The `get-product-salable-quantity` endpoint indicates how many items are available for sale for the specified product (24-WB01) and source (2).

**Endpoint:**

`GET <host>/rest/default/V1/inventory/get-product-salable-quantity/24-WB01/2`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

Not applicable

**Response:**

`100`

### Check for product `24-WB03`

Use the same endpoint to check the quantity available for product `24-WB03`.

**Endpoint:**

`GET <host>/rest/default/V1/inventory/get-product-salable-quantity/24-WB03/2`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

Not applicable

**Response:**

`100`

## Add items to the cart

We have ensured that we have enough physical products in stock to fulfill the potential order.

### Add the first simple product

In this call, we'll add 20 `24-WB03` items. This portion of the order can be fulfilled from the Northeast warehouse.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/items`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

**Payload:**

```json
{
  "cartItem": {
    "sku": "24-WB03",
    "qty": 20,
    "quote_id": "3"
  }
}
```

**Response:**

Note the `item_id` for use in subsequent steps.

The discount is a result of the "20% OFF Every $200-plus purchase!" cart price rule.

```json
{
    "item_id": 5,
    "sku": "24-WB03",
    "qty": 20,
    "name": "Driven Backpack",
    "price": 36,
    "product_type": "simple",
    "quote_id": "3",
    "extension_attributes": {
        "discounts": [
            {
                "discount_data": {
                    "amount": 144,
                    "base_amount": 144,
                    "original_amount": 144,
                    "base_original_amount": 144
                },
                "rule_label": "Discount",
                "rule_id": 3
            }
        ]
    }
}
```

### Add the second simple product

Use the same endpoint to add 40 items of `24-WB01` to the cart. Multiple sources will be required to fulfill this potential order.

**Payload:**

```json
{
  "cartItem": {
    "sku": "24-WB01",
    "qty": 40,
    "quote_id": "3"
  }
}
```
**Response:**

Note the `item_id` for use in subsequent steps.

```json
{
    "item_id": 6,
    "sku": "24-WB01",
    "qty": 40,
    "name": "Voyage Yoga Bag",
    "price": 32,
    "product_type": "simple",
    "quote_id": "3",
    "extension_attributes": {
        "discounts": [
            {
                "discount_data": {
                    "amount": 256,
                    "base_amount": 256,
                    "original_amount": 256,
                    "base_original_amount": 256
                },
                "rule_label": "Discount",
                "rule_id": 3
            }
        ]
    }
}
```

### Add a downloadable product

Finally, we'll add a single instance of a downloadable product to the cart.

**Payload:**

```json
{
  "cartItem": {
    "sku": "240-LV06",
    "qty": 1,
    "quote_id": "3"
  }
}
```

**Response:**

```json
    "item_id": 7,
    "sku": "240-LV06",
    "qty": 1,
    "name": "Yoga Adventure",
    "price": 22,
    "product_type": "downloadable",
    "quote_id": "3",
    "product_option": {
        "extension_attributes": {
            "downloadable_option": {
                "downloadable_links": [
                    3
                ]
            }
        }
    },
    "extension_attributes": {
        "discounts": [
            {
                "discount_data": {
                    "amount": 4.4,
                    "base_amount": 4.4,
                    "original_amount": 4.4,
                    "base_original_amount": 4.4
                },
                "rule_label": "Discount",
                "rule_id": 3
            }
        ]
    }
}
```

## Verify this step {#verify-step}

Sign in as the customer at `http://<host>` and click on the shopping cart. All the items you added display in the cart.
