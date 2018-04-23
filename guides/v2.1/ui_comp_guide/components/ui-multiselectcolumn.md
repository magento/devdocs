---
layout: default
group: UI_Components_guide
subgroup: components
title: MultiselectColumn component
menu_title: MultiselectColumn component
version: 2.1
github_link: ui_comp_guide/components/ui-multiselectcolumn.md
---

## Overview

The MultiselectColumn component implements a column with check boxes for selecting records. It also provides controls for selecting multiple records.

MultiselectColumn is a child of the [Listing component]({{page.baseurl}}/ui_comp_guide/components/ui-listing-grid.html) and is rendered in its view. Like any component, it can hold the sort order value, which influences the order of all its child elements.

#### MultiselectColumn JS Component Structure

The MultiselectColumn component is implemented in the class `app\code\Magento\Ui\view\base\web\js\grid\columns\multiselect.js.`

Templates used by this component are:

* `app\code\Magento\Ui\view\base\web\templates\grid\cells\multiselect.html` - The template defines each field in the grid. It provides the Multiselect component with the check box interface for selecting item(s) in the grid and performing actions over them.
* `app\code\Magento\Ui\view\base\web\templates\grid\columns\multiselect.html` - The template defines the grid header with drop-down lists and the Select All, Deselect All, and other options.

## MultiselectColumn configuration

Extends all [Column]({{page.baseurl}}/ui_comp_guide/components/ui-column.html) configuration.

MultiselectColumn-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>bodyTmpl</code></td>
    <td>Path to the template that is used to render a column's field in the table's body.</td>
    <td>String</td>
    <td><code>ui/grid/cells/multiselect</code></td>
  </tr>
  <tr>
    <td><code>controlVisibility</code></td>
    <td>Whether a user can control column's visibility handled by the <a href="{{page.baseurl}}/ui_comp_guide/components/ui-columnscontrols.html">ColumnsControls component</a>.</td>
    <td>String</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>draggable</code></td>
    <td>Defines if a user can change column's position in the table by grabbing column's header and dragging it across the table.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>fieldClass</code></td>
    <td>Additonal CSS classes added to the column's field elements.</td>
    <td>{<br>[name: string]: Boolean<br>}</td>
    <td>{<br><code>'data-grid-checkbox-cell': true</code><br>}</td>
  </tr>
  <tr>
    <td><code>headerTmpl</code></td>
    <td>Path to the <code>.html</code> template for the column's header.</td>
    <td>String</td>
    <td><code>ui/grid/columns/multiselect</code></td>
  </tr>
  <tr>
    <td><code>preserveSelectionsOnFilter</code></td>
    <td>Whether to preserve selected items when a new filter value is applied.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>sortable</code></td>
    <td>Whether a column's fields can be used to sort records in the table.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
</table>

#### Methods and Events

No events are generated. Any other component that can retrieve access to this component and its properties can get data and track its changes using subscription.

#### How to configure a MultiselectColumn сomponent already used in code

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

#### How to add a new component

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
