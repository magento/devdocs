---
group: ui-components-guide
title: Using the new structure in UI components XML configuration
---

Magento 2.2.0 introduces a new structure for [UI components XML configuration]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_xmldeclaration_concept.html), aimed at improving configuration semantics.

The arbitrary structure, used in UI components XML configuration in previous Magento 2 versions, is also supported, and during XML files merging, the configuration files that use the arbitrary structure have higher priority.

Still, using the new structure for your customizations in Magento 2.2.0 and later, is the best practice, because the old "arbitrary" structure will become deprecated at some point.

{:.bs-callout-info #info_structure_except}
Declaring the custom UI component is an exception, use the arbitrary structure when [declaring a custom UI component].

The main advantages of the new structure are described in the following sections.

## Readability

All components options are separate nodes, and a node's purpose is defined by its name. The number of abstract-named nodes like `<item>` or `<argument>` is minimized.
{% collapsible Illustration %}
```xml
<field name="default_billing" formElement="checkbox">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="source" xsi:type="string">customer</item>
        </item>
    </argument>
    <settings>
        <dataType>boolean</dataType>
        <visible>false</visible>
    </settings>
</field>
<field name="default_shipping" formElement="checkbox">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="source" xsi:type="string">customer</item>
        </item>
    </argument>
    <settings>
        <dataType>boolean</dataType>
        <visible>false</visible>
    </settings>
</field>
<field name="website_id" component="Magento_Ui/js/form/element/website" formElement="select">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="source" xsi:type="string">customer</item>
        </item>
    </argument>
    <settings>
        <validation>
            <rule name="required-entry" xsi:type="boolean">true</rule>
        </validation>
        <dataType>number</dataType>
        <tooltip>
            <link>http://docs.magento.com/m2/ce/user_guide/configuration/scope.html</link>
            <description translate="true">If your Magento installation has multiple websites, you can edit the scope to associate the customer with a specific site.</description>
        </tooltip>
        <imports>
            <link name="customerId">${ $.provider }:data.customer.entity_id</link>
        </imports>
    </settings>
</field>
```
{% endcollapsible %}

## Autocomplete

When editing XML configuration files in an IDE, the autocomplete feature prompts the correct spelling and the possible options.
{% collapsible Illustration %}

*  Node declaration autocomplete:

![node declaration autocomplete]({{ site.baseurl }}/common/images/ui_comps/autocomplete1.png){:width="610px"}

*  Attribute declaration autocomplete:

![Attribute declaration autocomplete]({{ site.baseurl }}/common/images/ui_comps/autocomplete1.png){:width="630px"}

*  Magento supports autocomplete for all nesting levels of options which have static interface. If an option doesn't have defined interface, the additional property is used to declare option name and type:

![no defined interface]({{ site.baseurl }}/common/images/ui_comps/no_type.png){:width="410px"}

{% endcollapsible %}

## Validation

When editing XML configuration files in an IDE, you get visual notifications if the name of a node or attribute is misspelled, or a required attribute is missing. You can also validate the complete file, by clicking **Validate** in the context menu.

{% collapsible Illustration %}

*  If the node name is misspelled:

![first_way_ui_components_declaration]({{ site.baseurl }}/common/images/ui_comps/validation1.png){:width="410px"}

*  If the required attribute is missing:

![first_way_ui_components_declaration]({{ site.baseurl }}/common/images/ui_comps/validation2.png){:width="410px"}

*  The tooltip displayed if you move the pointer over the underlined element:

![first_way_ui_components_declaration]({{ site.baseurl }}/common/images/ui_comps/validation3.png){:width="410px"}

*  Validating the complete file:

![first_way_ui_components_declaration]({{ site.baseurl }}/common/images/ui_comps/validation_file.png){:width="520px"}
![first_way_ui_components_declaration]({{ site.baseurl }}/common/images/ui_comps/validation_messages.png)

{% endcollapsible %}

{:.bs-callout-info}
To use the autocomplete and validation features in your IDE, generate the URN as described in the [URN highlighter] topic.

<!--Link Declarations -->

[declaring a custom UI component]: {{page.baseurl}}/ui_comp_guide/howto/new_component_declaration.html
[URN highlighter]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html
