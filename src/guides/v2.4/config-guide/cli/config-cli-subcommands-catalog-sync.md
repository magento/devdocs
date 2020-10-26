---
group: configuration-guide
title: Catalog Sync
---

Magento compiles catalog data into tables using indexers. This process is automatically [triggered by several events](https://docs.magento.com/user-guide/system/index-management-events.html), such as changes to a product's price or inventory levels. To allow some Magento services to use that catalog data, a catalog sync process runs hourly. The catalog sync process exports product data from the Magento server to SaaS services on an ongoing basis. For example, the [Product Recommendations](https://docs.magento.com/user-guide/marketing/product-recommendations.html) feature needs up-to-date catalog information so that it can accurately return recommendations with correct names, pricing, and availability. In addition to providing a [catalog sync dashboard](https://docs.magento.com/user-guide/system/catalog-sync.html) in the Admin UI to observe and manage the Magento to SaaS syncing process, you also can use the command-line interface to trigger the catalog sync and reindex the products in the SaaS service. This is especially useful if you notice your catalog data is not syncing correctly using the Catalog Sync dashboard.

{:.bs-callout-info}
When you initiate a catalog sync in the Admin UI, Magento resyncs your catalog on the hour. By running the CLI commands, the catalog sync executes immediately.

The following command resyncs your entire Magento catalog to Magento SaaS services and reindexes the products in the SaaS service:

```bash
saascatalog:resync --feed products
```

If you do not want to run a full reindex of the products in the SaaS service, run:

```bash
saascatalog:resync --feed products --no-reindex
```

|Parameter|Description|
|---|---|
|`feed`|(Required) Specifies which entity to resync, such as `products`|
|`no-reindex`|(Optional) Resubmits the catalog feed data to the SaaS service only. If you do not specify `no-reindex`, the command runs a full reindex.|
