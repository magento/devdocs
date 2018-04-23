---
layout: default
group: UI_Components_guide
subgroup: components
title: Filters component
menu_title: Filters component
version: 2.2
github_link: ui_comp_guide/components/ui-filters.md
---

## Overview

The Filters component renders UI controls for filtering and applies filtering. Must be a child of the [Listing component]({{page.baseurl}}/ui_comp_guide/components/ui-listing-grid.html).

See the [Admin Design Pattern Library (Filters)]({{page.baseurl}}/pattern-library/filters/data-table-filters/filtering.html) topic for information about the UI design patterns that can be implemented using Filters component.

## Structure
Constructor: [app/code/Magento/Ui/view/base/web/js/grid/filters/filters.js]({{site.mage2200url}}app/code/Magento/Ui/view/base/web/js/grid/filters/filters.js)

## Filters configuration

Extends all [uiCollection]({{page.baseurl}}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

Filters-specific configuration:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>chipsConfig</code></td>
    <td>Configuration passed to the <code>FiltersChips</code> component.</td>
    <td>Object</td>
    <td>Configuration that is passed to the <a href="{{page.baseurl}}/ui_comp_guide/components/ui-filterschips.html">FiltersChips component</a>.</td>
  </tr>
  <tr>
    <td><code>statefull</code></td>
    <td>Defines a list of component properties whose values are automatically saved in the configured storage if they change. <code>key</code> is the property's name and the <code>value</code> defines whether its saved.</td>
    <td>{<br>[name: string]: boolean<br>}</td>
    <td></td>
  </tr>
  <tr>
    <td><code>stickyTmpl</code></td>
    <td>Additional <code>.html</code> template that displays filters when the Toolbar component gets a fixed position.</td>
    <td>String</td>
    <td><code>ui/grid/sticky/filters</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/filters/filters</code></td>
  </tr>
  <tr>
    <td><code>templates.filters</code></td>
    <td>Describes basic filter types. This definitions are used to dynamically create filter elements based on the <code>filter</code> field specified in the corresponding column. For example, if a column's <code>filter</code> property contains the <code>text</code> value, then a <code>Filter</code> component instance with a definition for the <code>text</code> type will be created.</td>
    <td>Object</td>
    <td>Contains definitions of the <code>text</code>, <code>select</code>,<code>dateRange</code> and <code>textRange</code> filter types.</td>
  </tr>
</table>

## Examples

### Example 1: Add a new customer attribute and make it filterable

To add a new customer attribute to the customer grid and make it filterable, you need to follow these steps:

1. Сreate view/adminhtml/ui_component/customer_listing.xml to add a column component
2. Сreate the column component {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class which extends Magento\Ui\Component\Listing\Columns\Column
3. Сreate etc/indexer.xml to add the attribute to the customer_grid index and define it as filterable
4. Set is_used_in_grid to true for the attribute

### Example 2: Add a custom calculated filter
...
