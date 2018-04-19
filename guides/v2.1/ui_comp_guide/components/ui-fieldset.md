---
layout: default
group: UI_Components_guide
subgroup: components
title: Fieldset сomponent
menu_title: Fieldset component
version: 2.1
github_link: ui_comp_guide/components/ui-fieldset.md
---

## Overview
The Fieldset component implements a container for visually-grouped form elements, such as buttons and form fields.

## Fieldset options
Extends all [`uiCollection`]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) and `collapsible` configuration.

Fieldset-specific options:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>additionalClasses</code></td>
    <td>Set custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>collapsible</code></td>
    <td>Make the fieldset collapsible.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>component</code></td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/components/fieldset</code></td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Initial component's state. When set to <code>true</code>, users can't take action on the element.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/fieldset</code></td>
  </tr>
  <tr>
    <td><code>visible</code></td>
    <td>Initial component's visibility. When set to <code>false</code>, the <code>display: none</code> CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
</table>
