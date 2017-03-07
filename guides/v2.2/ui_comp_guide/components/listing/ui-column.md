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
    <td>Path to the template used for rendering column's fields in the table's body.</td>
    <td>String</td>
    <td>ui/grid/cells/text</td>
  </tr>
  <tr>
    <td>controlVisibility</td>
    <td>Whether a user can control column's visibility handled by the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-сolumnsсontrols.html">ColumnsControls component</a>.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>disableAction</td>
    <td>Disables the action set in the templates.fieldAction property.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>draggable</td>
    <td>Defines if a user can change column's position in the table by grabbing column's header and dragging it across the table.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>editor</td>
    <td></td>
    <td>String | Object</td>
    <td></td>
  </tr>
  <tr>
    <td>fieldClass</td>
    <td>Additonal CSS classes added to the column's field elements.</td>
    <td>{[name: String]: Boolean}</td>
    <td>''</td>
  </tr>
  <tr>
    <td>filter</td>
    <td>Reference to one of the available filter types defined in the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-filters.html">Filters component</a>. If the value represents an object containing the "filterType" field, this object is considered as an extension of the referenced filter element. If there's no such field in the value object, it is considered as a definition of a custom filter element.</td>
    <td>String | Object</td>
    <td></td>
  </tr>
  <tr>
    <td>headerTmpl</td>
    <td>Path to the .html template for the column's header.</td>
    <td>String</td>
    <td>ui/grid/columns/text</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Column's label displayed in it's header.</td>
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
    <td>Column's sorting order. Can be ascending (asc), descending (desc) or none (false). Setting "sorting" to "false" does not disable sorting, which is defined by the "sortable" option.</td>
    <td>'asc' | 'desc' | Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>statefull</td>
    <td>Defined in the parent <a href="{{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html">uiElement class</a>.</td>
    <td></td>
    <td>{visible: true, sorting: true}</td>
  </tr>
  <tr>
    <td>fieldAction</td>
    <td>The action performed on the column's field click.</td>
    <td><a href="#column_action">ColumnAction</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Initial component's visibility. When set to "false", the "display: none" CSS style is added to the component's DOM block.</td>
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
    <th>Required</th>
  </tr>
  <tr>
    <td>params</td>
    <td>A list of arguments that will be passed to the method.</td>
    <td>Array</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td>provider</td>
    <td>Reference to component.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>target</td>
    <td>Name of the component's method to be invoked.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
</table>


## Reference API

JS constructor: `Magento/Ui/view/base/web/js/grid/columns/column.js`.