---
group: ui-components-guide
subgroup: components
title: Filters component
menu_title: Filters component
---

The Filters component renders UI controls for filtering and applies filtering. Must be a child of the [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html).

See the [Admin Design Pattern Library (Filters)]({{ page.baseurl }}/pattern-library/filters/data-table-filters/filtering.html) topic for information about the UI design patterns that can be implemented using Filters component.

## Configuration options

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
    <td>Configuration that is passed to the <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-filterschips.html">FiltersChips component</a>.</td>
  </tr>
  <tr>
    <td><code>statefull</code></td>
    <td>Defines a list of component properties whose values are automatically saved in the configured storage if they change. <code>key</code> is the property's name and the <code>value</code> defines whether its saved.</td>
    <td>{<br />[name: string]: Boolean<br />}</td>
    <td />
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

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

- [app/code/Magento/Ui/view/base/web/js/grid/filters/filters.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/filters/filters.js)
