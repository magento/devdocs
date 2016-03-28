---
layout: default
group: howdoi
subgroup: Customize Design Configuration
title: Customize Design Configuration
menu_title: Customize Design Configuaration
menu_node: parent 
github_link: howdoi/design_config.md

---

<h2>What's in this topic</h2>

This topic describes how to customize (add, delete, change) the configuration options available in Magento Admin under **CONTENT** > **Design** > **Configuration**.

**Contents:**

* TOC
{:toc}

## Overview

When navigating to **CONTENT** > **Design** > **Configuration** in Admin, the first page that opens displays a grid with the available configuration scopes.
Additionally the grid can display the value of the design options. By default, it displays the name of the theme selected for the scope:

<img src="{{site.baseurl}}common/images/design_conf1.png">

<p class="q">Why Luma is not specified for the default store view?</p>

To make other options values appear in this grid, you need to customize the `design_config_listing.xml` grid configuration file.

When you click **Edit** in any of the scope records, the page with available design options is displayed. 
For example, the default set of design options for the store view level is the following:

<img src="{{site.baseurl}}common/images/design_conf2.png" alt="Design Configuration page">

<p class="q">How we define which options are available for which scope</p>

This configuration is implemented using the [form UI component]({{site.gdeurl21}}ui-components/ui-form.html), that uses corresponding UI components for fields. 

To change the settings available for configuration, you need to customize the `design_config_form.xml` and `di.xml` configuration files.

View the following sections for details.


## Customize the grid {#customize_grid}

The grid containing the configuration scopes is implemented using the [grid UI component]({{sige.gdeurl21}}ui-components/ui-listing-grid.html). To customize the grid view, take the following steps:

1. In the `<your_module_dir>/view/adminhtml/ui_component` directory add the empty `design_config_listing.xml`.

3. In the scope of `<listing></listing>` add all other customizations. Your `design_config_listing.xml` is merged with the same files from the other modules. So there is no need to copy their content, you only need to put the new things you add. Even if you want to customize the exising entities, you only have to mention those options, the values of which are customized. For example, if you only want to rename the column displaying the selected theme, your grid config must contain the following:

{%highlight xml%}
<?xml version="1.0" encoding="UTF-8"?>

<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <columns name="design_config_columns">
        <column name="theme_theme_id">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string" translate="true">%New theme column name%</item>
                </item>
            </argument>
        </column>
    </columns>
</listing>
{%endhighlight%}

For reference, view the grid configuration files of Magento modules:

- `<Magento_Backend_module_dir>/view/adminhtml/ui_component/design_config_listing.xml`
- `<Magento_Theme_module_dir>/view/adminhtml/ui_component/design_config_listing.xml`


## Customize the design options {#customize_options}

### Customize the form configuration
Design configuration is implemented using the [form UI component]({{site.gdeurl21}}ui-components/ui-form.html). 

So you can customize the form fields in the component's configuration xml file. For design configuraion form it is `design_config_form.xml`. 

Details:

1. Create an empty `design_config_form.xml` file in the `<your_module_dir>/view/adminhtml/ui_component/` directory.
 
2. Add content similar to the following:

{%highlight xml%}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">


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
{%endhighlight%}

Your `design_config_form.xml` is merged with the same files from the other modules. So there is no need to copy their content, you only need to add your customizations. Even if you want to customize the exising entities, there is no need to copy all its configuration, you only have to set those options, the values of which are customized. For example, if you only want to rename the **Other Settings** field set, your grid config must contain the following:

{%highlight xml%}
<?xml version="1.0" encoding="UTF-8"?>

<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">

    <fieldset name="other_settings">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string" translate="true">Other Settings</item>

            </item>
        </argument>
</form>
{%endhighlight%}

For reference, view the form configuration files of Magento modules:


- `<Magento_Backend_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Catalog_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Email_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Swatches_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Theme_module_dir>/view/adminhtml/ui_component/design_config_form.xml`

### Add the form metadata

If in the design configuration form you add new field sets or fields, you must declare their backend models in `<your_module_dir>/etc/di.xml`. 
The field declaration looks like following:

{%highlight xml%}
...
<type name="Magento\Theme\Model\Design\Config\MetadataProvider">
    <arguments>
        <argument name="metadata" xsi:type="array">
                <!-- field name as described in configuration -->
                <item name="%field name%" xsi:type="array">
                    <!-- the path to the field in system configuration -->
                    <item name="path" xsi:type="string">%path in system config%</item>
                    <!-- the name of field set for current field, as described in form configuration -->
                    <item name="fieldset" xsi:type="string">%parent fieldset%</item>
                    <!-- The php model used for field value processing -->
                    <item name="backend_model" xsi:type="string">%backend\model\for\\field\processing%</item>
                    <item name="base_url" xsi:type="array">
                        <item name="type" xsi:type="string"></item>
                        <item name="scope_info" xsi:type="string"></item>
                        <item name="value" xsi:type="string"></item>
                    </item>
                </item>      
        </argument>
    </arguments>
</type>
...
{%endhighlight%}

<p class="q">need more details about base_url parameter, the path to field in system config?</p>
<p class="q">use_in_grid - not present in the example</p>

Example of field declaration:

{%highlight xml%}
<type name="Magento\Theme\Model\Design\Config\MetadataProvider">
    <arguments>
        <argument name="metadata" xsi:type="array">
                <item name="head_shortcut_icon" xsi:type="array">
                    <item name="path" xsi:type="string">design/head/shortcut_icon</item>
                    <item name="fieldset" xsi:type="string">head</item>
                    <item name="backend_model" xsi:type="string">Magento\Config\Model\Config\Backend\Image\Favicon</item>
                    <item name="base_url" xsi:type="array">
                        <item name="type" xsi:type="string">media</item>
                        <item name="scope_info" xsi:type="string">1</item>
                        <item name="value" xsi:type="string">favicon</item>
                    </item>
                </item>      
        </argument>
    </arguments>
</type>
{%endhighlight%}

For more examples and reference, view the `di.xml` files of Magento modules:


- `<Magento_Backend_module_dir>/etc/di.xml`
- `<Magento_Catalog_module_dir>/etc/di.xml`
- `<Magento_Email_module_dir>/etc/di.xml`
- `<Magento_Swatches_module_dir>/etc/di.xml`
- `<Magento_Theme_module_dir>/etc/di.xml`

<p class="q">Nesting? Is it defined by the actual nesting in xml or the level attribute</p>

<p class="q">How can be default fieldsets customized?</p>

## Accessing the options values programically {#access_options}

The design configuration option values are stored in the `core_config_data` table in DB, similar to the values of System Configuration options, and can be accessed using the `\Magento\Framework\App\ConfigInterface` mechanism.