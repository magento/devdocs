---
group: ui-components-guide
subgroup: components
title: File component
menu_title: File component
---

The File component implements the [HTML](https://glossary.magento.com/html) `<input type="file">` form field.

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
      <code>Magento_Ui/js/form/element/text</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      Field label
    </td>
    <td>
      String
    </td>
    <td>
      <code>''</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>links</code>
      <ul>
        <li><code>value</code>
        </li>
      </ul>
    </td>
    <td>
      <a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html"> Links</a> the component's <code>value</code> property with provider using the declared in the <code>dataScope</code> property of the parent component.
    </td>
    <td>
      Object
      <ul>
        <li>Boolean
        </li>
      </ul>
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
      <code>visible</code>
    </td>
    <td>
      Initial component's visibility. When set to <code>false</code>, the <code>display: none</code> CSS style is added to the component's DOM block.
    </td>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
  </tr>
</table>
