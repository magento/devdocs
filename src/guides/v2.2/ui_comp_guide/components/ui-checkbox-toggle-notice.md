---
group: ui-components-guide
title: CheckboxToggleNotice component
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The CheckboxToggleNotice component implements the [`Checkbox`]({{ page.baseurl }}/ui_comp_guide/components/ui-checkbox.html) component with the ability to switch notice according to the selected option.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | The path to the component’s JS constructor in terms of RequireJS. | String | `Magento_Ui/js/form/element/single-checkbox-toggle-notice` |
| `notices` | The array of notices that should be associated by key with selected option value. | Array | `[]` |
| `tracks`.`notice` | Flags that enable tracking for the `notice` option. By default, the `notice` option is tracked to allow updating the notice message in the template. | Boolean | `true` |

## Source files

Extends the [`Checkbox`]({{ page.baseurl }}/ui_comp_guide/components/ui-checkbox.html) component:

-  [app/code/Magento/Ui/view/base/web/js/form/element/single-checkbox-toggle-notice.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/single-checkbox-toggle-notice.js)

## Example

### Integrate the CheckboxToggleNotice component with the Form component

This example integrates the CheckboxToggleNotice component with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component:

```xml
<form>
    ...
    <fieldset>
        ...
        <field name="checkbox_toggle_notice_example" component="Magento_Ui/js/form/element/single-checkbox-toggle-notice" formElement="checkbox">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="default" xsi:type="number">0</item>
                    <item name="notices" xsi:type="array">
                        <item name="0" xsi:type="string" translate="true">Notice #1</item>
                        <item name="1" xsi:type="string" translate="true">Notice #2</item>
                    </item>
                </item>
            </argument>
            <settings>
                <dataType>boolean</dataType>
                <label translate="true">Checkbox Toggle Notice</label>
            </settings>
            <formElements>
                <checkbox>
                    <settings>
                        <valueMap>
                            <map name="false" xsi:type="number">0</map>
                            <map name="true" xsi:type="number">1</map>
                        </valueMap>
                        <prefer>toggle</prefer>
                    </settings>
                </checkbox>
            </formElements>
        </field>
    </fieldset>
</form>
```

#### Result

![CheckboxToggleNotice with Selected Option #1 Component Example]({{ site.baseurl }}/common/images/ui_comps/checkbox-toggle-notice-1-result.png)
![CheckboxToggleNotice with Selected Option #2 Component Example]({{ site.baseurl }}/common/images/ui_comps/checkbox-toggle-notice-2-result.png)
