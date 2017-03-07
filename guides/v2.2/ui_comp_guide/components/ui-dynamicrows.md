---
layout: default
group: UI_Components_guide
subgroup: components
title: DynamicRows component
menu_title: DynamicRows component
version: 2.2
github_link: ui_comp_guide/components/ui-dynamicrows.md
---

## DynamicRows configuration

Extends all [`uiCollection`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

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
      addButton
    </td>
    <td>
      Renders button for adding a new row.
    </td>
    <td>
      Boolean
    </td>
    <td></td>
  </tr>
  <tr>
    <td>
      addButtonLabel
    </td>
    <td>
      Label for the adding a new row button.
    </td>
    <td>
      String
    </td>
    <td>
      Add
    </td>
  </tr>
  <tr>
    <td>
      additionalClasses
    </td>
    <td>
      Sets custom classes to the component's DOM block.
    </td>
    <td>
      Object
    </td>
    <td>
      {}
    </td>
  </tr>
  <tr>
    <td>
      defaultRecord
    </td>
    <td>
      Renders the default (first) row when the component is
      initialized without data.
    </td>
    <td>
      Boolean
    </td>
    <td>
      false
    </td>
  </tr>
  <tr>
    <td>
      deleteProperty
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
      delete
    </td>
  </tr>
  <tr>
    <td>
      dndConfig
      <ul>
        <li>component
        </li>
        <li>template
        </li>
        <li>enabled
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
      Object<br />
      String<br />
      String<br />
      Boolean
    </td>
    <td>
      <ul>
        <li>
          <code>Magento_Ui/js/dynamic-rows/dnd</code>
        </li>
        <li>
          <code>ui/dynamic-rows/cells/dnd</code>
        </li>
        <li>true
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      collapsibleHeader
    </td>
    <td>
      Enables or disables the collapsible functionality for the
      header (if columns header is enabled).
    </td>
    <td>
      Boolean
    </td>
    <td>
      false
    </td>
  </tr>
  <tr>
    <td>
      columnsHeader
    </td>
    <td>
      Hides or shows columns header.
    </td>
    <td>
      Boolean
    </td>
    <td>
      true
    </td>
  </tr>
  <tr>
    <td>
      columnsHeaderClasses
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
      component
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
      currentPage
    </td>
    <td>
      Current page.
    </td>
    <td>
      Number
    </td>
    <td>
      1
    </td>
  </tr>
  <tr>
    <td>
      deleteValue
    </td>
    <td>
      Adds the <code>deleteProperty</code> property in the data
      object for the deleted record.
    </td>
    <td>
      Boolean
    </td>
    <td>
      false
    </td>
  </tr>
  <tr>
    <td>
      disabled
    </td>
    <td>
      Initial component's state. When set to "true", users can't
      take action on the element.
    </td>
    <td>
      Boolean
    </td>
    <td>
      false
    </td>
  </tr>
  <tr>
    <td>
      fallbackResetTpl
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
      identificationProperty
    </td>
    <td>
      The identification property added to the record data object.
    </td>
    <td>
      String
    </td>
    <td>
      record_id
    </td>
  </tr>
  <tr>
    <td>
      pageSize
    </td>
    <td>
      The number of records on one page.
    </td>
    <td>
      Number
    </td>
    <td>
      20
    </td>
  </tr>
  <tr>
    <td>
      recordTemplate
    </td>
    <td>
      The path to the .html template of a records(row). Templates
      list was declared in the <code>templates</code> component
      property.
      <p class="q">
        where is this property and what list
      </p>
    </td>
    <td>
      String
    </td>
    <td>
      record
    </td>
  </tr>
  <tr>
    <td>
      template
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
      visible
    </td>
    <td>
      Initial component's visibility. When set to "false", the
      <code>display: none</code> CSS style is added to the
      component's DOM block.
    </td>
    <td>
      Boolean
    </td>
    <td>
      true
    </td>
  </tr>
</table>