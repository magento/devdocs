---
group: live-search
title: Install Live Search
ee_only: True
redirect_from: 
  - /live-search/config-connect.html
---

Live Search is a set of standalone meta packages that replaces standard {{site.data.var.ee}} search capabilities.  This topic provides instructions to do the following:

-  Install Live Search (Method 1 and Method 2)
-  [Update Live Search](#update-live-search)
-  [Uninstall Live Search](#uninstall-live-search)

|**Package**|**Description**|
|---|---|
|`module-live-search`|Allows merchants to configure their search settings for faceting, synonyms, query rules, etc., and provides access to a read-only GraphQL playground to test queries from the {{site.data.var.ee}} Admin. |
|`module-live-search-adapter`|Routes search requests from the storefront to the Live Search service and renders the results in the storefront. <br />- Category browse - Routes requests from the storefront [top navigation](https://docs.magento.com/user-guide/catalog/navigation-top.html) to the search service.<br />- Global search - Routes requests from the [quick search](https://docs.magento.com/user-guide/catalog/search-quick.html) box in the upper-right of the storefront to the Live Search service.|
|`module-live-search-storefront-popover`|A "search as you type" popover replaces the standard quick search and returns dynamic product suggestions and thumbnails of top search results.|

## Requirements

-  {{site.data.var.ee}} 2.4.x
-  PHP 7.3 / 7.4
-  Composer

## Before you begin the installation

Do the following:

1. Confirm that the [cron jobs]({{ page.baseurl }}/guides/v2.4/config-guide/cli/config-cli-subcommands-cron.html) and [indexers]({{ page.baseurl }}/guides/v2.4/config-guide/cli/config-cli-subcommands-index.html) are running.

1. Verify that the following [indexers](https://docs.magento.com/user-guide/system/index-management.html) are set to `Update by Schedule`:

   -  Product Feed
   -  Product Variant Feed
   -  Catalog Attributes Feed

1. Choose the installation method that meets your requirements and follow the instructions.

   -  [Method 1](#method-1): Install without Elasticsearch (Some downtime)
   -  [Method 2](#method-2): Install with Elasticsearch (No downtime)

## Method 1: Install without Elasticsearch {#method-1}

This method is recommended when installing Live Search to a:

-  New Commerce installation
-  Staging environment

When using this method, storefront operations are interrupted while the Live Search service indexes all products in the catalog.

During the installation, Live Search modules are enabled and Elasticsearch modules are disabled.

1. Install {{site.data.var.ee}} 2.4.x without Live Search.

1. To install the `live-search` package, run the following from the command line:

   ```bash
   composer require magento/live-search
   ```

   For more information, see the list of Live Search [dependencies](#live-search-dependencies) that are captured by Composer.

1. The modules for the native {{site.data.var.ee}} search and category browse page functions must be disabled for Live Search to work. Check your `app/etc/config.php` file and ensure that the following `ElasticSearch` modules are disabled:

   -  `Magento_ElasticSearch`
   -  `Magento_ElasticSearch6`
   -  `Magento_ElasticSearch7`
   -  `Magento_AdvancedSearch`
   -  `Magento_ElasticSearchCatalogPermissions`
   -  `Magento_InventoryElasticSearch`

   This list might change as new modules are added. Disable any additional `ElasticSearch` module(s) in your `config.php` file.

1. In the `core_config_data` table, delete any entry with the `catalog/search/engine` path.

1. Configure your [API keys](#configuring-api-keys).

   {:.bs-callout-warning}
   After the installation, storefront catalog operations are temporarily interrupted while the Live Search service synchronizes the data and indexes all products in the catalog. The process can take up to eight hours to complete.

1. To verify that the catalog data has been exported from your {{site.data.var.ee}} instance and is synchronized for Live Search, look for entries in the following tables:

   -  `catalog_data_exporter_products`
   -  `catalog_data_exporter_product_attributes`

   For additional help, refer to [Live search catalog not synchronized](https://support.magento.com/hc/en-us/articles/4405637804301-Live-search-catalog-not-synchronized) in the Support Knowledge Base.

1. [Test](#testing-the-connection) the connection.

## Method 2: Install with Elasticsearch {#method-2}

This method is recommended when installing Live Search to a:

-  Existing production Commerce installation

In this scenario, Elasticsearch services search requests from the storefront while the Live Search service works in the background to index all products in the catalog. Although the process might take up to eight hours to complete, there is no interruption to storefront operations.

Before the installation of Live Search, Live Search modules are disabled and Elasticsearch modules are enabled. After the installation, Live Search modules are enabled and Elasticseaerch modules are disabled.

1. Check your `app/etc/config.php` file to ensure that the following `ElasticSearch` modules are enabled:

   -  `Magento_ElasticSearch`
   -  `Magento_ElasticSearch6`
   -  `Magento_ElasticSearch7`
   -  `Magento_AdvancedSearch`
   -  `Magento_ElasticSearchCatalogPermissions`
   -  `Magento_InventoryElasticSearch`

   This list might change as new modules are added. Enable any additional `ElasticSearch` module(s) in your `config.php` file.

1. To install the `live-search` package, run the following from the command line:

   ```bash
   composer require magento/live-search
   ```
   For more information, see the list of Live Search [dependencies](#live-search-dependencies) that are captured by Composer.

1. In your `app/etc/config.php` file, disable the following Live Search modules:

   -  `module-live-search-adapter`
   -  `module-live-search-storefront-popover`

   After the installation, Elasticsearch manages storefront search requests as usual while the Live Search service works in the background to sync data and create an index of all products in the catalog. The process can take up to eight hours to complete.

1. Configure your [API keys](#configuring-api-keys).

1. To verify that the catalog data has been exported from your {{site.data.var.ee}} instance and is synchronized for Live Search, look for entries in the following tables:

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

1.  In the `core_config_data` table, delete any entry with the `catalog/search/engine` path.

## Configuring API keys

The {{site.data.var.ee}} API key and its associated private key are required to connect Live Search to an installation of {{site.data.var.ee}}. The API key is generated and maintained in the account of the {{site.data.var.ee}} license holder, who can share it with the developer or SI. The developer can then create and manage the SaaS environments on behalf of the license-holder. For detailed instructions, see Commerce Services in the [User Guide](https://docs.magento.com/user-guide/system/saas.html) and [Configuration Reference](https://docs.magento.com/user-guide/configuration/services/saas.html).

### {{site.data.var.ee}} license holder

To generate an API key and private key, see [Commerce Services](https://docs.magento.com/user-guide/system/saas.html) in the {{site.data.var.ee}} User Guide.

### {{site.data.var.ee}} developer or SI

The developer or SI configures the SaaS environment as described in the Commerce Services section of the configuration. Commerce Services becomes available in the Admin Configuration sidebar when a SaaS module is installed.

## Synchronizing catalog data

Live Search requires synchronized product data for search operations and synchronized attribute data to configure facets. The initial synchronization between the product catalog and the catalog service begins when Live Search is first connected and can take up to eight hours to complete. During the process, catalog data is exported from your {{site.data.var.ee}} instance and indexed by Live Search.

The list of data that is synced and shared with the catalog service can be found in the schema, which is defined in:

`vendor/magento/module-catalog-data-exporter/etc/et_schema.xml`

After the initial synchronization, it can take up to fifteen minutes for incremental product updates to become available to storefront search. To learn more, go to [Streaming Product Updates]({{ site.baseurl }}/live-search/indexing.html#streaming-product-updates).

## Testing the connection

1. Log in to the {{site.data.var.ee}} Admin and verify that you can go to **Marketing** > **Live Search**.  Then, follow the instructions to add a [facet](https://docs.magento.com/user-guide/live-search/facets-add.html).

  This action makes facets available as filters in the storefront.

1. In the storefront, verify that the **Search** box returns results correctly.

1. If Live Search is not available in the Admin or if the search results are not returned in the storefront, check the `var/log/system.log` file for API communication failures or errors on the services side.

## Update Live Search

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

## Uninstall Live Search

To uninstall Live Search, go to [Uninstall modules]({{ site.baseurl }}{{ site.gdeurl }}/install-gde/install/cli/install-cli-uninstall-mods.html).

## Live Search dependencies

The following Live Search dependencies are captured by Composer:

|**Dependency**|**Description**|
|---|---|
|Export modules|The following modules collect and sync catalog data:<br />`saas-export`<br />`module-bundle-product-exporter`<br />`module-catalog-data-exporter`<br />`module-catalog-inventory-data-exporter`<br />`module-catalog-url-rewrite-data-exporter`<br />`module-configurable-product-data-exporter`<br />`module-data-exporter`<br />`module-parent-product-data-exporter`|
|`services-connector`|Required to configure your connection to Commerce Services.|
|`module-services-id`|Required to configure your connection to Commerce Services.|
