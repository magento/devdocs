---
layout: default
group: UI_Components_guide
subgroup: components
title: Select component
menu_title: Select component
version: 2.2
github_link: ui_comp_guide/components/ui-select.md
---

## Configuration options

Extends all `abstract` configuration.

Select-specific options:

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>caption</td>
    <td>Caption for DOM select element.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the <code>.html</code> template of the particular type of field (select).</td>
    <td>String</td>
    <td><code>ui/form/element/select</code></td>
  </tr>
  <tr>
    <td>options</td>
    <td>The array of the Select component's options.</td>
    <td>Array</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/select</code></td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the general field <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>
