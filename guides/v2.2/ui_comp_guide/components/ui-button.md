---
layout: default
group: UI_Components_guide
subgroup: components
title: Button component
menu_title: Button component
version: 2.2
github_link: ui_comp_guide/components/ui-button.md
---

## Configuration options

Extends all [`uiElement`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

Button-specific configuration:

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>additionalClasses</code></td>
    <td>Sets custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>
Initial component's state. When set to <code>true</code>, users can't take action on the element.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>displayArea</code></td>
    <td>Renders the component in the location that was declared in the layout.</td>
    <td>String</td>
    <td><code>outsideGroup</code></td>
  </tr>
  <tr>
    <td><code>displayAsLink</code></td>
    <td>Show the button as a link.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the child component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the general <code>.html</code> template for a button.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td>Button title.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>visible</code></td>
    <td>Initial component's visibility. When set to <code>false</code>, the <code>"display: none</code> CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
</table>
