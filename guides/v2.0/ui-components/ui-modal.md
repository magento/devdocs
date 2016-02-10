---
layout: default
group:  UI Library
subgroup: F_UI Library Modal Component
title: Modal Component
menu_title: Modal Component
menu_node: parent
github_link: ui-components/ui-modal.md
---
<h2>What's in this topic</h2>

This topic describes the modal UI component.

* TOC
{:toc}

## Modal component: Overview

The modal UI component implements a secondary window that opens on top of the main window. It uses the [modal widget]([{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html) under the hood.

Similar to the widget implementation, the component allows to configure window type and action buttons. Additionally, the component allows to link modal buttons to methods of the other UI components (by using the button component).

The modal component also introduces `toolbarSection`: a placeholder inside the window's header, where any content cab be added.

<p class="q>toolbarSection is not mentioned further in the docs, is this a gap?</p>
<p class="q>Where can it be used: backend/storefront?</p>
<p class="q>Does it have any dependencies with other components?</p>
<p class="q">Any related topic in http://devdocs.magento.com/guides/v2.0/pattern-library/bk-pattern.html?</p>

## Structure

The modal ui component comprises the following files:

- JS component: `<Magento_Ui_module_dir>/view/base/web/js/modal/modal-component.js`
- Template: `<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-component.html`

## Options

<p class="q">What about isTemplate and dataScope, are they hard-coded?</p>
Modal options are set in the configuration xml as follows:


{%highlight xml%}
 <modal name="test_modal">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <!-- Configurable options are specified here -->
            <item name="%option1%" xsi:type="%type%">%value%</item>
            <item name="%option2%" xsi:type="%type%">%value%</item>
            ...
            <!-- The following options' configuration should not be changed -->
            <item name="isTemplate" xsi:type="boolean">false</item>
            <item name="dataScope" xsi:type="string"></item>
        </item>
    </argument>
</modal>
{%endhighlight%}

You can configure the following:

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Optional/Mandatory</th>
    <th>Default value</th>
  </tr>
  <tr>
    <td><code>state</code></td>
    <td>Is linked to the open/closed modal state as true/false. 
<p class="q">Does it just display the state or set the state?</p></td>
    <td>Boolean</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>Options are passed to the modal widget initialization as is</td>
    <td>Object</td>
    <td>Optional</td>
    <td><code>{}</code></td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td>The title of the modal window. Set as follows: 
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;title&quot; xsi:type=&quot;string&quot;&gt;%window_title%&lt;/item&gt;
&lt;/item&gt;
</pre>

</td>
    <td>String</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>
<tr>
    <td><code>type</code></td>
    <td>The type of the modal window. Can be one of the following:
<code>slide</code>, <code>popup</code> or <code>custom</code>

Set as follows: 
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;type&quot; xsi:type=&quot;string&quot;&gt;%slide|popup|custom%&lt;/item&gt;
&lt;/item&gt;
</pre>
<p class="q">What is custom?</p>
</td>
    <td>String</td>
    <td>Optional</td>
    <td><code>slide</code></td>
  </tr>
  <tr>
    <td><code>buttons</code></td>
    <td>Modal buttons.
<p class="q">Are they the action buttons of the modal window? </p>
</td>
    <td>Object</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>
  <tr>
    <td><code>text</code></td>
    <td>The button label. 

Set as follows:
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;buttons&quot; xsi:type=&quot;array&quot;&gt;
         &lt;item name=&quot;%button_number%&quot; xsi:type=&quot;array&quot;&gt;
             &lt;item name=&quot;text&quot; xsi:type=&quot;string&quot;&gt;%label%&lt;/item&gt;
         &lt;/item&gt;
    &lt;/item&gt;
&lt;/item&gt;
</pre>

</td>
    <td>String</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>
  <tr>
    <td><code>class</code></td>
    <td>The CSS class for the button. 

Set as follows:
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;buttons&quot; xsi:type=&quot;array&quot;&gt;
         &lt;item name=&quot;%button_number%&quot; xsi:type=&quot;array&quot;&gt;
             &lt;item name=&quot;class&quot; xsi:type=&quot;string&quot;&gt;%class%&lt;/item&gt
         &lt;/item&gt;
    &lt;/item&gt;
&lt;/item&gt;
</pre>

</td>
    <td>String</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>

  <tr>
    <td><code>actions</code></td>
    <td>Button actions,
which will be performed synchronously and in order on button click. 

Set as follows:
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;buttons&quot; xsi:type=&quot;array&quot;&gt;
         &lt;item name=&quot;%button_number%&quot; xsi:type=&quot;array&quot;&gt;
             &lt;item name=&quot;actions&quot; xsi:type=&quot;string&quot;&gt;%label%&lt;/item&gt;
         &lt;/item&gt;
    &lt;/item&gt;
&lt;/item&gt;
</pre>

</td>
    <td>String</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>

</table>

## Public API (JS)

- `openModal()` - open the modal window
- `closeModal()` - close the modal window
- `toggleModal()` - toggle modal
- `setPrevValues(elem)`
- `elem` - component, all child of which will revert 'value' to the state, which was captured on modal open
- `actionCancel()` - cancels modal: return previous 'value' for every changed component in modal's content and closes modal
- `actionDone()` - approves changes in the modal: validates it contents and, if valid, closes modal