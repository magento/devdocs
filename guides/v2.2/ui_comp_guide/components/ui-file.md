---
layout: default
group: UI_Components_guide
subgroup: components
title: File component
menu_title: File component
version: 2.2
github_link: ui_comp_guide/components/ui-file.md
---

## File configuration

Extends all `abstract` configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/element/text</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Field label</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>links<br>&lt;li&gt;value&lt;/li&gt;</td>
    <td>Links the component property "value" with provider uses path that is declared in the "dataScope" property</td>
    <td>Object<br>&lt;li&gt;Boolean&lt;/li&gt;</td>
    <td>${ $.provider }:${ $.dataScope }' <p class="q">Strange value for a boolean</p></td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Is responsible for initial component disabled state. In case when state is "true" makes the component UI immutable.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Is responsible for initial component visibility state. In case when state is "false" to the component DOM block adds css style "display: none".</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>