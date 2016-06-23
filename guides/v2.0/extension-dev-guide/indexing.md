---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development 
title: Indexing
menu_title: Indexing
menu_order: 12
version: 2.0
github_link: extension-dev-guide/indexing.md
redirect_from: 
  - /guides/v1.0/architecture/index-cache/indexing.html
  - /guides/v2.0/architecture/index-cache/indexing.html
---

#### Contents
*	<a href="#m2devgde-indexing-intro">Introduction to indexing</a>
*	<a href="#m2devgde-indexing-implementation">How Magento implements indexing</a>
*	<a href="#m2devgde-indexing-outofbox">Magento indexers</a>
*	<a href="#m2devgde-indexing-custom">Adding a custom indexer</a>

<h2 id="m2devgde-indexing-intro">Introduction to indexing</h2>
_Indexing_ is how Magento transforms data such as products, categories, and so on, to improve the performance of your storefront. As data changes, the transformed data must be updated&mdash;or reindexed. Magento has a very sophisticated architecture that stores lots of merchant data (including catalog data, prices, users, stores, and so on) in many database tables. To optimize storefront performance, Magento accumulates data into special tables using indexers.

For example, suppose you change the price of an item from $4.99 to $3.99. Magento must _reindex_ the price change to display it on your storefront.

Without indexing, Magento would have to calculate the price of every product on the fly&mdash;taking into account shopping cart price rules, bundle pricing, discounts, tier pricing, and so on. Loading the price for a product would take a long time, possibly resulting in cart abandonment.

Indexing terminology:

<dl><dt>Dictionary</dt>

<dd>Original data entered to the system. Dictionaries are organized in <a href="http://en.wikipedia.org/wiki/Database_normalization" target="_blank">normal form</a> to facilitate maintenance (updating the data).</dd>

<dt>Index</dt>

<dd>Representation of the original data for optimized reading and searching. Indexes can contain results of aggregations and various calculations. Index data can be always re-created from a dictionary using a certain algorithm.</dd>

<dt>Indexer</dt>

<dd>Object that creates an index.</dd></dl>

<h3 id="indexing-custom">Create custom indexers</h3>

Magento contains several indexers out of the box, but you might want to add your own if your customization requires data searches, which are not optimized by the Magento default indexers.

This topic provides a high level description of how indexing is implemented from a developer's point of view, and practical advice of how to add your own indexer.

<h2 id="m2devgde-indexing-implementation">How Magento implements indexing</h2>
The following components are involved in the indexing process:

<table>
	<tbody>
		<tr>
			<th>Component</th>
			<th>Description</th>
		</tr>
	<tr>
		<td><a href="{{ site.mage2000url }}app/code/Magento/Indexer" target="_blank">Magento_Indexer</a></td>
		<td>Implements:<ul>
<li>indexer declaration</li>
<li>indexer running</li>
<li>indexer running mode configuration</li>
<li>indexer status</li></ul></td>
	</tr>
	<tr>
		<td><a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Mview" target="_blank">Magento\Framework\Mview</a></td>
		<td><ul>
<li>Allows tracking database changes for a certain entity (product, category and so on) and running change handler.</li>
<li>Emulates the <a href="http://en.wikipedia.org/wiki/Materialized_view" target="_blank">materialized view</a> technology for MySQL using triggers and separate materialization process (provides executing PHP code instead of SQL queries, which allows materializing multiple queries).</li></ul></td>
	</tr>
</tbody></table>

  <div class="bs-callout bs-callout-warning" id="warning">
    <p><code>Magento_Indexer</code> replaces the Magento 1.x <code>Magento_Index</code> module. Use <code>Magento_Indexer</code> for all new development.</p>
  </div>

<h3 id="m2devgde-indexing-types">Indexing types</h3>

Each index can perform the following types of reindex operations:

*	Full reindex, which means rebuilding all the indexing-related database tables.

	Full reindexing can be caused by a variety of things, including creating a new web store or new customer group.

	You can optionally fully reindex at any time using the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">command line</a>.

*	Partial reindex, which means rebuilding the database tables only for the things that changed (for example, changing a single product attribute or price).

The type of reindex performed in each particular case depends on the type of changes made in the dictionary or in the system. This dependency is specific for <a href="#m2devgde-indexing-outofbox">each indexer</a>.

The following figure shows the logic for partial reindexing.

<p><img src="{{ site.baseurl }}common/images/index_indexers_flow.png" width="400px" alt="The image displays the partial reindex workflow"></p>


<!-- <h3 id="m2devgde-indexing-status">Indexer status</h3>

Depending on whether an index data is up to date, an indexer status value is one of the following:

*	valid: data is synchronized, no reindex required
*	invalid: the original data was changed, the index should be updated

The Magento indexing mechanism uses the status value in reindex triggering process. You can check the status of an indexer in the Admin panel under **System > New Index Management** or manually using the <a href="#m2devgde-indexing-commandline">command line</a>. -->

<h3 id="m2devgde-indexing-modes">Indexing modes</h3>
Reindexing can be performed in two modes:

*	Update on Save: index tables are updated immediately after the dictionary data is changed.
*	Update by Schedule: index tables are updated by cron job according to the configured schedule.

To set these options:

1.	Log in to the Magento Admin.
2.	Click **System** > **Index Management**.
3.	Select the check box next to each type of indexer to change.
4.	From the **Actions** list, click the indexing mode.
5.	Click **Submit**.

The following figure shows an example of setting indexers to Update by Schedule.

<p><img src="{{ site.baseurl }}common/images/index_index-modes.png" width="600px" alt="Changing indexer modes"></p>

You can also reindex from the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">command line</a>.

<h3 id="m2devgde-indexing-how">How to reindex</h3>
You can reindex in any of the following ways:

*	Using a <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-bkg">cron job</a> (preferred because indexing runs every minute)
*	Using the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex">`magento indexer:reindex [indexer]`</a> command, which reindexes selected indexers, or all indexers, one time only

<h2 id="m2devgde-indexing-outofbox">Magento indexers</h2>
Out of the box the Magento system has the following indexers implemented:

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
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Category/Flat.php" target="_blank">Magento\Catalog\Model\Indexer\Category\Flat</a></td>
		<td>Creates category/products association</td>
	</tr>
	<tr>
		<td>Product categories</td>
		<td>catalog_product_category</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Product/Flat.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Flat</a></td>
		<td>Creates category/products association</td>
	</tr>
	<tr>
		<td>Product price</td>
		<td>catalog_product_price</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Product/Price.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Price</a></td>
		<td>Pre-calculates product prices</td>
	</tr>
	<tr>
		<td>Product entity attribute value</td>
		<td>catalog_product_attribute</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Category/Product.php" target="_blank">Magento\Catalog\Model\Indexer\Category\Product</a></td>
		<td>Reorganizes the EAV product structure to flat structure</td>
	</tr>
	<tr>
		<td>Stock</td>
		<td>cataloginventory_stock</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/CatalogInventory/Model/Indexer/Stock.php" target="_blank">Magento\CatalogInventory\Model\Indexer\Stock</a></td>
		<td></td>
	</tr>
	<tr>
		<td>Catalog rule product</td>
		<td>catalogrule_rule</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/CatalogRule/Model/Indexer/Rule/RuleProductIndexer.php" target="_blank">Magento\CatalogRule\Model\Indexer\Rule\RuleProductIndexer</a></td>
		<td></td>
	</tr>
	<tr>
		<td>Catalog product rule</td>
		<td>catalogrule_product</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/CatalogRule/Model/Indexer/Product/ProductRuleIndexer.php" target="_blank">Magento\CatalogRule\Model\Indexer\Product\ProductRuleIndexer</a></td>
		<td></td>
	</tr>
	<tr>
		<td>Catalog search</td>
		<td>catalogsearch_fulltext</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/CatalogSearch/Model/Indexer/Fulltext.php" target="_blank">Magento\CatalogSearch\Model\Indexer\Fulltext</a></td>
		<td></td>
	</tr>

</tbody></table>

<h2 id="m2devgde-indexing-custom">Adding a custom indexer</h2>
We strongly recommend you not modify core Magento code; instead, add your own modules.

To implement your own indexer, add the following code in your module:

*	indexer logic
*	indexer configuration
*	MView configuration

There are more details about each of these in the following paragraphs.

<h3 id="m2devgde-indexing-customlogic">Custom indexer logic</h3>

Your custom indexer class should implement <a href="{{ site.mage2000url }}app/code/Magento/Indexer/" target="_blank">\Magento\Indexer\ </a>, and the indexer should be able to perform three types of operations:

*	row reindex: processing a single entry from a dictionary; responsibility of `executeRow($id)`
*	list reindex: processing a set of dictionary entries; responsibility of `executeList($ids)`, where `$ids` is an array of entity IDs
*	full reindex: processing all entities from a specific dictionary; responsibility of `executeFull()`

<h3 id="m2devgde-indexing-customconfiguration">Indexer configuration</h3>

In the the `etc` directory of your module, add `indexer.xml` with the following:

*	indexer ID
*	indexer class name
*	indexer title
*	indexer description
*	indexer view ID

<a href="{{ site.mage2000url }}app/code/Magento/Catalog/etc/indexer.xml" target="_blank">Example</a>

All indexers related to a module should be declared in one file.

<h3 id="m2devgde-indexing-mview">MView configuration</h3>

Add the the `mview.xml` configuration file in the `etc` module directory, where you declare the following:

*	indexer view ID
*	indexer class
*	the database tables the indexer tracks
*	what column data is sent to the indexer

<a href="{{ site.mage2000url }}app/code/Magento/Catalog/etc/mview.xml" target="_blank">Example</a>

All Mview declarations related to a module should be declared in one file.

<h3 id="m2devgde-indexing-exampleimplementation">Example of a custom indexer implementation</h3>

Suppose you want to push best-selling products to the top of a category listing. This requires processing statistics about sales to change the product position dynamically.

Assuming your module is named `<VendorName>_Merchandizing`, you must write the appropriate code in the indexer class:

<script src="https://gist.github.com/xcomSteveJohnson/ef9be4963011bb13efe5.js"></script>

Next, declare the indexer in `Merchandizing/etc/indexer.xml`:

<script src="https://gist.github.com/xcomSteveJohnson/5780857cdd5343cafacf.js"></script>

Finally, declare the indexer view (`merchandizing_popular_order`) that tracks sales (`Merchandizing/etc/mview.xml`):

<script src="https://gist.github.com/xcomSteveJohnson/4313c5246b38ff8193df.js"></script>

These settings start `<VendorName>\Merchandizing\Model\Indexer\Popular::execute` method every time an order is changed.

Now when an order is placed, the Popular Products indexer calculates the sorting order of the products by popularity and stores this data in the index table, so that it can be used in product displaying logic.
