---
layout: default
group: UI_Components_guide
subgroup: components
title: DragAndDrop component
menu_title: DragAndDrop component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-draganddrop.md
---

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/dnd.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/dnd.js)

## DragAndDrop configuration

Extends all [UiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

DragAndDrop own configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>enabled</td>
    <td>Whether it's allowed to change the position of columns.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>fixedX</td>
    <td>Whether the column has a fixed positon on the X-axis, that is, whether it can be moved horizontally.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>fixedY</td>
    <td>Whether the column has a fixed positon on the Y-axis,  that is whether it can be moved vertically.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>noSelectClass</td>
    <td>CSS class applied to the table when one of its columns is being dragged.</td>
    <td>String</td>
    <td>_no-select</td>
  </tr>
</table>