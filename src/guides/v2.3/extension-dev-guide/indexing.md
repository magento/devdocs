---
group: php-developer-guide
title: Indexing overview
---

Indexing is how Magento transforms data such as products and categories, to improve the performance of your [storefront](https://glossary.magento.com/storefront). As data changes, the transformed data must be updated or reindexed. Magento has a very sophisticated architecture that stores lots of merchant data (including [catalog](https://glossary.magento.com/catalog) data, prices, users, and stores) in many database tables. To optimize storefront performance, Magento accumulates data into special tables using indexers.

For example, if you change the price of an item from $4.99 to $3.99. Magento must reindex the price change to display it on your storefront.

Without indexing, Magento would have to calculate the price of every product on the fly, taking into account [shopping cart](https://glossary.magento.com/shopping-cart) price rules, bundle pricing, discounts, tier pricing, etc. Loading the price for a product would take a long time, possibly resulting in cart abandonment.

## Indexing terminology

Dictionary
: Original data entered to the system. Dictionaries are organized in <a href="http://en.wikipedia.org/wiki/Database_normalization" target="_blank">normal form</a> to facilitate maintenance (updating the data).

Index
: Representation of the original data for optimized reading and searching. Indexes can contain results of aggregations and various calculations. Index data can be always re-created from a dictionary using a certain algorithm.

Indexer
: Object that creates an index.

### Create custom indexers

Magento contains several indexers out of the box, but you might want to add your own if your customization requires data searches, which are not optimized by the Magento default indexers.

This topic provides a high level description of how indexing is implemented from a developer's point of view, and practical advice for how to add your own indexer.

## How Magento implements indexing

The following components are involved in the indexing process:

<table>
    <tbody>
        <tr>
            <th>Component</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Indexer" target="_blank">Magento_Indexer</a></td>
            <td>Implements:
                <ul>
                    <li>indexer declaration</li>
                    <li>indexer running</li>
                    <li>indexer running mode configuration</li>
                    <li>indexer status</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Mview" target="_blank">Magento\Framework\Mview</a></td>
            <td>
                <ul>
                    <li>Allows tracking database changes for a certain <a href="https://glossary.magento.com/entity" target="_blank">entity</a> (product, <a href="https://glossary.magento.com/category" target="_blank">category</a>, etc.) and running change handler.</li>
                    <li>Emulates the <a href="http://en.wikipedia.org/wiki/Materialized_view" target="_blank">materialized view</a> technology for MySQL using triggers and separate materialization process (provides executing <a href="https://glossary.magento.com/php" target="_blank">PHP</a> code instead of SQL queries, which allows materializing multiple queries).</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

{:.bs-callout-warning}
`Magento_Indexer` replaces the Magento 1.x `Magento_Index` module. Use `Magento_Indexer` for all new development.

### Indexing types

Each index can perform the following types of reindex operations:

*  Full reindex, which means rebuilding all the indexing-related database tables

   Full reindexing can be caused by a variety of things, including creating a new web store or new customer group.

   You can optionally fully reindex at any time using the [command line]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html).

*  Partial reindex, which means rebuilding the database tables only for the things that changed (like changing a single product attribute or price)

The type of reindex performed in each particular case depends on the type of changes made in the dictionary or in the system. This dependency is specific for [each indexer](#m2devgde-indexing-outofbox).

The following figure shows the logic for partial reindexing.

![Partial indexing workflow]({{ site.baseurl }}/common/images/index_indexers_flow.png){:width="300px"}

### Indexer status {#m2devgde-indexing-status}

Depending on whether index data is up to date, an indexer status value is one of the following:

Database Status|Admin Status|Description
`valid`|Ready|Data is synchronized, no reindex required
`invalid`|Reindex Required|The original data was changed, the index should be updated
`working`|Processing|Indexing is in progress

The database status can be seen when viewing the SQL table `indexer_state`.
The admin status can be seen when viewing the indexer grid in Magento Admin or when running the index status from the CLI.

The Magento indexing mechanism uses the status value in reindex triggering process. You can check the status of an indexer in the [Admin](https://glossary.magento.com/admin) panel in **System >** Tools **> Index Management** or manually using the [command line]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#view-indexer-status).

### Indexing modes {#m2devgde-indexing-modes}

Reindexing can be performed in two modes:

*  Update on Save - index tables are updated immediately after the dictionary data is changed.

{:.bs-callout-info}
**Update on Save** indexers must use custom code (plugins, events or any other working approach) in order to trigger reindexing when entities are saved/deleted etc.

*  Update by Schedule - index tables are updated by cron job according to the configured schedule.

 {:.bs-callout-info}
**Update by Schedule** does not support the `customer_grid` indexer. You must either use **Update on Save** or reindex the customer grid manually (`bin/magento indexer:reindex customer_grid`). See the [Help Center article](https://support.magento.com/hc/en-us/articles/360025481892-New-customer-records-are-not-displayed-in-the-Customers-grid-after-importing-them-from-CSV).

To set these options:

1. Log in to the [Magento Admin](https://glossary.magento.com/magento-admin).
1. Click **System >** Tools **> Index Management**.
1. Select the checkbox next to each type of indexer to change.
1. From the **Actions** list, click the indexing mode.
1. Click **Submit**.

You can also reindex from the [command line]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#configure-indexers)

The following figure shows an example of setting indexers to Update by Schedule:

![Changing indexer modes]({{ site.baseurl }}/common/images/index_index-modes.png){:width="600px"}

### Mview {#m2devgde-mview}

The `mview.xml` file is used to track database changes for a certain entity.

For example part of `Magento/Catalog/etc/mview.xml` is tracking category to product relation described in the following record:

```xml
<!-- ... -->
<view id="catalog_category_product" class="Magento\Catalog\Model\Indexer\Category\Product" group="indexer">
  <subscriptions>
    <table name="catalog_category_entity" entity_column="entity_id" />
    <table name="catalog_category_entity_int" entity_column="entity_id" />
  </subscriptions>
</view>
<!-- ... -->
```

Explanation of nodes:

*  The `view` node defines an indexer. The `id` attribute is a name of the indexer table, the `class` attribute is indexer executor, the `group` attribute defines the indexer group.
*  The `subscriptions` node is a list of tables for tracking changes.
*  The `table` node defines the certain table to observe and track changes. The attribute `name` is a name of an observable table, the attribute `entity_column` is an identifier column of entity to be re-indexed. So, in case of `catalog_category_product`, whenever one or more categories is saved, updated or deleted in `catalog_category_entity` the `execute` method of `Magento\Catalog\Model\Indexer\Category\Product` will be called with argument `ids` containing ids of entities from column defined under `entity_column` attribute. If indexer type is set to "Update on Save" the method is called right away after the operation. If it set to "Update by Schedule" the mechanism creates a record in the change log table using MYSQL triggers.

A change log table is created according to the naming rule - INDEXER_TABLE_NAME + '_cl', in case of `catalog_category_product` it will be `catalog_category_product_cl`.
The table contains the `version_id` auto-increment column and `entity_id` column that contains identifiers of entities to be re-indexed.
For each `table` node the framework automatically creates MYSQL AFTER triggers for each possible event (INSERT, UPDATE, DELETE).

For the table `catalog_category_entity` triggers will be created with the following statements.
INSERT operation:

```mysql
BEGIN
    INSERT IGNORE INTO `catalog_category_product_cl` (`entity_id`) VALUES (NEW.`entity_id`);
END
```

UPDATE operation:

```mysql
BEGIN
    IF (NEW.`entity_id` <=> OLD.`entity_id`
        OR NEW.`attribute_set_id` <=> OLD.`attribute_set_id`
        OR NEW.`parent_id` <=> OLD.`parent_id`
        OR NEW.`created_at` <=> OLD.`created_at`
        OR NEW.`path` <=> OLD.`path`
        OR NEW.`position` <=> OLD.`position`
        OR NEW.`level` <=> OLD.`level`
        OR NEW.`children_count` <=> OLD.`children_count`)
            THEN INSERT IGNORE INTO `catalog_category_product_cl` (`entity_id`) VALUES (NEW.`entity_id`);
    END IF;
END
```

DELETE operation:

```mysql
BEGIN
    INSERT IGNORE INTO `catalog_category_product_cl` (`entity_id`) VALUES (OLD.`entity_id`);
END
```

The method `Magento\Framework\Mview\ViewInterface::update` is responsible for handling records in the changelog. The method is being called by CRON and
it defines IDs to be re-indexed from the change log by last applied `version_id` and calls the `execute` method for each particular indexer with IDs as an argument.

### How to reindex

You can reindex by:

*  Using a [cron job]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html), which is preferred because indexing runs every minute.
*  Using the [`magento indexer:reindex [indexer]`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex) command, which reindexes selected indexers, or all indexers, one time only.

## Magento indexers {#m2devgde-indexing-outofbox}

The Magento `Open Source` application implements the following indexers (use [bin/magento indexer:info]({{ page.baseurl }}/reference/cli/magento.html#indexerinfo) to list the indexers):

| Indexer name | Indexer method name | Indexer class | Description |
| --- | --- | --- | --- |
| Design Config Grid | `design_config_grid` | [Magento\Theme\Model\Indexer\Design\Config]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/Model/Indexer/Design/Config.php) | |
| Customer Grid | `customer_grid` | [Magento\Framework\Indexer\Action\Entity]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Indexer/Action/Entity.php) | Rebuilds the customer grid index. Not supported by the `Update by Schedule` indexing mode. See the [Help Center article](https://support.magento.com/hc/en-us/articles/360025481892-New-customer-records-are-not-displayed-in-the-Customers-grid-after-importing-them-from-CSV). |
| Category products | `catalog_category_product` | [Magento\Catalog\Model\Indexer\Category\Product]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Category/Product.php) | Creates category/products association |
| Product categories | `catalog_product_category` | [Magento\Catalog\Model\Indexer\Product\Category]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Product/Category.php) | Creates category/products association |
| Product price | `catalog_product_price` | [Magento\Catalog\Model\Indexer\Product\Price]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Product/Price.php) | Pre-calculates product prices |
| Product entity attribute value | `catalog_product_attribute` | [Magento\Catalog\Model\Indexer\Product\Eav]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Product/Eav.php) | Reorganizes the EAV product structure to flat structure |
| Stock | `cataloginventory_stock` | [Magento\CatalogInventory\Model\Indexer\Stock]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Model/Indexer/Stock.php) |  |
| Catalog rule product | `catalogrule_rule` | [Magento\CatalogRule\Model\Indexer\Rule\RuleProductIndexer]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogRule/Model/Indexer/Rule/RuleProductIndexer.php) |  |
| Catalog product rule | `catalogrule_product` | [Magento\CatalogRule\Model\Indexer\Product\ProductRuleIndexer]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogRule/Model/Indexer/Product/ProductRuleIndexer.php) |  |
| Catalog search | `catalogsearch_fulltext` | [Magento\CatalogSearch\Model\Indexer\Fulltext]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogSearch/Model/Indexer/Fulltext.php) |  |

Magento Commerce Edition contains all indexers of Magento Open Source Edition and the following ones:

| Indexer name | Indexer method name | Indexer class | Description |
| --- | --- | --- | --- |
| Inventory | `inventory` | `Magento\InventoryIndexer\Indexer\InventoryIndexer` | Inventory index (MSI) |
| Product/Target Rule | `targetrule_product_rule` | `Magento\TargetRule\Model\Indexer\TargetRule\Product\Rule` | Indexes product/rule association |
| Target Rule/Product | `targetrule_rule_product` | `Magento\TargetRule\Model\Indexer\TargetRule\Rule\Product` | Indexes rule/product association |
| Sales Rule | `salesrule_rule` | `Magento\AdvancedSalesRule\Model\Indexer\SalesRule` | Indexes sales rule |
