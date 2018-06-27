---
group: UI_Components_guide
subgroup: components
title: ActionDelete component
menu_title: ActionDelete component
version: 2.2
github_link: ui_comp_guide/components/ui-actiondelete.md
---

## Overview

The ActionDelete component provides a user interface for deleting records of the [DynamicRows component]({{ page.baseurl }}/ui_comp_guide/components/ui-dynamicrows.html).

## ActionDelete options

Extends all `abstract` configuration.

ActionDelete-specific configuration:

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
      The path to the component’s <code>.js</code> file in terms of
      RequireJS.
    </td>
    <td>
      String
    </td>
    <td>
      <code>Magento_Ui/js/dynamic-rows/action-delete</code>
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
      Breaks the link established in the <code>link</code> property
      of the parent (abstract) component.
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
      <code>template</code>
    </td>
    <td>
      The path to the component’s <code>.html</code> template.
    </td>
    <td>
      String
    </td>
    <td>
      <code>ui/dynamic-rows/cells/action-delete</code>
    </td>
  </tr>
</table>
