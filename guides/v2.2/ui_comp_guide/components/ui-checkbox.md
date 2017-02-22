---
layout: default
group: UI_Components_guide
subgroup: components
title: checkbox component
menu_title: checkbox component
version: 2.2
github_link: ui_comp_guide/components/ui-checkbox.md
---

## Сheckbox configuration

Extends all `abstract` configuration. 

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>checked</td>
    <td>Is responsible for initial checkbox state (checked or unchecked).</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>Is responsible for render single or multiple set of elements</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>prefer</td>
    <td>The input type for element that will be rendered.(Sets template to "elementTmpl" property depending on defined property)</td>
    <td>String</td>
    <td>checkbox</td>
  </tr>
  <tr>
    <td>valueMap</td>
    <td>Converts the component value to expected result. As example we can conver value '0' to 'false' if that is needed. That looks like this:<br>{<br>'0': false<br>}</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>templates<br>radio<br>checkbox<br>toggle</td>
    <td>The'templates' property is responsible for paths to templates in which described type and view of DOM "input" element. For one instance uses only one template that declared in the templates object property. For template that will be rendered is responds "refer" property.</td>
    <td>Object<br>String<br>String<br>String</td>
    <td>ui/form/components/single/radio<br>ui/form/components/single/checkbox<br>ui/form/components/single/switcher</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/element/single-checkbox</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/form/field</td>
  </tr>
</table>
