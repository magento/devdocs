---
group: ui-components-guide
title: Expandable Column component
---

The Expandable Column [UI component](https://glossary.magento.com/ui-component) is an [extension](https://glossary.magento.com/extension) for [Column]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html). It alphabetically sorts the options associated with a record/row and renders several options (the number is defined in configuration) into a cell. The full list of options is displayed in a tooltip implemented by the Tooltip UI component `<Magento_Ui_module_dir>/view/base/web/js/lib/knockout/bindings/tooltip.js`.

The Expandable Column component can be used in [Admin](https://glossary.magento.com/admin) and the [storefront](https://glossary.magento.com/storefront).

## Configuration options
<table>
    <tr>
        <th>Option</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
    </tr>
    <tr>
        <td><code>bodyTmpl</code></td>
        <td>Path to the template used for rendering the column's fields in the table's body.</td>
        <td>String</td>
        <td><code>ui/grid/cells/expandable</code></td>
    </tr>
    <tr>
        <td><code>tooltipTmpl</code></td>
        <td>Path to the template used for rendering the component's tooltip content template.</td>
        <td>String</td>
        <td><code>ui/grid/cells/expandable/content</code></td>
    </tr>
    <tr>
        <td><code>visibeItemsLimit</code></td>
        <td>A number of options to display in a cell.</td>
        <td>String</td>
        <td><code>'5'</code></td>
    </tr>
    <tr>
        <td><code>tooltipTitle</code></td>
        <td>A title for the tooltip.</td>
        <td>String</td>
        <td />
    </tr>
</table>

Component's options are set in the configuration `.xml` file as follows:

```xml
<column name="ids" class="Magento\Ui\Component\MassAction\Columns\Column">
    <argument name="data" xsi:type="array">
        <item name="options" xsi:type="object">Magento\Catalog\Model\Product\Attribute\Source\Status</item>
        <item name="config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Ui/js/grid/columns/expandable</item>
            <item name="tooltipTitle" xsi:type="string">Tooltip Title</item>
            <item name="visibeItemsLimit" xsi:type="number">5</item>
        </item>
    </argument>
</column>
```

## Dependencies

This component has a dependency on the Column component, `<Magento_Ui_module_dir>/view/base/web/js/grid/columns/column.js`.

## Source files

- [`<Magento_Ui_module_dir>/view/base/web/js/grid/columns/expandable.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/expandable.js)
- [`<Magento_Ui_module_dir>/view/base/web/templates/grid/cells/expandable.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/cells/expandable.html)
- [`<Magento_Ui_module_dir>/view/base/web/templates/grid/cells/expandable/content.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/cells/expandable/content.html)

### Methods and events

The following [API](https://glossary.magento.com/api) methods are available:

- `getFullLabel()` - gets a label from a full list of options.
- `getShortLabel()` - gets a label from a list of options limited by `visibeItemsLimit` value.
- `getLabelsArray()` - extracts an array of labels associated with provided values and sorts these labels alphabetically.
- `isExpandable()` - checks if the amount of options associated with a record is greater than a `visibeItemsLimit` value.
- `flatOptions()` - transforms the tree options structure to a linear array.
