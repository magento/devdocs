---
layout: default
group: UI_Components_guide
subgroup: components
title: ColumnsControls component
menu_title: ColumnsControls component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-сolumnsсontrols.md
---

## Overview

The ColumnsControls component is a collection of columns and it provides an interface for such actions as showing and hiding columns. The interface contains the following information:

* The total number of all available columns in a grid
* The number of columns currently active/displayed

The ColumnsControls component also provides information about the column's state to the admin.

There is no need to duplicate information about the columns to be displayed in the ColumnsControls component. You must define the append to element on every column child element and reference the parent using the appends. Another way to give access to the child element is to give a link to it when defining the column container.

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)

## ColumnsControls configuration

Extends all [uiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

ColumnsControls-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>minVisible</code></td>
    <td>Minimum number of columns that must be visible.</td>
    <td>Number</td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>maxVisible</code></td>
    <td>Maximum number of columns that can be visible.</td>
    <td>Number</td>
    <td><code>30</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/controls/columns</code></td>
  </tr>
</table>
