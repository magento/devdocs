---
group: ui-components-guide
subgroup: components
title: DynamicRows component
menu_title: DynamicRows component
---

The DynamicRows component is a dynamic collection of records. The user can edit the records, change their position, and navigate through the collection.

## Configuration options

<table>
  <tr>
    <th>
      Option
    </th>
    <th>
      Description
    </th>
    <th>
      Type
    </th>
    <th>
      Default
    </th>
  </tr>
  <tr>
    <td>
      <code>addButton</code>
    </td>
    <td>
      Renders button for adding a new row.
    </td>
    <td>
      Boolean
    </td>
    <td />
  </tr>
  <tr>
    <td>
      <code>addButtonLabel</code>
    </td>
    <td>
      Label for the adding a new row button.
    </td>
    <td>
      String
    </td>
    <td>
      <code>'Add'</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>additionalClasses</code>
    </td>
    <td>
      Sets custom classes to the component's DOM block.
    </td>
    <td>
      Object
    </td>
    <td>
      <code>{}</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>defaultRecord</code>
    </td>
    <td>
      Renders the default (first) row when the component is
      initialized without data.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>deleteProperty</code>
    </td>
    <td>
      The property added to a record data object when the record is
      deleted. Applied if the <code>deleteValue</code> option is
      enabled.
    </td>
    <td>
      String
    </td>
    <td>
      <code>'delete'</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>dndConfig</code>
      <ul>
        <li><code>component</code>
        </li>
        <li><code>template</code>
        </li>
        <li><code>enabled</code>
        </li>
      </ul>
    </td>
    <td>
      Configuration of the drag and drop (DND) plugin for
      dynamicRows:
      <ul>
        <li>Link to the DND plugin <code>.js</code> file.
        </li>
        <li>Link to the DND plugin <code>.html</code> template
        file.
        </li>
        <li>Enables or disables DND for dynamicRows
        </li>
      </ul>
    </td>
    <td>
      Object
		<ul>
      <li>String</li>
      <li>String</li>
      <li>Boolean</li>
		</ul>
    </td>
    <td>
      <ul>
        <li>
          <code>Magento_Ui/js/dynamic-rows/dnd</code>
        </li>
        <li>
          <code>ui/dynamic-rows/cells/dnd</code>
        </li>
        <li><code>true</code>
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <code>collapsibleHeader</code>
    </td>
    <td>
      Enables or disables the collapsible functionality for the
      header (if columns header is enabled).
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>columnsHeader</code>
    </td>
    <td>
      Hides or shows columns header.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>columnsHeaderClasses</code>
    </td>
    <td>
      Adds custom class to columns header (if the column header is
      enabled).
    </td>
    <td>
      String
    </td>
    <td>
      ''
    </td>
  </tr>
  <tr>
    <td>
      <code>component</code>
    </td>
    <td>
      The path to the component’s JS constructor in terms of
      RequireJS.
    </td>
    <td>
      String
    </td>
    <td>
      <code>Magento_Ui/js/dynamic-rows/dynamic-rows</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>currentPage</code>
    </td>
    <td>
      Current page.
    </td>
    <td>
      Number
    </td>
    <td>
      <code>1</code>
    </td>
  </tr>
  <tr>
    <td>
     <code> deleteValue</code>
    </td>
    <td>
      Adds the <code>deleteProperty</code> property in the data
      object for the deleted record.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>disabled</code>
    </td>
    <td>
      Initial component's state. When set to <code>true</code>, users can't
      take action on the element.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>fallbackResetTpl</code>
    </td>
    <td>
      The path to the fallback reset (restore to default button)
      <code>.html</code> template.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/form/element/helper/fallback-reset-link</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>identificationProperty</code>
    </td>
    <td>
      The identification property added to the record data object.
    </td>
    <td>
      String
    </td>
    <td>
      <code>record_id</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>pageSize</code>
    </td>
    <td>
      The number of records on one page.
    </td>
    <td>
      Number
    </td>
    <td>
      <code>20</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>recordTemplate</code>
    </td>
    <td>
      The path to the <code>.html</code> template of a records(row). The list of templates is declared in the <code>templates</code>
      property.
    </td>
    <td>
      String
    </td>
    <td>
      <code>record</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>template</code>
    </td>
    <td>
      The path to the component’s <code>.html</code> template.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/dynamic-rows/templates/default</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>visible</code>
    </td>
    <td>
      Initial component's visibility. When set to <code>false</code>, the
      <code>display: none</code> CSS style is added to the
      component's DOM block.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
</table>
