---
group: release-notes
title: Magento 2.4 backward incompatible changes
---

This page highlights backward incompatible changes between releases that have a major impact and require detailed explanation and special instructions to ensure third-party modules continue working with Magento. High-level reference information for all backward incompatible changes in each release are documented in the [Backward incompatible changes reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html) topic.

## 2.3.0 - 2.4-develop

### Blocks removed after moving UrlRewrite grid implementation to UI components

Admin grid in UrlRewrite module was moved to UI components and all unused blocks were removed. Added mass delete action and inline edit were added.

Admin grid in UrlRewrite module was moved to UI components, so all unused blocks were also removed which is MAJOR change. It is okay since those blocks aren't used in rendering anymore and thus are helpless for those who extends them.

The PR https://github.com/magento/magento2/pull/23570 moved admin grid in UrlRewrite module to UI components and removed unused blocks which is MAJOR change. It is okay since thos blocks aren't used in rendering anymore and thus are helpless for those who extends them.

https://public-results-storage-prod.magento-testing-service.engineering/reports/magento/magento2/pull/23570/4c4ba72f82b105e3e91ab8483932c0e7/SemanticVersionChecker/report-magento2.html

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

As a part of Elasticsearch 7.x.x Upgrade, Elasticsearch 2 support will be removed. We should communicate with customers using Elasticsearch 2 that they should perform additional steps before upgrading to the latest 2.4 Magento version.

Update ElasticSearch version on their server. First update to ES 5 and then update to ES6 or ES7.
Check if their extensions support usage of new ElasticSearch version.
After upgrading, switch to supported ES version in configuration, before running reindexation on 2.4 version
Also, we should add information to Cloud related documentation about this breaking change as well. We recommend merchants switch to ES 5 before upgrade and than switch to ES 7.  (Flow for Pro:Create ZD ticket to upgrade to ES5 -> Upgrade Magento to 2.4 -> Create ZD ticket to upgrade to ES7)

Links to existing documentation https://devdocs.magento.com/guides/v2.3/comp-mgr/cli/cli-upgrade.html

Level Target/Location Code/Reason

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

The changes with removing values from system.xml require to eliminate ES2 support from our UI
Other API classes were removed to clean up our code from the deprecated in the previous release. The code was specific for ES2 or @deprecated functionality for ES5.
The potential effect on existing merchant can be caused by upgrades if they used ES2 before. It should be communicated by release notes for on-premise and cloud customers.

### Inventory asynchronous reindex

The new setting is added to the configuration: Stock/Source reindex strategy

It's possible to have a "burst" of activity that triggers contention on the index process.
Even if I was to batch and defer the individual updates (that we control via automated updates) that were triggering the indexer, it's still highly likely that an index table collision would occur based on "other" activity.

Eg; if the indexer is running based on schedule, and replenishment happens manually through admin, or interaction with an order, indexing gets triggered. Now we have two processes attempting to index - one of those will "lose", leading to deadlock/stale index.

```terminal
MAJOR Magento\InventoryIndexer\Indexer\Stock\StockIndexer::__construct
/InventoryIndexer/Indexer/Stock/StockIndexer.php:28 M113 [public] Method parameter typing changed.
MAJOR Magento\InventoryIndexer\Indexer\SourceItem\SourceItemIndexer::__construct
/InventoryIndexer/Indexer/SourceItem/SourceItemIndexer.php:27 M113 [public] Method parameter typing changed.
```

Also the new setting is added to the configuration: "Stock/Source reindex strategy" with possible options: "Synchronous" and "Asynchronous"

### JSON field support

Starting MySQL 5.7 supports native JSON data type. https://dev.mysql.com/doc/refman/5.7/en/json.html

This pull request enables the possibility to use JSON fields with Magento declarative schema.

### Laminas

In the scope of work on migration ZF2 components to Laminas, we have 2 BIC changes in the following files:

```terminal
Magento\Backend\App\Area\FrontNameResolver::_construct - _constructor argument type was changed
Magento\Framework\App\Response\HttpInterface::getHeader - declared return type was changed
```

Both files are API class/interface. From my point of view, these changes are not BIC because they will be solved dynamically in runtime if our customers follow recommended guidelines

### MediaContent and MediaContentApi modules

MediaContent and MediaContentApi modules were introduced providing the ability to track relations between content and media assets used in that content.

The Magento_MediaContent module provides implementations for managing relations between content and media files used in that content.

Additionally, observers have been added to Cms and Catalog modules to save the relation of corresponding entities to MediaContent storage

### Method parameter typing changed

Leveraging PHP 7+ Throwables (https://www.php.net/manual/en/class.throwable.php) to enable catching ALL possible errors as such might expose confidential information such as passwords.

Leveraging PHP7+ Throwables (https://www.php.net/manual/en/class.throwable.php) to enable catching ALL possible errors as such might expose confidential information such passwords.

https://public-results-storage-prod.magento-testing-service.engineering/reports/magento/magento2/pull/25250/721bb8a137f3ae81d84077ad7622765b/SemanticVersionChecker/report-magento2.html

```terminal
Magento\Framework\App\Bootstrap::terminate
/lib/internal/Magento/Framework/App/Bootstrap.php:426 M114 [protected] Method parameter typing changed.
```

### New bulk interfaces for inventory scalability check

In order to support bulk check for products salability we introduced two new interfaces:

```terminal
InventorySalesApi/Api/AreProductsSalableInterface
InventorySalesApi/Api/AreProductsSalableForRequestedQtyInterface
```

Such changes will provide the ability for 3d party developers to optimize performance by providing an implementation for bulk services.

-  Introduced a Bulk version of IsProductSalableForRequestedQtyInterface API
-  Introduced a Bulk version of IsProductSalableInterface when working with a list of items

### Size field added to media_gallery_asset table

Dependency for Adobe Stock integration

Size field added to media_gallery_asset table

Size field added to media_gallery_asset table to enable storing and using the media asset size.

Media Gallery Asset entity model and interface were updated accordingly.

Magento\MediaGalleryApi\Api\Data\AssetInterface that was updated with a new public method in the scope of the changes is not marked as @api so it's not currently part of Magento API

The possible impact is minimal, the table was introduced in 2.3.4 (just several month ago) and it was not used by any functionality in magento2 (only Adobe Stock Integration extension)

### SVC failure due to adding strict types

Fix bug: `getDefaultLimitPerPageValue` returns value that is not available

The pull request fixes bug where `getDefaultLimitPerPageValue` returns value that is not available https://github.com/magento/magento2/issues/27089

As a Store Administrator, you are able to provide the Products per Page on Grid Allowed Values and Products per Page on Grid Default Value. There is no verification, so you can accidentally set the default value to be one of the unavailable options.

As per technical guidelines]

All new PHP files MUST have strict type mode enabled by starting with declare(strict_types=1);. All updated PHP files SHOULD have strict type mode enabled. PHP interfaces MAY have this declaration.

Strict typing was added to the app/code/Magento/Catalog/Helper/Product/ProductList.php

It caused SVC failures.

Return type now array (the same as before in DocBlock):

```terminal
MAJORMagento\Catalog\Helper\Product\ProductList::getAvailableLimit /app/code/Magento/Catalog/Helper/Product/ProductList.php:122M120 [public] Method return typing
```

Return type now array (the same as before in DocBlock):

```terminal
changed.MAJORMagento\Catalog\Helper\Product\ProductList::getAvailableLimit /app/code/Magento/Catalog/Helper/Product/ProductList.php:122V060 [public] Method parameter name
```

Now returns int for DefaultLimitPerPageValue:

```terminal
changed.MAJORMagento\Catalog\Helper\Product\ProductList::getDefaultLimitPerPageValue /app/code/Magento/Catalog/Helper/Product/ProductList.php:147M120 [public] Method return typing changed.
```

PR: https://github.com/magento/magento2/pull/27093

BC change impact:

The only stores that would be affected are the ones who changed the configuration value for Default items per page, without customizing possible options. Some of system integrators customize either default value or allowed values.
As a result - there is inconsistency between default and allowed values. So far this worked by coincidence, but after the change, that would be explicit. 

Build: https://public-results-storage-prod.magento-testing-service.engineering/reports/magento/magento2/pull/27093/0737340aa088462c5834e9dd4547bb1e/SemanticVersionChecker/report-magento2.html

### UUID validator

This code adds Ramsey library as UUID validator and creates wrappers on it.

This feature is needed for the async-import project. They pass UUID to get status of the async-import, for that they need to validate UUID.
