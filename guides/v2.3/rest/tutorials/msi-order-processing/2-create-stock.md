---
layout: tutorial
group: rest
title: Step 2. Create a stock
menu_title: Step 2. Create a stock
menu_order: 20
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/2-create-stock.md
functional_areas:
  - Integration
---

**Stock** represents a virtual, aggregated inventory of products for sources of your sales channels (currently these are websites). Each stock maps sales channels with sources for available inventories and salable quantities.

## Create a stock

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/stocks`

**Scope**

`all` store views

**Headers**

Content-Type: application/json

Authorization: Bearer <admin_token>

**Payload**

The `name` attribute is required.

``` json
{
   "stock" : {
      "name" : "UK Stock"
   }
}
```

**Response**

Magento returns the `stock_id`, such as `2`,


## Add more Stocks

Use the same endpoint to add another stock. The `stock_id` for `US Stock` is `3`.

```
{
   "stock" : {
      "name" : "US Stock"
   }
}
```

## Verify this step

In Admin, click **Stores** > **Manage Stocks**.  The new stocks are displayed in the Stock grid.
