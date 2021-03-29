---
group: live-search
title: Installing Live Search
ee_only: True
---

Live Search is a set of standalone meta packages that replaces the standard Magento Search capabilities.

|**Package**|**Description**|
|---|---|
|LiveSearch|Allows merchants to configure their search settings for faceting, synonyms, query rules, etc., and provides a GraphQL playground for merchants to test queries from the Magento Admin. |
|LiveSearchAdapter|Routes storefront search requests to the backend search service, and renders the search results returned by the service. <br />Category browse - Routes requests from the storefront [top navigation](https://docs.magento.com/user-guide/catalog/navigation-top.html) to the search service.<br />Global search - Routes requests from the [quick search](https://docs.magento.com/user-guide/catalog/search-quick.html) box in the upper-right of the storefront to the search service.|

## Requirements

- Magento 2.4.x or 2.3.5
- PHP 7.3 (The catalog-data-exporter is not compatible with previous PHP versions.)

## Step 1: Install Live Search

Composer is required to install and manage updates to the Live Search module.

To install Live Search:

```text
$   composer require magento/live-search
```

## Step 2: Disable Elasticsearch modules

1. Check your `app/etc/config.php` file and disable the following `ElasticSearch` modules.

-  `Magento_ElasticSearch`
-  `Magento_ElasticSearch6`
-  `Magento_ElasticSearch7`
-  `Magento_AdvancedSearch`
-  `Magento_ElasticSearchCatalogPermissions`
-  `Magento_InventoryElasticSearch`

   This list is current at this time of this writing, but might change as Magento adds more modules.

1. If you find additional `ElasticSearch` modules in your `config.php` file, disable them as well.

### Dependencies

The following Live Search dependencies are captured by Composer:

|**Dependency**|**Description**|
|---|---|
|`saas-export`|Syncs your catalog and product attribute information including product names, pricing, inventory availability, and more.|
|`services-connector`|Required to configure your connection to Magento Services.|
|`module-services-id`|Required to configure your connection to Magento Services.|

## Uninstall

To uninstall Live Search, see [Uninstall modules]({{ page.baseurl }}/guides/v2.4/install-gde/install/cli/install-cli-uninstall-mods.html)

## Update Live Search

To update Live Search:

```text
$   composer update magento/live-search -–with-dependencies
```
Note that after the package name there is a blank space and two hyphens, followed by `with-dependencies`'

To update to a major version, such as from 1.0 to 2.0, you need to edit the project’s root Composer `.json` file.

1.  Open the `main.json` file and search for `magento/live-search`.

1.  In the `.json` file, update the version number in the code:

    ```text
      "require": {
        ...
       "magento/live-search": "^2.0",
        ...
    }
   ```

1.  **Save** `composer.json` and **Run**.

    ```text
  $   composer update magento/live-search –-with-dependencies
    ```
