---
group: ui-components-guide
subgroup: components
title: Text component
menu_title: Text component
---

The Text component displays text data in the components like [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) and [DynamicRows]({{ page.baseurl }}/ui_comp_guide/components/ui-dynamicrows.html).

## Configuration options

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>component</code></td>
    <td>The path to the component’s JS constructor in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/text</code></td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Initial component's state. When set to <code>true</code>, users can't take action on the element.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>Field label</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>links</code> <li><code>value</code></li></td>
    <td><a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html">Links</a> the component's "value" property with provider using the declared in the "dataScope" property of the parent component.</td>
    <td>Object<li>String</li></td>
    <td><code>${ $.provider }:${ $.dataScope }</code></td>
  </tr>

  <tr>
    <td><code>visible</code></td>
    <td>Initial component's visibility. When set to <code>false</code>, the "display: none" CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
</table>
