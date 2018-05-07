---
layout: default
group: UI_Components_guide
subgroup: components
title: ActionsColumn component
menu_title: ActionsColumn component
version: 2.2
github_link: ui_comp_guide/components/ui-actionscolumn.md
---

## Overview

The ActionsColumns component implements a table's column responsible for displaying and performing a list of record-related actions.

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js)

## Configuration options

Extends all [Column]({{page.baseurl}}/ui_comp_guide/components/ui-column.html) configuration.

ActionsColumn-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>bodyTmpl</code></td>
    <td>Path to the <code>.html</code> template used to render a column's field in the table's body.</td>
    <td>String</td>
    <td><code>ui/grid/cells/actions</code></td>
  </tr>
  <tr>
    <td><code>draggable</code></td>
    <td>Defines whether a user can change column's position in the table by grabbing column's header and draging it across the table.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>fieldClass</code></td>
    <td>Additonal CSS classes added to the column's field elements.</td>
    <td>{[name: string]: Boolean}</td>
    <td><code>{'data-grid-actions-cell': true}</code></td>
  </tr>
  <tr>
    <td><code>sortable</code></td>
    <td>Whether column's fields can be used to sort records in the table.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>templates.actions</code></td>
    <td>A list of actions that will be displayed in column's fields.</td>
    <td>{[name: String]: <code>ActionItem</code>}</code></td>
    <td>-</td>
  </tr>
</table>

### ActionItem interface

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>callback</code></td>
    <td>Custom action's handler.</td>
    <td><a href="{{page.baseurl}}/ui_comp_guide/components/ui-column.html#column_action">ColumnAction</a> | Array &lt;ColumnAction&gt;  </td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>confirm</code></td>
    <td>Confirmation message shown before applying the action.</td>
    <td><br>{<br>title: string;<br>message: string<br>}<br></td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>href</code></td>
    <td>The link to open on when the column's element is clicked.</td>
    <td>String</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>index</code></td>
    <td>Action's identifier.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>Label to be displayed in the field.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
</table>
