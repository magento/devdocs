---
layout: default
group: UI_Components_guide
subgroup: components
title: Search component
menu_title: Search component
version: 2.2
github_link: ui_comp_guide/components/listing/ui-search.md
---

Constructor: [app/code/Magento/Ui/view/base/web/js/grid/search/search.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/search/search.js)

## FiltersChips configuration

Extends all [UiElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

Search-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>The search field label.</td>
    <td>String</td>
    <td><code>'Keyword'</code></td>
  </tr>
  <tr>
    <td><code>placeholder</code></td>
    <td>Value displayed when the search field is empty.</td>
    <td>String</td>
    <td><code>'Search by keyword'<code></td>
  </tr>
  <tr>
    <td><code>statefull</code></td>
    <td>Defines a list of component properties whose values are automatically saved in the configured storage if they change. <code>key</code> is the property's name and the value defines whether its saved.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td><code>{value: true}</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/search/search</code></td>
  </tr>
</table>
