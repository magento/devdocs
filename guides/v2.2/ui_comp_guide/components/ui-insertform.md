---
layout: default
group: UI_Components_guide
subgroup: components
title: InsertForm component
menu_title: InsertForm component
version: 2.2
github_link: ui_comp_guide/components/ui-insertform.md
---

## InsertForm configuration

Extends all [`uiElement`]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>autoRender</td>
    <td>When set to 'true', foster component is automatically rendered during Insert's initialization. Otherwise, Insert's 'render' method should be called to render foster component.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/insert-form</td>
  </tr>
  <tr>
    <td>dataLinks<br>imports<br>exports</td>
    <td>Flags that enable linking between Insert's externalValue and foster component (aggregated) value.<br>Enable import from foster component (aggregated) value to the Insert's externalValue.<br>Enable export from Insert's externalValue to the foster component (aggregated) value.</td>
    <td>Object<br>Boolean<br>Boolean</td>
    <td>false<br>false</td>
  </tr>
  <tr>
    <td>externalProvider</td>
    <td>DataSource of the foster component.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>formSubmitType</td>
    <td>Expect that form will save data via ajax. Links responseData and responseStatus with form. Export to form submit type.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>ns</td>
    <td>Namespace of a foster component.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>realTimeLink</td>
    <td>Enable link between Insert's externalValue and valueHere 'link' mean the two-way 'links' property of UI Component, which allow immediate update</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>render_url</td>
    <td>With default render_url(mui/index/render) form will be without form buttons. For get form with buttons url must be changed to mui/index/render_handle and next GET parameters:buttons=1 (flag to get buttons)handle= (buttons scope)</td>
    <td>Url</td>
    <td>mui/index/render</td>
  </tr>
  <tr>
    <td>showSpinner</td>
    <td>Show spinner before foster component render.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>toolbarContainer</td>
    <td>Path to component that have toolbarSection property with reference to HTML element. Component will insert form buttons to this section.</td>
    <td>String</td>
    <td>''</td>
  </tr>
</table>