---
layout: tutorial
group: rest-api
title: Step 8. Create an invoice
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 8
level3_subgroup: order-tutorial
redirect_from:
  - /guides/v2.3/get-started/order-tutorial/order-create-invoice.html
functional_areas:
  - Integration
  - Orders
  - Sales
---

You create an [invoice](https://glossary.magento.com/invoice) after you receive payment for an order. In this example, the order was paid offline via a bank transfer. Therefore, you must tell Magento that payment for the order has been captured.

### Capture payment {#capture-payment}

This example creates a full invoice. You can create a partial invoice by adding to the payload an array of items to be invoiced.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/order/3/invoice`

where `3` is the `orderid`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer` `<administrator token>`

**Payload:**

```json
{
  "capture": true,
  "notify": true
}
```

**Response:**

An invoice `id`, such as `3`.

### View the invoice {#view-invoice}

An invoice is structurally similar to an order, but an order contains more details.

**Endpoint:**

`GET <host>/rest/<store_code>/V1/invoices/3`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload:**

Not applicable

**Response:**

You will use the `order_item_id` values to create a [shipment](https://glossary.magento.com/shipment) in the next step.

{% collapsible Show code sample %}

```json
{
  "base_currency_code": "USD",
  "base_discount_amount": 0,
  "base_grand_total": 165,
  "base_discount_tax_compensation_amount": 0,
  "base_shipping_amount": 5,
  "base_shipping_incl_tax": 5,
  "base_shipping_tax_amount": 0,
  "base_subtotal": 160,
  "base_subtotal_incl_tax": 160,
  "base_tax_amount": 0,
  "base_to_global_rate": 1,
  "base_to_order_rate": 1,
  "billing_address_id": 6,
  "can_void_flag": 0,
  "created_at": "2017-08-21 22:36:02",
  "discount_amount": 0,
  "email_sent": 1,
  "entity_id": 3,
  "global_currency_code": "USD",
  "grand_total": 165,
  "discount_tax_compensation_amount": 0,
  "increment_id": "000000003",
  "order_currency_code": "USD",
  "order_id": 3,
  "shipping_address_id": 5,
  "shipping_amount": 5,
  "shipping_discount_tax_compensation_amount": 0,
  "shipping_incl_tax": 5,
  "shipping_tax_amount": 0,
  "state": 2,
  "store_currency_code": "USD",
  "store_id": 1,
  "store_to_base_rate": 0,
  "store_to_order_rate": 0,
  "subtotal": 160,
  "subtotal_incl_tax": 160,
  "tax_amount": 0,
  "total_qty": 9,
  "updated_at": "2017-08-21 22:36:03",
  "items": [
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 22,
      "base_price_incl_tax": 22,
      "base_row_total": 22,
      "base_row_total_incl_tax": 22,
      "base_tax_amount": 0,
      "entity_id": 3,
      "discount_tax_compensation_amount": 0,
      "name": "Radiant Tee-M-Orange",
      "parent_id": 3,
      "price": 22,
      "price_incl_tax": 22,
      "product_id": 1553,
      "row_total": 22,
      "row_total_incl_tax": 22,
      "sku": "WS12-M-Orange",
      "tax_amount": 0,
      "order_item_id": 3,
      "qty": 1
    },
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 18,
      "base_price_incl_tax": 18,
      "base_row_total": 18,
      "base_row_total_incl_tax": 18,
      "base_tax_amount": 0,
      "entity_id": 4,
      "discount_tax_compensation_amount": 0,
      "name": "Advanced Pilates & Yoga (Strength)",
      "parent_id": 3,
      "price": 18,
      "price_incl_tax": 18,
      "product_id": 49,
      "row_total": 18,
      "row_total_incl_tax": 18,
      "sku": "240-LV08",
      "tax_amount": 0,
      "order_item_id": 4,
      "qty": 1
    },
    {
      "base_price": 68,
      "base_price_incl_tax": 68,
      "entity_id": 5,
      "name": "Sprite Yoga Companion Kit",
      "parent_id": 3,
      "price": 68,
      "price_incl_tax": 68,
      "product_id": 51,
      "sku": "24-WG080-24-WG084-24-WG088-24-WG082-blue-24-WG086",
      "order_item_id": 5,
      "qty": 1
    },
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 27,
      "base_price_incl_tax": 27,
      "base_row_total": 27,
      "base_row_total_incl_tax": 27,
      "base_tax_amount": 0,
      "entity_id": 6,
      "discount_tax_compensation_amount": 0,
      "name": "Sprite Stasis Ball 65 cm",
      "parent_id": 3,
      "price": 27,
      "price_incl_tax": 27,
      "product_id": 29,
      "row_total": 27,
      "row_total_incl_tax": 27,
      "sku": "24-WG082-blue",
      "tax_amount": 0,
      "order_item_id": 6,
      "qty": 1
    },
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 5,
      "base_price_incl_tax": 5,
      "base_row_total": 5,
      "base_row_total_incl_tax": 5,
      "base_tax_amount": 0,
      "entity_id": 7,
      "discount_tax_compensation_amount": 0,
      "name": "Sprite Foam Yoga Brick",
      "parent_id": 3,
      "price": 5,
      "price_incl_tax": 5,
      "product_id": 21,
      "row_total": 5,
      "row_total_incl_tax": 5,
      "sku": "24-WG084",
      "tax_amount": 0,
      "order_item_id": 7,
      "qty": 1
    },
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 17,
      "base_price_incl_tax": 17,
      "base_row_total": 17,
      "base_row_total_incl_tax": 17,
      "base_tax_amount": 0,
      "entity_id": 8,
      "discount_tax_compensation_amount": 0,
      "name": "Sprite Yoga Strap 8 foot",
      "parent_id": 3,
      "price": 17,
      "price_incl_tax": 17,
      "product_id": 34,
      "row_total": 17,
      "row_total_incl_tax": 17,
      "sku": "24-WG086",
      "tax_amount": 0,
      "order_item_id": 8,
      "qty": 1
    },
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 19,
      "base_price_incl_tax": 19,
      "base_row_total": 19,
      "base_row_total_incl_tax": 19,
      "base_tax_amount": 0,
      "entity_id": 9,
      "discount_tax_compensation_amount": 0,
      "name": "Sprite Foam Roller",
      "parent_id": 3,
      "price": 19,
      "price_incl_tax": 19,
      "product_id": 22,
      "row_total": 19,
      "row_total_incl_tax": 19,
      "sku": "24-WG088",
      "tax_amount": 0,
      "order_item_id": 9,
      "qty": 1
    },
    {
      "base_discount_tax_compensation_amount": 0,
      "base_price": 52,
      "base_price_incl_tax": 52,
      "base_row_total": 52,
      "base_row_total_incl_tax": 52,
      "base_tax_amount": 0,
      "entity_id": 10,
      "discount_tax_compensation_amount": 0,
      "name": "Chaz Kangeroo Hoodie",
      "parent_id": 3,
      "price": 52,
      "price_incl_tax": 52,
      "product_id": 67,
      "row_total": 52,
      "row_total_incl_tax": 52,
      "sku": "MH01-S-Gray",
      "tax_amount": 0,
      "order_item_id": 10,
      "qty": 1
    },
    {
      "base_price": 0,
      "entity_id": 11,
      "name": "Chaz Kangeroo Hoodie-S-Gray",
      "parent_id": 3,
      "price": 0,
      "product_id": 56,
      "sku": "MH01-S-Gray",
      "order_item_id": 11,
      "qty": 1
    }
  ],
  "comments": []
}
```

{% endcollapsible %}

### Verify this step {#verify-step}

Log in to [Admin](https://glossary.magento.com/admin). Click **Sales** > **Invoices**. The invoice is displayed in the grid. The status is Paid. Then click **Sales** > **Orders**. The status is Processing.
