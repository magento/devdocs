---
layout: default
group: UI_Components_guide
subgroup: components
title: SelectColumn component
menu_title: SelectColumn component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-selectсolumn.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/columns/select.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/select.js)

## SelectColumn configuration

Extends all [Column]({{page.baseurl}}ui_comp_guide/components/listing/ui-column.md) configuration.

SelectColumn specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>options</td>
    <td>An array of objects used to display field's content by matching an associated record's value
with the value of one of the provided elements in options.</td>
    <td>Array<Option></td>
    <td>ui/grid/cells/thumbnail</td>
  </tr>
</table>


### `Option` interface

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>value</td>
    <td>Option's identifier.</td>
    <td>String | Number</td>
    <td>true</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Label to be displayed in a column's field.</td>
    <td>String</td>
    <td>true</td>
  </tr>
</table>


