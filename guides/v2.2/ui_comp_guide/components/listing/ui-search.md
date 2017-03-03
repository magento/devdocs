---
layout: default
group: UI_Components_guide
subgroup: components
title: Search component
menu_title: Search component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-search.md
---

Constructor: [<Magento_Ui_module_dir>/view/base/web/js/grid/search/search.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/search/search.js)

## FiltersChips configuration

Extends all [UiElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

Search own configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td>label</td>
    <td>The search field label.</td>
    <td>String</td>
    <td>Keyword</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>Value displayed when the search field is empty.</td>
    <td>String</td>
    <td>Search by keyword</td>
  </tr>
  <tr>
    <td>statefull</td>
    <td>Defines a list of component's properties whose values are automatically saved in the configured storage if they change. Where key is the property's name and the value defines whether its saved.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td>{value: true}</td>
  </tr>
  <tr>
    <td>template</td>
    <td>Зath to the component’s .html template.</td>
    <td>String</td>
    <td>ui/grid/search/search</td>
  </tr>
</table>


