---
layout: default
group: UI_Components_guide
subgroup: components
title: Sizes component
menu_title: Sizes component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-sizes.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/paging/paging.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/paging/paging.js)

## Sizes configuration

Extends all [Multiline]({{page.baseurl}}ui_comp_guide/components/ui-multiline.md) configuration.

Sizes own configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>maxSize</td>
    <td>Maximum allowed number of rows.</td>
    <td>Number</td>
    <td>20</td>
  </tr>
  <tr>
    <td>minSize</td>
    <td>Minimun allowed number of rows.</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>options</td>
    <td>The initial list of available table sizes (number of rows).</td>
    <td><br>{<br>[name: number]: SizeOption<br>}<br></td>
    <td>[20, 30, 50, 100, 200]</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/paging/sizes</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Initial number of rows per page.</td>
    <td>Number</td>
    <td>20</td>
  </tr>
</table>

### SizeOption interafce

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>label</td>
    <td>Label displayed in the rendered options list. This label is usually equal to the corresponding "value" property.</td>
    <td>String|Number</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Options identifier which reprsents the table size.</td>
    <td>Number</td>
    <td>Required</td>
  </tr>
</table>