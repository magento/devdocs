---
layout: default
group: UI_Components_guide
subgroup: components
title: ActionDelete component
menu_title: ActionDelete component
version: 2.2
github_link: ui_comp_guide/components/ui-actiondelete.md
---

## ActionDelete options

Extends all `abstract` configuration.

ActionDelete own configuration:

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
      component
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
      links
      <ul>
        <li>value
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
      false
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
    <td code="">
      &gt;ui/dynamic-rows/cells/action-delete
    </td>
  </tr>
</table>
