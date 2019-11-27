---
group: ui-components-guide
title: DragAndDrop component
---

The DragAndDrop component is an [extension](https://glossary.magento.com/extension) for [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html), allowing users to change columns position in the table.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `enabled`| Whether the component is allowed to change the position of columns. | Boolean | `true` |
| `fixedX` | Whether the column has a fixed position on the X-axis. That is, whether it can be moved horizontally. | Boolean | `false` |
| `fixedY` | Whether the column has a fixed position on the Y-axis. That is, whether it can be moved vertically. | Boolean | `true` |
| `noSelectClass` | CSS class applied to the table when one of its columns is being dragged. | String | `'_no-select'` |

## Source files

Extends [`UiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [`app/code/Magento/Ui/view/base/web/js/grid/dnd.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/dnd.js)

## Examples

### Integrate the DragAndDrop component with the Listing component

This example configures the DragAndDrop component for the [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html) component and integrates it with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <columns>
        <settings>
            <dndConfig>
                <param name="enabled" xsi:type="boolean">true</param>
                <param name="fixedX" xsi:type="boolean">false</param>
                <param name="fixedY" xsi:type="boolean">true</param>
                <param name="noSelectClass" xsi:type="string">_no-select</param>
            </dndConfig>
        </settings>
        ...
    </columns>
</listing>
```

#### Result

![DateColumn Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-draganddrop-columns-result.png)

### Disable the DragAndDrop component for the Columns component

This example disables the DragAndDrop component for the [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html) component and integrates it with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <columns>
        <settings>
            <dndConfig>
                <param name="enabled" xsi:type="boolean">false</param>
            </dndConfig>
        </settings>
        ...
    </columns>
</listing>
```
