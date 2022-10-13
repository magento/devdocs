---
group: ui-components-guide
title: MultiselectColumn component
---

The MultiselectColumn component implements a column with checkboxes for selecting records. It also provides controls for selecting multiple records.

MultiselectColumn is a child of the [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) and is rendered in its view. Like any component, it can hold the sort order value, which influences the order of all its child elements.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `bodyTmpl` | Path to the template that is used to render a column's field in the table's body. | String | `ui/grid/cells/multiselect` |
| `controlVisibility` | Whether a user can control column's visibility handled by the [ColumnsControls component]({{ page.baseurl }}/ui_comp_guide/components/ui-columnscontrols.html). | String | `false` |
| `draggable` | Defines if a user can change column's position in the table by grabbing column's header and dragging it across the table. | Boolean | `false` |
| `fieldClass` | Additional CSS classes added to the column's field elements. | {[name: string]: boolean} | `{'data-grid-checkbox-cell': true}` |
| `headerTmpl` | Path to the `.html` template for the column's header. | String | `ui/grid/columns/multiselect` |
| `indexField` | The name of the field that should be associated with the unique value of the listing row. The name of a ID field is commonly used for this option. | String | `-` |
| `preserveSelectionsOnFilter` | Whether to preserve selected items when a new filter value is applied. | Boolean | `false` |
| `sortable` | Whether a column's fields can be used to sort records in the table. | Boolean | `false` |

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

Example configuration modifications:

*  Redefining the link to the template

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

*  Redefining the name of the property which represents record identifier

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

*  Redefining a property data source

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

*  Redefine the link to constructor:

```xml
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Products/js/grid/columns/multiselect</item>
        </item>
    </argument>
</column>
```

### Integrate the MultiselectColumn component with the Listing component

This example integrates the MultiselectColumn component with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    <columns>
        <selectionsColumn name="ids">
            <settings>
                <indexField>id</indexField>
            </settings>
        </selectionsColumn>
    </columns>
</listing>
```

#### Result

![MultiselectColumn Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-multiselectcolumn-result.png)

## Source files

Extends [`Column`]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html):

*  [app\code\Magento\Ui\view\base\web\js\grid\columns\multiselect.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/multiselect.js)
*  [app\code\Magento\Ui\view\base\web\templates\grid\cells\multiselect.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/cells/multiselect.html) - defines each field in the grid; provides the Multiselect component with the checkbox interface for selecting item(s) in the grid and performing actions over them.
*  [app\code\Magento\Ui\view\base\web\templates\grid\columns\multiselect.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/columns/multiselect.html) - defines the grid header with dropdown lists and Select All, Deselect All, and other options.

### Methods and Events

No events are generated. Any other component that can retrieve access to this component and its properties can get data and track its changes using subscription.
