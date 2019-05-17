---
group: ui-components-guide
subgroup: components
title: ColumnsControls component
menu_title: ColumnsControls component
---

The ColumnsControls component is a collection of columns. It provides an interface for showing and hiding columns. The interface contains:

* The total number of all available columns in a grid.
* The number of columns currently active/displayed.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>minVisible</code></td>
    <td>Minimum number of columns that must be visible</td>
    <td>Number</td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>maxVisible</code></td>
    <td>Maximum number of columns that can be visible</td>
    <td>Number</td>
    <td><code>30</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template</td>
    <td>String</td>
    <td><code>ui/grid/controls/columns</code></td>
  </tr>
</table>

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

- [`app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)
