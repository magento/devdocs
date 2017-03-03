---
layout: default
group: UI_Components_guide
subgroup: components
title: MultiselectColumn component
menu_title: MultiselectColumn component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-multiselectcolumn.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/columns/multiselect.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/multiselect.js)

## MultiselectColumn configuration

Extends all [Column]({{page.baseurl}}ui_comp_guide/components/listing/ui-column.html) configuration.

MultiselectColumn specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>bodyTmpl</td>
    <td>Path to the template that is used to render column's field in the table's body.</td>
    <td>String</td>
    <td>ui/grid/cells/multiselect</td>
  </tr>
  <tr>
    <td>controlVisibility</td>
    <td>Whether a user can control column's visibility handled by the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-сolumnsсontrols.html">ColumnsControls component</a>.</td>
    <td>String</td>
    <td>false</td>
  </tr>
  <tr>
    <td>draggable</td>
    <td>Defines if a user can change column's position in the table by grabbing column's header and dragging it across the table.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>fieldClass</td>
    <td>Additonal CSS classes added to the column's field elements.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td>{<br>'data-grid-checkbox-cell': true<br>}</td>
  </tr>
  <tr>
    <td>headerTmpl</td>
    <td>Path to the .html template for the column's header.</td>
    <td>String</td>
    <td>ui/grid/columns/multiselect</td>
  </tr>
  <tr>
    <td>preserveSelectionsOnFilter</td>
    <td>Whether to preserve selected items when a new filter value is applied.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>sortable</td>
    <td>Whether column's fields can be used to sort records in the table.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
</table>
