---
layout: default
group: UI_Components_guide
subgroup: components
title: actionDelete component
menu_title: actionDelete component
version: 2.2
github_link: ui_comp_guide/components/ui-actiondelete.md
---

## actionDelete options

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
    <td>Magento_Ui/js/dynamic-rows/action-delete</td>
  </tr>
  <tr>
    <td>links<br>value</td>
    <td>Used for mutual tracking property changes. links’s value is an object, composed of the following:<br>key: name of the internal property or method which sends and receives the notifications.<br>value - name of the property or method which sends and receives the notifications. Can use string templates.</td>
    <td>Object<br>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/dynamic-rows/cells/action-delete</td>
  </tr>
</table>