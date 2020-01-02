---
group: ui-components-guide
title: DynamicRowsRecord component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The DynamicRowsRecord component is a container of record fields. The DynamicRowsRecord should be used as a child of the [DynamicRows]({{ page.baseurl }}/ui_comp_guide/components/ui-dynamicrows.html) component.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `disabled` | The initial state of the component. When set to `true`, users cannot take action on the element. | Boolean | `true` |
| `headerLabel` | The label of the record. It is used as a record `label` when the `label` option is not initialized. | String | `''` |
| `label` | The label of the record. | String | `''` |
| `visible` | Initial component's visibility. When set to `false`, the `"display: none"` CSS style is added to the component's DOM block. | Boolean | `true` |

## Sources files

Extends [`UiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/dynamic-rows/record.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/dynamic-rows/record.js)

## Examples

```xml
<form>
...
    <dynamicRows name="dynamic_rows">
        <settings>
            ...
        </settings>
        <container name="record" component="Magento_Ui/js/dynamic-rows/record">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string" translate="true">Record Example</item>
                    <item name="disabled" xsi:type="boolean">false</item>
                    <item name="visible" xsi:type="boolean">true</item>
                    <item name="componentType" xsi:type="string">container</item>
                </item>
            </argument>
            <field name="field_1" formElement="input">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="fit" xsi:type="boolean">false</item>
                    </item>
                </argument>
                <settings>
                    <validation>
                        <rule name="required-entry" xsi:type="boolean">true</rule>
                    </validation>
                    <dataType>text</dataType>
                    <label>Field #1</label>
                </settings>
            </field>
            <field name="field_2" formElement="input">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="fit" xsi:type="boolean">false</item>
                    </item>
                </argument>
                <settings>
                    <validation>
                        <rule name="required-entry" xsi:type="boolean">true</rule>
                    </validation>
                    <dataType>text</dataType>
                    <label>Field #2</label>
                </settings>
            </field>
            <actionDelete template="Magento_Backend/dynamic-rows/cells/action-delete">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="fit" xsi:type="boolean">false</item>
                    </item>
                </argument>
                <settings>
                    <additionalClasses>
                        <class name="some-class">true</class>
                    </additionalClasses>
                    <dataType>text</dataType>
                    <label>Actions</label>
                    <componentType>actionDelete</componentType>
                </settings>
            </actionDelete>
        </container>
    </dynamicRows>
...
</form>
```

## Result

![DynamicRows Component with Record Component example]({{ site.baseurl }}/common/images/ui_comps/dynamicrows-record-result.png)
