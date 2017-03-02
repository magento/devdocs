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
    <td>When set to true, the Form component is automatically rendered during Insertform initialization. Otherwise, insertListing's 'render' method should be called to render the Form.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s JS constructor file in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/insert-form</td>
  </tr>
  <tr>
    <td>dataLinks <ul><li>imports</li><li>exports</li></ul></td>
    <td>Flags that enable linking between insertForm's externalValue (the object that stores Form information) and Form value.
<ul>
<li>
Enable import from the inserted Form value to the insertForm's externalValue.</li>
<li>Enable export from the insertForm's externalValue to the inserted Form aggregated value.</li></li>
</td>
    <td>Object
<ul>
<li>
Boolean</li>
<li>Boolean</li></ul></td>
    <td>false<br>false</td>
  </tr>
  <tr>
    <td>externalProvider</td>
    <td>DataSource of the inserted Form.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>formSubmitType</td>
    <td>Expect that Form will save data using AJAX. Links responseData and responseStatus with form. Export to form submit type.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>ns</td>
    <td>Namespace of the inserted form.</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>realTimeLink</td>
    <td>Enables link between insertForms's externalValue and value.
Here 'link' means the two-way <a href="{{page.baseurl}}ui_comp_guide/concepts/ui_comp_linking_concept.html#links">links property</a> of UI components, which allows immediate update.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>render_url</td>
    <td>With default render_url(mui/index/render) form will be without form buttons. To get Form with buttons url must be changed to mui/index/render_handle and next GET parameters:
<ul>
<li>buttons=1 (flag to get buttons)</li>
<li>handle= (buttons scope</li>
</ul>
</td>
    <td>Url</td>
    <td>mui/index/render</td>
  </tr>
  <tr>
    <td>showSpinner</td>
    <td>Show spinner while the Form is rendered.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>toolbarContainer</td>
    <td>Path to component that have toolbarSection property with reference to HTML element. Component will insert Form buttons to this section.</td>
    <td>String</td>
    <td>''</td>
  </tr>
</table>