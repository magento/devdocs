---
layout: default
group: UI_Components_guide
subgroup: components
title: Hidden component
menu_title: Hidden component
version: 2.1
github_link: ui_comp_guide/components/ui-hidden.md
---

## Overview

The Hidden component is a form element that implements the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} `<input type="hidden">` field.

## Configuration options

Extends all `abstract` configuration.

Hidden-specific configuration:

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
    <td><code>Magento_Ui/js/form/element/abstract</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/element/hidden</code></td>
  </tr>
</table>
