---
layout: default
group: howdoi
subgroup: Customize Design Configuration
title: Customize Design Configuration
menu_title: Customize Design Configuration
menu_node: parent 
menu_order: 1
version: 2.1
github_link: howdoi/design_config.md

---

<h2>What's in this topic</h2>

This topic describes how to customize (add, delete, change) the configuration options available in Magento Admin under **CONTENT** > **Design** > **Configuration**. These options define the various aspects of storefront design. In Magento 2.0.x and earlier these options were set under **STORES** > **Configuration** > **Design**. But starting from Magento 2.1.0 they were moved to the new location, and the configuration form was refactored.

**Contents:**

* TOC
{:toc}

## Overview

In Magento out of the box, when you navigate to **CONTENT** > **Design** > **Configuration** in Admin, the first page that opens displays a grid with the available configuration scopes and assigned themes. It looks like following:

<img src="{{site.baseurl}}common/images/design_conf1.png">

When you click **Edit** in any of the scope records, the page with available design options is displayed. 
For example, the default set of design options for the store view level is the following:

<img src="{{site.baseurl}}common/images/design_conf2.png" alt="Design Configuration page">

Both the grid and the configuration form are implemented using UI components.

To change the grid view, you need to customize the grid configuration by adding your custom `design_config_listing.xml` in your module.

To change the available design settings you need to customize the grid configuration by adding your custom `design_config_form.xml` in your module. If you add a new field, you must also declare it in `di.xml` how it is processed and saved.

View the following sections for details.

## Customize the grid {#customize_grid}

The grid containing the configuration scopes is implemented using the [grid UI component]({{page.baseurl}}ui-components/ui-listing-grid.html). 

To customize the grid view, take the following steps:

1. In the `<your_module_dir>/view/adminhtml/ui_component` directory, add the empty `design_config_listing.xml`.

3. In the `design_config_listing.xml` file, create a <listing></listing> element to in which to add your customizations. For example, if you want to rename the column displaying the selected theme, your grid configuration must contain the following:

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

Your `design_config_listing.xml` is merged with the same files from the other modules. So there is no need to copy their content, you only need to define changes. Even if you want to customize the existing entities, you only have to mention those options, the values of which are customized.

For reference, view the grid configuration files of the Magento modules:

- `<Magento_Backend_module_dir>/view/adminhtml/ui_component/design_config_listing.xml`
- `<Magento_Theme_module_dir>/view/adminhtml/ui_component/design_config_listing.xml`

If you add a certain field as additional grid column, you also need to set the field's `use_in_grid` property in the [field's meta data in `di.xml`](#meta_data).

## Customize the design options {#customize_options}

### Customize the form configuration
Design configuration form is implemented using the [form UI component]({{page.baseurl}}ui-components/ui-form.html). 

To customize the form view, take the following steps: 

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
                    <!-- Nesting level, the value should correspond to the actual nesting level in the config xml file. For the top field set level = 0 -->
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

Your custom fields and field sets will be available for all configuration scopes (website, store, and store view).

Your `design_config_form.xml` is merged with the same files from the other modules. So there is no need to copy their content, you only need to add your customizations. 

To customize an existing entity, declare only those options, the values of which are customized, do not copy its entire configuration. For example, if you only want to rename the **Other Settings** field set, your form configuration must contain the following:

{%highlight xml%}
<?xml version="1.0" encoding="UTF-8"?>

<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">

    <fieldset name="other_settings">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string" translate="true">Other Settings</item>

            </item>
        </argument>
    </fieldset>
</form>
{%endhighlight%}

To delete an existing field, or field set, in your `design_config_form.xml` use the following syntax:

{%highlight xml%}
...
    <fieldset name="%fieldset_name%">
        <argument name="data" xsi:type="array">
            <item name="disabled" xsi:type="boolean">true</item>
        </argument>
    </fieldset> 
...
{%endhighlight%}

For reference, view the form configuration files of Magento modules:


- `<Magento_Backend_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Catalog_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Email_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Swatches_module_dir>/view/adminhtml/ui_component/design_config_form.xml`
- `<Magento_Theme_module_dir>/view/adminhtml/ui_component/design_config_form.xml`



### Add fields' metadata {#meta_data}

If in the design configuration form you add new fields, in `<your_module_dir>/etc/di.xml` you must specify their parent field sets and the path in the database. You can also declare the backend model used for processing the field values. If you do not specify any model, the default `Magento\Framework\App\Config\Value` model is used.

The field declaration in a `di.xml` looks like following:

{%highlight xml%}
...
<type name="Magento\Theme\Model\Design\Config\MetadataProvider">
    <arguments>
        <argument name="metadata" xsi:type="array">
                <!-- field name as described in configuration -->
                <item name="%field name%" xsi:type="array">
                    <!-- the path to the field in system configuration storage in DB-->
                    <item name="path" xsi:type="string">%path in system config%</item>
                    <!-- the name of field set for current field, as described in form configuration -->
                    <item name="fieldset" xsi:type="string">%parent_fieldset%</item>
                    <!-- The php model used for field value processing -->
                    <item name="backend_model" xsi:type="string">%Backend\Model\For\\Field\Processing%</item>
                    <!-- Define whether the field value is displayed in the Design Configuration grid -->
                    <item name="use_in_grid" xsi:type="boolean">true|false</>
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

For more examples and reference, view the `di.xml` files of the Magento modules:

- `<Magento_Backend_module_dir>/etc/di.xml`
- `<Magento_Catalog_module_dir>/etc/di.xml`
- `<Magento_Email_module_dir>/etc/di.xml`
- `<Magento_Swatches_module_dir>/etc/di.xml`
- `<Magento_Theme_module_dir>/etc/di.xml`


## Accessing the options values in backend models {#access_options}

The design configuration option values are stored in the `core_config_data` table in the database, similar to the values of System Configuration options, and can be accessed using the `\Magento\Framework\App\ConfigInterface` mechanism.
