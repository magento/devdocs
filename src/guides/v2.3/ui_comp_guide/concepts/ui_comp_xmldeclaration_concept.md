---
group: ui-components-guide
title: About XML configuration of UI components
---

## Overview

This topic discusses the [XML](https://glossary.magento.com/xml) declaration of UI components.

## About the layout configuration file and UI component declaration

Every [module](https://glossary.magento.com/module) that has view representation contains the directory named `layout`. In this directory, the `.xml` declarations of the pages are stored. These `.xml` declarations are, in fact, the pages' [markup](https://glossary.magento.com/markup).

In a typical Magento `.xml` layout file we see a `<head/>` node, `<title/>` node with the name of the page, and sometimes [links to CSS and JS files]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#layout_markup_css). There are other nodes as well, the most important for us now is the [`<referenceContainer/>` node]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref). (The `name` attribute in this node is responsible for the position of the container on the page.). [Basic]({{ page.baseurl }}/ui_comp_guide/bk-ui_comps.html#general-structure) UI components are declared in this node. All nested components are declared in the basic components' instances configuration files (not in the page layouts).

Example of a basic [UI component](https://glossary.magento.com/ui-component) declaration:

```xml
<referenceContainer name="page-container">
    <uiComponent name="%instance_name%"/>
</referenceContainer>
```

A UI component is declared using the `<uiComponent/>` node. The `name` attribute in the `<uiComponent/>` node references the XML configuration of the basic UI component's instance. This configuration is a separate `.xml` file. It is stored in the `<module_dir>/view/<area>/ui_component/` directory. For example `<module_dir>/view/<area>/ui_component/%instance_name%.xml`.

## About the basic component configuration file

The instance configuration file name is the name of instance (`%instance_name%`). The [namespace](https://glossary.magento.com/namespace) of the names is global; meaning that if the file names in different modules are the same, they are merged into a single configuration for the particular instance.

Following are the rules for the instance configuration files:

*  The top node must have the name of one of the basic UI components. <!-- need to mention or link what components -->
*  The top node must contain a link to the [XSD](https://glossary.magento.com/xsd) schema.

In the top node, there can be an `<argument/>` node. The `<argument/>` node contains the configuration for that basic UI component. The `<argument/>` node's `name` attribute value must be `data`. The child nodes of the `<argument>` node will be the argument properties that will be passed in to the component.

The top node can have nested nodes. Every nested node is regarded as a separate UI component (i.e. the toolbar). For example, if you want your listing to have a toolbar, then the top node is for the listing and a nested node represents a toolbar. Nested nodes can also contain the `<argument>` node.

## Example of a basic component's configuration file

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="provider" xsi:type="string">category_form.category_form_data_source</item>
        </item>
        <item name="label" xsi:type="string" translate="true">Category Information</item>
        <item name="template" xsi:type="string">templates/form/collapsible</item>
        <item name="reverseMetadataMerge" xsi:type="boolean">true</item>
    </argument>
    <settings>
        <buttons>
            <button name="save" class="Magento\Catalog\Block\Adminhtml\Category\Edit\SaveButton"/>
            <button name="delete" class="Magento\Catalog\Block\Adminhtml\Category\Edit\DeleteButton"/>
        </buttons>
        <namespace>category_form</namespace>
        <dataScope>data</dataScope>
        <deps>
            <dep>category_form.category_form_data_source</dep>
        </deps>
    </settings>
    <dataSource name="category_form_data_source">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
        <settings>
            <validateUrl path="catalog/category/validate"/>
            <submitUrl path="catalog/category/save"/>
        </settings>
        <dataProvider class="Magento\Catalog\Model\Category\DataProvider" name="category_form_data_source">
            <settings>
                <requestFieldName>id</requestFieldName>
                <primaryFieldName>entity_id</primaryFieldName>
            </settings>
        </dataProvider>
    </dataSource>
    <fieldset name="general" sortOrder="5">
        <settings>
            <collapsible>false</collapsible>
            <label/>
        </settings>
        <field name="id" formElement="hidden">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="source" xsi:type="string">category</item>
                </item>
            </argument>
            <settings>
                <dataType>text</dataType>
            </settings>
        </field>
    </fieldset>
</form>
```

In the above example, within the top-level `<form>` node the `<fieldset>` node is nested. It declares the Fieldset UI component.

The `name` attribute value must be a unique among the other components on the same hierarchical level of the same parent node. Look at the `<argument>` node which `name` attribute has `data` value. The child nodes of this node are the arguments that will be passed in to the component.

All other child nodes are declared as items. `<item name="config"> ...</item>` contains the children nodes that describe the configuration of the current UI component. Please note that although configuration for all components is different, there are base properties that are mostly the same for different components. For example, we can use `<item name="component">...</item>` to define which JS file will be used as the Model for the Fieldset UI component in the above example. Reference to this JS file can be either be the full path to this file or the alias which is defined in [`require.js`]({{ page.baseurl }}/javascript-dev-guide/javascript/js-resources.html) configuration.

In our example, the `<item name="component">...</item>` node within `<fieldset>` is omitted, because this property of the Fieldset UI component is already defined in `definition.xml`.

In this example we showed only a small part of the possible configuration.

The default configuration of a UI component is declared in one of the following ways:

*  inside the UI component itself, in the `.js` file
*  in the [`definition.xml` file]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/ui_component/etc/definition.xml)
*  in both places, in which case the configurations merge (the UI component `.js` file has priority).

In the above example, the Fieldset UI component uses a merged configuration from both the `definition.xml` file and from the UI component's `.js` file.

For more information about the configuration flow, refer to  the [Configuration Flow of UI Components]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_config_flow_concept.html) topic.
