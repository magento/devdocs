---
layout: default
group: UI_Components_guide
subgroup: components
title: Filters component
menu_title: Filters component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-filters.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/filters/filters.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/filters/filters.js)

## Filters configuration

Extends all [uiCollection]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Filters own configuration:
<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>chipsConfig</td>
    <td>Configuration that is passed to the FiltersChips component.</td>
    <td>Object</td>
    <td>Configuration that is passed to the FiltersChips component.</td>
  </tr>
  <tr>
    <td>statefull</td>
    <td>Defines a list of component's properties value of which will be automatically saved in the configured storage (localStorage by default)whenever it changes. Here, key references property's name and the value tells whether it's state will be synchronized or not.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td></td>
  </tr>
  <tr>
    <td>stickyTmpl</td>
    <td>Additional template that is used to display filters when the Toolbar component receives a fixed position.</td>
    <td>String</td>
    <td>ui/grid/sticky/filters</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/filters/filters</td>
  </tr>
  <tr>
    <td>templates.filters</td>
    <td>Describes basic filter types. This definitions will be used to dynamically create filter elements based on the "filter"field specified in a corresponding column, e.g. if column's "filter" property contains the "text" value, then filtercomponent with a definition for the "text" type will be created.</td>
    <td>Object</td>
    <td>Contains definitions of the "text", "select","dateRange" and "textRenage" filter types.</td>
  </tr>
</table>
