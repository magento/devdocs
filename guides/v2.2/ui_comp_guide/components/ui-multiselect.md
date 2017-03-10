---
layout: default
group: UI_Components_guide
subgroup: components
title: Multiselect component
menu_title: Multiselect component
version: 2.2
github_link: ui_comp_guide/components/ui-multiselect.md
---

#### UI Multiselect Component

The Multiselect component provides a check box interface for a specific listing or data set. The component is an extension for the Column component, and it allows the user to select either a collection of items or all items from the given set.

The Multiselect component stores the information about the number of selected items in its template. It shares this data with the following components:

* Pagination
* MassAction

When making any actions that affect the item selection, like filtering, the number of selected items in the Multiselect component is flushed, as the current collection contains only one item and knows nothing about the general set of data.

Multiselect is a child of the Grid component and is rendered in its view. Like any component, it can hold the sort order value, which influences the order of all its child elements.

When you specify the `after` or `before` property in the Multiselect component, it references any existing component in the parent container and renders it in that specified position.

#### Multiselect JS Component Structure

The Multiselect component is implemented in the class `app\code\Magento\Ui\view\base\web\js\grid\columns\multiselect.js.`

Templates used by this component are:

* `app\code\Magento\Ui\view\base\web\templates\grid\cells\multiselect.html` - The template defines each field in the grid. It provides the Multiselect component with the check box interface for selecting item(s) in the grid and performing actions over them.
* `app\code\Magento\Ui\view\base\web\templates\grid\columns\multiselect.html` - The template defines the grid header with drop-down lists and the Select All, Deselect All, and other options.

Extends all `abstract` and [Select]({{page.baseurl}}ui_comp_guide/components/ui-select.html)-specific configurations.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/multiselect</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the <code>.html</code> template of the particular field type (multiselect).</td>
    <td>String</td>
    <td><code>ui/form/element/multiselect</code></td>
  </tr>
  <tr>
    <td><code>size</code></td>
    <td>The number of options that are displayed in the multiselect UI.</td>
    <td>Number</td>
    <td>6</td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the general field <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>

#### Methods and Events

No events are generated. Any other component that can retrieve access to this component and its properties can get data and track its changes using subscription.

#### How to configure Multiselect Component already used in code

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
