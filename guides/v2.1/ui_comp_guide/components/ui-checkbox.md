---
group: ui-components-guide
subgroup: components
title: Checkbox component
menu_title: Checkbox component
---

The Checkbox component implements a form field that is an [HTML](https://glossary.magento.com/html) `<input type="checkbox">` element. It can also be displayed as a "toggle" handler or a radio button element.

## Configuration options

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>checked</code></td>
    <td>Initial checkbox state (selected or cleared). If <code>false</code>, the checkbox is cleared. If <code>true</code>, the checkbox is selected.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>multiple</code></td>
    <td>Renders multiple elements.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>prefer</code></td>
    <td>The input type of the element to be rendered. Can be either radio button, checkbox, or toggle key. Changing this value also changes the <code>elementTmpl</code>, originally defined in the parent (<code>abstract</code>) component.</td>
    <td>String</td>
    <td><code>checkbox</code></td>
  </tr>
  <tr>
    <td><code>valueMap</code></td>
    <td>Convert the component's value to the expected type. For example, you can set to convert '0' to 'false', this would look like following:<code><br />{<br />'0': false<br />}</code></td>
    <td>Object</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>templates</code>
<ul>
<li><code>radio</code></li>
<li><code>checkbox</code></li>
<li><code>toggle</code></li>
</ul>
</td>
    <td>Paths to templates for all possible types of input elements. The exact template to be used for rendering is defined by the <code>prefer</code> property.</td>
    <td>Object<ul><li>String</li><li>String</li><li>String</li></ul></td>
    <td><code>ui/form/components/single/radio<br />ui/form/components/single/checkbox<br />ui/form/components/single/switcher</code></td>
  </tr>
  <tr>
    <td><code>component</code></td>
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/single-checkbox</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>
