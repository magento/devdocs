---
group: ui-components-guide
title: ColumnsResize component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The ColumnsResize [UI component](https://glossary.magento.com/ui-component) is an [extension](https://glossary.magento.com/extension) for the [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html) component. It provides columns resizing functionality.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `component` | The path to the component's `.js` file, relative to RequireJS. | String | `Magento_Ui/js/grid/resize` |
| `rootSelector` | The CSS selector of a table parent element. | String | `${ $.columnsProvider }:.admin__data-grid-wrap` |
| `tableSelector` | The CSS selector of a table element. The `columnSelector` and `fieldSelector` are children of the table element. | String | `${ $.rootSelector } -> table.data-grid` |
| `mainTableSelector` | The CSS selector of a main table element. The function of automatically resizing columns after changing the screen size is enabled if the `tableSelector` element is matched to the main table element. | String | `[data-role="grid"]` |
| `columnSelector` | The CSS selector of a table column element. | String | `${ $.tableSelector } thead tr th` |
| `fieldSelector` | The CSS selector of a table field element. | String | `${ $.tableSelector } tbody tr td` |

## Sources files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/resize.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/resize.js)

## Examples

### Integrate the ColumnsResize component with the Columns component

This is an example of how the ColumnsResize component integrates with the [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html) component:

```xml
<listing>
    ...
    <columns name="columns">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="resizeConfig" xsi:type="array">
                    <item name="enabled" xsi:type="boolean">true</item>
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/resize</item>
                    <item name="rootSelector" xsi:type="string">${ $.columnsProvider }:.admin__data-grid-wrap</item>
                    <item name="columnsProvider" xsi:type="string">${ $.name }</item>
                </item>
            </item>
        </argument>
        ...
        <column name="entity_id">
            <settings>
                <label translate="true">ID</label>
            </settings>
        </column>
        <column name="title">
            <settings>
                <label translate="true">Title</label>
            </settings>
        </column>
    </columns>
</listing>
```

#### Result

![ColumnsResize Component example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-resize-result.gif)
