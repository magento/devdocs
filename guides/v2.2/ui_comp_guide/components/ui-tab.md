---
layout: default
group: UI_Components_guide
subgroup: components
title: Tab component
menu_title: Tab component
version: 2.2
github_link: ui_comp_guide/components/ui-tab.md
---

## Tab configuration

Extends all [`uiCollection`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Extends all `tab` configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s JS constructor, in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/area</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>templates/layout/tabs/tab/default</td>
  </tr>
  <tr>
    <td>uniqueNs</td>
    <td>Unique namespace for the component.</td>
    <td>String</td>
    <td>params.activeArea</td>
  </tr>
</table>