---
layout: default
group:  UI Library
subgroup: Checkbox
title: Check box type field component
menu_title: Check box type field component
menu_node: parent
github_link: ui-components/ui_fields_checkbox.md
---

<h2>What's in this topic</h2>

This topic describes the checkbox UI component, which can be used to implement the following field types: radio button, toggle button, or checkbox.

**Contents**

- TOC
{:toc}

## Checkbox: Overview

The checkbox UI component which is one of the types of the Field UI Component. It can be configured to implement the following fields (from the UI point of view): radio button, toggle button or checkbox. The component inherits the abstract behavior of the field UI component.

<p class="q">What is abstract behavior</p>
<p class="qa">Inherited from Field UI Component (ui-field.md)</p>

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
<p class="qa">yes</p>

### Minimum workable example
```
<field name="<Component_Index>">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="formElement" xsi:type="string">checkbox</item>
            <item name="dataType" xsi:type="string">text</item>
            <item name="dataScope" xsi:type="string">Component_Index</item>
        </item>
    </argument>
</field>
```
<p class="qa">Тут в примере есть ирония: для аттрибута  name=".." запрещено использование символов &#60; и &#62;
Будет падать приложение, если просто скопировать этот код и применить где-то в проекте.</p>

```
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="provider" xsi:type="string">catalog_rule_form.catalog_rule_form_data_source</item>
            <item name="deps" xsi:type="string">catalog_rule_form.catalog_rule_form_data_source</item>
        </item>
        <item name="config" xsi:type="array">
            <item name="dataScope" xsi:type="string">data</item>
            <item name="namespace" xsi:type="string">catalog_rule_form</item>
        </item>
        <item name="template" xsi:type="string">templates/form/collapsible</item>
    </argument>
    <dataSource name="catalog_rule_form_data_source">
        <argument name="dataProvider" xsi:type="configurableObject">
            <argument name="class" xsi:type="string">Magento\CatalogRule\Model\Rule\DataProvider</argument>
            <argument name="name" xsi:type="string">catalog_rule_form_data_source</argument>
            <argument name="primaryFieldName" xsi:type="string">rule_id</argument>
            <argument name="requestFieldName" xsi:type="string">id</argument>
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="submit_url" xsi:type="url" path="catalog_rule/promo_catalog/save"/>
                </item>
            </argument>
        </argument>
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
    </dataSource>

    <field name="&amp;#60;Component_Index">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="formElement" xsi:type="string">checkbox</item>
                <item name="dataType" xsi:type="string">text</item>
                <item name="dataScope" xsi:type="string">&amp;#60;Component_Index&amp;#62;</item>
            </item>
        </argument>
    </field>
</form>
```



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
    <td>
    property that can help handle default state of Checkbox Ui.
    In case both `checked` and `value` are defined in configuration it has lower priority under `value` property.
    <p class="q">need clarification</p></td>
    <td>Boolean</td>
    <td>optional</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>isMultiple</code></td>
    <td>Enable component to behave as Checkbox Set. See section Example of use for more details.</td>
    <td>Boolean</td>
    <td>optional</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>prefer</code></td>
    <td>Defines the UI representation: checkbox, toggle or radio button. Does not influence the behavior.</td>
    <td>String. 
    One of `checkbox`, `toggle`, `radio`</td>
    <td>optional</td>
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
    <td>optional</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>elementTmpl</code></td>
    <td>Path to the template in terms of RequireJS.</td>
    <td>String</td>
    <td>optional</td>
    <td>%depends on how the <code>prefer</code> option is configured%</td>
  </tr>
  <tr>
    <td><code>description</code></td>
    <td>The text displayed next to the field. The following image illustrates the difference between the label and description:
<img src="{{base.url}}common/images/ui_checkbox_desc.png">
<p class="q">This description must depend on the state, doesn't it?</p>
<p class="q">No, `description` doesn't depend. Like `label` it's just decorative accent. And it's choice of developer what use.</p>
</td>
    <td>String</td>
    <td><p>required?</p></td>
    <td>''</td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>makes/removes ability to change state of checkbox.</td>
    <td>Boolean</td>
    <td>optional</td>
    <td>false</td>
  </tr>
  <tr>
    <td><code>visible</code></td>
    <td>shows/hides component from the page. In runtime component still exist and could be accessible </td>
    <td>Boolean</td>
    <td>optional</td>
    <td>true</td>
  </tr>
  <tr>
    <td><code>initialValue</code></td>
    <td>
    exact the value that was on moment before initialization a component.
    It cannot be set in configuration. It is a calculated value.
    </td>
    <td>*</td>
    <td>-</td>
    <td>-</td>
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
As a setter stores `param` as a `value`. Compare to `initialValue` method changes checked state.

- `checked()`
    @returns {Boolean}
As a getter returns current checkbox state. `true` if CHECKED, `false` otherwise.

- `checked(param)`
    @param {Boolean} param
    @returns void
Just make a checkbox state as CHECKED (`param = true`) or UNCHECKED (`param = false`).
In this implementation Checkbox Ui Component doesn't support [indeterminate](https://css-tricks.com/indeterminate-checkboxes/) state. Could affect `value`.

## Example of use
### Checkbox Ui Component as a Boolean state checker
Lets view on the case when Field Ui has simple role. It just toggle some boolean flag. On this step you should make choice what pair of variables Field Ui should process:
 - `true` / `false`, Boolean type
 - `'true'` / `'false'`, String type
 - `1` / `0`, Number type
 - `'1'` / `'0'`, String type
 - .. other pairs of variables of simple types

Side note: anyway data from component will send by POST and all values will be casted to stings. You controller/model should handle such situation.

This value pairs are placed in `vallueMap` parameter.
 
```
<field name="Component_Index">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="formElement" xsi:type="string">checkbox</item>
            <item name="dataType" xsi:type="string">text</item>
            <item name="dataScope" xsi:type="string">Component_Index</item>

            <item name="vallueMap" xsi:type="array">
                <item name="true" xsi:type="boolean">true</item>
                <item name="false" xsi:type="boolean">false</item>
            </item>
        </item>
    </argument>
</field>
```

Component will calculated initial state from data in DataProvider.
```
 $provider[ .. ]['Component_Index'] = true; // Checkbox appear to be checked
 $provider[ .. ]['Component_Index'] = false; // Checkbox appear to be unchecked
 $provider[ .. ]['Component_Index'] = null; // Will fallback to "default" state, false.
                                            // Because in example upper we define only "true" and "false" as allowed.
                                            // It could not obvious on first look.
```

### Checkbox Ui Component as a Boolean state checker with toggle button look
"Toggle button" view drived by the only one independent option - `prefer`. Behavior retain as checkbox has.
 
```
<field name="Component_Index">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="formElement" xsi:type="string">checkbox</item>
            <item name="dataType" xsi:type="string">text</item>
            <item name="dataScope" xsi:type="string">Component_Index</item>

            <item name="vallueMap" xsi:type="array">
                <item name="true" xsi:type="boolean">true</item>
                <item name="false" xsi:type="boolean">false</item>
            </item>
        </item>
    </argument>
</field>
```

### Checkbox Ui Component as a some value on/off switcher
When `value` parameter set but `vallueMap` absent component tries to toggle initialValue and empty string:
 
```
<field name="Component_Index">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="formElement" xsi:type="string">checkbox</item>
            <item name="dataType" xsi:type="string">text</item>
            <item name="dataScope" xsi:type="string">Component_Index</item>

            <item name="value" xsi:type="number">42</item>
        </item>
    </argument>
</field>
```
DataProvider will recieve `42` or `''` (empty string).

Yes, technically you can mix types in `valueMap` but it's highly strange pattern.

### Checkbox Ui Component as a part of Radioset/Checkboxset
The main purpose for this case to handle form elements that are belong to different parts of Form Ui.

For radioset look and feel you'll need to setup `prefer = radio`.
To handle initialValue you'll need to setup `value`.
And that's all.

Main magic with collaborative work of several radio components achieved with special `dataScope`'s.
Components should have same `dataScope` and should be children of same root element.

`prefer = checkbox` and several components with setup `value` will handle value of `dataScope` as collection.
Checked values will appear in `dataScope`-collection. Uncheck will remove it from `dataScope`-collection.

