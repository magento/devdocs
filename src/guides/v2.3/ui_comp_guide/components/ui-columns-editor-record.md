---
group: ui-components-guide
title: ColumnsEditorRecord component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The ColumnsEditorRecord [UI component](https://glossary.magento.com/ui-component) is a container of record fields. The ColumnsEditorRecord should be used as a child of the [ColumnsEditor]({{ page.baseurl }}/ui_comp_guide/components/ui-columns-editor.html) component.

## Configuration options

| Option | Description | Type | Default Value |
| --- | --- | --- | --- |
| `component` | The path to the component's `.js` file, relative to RequireJS. | String | `Magento_Ui/js/grid/editing/record` |
| `fieldTmpl` | The path to the component’s `.html` field template. | String | `'ui/grid/editing/field'` |
| `rowTmpl` | The path to the component’s `.html` row template. | String | `'ui/grid/editing/row'` |
| `templates`.`fields` | The object that contains the configurations for field types. | Object | `{base: {...},text: {...},date: {...},select: {...}}` |
| `templates`.`fields`.`base` | The base configurations of a record field. | Object | `{parent: '${ $.$data.record.name }',name: '${ $.$data.column.index }',provider: '${ $.$data.record.name }',dataScope: 'data.${ $.$data.column.index }',imports: {disabled: '${ $.$data.record.parentName }:fields.${ $.$data.column.index }.disabled'},isEditor: true}` |
| `templates`.`fields`.`date` | The date record field configurations. | Object | `{component: 'Magento_Ui/js/form/element/date',template: 'ui/form/element/date',dateFormat: 'MMM d, y h:mm:ss a'}` |
| `templates`.`fields`.`select` | The select record field configurations. | Object | `{component: 'Magento_Ui/js/form/element/select',template: 'ui/form/element/select',options: '${ JSON.stringify($.$data.column.options) }'}` |
| `templates`.`fields`.`text` | The text record field configurations. | Object | `{component: 'Magento_Ui/js/form/element/abstract',template: 'ui/form/element/input'}` |

## Sources files

Extends [`UiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/grid/editing/record.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/record.js)
-  [app/code/Magento/Ui/view/base/web/templates/grid/editing/row.html]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/grid/editing/row.html)
-  [app/code/Magento/Ui/view/base/web/templates/grid/editing/field.html]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/grid/editing/field.html)

## Examples

### Integrate the ColumnsEditorRecord component with the ColumnsEditor component

This is an example of how the ColumnsEditorRecord component integrates with the [ColumnsEditor]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/grid/editing/editor.js) component:

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="templates" xsi:type="array">
                    <item name="record" xsi:type="array">
                        <item name="component" xsi:type="string">Magento_Ui/js/grid/editing/record</item>
                        <item name="fieldTmpl" xsi:type="string">ui/grid/editing/field</item>
                        <item name="rowTmpl" xsi:type="string">ui/grid/editing/row</item>
                    </item>
                </param>
                <param name="enabled" xsi:type="boolean">true</param>
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
        ...
    </columns>
</listing>
```

#### Result

![ColumnsEditorRecord Component example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-editor-record-result.png)

### Add custom field type to ColumnsEditorRecord

This is an example of how to add textarea and multi-select editor types to ColumnsEditorRecord component.

```xml
<listing>
    ...
    <columns name="columns">
        <settings>
            <editorConfig>
                <param name="templates" xsi:type="array">
                    <item name="record" xsi:type="array">
                        <item name="templates" xsi:type="array">
                            <item name="fields" xsi:type="array">
                                <!-- add textarea field type -->
                                <item name="textarea" xsi:type="array">
                                    <item name="component" xsi:type="string">Magento_Ui/js/form/element/textarea</item>
                                    <item name="template" xsi:type="string">ui/form/field</item>
                                </item>
                                <!-- add multiselect field type -->
                                <item name="multiselect" xsi:type="array">
                                    <item name="component" xsi:type="string">Magento_Ui/js/form/element/multiselect</item>
                                    <item name="template" xsi:type="string">ui/form/element/multiselect</item>
                                    <item name="options" xsi:type="array">
                                        <item name="0" xsi:type="array">
                                            <item name="value" xsi:type="number">1</item>
                                            <item name="label" xsi:type="string" translate="true">Option #1</item>
                                        </item>
                                        <item name="1" xsi:type="array">
                                            <item name="value" xsi:type="number">2</item>
                                            <item name="label" xsi:type="string" translate="true">Option #2</item>
                                        </item>
                                        <item name="2" xsi:type="array">
                                            <item name="value" xsi:type="number">3</item>
                                            <item name="label" xsi:type="string" translate="true">Option #3</item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </item>
                </param>
                <param name="enabled" xsi:type="boolean">true</param>
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
                    <editorType>textarea</editorType>
                </editor>
                <label translate="true">Textarea</label>
            </settings>
        </column>
        <column name="is_active" component="Magento_Ui/js/grid/columns/select">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="options" xsi:type="array">
                        <item name="0" xsi:type="array">
                            <item name="value" xsi:type="number">1</item>
                            <item name="label" xsi:type="string" translate="true">Option #1</item>
                        </item>
                        <item name="1" xsi:type="array">
                            <item name="value" xsi:type="number">2</item>
                            <item name="label" xsi:type="string" translate="true">Option #2</item>
                        </item>
                        <item name="2" xsi:type="array">
                            <item name="value" xsi:type="number">3</item>
                            <item name="label" xsi:type="string" translate="true">Option #3</item>
                        </item>
                    </item>
                </item>
            </argument>
            <settings>
                <editor>
                    <editorType>multiselect</editorType>
                </editor>
                <dataType>select</dataType>
                <label translate="true">Multiselect</label>
            </settings>
        </column>
        ...
    </columns>
</listing>
```

#### Result

![ColumnsEditorRecord Component example]({{ site.baseurl }}/common/images/ui_comps/ui-columns-editor-record-custom-field-types-result.png)
