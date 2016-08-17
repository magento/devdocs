---
layout: default
group: UI_Components
subgroup: concepts
title: About Configuration of UI Components in XML
menu_title: About Configuration of UI Components in XML
menu_order: 1
version: 2.1
github_link: ui_comp_guide/troubleshoot/ui_comp_troubleshoot.md
---

## About Configuration of UI Components in XML

## Overview

This topic discusses the .xml declaration of UI components. 


## About the layout configuration file
Every module that has view representation contains the folder named 'layout'. In this folder, the .xml declarations of the pages are stored. These .xml declarations are, in fact, the pages' markup.

In a typical Magento layout xml file we see a `<head/>` node, `<title/>` node with the name of the page, and a link to css file. There are other nodes as well, the most important for us now is the `<referenceContainer/>` node. (The `name` attribute in this node is responsible for the position of the container on the page.)

A UI component is declared in the <referenceContainer/> node, by using the <uiComponent/> node. The `name` attribute in the <uiComponent/> node references the xml configuration of the [top level UI component]({{page.baseurl}}...link to glossary).  

Example of a UI component declaration:

{%higlight xml%}
<referenceContainer name="page-container">
	<uiComponent name="%instance_name%">
</referenceContainer>
{%endhiglight%}

The configuration of the top-level UI component is a separate .xml file. It is stored in the <module_dir>/view/<area>/ui_component/ directory. For example <module_dir>/view/<area>/ui_component/<instance_name>.xml.

Every instance is declared in a separate file. The file name is the name of instance (<instance_name>). The namespace of the names is global; meaning that if the file names are the same, they will all be merged into a single configuration for the particular instance.

## About the instance configuration file

The instance of a top-level UI Component has a configuration file. Following are the rules for the instance configuration files:

* The top node must have the name of one of the top-level UI components.
* The top node must contain a link to the xsd schema.

In the top node, there can be an <argument/> node. The <argument/> node contains the configuration for that top-level UI component. The <argument/> node name attribute has value data. ***The child nodes of the <argument> node will be the argument properties that will be passed in to the component.***

Within the top node, there can also be nested nodes. For example, if you want your listing to have a toolbar, then the top node is for the listing and an nested node represents a toolbar. Every nested node that is contained within the top node is regarded as a separate UI component (i.e. the toolbar). Nested nodes can also contain an <argument> node.


## Example of a top-level configuration file

<?xml version="1.0" encoding="UTF-8"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="provider" xsi:type="string">category_form.category_form_data_source</item>
            <item name="deps" xsi:type="string">category_form.category_form_data_source</item>
        </item>
        <item name="label" xsi:type="string" translate="true">Category Information</item>
        <item name="template" xsi:type="string">templates/form/collapsible</item>
        <item name="buttons" xsi:type="array">
            <item name="delete" xsi:type="string">Magento\Catalog\Block\Adminhtml\Category\Edit\DeleteButton</item>
            <item name="save" xsi:type="string">Magento\Catalog\Block\Adminhtml\Category\Edit\SaveButton</item>
        </item>
        <item name="config" xsi:type="array">
            <item name="dataScope" xsi:type="string">data</item>
            <item name="namespace" xsi:type="string">category_form</item>
        </item>
        <item name="reverseMetadataMerge" xsi:type="boolean">true</item>
    </argument>
    <dataSource name="category_form_data_source">
        <argument name="dataProvider" xsi:type="configurableObject">
            <argument name="class" xsi:type="string">Magento\Catalog\Model\Category\DataProvider</argument>
            <argument name="name" xsi:type="string">category_form_data_source</argument>
            <argument name="primaryFieldName" xsi:type="string">entity_id</argument>
            <argument name="requestFieldName" xsi:type="string">id</argument>
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="submit_url" xsi:type="url" path="catalog/category/save"/>
                    <item name="validate_url" xsi:type="url" path="catalog/category/validate"/>
                </item>
            </argument>
        </argument>
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
    </dataSource>
    <fieldset name="general">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string"/>
                <item name="collapsible" xsi:type="boolean">false</item>
            </item>
        </argument>
        <field name="id">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="dataType" xsi:type="string">text</item>
                    <item name="formElement" xsi:type="string">hidden</item>
                    <item name="source" xsi:type="string">category</item>
                </item>
            </argument>
        </field>
    </fieldset>
</form>

Lets look at component configuration, as the simplest example we use "field" component.

In the field node the name attribute contains its uniq name for this page. Look at the "Arguments" node which name attribute has value data. The child nodes of this node will be the arguments that will be passed in to the component.

All futher child nodes will be declared as items. Item node with the name attribute sets to config contains the childs that will be the component configuration.Please note that although configuration for all components is different, there are base properties that are mostly the same for different components. For example item with name attribute component in which we define which JS file will be used as component for current field. Reference to this file must be full path to this file or the alias which is defined in requirejs config.

In this example we can omit component node because we have already defined component node for the field. Moreover in this example we are showing only little part of the possible configuration. Every component has default configuration which is declared or inside component or inside definition.xml file. Here we are only redefining default configuration to make it custom.   
