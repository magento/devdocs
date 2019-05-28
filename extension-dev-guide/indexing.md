---
group: php-developer-guide
subgroup: 99_Module Development
title: Indexing overview
menu_title: Indexing overview
menu_order: 13
level3_menu_node: level3child
level3_subgroup: index
redirect_from:
  - /guides/v2.0/architecture/index-cache/indexing.html
---

## Introduction to indexing   {#m2devgde-indexing-intro}

_Indexing_ is how Magento transforms data such as products, categories, and so on, to improve the performance of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. As data changes, the transformed data must be updated&mdash;or reindexed. Magento has a very sophisticated architecture that stores lots of merchant data (including {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} data, prices, users, stores, and so on) in many database tables. To optimize storefront performance, Magento accumulates data into special tables using indexers.

For example, suppose you change the price of an item from $4.99 to $3.99. Magento must _reindex_ the price change to display it on your storefront.

Without indexing, Magento would have to calculate the price of every product on the fly&mdash;taking into account {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} price rules, bundle pricing, discounts, tier pricing, and so on. Loading the price for a product would take a long time, possibly resulting in cart abandonment.

Indexing terminology:

<dl><dt>Dictionary</dt>

<dd>Original data entered to the system. Dictionaries are organized in <a href="http://en.wikipedia.org/wiki/Database_normalization" target="_blank">normal form</a> to facilitate maintenance (updating the data).</dd>

<dt>Index</dt>

<dd>Representation of the original data for optimized reading and searching. Indexes can contain results of aggregations and various calculations. Index data can be always re-created from a dictionary using a certain algorithm.</dd>

<dt>Indexer</dt>

<dd>Object that creates an index.</dd></dl>

### Create custom indexers   {#indexing-custom}

Magento contains several indexers out of the box, but you might want to add your own if your customization requires data searches, which are not optimized by the Magento default indexers.

This topic provides a high level description of how indexing is implemented from a developer's point of view, and practical advice of how to add your own indexer.

## How Magento implements indexing   {#m2devgde-indexing-implementation}

The following components are involved in the indexing process:

<table>
	<tbody>
		<tr>
			<th>Component</th>
			<th>Description</th>
		</tr>
	<tr>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Indexer" target="_blank">Magento_Indexer</a></td>
		<td>Implements:<ul>
<li>indexer declaration</li>
<li>indexer running</li>
<li>indexer running mode configuration</li>
<li>indexer status</li></ul></td>
	</tr>
	<tr>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Mview" target="_blank">Magento\Framework\Mview</a></td>
		<td><ul>
<li>Allows tracking database changes for a certain {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} (product, {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} and so on) and running change handler.</li>
<li>Emulates the <a href="http://en.wikipedia.org/wiki/Materialized_view" target="_blank">materialized view</a> technology for MySQL using triggers and separate materialization process (provides executing {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} code instead of SQL queries, which allows materializing multiple queries).</li></ul></td>
	</tr>
</tbody></table>

{: .bs-callout .bs-callout-warning }
`Magento_Indexer` replaces the Magento 1.x `Magento_Index` module. Use `Magento_Indexer` for all new development.

### Indexing types   {#m2devgde-indexing-types}

Each index can perform the following types of reindex operations:

*	Full reindex, which means rebuilding all the indexing-related database tables.

	Full reindexing can be caused by a variety of things, including creating a new web store or new customer group.

	You can optionally fully reindex at any time using the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html">command line</a>.

*	Partial reindex, which means rebuilding the database tables only for the things that changed (for example, changing a single product attribute or price).

The type of reindex performed in each particular case depends on the type of changes made in the dictionary or in the system. This dependency is specific for <a href="#m2devgde-indexing-outofbox">each indexer</a>.

The following figure shows the logic for partial reindexing.

![Partial indexing workflow]({{ site.baseurl }}/common/images/index_indexers_flow.png){:width="300px"}

### Indexer status {#m2devgde-indexing-status}

Depending on whether an index data is up to date, an indexer status value is one of the following:

*	valid: data is synchronized, no reindex required
*	invalid: the original data was changed, the index should be updated
*	working: indexing is in progress

The Magento indexing mechanism uses the status value in reindex triggering process. You can check the status of an indexer in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel under **System** > Tools > **Index Management** or manually using the [command line]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#view-indexer-status).

### Indexing modes   {#m2devgde-indexing-modes}

Reindexing can be performed in two modes:

*	Update on Save: index tables are updated immediately after the dictionary data is changed.
*	Update by Schedule: index tables are updated by cron job according to the configured schedule.

To set these options:

1.	Log in to the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.
2.	Click **System** > Tools > **Index Management**.
3.	Select the checkbox next to each type of indexer to change.
4.	From the **Actions** list, click the indexing mode.
5.	Click **Submit**.

You can also reindex from the [command line]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#configure-indexers)

The following figure shows an example of setting indexers to Update by Schedule.

![Changing indexer modes]({{ site.baseurl }}/common/images/index_index-modes.png){:width="600px"}

### How to reindex   {#m2devgde-indexing-how}

You can reindex in any of the following ways:

*	Using a <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-bkg">cron job</a> (preferred because indexing runs every minute)
*	Using the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex">`magento indexer:reindex [indexer]`</a> command, which reindexes selected indexers, or all indexers, one time only

## Magento indexers   {#m2devgde-indexing-outofbox}

The Magento application implements the following indexers:

<table>
	<tbody>
		<tr>
			<th>Indexer name</th>
			<th>Indexer method name</th>
			<th>Indexer class</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Category products</td>
		<td>catalog_category_product</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Category/Product.php" target="_blank">Magento\Catalog\Model\Indexer\Category\Product</a></td>
		<td>Creates category/products association</td>
	</tr>
	<tr>
		<td>Product categories</td>
		<td>catalog_product_category</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Product/Category.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Category</a></td>
		<td>Creates category/products association</td>
	</tr>
	<tr>
		<td>Product price</td>
		<td>catalog_product_price</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Product/Price.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Price</a></td>
		<td>Pre-calculates product prices</td>
	</tr>
	<tr>
		<td>Product entity attribute value</td>
		<td>catalog_product_attribute</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Indexer/Product/Eav.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Eav</a></td>
		<td>Reorganizes the EAV product structure to flat structure</td>
	</tr>
	<tr>
		<td>Stock</td>
		<td>cataloginventory_stock</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/Model/Indexer/Stock.php" target="_blank">Magento\CatalogInventory\Model\Indexer\Stock</a></td>
		<td />
	</tr>
	<tr>
		<td>Catalog rule product</td>
		<td>catalogrule_rule</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogRule/Model/Indexer/Rule/RuleProductIndexer.php" target="_blank">Magento\CatalogRule\Model\Indexer\Rule\RuleProductIndexer</a></td>
		<td />
	</tr>
	<tr>
		<td>Catalog product rule</td>
		<td>catalogrule_product</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogRule/Model/Indexer/Product/ProductRuleIndexer.php" target="_blank">Magento\CatalogRule\Model\Indexer\Product\ProductRuleIndexer</a></td>
		<td />
	</tr>
	<tr>
		<td>Catalog search</td>
		<td>catalogsearch_fulltext</td>
		<td><a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogSearch/Model/Indexer/Fulltext.php" target="_blank">Magento\CatalogSearch\Model\Indexer\Fulltext</a></td>
		<td />
	</tr>

</tbody></table>
