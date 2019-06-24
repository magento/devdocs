---
group: ui-components-guide
subgroup: components
title: Range component
menu_title: Range component
---

The Range component implements the range for filtering rows in a grid. Visually, this component represents two input fields of `date` or `text` type, for entering the "from" and "to" range limits.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>rangeType</code></td>
    <td>Defines what kind of input elements the range contains. For example, if the value is <code>date</code>, then range includes two date fields.</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/filters/elements/group</code></td>
  </tr>
</table>

## Source files

Extends [`Multiline`]({{ page.baseurl }}/ui_comp_guide/components/ui-multiline.html):

- [app/code/Magento/Ui/view/base/web/js/grid/filters/range.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/filters/range.js)
