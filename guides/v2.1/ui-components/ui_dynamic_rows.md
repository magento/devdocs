---
layout: default
group:  UI Library
subgroup: F_UI Library Dynamic Rows Component
title: Dynamic Rows Component
menu_title: Dynamic Rows Component
menu_node: parent
version: 2.1
github_link: ui-components/ui_dynamic_rows.md
---
## Overview

The dynamic-rows component is used to create a table where rows of configurable fields can be dynamically added and removed. For example, it can be used for displaying data from a certain [grid]({{page.baseurl}}ui-components/ui-listing-grid.html), where the number of records (rows) is not hardcoded. 

Following is an illustration of what such a table looks like:

<img src="{{site.baseurl}}common/images/ui-dynamic-row.png" />

**Contents:**

* TOC
{:toc}


## Dynamic-rows component structure

### Components' JS classes
For implementing a dynamic table, several UI components are used:

- The dynamic-rows component, implemented in the `<Magento_Ui_module_dir>/view/base/web/js/dynamic-rows/dynamic-rows.js` class
- The extended component to transfer data from a grid: `<Magento_Ui_module_dir>/view/base/web/js/dynamic-rows/dynamic-rows-grid.js`
- The record component: `<Magento_Ui_module_dir>/view/base/web/js/dynamic-rows/record.js`

For drag and drop the `<Magento_Ui_module_dir>/view/base/web/js/dynamic-rows/dnd.js` module is used.

### HTML templates for the dynamic table

The following dynamic table templates are used:

- `<Magento_Ui_module_dir>/view/base/web/templates/dynamic-rows/templates/default.html`

The following image shows the dynamic table view when the `default.html` template is used:


<img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/UI_DefaultTemplate.png"/>



- `<Magento_Ui_module_dir>/view/base/web/templates/dynamic-rows/templates/grid.html`

The following image shows the dynamic table view when the `grid.html` template is used:


<img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/UI_gridTemplate.png"/>


- `app/code/Magento/Ui/view/base/web/templates/dynamic-rows/templates/collapsible.html`

The following image shows the dynamic table view when the `collapsible.html` template is used:

<img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/ui_collapsibleTemplate.png"/>



### HTML templates for fields

- `<Magento_Ui_module_dir>/view/base/web/templates/dynamic-rows/cells/action-delete.html`
- `<Magento_Ui_module_dir>/view/base/web/templates/dynamic-rows/cells/text.html`.

Also dynamic rows uses form field templates.

## Configuration settings

The dynamic-rows component extends the uiCollection component.

A sample configuration follows:

{%highlight xml%}
...
<dynamicRows name="Integration">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <!-- Set the properties of the whole grid and columns here -->

            <!-- itemTemplate value is optional, it defines the name of the container for the record -->
            <item name="itemTemplate" xsi:type="string">record</item>      
        </item>
    </argument>
    <!-- The "name" value should correspond to the one specified in itemTemplate earlier -->
    <container name="record">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <!-- Set the properties of the records (rows) here-->
                ...
                <!-- The isTemplate, is_collection, and component properties and their valies are mandatory, do not change or remove them in your configuration file  -->
                <item name="isTemplate" xsi:type="boolean">true</item>
                <item name="is_collection" xsi:type="boolean">true</item>
                <item name="component" xsi:type="string">Magento_Ui/js/lib/core/collection</item>
            </item>
        </argument>
        <field name="website">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="dataType" xsi:type="string">text</item>
                    <item name="formElement" xsi:type="string">select</item> <!-- We can use different type element. Full list element you can see in section "Configuration -> Field types"  -->
                    <item name="dataScope" xsi:type="string">currentDataScopeName</item>
                    <item name="label" xsi:type="string">currentLabel</item>
                    <item name="options" xsi:type="array">
                        <item name="0" xsi:type="array">
                            <item name="label" xsi:type="string">Item</item>
                            <item name="value" xsi:type="string">0</item>
                        </item>
                    </item>
                </item>
            </argument>
         </field>
    </container>
</dynamicRows>
...
{%endhighlight%}

The result of this configuration is:

<img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/dynamic-rows-ui.png">

Each component used in dynamic rows is configured separately.

### Configure the table and columns properties

The general properties of the whole table and column-specific options are configured like the following:
{%highlight xml%}
...
<dynamicRows name="Integration">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <!-- Configuration goes here -->
            <item name="%option1%" xsi:type="%option_type%">%option value%</item>
            <item name="%option2%" xsi:type="%option_type%">%option value%</item>
            ...

            <item name="itemTemplate" xsi:type="string">record</item>      
        </item>
    </argument>
</dynamicRows>
...
{%endhighlight%}

The following table contains the options you can configure for the whole grid and columns.

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default value
    </th>
  </tr>
  <tr>
    <td>
      <code>addButton</code>
    </td>
    <td>
      Show the button for adding new rows.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>addButtonLabel</code>
    </td>
    <td>
      The label for the button used for adding new rows.
    </td>
    <td>
      String
    </td>
    <td>
      <em>Add</em>
    </td>
  </tr>
  <tr>
    <td>
      <code>additionalClasses</code>
    </td>
    <td>
      Set custom classes for the dynamic-rows component.
    </td>
    <td>
      String
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      <code>collapsibleHeader</code>
    </td>
    <td>
      Enable the collapsible header.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>component</code>
    </td>
    <td>
      A link to the constructor.
    </td>
    <td>
      String
    </td>
    <td>
      <code>Magento_Ui/js/dynamic-rows/dynamic-rows</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>defaultRecord</code>
    </td>
    <td>
      Render the default row instance if data is absent.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>deleteButtonLabel</code>
    </td>
    <td>
      Label for the button used for deleting rows.
    </td>
    <td>
      String
    </td>
    <td>
      <em>Delete</em>
    </td>
  </tr>
  <tr>
    <td>
      <code>disabled</code>
    </td>
    <td>
      Disable the grid.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>dndConfig</code>
    </td>
    <td>
      Enable drag and drop for records.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      A label for the whole table.
    </td>
    <td>
      String
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      <code>renderColumnsHeader</code>
    </td>
    <td>
      Show all columns headers.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>template</code>
    </td>
    <td>
      A link to the table template. Out of the box, the following
      templates are available:
      <ul>
        <li>
          <code>ui/dynamic-rows/templates/default</code>
        </li>
        <li>
          <code>ui/dynamic-rows/templates/grid</code>
        </li>
        <li>
          <code>ui/dynamic-rows/templates/collapsible</code>
        </li>
      </ul>
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/dynamic-rows/templates/default</code>
    </td>
  </tr>
</table>

### Configure records (rows)

The properties of the rows (records) are defined by the options of the record UI component.

In the configuration file, they are configured in the scope of the container which name is defined by the `itemTemplate` general option. By default it is `<container name="record">`. The record configuration block looks like the following:

{%highlight xml%}
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <!-- Set the properties of the records (rows) here-->
                ...
                <!-- The isTemplate, is_collection, and component properties and their valies are mandatory, do not change or remove them in your configuration file  -->
                <item name="isTemplate" xsi:type="boolean">true</item>
                <item name="is_collection" xsi:type="boolean">true</item>
                <item name="component" xsi:type="string">Magento_Ui/js/lib/core/collection</item>
            </item>
        </argument>
{%endhighlight%}


The following options are available for rows:

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default value
    </th>
  </tr>
  <tr>
    <td>
      <code>headerLabel</code>
    </td>
    <td>
      The default header for a record (row) if the
      <code>collapsible.html</code> template is used.
    </td>
    <td>
      String
    </td>
    <td>
      ''
    </td>
  </tr>
  <tr>
    <td>
      <code>positionProvider</code>
    </td>
    <td>
Relative path to the column which defines the sorting order.  
    </td>
    <td>
      String
    </td>
    <td>
      <code>position</code></td>
  </tr>
</table>

### Set the data provider for the dynamic table

By default, the dynamic-rows component uses the data provider of its parent component, for example form. To specify the other data source for it, use the following options:

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default value
    </th>
  </tr>
  <tr>
    <td>
      <code>dataProvider</code>
    </td>
    <td>
      Relative path to the table data source.
    </td>
    <td>
      String
    </td>
    <td>
      ''
    </td>
  </tr>
  <tr>
    <td>
      <code>map</code>
    </td>
    <td>
      Object for mapping values from a grid used as data source to dynamic-rows.
 Set as follows:
      <pre>
&lt;item name="map" xsi:type="array"&gt;
     &lt;item name="dynamic_rows_id" xsi:type="string"&gt;'grid_id'&lt;/item&gt;
     &lt;item name="dynamic_rows_name" xsi:type="string"&gt;'grid_id'&lt;/item&gt;
&lt;/item&gt;
</pre>
    </td>
    <td>
      Object
    </td>
    <td>
      <code>{}</code>
    </td>
  </tr>
</table>


### Define columns' properties

Field types are specified in the scope of the record container (by default it is `<container name="record">`) similar to the following example:


{%highlight xml%}
...
    <container name="record">
...
        <field name="%field_internal_name%">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="%option1%" xsi:type="%option_type%">%option value%</item>
                    <item name="%option2%" xsi:type="%option_type%">%option value%</item>
                    ...
                </item>
            </argument>
         </field>
    </container>
...
{%endhighlight%}


You can configure the following:

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default value
    </th>
  </tr>
  <tr>
    <td>
      <code>dataScope</code>
    </td>
    <td>
The path to data storage.
    </td>
    <td>
      String
    </td>
    <td>
''
    </td>
  </tr>
  <tr>
<td><code>disabled</code></td>
    <td>
      Disable a column.
    </td>
    <td>
      Boolean
    </td>
    <td>
<code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>formElement</code>
    </td>
    <td>
      Set the field type:
      <ul>
        <li>Text box. Set the value to <code>input</code>
        </li>
        <li>Check box. Set the value to <code>checkbox</code>
        </li>
        <li>Text area. Set the value to <code>textarea</code>
        </li>
        <li>List box. Set the value to <code>select</code>
        </li>
        <li>You can also add a "delete"
        icon by setting the value to <code>action_delete</code>
        </li>
      </ul>
    </td>
    <td>
      String
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      Field label
    </td>
    <td>
      String
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      <code>renderColumnHeader</code>
    </td>
    <td>
      Show header of a column 
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>visible</code>
    </td>
    <td>
      Show column 
</td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
</table>


You can configure the grid to render text instead of the certain field. To do this, add the following in the field configuration:

{%highlight xml%}
...
        <field name="%field_internal_name%">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="elementTmpl" xsi:type="string">ui/dynamicRows/text</item>
                    <item name="value" xsi:type="string">%the_text_to_be_displayed%</item>
                </item>
            </argument>
         </field>
...
{%endhighlight%}


## Public API (JavaScript)

- `setDisabled(state)`: disable/enable the dynamic table.
	- `state {Boolean}`: table state
- `setColumnDisabled(index, state)`: disable/enabled a particular column.
	- `index{Number}`: column index
	- `state{Boolean}`:column state
- `setVisible(state)`: set visibility of the table.
- `setColumnVisibility(index, state)`: show or hide a particular column.
- `reload()`: delete records and render anew.
- `onUpdateRecordTemplate(templateName)`: delete records and render with a new template.
	- `templateName{String}`: new template name
- `sort(position, elem)`: sort elements by position.
	- `position{Number}`: position
	- `elem{Object}`: the current DOM element
- `deleteRecord(index)`: delete a record by index.
	- `index{Number}`: index record
- `addChild(data, index)`: render a new record instance.
	- `data{Object}` object with a instance data
	- `index{Number} `: index for the new instance

