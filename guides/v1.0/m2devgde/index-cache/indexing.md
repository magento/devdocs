---
layout: howtom2devgde_chapters
title: Indexing
---
 
<h1 id="m2devgde-indexing">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/index-cache/indexing.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-indexing-intro">Introduction to indexing</h2> 

_Indexing_ is how the Magento system transforms data such as products, categories, and so on, to improve the performance of your web store. As data changes, the transformed data must be updated or reindexed. 

The Magento system stores lots of merchant data (including catalog data, prices, users, stores, and so on) in database tables. Some of this data is a complex structure, for example a catalog product, which is linked to attributes, attribute sets, different scopes, related to catalog categories, and so on. So that when this data is requested, for example by a shopper navigating to a product page, the system needs to run a complex query with multiple joins. This can take a long time, possibly resulting in cart abandonment. To avoid it, you can transform the initial data to flat tables, which would boost the querying speed and therefore decreases the amount of time needed to display information to customers. This is what indexing is all about: transforming the data by creating index tables and keeping them up to date.  

The Magento application contains several indexers out of the box, but you might want to add your own if your customization needs performing data searches, which are not optimized by the Magento default indexers.

This articles contains a high level description of how indexing is implemented from a developer's point of view, and practical advice of how to add your own indexer. 

<p class="q">Reviewer: Not sure what links should be there, since I cannot find at the the website the landing pages (for modular architecture and configurations) existing in wiki.</p>

We use the following terms when talking about indexing:

:	Dictionary

	Original data entered to the system. Dictionaries are organized in <a href="http://en.wikipedia.org/wiki/Database_normalization" target="_blank">normal form</a> to facilitate maintenance (updating the data).
	
:	Index 

	Representation of the original data for optimized reading and searching. Indexes can contain results of aggregations and various calculations. Index data can be always re-created from a dictionary using a certain algorithm.
	
:	Indexer 

	Object that knows how to create an _index_.

<h2 id="m2devgde-indexing-implementation">How Magento implements indexing</h2> 

The following components are involved in the indexing process:

<table>
	<tbody>
		<tr>
			<th>Component</th>
			<th>Location</th>
			<th>Description</th>
		</tr>
	<tr>
		<td><code>Magento_Indexer</code> module</td>
		<td><a href="{{ site.mage2000url }}app/code/Magento/Indexer" target="_blank">app/code/Magento/Indexer</a></td> 
		<td>Implements:<ul>	
<li>indexer declaration</li> 
<li>indexer running</li>
<li>indexer running mode configuration</li>
<li>indexer status</li></ul></td>
	</tr>
	<tr>
		<td><code>Magento\Framework\Mview</code> library</td>
		<td><a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Mview" target="_blank">lib/internal/Magento/Framework/Mview</a></td> 
		<td><ul>	
<li>Allows tracking database changes for a certain entity (product, category and so on) and running change handler.</li> 
<li>Emulates the <a href="http://en.wikipedia.org/wiki/Materialized_view" target="_blank">materialized view</a> technology for MySQL using triggers and separate materialization process (provides executing PHP code instead of SQL queries, which allows materializing multiple queries).</li></ul></td>
	</tr>
</tbody></table>

  <div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
    <p><code>Magento_Indexer</code> replaces the old <code>Magento_Index</code> module, and all new development should use <code>Magento_Indexer</code>. </p></span>
  </div>
  
  
<h3 id="m2devgde-indexing-types">Indexing Types</h3>  

Each index can perform three types of reindex operations:

*	updating the index data of a single entry (partial reindex)
*	updating the index data of list of entries (partial reindex)
*	updating all the index data of an entity (full reindex)

The type of reindex performed in each particular case depends on the type of changes made in the dictionary or in the system. This dependency is specific for <a href="#m2devgde-indexing-outofbox">each indexer</a>.

A full reindex can be triggered manually using the <a href="#m2devgde-indexing-commandline">command line</a>.

<h3 id="m2devgde-indexing-status">Indexer Status</h3>

Depending on whether an index data is up to date, an indexer status value is one of the following:

*	valid: data is synchronized, no reindex required
*	invalid: the original data was changed, the index should be updated

The Magento indexing mechanism uses the status value in reindex triggering process. You can check the status of an indexer in the Admin panel under **System > New Index Management** or manually using the <a href="#m2devgde-indexing-commandline">command line</a>.

<h3 id="m2devgde-indexing-modes">Indexing Modes</h3>

Reindexing can be performed in two modes: 

*	Update on save: index tables are updated right after the dictionary data is changed.
*	Update on schedule: index tables are updated by cron jobs according to the configured schedule.

You can set the running mode for indexers in the Admin panel under **System > New Index Management** or using the <a href="#m2devgde-indexing-commandline">command line</a>.

For indexers to run in the "Update on schedule" mode, you need to configure cron on your server. Additionally you can configure cron schedule for indexers in the Admin panel under **Stores > Configuration > ADVANCED > System**.

  <div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
    <p>Full reindex cannot be run on schedule.</p></span>
  </div>

<h3 id="m2devgde-indexing-flow">Indexing Flow</h3>

Reindexing flow is different for different type of reindex:

*	full reindex: is always run in the "Update on save" mode, and is performed by `Magento_Indexer`.
*	partial reindex: can be run in both modes, is performed by `Magento_Indexer` using <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Mview" target="_blank">`Magento\Framework\Mview`</a>.  Schematically, partial reindexing flow looks as follows:

<p><img src="{{ site.baseurl }}common/images/understanding-indexers-flow.png" alt="The image displays the partial reindex workflow"></p>


<h2 id="m2devgde-indexing-outofbox">Magento indexers</h2>

Out of the box the Magento system has the following indexers implemented:

<table>
	<tbody>
		<tr>
			<th>Indexer Title</th>
			<th>Indexer ID</th>
			<th>Indexer Class</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Category flat data</td>
		<td>catalog_category_flat</td> 
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Category/Flat.php" target="_blank">Magento\Catalog\Model\Indexer\Category\Flat</a></td>
		<td>Reorganizes EAV category structure to flat structure</td>
	</tr>
	<tr>
		<td>Product flat data</td>
		<td>catalog_product_flat</td> 
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Product/Flat.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Flat</a></td>
		<td>Reorganizes EAV product structure to flat structure</td>
	</tr>
	<tr>
		<td>Product price</td>
		<td>catalog_product_price</td> 
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Product/Price.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Price</a></td>
		<td>Pre-calculates product prices</td>
	</tr>
	<tr>
		<td>Category products</td>
		<td>catalog_category_product</td> 
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Category/Product.php" target="_blank">Magento\Catalog\Model\Indexer\Category\Product</a></td>
		<td>Creates category/products association. Triggered when a category changes</td>
	</tr>
	<tr>
		<td>Product categories</td>
		<td>catalog_product_category</td> 
		<td><a href="{{ site.mage2000url }}app/code/Magento/Catalog/Model/Indexer/Product/Category.php" target="_blank">Magento\Catalog\Model\Indexer\Product\Category</a></td>
		<td>Creates category/products association. Triggered when a product changes</td>
	</tr>
</tbody></table>

<h2 id="m2devgde-indexing-commandline">Running indexers from the command line</h2>

To work with indexers from the command line, use the following commands:

<pre>
Usage:&nbsp;&nbsp;php&nbsp;-f&nbsp;{filename}&nbsp;--&nbsp;[options]
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;--status&nbsp;&lt;indexer&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show&nbsp;Indexer(s)&nbsp;Status
&nbsp;&nbsp;&nbsp;--mode&nbsp;&lt;indexer&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show&nbsp;Indexer(s)&nbsp;Index&nbsp;Mode
&nbsp;&nbsp;&nbsp;--mode-realtime&nbsp;&lt;indexer&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set&nbsp;index&nbsp;mode&nbsp;type&nbsp;&nbsp;&quot;Update&nbsp;on&nbsp;Save&quot;
&nbsp;&nbsp;&nbsp;--mode-schedule&nbsp;&lt;indexer&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set&nbsp;index&nbsp;mode&nbsp;type&nbsp;&nbsp;&quot;Update&nbsp;by&nbsp;Schedule&quot;
&nbsp;&nbsp;&nbsp;--reindex&nbsp;&lt;indexer&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reindex&nbsp;Data
&nbsp;&nbsp;&nbsp;info&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Show&nbsp;allowed&nbsp;indexers
&nbsp;&nbsp;&nbsp;reindexall&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reindex&nbsp;Data&nbsp;by&nbsp;all&nbsp;indexers
&nbsp;&nbsp;&nbsp;help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This&nbsp;help
&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&lt;indexer&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comma&nbsp;separated&nbsp;indexer&nbsp;codes&nbsp;or&nbsp;value&nbsp;&nbsp;&quot;all&quot;&nbsp;for&nbsp;all&nbsp;indexers</pre>

For `<indexer>` use an indexer ID, as specified in the indexer configuration file.


<h2 id="m2devgde-indexing-custom">Adding a custom indexer</h2>

If you want to customize the Magento application, we highly recommend you not to modify the core Magento code, but to add your own module(s) instead. 

<p class="q">Reviewer: Not sure what link should be there, since I cannot find it on the website, only in wiki.</p> 

To implement your own indexer, add the following code in your module:

*	indexer logic
*	indexer configuration
*	MView configuration

There are more details about each of these in the following paragraphs.

<h3 id="m2devgde-indexing-customlogic">Custom indexer logic</h3>

Your custom indexer class should implement <a href="{{ site.mage2000url }}app/code/Magento/Indexer/Model/ActionInterface.php" target="_blank">\Magento\Indexer\Model\ActionInterface</a>, and the indexer should be able to perform three types of operations:

*	row reindex: processing a single entry from a dictionary; responsibility of `executeRow($id)`
*	list reindex: processing a set of dictionary entries; responsibility of `executeList($ids)`, where `$ids` is an array of entity IDs 
*	full reindex: processing all entities from a specific dictionary; responsibility of `executeFull()`

<h3 id="m2devgde-indexing-customconfiguration">Indexer Configuration</h3>

In the the `etc` directory of your module add `indexer.xml` file where you declare the following:

*	indexer ID
*	indexer class name 
*	indexer title 
*	indexer description
*	indexer view ID

Example: The declaration of the Product Flat Date out of the box indexer.


<pre><b><code>app/code/Magento/Catalog/etc/indexer.xml</code></b>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;indexer&nbsp;id=&quot;catalog_product_flat&quot;&nbsp;view_id=&quot;catalog_product_flat&quot;&nbsp;class=&quot;Magento\Catalog\Model\Indexer\Product\Flat&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&nbsp;translate=&quot;true&quot;&gt;Product&nbsp;Flat&nbsp;Data&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;description&nbsp;translate=&quot;true&quot;&gt;Reorganize&nbsp;EAV&nbsp;product&nbsp;structure&nbsp;to&nbsp;flat&nbsp;structure&lt;/description&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/indexer&gt;
&lt;/config&gt;
</pre>

All indexers related to a module can be declared in one file.

<h3 id="m2devgde-indexing-mview">MView Configuration</h3>

Add the the `mview.xml` configuration file in the `etc` module directory, where you declare the following:

*	indexer view ID
*	indexer class
*	the DB tables which the indexer will track
*	what column data is sent to the indexer

Example: The MView declaration of the Product Flat Date out of the box indexer.

<pre><b><code>app/code/Magento/Catalog/etc/mview.xml</code></b>
&lt;config&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;view&nbsp;id=&quot;catalog_product_flat&quot;&nbsp;class=&quot;Magento\Catalog\Model\Indexer\Product\Flat&quot;&nbsp;group=&quot;indexer&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;subscriptions&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_datetime&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_decimal&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_gallery&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_group_price&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_int&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_media_gallery&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_text&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_tier_price&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;catalog_product_entity_varchar&quot;&nbsp;entity_column=&quot;entity_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/subscriptions&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/view&gt;
&lt;/config&gt;
</pre>

 All Mview declarations related to a module can be declared in one file.
 
 <h3 id="m2devgde-indexing-exampleimplementation">Example of a Custom Indexer Implementation</h3>
 
 Let's imagine we decided to add functionality that pushes bestsellers to the top of a category listing. To implement this we would need to process "heavy weight" statistics about sales and change the product position accordingly. Here is where an indexer could help.
 
 Let's say that our functionality will reside in a new `<Vendor>_Merchandising` module (for details about module naming and location see Conventional Location of Custom Modules).
 
 <p class="q">Reviewer: Not sure what link should be there, since I cannot find it on the website, only in wiki.</p>

 First we need to write the appropriate code in the indexer class:
 
<pre>[Vendor name]\Merchandising\Model\Indexer;
class Popular implements \Magento\Indexer\Model\ActionInterface, \Magento\Framework\Mview\ActionInterface
{
    public function executeFull(); //Should take into account all placed orders in the system
    public function executeList($ids); //Works with a set of placed orders (mass actions and so on)
    public function executeRow($id); //Works in runtime for a single order using plugins
    public function execute($ids); //Used by mview, allows you to process multiple placed orders in the "Update on schedule" mode
}
</pre>
 
Then we need to declare the indexer:

<pre><b><code>Merchandising/etc/indexer.xml</code></b>
&lt;config&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Mview/etc/mview.xsd&quot;&gt;
&lt;view&nbsp;id=&quot;&nbsp;merchandising_popular_order&quot;&nbsp;class=&quot;Vendor\Merchandising\Model\Indexer\Popular&quot;&nbsp;group=&quot;indexer&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;subscriptions&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;sales_order_flat&quot;&nbsp;entity_column=&quot;order_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/subscriptions&gt;
&lt;/view&gt;
</pre>

And finally, we must declare our indexer view (`merchandising_popular_order`) that tracks sales when the indexer is set to run  in the "Update on schedule" mode.

<pre><b><code>Merchandising/etc/mview.xml</code></b>
&lt;config&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Mview/etc/mview.xsd&quot;&gt;
&lt;view&nbsp;id=&quot;&nbsp;merchandising_popular_order&quot;&nbsp;class=&quot;Vendor\Merchandising\Model\Indexer\Popular&quot;&nbsp;group=&quot;indexer&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;subscriptions&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table&nbsp;name=&quot;sales_order_flat&quot;&nbsp;entity_column=&quot;order_id&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/subscriptions&gt;
&lt;/view&gt;
</pre>

These settings launch `Vendor\Merchandising\Model\Indexer\Popular::execute` method every time an order is changed.

Now when an order is placed, the Popular Products indexer calculates the sorting order of the products by popularity and stores this data in the index table, so that it can be used in product displaying logic.  

The Popular Product indexer must appear in the list of indexers under **System > New Index Management (Index Management)**.
 
