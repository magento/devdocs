---
group: php-developer-guide
subgroup: 99_Module Development
title: Adding a custom indexer
menu_title: Adding a custom indexer
menu_order: 15
level3_menu_node: level3child
level3_subgroup: index
---

## Adding a custom indexer {#m2devgde-indexing-custom}

This topic discusses how to create a custom indexer. We've recently made a performance improvement that enables you to declare one or more *shared* indexers; if one of the shared indexes is already up-to-date, it doesn't need to be reindexed.

To implement your own indexer, add the following code in your module:

*	[Indexer logic](#custom-indexer-logic)
*	[Indexer configuration](#indexer-configuration)
*	[MView configuration](#mview-configuration)

### Custom indexer logic

Your custom indexer class should implement [\\Magento\\Framework\\Indexer\\ActionInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Indexer/ActionInterface.php){: target="_blank"}, and the indexer should be able to perform three types of operations:

*	Row reindex: processing a single entry from a dictionary; responsibility of `executeRow($id)`
*	List reindex: processing a set of dictionary entries; responsibility of `executeList($ids)`, where `$ids` is an array of {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}entity{% endglossarytooltip %} IDs
*	Full reindex: processing all entities from a specific dictionary; responsibility of `executeFull()`

### Indexer configuration

In the `etc` directory of your module, add `indexer.xml` with the following:

*	indexer ID
*	indexer class name
*	indexer title
*	indexer description
*	indexer view ID
*	shared indexes, if any

Use the optional `shared_index=` parameter to improve performance if your indexer is related to another indexer. In this [example]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogRule/etc/indexer.xml){: target="_blank"}, if {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} rule product needs to be reindexed, but other catalog product rule index is up-to-date, then only catalog rule product is reindexed.

All indexers related to a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} should be declared in one file.

### MView configuration

Add the `mview.xml` configuration file in the `etc` module directory, where you declare the following:

*	indexer view ID
*	indexer class
*	the database tables the indexer tracks
*	what column data is sent to the indexer

[Example]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/etc/mview.xml){: target="_blank"}

All Mview declarations related to a module should be declared in one file.

### Example of a custom indexer implementation

To push best-selling products to the top of a category listing, process statistics about sales to change the product position dynamically.

Assuming your module is named `<VendorName>_Merchandizing`, you must write the appropriate code in the indexer class:

{% highlight php startinline %}
<VendorName>\Merchandizing\Model\Indexer;

class Popular implements \Magento\Framework\Indexer\ActionInterface, \Magento\Framework\Mview\ActionInterface
{
    public function executeFull(); //Should take into account all placed orders in the system
    public function executeList($ids); //Works with a set of placed orders (mass actions and so on)
    public function executeRow($id); //Works in runtime for a single order using plugins
    public function execute($ids); //Used by mview, allows you to process multiple placed orders in the "Update on schedule" mode
}
{% endhighlight %}

Next, declare the indexer in `Merchandizing/etc/indexer.xml`:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../Indexer/etc/indexer.xsd">
  <indexer id="merchandizing_popular" view_id="merchandizing_popular_order" class="Vendor\Merchandizing\Model\Indexer\Popular">
    <title translate="true">Popular Products</title>
    <description translate="true">Sort products in a category by popularity</description>
  </indexer>
</config>
{% endhighlight %}

Finally, declare the indexer view (`merchandizing_popular_order`) that tracks sales (`Merchandizing/etc/mview.xml`):

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../lib/internal/Magento/Framework/Mview/etc/mview.xsd">
  <view id=" merchandizing_popular_order" class="Vendor\Merchandizing\Model\Indexer\Popular" group="indexer">
    <subscriptions>
      <table name="sales_order_flat" entity_column="order_id" />
    </subscriptions>
  </view>
</config>
{% endhighlight %}

These settings start `<VendorName>\Merchandizing\Model\Indexer\Popular::execute` method every time an order is changed.

Now when an order is placed, the Popular Products indexer calculates the sorting order of the products by popularity and stores this data in the index table, so that it can be used in product displaying logic.
