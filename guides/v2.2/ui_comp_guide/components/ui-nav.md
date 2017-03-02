---
layout: default
group: UI_Components_guide
subgroup: components
title: Nav component
menu_title: Nav component
version: 2.2
github_link: ui_comp_guide/components/ui-nav.md
---

## Nav configuration

Extends all `uiComponent` and `collapsible` configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>collapsible</td>
    <td>Enables/disables the collapsible functionality.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s JS constructor, in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/tab_group</td>
  </tr>
  <tr>
    <td>opened</td>
    <td>Initial collapsible state, if the collapsible functionality is enabled.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/tab</td>
  </tr>
</table>