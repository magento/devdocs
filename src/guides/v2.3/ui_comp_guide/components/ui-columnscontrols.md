---
group: ui-components-guide
title: ColumnsControls component
---

The ColumnsControls component is a collection of columns. It provides an interface for showing and hiding columns. The interface contains:

*  The total number of all available columns in a grid.
*  The number of columns currently active/displayed.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `minVisible` | Minimum number of columns that must be visible. | Number | `1` |
| `maxVisible` | Maximum number of columns that can be visible. | Number | `30` |
| `template` | The path to the component’s `.html` template. | String | `ui/grid/controls/columns` |

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

*  [`app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)
*  [`app/code/Magento/Ui/view/base/web/templates/grid/controls/columns.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/controls/columns.html)

## Examples

### Add ColumnsControls component to Listing basic component

```xml
<listing>
    ...
    <listingToolbar>
        ...
         <columnsControls name="columns_controls">
            <settings>
                <minVisible>1</minVisible>
                <maxVisible>3</maxVisible>
            </settings>
         </columnsControls>
    </listingToolbar>
    ...
</listing>
```

#### Result

![ColumnsControls component example]({{ site.baseurl }}/common/images/ui_comps/columns-controls-result.png)
