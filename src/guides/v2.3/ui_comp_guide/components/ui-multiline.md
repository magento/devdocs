---
group: ui-components-guide
title: Multiline component
---

The Multiline component is a collection of form elements that displays multiple fields of the same type. For example, the **Street Address** fields.

## Configuration option

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `additionalClasses` | Sets custom classes to the component's DOM block. | Object | `{}` |
| `breakLine` | Adds a CSS class to multiline's DOM element. When set to `true`, the `admin__control-fields` class is added, when `false` - `admin__control-grouped`. | Boolean | `true` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/form/components/group` |
| `fieldTemplate` | The path to `.html` template that will be used for all child components rendered by the multiline component. | String | `ui/form/field` |
| `label` | Component's UI label. | String | `''` |
| `required` | Defines whether the rendered field is required. | Boolean | `false` |
| `showLabel` | Defines if the label is rendered. | Boolean | `''` |
| `template` | The path to the general field's `.html` template. | String | `'ui/group/group'` |
| `validateWholeGroup` | Adds a block with validation results for all fields in the group. | Boolean | `false` |
| `visible` | Initial component's visibility. When set to "false", the `display: none` CSS style is added to the component's DOM block. | Boolean | `true` |

## Source files

Extends [`UiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

-  [app/code/Magento/Ui/view/base/web/js/form/components/group.js]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/js/form/components/group.js)
-  [app/code/Magento/Ui/view/base/web/templates/group/group.html]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/view/base/web/templates/group/group.html)
-  [app/code/Magento/Ui/Component/Form/Element/Multiline.php]({{ site.mage2bloburl }}/{{page.guide_version}}/app/code/Magento/Ui/Component/Form/Element/Multiline.php)

## Example

```xml
    <form>
    ...
        <container name="custom_group" component="Magento_Ui/js/form/components/group" sortOrder="20">
            <argument name="data" xsi:type="array">
                <item name="type" xsi:type="string">group</item>
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string" translate="true">Custom Group</item>
                    <item name="required" xsi:type="boolean">true</item>
                    <item name="dataScope" xsi:type="boolean">false</item>
                    <item name="validateWholeGroup" xsi:type="boolean">true</item>
                </item>
            </argument>
            <field name="select_element" formElement="select">
                <settings>
                    <dataType>number</dataType>
                    <labelVisible>false</labelVisible>
                </settings>
                <formElements>
                    <select>
                        <settings>
                            <options class="Magento\Config\Model\Config\Source\Yesno"/>
                        </settings>
                    </select>
                </formElements>
            </field>
            <field name="checkbox_example" formElement="checkbox">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="default" xsi:type="number">0</item>
                    </item>
                </argument>
                <settings>
                    <dataType>boolean</dataType>
                </settings>
                <formElements>
                    <checkbox>
                        <settings>
                            <description translate="true">Checkbox example</description>
                            <valueMap>
                                <map name="false" xsi:type="string">0</map>
                                <map name="true" xsi:type="string">1</map>
                            </valueMap>
                            <prefer>checkbox</prefer>
                        </settings>
                    </checkbox>
                </formElements>
            </field>
            <field name="text_field" formElement="input">
                <settings>
                    <validation>
                        <rule name="required-entry" xsi:type="boolean">true</rule>
                    </validation>
                    <dataType>text</dataType>
                </settings>
            </field>
        </container>
    ...
    </form>
```

## Result

![Multiline Component Example]({{ site.baseurl }}/common/images/ui_comps/multiline-component-result.png)
