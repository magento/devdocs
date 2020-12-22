---
group: ui-components-guide
title: ColumnsEditingClient component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The ColumnsEditingClient [UI component](https://glossary.magento.com/ui-component) is an [extension](https://glossary.magento.com/extension) for the [ColumnsEditor]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js) component. It provides functionality for saving edited data.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `component` | The path to the component's `.js` file, relative to RequireJS. | String | `Magento_Ui/js/grid/editing/client` |
| `requestConfig` | The request configuration for AJAX. | Object | `{dataType: 'json',type: 'POST'}` |
| `saveUrl` | Path to a controller that will process the data saving request. | String | `-` |
| `validateBeforeSave` | Defines whether validation executes before data saving. | Boolean | `true` |
| `validateUrl` | Path to a controller that will process the data validation request. | String | `-` |

## Sources files

Extends [`uiClass`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uiclass_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/editing/client.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/client.js)

## Examples

### Integrate the ColumnsEditingClient component with the ColumnsEditor component

This is an example of how the ColumnsEditingClient component integrates with the [ColumnsEditor]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js) component:

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="clientConfig" xsi:type="array">
                    <item name="saveUrl" xsi:type="url" path="path/to/saveController"/>
                    <item name="validateUrl" xsi:type="url" path="path/to/validateController"/>
                    <item name="validateBeforeSave" xsi:type="boolean">true</item>
                </param>
                <param name="enabled" xsi:type="boolean">true</param>
            </editorConfig>
        </settings>
        ...
    </columns>
</listing>
```

### Disable validation before saving data

This is an example of how to disable validation before saving data:

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="clientConfig" xsi:type="array">
                    <item name="saveUrl" xsi:type="url" path="path/to/saveController"/>
                    <item name="validateBeforeSave" xsi:type="boolean">false</item>
                </param>
                <param name="enabled" xsi:type="boolean">true</param>
            </editorConfig>
        </settings>
        ...
    </columns>
</listing>
```
