---
layout: tutorial
group: rest-api
title: Step 3. Create stocks
subtitle: Order processing with Inventory Management
menu_title: Step 3. Create stocks
menu_order: 30
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

This step guides through the process for creating **stock**. Stock represents a virtual, aggregated inventory of products for sources of your sales channels. Each stock maps sales channels with sources to determine available inventories and salable quantities.

A sales channel can only be assigned to one stock.

The `stock_id` of the default stock is `1`.  You cannot delete or add sources to the default stock, but you can perform these actions with custom stocks.

For more information about stock, see [Inventory Management overview]({{ page.baseurl }}/inventory/index.html).

## Create the stock

The `POST V1/inventory/stocks` endpoint creates a stock. The `name`, `type`, and `code` attributes are required. The `code` value cannot be changed.

**Endpoint:**

`POST <host>/rest/default/V1/inventory/stocks`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

The `name` attribute is required.

```json
{
  "stock": {
    "name": "US Stock",
    "extension_attributes": {
      "sales_channels": [
        {
          "type": "website",
          "code": "base"
        }
      ]
    }
  }
}
```

**Response:**

Magento returns the `stock_id`, such as `2`. The value will be used in subsequent steps.

## Verify this step

In Admin, click **Stores** > **Inventory** > **Stocks**.  The new stocks are displayed in the Stock grid.
