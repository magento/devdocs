---
group: ui-components-guide
title: Container component
---

The Container [UI component](https://glossary.magento.com/ui-component) can be used for wrapping particular fields or other ui-components in it with some description text. It can also be used without any field but just to display a notice or description of a fieldset. 

## Configuration options

Component's options are set in the UI-component's configuration `.xml` file as follows:

```xml
<container name="%name%">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <!-- Configurable options are specified here -->
            <item name="template" xsi:type="%type%">%value%</item>
            <item name="sortOrder" xsi:type="%type%">%value%</item>
            <item name="label" xsi:type="%type%">%value%</item>
            <item name="additionalClasses" xsi:type="%type%">%value%</item>
            <item name="text" xsi:type="%type%" translate="%boolean%">%value%</item>
        </item>
    </argument>
</container>
```

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `template` | Path to the component's `.html` template. | String | `ui/form/components/complex` |
| `sortOrder` | Description for the Container. | Number | `0` |
| `label` | Label displayed for the Container. | String | `''` |
| `additionalClasses` | CSS class(es) applied to the root node of the component's `.html` template. | String | `''` |
| `text` | Description for the Container. | String | `''` |

## Examples

### Container with a component

The following sample is an example of the Container component contain a `Select` component.

```xml
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
```
#### Result

![Container with a field]({{ site.baseurl }}/common/images/ui_comps/container-with-field-result.png)

### Container without any fields

The following sample is an example of the Container component only.

```xml
<container name="container_name">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="template" xsi:type="string">ui/form/components/complex</item>
            <item name="sortOrder" xsi:type="number">10</item>
            <item name="label" xsi:type="string">Container Label</item>
            <item name="additionalClasses" xsi:type="string">sample-additional-class</item>
            <item name="text" xsi:type="string" translate="true"><![CDATA[
                <p>
                    Change these settings if you do not want to apply the global display configurations.
                </p>
            ]]></item>
        </item>
    </argument>
</container>
```

#### Result

The `text` of this container is styled using the `additionalClasses` value, i.e. `sample-additional-class`.

![Container with out any fields]({{ site.baseurl }}/common/images/ui_comps/container-result.png)