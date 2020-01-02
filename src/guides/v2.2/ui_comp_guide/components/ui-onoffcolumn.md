---
group: ui-components-guide
title: OnOffColumn component
---

The OnOffColumn component is a decorator for [MultiselectColumn]({{ page.baseurl }}/ui_comp_guide/components/ui-multiselectcolumn.html). It displays toggle switch elements instead of checkboxes.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/grid/columns/onoff` |
| `bodyTmpl` | Path to the template that is used to render a column's field in the table's body. | String | `ui/grid/cells/onoff` |
| `fieldClass` | Additional CSS classes added to the column's field elements. | {<br />`[name: string]: boolean`<br />} | {<br />'`admin__scope-old': true,`<br />`'data-grid-onoff-cell': true,`<br />`'data-grid-checkbox-cell': false`<br />} |
| `headerTmpl` | Path to the `.html` template for the column's header. | String | `ui/grid/columns/onoff` |

## Source files

Extends [`MultiselectColumn`]({{ page.baseurl }}/ui_comp_guide/components/ui-multiselectcolumn.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/columns/onoff.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/onoff.js)
-  [app/code/Magento/Ui/view/base/web/templates/grid/cells/onoff.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/cells/onoff.html)
-  [app/code/Magento/Ui/view/base/web/templates/grid/columns/onoff.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/columns/onoff.html)

## Examples

### Integrate the OnOffColumn component with the Listing component

This example integrates the OnOffColumn component with the [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html) component:

```xml
<listing>
    ...
    <columns>
        ...
        <column name="on_off_column_example_1" component="Magento_Ui/js/grid/columns/onoff">
            <settings>
                <dataType>select</dataType>
            </settings>
        </column>
    </columns>
</listing>
```

#### Result

![OnOffColumn Component example]({{ site.baseurl }}/common/images/ui_comps/ui-onoffcolumn-result.png)
