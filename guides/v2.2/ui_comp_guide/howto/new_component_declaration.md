---
layout: default
group: UI_Components_guide
subgroup: how tos
title: Declare a custom UI component
menu_title: Declare a custom UI component
menu_order: 1
version: 2.2
github_link: ui_comp_guide/howto/new_component_declaration.md
---

Declaring a custom {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} refers to creating the {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} configuration of your custom component, and is a part of a bigger task of creating a custom UI component.

This topic describes the XML elements that must be used for declaring a custom component and where this declaration should be placed.  

## XML elements used for declaring the custom component

A custom UI component can be declared using one of the following elements: `<component>` or `<container>`.

The `<component>` element is typically used for declaring simple custom components that do not have other nested components. `<component>` uses the [uiElement]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uielement_concept.html) constructor by default.

The `<container>` element is typically used for declaring custom components that are collections, or in other words, can have nested components. `<container>` uses the [uiCollection]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) constructor by default.

### Attributes you can use
The `<container>` and `<component>` elements have no mandatory attributes. The following optional attributes are available for both these elements:

- `component`: link to the component's {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} constructor.
- `class`: link to the component's {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class.
- `template`: link to component's `.html` template.
- `provider`: link to component's data provider.
- `sortOrder`: component's sort order
- `displayArea`: the placeholder which defines the area for rendering the component in the {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} file.

<div class="bs-callout bs-callout-warning" markdown="1">

If the following elements are used inside `<container>` or `<component>`, they should be specified strictly in the following order:

1.  `<argument>`
2.  `<settings>`
3.  `<childComponent>`

For the component configuration inside `<container>` and `<component>`, [use the "arbitrary" structure]({{page.baseurl}}/ui_comp_guide/best-practices/semantic_config.html#info_structure_except).
</div>

## Declare a custom basic component 

If the custom component you create is a [basic UI component]({{page.baseurl}}/ui_comp_guide/bk-ui_comps.html#general-structure) (like Form or Listing), you need to take the following steps to declare it:

1. Specify the XML file with its configuration it in the page layout file in your module, as described in the [About XML сonfiguration of UI сomponents]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html#about-the-layout-configuration-file-and-ui-component-declaration) topic.
2. Declare the component in a separate `.xml` file using the `<container>` or `<component>` as parent node.

## Declare a custom secondary component 

If the custom component you create is secondary (not a basic one), it is declared using  `<container>` or `<component>` in the XML configuration file of the basic component.

## Example: Creating a custom secondary (not basic) component 
Task: In the Customer form, replace the select field with a custom UI component. The custom component extends the Select component by adding a custom option that enables custom functionality. 

The Customer form configuration is defined in `<Magento_Customer_module_dir>/view/base/ui_component/customer_form.xml`. The default configuration of the select field we will extend is following:

{%highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <fieldset name="customer">
...
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
            ...
        </fieldset>
    </argument>
</form>
{%endhighlight%}

The custom component we create extends Select, and is also a simple component (does not have child components), so we use the `<component>` element for its declaration. To add the declaration, we need to create the `customer_form.xml` file in the custom module, and put it in the same location relative to the module directory as the original `customer_form.xml` resides. So the custom form configuration file will be: `<YourVendor_YourModule_dir>/view/base/ui_component/customer_form.xml`.

We copy the `<field>` configuration, remove the `<select>` node and its configuration, and replace it with `<component>` and its configuration:

{%highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <fieldset name="customer">
            ...
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
                            <item name="options" xsi:type="">Magento\Store            \Model\System\Store</item>
                            <item name="config" xsi:type="array">
                                <item name="customPropertyName" xsi:type="string">customPropertyValue</item>
                            </item>
                        </arguments>
                    </component>
                </formElements>
            </field>

            ...
        </fieldset>
    </argument>
</form>
{%endhighlight%}

