---
group: ui-components-guide
subgroup: components
title: Modal component
menu_title: Modal component
---

The Modal [UI component](https://glossary.magento.com/ui-component) implements a secondary window that opens on top of the main window. It uses the [modal widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html).

Similar to the widget's configuration, the component's configuration allows you to set the window type and the behavior of action buttons (including linking action buttons to methods of the other UI components).

The Modal component can be used for both [Admin](https://glossary.magento.com/admin) and storefronts.

For recommendations about modal windows usage from the UX point of view, see the corresponding topic in the [Magento Admin pattern library]({{ page.baseurl }}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html).

## Configuration options

Component's options are set in the configuration `.xml` file as follows:

```xml
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
```

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>modalClass</code></td>
    <td>CSS class applied to the root node of the component's <code>.html</code> template.</td>
    <td>String</td>
    <td><code>modal-component</code></td>
  </tr>
  <tr>
    <td><code>onCancel</code></td>
    <td>Name of the method invoked when a user attempts to close the modal window.</td>
    <td>String</td>
    <td><code>closeModal</code></td>
  </tr>
  <tr>
    <td><code>options</code></td>
    <td>Configuration passed to the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html">modal widget</a>.</td>
    <td>Object</td>
    <td />
  </tr>
  <tr>
    <td><code>subTitle</code></td>
    <td>Subtitle of the modal window.</td>
    <td>String</td>
    <td />
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component's .html template.</td>
    <td>String</td>
    <td><code>ui/modal/modal-component</code></td>
  </tr>
  <tr>
    <td><code>title</code></td>
    <td>Label displayed in the header of the modal window.</td>
    <td>String</td>
    <td />
  </tr>
</table>

## Examples

### Configure component

The following sample is an example of the configuration for a simple modal window containing one text field and a standard set of action buttons (**Cancel**, **Clear**, **Done**):

```xml
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
```

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

- [`Magento_Ui_module_dir/view/base/web/js/modal/modal-component.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/modal/modal-component.js)
- [`Magento_Ui_module_dir/view/base/web/templates/modal/modal-component.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/modal/modal-component.html)

### Methods and events

- `actionCancel()` - returns all modal's child components to the state they had on modal open and closes the modal window.
- `actionDone()` - validates the changes in the modal's child components and, if valid, closes the modal.
- `closeModal()`: - closes the modal window.
- `openModal()` - opens the modal window.
- `setPrevValues(elem)` - returns all `elem`'s child components to the state they had on modal open.
- `setTitle()` - sets modal title.
- `setSubTitle()` - sets modal sub title.
- `toggleModal()` - toggles the modal window state (open/close).
