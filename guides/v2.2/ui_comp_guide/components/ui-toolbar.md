---
layout: default
group: UI_Components_guide
subgroup: components
title: Toolbar component
menu_title: Toolbar component
version: 2.2
github_link: ui_comp_guide/components/ui-toolbar.md
---
## Overview

The Toolbar component implements a container for the listing-related elements like paging, mass actions, filters, bookmarks. That is, it aggregates all elements that serve as tools and renders them at the top of the main table. 

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/toolbar.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/toolbar.js)

## Toolbar configuration

Extends all [UiCollection]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Toolbar-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>sticky</code></td>
    <td>Whether the toolbar has a fixed position. When set to <code>true</code>, elements like paging, filters, and table headers stay in the viewport's area, no matter where the scroll position is.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>stickyClass</code></td>
    <td>A list of aditional CSS classes added to the root node of the <code>.html</code> template specified in <code>StickyTmpl</code>.</td>
    <td>{<br>[name:string]: boolean<br>}</td>
    <td>{<br><code>'sticky-header': true</code><br>}</td>
  </tr>
  <tr>
    <td><code>stickyTmpl</code></td>
    <td>Path to the toolbar's template for the fixed position.</td>
    <td>String</td>
    <td><code>ui/grid/sticky/sticky</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/toolbar</code></td>
  </tr>
</table>
