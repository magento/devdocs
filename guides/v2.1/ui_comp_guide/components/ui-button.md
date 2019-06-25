---
group: ui-components-guide
subgroup: components
title: Button component
menu_title: Button component
---

The Button component allows user to perform a list of predefined actions by clicking on the corresponding button. Its default display mode is the [HTML](https://glossary.magento.com/html) `<button>` element, which be configured to display a link.

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
    <td><code>Magento_Ui/js/form/components/button</code></td>
  </tr>
  <tr>
    <td><code>additionalClasses</code></td>
    <td>Sets custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>Initial component's state. When set to <code>true</code>, users can't take action on the element.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>displayArea</code></td>
    <td>Renders the component in the location that was declared in the layout.</td>
    <td>String</td>
    <td><code>outsideGroup</code></td>
  </tr>
  <tr>
    <td><code>displayAsLink</code></td>
    <td>Show the button as a link.</td>
    <td>Boolean</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the child component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the general <code>.html</code> template for a button.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td>Button title.</td>
    <td>String</td>
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>visible</code></td>
    <td>Initial component's visibility. When set to <code>false</code>, the <code>"display: none</code> CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>actions</code></td>
    <td>A list of actions that are performed when user clicks on the element.</td>
    <td><code>ButtonAction[]</code></td>
    <td>-</td>
  </tr>
</table>

### ButtonAction interface

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>targetName</code></td>
    <td>Reference to component.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>actionName</code></td>
    <td>Name of the component's method to be invoked.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>params</code></td>
    <td>A list of arguments that will be passed to the method.</td>
    <td>Array</td>
    <td>Optional</td>
  </tr>
</table>
