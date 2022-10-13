---
group: ui-components-guide
title: ColumnsEditingBulk component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The ColumnsEditingBulk [UI component](https://glossary.magento.com/ui-component) is an [extension](https://glossary.magento.com/extension) for the [ColumnsEditor]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js) component. It provides the bulk update functionality.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `template` | The path to the component’s `.html` template. | String | `'ui/grid/editing/bulk'` |
| `active` | Whether multi editing is active. | Boolean | `true` |
| `component` | The path to the component's `.js` file, relative to RequireJS. | String | `Magento_Ui/js/grid/editing/bulk` |

## Sources files

Extends [`record`]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/record.js):

-  [app/code/Magento/Ui/view/base/web/js/grid/editing/bulk.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/bulk.js)
-  [app/code/Magento/Ui/view/base/web/templates/grid/editing/bulk.html]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/grid/editing/bulk.html)

## Examples

### Integrate the ColumnsEditingBulk component with the ColumnsEditor component

This is an example of how the ColumnsEditingBulk component integrates with the [ColumnsEditor]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js) component:

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="bulkConfig" xsi:type="array">
                    <item name="component" xsi:type="string">Magento_Ui/js/grid/editing/bulk</item>
                    <item name="template" xsi:type="string">ui/grid/editing/bulk</item>
                </param>
                <param name="bulkEnabled" xsi:type="boolean">true</param>
                <param name="enabled" xsi:type="boolean">true</param>
            </editorConfig>
        </settings>
        ...
    </columns>
</listing>
```

#### Result

![ColumnsEditingBulk Component example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-editing-bulk-result.png)

### Disable the ColumnsEditingBulk component on the ColumnsEditor component

This is an example of how the ColumnsEditingBulk component disables the [ColumnsEditor]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js) component:

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="bulkEnabled" xsi:type="boolean">false</param>
                <param name="enabled" xsi:type="boolean">true</param>
            </editorConfig>
        </settings>
        ...
    </columns>
</listing>
```
