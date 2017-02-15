---
layout: default
group: UI_Components_guide
subgroup: components
title: ActionsColumn component
menu_title: ActionsColumn component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-actionscolumn.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/columns/actions.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/actions.js)

## ActionsColumn configuration

Extends all [Column]({{page.baseurl}}ui_comp_guide/components/listing/ui-column.md) configuration.

ActionsColumn specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>bodyTmpl</td>
    <td>Path to the template that is used to render column's field a table's body.</td>
    <td>String</td>
    <td>ui/grid/cells/actions</td>
  </tr>
  <tr>
    <td>draggable</td>
    <td>Defines whether user can change column's position in a table by grabbing column's header and draging it across the table.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>fieldClass</td>
    <td>Additonal CSS classes added to the column's field element.</td>
    <td>{[name: string]: boolean}</td>
    <td>{'data-grid-actions-cell': true}</td>
  </tr>
  <tr>
    <td>sortable</td>
    <td>Whether column's fields can be used to sort records in a table.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>templates.actions</td>
    <td>A list of actions that will be displayed in column's fields.</td>
    <td>{[name: string]: ActionItem}</td>
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
    <td>callback</td>
    <td>Custom action's handler.</td>
    <td><a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-column.md#column_action">ColumnAction</a> | Array &lt;ColumnAction&gt;  </td>
    <td>false</td>
  </tr>
  <tr>
    <td>confirm</td>
    <td>Confirmation message to be shown before applying action.</td>
    <td><br>{<br>title: string;<br>message: string<br>}<br></td>
    <td>false</td>
  </tr>
  <tr>
    <td>href</td>
    <td></td>
    <td>String</td>
    <td>false</td>
  </tr>
  <tr>
    <td>index</td>
    <td>Action's identifier.</td>
    <td>String</td>
    <td>true</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Label to be displayed in a field.</td>
    <td>String</td>
    <td>true</td>
  </tr>
</table>