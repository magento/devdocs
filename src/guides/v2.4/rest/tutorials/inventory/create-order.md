---
layout: tutorial
group: rest-api
title: Step 9. Create an order
subtitle: Order processing with Inventory Management
menu_title: Step 9. Create an order
menu_order: 90
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

The [shopping cart](https://glossary.magento.com/shopping-cart) contains 71 items totaling $2462. The shipping charges are $350, making the grand total $2812. We're now ready to convert the [quote](https://glossary.magento.com/quote) to an order.

When you create an order, Magento enters reservations for the total amount of products. These reservations place a hold on that amount of inventory per stock, temporarily deducting the amount from the salable quantity. On the Products page of Admin, the **Salable Quantity** column accounts for reservations. When an order is shipped, Magento updates the quantities in the **Quantity per Source** column.

## Send payment information {#send-payment}

When you submit payment information, Magento creates an order and sends an order confirmation to the customer. Since we are using an offline [payment method](https://glossary.magento.com/payment-method) in this tutorial, we do not need to provide detailed payment information. The endpoint used in this example requires only the payment method and billing address information.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/payment-information`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

**Payload:**

```json
{
  "paymentMethod": {
    "method": "banktransfer"
  },
  "billing_address": {
    "email": "jdoe@example.com",
    "region": "New York",
    "region_id": 43,
    "region_code": "NY",
    "country_id": "US",
    "street": ["160 1st St."],
    "postcode": "11501",
    "city": "Mineola",
    "telephone": "516-555-1111",
    "firstname": "Jane",
    "lastname": "Doe"
  }
}
```

**Response:**

An `orderID`, such as `3`

## Retrieve the order item IDs

When you create an order, Magento generates an `item_id` for each product. These values will be used in [Step 12. Create a shipment]({{page.baseurl}}/rest/tutorials/inventory/create-shipment.html).

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

1. Log in to the US store as the customer. The dashboard shows the order.
1. Log in to [Admin](https://glossary.magento.com/admin). Click **Sales** > **Orders**. The order is displayed in the grid. Its status is Pending.
1. Click **Catalog** > **Products**. The **Salable Quantity** column shows that fewer items of the ordered products are available. The values in the **Quantity per Source** are not affected until shipment.
