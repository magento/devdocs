---
layout: default
group: UI_Components_guide
subgroup: components
title: Button component
menu_title: Button component
version: 2.2
github_link: ui_comp_guide/components/ui-button.md
---

## Button configuration

	
Extends all [`uiElement`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

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
    <td>disabled</td>
    <td>Is responsible for initial component disabled state. In case when state is "true" makes the component UI immutable.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>displayArea</td>
    <td>Is responsible for rendering the component in the specified place that was declared in layout.</td>
    <td>String</td>
    <td>outsideGroup</td>
  </tr>
  <tr>
    <td>displayAsLink</td>
    <td>Show button as a link.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the child component’s .html template.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>title</td>
    <td>Button title.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Is responsible for initial component visibility state. In case when state is "false" to the component DOM block adds css style "display: none"</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>