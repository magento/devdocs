---
layout: default
group: UI_Components_guide
subgroup: concepts
title: Syntax of UI components XML configuration
menu_title: Syntax of UI components XML configuration
menu_order: 6
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_config_syntax_concept.md
---

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

###Important note:
1) Now **Magento** supports two approaches of declaring UI components configuration, but in future releases arbitrary 
approach will deprecated and will be not supported.
2) In current version, during XML files merging, "old" arbitrary approach has higher priority compared to semantic approach.
