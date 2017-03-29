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

## Overview
Declaring the custom UI component refers to creating the XML configuration of your custom component, and is a part of a bigger task of creating a custom UI component.

This topic describes the XML elements that must be used for declaring the custom component.  

## XML elements used for declaring the custom component

A custom UI component can be declared using one of the following elements: `<component>` or `<container>`.

The `<component>` node is typically used for declaring simple custom components, that do not have other nested components. `<component>` uses the [uiElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) constructor by default.

The `<container>` node is typically used for declaring custom components that are collections, or in other words, can have nested components. `<container>` uses the [uiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) constructor by default.

### Attributes you can use
The `<container>` and `<component>` elements have no mandatory attributes. The following optional attributes are available for both these elements:

- `component`: link to the component's JavaScript constructor.
- `class`: link to the component's PHP class.
- `template`: link to component's `.html` template.
- `provider`: link to component's data provider.
- `sortOrder`: component's sort order
- `displayArea`: renders the component in the location that was declared in the layout

<p class="q">need to clarify displayArea</p>

<div class="bs-callout bs-callout-warning" markdown="1">
If the following elements are used inside `&lt;container&gt;` or `&lt;component&gt;`, they should be specified strictly in the following order:

1.  `<argument>`
2.  `<settings>`
3.  `<childComponent>`
</div>

## Declare a custom basic component 

If the custom component you create is a [basic UI component]({{page.baseurl}}ui_comp_guide/bk-ui_comps.html#general-structure) (like Form or Listing), its declaration would contain two steps:
1. Specify the XML file with it's configuration it in the page layout file in your module, as described in the [About XML сonfiguration of UI сomponents]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html#about-the-layout-configuration-file-and-ui-component-declaration) topic. 
2. Declare the component in a separate `.xml` file using the `<container>` or `<component>` as parent node.

## Declare a custom secondary component 

## Examples

### Example 1: Creating a simple component 
Task: Declare a custom component, that extends the Select component and adds a configuration option, responsible for enable the custom functionality.

The default configuration of Select looks like following:
<p class="q">Is it configuration of a certain instance? What is the name of the file?</p>


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

Select is a simple component, it cannot have child components, so we need to use the `<component>` element for its declaration. So in the custom xml configuration file, we need to add the following:

<p class="q">What should be the name of the file?</p>

{%highlight xml%}
        <field name="sendemail_store_id" formElement="my_select">
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
                <component name="my_select"
						   component="path/to/the/custom/JS_component" 
                 		   template="path/to/the/custom/html_template">
                    <arguments name="data" xsi:type="array">
                        <item name="options" xsi:type="">Magento\Store\Model\System\Store</item>
                        <item name="config" xsi:type="array">
                            <item name="customPropertyName" xsi:type="string">customPropertyValue</item>
                        </item>
                    </arguments>
                </component>
            </formElements>
        </field>
{%endhighlight%}

As we can see, node "select" is removed and instead of it "container" node is added. 


### Example 2: Customizing a component that is a collection (Fieldset)

Task: Declare a custom configuration option, responsible for enable the custom functionality for the Fieldset component used in a certain form.

The default configuration of Fieldset component looks like following:
<p class="q">Is it configuration of a certain instance? What is the name of the file?</p>

{%highlight xml%}
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
{%endhighlight%}

Fieldset can have child components, so it is a collection component and we need to use the `<container>` element for its declaration. So in the custom xml configuration file, we need to add the following:

<p class="q">What should be the name of the file?</p>

{%highlight xml%}
    <container name="customer" component="path/to/your/custom/component">
        <arguments name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="yourCustomProperty" xsi:type="string">yourCustomValue</item>      
				<item name="label" xsi:type="string" translate="true">Account Information</item>           
            </item>
        </arguments>
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
{%endhighlight%}

 
