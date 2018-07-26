---
layout: tutorial
group: rest
title: Step 13. Create an invoice
menu_title: Step 13. Create an invoice
menu_order: 130
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/13-create-invoice.md
functional_areas:
  - Integration
---

You create an {% glossarytooltip 631b9627-a367-4a56-b3b1-0f6ca8fe6e02 %}invoice{% endglossarytooltip %} after you receive payment for an order. In this example, the order was paid offline via a bank transfer. Therefore, you must tell Magento that payment for the order has been captured.

## Capture payment {#capture-payment}

This example creates a full invoice.

**Endpoint**

`POST http://<host>/rest/uk/V1/order/1/invoice`

where `1` is the `orderid`

**Scope**

`uk` store view

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <admin token>`

**Payload**

``` json
{
  "capture": true,
  "notify": true
}
```

**Response**

An `orderID`, such as `1`.

## Verify this step {#verify-step}

Log in to {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. Click **Sales** > **Invoices**. The invoice is displayed in the grid. The status is Paid. Then click **Sales** > **Orders**. The status is Processing.
