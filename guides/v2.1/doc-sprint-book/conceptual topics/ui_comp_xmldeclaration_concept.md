---
layout: default
group: UI_Components
subgroup: concepts
title: Debug UI components JavaScript
menu_title: Debug UI components JavaScript
menu_order: 1
version: 2.1
github_link: ui_comp_guide/troubleshoot/ui_comp_troubleshoot.md
---


.xml declaration

In this screencast we are talking about .xml declaration of ui-component.

Every module that has view representation contains the folder named 'layout'. In this folder .xml declaraions of the pages are stored. These .xml declarations are in fact the pages markup.

In the xml file we are seeing head node, title node with the name of the page and link to css file

More important for us now is referenceContainer node. Attribute name in this node is responsible for position of container on the page.

In referenceContainer node ui-component is declared. Attribute name in this node references to the xml configuration of out main component which must be placed inside ui-conponents folder on the same level as layout folder.

Saying main component we mean form or listing component. In current example this is form component.

Lets look at component configuration, as the simplest example we use "field" component.

In the fild node the name attribute contains its uniq name for this page. Look at the "Arguments" node which name attribute has value data. The child nodes of this node will be the arguments that will be passed in to the component.

All futher child nodes will be declared as items. Item node with the name attribute sets to config contains the childs that will be the component configuration.Please note that although configuration for all components is different, there are base properties that are mostly the same for different components. For example item with name attribute component in which we define which JS file will be used as component for current field. Reference to this file must be full path to this file or the alias which is defined in requirejs config. 

In this example we can omit component node because we have already defined component node for the field. Moreover in this example we are showing only little part of the possible configuration. Every component has default configuration which is declared or inside component or inside definition.xml file. Here we are only redefining default configuration to make it custom.   
