---
group: live-search
title: Install Live Search
ee_only: True
---

Live Search is a set of standalone meta packages that replaces the standard Adobe Commerce Search capabilities.

|**Package**|**Description**|
|---|---|
|`module-live-search`|Allows merchants to configure their search settings for faceting, synonyms, query rules, etc., and provides access to a read-only GraphQL playground to test queries from the Magento Admin. |
|`module-live-search-adapter`|Routes search requests from the storefront to the Live Search service, and renders the results in the storefront. <br />- Category browse - Routes requests from the storefront [top navigation](https://docs.magento.com/user-guide/catalog/navigation-top.html) to the search service.<br />- Global search - Routes requests from the [quick search](https://docs.magento.com/user-guide/catalog/search-quick.html) box in the upper-right of the storefront to the Live Search service.|

## Requirements

-  Adobe Commerce 2.4.x
-  PHP 7.3 (The `catalog-data-exporter` is not compatible with previous versions of PHP.)
-  Composer

## Step 1: Install Live Search

Adobe Commerce is installed first without Live Search, and then the project’s root Composer `.json` file is updated to require the `live-search` package.

1. Install Adobe Commerce 2.4.x without Live Search.

1. Update `composer.json` to require the `live-search` package as follows:

  ```json
    "require": {
      ...
      "magento/live-search": ">=1.0.0",
      ...
  }
   ```

### Dependencies

The following Live Search dependencies are captured by Composer:

|**Dependency**|**Description**|
|---|---|
|Export modules|The following modules collect and sync catalog data:<br />`saas-export`<br />`module-bundle-product-exporter`<br />`module-catalog-data-exporter`<br />`module-catalog-inventory-data-exporter`<br />`module-catalog-url-rewrite-data-exporter`<br />`module-configurable-product-data-exporter`<br />`module-data-exporter`<br />`module-parent-product-data-exporter`|
|`services-connector`|Required to configure your connection to Magento Services.|
|`module-services-id`|Required to configure your connection to Magento Services.|

## Step 2: Disable Elasticsearch modules

1. Check your `app/etc/config.php` file and disable the following `ElasticSearch` modules.

   -  `Magento_ElasticSearch`
   -  `Magento_ElasticSearch6`
   -  `Magento_ElasticSearch7`
   -  `Magento_AdvancedSearch`
   -  `Magento_ElasticSearchCatalogPermissions`
   -  `Magento_InventoryElasticSearch`

   This list is current at this time of this writing, but might change as new modules are added.

1. If you find additional `ElasticSearch` modules in your `config.php` file, disable them also.

## Update Live Search

To update Live Search, enter the following from the command line:

```bash
composer update magento/live-search -–with-dependencies
```

Syntax: After the package name `live-search`, enter a blank space and two hyphens, followed by `with-dependencies`'.

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

1. **Save** `composer.json` and **Run**.

  ```bash
  composer update magento/live-search –-with-dependencies
  ```

## Uninstall

To uninstall Live Search, go to [Uninstall modules].({{ page.baseurl }}/guides/v2.4/install-gde/install/cli/install-cli-uninstall-mods.html)
