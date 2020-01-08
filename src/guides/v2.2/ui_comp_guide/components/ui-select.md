---
group: ui-components-guide
title: Select component
---

The Select component provides the interface for a list or a data set. With this component, the user can select only one item.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `caption` | Caption for DOM select element. | String | `''` |
| `elementTmpl` | The path to the `.html` template of the particular type of field (select). | String | `ui/form/element/select` |
| `options` | The array of the options to be displayed in the list for selection. | Array | `[]` |
| `component` | The path to the component’s `.js` file in terms of RequireJS. | String | `Magento_Ui/js/form/element/select` |
| `template` | The path to the general field `.html` template. | String | `ui/form/field` |

## Source files

Extends [`Abstract`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js):

-  [app/code/Magento/Ui/view/base/web/js/form/element/select.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/select.js)

## Example

```xml
<form>
    ...
    <fieldset>
        ...
        <field name="select_example" formElement="select">
            <settings>
                <dataType>text</dataType>
                <label translate="true">Select Example</label>
                <dataScope>select_example</dataScope>
            </settings>
            <formElements>
                <select>
                    <settings>
                        <options>
                            <option name="1" xsi:type="array">
                                <item name="value" xsi:type="string">1</item>
                                <item name="label" xsi:type="string">Option #1</item>
                            </option>
                            <option name="2" xsi:type="array">
                                <item name="value" xsi:type="string">2</item>
                                <item name="label" xsi:type="string">Option #2</item>
                            </option>
                            <option name="3" xsi:type="array">
                                <item name="value" xsi:type="string">3</item>
                                <item name="label" xsi:type="string">Option #3</item>
                            </option>
                        </options>
                        <caption translate="true">-- Please Select --</caption>
                    </settings>
                </select>
            </formElements>
        </field>
        ...
    </fieldset>
    ...
</form>
```

## Result

![Select Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-select-result.png)
![Select Component Options Example]({{ site.baseurl }}/common/images/ui_comps/ui-select-options-result.png)
