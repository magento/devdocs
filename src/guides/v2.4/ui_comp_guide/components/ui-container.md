---
group: ui-components-guide
title: Container component
contributor_name: Jehangir Wahid
contributor_link: https://github.com/Jehangir-Wahid
---

The Container [UI component](https://glossary.magento.com/ui-component) is used for wrapping fields or other ui-components with descriptive text. It may be used without a field to display a notice or description of a fieldset.

## Configuration options

Component options are set in the UI-component's configuration `.xml` file.

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `component` | Path to the component's `.js` file. | String | `''` |
| `template` | Path to the component's `.html` template. | String | `ui/form/components/complex` |
| `sortOrder` | Sort order of the Container. | Number | `0` |
| `label` | Label displayed for the Container. | String | `''` |
| `additionalClasses` | CSS class(es) applied to the root node of the component's `.html` template. | String | `''` |
| `text` | Description for the Container. | String | `''` |

## Source files

-  [`Magento/Ui/view/base/web/templates/form/components/complex.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/components/complex.html)

## Examples

### Container with a component

The following is an example of the Container component on a `Select` component.
The `<container>` node must be located in the scope of the `<fieldset>` node.

```xml
<fieldset name="fieldset_name">
    ...
    <container name="container_name">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="template" xsi:type="string">ui/form/components/complex</item>
                <item name="sortOrder" xsi:type="number">10</item>
                <item name="label" xsi:type="string">Container Label</item>
                <item name="additionalClasses" xsi:type="string">sample-additional-class</item>
                <item name="text" xsi:type="string" translate="true"><![CDATA[
                    <p>
                        Container Text.
                    </p>
                ]]></item>
            </item>
        </argument>
        <field name="sort_direction"
               sortOrder="20"
               formElement="select">
            <settings>
                <dataType>text</dataType>
                <label translate="true">Sort Direction</label>
                <dataScope>data.sort_direction</dataScope>
            </settings>
            <formElements>
                <select>
                    <settings>
                        <options class="Vendor\Module\Model\Source\Config\SortDirection" />
                        <caption translate="true">-- Please Select --</caption>
                    </settings>
                </select>
            </formElements>
        </field>
    </container>
    ...
</fieldset>
```
#### Result

![Container with a field]({{ site.baseurl }}/common/images/ui_comps/container-with-field-result.png)

### Container without any fields

The following is an example of the Container component only.

```xml
<fieldset name="fieldset_name">
    ...
    <container name="container_name">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="template" xsi:type="string">ui/form/components/complex</item>
                <item name="sortOrder" xsi:type="number">10</item>
                <item name="label" xsi:type="string">Notice</item>
                <item name="additionalClasses" xsi:type="string">sample-additional-class</item>
                <item name="text" xsi:type="string" translate="true"><![CDATA[
                    <p>
                        Change these settings if you do not want to apply the global display configurations.
                    </p>
                ]]></item>
            </item>
        </argument>
    </container>
    ...
</fieldset>
```

#### Result

The `text` of this container is styled using the `additionalClasses` value, i.e. `sample-additional-class`.

![Container with out any fields]({{ site.baseurl }}/common/images/ui_comps/container-result.png)
