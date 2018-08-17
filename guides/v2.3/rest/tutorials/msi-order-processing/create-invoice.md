---
layout: tutorial
group: rest
title: Step 11. Create an invoice
subtitle: Order processing with MSI
menu_title: Step 11. Create an invoice
menu_order: 110
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
functional_areas:
  - Integration
---

You create an {% glossarytooltip 631b9627-a367-4a56-b3b1-0f6ca8fe6e02 %}invoice{% endglossarytooltip %} after you receive payment for an order. In this example, the order was paid offline via a bank transfer. Therefore, you must tell Magento that payment for the order has been captured.

After you submit the invoice, Magento adjusts the Quantity per Source value for non-physical products.

## Capture payment {#capture-payment}

This example creates a full invoice.

**Endpoint**

`POST http://<host>/rest/us/V1/order/1/invoice`

where `1` is the `orderid`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload**

``` json
{
  "capture": true,
  "notify": true
}
```

**Response**

An invoice `id`, such as `3`.

## Verify this step {#verify-step}

1. Click **Sales** > **Invoices**. The invoice displays in the grid with a status of Paid. Then click **Sales** > **Orders**. The status is Processing.

2. Click **Catalog** > **Products**. For `vp1`, Magento adjusted the value of **Quantity per Source** and **Salable Quantity** to 9998 for all sources and stocks.
