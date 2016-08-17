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

This topic discusses .xml declaration of UI components.

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

Following are the rules for the instance configuration files:

* The top node must have the name of one of the top-level UI components.
* The top node must contain a link to the xsd schema.

Every nested node is regarded as a separate UI component, except the <argument/> node.
The <argument/> node contains the configuration for the particular component. 


## Example

Saying top-level component we mean the `form` or `listing` component. In the current example this is form component.

Lets look at component configuration, as the simplest example we use "field" component.

In the fild node the name attribute contains its uniq name for this page. Look at the "Arguments" node which name attribute has value data. The child nodes of this node will be the arguments that will be passed in to the component.

All futher child nodes will be declared as items. Item node with the name attribute sets to config contains the childs that will be the component configuration.Please note that although configuration for all components is different, there are base properties that are mostly the same for different components. For example item with name attribute component in which we define which JS file will be used as component for current field. Reference to this file must be full path to this file or the alias which is defined in requirejs config. 

In this example we can omit component node because we have already defined component node for the field. Moreover in this example we are showing only little part of the possible configuration. Every component has default configuration which is declared or inside component or inside definition.xml file. Here we are only redefining default configuration to make it custom.   
