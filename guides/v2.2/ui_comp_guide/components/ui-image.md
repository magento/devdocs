---
layout: default
group: UI_Components_guide
subgroup: components
title: Image component
menu_title: Image component
version: 2.2
github_link: ui_comp_guide/components/ui-image.md
---

## Image configuration

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
    <td>Magento_Ui/js/form/element/media</td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the .html template for the particular type of the field component (image).</td>
    <td>String</td>
    <td>ui/form/element/media</td>
  </tr>
  <tr>
    <td>links <ul><li>value</li></ul></td>
    <td>Used to break the link established in the <code>link</code> property of the parent (abstract) component.</td>
    <td>Object
<li>Boolean</li></td>
    <td>false</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the field general .html template.</td>
    <td>String</td>
    <td>ui/form/field</td>
  </tr>
</table>
