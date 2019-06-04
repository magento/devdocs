---
group: ui-components-guide
subgroup: components
title: ThumbnailColumn component
menu_title: ThumbnailColumn component
---

The ThumbnailColumn component implements a column containing images associated with records of the table. Each field of this column contains an image preview. When a user click on the preview, a pop up window with the detailed view opens.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>bodyTmpl</code></td>
    <td>Path to the template used for rendering a column's fields in the table's body.</td>
    <td>String</td>
    <td><code>ui/grid/cells/thumbnail</code></td>
  </tr>
  <tr>
    <td><code>fieldClass</code></td>
    <td>Additional CSS classes added to the column's field elements.</td>
    <td><code>{[name: string]: boolean}</code></td>
    <td><code>{'data-grid-thumbnail-cell': true}</code></td>
  </tr>
</table>

## Source files

Extends [`Column`]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html):

- [app/code/Magento/Ui/view/base/web/js/grid/columns/thumbnail.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/thumbnail.js)
