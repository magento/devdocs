---
group: configuration-guide
title: Catalog Sync
---

Adobe Commerce and Magento Open Source compiles catalog data into tables using indexers. This process is automatically [triggered by several events](https://docs.magento.com/user-guide/system/index-management-events.html), such as changes to a product's price or inventory levels. To allow some Commerce services to use that catalog data, a catalog sync process runs hourly. The catalog sync process exports product data from the Commerce server to Commerce services, which are deployed as SaaS, on an ongoing basis. For example, the [Product Recommendations](https://docs.magento.com/user-guide/marketing/product-recommendations.html) feature needs up-to-date catalog information so that it can accurately return recommendations with correct names, pricing, and availability. Use the command-line interface to trigger the catalog sync and reindex product data for consumption by Commerce services.

{:.bs-callout-info}
To use the catalog sync commands, you must have an [API key and a SaaS Data Space configured](https://docs.magento.com/user-guide/system/saas.html). If you do not have an API key and have not configured a SaaS Data Space, you can still reindex product data but that data will not be exported to SaaS services.

The commands used to sync catalog data are part of the `magento/saas-export` package. See [Install and configure Product Recommendations]({{ site.baseurl }}/recommendations/install-configure.html) for more information.

{:.bs-callout-info}
See the [user guide](https://docs.magento.com/user-guide/system/catalog-sync.html) to learn how to use the Catalog Sync dashboard in the Admin UI to observe and manage the Commerce to SaaS syncing process.

{:.bs-callout-info}
When you trigger a data resync from the command line, it can take up to an hour for the data to update.

## Catalog information you can resync

-  `products`-- Products in your catalog
-  `categories`-- Categories in your catalog
-  `variants`-- Product variations of a configurable product, such as color and size
-  `productattributes`-- Product attributes such as `activity`, `gender`, `tops`, `bottoms`, and so on
-  `productoverrides`-- Customer-specific pricing and catalog visibility rules, such as those based on category permissions

### Example

The following example reindexes the product data from the Commerce catalog and resyncs it to Commerce services:

```bash
bin/magento saascatalog:resync --feed products
```

If you do not want to run a full reindex of the products, you can instead sync the product data that has already been generated:

```bash
bin/magento saascatalog:resync --feed products --no-reindex
```

Substitute `--feed products` with the type of catalog information you want to resync, such as `--feed categories`, `--feed productattributes`, and so on.

### Catalog sync parameters

The following describes the parameters used when resyncing catalog information.

|Parameter|Description|
|---|---|
|`feed`|(Required) Specifies which entity to resync, such as `products`|
|`no-reindex`|(Optional) Resubmits the existing catalog data to Commerce service without reindexing. When this parameter is not specified, the command runs a full reindex before syncing data.|
