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
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>addButton</td>
    <td>Is responsible for render button, clicking on which will be added new record (row) to dynamicRows</td>
    <td>Boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>addButtonLabel</td>
    <td>Label for the Add button (if the button is enabled).</td>
    <td>String</td>
    <td>Add</td>
  </tr>
  <tr>
    <td>additionalClasses</td>
    <td>Sets custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>defaultRecord</td>
    <td>Is responsible for render default (first) row in cases when component was initialized without data.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>deleteProperty</td>
    <td>Used if the deleteValue option is enabled.The property which will be added to record data object when record is deleted.</td>
    <td>String</td>
    <td>delete</td>
  </tr>
  <tr>
    <td>dndConfig<br>component<br>template<br>enabled</td>
    <td>Configuration to drag and drop plugin for dynamicRows:<br>Link to DND plugin .js file.<br>Link to DND plugin .html template file.<br>Enables or disables DND opportunity to dynamicRows</td>
    <td>Object<br>String<br>String<br>Boolean</td>
    <td>Magento_Ui/js/dynamic-rows/dnd<br>ui/dynamic-rows/cells/dnd<br>true</td>
  </tr>
  <tr>
    <td>collapsibleHeader</td>
    <td>Enable or disable the collapsible functionality for the header (if columns header is enabled).</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>columnsHeader</td>
    <td>Hides or shows columns header.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>columnsHeaderClasses</td>
    <td>If the column header is enabled, add custom class to columns header.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/dynamic-rows/dynamic-rows</td>
  </tr>
  <tr>
    <td>currentPage</td>
    <td>Current page.</td>
    <td>Number</td>
    <td>1</td>
  </tr>
  <tr>
    <td>deleteValue</td>
    <td>Adds the "deleteProperty" property in data object for the deleted record.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Is responsible for initial component disabled state. In case when state is "true" makes the component UI immutable.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>fallbackResetTpl</td>
    <td>The path to thefallback reset (restore to default button) .html template.</td>
    <td>String</td>
    <td>ui/form/element/helper/fallback-reset-link</td>
  </tr>
  <tr>
    <td>identificationProperty</td>
    <td>The property added to the record data object as identification.</td>
    <td>String</td>
    <td>record_id</td>
  </tr>
  <tr>
    <td>pageSize</td>
    <td>Number of records on one page.</td>
    <td>Number</td>
    <td>20</td>
  </tr>
  <tr>
    <td>recordTemplate</td>
    <td>Template to records(rows). Templates list was declared in "templates" component property.</td>
    <td>String</td>
    <td>record</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/dynamic-rows/templates/default</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Is responsible for initial component visibility state. In case when state is "false" to the component DOM block adds css style "display: none"</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>