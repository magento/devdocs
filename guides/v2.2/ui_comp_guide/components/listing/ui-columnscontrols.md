---
layout: default
group: UI_Components_guide
subgroup: components
title: ColumnsControls component
menu_title: ColumnsControls component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-сolumnsсontrols.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/controls/columns.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)

## ColumnsControls configuration

Extends all [uiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

ColumnsControls specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>minVisible</td>
    <td>Minimum number of columns that must be visible.</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>maxVisible</td>
    <td>Maximum number of columns that can be visible.</td>
    <td>Number</td>
    <td>30</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/controls/columns</td>
  </tr>
</table>