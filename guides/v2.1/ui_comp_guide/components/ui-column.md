---
group: ui-components-guide
subgroup: components
title: Column component
menu_title: Column component
---

The Column component implements a basic column in [Listing]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html).

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>component</code></td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/grid/columns/column</code></td>
  </tr>
  <tr>
    <td><code>bodyTmpl</code></td>
    <td>Path to the template used for rendering column's fields in the table's body.</td>
    <td>String</td>
    <td><code>ui/grid/cells/text</code></td>
  </tr>
  <tr>
    <td><code>controlVisibility</code></td>
    <td>Whether a user can control column's visibility handled by the <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-columnscontrols.html">ColumnsControls component</a>.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>disableAction</code></td>
    <td>Disables the action set in the <code>templates.fieldAction</code> property.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>draggable</code></td>
    <td>Defines if a user can change column's position in the table by grabbing column's header and dragging it across the table.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>editor</code></td>
    <td />
    <td>String | Object</td>
    <td />
  </tr>
  <tr>
    <td><code>fieldClass</code></td>
    <td>Additional CSS classes added to the column's field elements.</td>
    <td>{[name: String]: Boolean}</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>filter</code></td>
    <td>Reference to one of the available filter types defined in the <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-filters.html">Filters component</a>. If the value represents an object containing the <code>filterType</code> field, this object is considered as an extension of the referenced filter element. If there's no such field in the value object, it is considered as a definition of a custom filter element.</td>
    <td>String | Object</td>
    <td />
  </tr>
  <tr>
    <td><code>headerTmpl</code></td>
    <td>Path to the <code>.html</code> template for the column's header.</td>
    <td>String</td>
    <td><code>ui/grid/columns/text</code></td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>The column label displayed in the header.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td><code>sortable</code></td>
    <td>Whether column's fields can be used to sort records in a table.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>sorting</code></td>
    <td>Column's sorting order. Can be ascending (<code>asc</code>), descending (<code>desc</code>) or none (<code>false</code>). Setting <code>sorting</code> to <code>false</code> does not disable sorting, which is defined by the <code>sortable</code> option.</td>
    <td><code>asc</code> | <code>desc</code> | Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>statefull</code></td>
    <td>Defined in the parent <a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html">uiElement class</a>.</td>
    <td />
    <td><code>{visible: true, sorting: true}</code></td>
  </tr>
  <tr>
    <td><code>templates.fieldAction</code></td>
    <td>The action performed on the column's field click.</td>
    <td><a href="#column_action">ColumnAction</a></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>visible</code></td>
    <td>Initial component's visibility. When set to <code>false</code>, the <code>display: none</code> CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
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
    <td><code>params</code></td>
    <td>A list of arguments that will be passed to the method.</td>
    <td>Array</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>provider</code></td>
    <td>Reference to component.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>target</code></td>
    <td>Name of the component's method to be invoked.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
</table>

## Source files

Extends [`UiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html):

- [`Magento/Ui/view/base/web/js/grid/columns/column.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/column.js)
