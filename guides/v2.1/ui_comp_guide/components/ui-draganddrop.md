---
group: ui-components-guide
subgroup: components
title: DragAndDrop component
menu_title: DragAndDrop component
---

The DragAndDrop component is an [extension](https://glossary.magento.com/extension) for [Columns]({{ page.baseurl }}/ui_comp_guide/components/ui-columns.html), allowing users to change columns position in the table.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>enabled</code></td>
    <td>Whether the component is allowed to change the position of columns.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>fixedX</code></td>
    <td>Whether the column has a fixed position on the X-axis. That is, whether it can be moved horizontally.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>fixedY</code></td>
    <td>Whether the column has a fixed position on the Y-axis. That is, whether it can be moved vertically.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>noSelectClass</code></td>
    <td>CSS class applied to the table when one of its columns is being dragged.</td>
    <td>String</td>
    <td><code>_no-select</code></td>
  </tr>
</table>

## Source files

Extends [`UiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

- [`app/code/Magento/Ui/view/base/web/js/grid/dnd.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/dnd.js)