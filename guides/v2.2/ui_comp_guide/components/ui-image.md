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
    <td>The path to the child component’s .html template.</td>
    <td>String</td>
    <td>ui/form/element/media</td>
  </tr>
  <tr>
    <td>links <ul><li>value</li></ul></td>
    <td>Used for mutual tracking property changes. links’s value is an object, composed of the following:key: name of the internal property or method which sends and receives the notifications.value - name of the property or method which sends and receives the notifications. Can use string templates.Unlinks the component property "value" &lt;p class="q"&gt;this needs explanation&lt;/p&gt;</td>
    <td>Object<br>&lt;li&gt;Boolean&lt;/li&gt;</td>
    <td>false</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/form/field</td>
  </tr>
</table>
