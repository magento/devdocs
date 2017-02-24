---
layout: default
group: UI_Components_guide
subgroup: components
title: Fieldset сomponent
menu_title: Fieldset component
version: 2.2
github_link: ui_comp_guide/components/ui-fieldset.md
---

The Fieldset component is a container for visually grouped form elements (i.e. buttons, form fields).

## Fieldset options
Extends all [`uiCollection`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) and `collapsible` configuration.

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>additionalClasses</td>
    <td>Set custom classes to the component's DOM block.</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>collapsible</td>
    <td>Make the fieldset collapsible.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/fieldset</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Initial component's state. When set to "true", users can't take action on the element.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/form/fieldset</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Initial component's visibility. When set to "false", the "display: none" CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>
