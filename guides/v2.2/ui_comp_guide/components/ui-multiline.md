---
layout: default
group: UI_Components_guide
subgroup: components
title: Multiline component
menu_title: Multiline component
version: 2.2
github_link: ui_comp_guide/components/ui-multiline.md
---


## Multiline configuration
Extends all [`uiCollection`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uicollection_concept.html) configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>additionalClasses</td>
    <td>Sets custom classes to the component DOM block.</td>
    <td>Object</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>breakLine</td>
    <td>Is responsible for structures multiline UI. (Under the hood adds classes to multiline DOM block)  &lt;p class="q"&gt;Not clear&lt;/p&gt;</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>cols</td>
    <td>The number of columns that will be added to the cols attribute in textarea DOM element<br>&lt;p class="q"&gt;need explanation&lt;/p&gt;.</td>
    <td>Number</td>
    <td>15</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/group</td>
  </tr>
  <tr>
    <td>fieldTemplate</td>
    <td>The path to template that will be uses for all child component that will be rendered multiline component.</td>
    <td>String</td>
    <td>ui/form/field</td>
  </tr>
  <tr>
    <td>label</td>
    <td>The data that will be rendered as component label</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>required</td>
    <td>Makes component required to fill or not.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>showLabel</td>
    <td>Is responsible for label rendering. &lt;p class="q"&gt;Not clear&lt;/p&gt;</td>
    <td>Boolean</td>
    <td>''</td>
  </tr>
  <tr>
    <td>template</td>
    <td>The path to the component’s .html template.</td>
    <td>String</td>
    <td>ui/group/group</td>
  </tr>
  <tr>
    <td>validateWholeGroup</td>
    <td>&lt;p class="q"&gt;???&lt;/p&gt;</td>
    <td>Boolean</td>
    <td></td>
  </tr>
  <tr>
    <td>visible</td>
    <td>Is responsible for initial component visibility state. In case when state is "false" to the component DOM block adds css style "display: none".</td>
    <td>Boolean</td>
    <td></td>
  </tr>
</table>
