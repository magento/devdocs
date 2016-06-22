---
layout: default
group:  UI Library
subgroup: B_UI Library Listing/Grid Component
title: Grid search indexing
menu_title: Grid search indexing
menu_node: 
menu_order: 1
version: 2.0
github_link: ui-components/ui-listing-grid-search.md
redirect_from: /guides/v2.0/ui-library/ui-listing-grid-search.html
---

<h3 id="search">Grid search indexing</h3>

You should index data for the performance reasons. Indexing is a process of "materializing" complex data in needed scopes to avoid problems of reading it.

Index data can be always re-created from the original data using certain algorithm.

####Declarative markup

You can extend the current indexer declaration with an optional <fieldset> element.

{% highlight XML%}
<?xml version="1.0" encoding="UTF-8"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../Indexer/etc/indexer.xsd">
    <indexer id="some_grid" view_id="some_grid"
             class="Magento\Framework\Indexer\Action\Base"
             primary="first">
        <title translate="true">Catalog Search</title>
        <description translate="true">Rebuild Catalog product fulltext search index</description>
        <fieldset name="first" source="MagentoModule\ServiceClassOrRepositoryClass" provider="?Magento\Indexer\Model\Fieldset\ProductFieldset">
            <!-- @provider -> Dynamic fields resolver -->
            <!-- @source -> source from old declaration -->
            <field name="title_alias"  origin="?title" xsi:type="searchable" dataType="?type_alias">
                <filter class="Magento\Framework\Search\Index\Filter\LowercaseFilter"/>
            </field>
            <field name="identifier" xsi:type="filterable" handler="Magento\Framework\Search\Index\Handler"/>
        </fieldset>
        <fieldset name="second" source="MagentoModule\ServiceClassOrRepositoryClass">
            <reference fieldset="first"  from="id_field" to="second_entity_id" />
            <reference fieldset="first" from="id_field2" to="second_entity_id2" />
            <!-- reference -> from="field from primary fieldset" to="field from current fieldset" -->
            <!-- first we need parse references (from field) after that execute fieldset handlers -->
            <field name="title" xsi:type="filterable"/>
        </fieldset>
 
        <saveHandler class="Magento\Framework\Indexer\SaveHandler\Grid" /><!-- optional --><!-- indexer put api -->
        <structure class="Magento\Framework\Indexer\GridStructure" /><!-- optional --><!-- creating flat table for index (or in other index database) -->
    </indexer>
</config>
{% endhighlight %}

Where:

* fieldset - container for field nodes, which specifies handler for processing nested field nodes.
* field - concrete field processor.
* filter - any optional pre-processing of data before getting to index.
