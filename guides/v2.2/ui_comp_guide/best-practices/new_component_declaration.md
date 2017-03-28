---
layout: default
group: UI_Components_guide
subgroup: best practices
title: Declare a custom UI component
menu_title: Declare a custom UI component
menu_order: 2
version: 2.2
github_link: ui_comp_guide/best-practices/new_component_declaration.md
---

Declaring the custom UI component is a part of a bigger task of creating a custom UI component, and it refers to creating the XML configuration of your custom component.

The most important thing to remember about this declaration is:
All custom or extended components must be declared using the `<component>` or `<container>` node.

The `<component>` node is used for declaring simple components (for example, the Field component). `<component>` uses the [uiElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) constructor by default.

The `<container>` node is used for declaring components that are collections (for example, the Fieldset component). `<container>` uses the [uiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) constructor by default.

There are no mandatory attributes for these nodes. The following optional attributes are available:

- `component`: link to component JavaScript constructor
- `class`: link to component PHP class
- `template`: link to component html template
- `provider`: link to component data provider
- `sortOrder`: component's sort order
- `displayArea`: renders the component in the location that was declared in the layout

<p class="q">need to clarify displayArea</p>

## Example
For example we need to extend base functionality of the Select component and add additional configuration option to enable the custom functionality.

The configuration of "select" component looks like:

{%highlight xml%}
        <field name="sendemail_store_id" formElement="select">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">customer</item>
                </item>
            </argument>
            <settings>
                <dataType>number</dataType>
                <label translate="true">Send Welcome Email From</label>
                <imports>
                    <link name="value">${ $.provider }:data.customer.store_id</link>
                </imports>
            </settings>
            <formElements>
                <select>
                    <settings>
                        <options class="Magento\Store\Model\System\Store"/>
                    </settings>
                </select>
            </formElements>
        </field>
{%endhighlight%}

The configuration of your custom "select" component should look like:

{%highilght xml%}
        <field name="sendemail_store_id" formElement="select">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">customer</item>
                </item>
            </argument>
            <settings>
                <dataType>number</dataType>
                <label translate="true">Send Welcome Email From</label>
                <imports>
                    <link name="value">${ $.provider }:data.customer.store_id</link>
                </imports>
            </settings>
            <formElements>
                <component component="path/to/your/custom/component">
                    <arguments name="data" xsi:type="array">
                        <item name="options" xsi:type="">Magento\Store\Model\System\Store</item>
                        <item name="config" xsi:type="array">
                            <item name="yourCustomPropertyName" xsi:type="string">yourCustomPropertyValue</item>
                        </item>
                    </arguments>
                </component>
                <select>
                    <settings>
                        <options class="Magento\Store\Model\System\Store"/>
                    </settings>
                </select>
            </formElements>
        </field>
```

As we can see, node "select" is removed and instead of it "container" node is added. In "container" node "component" attribute
is used. In "component" attribute the link to custom JS constructor file is declared. 
Inside "component" node arbitrary structure is used to declare options.

The same is to fieldset.

Fiedset customization:

```xml
    <fieldset name="customer">
        <settings>
            <label translate="true">Account Information</label>
        </settings>
        <field name="taxvat" formElement="input">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">customer</item>
                </item>
            </argument>
            <settings>
                <dataType>text</dataType>
                <visible>true</visible>
            </settings>
        </field>
        <field name="gender" formElement="select">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">customer</item>
                </item>
            </argument>
            <settings>
                <dataType>text</dataType>
                <visible>true</visible>
            </settings>
        </field>
    </fieldset>
```

```xml
    <container name="customer" component="path/to/your/custom/component">
        <arguments name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="yourCustomProperty" xsi:type="string">yourCustomValue</item>                 
            </item>
        </arguments>
        <settings>
            <label translate="true">Account Information</label>
        </settings>
        <field name="taxvat" formElement="input">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">customer</item>
                </item>
            </argument>
            <settings>
                <dataType>text</dataType>
                <visible>true</visible>
            </settings>
        </field>
        <field name="gender" formElement="select">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">customer</item>
                </item>
            </argument>
            <settings>
                <dataType>text</dataType>
                <visible>true</visible>
            </settings>
        </field>
    </container>
```

###Important note:
1) Now **Magento** supports two approaches of declaring UI components configuration, but in future releases arbitrary 
approach will deprecated and will be not supported.
2) In current version, during XML files merging, arbitrary approach has higher priority compared to semantic approach.
3) Required sequence is used.
<code></br>
    a) <*argument/*> node.</br>
    b) <*settings/*> node.</br>
    c) <*childComponent*/> node.
</code>