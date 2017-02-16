---
layout: default
group: UI_Components_guide
subgroup: components
title: Range component
menu_title: Range component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-range.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/filters/range.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/filters/range.js)

## Range configuration

Extends all [Multiline]({{page.baseurl}}ui_comp_guide/components/ui-multiline.md) configuration.

Range own configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>rangeType</td>
    <td>Defines what kind of input elements range consists of. E.g. if the value is 'date' then range will include two date fields.</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/filters/elements/group</td>
  </tr>
</table>