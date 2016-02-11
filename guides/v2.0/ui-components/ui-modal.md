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

**Contents:**

* TOC
{:toc}

## Modal component: overview

The modal UI component implements a secondary window that opens on top of the main window. It uses the [modal widget]([{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html) under the hood.

Similar to the widget's configuration, the component's configuration allows to set the window type and action buttons behavior. Additionally, the component allows to link action buttons to methods of the other UI components (by using the button component).

The modal component can be used for both Admin panel and storefront.


<p class="q">Any related topic in http://devdocs.magento.com/guides/v2.0/pattern-library/bk-pattern.html?</p>

## Structure

The modal UI component comprises the following files:

- JS component: `<Magento_Ui_module_dir>/view/base/web/js/modal/modal-component.js`
- Template: `<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-component.html`

## Options

Component's options are set in the configuration `.xml` file as follows:

{%highlight xml%}
 <modal name="test_modal">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <!-- Configurable options are specified here -->
            <item name="%option1%" xsi:type="%type%">%value%</item>
            <item name="%option2%" xsi:type="%type%">%value%</item>
            ...
        </item>
    </argument>
</modal>
{%endhighlight%}

Except the general configuration options, similar for most of the UI components, the following modal-specific options are available:

<table>
  <tr>
    <th width="10%">Option</th>
    <th width="50%">Description</th>
    <th width="10%">Type</th>
    <th width="10%">Optional/Mandatory</th>
    <th width="10%">Default value</th>
  </tr>
  <tr>
    <td><code>state</code></td>
    <td>Set the state of the modal window: <code>true</code> for open. 
</td>
    <td>Boolean</td>
    <td>Optional</td>
    <td><code>false</code></td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>Options are passed to the modal widget initialization as is.</td>
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
    <td><code>''</code></td>
  </tr>
  <tr>
    <td><code>subTitle</code></td>
    <td>The subtitle of the modal window. Set as follows: 
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;title&quot; xsi:type=&quot;string&quot;&gt;%window_title%&lt;/item&gt;
&lt;/item&gt;
</pre>

</td>
    <td>String</td>
    <td>Optional</td>
    <td><code>''</code></td>
  </tr>
<tr>
    <td><code>type</code></td>
    <td>The type of the modal window. Can be one of the following:
<code>slide</code> or <code>popup</code>

Set as follows: 
<pre>
&lt;item name=&quot;options&quot; xsi:type=&quot;array&quot;&gt;
    &lt;item name=&quot;type&quot; xsi:type=&quot;string&quot;&gt;%slide|popup%&lt;/item&gt;
&lt;/item&gt;
</pre>
</td>
    <td>String</td>
    <td>Optional</td>
    <td><code>slide</code></td>
  </tr>
  <tr>
    <td><code>buttons</code></td>
    <td>The action buttons of the modal window.
</td>
    <td>Array</td>
    <td>Optional</td>
    <td><code>[]</code></td>
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
    <td>Button actions. On button click, actions are performed in the same order as they are set in config.

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
    <td>Object</td>
    <td>Optional</td>
    <td>Undefined</td>
  </tr>
  <tr>
    <td><code>onCancel</code></td>
    <td>Action (method name), that is performed on cancelling interactions: pressing Esc, clicking outside the modal window or clicking the 'X' (close) icon.
</td>
    <td>String</td>
    <td>Optional</td>
    <td><code>closeModal</code></td>
  </tr>

</table>

### Example of the modal component configuration

The following sample is an example of the configuration for a simple modal window containing one text field and a standard set of action buttons (**Save**, **Delete**, **Cancel**): 

{%highlight xml%}
<modal name="test_modal">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="onCancel" xsi:type="string">actionCancel</item>
            <item name="options" xsi:type="array">
                <item name="buttons" xsi:type="array">
                    <item name="0" xsi:type="array">
                        <item name="text" xsi:type="string">Cancel</item>
                        <item name="class" xsi:type="string">action-secondary</item>
                        <item name="actions" xsi:type="array">
                            <item name="0" xsi:type="string">actionCancel</item>
                        </item>
                    </item>
                    <item name="1" xsi:type="array">
                        <item name="text" xsi:type="string">Clear</item>
                        <item name="class" xsi:type="string">action-secondary</item>
                        <item name="actions" xsi:type="array">
                            <item name="0" xsi:type="array">
                                <item name="targetName" xsi:type="string">${ $.name }.testField</item>
                                <item name="actionName" xsi:type="string">clear</item>
                            </item>
                        </item>
                    </item>
                    <item name="2" xsi:type="array">
                        <item name="text" xsi:type="string">Done</item>
                        <item name="class" xsi:type="string">action-primary</item>
                        <item name="actions" xsi:type="array">
                            <item name="0" xsi:type="string">actionDone</item>
                        </item>
                    </item>
                </item>
            </item>
        </item>
    </argument>
    <field name="testField">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string">test field</item>
                <item name="formElement" xsi:type="string">input</item>
                <item name="visible" xsi:type="boolean">true</item>
            </item>
        </argument>
    </field>
</modal>

<button name="modal_button">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="title" xsi:type="string">Open modal</item>
            <item name="actions" xsi:type="array">
                <item name="0" xsi:type="array">
                    <item name="targetName" xsi:type="string">${ $.parentName}.test_modal</item>
                    <item name="actionName" xsi:type="string">openModal</item>
                </item>
            </item>
        </item>
    </argument>
</button>
{%endhighlight%}


## Public API (JS)

- `actionCancel()`: returns all modal's child components to the state they had on modal open and closes the modal window. 
- `actionDone()`: validates the changes in the modal's child components and, if valid, closes the modal.
- `closeModal()`: closes the modal window
- `openModal()`: opens the modal window
- `setPrevValues(elem)`: returns all `elem`'s child components to the state they had on modal open
- `setTitle()` - sets modal title
- `setSubTitle()` - sets modal sub title
- `toggleModal()`: toggles the modal window state (open/close)