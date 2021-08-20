---
group: live-search
title: Install Live Search
ee_only: True
---

Live Search is a set of standalone meta packages that replaces standard {{site.data.var.ee}} search capabilities.

|**Package**|**Description**|
|---|---|
|`module-live-search`|Allows merchants to configure their search settings for faceting, synonyms, query rules, etc., and provides access to a read-only GraphQL playground to test queries from the {{site.data.var.ee}} Admin. |
|`module-live-search-adapter`|Routes search requests from the storefront to the Live Search service and renders the results in the storefront. <br />- Category browse - Routes requests from the storefront [top navigation](https://docs.magento.com/user-guide/catalog/navigation-top.html) to the search service.<br />- Global search - Routes requests from the [quick search](https://docs.magento.com/user-guide/catalog/search-quick.html) box in the upper-right of the storefront to the Live Search service.|
|`module-live-search-storefront-popover`|A "search as you type" popover replaces the standard quick search and returns dynamic product suggestions and thumbnails of top search results.|

## Requirements

-  {{site.data.var.ee}} 2.4.x
-  PHP 7.3 / 7.4
-  Composer

Choose the installation method that meets your requirements:

-  [Method 1](#method-1): Install without Elasticsearch (Some downtime)
-  [Method 2](#method-2): Install with Elasticsearch (No downtime)

## Method 1: Install without Elasticsearch {#method-1}

This method is recommended when installing Live Search to a:

-  New Commerce installation
-  Staging environment

When using this method, storefront operations are interrupted while the Live Search service indexes all products in the catalog.

During this installation, Live Search modules are enabled and Elasticsearch modules are disabled.

1. Install {{site.data.var.ee}} 2.4.x without Live Search.

1. To install the `live-search` package, run the following from the command line:

   ```bash
   composer require magento/live-search
   ```

   For more information, see the list of Live Search [dependencies](#live-search-dependencies) that are captured by Composer.

1. The modules that allow the native {{site.data.var.ee}} search and category browse pages function must be disabled for Live Search to work. Check your `app/etc/config.php` file and ensure that the following `ElasticSearch` modules are disabled:

   -  `Magento_ElasticSearch`
   -  `Magento_ElasticSearch6`
   -  `Magento_ElasticSearch7`
   -  `Magento_AdvancedSearch`
   -  `Magento_ElasticSearchCatalogPermissions`
   -  `Magento_InventoryElasticSearch`

   This list might change as new modules are added. Disable any additional `ElasticSearch` module(s) in your `config.php` file.

1. In the `core_config_data` table, delete any entry with the `catalog/search/engine` path.

   {:.bs-callout-warning}
   After the installation, storefront catalog operations are interrupted while the Live Search service syncs data and indexes all products in the catalog. The process can take up to eight hours to complete.

1. To verify that the data has been exported from your {{site.data.var.ee}} instance, look for entries in the following tables:

   -  `catalog_data_exporter_products`
   -  `catalog_data_exporter_product_attributes`

   For additional help, refer to [Live search catalog not synchronized](https://support.magento.com/hc/en-us/articles/4405637804301-Live-search-catalog-not-synchronized) in the Support Knowledge Base.

1. [Test](#testing-the-connection) the connection.

## Method 2: Install with Elasticsearch {#method-2}

This method is recommended when installing Live Search to a:

-  Existing production Commerce installation

In this scenario, Elasticsearch services search requests from the storefront while the Live Search service works in the background to index all products in the catalog. Although the process might take up to eight hours to complete, there is no interruption to storefront operations.

Before the installation of Live Search, Live Search modules are disabled and Elasticsearch modules are enabled. After the installation, Live Search modules are enabled and Elasticsearch modules are disabled.

1. Check your `app/etc/config.php` file to ensure that the following `ElasticSearch` modules are enabled:

   -  `Magento_ElasticSearch`
   -  `Magento_ElasticSearch6`
   -  `Magento_ElasticSearch7`
   -  `Magento_AdvancedSearch`
   -  `Magento_ElasticSearchCatalogPermissions`
   -  `Magento_InventoryElasticSearch`

   This list might change as new modules are added. Enable any additional `ElasticSearch` module(s) in your `config.php` file.

1. In your `app/etc/config.php` file, disable the following Live Search modules:

   -  `module-live-search-adapter`
   -  `module-live-search-storefront-popover`

1. To install the `live-search` package, run the following from the command line:

   ```bash
   composer require magento/live-search
   ```

   For more information, see the list of Live Search [dependencies](#live-search-dependencies) that are captured by Composer.

   After the installation, Elasticsearch manages storefront search requests as usual while the Live Search service works in the background to sync data and create an index of all products in the catalog. The process can take up to eight hours to complete.

1. To verify that the data has been exported from your {{site.data.var.ee}} instance, use [GraphQL Playground]({{ site.baseurl }}/live-search/graphql-support.html) to look for entries in the following tables:

   -  `catalog_data_exporter_products`
   -  `catalog_data_exporter_product_attributes`

   For additional help, refer to [Live search catalog not synchronized](https://support.magento.com/hc/en-us/articles/4405637804301-Live-search-catalog-not-synchronized) in the Support Knowledge Base.

1. [Test](#testing-the-connection) the connection.

1. When you are satisfied with the setup, update your `app/etc/config.php` file as follows:

   Enable the following Live Search modules:

   -  `module-live-search-adapter`
   -  `module-live-search-storefront-popover`

   Disable the following Elasticsearch modules:

   -  `Magento_ElasticSearch`
   -  `Magento_ElasticSearch6`
   -  `Magento_ElasticSearch7`
   -  `Magento_AdvancedSearch`
   -  `Magento_ElasticSearchCatalogPermissions`
   -  `Magento_InventoryElasticSearch`

   Also disable any additional `ElasticSearch` module(s) that might be listed in your `config.php` file.

## Testing the connection

1. Log in to the {{site.data.var.ee}} Admin and verify that you can go to **Marketing** > **Live Search**.

1. In the storefront, verify that the **Search** box returns results correctly.

1. If Live Search is not available in the Admin or if the search results are not returned in the storefront, check the `var/log/system.log` file for API communication failures or errors on the services side.

## Updating Live Search

To update Live Search, run the following from the command line:

```bash
composer update magento/live-search --with-dependencies
```

To update to a major version such as from 1.0 to 2.0, edit the project’s root Composer `.json` file as follows:

1. Open the root `composer.json` file and search for `magento/live-search`.

1. In the `require` section, update the version number as follows:

   ```json
   "require": {
      ...
      "magento/live-search": "^2.0",
      ...
    }
   ```

1. **Save** `composer.json`. Then, run the following from the command line:

   ```bash
   composer update magento/live-search –-with-dependencies
   ```

## Uninstalling Live Search

To uninstall Live Search, go to [Uninstall modules]({{ site.baseurl }}{{ site.gdeurl }}/install-gde/install/cli/install-cli-uninstall-mods.html).

## Live Search dependencies

The following Live Search dependencies are captured by Composer:

|**Dependency**|**Description**|
|---|---|
|Export modules|The following modules collect and sync catalog data:<br />`saas-export`<br />`module-bundle-product-exporter`<br />`module-catalog-data-exporter`<br />`module-catalog-inventory-data-exporter`<br />`module-catalog-url-rewrite-data-exporter`<br />`module-configurable-product-data-exporter`<br />`module-data-exporter`<br />`module-parent-product-data-exporter`|
|`services-connector`|Required to configure your connection to Commerce Services.|
|`module-services-id`|Required to configure your connection to Commerce Services.|
