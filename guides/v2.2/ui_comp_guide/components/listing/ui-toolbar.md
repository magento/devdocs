---
layout: default
group: UI_Components_guide
subgroup: components
title: Toolbar component
menu_title: Toolbar component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-toolbar.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/toolbar.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/toolbar.js)

## Toolbar configuration

Extends all [UiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Toolbar own configuration:
<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>sticky</td>
    <td>Whether the toolbar has a fixed position. When set to true, elements like paging, filters, and table's header stay in the viewport's area no matter where the scroll position is.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>stickyClass</td>
    <td>A list of aditional CSS classes added to the root node of the .html template specified in StickyTmpl.</td>
    <td>{<br>[name:string]: boolean<br>}</td>
    <td>{<br>'sticky-header': true<br>}</td>
  </tr>
  <tr>
    <td>stickyTmpl</td>
    <td>Path to the toolbar's template for the fixed position.</td>
    <td>String</td>
    <td>ui/grid/sticky/sticky</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/toolbar</td>
  </tr>
</table>