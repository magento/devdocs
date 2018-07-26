---
layout: tutorial
group: rest
title: Step 3. Link stocks and sources
menu_title: Step 3. Link stocks and sources
menu_order: 30
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
version: 2.3
github_link: rest/tutorials/msi-order-processing/3-assign-source-to-stock.md
functional_areas:
  - Integration
---

Each stock can be assigned one or more sources. MSI uses these associations to calculate the virtual aggregated inventory per product.

{:.bs-callout .bs-callout-tip}
You must reindex and flush cache after performing this step.

## Assign the source

To link a source to a stock, you must specify a `source_code`, `stock_id`, and `priority`. The `priority` value indicates where the stock ranks in the list of stocks that can be used for fulfilling orders.

The `stock-source-links` endpoint accepts an array of links, so we can link all the stocks and sources we created in the previous steps with a single call. The `stock_id` of UK Stock is `2`, and the `stock_id` of US Stock is `3`.

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
         "source_code" : "uk_warehouse",
         "stock_id" : "2",
         "priority" : 1
      },
      {
        "source_code" : "uk_store",
        "stock_id" : "2",
        "priority" : 2
      },
      {
        "source_code" : "de_warehouse",
        "stock_id" : "2",
        "priority" : 3
      },
       {
        "source_code" : "us_warehouse",
        "stock_id" : "3",
        "priority" : 1
      },
      {
         "source_code" : "uk_warehouse",
         "stock_id" : "3",
         "priority" : 2
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

In Admin, click **Stores** > **Manage Stocks**.  Then click **Edit** to the right of UK Stock. The **Assign Sources** section contains the linked source. Repeat this step for US Stock.
