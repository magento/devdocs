---
group: ui-components-guide
subgroup: components
title: Paging component
menu_title: Paging component
---

The Paging component implements pagination in grids implemented using [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html). It also creates an instance of the child Sizes component which allows to define the number of records displayed in the associated table.

## Configuration options

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

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

- [app/code/Magento/Ui/view/base/web/js/grid/paging/paging.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/paging/paging.js)
