---
group: ui-components-guide
subgroup: components
title: OnOffColumn component
menu_title: OnOffColumn component
---

The OnOffColumn component is a decorator for [MultiselectColumn]({{ page.baseurl }}/ui_comp_guide/components/ui-multiselectcolumn.html). It displays toggle switch elements instead of checkboxes.

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>bodyTmpl</code></td>
    <td>Path to the template that is used to render a column's field in the table's body.</td>
    <td>String</td>
    <td><code>ui/grid/cells/onoff</code></td>
  </tr>
  <tr>
    <td><code>fieldClass</code></td>
    <td>Additional CSS classes added to the column's field elements.</td>
    <td>{<br /><code>[name: string]: boolean</code><br />}</td>
    <td>{<br />'<code>admin__scope-old': true,</code><br /><code>'data-grid-onoff-cell': true,</code><br /><code>'data-grid-checkbox-cell': false</code><br />}</td>
  </tr>
  <tr>
    <td><code>headerTmpl</code></td>
    <td>Path to the <code>.html</code> template for the column's header.</td>
    <td>String</td>
    <td><code>ui/grid/columns/onoff</code></td>
  </tr>
</table>

## Source files

Extends [`MultiselectColumn`]({{ page.baseurl }}/ui_comp_guide/components/ui-multiselectcolumn.html):

- [app/code/Magento/Ui/view/base/web/js/grid/columns/onoff.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/columns/onoff.js)
