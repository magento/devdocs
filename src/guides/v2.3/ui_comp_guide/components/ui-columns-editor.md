---
group: ui-components-guide
title: ColumnsEditor component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The ColumnsEditor [UI component](https://glossary.magento.com/ui-component) is an [extension](https://glossary.magento.com/extension) for the [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html) component, allowing users to select and edit grid records data.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `bulkConfig` | Configurations for the [bulk]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/bulk.js) component. | Object | `{component: 'Magento_Ui/js/grid/editing/bulk',name: '${ $.name }_bulk',editorProvider: '${ $.name }',columnsProvider: '${ $.columnsProvider }'}` |
| `bulkEnabled` | Enable bulk editing component. | Boolean | `true` |
| `clientConfig` | Configurations for the [client]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/client.js) component. | Object | `{component: 'Magento_Ui/js/grid/editing/client',name: '${ $.name }_client'}` |
| `headerButtonsTmpl` | Path to the `.html` template for the header buttons. | String | `'ui/grid/editing/header-buttons'` |
| `multiEditingButtons` | Enable multi editing buttons. | Boolean | `true` |
| `rowButtonsTmpl` | Path to the `.html` template for the row buttons. | String | `'ui/grid/editing/row-buttons'` |
| `successMsg` | The success message which appear when the records data successfully saved. | String | `$t('You have successfully saved your edits.')` |
| `templates`.`record` | Configurations for the [record]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/record.js) component. | Object | `{parent: '${ $.$data.editor.name }',name: '${ $.$data.recordId }',component: 'Magento_Ui/js/grid/editing/record',columnsProvider: '${ $.$data.editor.columnsProvider }',editorProvider: '${ $.$data.editor.name }',preserveFields: {'${ $.$data.editor.indexField }': true}}` |
| `viewConfig` | Configurations for the [EditorView]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor-view.js) component. | Object | `{component: 'Magento_Ui/js/grid/editing/editor-view',name: '${ $.name }_view',model: '${ $.name }',columnsProvider: '${ $.columnsProvider }'}` |

## Sources files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/dynamic-rows/dnd.js)

## Examples

### Integrate the ColumnsEditor component with the Columns component

This is an example of how the ColumnsEditor component integrates with the [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html) component:

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="indexField" xsi:type="string">entity_id</param>
                <param name="enabled" xsi:type="boolean">true</param>
                <param name="selectProvider" xsi:type="string">${ $.columnsProvider }.ids</param>
            </editorConfig>
        </settings>
        <selectionsColumn name="ids">
            <settings>
                <indexField>entity_id</indexField>
            </settings>
        </selectionsColumn>
        <column name="entity_id">
            <settings>
                <label translate="true">ID</label>
            </settings>
        </column>
        <column name="title">
            <settings>
                <filter>text</filter>
                <editor>
                    <validation>
                        <rule name="required-entry" xsi:type="boolean">true</rule>
                    </validation>
                    <editorType>text</editorType>
                </editor>
                <label translate="true">Title</label>
            </settings>
        </column>
        <column name="is_active" component="Magento_Ui/js/grid/columns/select">
            <settings>
                <options class="Magento\Config\Model\Config\Source\Yesno"/>
                <filter>select</filter>
                <editor>
                    <editorType>select</editorType>
                </editor>
                <dataType>select</dataType>
                <label translate="true">Status</label>
            </settings>
        </column>
    </columns>
</listing>
```

#### Result

![DynamicRowsDragAndDrop Component example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-editor-result.png)
