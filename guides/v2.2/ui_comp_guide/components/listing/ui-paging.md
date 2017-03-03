---
layout: default
group: UI_Components_guide
subgroup: components
title: Paging component
menu_title: Paging component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-paging.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/paging/paging.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/paging/paging.js)

## Paging configuration

Extends all [Multiline]({{page.baseurl}}ui_comp_guide/components/ui-multiline.md) configuration.

Paging own configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>totalTmpl</td>
    <td>Path to the .htnk template for rendering the total amount of found records.</td>
    <td>String</td>
    <td>ui/grid/paging-total</td>
  </tr>
  <tr>
    <td>sizesConfig</td>
    <td>Configuration that is passed to the Sizes component.</td>
    <td>Object</td>
    <td>-</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/paging/paging</td>
  </tr>
</table>