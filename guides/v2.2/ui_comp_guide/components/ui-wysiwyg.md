---
layout: default
group: UI_Components_guide
subgroup: components
title: Wysiwyg component
menu_title: Wysiwyg component
version: 2.2
github_link: ui_comp_guide/components/ui-wysiwyg.md
---

## Configuration options

Extends all `abstract` configuration.

Wysiwyg-specific options:

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/wysiwyg</code></td>
  </tr>
  <tr>
    <td>content</td>
    <td>Initial WYSIWYG content.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>elementSelector</td>
    <td>The path Type of the HTML element that is wrapped by the WYSIWYG editor.</td>
    <td>String</td>
    <td><code>textarea</code></td>
  </tr>
  <tr>
    <td>elementTmpl</td>
    <td>The path to the template particular field type template, specific for this component.</td>
    <td>String</td>
    <td><code>ui/form/element/wysiwyg</code></td>
  </tr>
  <tr>
    <td>links
<li>
value
</li>
</td>
    <td><a href="{{page.baseurl}}ui_comp_guide/concepts/ui_comp_linking_concept.html">Links</a> the component's <code>value</code> property with the provider, using the path that is declared in the <code>dataScope</code> property.</td>
    <td>Object<br>String</td>
    <td><code>${ $.provider }:${ $.dataScope }</code></td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the general Field template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
  <tr>
    <td>$wysiwygEditorButton</td>
    <td></td>
    <td>String</td>
    <td>''</td>
  </tr>
</table>
