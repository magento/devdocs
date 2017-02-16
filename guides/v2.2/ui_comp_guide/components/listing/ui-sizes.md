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
    <td>Maximum number of items.</td>
    <td>Number</td>
    <td>20</td>
  </tr>
  <tr>
    <td>minSize</td>
    <td>Minimun allowed number of items.</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>options</td>
    <td>The initial list of available sizes.</td>
    <td><br>{<br>[name: number]: SizeOption<br>}<br></td>
    <td>[20, 30, 50, 100, 200]</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/paging/sizes</td>
  </tr>
  <tr>
    <td>value</td>
    <td>The intital number of items per page.</td>
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
    <td>Label displayed in a rendered options list. It's value is usually equal to the corresponding "value" property.</td>
    <td>String|Number</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Options identifier which reprsents the page size.</td>
    <td>Number</td>
    <td>Required</td>
  </tr>
</table>