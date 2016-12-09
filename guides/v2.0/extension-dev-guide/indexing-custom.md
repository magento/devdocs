---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development 
title: Adding a custom indexer
menu_title: Adding a custom indexer
menu_order: 14
version: 2.0
level3_menu_node: level3child
level3_subgroup: index
github_link: extension-dev-guide/indexing-custom.md
---

## Adding a custom indexer {#m2devgde-indexing-custom}
This topic discusses how to create a custom indexer. We've recently made a performance improvment that enables you to declare one or more *shared* indexers; if one of the shared indexes is already up-to-date, it doesn't need to be reindexed.

To implement your own indexer, add the following code in your module:

*	[Indexer logic](#m2devgde-indexing-customlogic)
*	[Indexer configuration](#m2devgde-indexing-customconfiguration)
*	[MView configuration](#m2devgde-indexing-mview)

<h3 id="m2devgde-indexing-customlogic">Custom indexer logic</h3>

Your custom indexer class should implement <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Indexer/ActionInterface.php" target="_blank">\Magento\Framework\Indexer\ActionInterface</a>, and the indexer should be able to perform three types of operations:

*	Row reindex: processing a single entry from a dictionary; responsibility of `executeRow($id)`
*	List reindex: processing a set of dictionary entries; responsibility of `executeList($ids)`, where `$ids` is an array of entity IDs
*	Rull reindex: processing all entities from a specific dictionary; responsibility of `executeFull()`

<h3 id="m2devgde-indexing-customconfiguration">Indexer configuration</h3>
In the `etc` directory of your module, add `indexer.xml` with the following:

*	indexer ID
*	indexer class name
*	indexer title
*	indexer description
*	indexer view ID
*	shared indexes, if any

Use the optional `shared_index=` parameter to improve performance if your indexer is related to another indexer. In this <a href="{{ site.mage2000url }}app/code/Magento/CatalogRule/etc/indexer.xml" target="_blank">example</a>, if catalog rule product needs to be reindexed, but othe catalog product rule index is up-to-date, then only catalog rule product is reindexed.

All indexers related to a module should be declared in one file.

<h3 id="m2devgde-indexing-mview">MView configuration</h3>
Add the `mview.xml` configuration file in the `etc` module directory, where you declare the following:

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
