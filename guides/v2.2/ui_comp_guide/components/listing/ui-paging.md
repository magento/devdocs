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
    <td><code>totalTmpl</code></td>
    <td>Path to the <code>.html</code> template for rendering the total amount of found records.</td>
    <td>String</td>
    <td><code>ui/grid/paging-total</code></td>
  </tr>
  <tr>
    <td><code>sizesConfig</code></td>
    <td>Configuration that is passed to the <code>Sizes</code> component.</td>
    <td>Object</td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/paging/paging</code></td>
  </tr>
</table>
