---
group: ui-components-guide
subgroup: components
title: Sizes component
menu_title: Sizes component
---

The Sizes component defines the maximum number of displayed records in a table (grid).

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>maxSize</code></td>
    <td>Maximum allowed number of rows.</td>
    <td>Number</td>
    <td><code>20</code></td>
  </tr>
  <tr>
    <td><code>minSize</code></td>
    <td>Minimum number of rows.</td>
    <td>Number</td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>The initial list of available table sizes (number of rows).</td>
    <td><br />{<br />[name: number]: SizeOption<br />}<br /></td>
    <td><code>[20, 30, 50, 100, 200]</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/paging/sizes</code></td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td>Initial number of rows per page.</td>
    <td>Number</td>
    <td><code>20</code></td>
  </tr>
</table>

### SizeOption interface

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>Label displayed in the rendered options list. This label is usually equal to the corresponding <code>value</code> property.</td>
    <td>String | Number</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td>Options identifier which represents the table size.</td>
    <td>Number</td>
    <td>Required</td>
  </tr>
</table>

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

- [app/code/Magento/Ui/view/base/web/js/grid/paging/sizes.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/paging/sizes.js)
