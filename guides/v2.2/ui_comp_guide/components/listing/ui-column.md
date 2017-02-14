---
layout: default
group: UI_Components_guide
subgroup: components
title: Column component
menu_title: Column component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-column.md
---

## Column overview
The Column component is a collection of columns and it provides an interface for such actions as showing and hiding columns. The interface contains the following information:

Total number of all available columns in a grid
Number of columns currently active/displayed
Another task of the Column component is to provide data about column state to the admin.

There is no need to duplicate information about the columns to be displayed in the Column component. You must define the append to element on every column child element and reference the parent using the appends. Another way to give access to the child element is to give a link to it when defining the column container.

## Column configuration

Extends all [`UiElement`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

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
    <td>ui/grid/cells/text</td>
  </tr>
  <tr>
    <td>controlVisibility</td>
    <td>Whether columns visibility can be controlled by user in the corresponding ColumnsControls component</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>disableAction</td>
    <td>Allows to disable any described action.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>draggable</td>
    <td>Defines whether user can change column's position in a table by grabbing column's header and dragging it across the table.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>editor</td>
    <td></td>
    <td>String | Object</td>
    <td>-</td>
  </tr>
  <tr>
    <td>fieldClass</td>
    <td>Additonal CSS classes added to the column's field element.</td>
    <td>{[name: String]: Boolean}</td>
    <td>''</td>
  </tr>
  <tr>
    <td>filter</td>
    <td>Holds a reference to one of the available filter types defined in the Filters component. If value represents an object, then it is consider ed to be the definition of a custom filter element unless it contains the "filterType" field.In the last case such an object will be an extension of the referenced filter element.</td>
    <td>String | Object</td>
    <td></td>
  </tr>
  <tr>
    <td>headerTmpl</td>
    <td>Defines path to the tamplate that will be used to render column's header cell.</td>
    <td>String</td>
    <td>ui/grid/columns/text</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Column's label that is shown in it's header cell.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>sortable</td>
    <td>Whether column's fields can be used to sort records in a table.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>sorting</td>
    <td>Indicates sorting direction of column's fields. It can be ascending (asc), descending (desc) or disabled (false).</td>
    <td>'asc' | 'desc' | Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>statefull</td>
    <td>Defined in parent <a href="{{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html">uiElement</td>
    <td></td>
    <td>{visible: true, sorting: true}</td>
  </tr>
  <tr>
    <td>templates.fieldAction</td>
    <td>Describes action that will be applied when user clicks on one of the column's fields.</td>
    <td><a href="#column_action">ColumnAction</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Defines the inital visibility state of a column, that is whether it will be rendered in a table or not.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>

### ColumnAction interface {#column_action}
<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>params</td>
    <td>A list of arguments that will be passed to the method.</td>
    <td>Array</td>
    <td>false</td>
  </tr>
  <tr>
    <td>provider</td>
    <td>Reference to component.</td>
    <td>String</td>
    <td>true</td>
  </tr>
  <tr>
    <td>target</td>
    <td>Name of the component's method to be invoked.</td>
    <td>String</td>
    <td>true</td>
  </tr>
</table>


## Reference API

JS constructor: `Magento/Ui/view/base/web/js/grid/columns/column.js`.