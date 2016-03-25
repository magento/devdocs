---
layout: default
group: extension-dev-guide
subgroup: 6_Module Development
title: Customize Design Configuaration in Admin
menu_title: Customize Design Configuaration in Admin
menu_order: 16
github_link: extension-dev-guide/design_config.md

---

<h2>What's in this topic</h2>

This topic describes how to customize (add, delete, change) the configuration options available in Magento Admin under **CONTENT** > **Design** > **Configuration**.


## Overview

The default set of design options for the store view level is the following:

<img src="{{site.baseurl}}common/images/design_conf2.png" alt="Design Configuration page">

The configuration is implemented using the [form UI component]({{site.gdeurl21}}ui-components/ui-form.html), that uses corresponding UI components for fields. 

To change the settings avaialable for configuration under Content > Design > Configuration, take the following steps:

1. In your custom module directory add `<your_module_dir>/view/adminhtml/ui_component/design_config_form.xml` with form customization. 
2. Map the new fileds and fieldsets to the corresponding backend models in `<your_module_dir>/etc/di.xml`.

View the following sections for details.

To customize the grid with the 

## Accessing the options values programically {#access_options}

The option values are stored in the `core_config_data` table in DB, similar to the values of System Configuration options, and can be accessed using the `\Magento\Framework\App\ConfigInterface` mechanism.

## Customize the grid {#customize_grid}



## Customize the design options {#customize_options}

Design configuration is implemented using the [form UI component]({{site.gdeurl21}}ui-components/ui-form.html). 

So you can customize the form fields in the component's configuration xml file. For design configuraion form it is `design_config_form.xml`.

Details:

1. Create an empty `design_config_form.xml` file in the `<your_module_dir>/view/adminhtml/ui_component/` directory.
 
2. Add the following "wrapping" content:

{%highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">

<!--reference a field set --> 

<fieldset name="%fieldset_name%">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="label" xsi:type="string" translate="true">%Fieldset Label as displayed in UI%</item>
            <item name="sortOrder" xsi:type="number">%order for displaying%</item>
        </item>
    </argument>
<!--Field sets can be nested --> 
    <fieldset name="%nested_fieldset_name%">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string" translate="true">%Nested fieldset Label as displayed in UI%</item>
                <item name="collapsible" xsi:type="boolean">true</item>
                <item name="level" xsi:type="number">%level of nesting%</item>
            </item>
        </argument>  
        <field name="%field_name%">
			<argument name="data" xsi:type="array">
                <item name="config" xsi:type="array"
                    <item name="%field_option1%" xsi:type="%option_type%">%value%</item>
                    <item name="%field_option2%" xsi:type="%option_type%">%value%</item>
....
                </item>
            </argument>
        </field>
    </fieldset>
</fieldset>

</form>

3. Add metadata for the new fieldsets and fields in the `<your_module_dir>/etc/di.xml`

{%endhighlight%}


<p class="q">In what context should the di.xml configuration be mentioned?</p>
<p class="q">Nesting? Is it defined by the actual nesting in xml or the level attribute</p>

<p class="q">How can be default fieldsets customized?</p>