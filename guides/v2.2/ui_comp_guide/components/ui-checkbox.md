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
    <td>Initial checkbox state (selected or cleared). The default value is "false", the checkbox is cleared.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>multiple</td>
    <td>Render multiple elements.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>prefer</td>
    <td>The input type of the element to be rendered. Can be either radio button, checkbox or toggle key. Changing this value also changes the "elementTmpl", originally defined in the parent (<code>abstract</code>) component.</td>
    <td>String</td>
    <td>checkbox</td>
  </tr>
  <tr>
    <td>valueMap</td>
    <td>Convert the component's value to the expected type. For example, you can set to convert '0' to 'false', this would look like following:<br>{<br>'0': false<br>}</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>templates
<ul>
<li>radio</li>
<li>checkbox</li>
<li>toggle</li>
</ul>
</td>
    <td>Paths to templates for all possible types of input elements. The exact template to be used for rendering is defined by the <code>prefer</code> property.</td>
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
