---
layout: default
group: UI_Components_guide
subgroup: components
title: Modal сomponent
menu_title: Modal component
version: 2.1
github_link: ui_comp_guide/components/ui-modal.md
---
## What's in this topic
{:.no_toc}

This topic describes the modal UI component.

**Contents:**


## Modal component: overview

The Modal UI component implements a secondary window that opens on top of the main window. It uses the [modal widget]({{page.baseurl}}javascript-dev-guide/widgets/widget_modal.html).

Similar to the widget's configuration, the component's configuration allows you to set the window type and action buttons behavior (including linking action buttons to methods of the other UI components).

The Modal component can be used for both Admin panel and storefront.

For recommendations about modal windows usage from the UX point of view, see the corresponding topic in the [Magento Admin pattern library](http://devdocs.magento.com/guides/v2.0/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html).

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

The modal component uses general configuration options, similar to other UI components. However, it uses the following specific options as well:
<table>
  <tr>
    <th>
      Modal options
    </th>
  </tr>
  <tr>
    <td>
      <code>state</code>
      <p>
        Set the state of the modal window: <code>true</code> for
        open.
      </p>
      <p>
        <strong>Type:</strong> Boolean
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value</strong>: <code>false</code>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>options</code>
      <p>
        Configuration for the modal widget. Passed to the widget
        initialization as is.
      </p>
      <p>
        <strong>Type:</strong> Object
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> <code>{}</code>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>title</code>
      <p>
        The title of the modal window. Set as follows:
      </p>
      <pre>
&lt;item name="options" xsi:type="array"&gt;
    &lt;item name="title" xsi:type="string"&gt;%window_title%&lt;/item&gt;
&lt;/item&gt;
</pre>
      <p>
        <strong>Type:</strong> String
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> <code>''</code>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>subTitle</code>
      <p>
        The subtitle of the modal window. Set as follows:
      </p>
      <pre>
&lt;item name="options" xsi:type="array"&gt;
    &lt;item name="title" xsi:type="string"&gt;%window_subtitle%&lt;/item&gt;
&lt;/item&gt;
</pre>
      <p>
        <strong>Type:</strong> String
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> <code>''</code>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>type</code>
      <p>
        The type of the modal window. Can be one of the following:
        <code>slide</code> or <code>popup</code>. Set as follows:
      </p>
      <pre>
&lt;item name="options" xsi:type="array"&gt;
    &lt;item name="type" xsi:type="string"&gt;%slide|popup%&lt;/item&gt;
&lt;/item&gt;
</pre>
      <p>
        <strong>Type:</strong> String
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> <code>slide</code>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>buttons</code>
      <p>
        The action buttons of the modal window.
      </p>
      <p>
        <strong>Type:</strong> Array <strong>Required?:</strong>
        Optional <strong>Default value:</strong> <code>[]</code>
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>text</code>
      <p>
        The button label.<br />
        Set as follows:
      </p>
      <pre>
&lt;item name="options" xsi:type="array"&gt;
    &lt;item name="buttons" xsi:type="array"&gt;
         &lt;item name="%button_number%" xsi:type="array"&gt;
             &lt;item name="text" xsi:type="string"&gt;%label%&lt;/item&gt;
         &lt;/item&gt;
    &lt;/item&gt;
&lt;/item&gt;
</pre>
      <p>
        <strong>Type:</strong> String
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> Undefined
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>class</code>
      <p>
        The CSS class for the button.<br />
        Set as follows:
      </p>
      <pre>
&lt;item name="options" xsi:type="array"&gt;
    &lt;item name="buttons" xsi:type="array"&gt;
         &lt;item name="%button_number%" xsi:type="array"&gt;
             &lt;item name="class" xsi:type="string"&gt;%class%&lt;/item&gt;
         &lt;/item&gt;
    &lt;/item&gt;
&lt;/item&gt;
</pre>
      <p>
        <strong>Type:</strong> String
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> Undefined
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>actions</code>
      <p>
        Button actions. On button click, actions are performed in
        the same order as they are specified in config.<br />
        Set as follows:
      </p>
      <pre>
&lt;item name="options" xsi:type="array"&gt;
    &lt;item name="buttons" xsi:type="array"&gt;
         &lt;item name="%button_number%" xsi:type="array"&gt;
             &lt;item name="actions" xsi:type="string"&gt;
                &lt;--! Action that calls the method of the other UI component --&gt;
                &lt;item name="%action_number%" xsi:type="array"&gt;
                    &lt;item name="targetName" xsi:type="string"&gt;%component_which_performs_action%&lt;/item&gt;
                    &lt;item name="actionName" xsi:type="string"&gt;%method_of_target_component%&lt;/item&gt;
                &lt;/item&gt;
                &lt;--! Action that calls the method of the modal component --&gt;
                &lt;item name="%next_action_number%" xsi:type="array"&gt;%method_of_modal_component%&lt;/item&gt;
             &lt;/item&gt;
         &lt;/item&gt;
    &lt;/item&gt;
&lt;/item&gt;
</pre>
      <p>
        <strong>Type:</strong> Object
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> Undefined
      </p>
    </td>
  </tr>
  <tr>
    <td>
      <code>onCancel</code>
      <p>
        Action (method name), that is performed on canceling
        interactions: pressing Esc, clicking outside the modal
        window, or clicking the 'X' (close) icon.
      </p>
      <p>
        <strong>Type:</strong> String
      </p>
      <p>
        <strong>Required?:</strong> Optional
      </p>
      <p>
        <strong>Default value:</strong> <code>closeModal</code>
      </p>
    </td>
  </tr>
</table>

## Example of the Modal component configuration

The following sample is an example of the configuration for a simple modal window containing one text field and a standard set of action buttons (**Cancel**, **Clear**, **Done**):

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
- `closeModal()`: closes the modal window.
- `openModal()`: opens the modal window.
- `setPrevValues(elem)`: returns all `elem`'s child components to the state they had on modal open.
- `setTitle()`: sets modal title.
- `setSubTitle()`: sets modal sub title.
- `toggleModal()`: toggles the modal window state (open/close).
