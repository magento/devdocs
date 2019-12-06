---
layout: tutorial
group: rest-api
title: Step 4. Link stocks and sources
subtitle: Order processing with Inventory Management
menu_title: Step 4. Link stocks and sources
menu_order: 40
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

This step links the sources we created in [Step 2. Create sources]({{page.baseurl}}/rest/tutorials/inventory/create-sources.html) with the stocks we created in [Step 3. Create stocks]({{page.baseurl}}/rest/tutorials/inventory/create-stock.html).

Each stock can be assigned one or more sources. Magento uses these associations to calculate the virtual aggregated inventory per product.

{:.bs-callout-tip}
You must reindex and flush cache after performing this step.

## Assign the source

To link a source to a stock, you must specify the `source_code`, `stock_id`, and `priority` attributes. The `priority` value indicates where the source ranks in descending order. The Source Selection Algorithm uses this priority order when recommending order fulfillment. All added sources display in prioritized order in the Admin.

The `POST V1/inventory/stock-source-links` endpoint accepts an array of links, so we can link all the stocks and sources we created in the previous steps with a single call. The `stock_id` of "North America Stock" is `2`, and the `stock_id` of "Europe Stock" is `3`. The HQ source is assigned to both stocks.

In this example, we configure the Baltimore warehouse to be the primary source for North America orders. Austin and Reno are the second- and third-choice sources. In Europe, Berlin is preferred, followed by Frankfurt. HQ is the last choice for both stocks.

**Endpoint:**

`POST <host>/rest/all/V1/inventory/stock-source-links`

**Scope:**

`all` store views

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin_token>`

**Payload:**

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

**Response:**

Magento returns empty array.
[]

## Reindex and flush cache

**Required:** After you have assigned a source to stock, use the following command to perform a full reindex and flush the cache. This is required!

```bash
bin/magento indexer:reindex && bin/magento cache:flush
```

### Verify this step

In Admin, click **Stores** > **Inventory** > **Stocks**.  Then click **Edit** to the right of North America Stock. The **Assign Sources** section contains the linked source. Repeat this step for Europe Stock.
