---
layout: default
group: UI_Components_guide
subgroup: best practices
title: semantic arguments for UI components
menu_title:
menu_node:
menu_order: 1
version: 2.2
github_link: ui_comp_guide/best-practices/semantic_config.md
---

## Introduction 

Magento supports two different ways to declare UI components configuration.

The first way is arbitrary structure that looks like: 

![first_way_ui_components_declaration]({{site.baseurl}} common/images/ui_comps_config_arb.png)

The second way is *semantic* declaration. The configuration from the previous example declared using semantic declaration looks like following: 

![first_way_ui_components_declaration]({{site.baseurl}} common/images/ui_comps_config_semantic.png)


<p class="q">Which declaration Magento itself uses?</p>

### Advantages of "semantic" declaration
* [Readability](#readability) 
* [Autocomplete](#autocomplete) 
* [Validation](#validation) 

#### Readability
The node's purpose is defined by it's name, no more abstract-named nodes like `<item>` or `<argument>`. 

#### Autocomplete
The autocomplete helps to declare components configuration and suggests
a possible component's options.

<p class="q">If using semantic declaration, you can enjoy the benefit of the autocomplete functionality available in your? all? IDE.</p>.

Start write opening XML tag or attribute to some XML node and IDE give you list of all possible component's options.

Example: preview "Autocomplete node declaration"
![second_way_ui_components_declaration](./img/3.png?raw=true "second_way_ui_components_declaration")
##### Preview "Autocomplete attribute declaration"
![second_way_ui_components_declaration](./img/4.png?raw=true "second_way_ui_components_declaration")

##### Magento specific:
**Magento** supports autocomplete for all nesting levels of options which have static interface.
In cases when options don't have defined interface  additional property is used. That oblige us to declare
option name and type.

![second_way_ui_components_declaration](./img/5.png?raw=true "second_way_ui_components_declaration")

#### Validation
Semantic approach gives ability to validate XML declaration.
If some option or attribute which isn't supported is declared in XML - IDE will show it.
1) In case when wrong option node is declared - IDE will change node color to red.
![second_way_ui_components_declaration](./img/6.png?raw=true "second_way_ui_components_declaration")
2) In case when required attribute is absent - IDE underlines node by red line. 
![second_way_ui_components_declaration](./img/7.png?raw=true "second_way_ui_components_declaration")
You can see tooltip with a clue by hovering the node with error.
![second_way_ui_components_declaration](./img/12.png?raw=true "second_way_ui_components_declaration")
<p class="q">Do we really need these illustrations? isn't it standard behavior?</p>

Also, we have ability to validate full file.
For this open context menu and select "Validate" item.

![second_way_ui_components_declaration](./img/8.png?raw=true "second_way_ui_components_declaration")

After that, if errors is existing IDE showed their in "Messages" tab.
![second_way_ui_components_declaration](./img/9.png?raw=true "second_way_ui_components_declaration")

#### Best practices to declare custom property

*All custom or extended components should be declared in "component" or "container" node*.

As example we need to extend base functionality of "select" component and add additional
configuration option to enable your custom functionality.

The configuration of "select" component looks like:
![second_way_ui_components_declaration](./img/10.png?raw=true "second_way_ui_components_declaration")

The configuration of your custom "select" component should look like:
![second_way_ui_components_declaration](./img/11.png?raw=true "second_way_ui_components_declaration")

<p class="q">code samples should not be images</p>

As we can see, node "select" is removed and instead of it "container" node is added. In "container" node "component" attribute
is used. In "component" attribute the link to custom JS constructor file is declared. 
Inside "container" node arbitrary structure is used to declare options.


###Important note:
1) Now **Magento** supports two approaches of declaring UI components configuration, but in future releases arbitrary 
approach will deprecated and will be not supported.
2) In current version, during XML files merging, "old" arbitrary approach has higher priority compared to semantic approach.
