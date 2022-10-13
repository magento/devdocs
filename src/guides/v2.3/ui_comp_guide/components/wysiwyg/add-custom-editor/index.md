---
group: ui-components-guide
title: Add Custom Editor
---

## Before you begin...

This tutorial goes through the process of adding [CKEditor4] as an editor that can be used by the WYSIWYG UI component.

As a developer, use this tutorial as a guide for adding your own custom JavaScript editor to Magento.

## Step 1. Make the editor library available

Download and install your editor's library into your module's `view/base/web/js` directory to have Magento publish it under `pub/static`.

## Step 2. Register editor

In your module's `etc/adminhtml/di.xml` file, add your editor to the list of `adapterOptions` to include it to the list of available WYSIWYG editors in the Admin.

Provide unique values for the `name` parameter and the `value` and `label` entries for your editor to avoid naming collisions.

If you are also extending or overriding the configuration for Variable, Widget, or Gallery, you must use the same string as the `value` entry.

> CKEditor registration in `app/code/CKEditor/CKEditor4/etc/adminhtml/di.xml`

```xml
<type name="Magento\Cms\Model\Config\Source\Wysiwyg\Editor">
    <arguments>
        <argument name="adapterOptions" xsi:type="array">
            <item name="ckeditor" xsi:type="array">
                <item name="value" xsi:type="string">CKEditor_CKEditor4/ckeditor4Adapter</item>
                <item name="label" xsi:type="string" translatable="true">ckeditor</item>
            </item>
        </argument>
    </arguments>
</type>
```

To avoid issues in the case that we remove or disable the adapter module, add this configuration to the `di.xml` file:

> Configuration in `di.xml`

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">
    <type name="Magento\Ui\Block\Wysiwyg\ActiveEditor">
        <arguments>
            <argument name="availableAdapterPaths" xsi:type="array">
                <item name="CKEditor_CKEditor4/ckeditor4Adapter" xsi:type="string"/>
            </argument>
        </arguments>
    </type>
</config>
```

## Step 3. Create editor adapter

Create an adapter for your editor in your module's `view/base/web` directory.
This adapter should implement the extensions points called by `wysiwygInstance` in the following file:

`lib/mage/adminhtml/wysiwyg/tiny_mce/setup.js`

At minimum your adapter should implement the following methods:

*  `getAdapterPrototype()`
*  `setup( mode )`
*  `openFileBrowser( o )`
*  `toggle()`
*  `onFormValidation()`
*  `encodeContent(content)`

If you are integrating Magento entities such as variable and widget as plugins, your adapter must also implement the following methods:

*  `get( id )` - returns the editor by it element id
*  `getContent()` - returns the content stored in the WYSIWYG field
*  `setContent(content)` - replaces the entire contents of the WYSIWYG with the string content parameter
*  `insertContent( content )` - inserts content into the editor
*  `setCaretOnElement( targetElement )` - sets the caret location in the editor
*  `activeEditor()` - returns the active editor as an object with a `selection` property.

   The `selection` property returns an instance of the editor with the following additional methods defined:

   *  `getBookmark( type:Number, normalized:Boolean ):Object` - returns a bookmark object that has the location for the current selection.

      This is used to restore the selection after content modification in the document.

   *  `moveToBookmark( bookmark:Object ):Boolean` - restores the selection of the specified bookmark.
   *  `getNode():Element` - returns the currently selected element or common ancestor element for both start and end of the selection.
   *  `select( targetElement )` - selects the specified element.

      This places the start and end of the selection range around the element.

   *  `collapse( to_start:Boolean ):void` - collapse the selection to start or end of range.

**Example:** CKEditor/CKEditor4/view/base/web/ckeditor4Adapter.js

{% collapsible Show file content %}
{% include_relative code-samples/ckeditor4Adapter.md %}
{% endcollapsible %}

## Step 4. Load editor library

After loading, modifying, and merging all configurations, Magento serializes the result into a JSON object and passes it to the UI component.

In your module's `view/base/requirejs-config.js` file, add a shim configuration entry for your editor in order to have RequireJS load it correctly.

**Example:** CKEditor\CKEditor4\view\base\requirejs-config.js

```json
var config = {
    "shim": {
        "CKEditor_CKEditor4/js/ckeditor4/ckeditor": { "exports": "CKEDITOR" }
    }
};
```
[CKEditor4]: https://ckeditor.com/ckeditor-4/
