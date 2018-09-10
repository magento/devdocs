---
group: ui-components-guide
subgroup: components
title: Multiline component
menu_title: Multiline component
---

The Multiline component is a collection of form elements that displays multiple fields of the same type. For example, the **Street Address** fields.

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
      <code>breakLine</code>
    </td>
    <td>
      Adds a CSS class to multiline's DOM element. When set to
      <code>true</code>, the <code>admin__control-fields</code> class is
      added, when <code>false</code> - <code>admin__control-grouped</code>.
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
      <code>component</code>
    </td>
    <td>
      The path to the component’s <code>.js</code> file in terms of
      RequireJS.
    </td>
    <td>
      String
    </td>
    <td>
      <code>Magento_Ui/js/form/components/group</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>fieldTemplate</code>
    </td>
    <td>
      The path to <code>.html</code> template that will be used for
      all child components rendered by the multiline component.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/form/field</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      Component's UI label
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
      <code>required</code>
    </td>
    <td>
      Defines whether the rendered field is required.
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
      <code>showLabel</code>
    </td>
    <td>
      Defines if the label is rendered.
    </td>
    <td>
      Boolean
    </td>
    <td>
      ''
    </td>
  </tr>
  <tr>
    <td>
      <code>template</code>
    </td>
    <td>
      The path to the general field's <code>.html</code> template.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/group/group</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>validateWholeGroup</code>
    </td>
    <td>
      Adds a block with validation results for all fields in the
      group.
    </td>
    <td>
      Boolean
    </td>
    <td />
  </tr>
  <tr>
    <td>
      <code>visible</code>
    </td>
    <td>
      Initial component's visibility. When set to "false", the
      <code>display: none</code> CSS style is added to the
      component's DOM block.
    </td>
    <td>
      Boolean
    </td>
    <td />
  </tr>
</table>
