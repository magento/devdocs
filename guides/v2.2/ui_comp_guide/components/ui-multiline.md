---
layout: default
group: UI_Components_guide
subgroup: components
title: Multiline component
menu_title: Multiline component
version: 2.2
github_link: ui_comp_guide/components/ui-multiline.md
---


## Multiline configuration
Extends all [`uiCollection`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>additionalClasses</td>
    <td>Sets custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>breakLine</td>
    <td>Adds a CSS class to multiline's DOM element. When set to "true", the admin__control-fields class is added, when "false" - admin__control-grouped.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>cols</td>
    <td>The number of columns that will be specified in the "cols" attribute of the textarea DOM element.</td>
    <td>Number</td>
    <td>15</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/group</td>
  </tr>
  <tr>
    <td>fieldTemplate</td>
    <td>The path to .html template that will be used for all child components rendered by the multiline component.</td>
    <td>String</td>
    <td>ui/form/field</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Component's UI label</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>required</td>
    <td>Defines whether the rendered field is required.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>showLabel</td>
    <td>Defines if the label is rendered.</td>
    <td>Boolean</td>
    <td>''</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the general field's .html template.</td>
    <td>String</td>
    <td>ui/group/group</td>
  </tr>
  <tr>
    <td>validateWholeGroup</td>
    <td>Adds a block with validation results for all fields in the group. </td>
    <td>Boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Initial component's visibility. When set to "false", the "display: none" CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td></td>
  </tr>
</table>
