---
layout: default
group: UI_Components_guide
subgroup: components
title: Wysiwyg component
menu_title: Wysiwyg component
version: 2.1
github_link: ui_comp_guide/components/ui-wysiwyg.md
---


## Wysiwyg options

Extends all `abstract` configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>$wysiwygEditorButton</td>
    <td></td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>content</td>
    <td>Initial wysiwyg content</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>elementSelector</td>
    <td>Type of html element that will be wrapped by wysiwyg editor</td>
    <td>String</td>
    <td>'textarea'</td>
  </tr>
  <tr>
    <td>links<br>value</td>
    <td>Look property "template" in dictionary properties block <br>Links the component property "value" with provider uses path that is declared in the "dataScope" property</td>
    <td>Object<br>String</td>
    <td>${ $.provider }:${ $.dataScope }'</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/element/wysiwyg</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>'ui/form/field'</td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the child component’s .html template. which child?</td>
    <td>String</td>
    <td>'ui/form/element/wysiwyg'</td>
  </tr>
</table> 