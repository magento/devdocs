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

Image-specific options:

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>component</code></td>
    <td>The path to the component’s JS constructor in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/media</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the <code>.html</code> template for the particular type of the field component (image).</td>
    <td>String</td>
    <td><code>ui/form/element/media</code></td>
  </tr>
  <tr>
    <td><code>links</code> <ul><li><code>value</code></li></ul></td>
    <td>Used to break the link established in the <code>link</code> property of the parent (abstract) component.</td>
    <td>Object
<li>Boolean</li></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the field general <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>
