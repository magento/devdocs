---
layout: default
group: UI_Components_guide
subgroup: components
title: Bookmarks component
menu_title: Bookmarks component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-bookmarks.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/controls/columns.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)

## Bookmarks configuration

Extends all [uiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Bookmarks specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>newViewLabel</td>
    <td>Default label for a new bookmark.</td>
    <td></td>
    <td>New View</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/controls/bookmarks/bookmarks</td>
  </tr>
  <tr>
    <td>viewTmpl</td>
    <td>Path to the .html template used to render each bookmark in the list.</td>
    <td>String</td>
    <td>ui/grid/controls/bookmarks/view</td>
  </tr>
</table>