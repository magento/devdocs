---
layout: default
group: UI_Components_guide
subgroup: HtmlContent components
title: HtmlContent component
menu_title: Tab component
version: 2.2
github_link: ui_comp_guide/components/ui-htmlcontent.md
---

## HtmlContent configuration

Extends all `uiComponent` configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>additionalClasses</td>
    <td>Sets custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/html</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/content/content</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Is responsible for initial component visibility state. In case when state is "false" to the component DOM block adds css style "display: none"</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>