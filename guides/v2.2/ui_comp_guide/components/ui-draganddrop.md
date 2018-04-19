---
layout: default
group: UI_Components_guide
subgroup: components
title: DragAndDrop component
menu_title: DragAndDrop component
version: 2.2
github_link: ui_comp_guide/components/ui-draganddrop.md
---

## Overview

The DragAndDrop component is an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} for [Columns]({{page.baseurl}}/ui_comp_guide/components/ui-columns.html), allowing users to change columns position in the table.

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/dnd.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/dnd.js)

## Configuration options

Extends all [UiCollection]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

DragAndDrop own configuration:

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
    <td>Whether the column has a fixed positon on the X-axis. That is, whether it can be moved horizontally.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>fixedY</code></td>
    <td>Whether the column has a fixed positon on the Y-axis. That is, whether it can be moved vertically.</td>
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
