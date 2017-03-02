---
layout: default
group: UI_Components_guide
subgroup: components
title: InsertListing component
menu_title: InsertListing component
version: 2.2
github_link: ui_comp_guide/components/ui-insertlisting.md
---

## InsertListing configuration

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
    <td>When set to true, the Listing component is automatically rendered during insertListing initialization. Otherwise, insertListing's 'render' method should be called to render the Listing.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>behaviourType</td>
    <td>Can be 'simple' or 'edit'. Where 'edit' means that insertListing also includes changes from Listing's inlineEdit into value. In this case Listing must be configured with enabled inline editing.</td>
    <td>String ('simple'|'edit')</td>
    <td>simple</td>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s JS constructor in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/components/insert-listing</td>
  </tr>
  <tr>
    <td>dataLinks<br>imports<br>exports</td>
    <td>Flags that enable linking between insertListing's externalValue (the object that stores Listing information) and Listing value.
<ul>
<li>
Enable import from the inserted Listing value to the insertListing's externalValue.</li>
<li>Enable export from the insertListing's externalValue to the inserted Listing aggregated value.</li></li></td>
    <td>Object<br>Boolean<br>Boolean</td>
    <td>true<br>false</td>
  </tr>
  <tr>
    <td>realTimeLink</td>
    <td>Enable link between insertListing's externalValue and value.
Here 'link' means the two-way <a href="{{page.baseurl}}ui_comp_guide/concepts/ui_comp_linking_concept.html#links">links property</a> of UI components, which allows immediate update.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>render_url</td>
    <td>With default render_url(mui/index/render) listing will be without buttons. For get a list with buttons url must be changed to mui/index/render_handle and next GET parameters:<br>buttons=1 (flag to get buttons)<br>handle= (buttons scope)</td>
    <td>Url</td>
    <td>mui/index/render</td>
  </tr>
  <tr>
    <td>update_url</td>
    <td>Here AJAX request will go in order to retrieve, foster component update data.It will be in json format by default and will be automatically set into externalProvider.data</td>
    <td>Url</td>
    <td>mui/index/render</td>
  </tr>
</table>