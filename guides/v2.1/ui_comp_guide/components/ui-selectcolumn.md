---
group: UI_Components_guide
subgroup: components
title: SelectColumn component
menu_title: SelectColumn component
version: 2.1
github_link: ui_comp_guide/components/ui-selectcolumn.md
---

## Overview

The SelectColumn component receives an array of values and displays the column with corresponding labels. The value-label correspondence is set in the component's configuration.

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/columns/select.js]({{ site.mage2200url }}app/code/Magento/Ui/view/base/web/js/grid/columns/select.js)

## SelectColumn configuration

Extends all [Column]({{ page.baseurl }}/ui_comp_guide/components/ui-column.html) configuration.

SelectColumn-specific configuration:

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
      <code>options</code>
    </td>
    <td>
      An array of objects used to display a field's content by
      matching the associated record's value with the value of one
      of the elements provided in <code>options</code>.
    </td>
    <td>
      Array
    </td>
    <td>
      <code>ui/grid/cells/thumbnail</code>
    </td>
  </tr>
</table>


### `Option` interface

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
      Required
    </th>
  </tr>
  <tr>
    <td>
      <code>value</code>
    </td>
    <td>
      Option's identifier.
    </td>
    <td>
      String | Number | Array&lt;Option&gt;
    </td>
    <td>
      Required
    </td>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      Label to be displayed in a column's field.
    </td>
    <td>
      String
    </td>
    <td>
      Required
    </td>
  </tr>
</table>
