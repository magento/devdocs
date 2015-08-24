---
layout: default
group:  UI Library
subgroup: UI Library
title: UI Library Components
menu_title: UI Library Components
menu_node: parent
menu_order: 1
github_link: uilibrary/ui-library-components.md
---


<h2>Contents</h2>

* <a href="#general">Overview of UI Library</a>
* <a href="#listing">Listing/Grid component</a>
  * <a href="#search">Grid search indexing</a>
* <a href="#secondary">Listing/Grid secondary components</a>
  * <a href="#filter">Filter component</a>
  * <a href="#pagination">Pagination component</a>
  * <a href="#massaction">MassAction component</a>
  * <a href="#treemass">TreeMassAction component</a>
  * <a href="#column">Column component</a>
  * <a href="#uiselect">UI-select component</a>
  * <a href="#inlineedit">Inline Edit component</a>
  * <a href="#bookmark">Bookmark component</a>
* <a href="#form">Form component</a>
  * <a href="#field">Field component</a> <!-- (Field Type)-->
  * <a href="#fieldset">Fieldset component</a>
* <a href="#export">ExportButton component</a>
* <a href="#container">Container component</a>
* <a href="#example">definition.xml</a>

<h2 id="general">General</h2>

Magento UI components Library is designed for simple and flexible UI rendering. It allows to configure the page manipulating the UI library components.

Magento UI components  Library is implemented as a usual module and can be found under Magento\UI namespace.

Components are responsible for rendering result page fragments and providing/supporting further interactions of JavaScript components and server.


###General structure
In Magento 2 there are basic and secondary UI components. Basic components are UI Library Listing component and UI Library Form component. Secondary components are extensions of basic components  

<h3>Using UI library component in layout file</h3>

Using UI Library component is as simple as adding the following code to the appropriate layout section:

`<ui_component name="some_ui_component_instance_name"/>`

All UI Library components have base declaration in <a href="#example">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>.

Any module can introduce its own set of custom components or modify initial configuration for existing components in a common to Magento way.

UI components configuration reader searches through all active modules and read files:

<a href="#example">`app/code/<vendor>/<module>/view/<area>/ui_component/etc/definition.xml`</a>


And concrete instances of the components each in separate XML configuration file:


`app/code/<vendor>/<module>/view/<area>/ui_component/<component_instance_name>.xml`

A single XSD is shared between all components (both definitions and instance configurations):

`app/code/Magento/Ui/etc/ui_definition.xsd`

###Configuration

You can configure component and all filter types in the following ways:

* Globally: using any module's <a href="#example">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file will be applied to all component's instances
* Locally: using concrete component instance configuration, such as `app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`


<h2 id="listing">UI Library Listing/Grid Component</h2>

Listing is a basic component responsible for rendering grids, lists and tiles, providing filtering, pagination, sorting and other features.

The following components extend the functionality of UI Library Listing component:

Filters
Pagination
Mass Actions
Column
Bookmark

####Integration

Example configuration of Listing Component instance:

app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml


<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;argument name="context" xsi:type="configurableObject"&gt;
        &lt;argument name="class" xsi:type="string"&gt;Magento\Framework\View\Element\UiComponent\Context&lt;/argument&gt;
        &lt;argument name="namespace" xsi:type="string"&gt;cms_page_listing&lt;/argument&gt;
    &lt;/argument&gt;
    &lt;argument name="data" xsi:type="array"&gt;
        &lt;item name="js_config" xsi:type="array"&gt;
            &lt;item name="config" xsi:type="array"&gt;
                &lt;item name="provider" xsi:type="string"&gt;cms_page_listing.cms_page_listing_data_source&lt;/item&gt;
            &lt;/item&gt;
            &lt;item name="deps" xsi:type="string"&gt;cms_page_listing.cms_page_listing_data_source&lt;/item&gt;
        &lt;/item&gt;
        &lt;item name="spinner" xsi:type="string"&gt;cms_page_columns&lt;/item&gt;
        &lt;item name="buttons" xsi:type="array"&gt;
            &lt;item name="add" xsi:type="array"&gt;
                &lt;item name="name" xsi:type="string"&gt;add&lt;/item&gt;
                &lt;item name="label" xsi:type="string" translate="true"&gt;Add New Page&lt;/item&gt;
                &lt;item name="class" xsi:type="string"&gt;primary&lt;/item&gt;
                &lt;item name="url" xsi:type="string"&gt;*/*/new&lt;/item&gt;
            &lt;/item&gt;
        &lt;/item&gt;
    &lt;/argument&gt;
&lt;/listing&gt;
</pre>



####Data Source

The listing component requires the data source to be properly configured and associated with it:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;dataSource name="cms_page_listing_data_source"&gt;
        &lt;argument name="dataProvider" xsi:type="configurableObject"&gt;
            &lt;argument name="class" xsi:type="string"&gt;Magento\Cms\Model\Page\DataProvider&lt;/argument&gt;
            &lt;argument name="primaryFieldName" xsi:type="string"&gt;block_id&lt;/argument&gt;
            &lt;argument name="requestFieldName" xsi:type="string"&gt;id&lt;/argument&gt;
            &lt;argument name="meta" xsi:type="array"&gt;
                &lt;item name="cms_block" xsi:type="array"&gt;
                    &lt;item name="config" xsi:type="array"&gt;
                        &lt;item name="label" xsi:type="string" translate="true"&gt;CMS Block&lt;/item&gt;
                    &lt;/item&gt;
                &lt;/item&gt;
            &lt;/argument&gt;
        &lt;/argument&gt;
        &lt;argument name="data" xsi:type="array"&gt;
            &lt;item name="js_config" xsi:type="array"&gt;
                &lt;item name="component" xsi:type="string"&gt;Magento_Ui/js/grid/provider&lt;/item&gt;
            &lt;/item&gt;
            &lt;item name="config" xsi:type="array"&gt;
                &lt;item name="update_url" xsi:type="string"&gt;mui/index/render&lt;/item&gt;
            &lt;/item&gt;
        &lt;/argument&gt;
    &lt;/dataSource&gt;
&lt;/listing&gt;
</pre>

Data Source is another UI Component that provides data in specific format which is shared among all UI Components.

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

<h2 id="secondary">UI Library Listing/Grid Secondary Components</h2>

<h3 id="filter">UI Library Filter Component</h3>

The filter component must be declared as a child to the listing component.
All column filters are declared as children to the filter component.

The filter component is responsible for rendering filters UI and applying filtering criteria to collection.

Currently the following filter types are supported:

* input filter
* date filter
* select filter
* range filter

Example:
`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;container name="page_listing_top"&gt;
        &lt;filters name="listing_filters"&gt;
            &lt;argument name="data" xsi:type="array"&gt;
                &lt;item name="config" xsi:type="array"&gt;
                    &lt;item name="dataScope" xsi:type="string"&gt;params.filters&lt;/item&gt;
                &lt;/item&gt;
            &lt;/argument&gt;
            &lt;filterRange name="page_id"&gt;
                &lt;argument name="data" xsi:type="array"&gt;
                    &lt;item name="config" xsi:type="array"&gt;
                        &lt;item name="dataScope" xsi:type="string"&gt;page_id&lt;/item&gt;
                        &lt;item name="label" xsi:type="string" translate="true"&gt;ID&lt;/item&gt;
                    &lt;/item&gt;
                &lt;/argument&gt;
                &lt;filterInput name="from"&gt;...&lt;/filterInput&gt;
                &lt;filterInput name="to"&gt;...&lt;/filterInput&gt;
            &lt;/filterRange&gt;
            &lt;filterInput name="title"&gt;...&lt;/filterInput&gt;
            &lt;filterInput name="identifier"&gt;...&lt;/filterInput&gt;
            &lt;filterSelect name="page_layout"&gt;...&lt;/filterSelect&gt;
            &lt;filterSelect name="store_id"&gt;...&lt;/filterSelect&gt;
            &lt;filterSelect name="is_active"&gt;...&lt;/filterSelect&gt;
            &lt;filterRange name="creation_time" class="Magento\Ui\Component\Filters\Type\DateRange"&gt;...&lt;/filterRange&gt;
            &lt;filterRange name="update_time" class="Magento\Ui\Component\Filters\Type\DateRange"&gt;...&lt;/filterRange&gt;
        &lt;/filters&gt;
    &lt;/container&gt;
&lt;/listing&gt;
</pre>

<h3 id="pagination">UI Library Pagination Component</h3>

The UI library pagination component is a plugin for the listing component. Responsible for rendering pagination UI and applying pagination criteria to collection.

You can configure pagination in several ways:

* Globally: using any module's <a href="#example">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file are applied to all component's instances.
* Locally: using concrete component instance configuration, such as `app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

To enable pagination for the listing component, the pagination component is declared as a child of the listing component in component instance configuration.

Example:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

<pre>
&lt;listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd"&gt;
    &lt;container name="page_listing_top"&gt;
        &lt;paging name="listing_paging"&gt;
            &lt;argument name="data" xsi:type="array"&gt;
                &lt;item name="config" xsi:type="array"&gt;
                    &lt;item name="options" xsi:type="array"&gt;
                        &lt;item name="20" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;20&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;20&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="30" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;30&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;30&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="50" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;50&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;50&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="100" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;100&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;100&lt;/item&gt;
                        &lt;/item&gt;
                        &lt;item name="200" xsi:type="array"&gt;
                            &lt;item name="value" xsi:type="number"&gt;200&lt;/item&gt;
                            &lt;item name="label" xsi:type="string" translate="true"&gt;200&lt;/item&gt;
                        &lt;/item&gt;
                    &lt;/item&gt;
                &lt;/item&gt;
            &lt;/argument&gt;
        &lt;/paging&gt;
    &lt;/container&gt;
&lt;/listing&gt;
</pre>


<h3 id="massaction">UI Library MassAction Component</h3>

###MassAction JS component structure

MassActions component adds ability to be selectable (by attaching it's template to each item in Listing) to items in Listing and creates actions to perform with selected items (for example: 'Delete', 'Update attributes' and so on).

"Select all" functionality is improved in Magento 2. Instead of creating a list of all selected items they are now flagged and list is created only for excluded elements.

####Component Elements (classes, files)

The following are the component elements:

* Constructor `app\code\Magento\Ui\view\base\web\js\grid\massactions.js`
* Template: `app\code\Magento\Ui\view\base\web\templates\grid\actions.html`

####Dependencies on Other Components

Dependency on the following components:

* Collapsible: `app\code\Magento\Ui\view\base\web\js\lib\collapsible.js`
* Modal window with confirmation: `app\code\Magento\Ui\view\base\web\js\modal\confirm.js`
* Modal window with alert: `app\code\Magento\Ui\view\base\web\js\modal\alert.js`

####Component Options

The following options are available:

* noItemsMsg - message that is displayed if user tries to apply action without any selected items
* selectProvider - option that defines the component with selections data
* actions - array that contains initially available actions

<h5>Methods and Events</h5>

The following API methods are available:

* getAction - returns action instance found by the provided identifier
* addAction - adds new action to the actions
* applyAction - applies specified as identifier action
* getSelections - returns object with current selections

####Example of configuration modifications:

* Redefining the link to the template

{% highlight javascript %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="template" xsi:type="string">product/grid/columns/massactions</item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

* Specifying action with confirmation

<pre>
&lt;massaction name="listing_massaction"&gt;
    &lt;argument name="data" xsi:type="array"&gt;
        ...
        &lt;item name="config" xsi:type="array"&gt;
            &lt;item name="actions" xsi:type="array"&gt;
                &lt;item name="edit" xsi:type="array"&gt;
                    &lt;item name="type" xsi:type="string"&gt;edit&lt;/item&gt;
                    &lt;item name="label" xsi:type="string" translate="true"&gt;Edit&lt;/item&gt;
                    &lt;item name="confirm" xsi:type="array"&gt;
                        &lt;item name="title" xsi:type="string" translate="true"&gt;Edit items&lt;/item&gt;
                        &lt;item name="message" xsi:type="string" translate="true"&gt;Are you sure you wan't to edit selected items?&lt;/item&gt;
                    &lt;/item&gt;
                &lt;/item&gt;
            &lt;/item&gt;
        &lt;/item&gt;
    &lt;/argument&gt;
&lt;/massaction&gt;
</pre>

* Action with a custom callback


Callback is provided by another component.

<pre>
&lt;massaction name="listing_massaction"&gt;
    &lt;argument name="data" xsi:type="array"&gt;
        ...
        &lt;item name="config" xsi:type="array"&gt;
            &lt;item name="actions" xsi:type="array"&gt;
                &lt;item name="edit" xsi:type="array"&gt;
                    &lt;item name="type" xsi:type="string"&gt;edit&lt;/item&gt;
                    &lt;item name="label" xsi:type="string" translate="true"&gt;Edit&lt;/item&gt;
                    &lt;item name="callback" xsi:type="array"&gt;
                        &lt;item name="provider" xsi:type="string"&gt;cms_page_listing.inline_editing&lt;/item&gt;
                        &lt;item name="target" xsi:type="string"&gt;startEdit&lt;/item&gt;
                    &lt;/item&gt;
                &lt;/item&gt;
            &lt;/item&gt;
        &lt;/item&gt;
    &lt;/argument&gt;
&lt;/massaction&gt;
</pre>

* Instance replacement: one instance of a component

Redefine link to constructor.

<pre>
&lt;massaction name="listing_massaction"&gt;
    &lt;argument name="data" xsi:type="array"&gt;
        &lt;item name="js_config" xsi:type="array"&gt;
            &lt;item name="component" xsi:type="string"&gt;Magento_Products/js/grid/massactions&lt;/item&gt;
        &lt;/item&gt;
    &lt;/argument&gt;
&lt;/massaction&gt;
</pre>

<h3 id="treemass">UI Library TreeMassAction Component</h3>

TreeMassAction Component is extension to MassAction component that provides nested sub-menu.

####PHP Implementation of TreeMassAction

To enable Massaction Component for your Listing instance it should be declared as a child.

Example:
`app/code/Magento/Catalog/view/adminhtml/ui_component/product_listing.xml`

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd">
    <massaction name="listing_massaction">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="selectProvider" xsi:type="string">product_listing.product_listing.product_columns.ids</item>
                <item name="component" xsi:type="string">Magento_Ui/js/grid/tree-massactions</item>
                <item name="displayArea" xsi:type="string">bottom</item>
                <item name="actions" xsi:type="array">
                    <item name="delete" xsi:type="array">
                        <item name="confirm" xsi:type="array">
                            <item name="title" xsi:type="string" translate="true">Delete items</item>
                            <item name="message" xsi:type="string" translate="true">Delete selected items?</item>
                        </item>
                        <item name="type" xsi:type="string">delete</item>
                        <item name="label" xsi:type="string" translate="true">Delete</item>
                        <item name="url" xsi:type="string">catalog/product/massDelete</item>
                    </item>
                    <item name="status" xsi:type="array">
                        <item name="type" xsi:type="string">status</item>
                        <item name="label" xsi:type="string" translate="true">Change status</item>
                        <item name="actions" xsi:type="array">
                            <item name="0" xsi:type="array">
                                <item name="type" xsi:type="string">enable</item>
                                <item name="label" xsi:type="string" translate="true">Enable</item>
                                <item name="url" xsi:type="string">catalog/product/massEnable</item>
                            </item>
                            <item name="1" xsi:type="array">
                                <item name="type" xsi:type="string">disable</item>
                                <item name="label" xsi:type="string" translate="true">Disable</item>
                                <item name="url" xsi:type="string">catalog/product/massDisable</item>
                            </item>
                        </item>
                    </item>
                    <item name="attributes" xsi:type="array">
                        <item name="type" xsi:type="string">attributes</item>
                        <item name="label" xsi:type="string" translate="true">Update attributes</item>
                        <item name="url" xsi:type="string">catalog/product_action_attribute/edit</item>
                    </item>
                </item>
                <item name="indexField" xsi:type="string">entity_id</item>
            </item>
        </argument>
    </massaction>
</listing>
{% endhighlight%}

####Configuration
Component can be configured in two ways:

* Globally: using any module's <a href="#example">`view/*/ui_component/etc/definition.xml`</a> file. All settings declared in this file are applied to all component's instances
* Locally: using concrete component instance configuration, such as `app/code/Magento/Catalog/view/adminhtml/ui_component/product_listing.xml`

####TreeMassAction JS Component Structure

####Component Elements (classes, files, etc)

The following are the component elements:

* Constructor `app\code\Magento\Ui\view\base\web\js\grid\tree-massactions.js`
* Template: `app\code\Magento\Ui\view\base\web\templates\grid\tree-massactions.html`
* Template: `app\code\Magento\Ui\view\base\web\templates\grid\submenu.html`

####Dependencies on Other Components

Dependency on the following component:

* Collapsible: `app\code\Magento\Ui\view\base\web\js\grid\massactions.js`

####Component Options

The following options are available:

* noItemsMsg - message which will be show if user tries to apply action without any selected items
* selectProvider - option which defines the component with selections data
* actions - array which contains initially available actions

####Methods and Events

The following api methods are available:

* getAction - returns action instance found by the provided identifier
* applyAction - applies specified as identifier action
* hideSubmenus - hide specified actions and nested submenu

####How to Configure Already Used in Code TreeMassAction Component

`app\code\Magento\Catalog\view\adminhtml\ui_component\product_listing.xml`

Current implementation:

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">product_listing.product_listing.product_columns.ids</item>
            <item name="component" xsi:type="string">Magento_Ui/js/grid/tree-massactions</item>
            <item name="displayArea" xsi:type="string">bottom</item>
            <item name="actions" xsi:type="array">
                <item name="delete" xsi:type="array">
                    <item name="confirm" xsi:type="array">
                        <item name="title" xsi:type="string" translate="true">Delete items</item>
                        <item name="message" xsi:type="string" translate="true">Delete selected items?</item>
                    </item>
                    <item name="type" xsi:type="string">delete</item>
                    <item name="label" xsi:type="string" translate="true">Delete</item>
                    <item name="url" xsi:type="string">catalog/product/massDelete</item>
                </item>
                <item name="status" xsi:type="array">
                    <item name="type" xsi:type="string">status</item>
                    <item name="label" xsi:type="string" translate="true">Change status</item>
                    <item name="actions" xsi:type="array">
                        <item name="0" xsi:type="array">
                            <item name="type" xsi:type="string">enable</item>
                            <item name="label" xsi:type="string" translate="true">Enable</item>
                            <item name="url" xsi:type="string">catalog/product/massEnable</item>
                        </item>
                        <item name="1" xsi:type="array">
                            <item name="type" xsi:type="string">disable</item>
                            <item name="label" xsi:type="string" translate="true">Disable</item>
                            <item name="url" xsi:type="string">catalog/product/massDisable</item>
                        </item>
                    </item>
                </item>
                <item name="attributes" xsi:type="array">
                    <item name="type" xsi:type="string">attributes</item>
                    <item name="label" xsi:type="string" translate="true">Update attributes</item>
                    <item name="url" xsi:type="string">catalog/product_action_attribute/edit</item>
                </item>
            </item>
            <item name="indexField" xsi:type="string">entity_id</item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

Example of configuration modifications:

* Redefining the link to the template

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="template" xsi:type="string">product/grid/columns/massactions</item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

* Specifying action with confirmation

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="actions" xsi:type="array">
                <item name="0" xsi:type="array">
                    <item name="type" xsi:type="string">edit</item>
                    <item name="label" xsi:type="string" translate="true">Edit</item>
                    <item name="confirm" xsi:type="array">
                        <item name="title" xsi:type="string" translate="true">Edit items</item>
                        <item name="message" xsi:type="string" translate="true">Are you sure you wan't to edit selected items?</item>
                    </item>
                </item>
            </item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

* Action with a custom callback

Callback is provided by another component.

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="actions" xsi:type="array">
                <item name="0" xsi:type="array">
                    <item name="type" xsi:type="string">edit</item>
                    <item name="label" xsi:type="string" translate="true">Edit</item>
                    <item name="callback" xsi:type="array">
                        <item name="provider" xsi:type="string">product_listing.inline_editing</item>
                        <item name="target" xsi:type="string">startEdit</item>
                    </item>
                </item>
            </item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

####Instance Replacement: One Instance of a Component

Redefine link to constructor:

{% highlight XML %}
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Products/js/grid/tree-massactions</item>
        </item>
    </argument>
</massaction>
{% endhighlight %}

<h3 id="column">UI Library Column Component</h3>

The Column component is a collection of columns and it provides an interface for such actions as showing and hiding columns. The interface contains the following information:

* Total number of all available columns in a grid
* Number of columns currently active/displayed

Another task of the Column component is to provide data about column state to the admin.

There is no need to duplicate information about the columns to be displayed in the Column component. You must define the append to element on every column child element and reference the parent using the appends.
Another way to give access to the child element is to give a link to it when defining the column container.

####UI Library Multiselect Component

The Multiselect component is used to provide check box interface for a specific listing or a specific data set. The component is an extension for Column component and allows selecting either a collection of items or all items from the given set.

The Multiselect component which stores the information about the number of selected items in its template shares this data with the following components:

* Pagination
* MassAction

When making any actions which affect the item selection, like filtering, the number of selected items in the Multiselect component is flushed as currently collection contains only one item and knows nothing about the general set of data.

Multiselect is a child of the Grid component and is rendered in its view. Like any component, it can hold the sort order value which influences the order of all its child elements.

When you specify the `after` or `before` property in the Multiselect component, it references any existing component in the parent container and renders it in that specified position.

####Multiselect JS Component Structure

The Multiselect component is implemented in the class `app\code\Magento\Ui\view\base\web\js\grid\columns\multiselect.js.`

Templates used by this component are:

* `app\code\Magento\Ui\view\base\web\templates\grid\cells\multiselect.html` - The template defines every specific field in the grid. It provides the Multiselect component with the check box interface for selecting item(s) in the grid and performing actions over them.
* `app\code\Magento\Ui\view\base\web\templates\grid\columns\multiselect.html` - The template defines the grid header with drop-down lists and the Select All, Deselect All, and other options.

The component provides the following options:

* header template option
* body template option

Code samples available in the default configuration:

`headerTmpl: 'ui/grid/columns/multiselect'`

`bodyTmpl: 'ui/grid/cells/multiselect'`

* imports option

    The option defines from where the component receives its data.

* actions option

    You can modify the default actions by, for example, renaming their frontend labels.

* indexField option

    This option allows specifying which field represents record identifier.

####Methods and Events

No events are generated. Any other component that can retrieve access to this component and its properties can get data and track its changes using subscription.

####How to configure Multiselect Component already used in code

Sample of code where component configurations are performed:

Current implementation:

{% highlight javascript %}
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
            <argument name="data" xsi:type="array">
                <item name="js_config" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/columns/multiselect</item>
                </item>
                <item name="config" xsi:type="array">
                    <item name="indexField" xsi:type="string">page_id</item>
                    <item name="appendTo" xsi:type="string"></item>
                </item>
            </argument>
        </column>
{% endhighlight %}

Example of configuration modifications:

* Redefining the link to the template

{% highlight javascript %}
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="headerTmpl" xsi:type="string">product/grid/columns/multiselect</item>
        </item>
    </argument>
</column>
{% endhighlight %}

* Redefining the name of the property which represents record identifier

{% highlight javascript %}
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="indexField" xsi:type="string">product_id</item>
        </item>
    </argument>
</column>
{% endhighlight %}

* Redefining a property data source

{% highlight javascript %}
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="imports" xsi:type="array">
                <item name="rows">products_prodvider:data.products</item>
            </item>
        </item>
    </argument>
</column>
{% endhighlight %}

####How to add a new library component

Instance Replacement: One Instance of a Component

* Redefine the link to constructor:

{% highlight javascript %}
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Products/js/grid/columns/multiselect</item>
        </item>
    </argument>
</column>
{% endhighlight %}

<h3 id="uiselect">UI-select component</h3>

The UI-select component is used to provide check box interface for a specific listing or a specific data set. The component allows selecting a collection of items.

The UI-select component has extended from the Abstract component.

Example integration:

`app/code/Magento/Cms/view/adminhtml/ui_component/cms_page_listing.xml`

{% highlight xml %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Ui/etc/ui_configuration.xsd">
            <filterSelect name="uiSelect">
                <argument name="optionsProvider" xsi:type="configurableObject">
                    <argument name="class" xsi:type="string">Magento\Cms\Model\Page\Source\PageLayout</argument>
                </argument>
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/form/element/ui-select</item>
                        <item name="template" xsi:type="string">ui/grid/filters/elements/ui-select</item>
                        <item name="dataScope" xsi:type="string">uiSelect</item>
                        <item name="label" xsi:type="string" translate="true">uiSelect</item>
                    </item>
                </argument>
            </filterSelect>
</listing>
{% endhighlight %}

####Configuration

The following configuration can be passed in arguments:

* Link to any of the following templates
* Link to the constructor
* Label to ui-select
* Default caption
* Caption if selected more then one elements

####Navigation

The UI-select component supports keyboard navigation.

Navigation keys:

* Enter key: if focus on the caption - a list of options opens, if focus on the some option - selected or unselected current option
* Space key: copy 'Enter key' functionality
* Escape key: closes the list of options
* PageUp key: sets focus to previous option
* PageDown key: sets focus to next option

####UI-select JS component structure

* Component elements
    
    The Ui-select component is implemented in the class `app\code\Magento\Ui\view\base\web\js\form\element\ui-select.js`
    
    Templates used by this component are:
    
    `app\code\Magento\Ui\view\base\web\templates\grid\filters\elements\ui-select.html`
    
* Dependencies on Other Components

    Abstract
    
    uiLayout
    
* imports option
    
    The option defines from where the component receives its data.
        
    Code samples available in the default configuration:
    
    {% highlight javascript %}
    imports: {
        options: '${ $.optionsConfig.name }:options'
    }
    {% endhighlight %}

* actions option

    You can modify the default actions by renaming their storefront labels
    
    Code samples available in the default configuration:
    
    {% highlight javascript %}
    actions: [{
                    value: 'selectAll',
                    label: $t('Select all')
                }, {
                    value: 'deselectAll',
                    label: $t('Deselect all')
                }, {
                    value: 'selectPage',
                    label: $t('Select all on this page')
                }, {
                    value: 'deselectPage',
                    label: $t('Deselect all on this page')
                }],
    {% endhighlight %}

<h3 id="inlineedit">Inline Edit component</h3>

The Inline Edit component is used to provide the ability of inline editing. 

####Related UI Components

The Bulk Edit component uses the Inline Edit component.
The Listing component can use the Inline Edit if it is configured and enabled.

####Implementation of Inline Edit

Currently Inline Edit is not presented in definition.xml. It is used as a plugin for the Listing component. It can be configured in <a href="#example">definitions.xml</a> if necessary.

To enable Inline Edit component for the grid, it is declared as a plugin for Listing component:

{% highlight xml %}
<columns name="cms_page_columns">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="editorConfig" xsi:type="array">
                <item name="selectProvider" xsi:type="string">cms_page_listing.cms_page_listing.cms_page_columns.ids</item>
                <item name="enabled" xsi:type="boolean">true</item>
                <item name="indexField" xsi:type="string">entity_id</item>
            </item>
            ..
        </item>
    </argument>
..
</columns>
{% endhighlight %}

The configuration of the component can include:

* editorConfig - is responsible for general editor configuration

  * component
    
  * enabled - is Inline Edit enabled
    
  * selectProvider - column name, by which rows will be selected/deselected
    
  * columnsProvider - provides columns
    
  * dataProvider - provides data, which will be edited
    
  * indexField - column name, by which edited rows will be indexed
    
  * bulkConfig - in current implementation on cms_pages, includes Bulk Edit component as a plugin
    
  * clientConfig - is responsible for editor communication with backend
    
  * viewConfig - is responsible for editor UI
    
  * templates - the templates for child components, example will be provided below and marked as *.
   
With configuration above, the Inline Edit will be enabled. But it also must start editing in response to some user action, for example when clicking somewhere on the row.

{% highlight xml %}
<columns name="cms_page_columns">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="childDefaults" xsi:type="array">
                <item name="fieldAction" xsi:type="array">
                    <item name="provider" xsi:type="string">cms_page_listing.cms_page_listing.cms_page_columns_editor</item>
                        <item name="target" xsi:type="string">startEdit</item>
                        <item name="params" xsi:type="array">
                            <item name="0" xsi:type="string">${ $.$data.rowIndex }</item>
                            <item name="1" xsi:type="boolean">true</item>
                        </item>
                    </item>
                </item>
                ..
            </item>
        </item>
    </argument>
</column>
{% endhighlight%}

Note that this is not the configuration of the Inline Edit itself, but the configuration of the Column component, to interact with the Inline Edit.

With the above configuration, the Inline Edit will be enabled, but all row cells will be read-only during the Inline edit. To make specific column editable, next configuration can be used:

{% highlight xml %}
<column name="name">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="editor" xsi:type="array">
                <item name="editorType" xsi:type="string">text</item>
                <item name="validation" xsi:type="array">
                    <item name="required-entry" xsi:type="boolean">true</item>
                </item>
            </item>
            ..
        </item>
    ..
    </argument>
</column>
{% endhighlight %}

Or as a short alternative:

{% highlight xml %}
<column name="name">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="editor" xsi:type="string">text</item>
            ..
        </item>
        ..
    </argument>
</column>
{% endhighlight %}

The configuration for the specific column editor can include:

* editorType - type of the editor. Possible values: same as primitives (text, select, date), can also provide new type (see example marked as **)

* validation

  * validation rules, required-entry here as just an example of possible rules

Additional examples:
 * - Example of the templates configuration (fieldTmpl for the edited cell, and rowTmpl for the whole edited row)
{% highlight xml %}
<columns name="cms_page_columns">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="editorConfig" xsi:type="array">
                ..
                <item name="templates" xsi:type="array">
                    <item name="record" xsi:type="array">
                        <item name="fieldTmpl" xsi:type="string">ui/grid/editing/field</item>
                        <item name="rowTmpl" xsi:type="string">ui/grid/editing/row</item>
                    </item>
                </item>
            </item>
            ..
        </item>
    </argument>
..
</columns>
{% endhighlight %}
 ** - Example of the editor type configuraion - let's add a colorpicker type, for example, as addition to the existed types (which extend form/element/abstract)
{% highlight xml%}
<item name="editor" xsi:type="array">
    <item name="component" xsi:type="string">Magento_Ui/js/form/element/colorpicker</item>
    <item name="template" xsi:type="string">ui/form/element/colorpicker</item>
</item>
{% endhighlight %}
 
####Inline Edit JS Component Structure

Component elements:

* Editor Component: `app\code\Magento\Ui\view\base\web\js\grid\editing\editor.js`
* Client Component: `app\code\Magento\Ui\view\base\web\js\grid\editing\editor-view.js`
* View Component: `app\code\Magento\Ui\view\base\web\js\grid\editing\client.js`
* Record Component (used by Editor to create a record associated with a row data): `app\code\Magento\Ui\view\base\web\js\grid\editing\record.js`
* row Template: `app\code\Magento\Ui\view\base\web\templates\grid\editing\row.html`
* row buttons Template: `app\code\Magento\Ui\view\base\web\templates\grid\editing\row-buttons.html`
* header buttons Template: `app\code\Magento\Ui\view\base\web\templates\grid\editing\header-buttons.html`

Dependencies on other components:

* columns collection
* dataProvider of the listing
* multiselect component, which provides information on selected rows.

Currently the Inline Edit component is configured on the cms pages as a plugin for the Listing, its configuration is included into Listing and Column components configuration (described in the above examples).

<h3 id="bookmark">UI Library Bookmark component</h3>

Bookmark Component is responsible for storing active and changed states of data grids. It includes state of filters, columns position, applied sorting, pagination, and so on.

Bookmark Component use DB as persistence storage for grid`s state.

<table>
<tbody>
<tr>
    <th>Field name</th>
    <th>Type</th>
    <th>Description</th>
</tr>
<tr>
    <td>(PK) bookmark_id</td>
    <td>int(10)</td>
    <td>Bookmark identifier</td>
</tr>
<tr>
    <td>(UX1) user_id</td>
    <td>int(10)</td>
    <td>User Id</td>
</tr>
<tr>
    <td>(UX1) namespace</td>
    <td>varchar(255)</td>
    <td>Bookmark namespace</td>
</tr>
<tr>
    <td>(UX1) identifier</td>
    <td>varchar(255)</td>
    <td>Bookmark identifier</td>
</tr>
<tr>
    <td>current</td>
    <td>smallint(6)</td>
    <td>Mark current bookmark per user, namespace and identifier</td>
</tr>
<tr>
    <td>title</td>
    <td>varchar(255)</td>
    <td>Bookmark title</td>
</tr>
<tr>
    <td>config</td>
    <td>longtext</td>
    <td>Bookmark config (JSON config for Js Bookmark component)</td>
</tr>
<tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>Bookmark created at time</td>
</tr>
<tr>
    <td>updated_at</td>
    <td>datetime</td>
    <td>Bookmark updated at time</td>
</tr>
</tbody>
</table>

PK - increment Id

UX1 - unique key

####Bookmarks JS Component Structure

Bookmark component consists of

* Collection of bookmarks located at `app\code\Magento\Ui\view\base\web\js\grid\controls\bookmarks\bookmarks.js`

    Template for collection at `app\code\Magento\Ui\view\base\web\templates\grid\controls\bookmarks\bookmarks.html`
    
* Child elements which represent a separate view located at `app\code\Magento\Ui\view\base\web\js\grid\controls\bookmarks\view.js`

    Template for child element at `app\code\Magento\Ui\view\base\web\templates\grid\controls\bookmarks\view.html`

Bookmarks use `app\code\Magento\Ui\view\base\web\js\grid\controls\bookmarks\storage.js`
custom data storage which allows saving bookmark state externally (saved bookmarks are available on any device and in any browser).

The Bookmark component provides the following options:

* template option
* component option

<pre>
templates: {
    view: {
        component: 'Magento_Ui/js/grid/controls/bookmarks/view'
        template: 'path/to/template'
    },
    newView: {
        label: 'New View',
        index: '${ Date.now() }'
    }
}
</pre>

* storageConfig option

<pre>
storageConfig: {
    saveUrl: 'path/to/save',
    deleteUrl: 'path/to/delete',
    namespace: 'namespace'
}
</pre>

<h2 id="form">Form Component</h2>

This topic is planned for the near future.

<h2 id="export">UI Library ExportButton Component</h2>

ExportButton Component is responsible for export grid data to specified data format (cvs, xml, and so on).

To enable ExportButton Component add exportButton element with specified selectProvider item to listing configuration file.

{% highlight XML %}
<exportButton name="export_button">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="selectProvider" xsi:type="string">{select_provider_path}</item>
        </item>
    </argument>
</exportButton>
{% endhighlight %}

Example: `Magento/Sales/view/adminhtml/ui_component/sales_order_grid.xml`

{% highlight XML %}
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <container name="listing_top">
        <exportButton name="export_button">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="selectProvider" xsi:type="string">sales_order_grid.sales_order_grid.sales_order_columns.ids</item>
                </item>
            </argument>
        </exportButton>
    </container>
</listing>
{% endhighlight %}

By default Magento allows CSV and Excel XML export data formats.

####How to add new export format

To add new export format:

* Add configuration data to ExportButton definition <a href="#example">`Magento/Ui/view/base/ui_component/etc/definition.xml`</a>
* Add controller for new format processing `\Magento\Ui\Controller\Adminhtml\Export\GridToFoo`
* Add converter `\Magento\Ui\Model\Export\ConvertToFoo`

<h2 id="container">Container Component</h2>

This topic is planned for the near future.

<h2 id="example">definition.xml</h2>

{% highlight XML %}
<?xml version="1.0" encoding="UTF-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<components xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../etc/ui_definition.xsd">
    <dataSource class="Magento\Ui\Component\DataSource"/>
    <listing sorting="true" class="Magento\Ui\Component\Listing">
        <argument name="data" xsi:type="array">
            <item name="template" xsi:type="string">templates/listing/default</item>
            <item name="save_parameters_in_session" xsi:type="string">1</item>
            <item name="client_root" xsi:type="string">mui/index/render</item>
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">uiComponent</item>
            </item>
        </argument>
    </listing>

    <paging class="Magento\Ui\Component\Paging">
        <argument name="data" xsi:type="array">
            <item name="template" xsi:type="string">templates/paging/default</item>
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/paging</item>
            </item>
        </argument>
    </paging>

    <filters class="Magento\Ui\Component\Filters">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/filters/filters</item>
            </item>
        </argument>
    </filters>
    <filterSelect class="Magento\Ui\Component\Filters\Type\Select">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="template" xsi:type="string" translate="true">ui/grid/filters/elements/select</item>
            </item>
        </argument>
    </filterSelect>
    <filterRange class="Magento\Ui\Component\Filters\Type\Range">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/filters/group</item>
            </item>
        </argument>
    </filterRange>
    <filterInput class="Magento\Ui\Component\Filters\Type\Input">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="template" xsi:type="string">ui/grid/filters/elements/input</item>
            </item>
        </argument>
    </filterInput>
    <filterDate class="Magento\Ui\Component\Filters\Type\Date">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="template" xsi:type="string">ui/grid/filters/elements/date</item>
            </item>
        </argument>
    </filterDate>

    <container class="Magento\Ui\Component\Container">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">uiComponent</item>
            </item>
            <item name="template" xsi:type="string">templates/container/default</item>
        </argument>
    </container>
    <massaction class="Magento\Ui\Component\MassAction">
        <argument name="data" xsi:type="array">
            <item name="template" xsi:type="string">templates/listingcontainer/massaction/default</item>
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/massactions</item>
            </item>
        </argument>
    </massaction>
    <actions class="Magento\Ui\Component\Control\Action">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/columns/actions</item>
            </item>
        </argument>
    </actions>




    <columns class="Magento\Ui\Component\Listing\Columns">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/grid/listing</item>
            </item>
        </argument>
    </columns>
    <column class="Magento\Ui\Component\Listing\Columns\Column">
        <argument name="data" xsi:type="array">
            <item name="state_prefix" xsi:type="string">columns</item>
        </argument>
    </column>


    <form class="Magento\Ui\Component\Form">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/form</item>
            </item>
            <item name="template" xsi:type="string">templates/form/default</item>
        </argument>
    </form>
    <fieldset class="Magento\Ui\Component\Form\Fieldset">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/components/fieldset</item>
            </item>
        </argument>
    </fieldset>
    <field class="Magento\Ui\Component\Form\Field"/>

    <!-- Form elements -->
    <input class="Magento\Ui\Component\Form\Element\Input">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/abstract</item>
                <item name="config" xsi:type="array">
                    <item name="template" xsi:type="string">ui/form/field</item>
                    <item name="elementTmpl" xsi:type="string">ui/form/element/input</item>
                </item>
            </item>
        </argument>
    </input>
    <checkbox class="Magento\Ui\Component\Form\Element\Checkbox">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/boolean</item>
                <item name="extends" xsi:type="string">input</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/checkbox</item>
                </item>
            </item>
        </argument>
    </checkbox>
    <select class="Magento\Ui\Component\Form\Element\Select">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/select</item>
                <item name="extends" xsi:type="string">input</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/select</item>
                </item>
            </item>
        </argument>
    </select>
    <multiselect class="Magento\Ui\Component\Form\Element\Select">
        <argument name="data" xsi:type="array">
            <item name="template" xsi:type="string">ui/form/element/multiselect</item>
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/multiselect</item>
                <item name="extends" xsi:type="string">input</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/multiselect</item>
                </item>
            </item>
        </argument>
    </multiselect>
    <textarea class="Magento\Ui\Component\Form\Element\Textarea">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/textarea</item>
                <item name="extends" xsi:type="string">input</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/textarea</item>
                </item>
            </item>
        </argument>
    </textarea>
    <multiline class="Magento\Ui\Component\Form\Element\Multiline">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/components/group</item>
            </item>
        </argument>
    </multiline>
    <!-- Form elements -->

    <!-- Form element data types -->
    <text class="Magento\Ui\Component\Form\Element\DataType\Text">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/text</item>
            </item>
        </argument>
    </text>
    <number class="Magento\Ui\Component\Form\Element\DataType\Number"/>
    <price class="Magento\Ui\Component\Form\Element\DataType\Price"/>
    <image class="Magento\Ui\Component\Form\Element\DataType\Media">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="extends" xsi:type="string">input</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/media</item>
                </item>
            </item>
        </argument>
    </image>
    <date class="Magento\Ui\Component\Form\Element\DataType\Date">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="extends" xsi:type="string">input</item>
                <item name="component" xsi:type="string">Magento_Ui/js/form/element/date</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/date</item>
                </item>
            </item>
        </argument>
    </date>
    <boolean class="Magento\Ui\Component\Form\Element\DataType\Boolean">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="extends" xsi:type="string">input</item>
            </item>
        </argument>
    </boolean>
    <email class="Magento\Ui\Component\Form\Element\DataType\Email">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="extends" xsi:type="string">input</item>
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/form/element/email</item>
                </item>
            </item>
            <item name="config" xsi:type="array">
                <item name="addbefore" xsi:type="string">@email:</item>
            </item>
        </argument>
    </email>
    <!-- Form element data types -->


    <tab class="Magento\Ui\Component\Layout\Tabs\Tab">
        <argument name="data" xsi:type="array">
            <item name="template" xsi:type="string">templates/layout/tabs/tab/default</item>
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/components/area</item>
            </item>
        </argument>
    </tab>
    <!-- navigation -->
    <nav class="Magento\Ui\Component\Layout\Tabs\Nav">
        <argument name="data" xsi:type="array">
            <item name="template" xsi:type="string">ui/tab</item>
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/components/tab_group</item>
            </item>
        </argument>
    </nav>
    <!-- bookmark -->
    <bookmark class="Magento\Ui\Component\Bookmark">
        <argument name="data" xsi:type="array">
        </argument>
    </bookmark>
</components>
{% endhighlight %}