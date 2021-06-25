---
layout: tutorial
group: rest-api
title: Step 10. Create an invoice
subtitle: Order processing with Inventory Management
menu_title: Step 10. Create an invoice
menu_order: 100
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

You create an [invoice](https://glossary.magento.com/invoice) after you receive payment for an order. In this example, the order was paid offline via a bank transfer. Therefore, you must tell Magento that payment for the order has been captured.

After you submit the invoice, Magento adjusts the Quantity per Source value for non-physical products.

## Capture payment {#capture-payment}

This example creates a full invoice.

**Endpoint:**

`POST <host>/rest/default/V1/order/3/invoice`

where `3` is the `orderid`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload:**

```json
{
  "capture": true,
  "notify": true
}
```

**Response:**

An invoice `id`, such as `3`.

## Retrieve the order item IDs

When you create an order, Magento generates an `order_item_id` for each product. These values will be used in [Step 12. Create a shipment]({{page.baseurl}}/rest/tutorials/inventory/create-shipment.html).

**Endpoint:**

`GET <host>/rest/default/V1/invoices/3`

where `3` is the invoice ID

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload:**

Not applicable

**Response:**

```json
{
    "base_currency_code": "USD",
    "base_discount_amount": -404.4,
    "base_grand_total": 1917.6,
    "base_discount_tax_compensation_amount": 0,
    "base_shipping_amount": 300,
    "base_shipping_discount_tax_compensation_amnt": 0,
    "base_shipping_incl_tax": 300,
    "base_shipping_tax_amount": 0,
    "base_subtotal": 2022,
    "base_subtotal_incl_tax": 2022,
    "base_tax_amount": 0,
    "base_to_global_rate": 1,
    "base_to_order_rate": 1,
    "billing_address_id": 6,
    "can_void_flag": 0,
    "created_at": "2020-07-23 16:59:20",
    "discount_amount": -404.4,
    "email_sent": 1,
    "entity_id": 3,
    "global_currency_code": "USD",
    "grand_total": 1917.6,
    "discount_tax_compensation_amount": 0,
    "increment_id": "000000003",
    "order_currency_code": "USD",
    "order_id": 3,
    "shipping_address_id": 5,
    "shipping_amount": 300,
    "shipping_discount_tax_compensation_amount": 0,
    "shipping_incl_tax": 300,
    "shipping_tax_amount": 0,
    "state": 2,
    "store_currency_code": "USD",
    "store_id": 1,
    "store_to_base_rate": 0,
    "store_to_order_rate": 0,
    "subtotal": 2022,
    "subtotal_incl_tax": 2022,
    "tax_amount": 0,
    "total_qty": 61,
    "updated_at": "2020-07-23 16:59:21",
    "items": [
        {
            "base_discount_amount": 144,
            "base_discount_tax_compensation_amount": 0,
            "base_price": 36,
            "base_price_incl_tax": 36,
            "base_row_total": 720,
            "base_row_total_incl_tax": 720,
            "base_tax_amount": 0,
            "discount_amount": 144,
            "entity_id": 3,
            "discount_tax_compensation_amount": 0,
            "name": "Driven Backpack",
            "parent_id": 3,
            "price": 36,
            "price_incl_tax": 36,
            "product_id": 12,
            "row_total": 720,
            "row_total_incl_tax": 720,
            "sku": "24-WB03",
            "tax_amount": 0,
            "order_item_id": 3,
            "qty": 20
        },
        {
            "base_discount_amount": 256,
            "base_discount_tax_compensation_amount": 0,
            "base_price": 32,
            "base_price_incl_tax": 32,
            "base_row_total": 1280,
            "base_row_total_incl_tax": 1280,
            "base_tax_amount": 0,
            "discount_amount": 256,
            "entity_id": 4,
            "discount_tax_compensation_amount": 0,
            "name": "Voyage Yoga Bag",
            "parent_id": 3,
            "price": 32,
            "price_incl_tax": 32,
            "product_id": 8,
            "row_total": 1280,
            "row_total_incl_tax": 1280,
            "sku": "24-WB01",
            "tax_amount": 0,
            "order_item_id": 4,
            "qty": 40
        },
        {
            "base_discount_amount": 4.4,
            "base_discount_tax_compensation_amount": 0,
            "base_price": 22,
            "base_price_incl_tax": 22,
            "base_row_total": 22,
            "base_row_total_incl_tax": 22,
            "base_tax_amount": 0,
            "discount_amount": 4.4,
            "entity_id": 5,
            "discount_tax_compensation_amount": 0,
            "name": "Yoga Adventure",
            "parent_id": 3,
            "price": 22,
            "price_incl_tax": 22,
            "product_id": 47,
            "row_total": 22,
            "row_total_incl_tax": 22,
            "sku": "240-LV06",
            "tax_amount": 0,
            "order_item_id": 5,
            "qty": 1
        }
    ],
    "comments": []
}
```

## Verify this step {#verify-step}

1. Click **Sales** > **Invoices**. The invoice displays in the grid with a status of Paid. Then click **Sales** > **Orders**. The status is Processing.

1. Click **Catalog** > **Products**. For `vp1`, Magento adjusted the value of **Quantity per Source** and **Salable Quantity** to 9998 for all sources and stocks.
