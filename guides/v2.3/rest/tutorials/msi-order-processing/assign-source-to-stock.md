---
layout: tutorial
group: rest
title: Step 4. Link stocks and sources
subtitle: Order processing with MSI
menu_title: Step 4. Link stocks and sources
menu_order: 40
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/assign-source-to-stock.md
functional_areas:
  - Integration
---

Each stock can be assigned one or more sources. MSI uses these associations to calculate the virtual aggregated inventory per product.

{:.bs-callout .bs-callout-tip}
You must reindex and flush cache after performing this step.

## Assign the source

To link a source to a stock, you must specify the `source_code`, `stock_id`, and `priority` attributes. The `priority` value indicates where the stock ranks in the list of stocks that can be used for fulfilling orders.

The `POST V1/inventory/stock-source-links` endpoint accepts an array of links, so we can link all the stocks and sources we created in the previous steps with a single call. The `stock_id` of "North America Stock" is `2`, and the `stock_id` of "Europe Stock" is `3`. The HQ source is assigned to both stocks.

In this example, we are configuring the Baltimore warehouse to be the primary source for North America orders. Austin and Reno are the second- and third-choice sources. In Europe, Berlin is preferred, followed by Frankfurt. HQ is the last choice for both stocks.

**Endpoint**

`POST http://<host>/rest/all/V1/inventory/stock-source-links`

**Scope**

`all` store views

**Headers**

Content-Type application/json

Authorization: Bearer <admin_token>

**Payload**

```json
{
   "links" : [
      {
         "source_code" : "baltimore_wh",
         "stock_id" : 2,
         "priority" : 1
      },
      {
        "source_code" : "austin_wh",
        "stock_id" : 2,
        "priority" : 2
      },
      {
        "source_code" : "reno_wh",
        "stock_id" : 2,
        "priority" : 3
      },
      {
        "source_code" : "hq",
        "stock_id" : 2,
        "priority" : 4
      },
      {
        "source_code" : "berlin_wh",
        "stock_id" : 3,
        "priority" : 1
      },
      {
         "source_code" : "frankfurt_wh",
         "stock_id" : 3,
         "priority" : 2
      },
      {
         "source_code" : "hq",
         "stock_id" : 3,
         "priority" : 3
      }
   ]
}
```

**Response**

Magento returns empty array.
[]

## Reindex and flush cache

After you have assigned a source to stock, use the following command to perform a full reindex and flush the cache. This is required!

``` bash
php bin/magento indexer:reindex && php bin/magento cache:flush
```

### Verify this step

In Admin, click **Stores** > **Manage Stocks**.  Then click **Edit** to the right of North America Stock. The **Assign Sources** section contains the linked source. Repeat this step for Europe Stock.
