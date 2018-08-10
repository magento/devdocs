---
layout: tutorial
group: rest
title: Step 3. Create stocks
subtitle: Order processing with MSI
menu_title: Step 3. Create stocks
menu_order: 30
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
functional_areas:
  - Integration
---

This step guides through the process for creating **stock**. Stock represents a virtual, aggregated inventory of products for sources of your sales channels. Each stock maps sales channels with sources to determine available inventories and salable quantities.

A sales channel can only be assigned to one stock.

The `stock_id` of the default stock is `1`.  You cannot delete or add sources to the default stock, but you can perform these actions with custom stocks.

For more information about stock, see the Wiki topic [Create stock](https://github.com/magento-engcom/msi/wiki/Create-Stock){:target="_blank"}.

## Create the stock for North America

The `POST V1/inventory/stocks` endpoint creates a stock. The `name`, `type`, and `code`attributes are required. The `code` value cannot be changed.
stocks can be created, modified, and deleted, but not enabled/disabled
save the returned id, used in the next step

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/stocks`

**Scope**

`all` store views

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload**

The `name` attribute is required.

``` json

{
  "stock": {
    "name": "North America Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "na_site"
        }
      ]
    }
  }
}
```

**Response**

Magento returns the `stock_id`, such as `2`. The value will be used in subsequent steps. 

## Create the Europe stock

Use the same endpoint to add another stock. The `stock_id` for `Europe Stock` is `3`.

``` json
{
  "stock": {
    "name": "Europe Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "eu_site"
        }
      ]
    }
  }
}
```

## Verify this step

In Admin, click **Stores** > **Manage Stocks**.  The new stocks are displayed in the Stock grid.
