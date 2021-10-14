---
group: release-notes
title: Magento 2.4 backward incompatible changes
---

This page highlights backward incompatible changes between releases that have a major impact and require detailed explanation and special instructions to ensure third-party modules continue working with Magento. High-level reference information for all backward incompatible changes in each release are documented in the [Backward incompatible changes reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html) topic.

## 2.4.4

### Inventory check on cart load

A new "Enable Inventory Check On Cart Load" system configuration option has been added to Admin > **Stores** > **Configuration** > **General** > **Catalog** > **Inventory** > **Stock Options**. The new option determines if an inventory check is performed when loading a product in the cart. It is enabled by default.

Disabling the inventory check can improve performance for checkout steps, especially when there are many items in the cart. But if this inventory check is skipped, some out-of-stock scenarios could throw other types of errors, including:

-  `The requested qty is not available`
-  `Unable to place order: Enter a valid payment method and try again.`
-  `Unable to place order: There are no source items with the in stock status.`
-  `The shipping method is missing. Selefct the shipping method and try again.`

The following table contains metrics of checkout with a large amount of products (750) and additional product by guest:

Step | Absolute numbers | Percentage change | Change in milliseconds | Status
-----|------------------|-------------------|--------------|-------
Add Bulk Of Simple Products to Cart | 6260 | -0.7% | -41ms | ok
Load Cart Section - Total: 750 | 788 | -49.2% | -762ms | improvement
Configurable Product 1 Add To Cart - Total: 751 | 1566 | -32.3% | -748ms | improvement
Load Cart Section - Total: 751 | 789 | -49.0% | -757ms | improvement
Configurable Product 2 Add To Cart - Total: 752 | 1574 | -32.1% | -745ms | improvement
Load Cart Section - Total: 752 | 793 | -48.6% | -751ms | improvement
Open Cart | 1587 | -33.1% | -785ms | improvement
Checkout start | 942 | -44.6% | -757ms | improvement
Checkout Email Available | 36 | +0.0% | +0ms | ok
Checkout Estimate Shipping Methods | 1287 | -58.1% | -1782ms | improvement
Checkout Billing/Shipping Information | 2098 | -61.5% | -3354ms | improvement
Checkout Payment Info/Place Order | 4618 | -25.1% | -1549ms | improvement
Checkout success | 270 | -0.4% | -1ms | ok

### TinyMCE

There are three major BICs related to TinyMCE in 2.4.4, including:

-  Renamed TinyMCE4 to tinymce
-  Refactored TinyMCE MFTF tests
-  Refactored TinyMCE4 for MFTF test

#### Renamed `tinymce4` to `tinymce`

Renaming `tinymce4` to `tinymce` removes the strict dependency on a version of TinyMCE from the code.
The following changes could cause the WYSIWYG interface to break and not display on pages that use it in the Admin and break the Page Builder extension:

-  Renamed the array key in the TinyMCE [configuration provider]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cms/Model/Wysiwyg/DefaultConfigProvider.php)
-  Renamed the alias in the [`requirejs-config.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/requirejs-config.js) file
-  Renamed a [Page Builder JavaScript file](https://github.com/magento/magento2-page-builder/blob/develop/app/code/Magento/PageBuilder/view/adminhtml/web/ts/js/wysiwyg/tinymce.ts) that was marked as API from `tinymce4.ts` to `tinymce.ts`

You are impacted by these changes if:

-  You use a custom configuration for TinyMCE that uses the `tinymce4` alias in `requirejs`
-  If you use the Page Builder Javascript file that was renamed in any other place than the `app/code/Magento/PageBuilder/etc/adminhtml/di.xml` file

If these changes impact you, take the following action:

-  Change the name of the array key in the TinyMCE configuration provider from `tinymce4` to `tinymce`
-  Change any `requirejs` file that uses the `tinymce4` alias to `tinymce`
-  Update anywhere that references the Page Builder JavaScript file that was renamed

#### Refactored TinyMCE MFTF tests
#### Refactored TinyMCE4 for MFTF test
## 2.4.3-p1

## Media Gallery folders

Version 2.4.3-p1 introduced a configuration option for Media Gallery content that denotes which folders can contain Media gallery files.

The new configuration path `system/media_storage_configuration/media_storage/allowed_resource/media_gallery_image_folders` is used to define the "Media Gallery Allowed" folders in 'config.xml'.

The initial values are the `wysiwyg` and `catalog/category` folders.

These can be extended by adding a new value in `config.xml`.

### Issue

Any Media Gallery files within `pub/media`, or in a folder outside a "Media Gallery Allowed" folder will not be accessible to the Media Gallery after the patch is installed.

### Workaround

Copy any Media Gallery files to `pub/media/wysiwyg` or one of the specified "Media Gallery Allowed" folders, or add a new entry under `system/media_storage_configuration/media_storage/allowed_resource/media_gallery_image_folders`.

## 2.4.2- 2.4.3

### Cookie message is displayed when new page loads

Stores with a pre-existing custom theme and for which cookies are enabled now display this message: **The store will not work correctly in the case when cookies are disabled**. This issue is caused by a backward-incompatible change in how Magento handles cookie status messages. [GitHub-9095](https://github.com/magento/devdocs/issues/9095)

**Workaround**: Add the `cookie-status-message` class to the
`custom_theme_path/Magento_Theme/web/css/source/_module.less` file for custom themes.

```javascript

& when (@media-common = true) {
    .cookie-status-message {
        display: none;
    }
}

```

### pelago/emogrifier update

The Magento dependency `pelago/emogrifier` has been updated from version 3.1.0 to 5.0.0. This update resulted in the introduction of backwards-incompatible changes to the `Magento\Email\Model\Template\Filter` class. The changed code is executed during Magento email templates rendering. See [BIC reference]({{page.baseurl}}/release-notes/backward-incompatible-changes/reference.html). <!--- MC-41445-->

### TinyMCE

The TinyMCE v3 library, which was deprecated on May 14, 2018, has been removed because it is not compatible with the latest version of jQuery. You must use TinyMCE v4.

*  The `Magento_Tinymce3` module has been removed from {{ site.data.var.ce }}.

*  The `Magento_Tinymce3Banner` module has been removed from {{ site.data.var.ee }}.

*  All MFTF tests related to TinyMCE v3 have been removed.

To switch to the TinyMCE v4 library, you must change the `cms/wysiwyg/editor` value in the `core_config_data` database table to `mage/adminhtml/wysiwyg/tiny_mce/tinymce4Adapter`.

This change only impacts extensions that depend on the TinyMCE v3 library for WYSIWYG functionality in the Admin.

{:.bs-callout-info}

An upgrade script that switches TinyMCE to v4 has existed since 2.3.6 ([`Magento\Config\Setup\Patch\Data\UnsetTinymce3`]({{ site.mage2bloburl }}/2.3/app/code/Magento/Config/Setup/Patch/Data/UnsetTinymce3.php)).

## 2.4.1 - 2.4.2

### Compare lists

Magento uses session storage to work with compare lists. In version 2.4.2, Magento added GraphQL support for compare lists. Instead of relying on session storage, GraphQL now saves compare list information into the database, with each list assigned an ID. These changes are additive and do not alter the behavior of compare lists on the storefront. However, there is a chance these changes could affect third-party extensions that manage compare lists.

The following methods and property have been added to the `Magento\Catalog\Model\ResourceModel\Product\Compare\Item\Collection` class. They are available to all developers, not just those working on GraphQL.

```terminal
getListId()
getProductsByListId()
removeCompareList()
setListId()
setListIdToCustomerCompareItems()
$listId
```

This feature introduces the following database changes:

*  Added the foreign key `catalog_compare_item/CATALOG_COMPARE_ITEM_LIST_ID_CATALOG_COMPARE_LIST_LIST_ID`
*  Added the `catalog_compare_list` table
*  Added the `catalog_compare_item/list_id` column

## 2.3.0 - 2.4

### Elasticsearch

MySQL is no longer used for search. You must use [Elasticsearch]({{page.baseurl}}/install-gde/prereq/elasticsearch.html).

You must [install and configure]({{ page.baseurl }}/install-gde/prereq/elasticsearch.html) Elasticsearch 7.6.x before upgrading to Magento 2.4.0. New installations require a connection to Elasticsearch to complete.

{:.bs-callout-warning}
Magento does not support Elasticsearch 2.x, 5.x, and 6.x. If you attempt to upgrade Magento before installing and configuring a supported search engine, Magento could go into an inconsistent state and the Admin will become inaccessible.

Extension developers must update any module that depends on the unsupported search engines.

The changes with removing values from the `system.xml` file require eliminating ES2 support from the Admin UI. Other API classes were removed to clean up the code when we deprecated ES2 and ES5 in Magento 2.3.5.

The following modules have been refactored to use the `ElasticSearchResultApplier` class and avoid usage of `CatalogSearch` and `SearchResultApplier`, which was based on MySQL:

*  CatalogGraphQL
*  QuickOrder (B2B)

In addition, the following constructors were modified to provide a mixed type. We have removed deprecated class private and protected components but have left their usages as arguments in the constructor for backward compatibility.

```terminal
Magento\CatalogSearch\Model\ResourceModel\Fulltext\Collection
Magento\CatalogSearch\Model\ResourceModel\Advanced\Collection
Magento\CatalogSearch\Model\Indexer\Fulltext\Action\Full
```

{:.bs-callout-info}

We recommend that you do not inherit from any Magento class. If your extension does inherit from any of the classes above, make sure it is not using any of the deprecated or removed mixed type class members. For compatibility, modify your constructors accordingly.

The following deprecated interfaces were deleted. If your extension implements any of these interfaces, refactor your code to use the Elasticsearch module.

```terminal
Magento\Framework\Search\Adapter\Mysql\Query\Builder\QueryInterface
Magento\CatalogSearch\Model\Search\FilterMapper\FilterStrategyInterface
```

The following deprecated classes were deleted. If your extension uses any of the above classes, then you must do a major refactor to your code to use the Elasticsearch module and not rely on the MySQL Search class implementations.

```terminal
Magento\Framework\Search\Adapter\Mysql\DocumentFactory
Magento\Framework\Search\Adapter\Mysql\Mapper
Magento\Framework\Search\Adapter\Mysql\ScoreBuilder
Magento\Framework\Search\Adapter\Mysql\Query\Builder\Match
Magento\Framework\Search\Adapter\Mysql\Field\FieldFactory
Magento\Framework\Search\Adapter\Mysql\Aggregation\Builder
Magento\Framework\Search\Adapter\Mysql\Aggregation\DataProviderContainer
Magento\CatalogSearch\Model\Search\TableMapper
Magento\CatalogSearch\Model\Indexer\IndexerHandler
Magento\CatalogSearch\Model\Indexer\ProductFieldset
Magento\CatalogSearch\Model\Indexer\Scope\IndexTableNotExistException
Magento\CatalogSearch\Model\Indexer\Fulltext\Action\IndexIterator
Magento\CatalogSearch\Model\Adapter\Mysql\Filter\AliasResolver
```

### Magento Functional Testing Framework (MFTF)

MFTF now uses Google Authenticator to execute tests with 2FA enabled. MFTF will not work with Magento 2.4.0 without additional configuration steps to enable Google Authenticator. See [Configuring MFTF for Two-Factor Authentication (2FA)](https://devdocs.magento.com/guides/v2.4/security/two-factor-authentication.html#magento-functional-testing-framework).

### Inventory asynchronous reindex

A new Stock/Source reindex strategy configuration setting option was added to the Admin to prevent index table collisions. The setting has the following options:

*  Synchronous
*  Asynchronous

Previously, it was possible to have a "burst" of activity that triggered contention of the index process. Even batching and deferring individual updates that were triggering the indexer, it was still highly likely that an index table collision would occur based on "other" activity.

For example, if the indexer was running based on schedule, and replenishment happens manually through the Admin or interaction with an order, indexing would be triggered. Previously, that would result in two processes attempting to index; one of those will "lose", leading to a deadlocked/stale index.

```terminal
changed.MAJOR: Magento\InventoryIndexer\Indexer\Stock\StockIndexer::__construct
/InventoryIndexer/Indexer/Stock/StockIndexer.php:28 M113 [public] Method parameter typing changed.
changed.MAJOR: Magento\InventoryIndexer\Indexer\SourceItem\SourceItemIndexer::__construct
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

### New bulk interfaces for inventory salability check

In order to support bulk check for products salability, we introduced two new interfaces:

```terminal
Magento\InventorySalesApi\Api\AreProductsSalableInterface
Magento\InventorySalesApi\Api\AreProductsSalableForRequestedQtyInterface
```

These changes allow third-party developers to optimize performance by providing an implementation for bulk services.

*  Introduced a Bulk version of `IsProductSalableForRequestedQtyInterface` API
*  Introduced a Bulk version of `IsProductSalableInterface` when working with a list of items

### PHP

PHP 7.4 support is added to Magento 2.4.0, and the lowest compatible version is PHP 7.3. As the result, some of the Composer libraries used by Magento have been updated.

This section lists the backward incompatible changes and deprecated features in PHP 7.4. During development, we also discovered changes in the behavior of the `setcookie` function:

```php
setcookie("tst", "Test Message");
print_r(headers_list());
//PHP 7.3
Array
(
    [0] => X-Powered-By: PHP/7.3.14
    [1] => Set-Cookie: tst=Test+Message
)
//PHP 7.4
Array
(
    [0] => X-Powered-By: PHP/7.4.4
    [1] => Set-Cookie: tst=Test%20Message
)
```

### PHPUnit

The current PHPUnit framework version used with Magento 2.4.0 is PHPUnit 9. This requires refactoring most PHPUnit-based tests.

The most critical changes include:

*  The methods listed below now have a void return type declaration:

   ```terminal
   PHPUnit\Framework\TestCase::setUpBeforeClass()
   PHPUnit\Framework\TestCase::setUp()
   PHPUnit\Framework\TestCase::assertPreConditions()
   PHPUnit\Framework\TestCase::assertPostConditions()
   PHPUnit\Framework\TestCase::tearDown()
   PHPUnit\Framework\TestCase::tearDownAfterClass()
   PHPUnit\Framework\TestCase::onNotSuccessfulTest()
   ```

*  The following methods have been removed, and you should change the implementation their tests:

   ```terminal
   assertAttributeContains()
   assertAttributeNotContains()
   assertAttributeContainsOnly()
   assertAttributeNotContainsOnly()
   assertAttributeCount()
   assertAttributeNotCount()
   assertAttributeEquals()
   assertAttributeNotEquals()
   assertAttributeEmpty()
   assertAttributeNotEmpty()
   assertAttributeGreaterThan()
   assertAttributeGreaterThanOrEqual()
   assertAttributeLessThan()
   assertAttributeLessThanOrEqual()
   assertAttributeSame()
   assertAttributeNotSame()
   assertAttributeInstanceOf()
   assertAttributeNotInstanceOf()
   assertAttributeInternalType()
   assertAttributeNotInternalType()
   attribute()
   attributeEqualTo()
   readAttribute()
   getStaticAttribute()
   getObjectAttribute()
   ```

*  The signature of `assertContains()`, `assertNotContains()`, `assertEquals()`, and `assertNotEquals()` were changed. In most cases, more specific methods should be used instead, like `assertStringContainsString()`

#### Tips and Tricks

*  Use `\PHPUnit\Framework\Assert::assertEqualsCanonicalizing()` if you need to compare two entities with a different order of elements. `assertEquals()` has been used before.
*  Use `\PHPUnit\Framework\Assert::assertEqualsWithDelta()` if you need non-strict comparison. `assertEquals()` with additional parameters has been used before.

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
changed.MAJOR: Magento\Catalog\Helper\Product\ProductList::getAvailableLimit
/app/code/Magento/Catalog/Helper/Product/ProductList.php:122M120 [public] Method return typing
```

The input parameter is renamed to `viewMode`:

```terminal
changed.MAJOR: Magento\Catalog\Helper\Product\ProductList::getAvailableLimit
/app/code/Magento/Catalog/Helper/Product/ProductList.php:122V060 [public] Method parameter name
```

Now returns int for `DefaultLimitPerPageValue`:

```terminal
changed.MAJOR: Magento\Catalog\Helper\Product\ProductList::getDefaultLimitPerPageValue
/app/code/Magento/Catalog/Helper/Product/ProductList.php:147M120 [public] Method return typing changed.
```

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

### UUID validator

This code adds the Ramsey library as a UUID validator and creates wrappers for it. This feature is needed for the async-import project. They pass UUID to get status of the async-import, for that they need to validate UUID.
