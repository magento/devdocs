---
group: ui-components-guide
title: Linking properties of UI components
---

## Overview

The following properties are used for linking observable properties and methods of UI components:

-  `exports`
-  `imports`
-  `links`
-  `listens`

These properties are processed by the `initLinks()` method of the [`uiElement` class]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html) which is called at the moment of a component's instantiation.

Linking properties are set in [UI components configuration files]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_config_flow_concept.html): XML, JS or PHP.

## `exports` property

The `exports` property is used to copy a local value to some external entity. If the external entity property is anything but a function, it will be set to the value of the local property. If the external property is a function, it will be called with the local properties value as an argument.
If the local value is a ko of io-es5 observable, the external entity will also be updated whenever the local property changes. `exports`'s value is an object, composed of the following:

-  `key`: name of the internal property or method that is tracked for changes.
-  `value`: name of the property or method that receives the value. Can use [string templates](#string_templ).

Example of setting `exports` in a component's `.js` file:

```json
{
  "defaults": {
    "exports": {
      "visible": "${ $.provider }:visibility"
    }
  }
}
```

Here `visible` is the `key`, `${ $.provider }:visibility` is the `value`. The value of the local `visible` property is assigned to the `visibility` property of the `provider` component. The latter is changed automatically if the value of `visible` changes if the local `visible` property is observable (which it isn't given only the code example above).

Example of setting `exports` directly using the destination component name:

```json
{
  "defaults": {
    "exports": {
      "items": "checkout.sidebar.summary.cart_items:items"
    }
  }
}
```

The syntax for the destination component name is determined by the hierarchy in the XML handle. Separate parent names with a `.` (dot) followed by the component name.

{:.bs-callout-info}
To retrieve the full name of the destination component name, open your browser in developer mode, select the element that you want on the **Elements** tab, go to the **Console** tab, and execute the following code: `require('ko').contextFor($0).$data.name`.

Example of setting `exports` in a component's configuration `.xml` file:

```xml
<argument name="data" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="exports" xsi:type="array">
            <item name="visible" xsi:type="string">sample_config.sample_provider:visibility</item>
        </item>
    </item>
</argument>
```

For an example of `exports` usage in Magento code see [`product_form.xml`, line 76]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/view/adminhtml/ui_component/product_form.xml#L76)

## `imports` property

The `imports` property is used for tracking changes of an external entity property. `imports`'s value is an object, composed of the following:

-  `key`: name of the internal property or method that receives the value.
-  `value`: name of the property or method that is tracked for changes. Can use [string templates](#string_templ).

Example of using `imports` in a component's `.js` file:

```json
{
  "defaults": {
    "imports": {
      "visible": "${ $.provider }:visibility"
    }
  }
}
```

Here the value of the `visibility` property of the `provider` component is assigned to the local `visible` property. If the latter is a ko or ko-es5 observable, the local property is automatically updated if `visibility` changes.

Example of using `imports` in a component's configuration `.xml` file:

```xml
<argument name="data" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="imports" xsi:type="array">
            <item name="visible" xsi:type="string">sample_config.sample_provider:visibility</item>
        </item>
    </item>
</argument>
```

For an example of `imports` usage in Magento code see [`product_form.xml`, line 105]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogInventory/view/adminhtml/ui_component/product_form.xml#L105)

## `links` property

The `links` property is used for cross tracking properties changes: both linked properties are tracked and changing of one results in changing the other. `links`'s value is an object, composed of the following:

-  `key`: name of the internal property or method that sends and receives the notifications.
-  `value`: name of the property or method that sends and receives the value. Can use [string templates](#string_templ).

Example of using `links` in a component's `.js` file:

```json
{
  "defaults": {
    "links": {
      "visible": "${ $.provider }:visibility"
    }
  }
}
```

Here the local `visible` property is linked with the `visibility`  property of the provider component. If any of them is a ko or ko-es5 observable and changes, the other is changed automatically. If a non-observable linked property is changed the other is not updated automatically.

Example of using `links` in a component's configuration `.xml` file:

```xml
<argument name="data" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="links" xsi:type="array">
            <item name="visible" xsi:type="string">sample_config.sample_provider:visibility</item>
        </item>
    </item>
</argument>
```

For an example of `links` usage in Magento code see [`text.js`, line 22]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/text.js#L22)

## `listens` property
The `listens` property is used to track the changes of a component's property. `listens`'s value is an object, composed of the following:

-  `key`: name of the observable property or method which is tracked for changes. Can use [string templates](#string_templ).
-  `value`: name of the internal method or property which listens to the changes.

Example of using `listens` in a component's `.js` file :

```json
{
  "defaults": {
    "listens": {
      "${ $.provider }:visibility": "visibilityChanged"
    }
  }
}
```

Here the local `visibilityChanged` property is a method that will be called when the `visibility` property of the `provider` component changes. It receives the new value as an argument. If the local property is not a function, it will be set to the new value.
The external property has to be an observable in order for `listens` to have any effect.

Example of using `listens` in a component's configuration `.xml` file:

```xml
<argument name="data" xsi:type="array">
    <item name="config" xsi:type="array">
        <item name="listens" xsi:type="array">
            <item name="sample_config.sample_provider:visibility" xsi:type="string">visibilityChanged</item>
        </item>
    </item>
</argument>
```

For example of `listens` usage in Magento code see [`new_category_form.xml`, line 84]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/adminhtml/ui_component/new_category_form.xml#L84)

## Template strings usage {#string_templ}

The options of linking properties can contain template strings in the `'${...}'` format. During the component’s initialization, values in this format are processed as template strings using [ES6 templates](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals). In browsers that do not support ES6 templates, these values are processed as underscore templates.

So if we put a variable name in `'${...}'`, it is processed into a string representation of the variable’s value.

When working with UI components, we often need to use the string representation of a certain property of the UI component. To address a property of the UI component in the scope of this component, the `$.someProperty` syntax is used.

As a result, if the component's property is the variable for the template string, we get notation similar to the following:

```js
${ $.provider }:foo
```

If the string would be built at runtime it would be equivalent to `this.provider + ':foo'`.

We can also build complex templates strings using this syntax, as follows:

-  Using variables from the other component:

   ```js
   '${ $.provider }:${ $.dataScope }' // 'provider' is the full name of the other component
   ```

-  Calling several functions in one string:

   ```js
   '${ $.provider }:data.overload': 'overload reset validate'// we call 'overload', 'reset', 'validate'
   ```

-  Using inline conditions:

   ```js
   '${ $.provider }:${ $.customScope ? $.customScope + "." : ""}data.validate': 'validate'
   ```
