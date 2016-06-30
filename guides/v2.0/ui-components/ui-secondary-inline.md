---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: Inline Edit Component
menu_title: Inline Edit Component
menu_node:
menu_order: 8
version: 2.0
github_link: ui-components/ui-secondary-inline.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-inline.html

---

<h3 id="inlineedit">Inline Edit component</h3>

The Inline Edit component is used to provide the ability of inline editing. 

####Related UI Components

The Bulk Edit component uses the Inline Edit component.
The Listing component can use the Inline Edit if it is configured and enabled.

####Implementation of Inline Edit

Currently Inline Edit is not presented in definition.xml. It is used as a plugin for the Listing component. It can be configured in <a href="{{page.baseurl}}ui-library/ui-definition.html">definitions.xml</a> if necessary.

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
    
  * clientConfig - is responsible for editor communication with backend. Contains nodes with url's where requests for storing and validating data are sent:

    {% highlight XML%}
    <item name="clientConfig" xsi:type="array">
        <item name="saveUrl" xsi:type="url" path="cms/page/inlineEdit" />
        <item name="validateUrl" xsi:type="string">/path/to</item>
        <item name="validateBeforeSave" xsi:type="boolean">false</item>
    </item>
    {% endhighlight%}

    
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
