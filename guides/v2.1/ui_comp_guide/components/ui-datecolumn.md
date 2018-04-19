---
layout: default
group: UI_Components_guide
subgroup: components
title: DateColumn component
menu_title: DateColumn component
version: 2.1
github_link: ui_comp_guide/components/ui-datecolumn.md
---

## Overview

The DateColumn component implements a table column that displays dates.

DateColumn сonstructor: [app/code/Magento/Ui/view/base/web/js/grid/columns/date.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/date.js)

## Сonfiguration options

Extends all [Column]({{page.baseurl}}/ui_comp_guide/components/ui-column.html) configuration.

DateColumn specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>dateFormat</code></td>
    <td>Date format for the displayed column's values.</td>
    <td>String</td>
    <td><code>MMM d, YYYY h:mm:ss A</code></td>
  </tr>
</table>
