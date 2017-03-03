---
layout: default
group: UI_Components_guide
subgroup: components
title: OnOffColumn component
menu_title: OnOffColumn component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-onoffсolumn.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/columns/onoff.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/columns/onoff.js)

## MultiselectColumn configuration

Extends all [Column]({{page.baseurl}}ui_comp_guide/components/listing/ui-multiselectcolumn.html) configuration.

OnOffColumn specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>bodyTmpl</td>
    <td>Path to the template that is used to render column's field in the table's body.</td>
    <td>String</td>
    <td>ui/grid/cells/onoff</td>
  </tr>
  <tr>
    <td>fieldClass</td>
    <td>Additonal CSS classes added to the column's field elements.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td>{<br>'admin__scope-old': true,<br>'data-grid-onoff-cell': true,<br>'data-grid-checkbox-cell': false<br>}</td>
  </tr>
  <tr>
    <td>headerTmpl</td>
    <td>Path to the .html template for the column's header.</td>
    <td>String</td>
    <td>ui/grid/columns/onoff</td>
  </tr>
</table>