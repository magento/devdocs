---
group: ui-components-guide
title: MassActions component
---

The MassActions component allows performing actions with multiple selected items. Must be a child of the [Listing component]({{ page.baseurl }}/ui_comp_guide/components/ui-listing-grid.html).

See the [Admin Design Pattern Library (MassActions)]({{ page.baseurl }}/pattern-library/displaying-data/datatable/datatable.html#mass-actions) topic for information about the UI design patterns that can be implemented using the MassActions component.

## Dependencies

The MassActions component has dependencies on the following components:

*  Collapsible: `app\code\Magento\Ui\view\base\web\js\lib\collapsible.js`
*  Modal window with confirmation: `app\code\Magento\Ui\view\base\web\js\modal\confirm.js`
*  Modal window with alert: `app\code\Magento\Ui\view\base\web\js\modal\alert.js`

## Configuration options

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td><code>actions</code></td>
    <td>A list of available actions.</td>
    <td><code>MassAction[]</code></td>
    <td>-</td>
  </tr>
  <tr>
    <td><code>noItemsMsg</code></td>
    <td>Message displayed when a user attempts to perform an action without any selected items.</td>
    <td>String</td>
    <td><code>'You haven't selected any items!'</code></td>
  </tr>
  <tr>
    <td><code>stickyTmpl</code></td>
    <td>Additional component's template that is used when its parent <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-toolbar.html">Toolbar</a> component receives a fixed position.</td>
    <td>String</td>
    <td><code>ui/grid/sticky/actions</code></td>
  </tr>
  <tr>
    <td><code>template</code></td>
    <td>Path to the component’s <code>.html</code> template.</td>
    <td>String</td>
    <td><code>ui/grid/paging/sizes</code></td>
  </tr>
</table>

### MassAction interface

<table>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>callback</code></td>
    <td></td>
    <td><a href="{{ page.baseurl }}/ui_comp_guide/components/ui-column.html#column_action">ColumnAction</a></td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>confirm</code></td>
    <td>Confirmation message displayed before applying the action.</td>
    <td>{<br />title: string;<br />message: string;<br />}</td>
    <td>Optional</td>
  </tr>
  <tr>
    <td><code>label</code></td>
    <td>Action's label displayed in the list of actions.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>type</code></td>
    <td>Action's identifier.</td>
    <td>String</td>
    <td>Required</td>
  </tr>
  <tr>
    <td><code>url</code></td>
    <td>Path to the controller responsible for action handling.</td>
    <td>String</td>
    <td>Optional</td>
  </tr>
</table>

## Examples

### Redefine the link to the template

```xml
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
        <item name="config" xsi:type="array">
            <item name="template" xsi:type="string">product/grid/columns/massactions</item>
        </item>
    </argument>
</massaction>
```

### Specify action with confirmation

```xml
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
    </argument>
    <action name="edit">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="confirm" xsi:type="array">
                    <item name="title" xsi:type="string" translate="true">Edit items</item>
                    <item name="message" xsi:type="string" translate="true">Are you sure you want to edit selected items?</item>
                </item>
                <item name="type" xsi:type="string">edit</item>
                <item name="label" xsi:type="string" translate="true">Edit</item>
            </item>
        </argument>
    </action>
</massaction>
```

### Action with a custom callback

Callback is provided by another component.

```xml
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        ...
    </argument>
    <action name="edit">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="type" xsi:type="string">edit</item>
                <item name="label" xsi:type="string" translate="true">Edit</item>
                <item name="callback" xsi:type="array">
                    <item name="provider" xsi:type="string">product_listing.inline_editing</item>
                    <item name="target" xsi:type="string">startEdit</item>
                </item>
            </item>
        </argument>
    </action>
</massaction>
```

### Instance replacement (one instance of a component)

Redefine link to constructor:

```xml
<massaction name="listing_massaction">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Products/js/grid/massactions</item>
        </item>
    </argument>
</massaction>
```

## Source files

Extends `Collapsible`:

*  [app\code\Magento\Ui\view\base\web\js\grid\massactions.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/massactions.js)
*  [app\code\Magento\Ui\view\base\web\templates\grid\actions.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/actions.html)

### Methods and events

The following [API](https://glossary.magento.com/api) methods are available:

*  `getAction` - returns the action instance found by the provided identifier
*  `addAction` - adds a new action to the actions
*  `applyAction` - applies the specified action as identifier action
*  `getSelections` - returns the object with current selections
