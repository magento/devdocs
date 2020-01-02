---
group: ui-components-guide
title: Radioset component
---

The Radioset component is a shortcut for [Checkboxset]({{ page.baseurl }}/ui_comp_guide/components/ui-checkboxset.html), with the input type set to the radio button.

## Configuration options

|Option|Description|Type|Default|
|--- |--- |--- |--- |
|`component`|The path to the component’s `.js` file in terms of RequireJS.|String|`Magento_Ui/js/form/element/checkbox-set`|
|`multiple`|Set the input type in the UI: true for checkbox, false for radio button.|Boolean|`false`|
|`options`|The array of the options to be displayed in the list for selection.|Array|`[]`|
|`template`|The path to the component’s `.html` template.|String|`ui/form/element/checkbox-set`|

## Source files

Extends [`Abstract`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/abstract.js):

-  [`app/code/Magento/Ui/view/base/web/js/form/element/checkbox-set.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/checkbox-set.js)
-  [`app/code/Magento/Ui/view/base/web/templates/form/element/checkbox-set.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/checkbox-set.html)

## Examples

### Integrate the Radioset component with the Form component

This is an example of how the Radioset component integrates with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component:

```xml
<form>
    ...
    <fieldset>
        ...
        <radioset name="radioset_example">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="additionalInfo" xsi:type="string">Additional information</item>
                </item>
            </argument>
            <settings>
                <label translate="true">Radioset Component Example</label>
                <options>
                    <option name="0" xsi:type="array">
                        <item name="value" xsi:type="number">1</item>
                        <item name="label" xsi:type="string" translate="true">Option #1</item>
                    </option>
                    <option name="1" xsi:type="array">
                        <item name="value" xsi:type="number">2</item>
                        <item name="label" xsi:type="string" translate="true">Option #2</item>
                    </option>
                    <option name="2" xsi:type="array">
                        <item name="value" xsi:type="number">3</item>
                        <item name="label" xsi:type="string" translate="true">Option #3</item>
                    </option>
                </options>
            </settings>
        </radioset>
    </fieldset>
</form>
```

#### Result

![Radioset Component Example]({{ site.baseurl }}/common/images/ui_comps/ui-radioset-result.png)
