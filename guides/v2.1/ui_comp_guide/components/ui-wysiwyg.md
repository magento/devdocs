---
layout: default
group: UI_Components_guide
subgroup: components
title: Wysiwyg component
menu_title: Wysiwyg component
version: 2.1
github_link: ui_comp_guide/components/ui-wysiwyg.md
---

## Overview

The Wysiwyg component is an {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} for the [TinyMCE editor](https://www.tinymce.com/). Wysiwyg integrates editor's instance into the [Form component]({{page.baseurl}}/ui_comp_guide/components/ui-form.html). It expects to receive complete {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} declaration in the `content` option, which should contain both {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}markup{% endglossarytooltip %} and the script responsible for creating the editor's instance.

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
    <td><code>component</code></td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/wysiwyg</code></td>
  </tr>
  <tr>
    <td><code>content</code></td>
    <td>Initial WYSIWYG content.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td><code>elementSelector</code></td>
    <td>Selector of the HTML element that is wrapped by the WYSIWYG editor.</td>
    <td>String</td>
    <td><code>textarea</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the template particular field type template, specific for this component.</td>
    <td>String</td>
    <td><code>ui/form/element/wysiwyg</code></td>
  </tr>
  <tr>
    <td><code>links</code>
<li>
<code>value</code>
</li>
</td>
    <td><a href="{{page.baseurl}}/ui_comp_guide/concepts/ui_comp_linking_concept.html">Links</a> the component's <code>value</code> property with the provider, using the path that is declared in the <code>dataScope</code> property.</td>
    <td>Object<br>String</td>
    <td><code>${ $.provider }:${ $.dataScope }</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the general Field template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>

