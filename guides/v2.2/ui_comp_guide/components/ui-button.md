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
    <td>
Initial component's state. When set to "true", users can't take action on the element.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>displayArea</td>
    <td>Renders the component in the location that was declared in the layout.</td>
    <td>String</td>
    <td>outsideGroup</td>
  </tr>
  <tr>
    <td>displayAsLink</td>
    <td>Show the button as a link.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the child component’s <code>.html</code> template.</td>
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
    <td>Initial component's visibility. When set to "false", the <code>"display: none</code> CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>
