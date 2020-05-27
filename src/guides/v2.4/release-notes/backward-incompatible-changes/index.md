---
group: release-notes
title: Magento 2.4 backward incompatible changes
---

This page highlights backward incompatible changes between releases that have a major impact and require detailed explanation and special instructions to ensure third-party modules continue working with Magento. High-level reference information for all backward incompatible changes in each release are documented in the [Backward incompatible changes reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html) topic.

## 2.3.0 - 2.4-develop

### UrlRewrite module

The Admin grid in the UrlRewrite module was moved to UI components and all unused blocks were removed. Added mass delete and inline edit actions.

```terminal
adminhtml.block.url_rewrite.grid.container
adminhtml.block.url_rewrite.grid
adminhtml.url_rewrite.grid.columnSet
adminhtml.url_rewrite.grid.columnSet.url_rewrite_id
adminhtml.url_rewrite.grid.columnSet.store_id
adminhtml.url_rewrite.grid.columnSet.request_path
adminhtml.url_rewrite.grid.columnSet.target_path
adminhtml.url_rewrite.grid.columnSet.redirect_type
adminhtml.url_rewrite.grid.columnSet.actions
```

### Elasticsearch

You must install [Elasticsearch]({{ page.baseurl }}/install-gde/prereq/elasticsearch.html) before upgrading to Magento 2.4.0. The following Elasticsearch versions are supported:

-  Elasticsearch 7.x
-  Elasticsearch 6.x (6.8 or higher is recommended)

{:.bs-callout-warning}
Magento no longer provides support for Elasticsearch [2.x and 5.x](https://www.elastic.co/support/eol) as they are End of Life. If you are using ES2, follow the instructions in [Change Elasticsearch Module]({{ page.baseurl }}/config-guide/elasticsearch/es-downgrade.html) before upgrading.

The changes with removing values from the `system.xml` file require eliminating ES2 support from the Admin UI. Other API classes were removed to clean up the code when we deprecated ES2 and ES5 in Magento 2.3.5.

#### Level Target/Location Code/Reason

```terminal
MAJOR Magento\Elasticsearch\Elasticsearch5\Model\Adapter\FieldType
/app/code/Magento/Elasticsearch/Elasticsearch5/Model/Adapter/FieldType.php:20 V005 Class was removed.
MAJOR Magento\Elasticsearch\SearchAdapter\DocumentFactory::__construct
/app/code/Magento/Elasticsearch/SearchAdapter/DocumentFactory.php:30 M113 [public] Method parameter typing changed.
MAJOR Magento\Elasticsearch\SearchAdapter\DocumentFactory::$objectManager
/app/code/Magento/Elasticsearch/SearchAdapter/DocumentFactory.php:30 V009 [protected] Property has been removed.
MAJOR Magento\Elasticsearch\Model\Client\ElasticsearchFactory
Magento_Elasticsearch:0
MAJOR catalog/search/elasticsearch_server_hostname
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_server_port
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_index_prefix
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_enable_auth
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_username
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_password
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_server_timeout
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_test_connect_wizard
Magento_Elasticsearch:0 M303 A field-node was removed
MAJOR catalog/search/elasticsearch_minimum_should_match
Magento_Elasticsearch:0 M303 A field-node was removed
```

### Inventory asynchronous reindex

A new Stock/Source reindex strategy configuration setting option was added to the Admin to prevent index table collisions. The setting has the following options:

-  Synchronous
-  Asynchronous

Previoously, it was possible to have a "burst" of activity that triggered contention of the index process. Even batching and deferring individual updates that were triggering the indexer, it was still highly likely that an index table collision would occur based on "other" activity.

For example, if the indexer was running based on schedule, and replenishment happens manually through the Admin or interaction with an order, indexing would be triggered. Previously, that would result in two processes attempting to index; one of those will "lose", leading to a deadlocked/stale index.

```terminal
MAJOR Magento\InventoryIndexer\Indexer\Stock\StockIndexer::__construct
/InventoryIndexer/Indexer/Stock/StockIndexer.php:28 M113 [public] Method parameter typing changed.
MAJOR Magento\InventoryIndexer\Indexer\SourceItem\SourceItemIndexer::__construct
/InventoryIndexer/Indexer/SourceItem/SourceItemIndexer.php:27 M113 [public] Method parameter typing changed.
```

### JSON field support

MySQL 5.7 supports the native JSON data type: [https://dev.mysql.com/doc/refman/5.7/en/json.html](https://dev.mysql.com/doc/refman/5.7/en/json.html). Magento 2.4.0 now supports using JSON fields with a declarative schema.

### Laminas

Migrating ZF2 components to Laminas introduced BICs in the following files:

```terminal
Magento\Backend\App\Area\FrontNameResolver::_construct - _constructor argument type was changed
Magento\Framework\App\Response\HttpInterface::getHeader - declared return type was changed
```

Both files are API class/interface. These changes will be solved dynamically during runtime if you follow the recommended guidelines.

### MediaContent and MediaContentApi modules

The 'MediaContent' and 'MediaContentApi' modules were introduced to provide the ability to manage relationships between content and media assets used in that content.

Additionally, observers have been added to the CMS and Catalog modules to save the relationship of corresponding entities to 'MediaContent' storage.

### Method parameter typing changed

Method parameter typing was changed to leverage [PHP 7+ Throwables](https://www.php.net/manual/en/class.throwable.php) and enable catching ALL possible errors that might expose confidential information, such as passwords.

#### Level Target/Location Code/Reason

```terminal
Magento\Framework\App\Bootstrap::terminate
/lib/internal/Magento/Framework/App/Bootstrap.php:426 M114 [protected] Method parameter typing changed.
```

### New bulk interfaces for inventory scalability check

In order to support bulk check for products scalability, we introduced two new interfaces:

```terminal
InventorySalesApi/Api/AreProductsSalableInterface
InventorySalesApi/Api/AreProductsSalableForRequestedQtyInterface
```

These changes allow third-party developers to optimize performance by providing an implementation for bulk services.

-  Introduced a Bulk version of `IsProductSalableForRequestedQtyInterface` API
-  Introduced a Bulk version of `IsProductSalableInterface` when working with a list of items

### Size field added to media_gallery_asset table

This is a dependency for the Adobe Stock integration.

A size field was added to the `media_gallery_asset` table to enable storing and using the media asset size. The Media Gallery Asset entity model and interface were updated accordingly.

The `Magento\MediaGalleryApi\Api\Data\AssetInterface` that was updated with a new public method in the scope of the changes is not marked as @api so it is not currently part of Magento API.

The possible impact is minimal: the table was introduced in 2.3.4 (just several month ago) and it was not used by any functionality in Magento 2 (only Adobe Stock Integration extension).

### SVC failure due to adding strict types

This change fixes a bug where `getDefaultLimitPerPageValue` returns a value that is not available.

As a Store Administrator, you are able to provide the 'Products per Page on Grid Allowed' values and 'Products per Page on Grid Default' value. There is no verification, so you can accidentally set the default value to be one of the unavailable options.

The only stores that might be affected are the ones who changed the configuration value for 'Default items per page', without customizing possible options. Some system integrators customize either the default value or allowed values.

As a result, there is inconsistency between default and allowed values. So far this worked by coincidence, but after the change, that would be explicit.

Per technical guidelines, all new PHP files MUST have strict type mode enabled by starting with `declare(strict_types=1);`. All updated PHP files SHOULD have strict type mode enabled. PHP interfaces MAY have this declaration.

Strict typing was added to the `app/code/Magento/Catalog/Helper/Product/ProductList.php` file.

It caused SVC failures.

Return type now array (the same as before in DocBlock):

```terminal
MAJORMagento\Catalog\Helper\Product\ProductList::getAvailableLimit /app/code/Magento/Catalog/Helper/Product/ProductList.php:122M120 [public] Method return typing
```

Return type now array (the same as before in DocBlock):

```terminal
changed.MAJORMagento\Catalog\Helper\Product\ProductList::getAvailableLimit /app/code/Magento/Catalog/Helper/Product/ProductList.php:122V060 [public] Method parameter name
```

Now returns int for `DefaultLimitPerPageValue`:

```terminal
changed.MAJORMagento\Catalog\Helper\Product\ProductList::getDefaultLimitPerPageValue /app/code/Magento/Catalog/Helper/Product/ProductList.php:147M120 [public] Method return typing changed.
```

### UUID validator

This code adds the Ramsey library as a UUID validator and creates wrappers for it. This feature is needed for the async-import project. They pass UUID to get status of the async-import, for that they need to validate UUID.
