---
group: ui-components-guide
title: MultiselectColumn component
---

The MultiselectColumn component implements a column with checkboxes for selecting records. It also provides controls for selecting multiple records.

MultiselectColumn is a child of the [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) and is rendered in its view. Like any component, it can hold the sort order value, which influences the order of all its child elements.

## Configuration options

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
    <td>Whether a user can control column's visibility handled by the <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-columnscontrols.html">ColumnsControls component</a>.</td>
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
    <td>Additional CSS classes added to the column's field elements.</td>
    <td>{<br />[name: string]: Boolean<br />}</td>
    <td>{<br /><code>'data-grid-checkbox-cell': true</code><br />}</td>
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

## Examples

### Configure a MultiselectColumn component already used in code

Sample of code where component configurations are performed:

Current implementation:

```xml
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
```

Example of configuration modifications:

* Redefining the link to the template

```xml
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="headerTmpl" xsi:type="string">product/grid/columns/multiselect</item>
        </item>
    </argument>
</column>
```

* Redefining the name of the property which represents record identifier

```xml
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="indexField" xsi:type="string">product_id</item>
        </item>
    </argument>
</column>
```

* Redefining a property data source

```xml
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
```

### Add a new component

Instance Replacement: One Instance of a Component

* Redefine the link to constructor:

```xml
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Products/js/grid/columns/multiselect</item>
        </item>
    </argument>
</column>
```

## Source files

Extends [`Column`]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html):

- [app\code\Magento\Ui\view\base\web\js\grid\columns\multiselect.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/multiselect.js)
- [app\code\Magento\Ui\view\base\web\templates\grid\cells\multiselect.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/cells/multiselect.html) - defines each field in the grid; provides the Multiselect component with the checkbox interface for selecting item(s) in the grid and performing actions over them.
- [app\code\Magento\Ui\view\base\web\templates\grid\columns\multiselect.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/columns/multiselect.html) - defines the grid header with dropdown lists and Select All, Deselect All, and other options.

### Methods and Events

No events are generated. Any other component that can retrieve access to this component and its properties can get data and track its changes using subscription.
