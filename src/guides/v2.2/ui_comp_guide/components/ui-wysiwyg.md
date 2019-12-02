---
group: ui-components-guide
title: WYSIWYG component
---

The WYSIWYG component is an [adapter](https://glossary.magento.com/adapter) for the [TinyMCE editor](https://www.tinymce.com/). WYSIWYG integrates editor's instance into the [Form component]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html). It expects to receive complete [widget](https://glossary.magento.com/widget) declaration in the `content` option, which should contain both [markup](https://glossary.magento.com/markup) and the script responsible for creating the editor's instance.

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
    <td>The path to the component’s <code>.js</code> file in terms of RequireJS.</td>
    <td>String</td>
    <td><code>Magento_Ui/js/form/element/wysiwyg</code></td>
  </tr>
  <tr>
    <td><code>content</code></td>
    <td>Initial WYSIWYG content.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td><code>elementSelector</code></td>
    <td>Selector of the HTML element that is wrapped by the WYSIWYG editor.</td>
    <td>String</td>
    <td><code>textarea</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>The path to the template particular field type template, specific for this component.</td>
    <td>String</td>
    <td><code>ui/form/element/wysiwyg</code></td>
  </tr>
  <tr>
    <td><div><code>links</code></div>
      <div><code>value</code></div>
    </td>
    <td><a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html">Links</a> the component's <code>value</code> property with the provider, using the path that is declared in the <code>dataScope</code> property.</td>
    <td>Object<br />String</td>
    <td><code>${ $.provider }:${ $.dataScope }</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>The path to the general Field template.</td>
    <td>String</td>
    <td><code>ui/form/field</code></td>
  </tr>
</table>
