---
group: UI_Components_guide
subgroup: components
title: Bookmarks component
menu_title: Bookmarks component
version: 2.2
---

## Overview

The Bookmarks component stores active and changed state of a grid implemented using [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html). It includes the state of filters, columns position, applied sorting, pagination, and so on.

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js]({{ site.mage2200url }}app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js)

## Configuration options

Extends all [uiCollection]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Bookmarks-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>newViewLabel</code></td>
    <td>Default label for a new bookmark.</td>
    <td>String</td>
    <td><code>New View</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/controls/bookmarks/bookmarks</code></td>
  </tr>
  <tr>
    <td><code>viewTmpl</code></td>
    <td>Path to the <code>.html</code> template used to render each bookmark in the list.</td>
    <td>String</td>
    <td><code>ui/grid/controls/bookmarks/view</code></td>
  </tr>
</table>
