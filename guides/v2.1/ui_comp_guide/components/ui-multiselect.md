---
layout: default
group: UI_Components_guide
subgroup: components
title: Multiselect component
menu_title: Multiselect component
version: 2.1
github_link: ui_comp_guide/components/ui-multiselect.md
---

## Overview

The Multiselect component provides the interface for a list or a data set. Multiselect allows selecting multiple items.

## Сonfiguration options
Extends all `abstract` and [Select]({{page.baseurl}}/ui_comp_guide/components/ui-select.html) configurations.

Multiselect-specific options:

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
    <td><code>Magento_Ui/js/form/element/multiselect</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the <code>.html</code> template of the particular field type (multiselect).</td>
    <td>String</td>
    <td><code>ui/form/element/multiselect</code></td>
  </tr>
  <tr>
    <td><code>size</code></td>
    <td>The number of options that are displayed in the multiselect UI.</td>
    <td>Number</td>
    <td><code>6</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the general field <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>



