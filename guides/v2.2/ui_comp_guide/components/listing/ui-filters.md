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
    <td>Configuration passed to the FiltersChips component.</td>
    <td>Object</td>
    <td>Configuration that is passed to the <a href="{{page.baseurl}}ui_comp_guide/components/listing/ui-filtersсhips.html">FiltersChips component</a>.</td>
  </tr>
  <tr>
    <td>statefull</td>
    <td>Defines a list of component's properties whose values are automatically saved in the configured storage if they change. Where key is the property's name and the value defines whether its saved.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td></td>
  </tr>
  <tr>
    <td>stickyTmpl</td>
    <td>Additional .html template used to display filters when the Toolbar component gets a fixed position.</td>
    <td>String</td>
    <td>ui/grid/sticky/filters</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/filters/filters</td>
  </tr>
  <tr>
    <td>templates.filters</td>
    <td>Describes basic filter types. This definitions are used to dynamically create filter elements based on the "filter" field specified in the corresponding column. For example, if a column's "filter" property contains the "text" value, then  a Filter component instance with a definition for the "text" type will be created.</td>
    <td>Object</td>
    <td>Contains definitions of the "text", "select","dateRange" and "textRange" filter types.</td>
  </tr>
</table>
