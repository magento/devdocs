---
layout: default
group: UI_Components_guide
subgroup: components
title: Fieldset сomponent
menu_title: Fieldset component
version: 2.1
github_link: ui_comp_guide/components/ui-fieldset.md
---

The Fieldset component is a container for visually grouped form elements (i.e. buttons, form fields).

## Fieldset options
Extends all `uiCollection` configuration, extends all `collapsible` configuration.

| Option            | Description                                                                                                                                    | Type    | Default                                |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------|
| visible           | Is responsible for initial component visibility state. In case when state is "false" to the component DOM block adds css style "display: none" | Boolean | true                                   |
| disabled          | Is responsible for initial component disabled state. In case when state is "true" makes the component UI immutable.                            | Boolean | false                                  |
| additionalClasses | Sets custom classes to the component DOM block.                                                                                                | Object  | {}                                     |
| collapsible       | Disabled or enabled the collapsible opportunity to fieldset                                                                                    | Boolean | false                                  |
| template          | The path to the component’s .html template.                                                                                                    | String  | ui/form/fieldset                       |
| component         | The path to the component’s .js file in terms of RequireJS.                                                                                    | String  | Magento_Ui/js/form/components/fieldset |

