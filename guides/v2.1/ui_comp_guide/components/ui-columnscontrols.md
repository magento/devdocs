---
layout: default
group: UI_Components_guide
subgroup: components
title: ColumnsControls component
menu_title: ColumnsControls component
version: 2.1
github_link: ui_comp_guide/components/ui-columnscontrols.md
---

## Overview

The ColumnsControls component is a collection of columns. It provides an interface for showing and hiding columns. The interface contains the following information:

* total number of all available columns in a grid
* number of columns currently active/displayed

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/controls/columns.js)

## ColumnsControls configuration

Extends all [uiCollection]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

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
    <td>Minimum number of columns that must be visible</td>
    <td>Number</td>
    <td><code>1</code></td>
  </tr>
  <tr>
    <td><code>maxVisible</code></td>
    <td>Maximum number of columns that can be visible</td>
    <td>Number</td>
    <td><code>30</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template</td>
    <td>String</td>
    <td><code>ui/grid/controls/columns</code></td>
  </tr>
</table>
