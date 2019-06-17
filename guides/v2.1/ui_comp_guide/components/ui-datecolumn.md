---
group: ui-components-guide
subgroup: components
title: DateColumn component
menu_title: DateColumn component
---

The DateColumn component implements a table column that displays dates.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>dateFormat</code></td>
    <td>Date format for the displayed column's values.</td>
    <td>String</td>
    <td><code>MMM d, YYYY h:mm:ss A</code></td>
  </tr>
</table>

## Source files

Extends [`Column`]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html):

- [`app/code/Magento/Ui/view/base/web/js/grid/columns/date.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/date.js)