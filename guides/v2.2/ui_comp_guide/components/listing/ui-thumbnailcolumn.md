---
layout: default
group: UI_Components_guide
subgroup: components
title: ThumbnailColumn component
menu_title: ThumbnailColumn component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-thumbnailcolumn.md
---


Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/columns/thumbnail.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/thumbnail.js)

## ThumbnailColumn configuration

Extends all [Column]({{page.baseurl}}ui_comp_guide/components/listing/ui-column.md) configuration.

ThumbnailColumn specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>bodyTmpl</td>
    <td>Path to the template that is used to render column's field a table's body.</td>
    <td>String</td>
    <td>ui/grid/cells/thumbnail</td>
  </tr>
  <tr>
    <td>fieldClass</td>
    <td>Additonal CSS classes added to the column's field element.</td>
    <td>{[name: string]: boolean}</td>
    <td>{'data-grid-thumbnail-cell': true}</td>
  </tr>
</table>