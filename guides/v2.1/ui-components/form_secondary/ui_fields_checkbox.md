---
layout: default
group:  UI Library
subgroup: D_UI Library Form Component
title: Check box type field component
menu_title: Check box type field component
menu_node:
menu_order: 1
github_link: ui-components/form_secondary/ui_fields_checkbox.md
---

<h2>What's in this topic</h2>

This topic describes the checkbox UI component, which can be used to implement the following field types: radio button, toggle, or checkbox.

**Contents**

- TOC
{:toc}

## Checkbox: Overview

The checkbox UI component which is one of the types of the Field UI Component. It can be configured to implement the following fields (from the UI point of view): radio button, toggle or checkbox. The component inherits the abstract behavior of the field UI component.

<p class="q">What is abstract behavior</p>

The following images illustrate how the checkout type field can look like:

- when configured as radio-button:

<img src="{{site.baseurl}}common/images/ui_checkbox_radio.png">

- when configured as toggle:

<img src="{{site.baseurl}}common/images/ui_checkbox_toggle.png">

- when configured as checkbox:

<img src="{{site.baseurl}}common/images/ui_checkbox_checkbox.png">

The checkbox component is designed to be used in the Admin panel. 

## Structure
The checkbox UI component comprises the following files:

- JavaScript Ui Component: `<Magento_UI_module_dir>/view/base/web/js/form/element/single-checkbox.js`
- Templates:
	- `<Magento_UI_module_dir>/view/base/web/templates/form/components/single/checkbox.html`
	- `<Magento_UI_module_dir>/view/base/web/templates/form/components/single/radio.html`
	- `<Magento_UI_module_dir>/view/base/web/templates/form/components/single/switcher.html`

## Configuration settings

<p class="q">need a sample of xml configuration to show where these options are set</p>

Except the general configuration options, similar for most of the UI components, the following modal-specific options are available:

<p class="q">are there also some field options available for all components which inherit behavior from field?</p>

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required?</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>checked</code></td>
    <td>property that can help handle default state of Checkbox Ui. It has low priority under value property. <p class="q">need clarification</p></td>
    <td>Boolean</td>
    <td><p>required?</p></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>isMultiple</code></td>
    <td>Enable component to behave as Checkbox Set. See section Example of use for more details.</td>
    <td>Boolean</td>
    <td><p>required?</p></td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>prefer</code></td>
    <td>Defines the UI representation: checkbox, toggle or radio button. Does not influence the behavior.</td>
    <td>Boolean</td>
    <td><p>required?</p></td>
    <td><code>checkbox</code></td>
  </tr>
  <tr>
    <td><code>valueMap</code></td>
    <td>Allows to associate values with binary states. The type of values should match type of value from DataProvider.</td>
    <td>Object.

Expected structure:
<pre>
{
  'true':  &lt;value_for_CHECKED_state&gt;,
  'false': &lt;value_for_UNCHECKED_state&gt;
}
</pre>
</td>
    <td><p>required?</p></td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>Path to the template in terms of RequireJS.</td>
    <td>String</td>
    <td><p>required?</p></td>
    <td>%depends on how the <code>prefer</code> option is configured%</td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>Path to the template in terms of RequireJS.</td>
    <td>String</td>
    <td><p>required?</p></td>
    <td>%depends on how the <code>prefer</code> option is configured%</td>
  </tr>
  <tr>
    <td><code>description</code></td>
    <td>The text displayed next to the field. The following image illustrates the difference between the label and description:
<img src="{{base.url}}common/images/ui_checkbox_desc.png">
<p class="q">This description must depend on the state, doesn't it?</p>
</td>
    <td>String</td>
    <td><p>required?</p></td>
    <td>''</td>
  </tr>
  <tr>
    <td><code>disabled; visible</code></td>
    <td><p class="q">need description</p></td>
    <td>Boolean</td>
    <td><p>required?</p></td>
    <td>?</td>
  </tr>
</table>

## Public API (JS)

- `getReverseValueMap (value)`
    @param {*} value
    @returns {Boolean}

Returns `true` if the passed argument is strictly equal to the `valueMap.true` setting. Otherwise returns `false`.

- `value()`
    @returns {*}
As a getter returns current value.

- `value(param)`
    @param {*} param
As a setter stores param as value. Affects checked state.

    checked()
<p class="q">need description</p>