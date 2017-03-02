---
layout: default
group: UI_Components_guide
subgroup: components
title: Text component
menu_title: Text component
version: 2.2
github_link: ui_comp_guide/components/ui-text.md
---

## Text configuration

Extends all [uiElement]({{page.baseurl}}ui_comp_guide/concepts/ui_comp_uielement_concept.html) configuration.

<table>
  <tr>
    <th>Option </th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s JS constructor in terms of RequireJS.</td>
    <td>String</td>
    <td>Magento_Ui/js/form/element/text</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Initial component's state. When set to "true", users can't take action on the element.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>label</td>
    <td>Field label</td>
    <td>String</td>
    <td>''</td>
  </tr>
  <tr>
    <td>links<br>&lt;li&gt;value&lt;/li&gt;</td>
    <td><a href="{{page.baseurl}}ui_comp_guide/concepts/ui_comp_linking_concept.html">Links</a> the component's "value" property with provider using the declared in the "dataScope" property of the parent component.</td>
    <td>Object<br>&lt;li&gt;Boolean&lt;/li&gt;</td>
    <td>${ $.provider }:${ $.dataScope }' <p class="q">Strange value for a boolean</p></td>
  </tr>

  <tr>
    <td>visible</td>
    <td>Initial component's visibility. When set to "false", the "display: none" CSS style is added to the component's DOM block.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
</table>