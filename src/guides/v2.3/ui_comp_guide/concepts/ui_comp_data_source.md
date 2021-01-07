---
group: ui-components-guide
title: The DataSource Component
contributor_name: SwiftOtter Studios
contributor_link: https://swiftotter.com/
---

## Overview

Magento provides the DataSource object, which is designed to interact with data in your [UI component](https://glossary.magento.com/ui-component). Many of the core UI components use this DataSource component. Many UI components require that this object is included. However, there are specific requirements it has in order for it to work correctly.

In this topic, we will explain how to take advantage of the powerful functionality of the data provider in a UI Component.

### Declaring the XML

The DataSource UI component can be included with the `<dataSource />` node in the component's top-level configuration file. The `name` attribute is recommended and should follow the `%instance_name%_data_source` pattern where `%instance_name%` is the name of the component.

The component's data provider class is declared inside `<dataSource />`. The following provides an example and demonstrates what nodes are required.

```xml
<argument name="dataProvider" xsi:type="configurableObject">
    <argument name="class" xsi:type="string">[YourNameSpace]\[YourModule]\Ui\DataProvider\[YourComponentName]\DataProvider</argument>
    <argument name="name" xsi:type="string">[YourComponentName]_data_source</argument>
    <argument name="primaryFieldName" xsi:type="string">entity_id</argument>
    <argument name="requestFieldName" xsi:type="string">id</argument>
</argument>
```

In the block of code above, [YourNameSpace]\[YourModule] would be the directory that contains all of the module's files and directories. [YourComponentName] is the name of this instance of a component, which should be the file name as well.

The main node of interest is `<argument name="class" />.` This references a PHP class that must implement `\Magento\Framework\View\Element\UiComponent\DataProvider\DataProviderInterface`. To meet that requirement, it can extend or implement the [`\Magento\Ui\DataProvider\ModifierPoolDataProvider`] class which inherits the [`\Magento\Ui\DataProvider\AbstractDataProvider`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/DataProvider/AbstractDataProvider.php). The `AbstractDataProvider` class implements all of the required methods in the `DataProviderInterface`. The DataProvider class is the primary source of any data or [metadata](https://glossary.magento.com/metadata) that the component needs or will use.

While the [XML](https://glossary.magento.com/xml) tells Magento about the component's data provider, Magento does not do anything in particular with that unless you hook it up to the component's main PHP class. To make the data available in javascript, add a `getDataSourceData()` method to the UI component's PHP class and return `$this->getContext()->getDataProvider()->getData()`. This will output the result of the data provider's `getData()` method into the JSON that is sent to the browser along with the rest of the UI component's configuration.

Declare a `getData()` method in the data provider class that was referenced in the XML and return a value. Since that output will be part of the JSON rendered on the page, it is accessible via the [javascript](https://glossary.magento.com/javascript) class that is associated with the UI component and handles its behavior. Magento's Form Provider javascript class is often a good place to start.

{:.bs-callout-info}
A Javascript "component" is actually a Javascript file loaded through RequireJS. It should return a Javascript object that defines a module or function. Do not confuse Javascript components with UI components.

Include the Form Provider Javascript component by adding this inside the `<dataSource />` node:

```xml
<argument name="data" xsi:type="array">
    <item name="js_config" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
    </item>
</argument>
```

This will include [`Magento/Ui/view/base/web/js/form/provider.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/provider.js) on the page as part of this DataSource component. The Form Provider javascript can also be extended if the functionality doesn't do what is necessary in your case.

Remember that this data provider is still, technically speaking, a completely separate UI Component. To fully link it to the "base" component, there are a few things that need to happen so that the "base" UI component's javascript can use the data provided by the data provider.

A good way to keep configuration data out of the javascript is to declare a "provider" in the base component's XML so it will be able to find that data provider component. Under the `<argument name="data" />` node, add a node like this (where `[ComponentName]` is the name of the component):

```xml
<item name="js_config" xsi:type="array">
    <item name="provider" xsi:type="string">[ComponentName].[ComponentName]_data_source</item>
</item>
```

This example declares the name of the data provider class and will be output in the JSON that contains the UI component's configuration. It can then be used to locate the data source component. This is essentially declaring a variable that will be available to a javascript class.

## Javascript Template Literals

Throughout Magento's core Javascript components there are strings like this: `'${ $.provider }:data.totalRecords'`. These are ES2015 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). The `${ }` surrounds an expression that will be parsed as Javascript. `$.provider` is the expression, in this example.

The template literal is in a single-quote string, however, not the back-ticks which are standard for ES2015. As a result, they would normally be treated as a string. Since Magento needs to support browsers that don't recognize template literals a special interpreter was built for them. If the browser does support standard back-tick template literals, Magento will use that, and if not, it evaluates the value manually.

When the component is initialized, it will automatically evaluate all string literals in properties. In the example above, `$.provider` will become  `[ComponentName].[ComponentName]_data_source`. The value of this `provider` was declared in the `js_config` block in the XML above. It is possible to pass nearly any configuration value this way and access it using template literals.

But, XML is static and while that gets us the name of the data provider component, it still does not actually provide data. There is one more important step in providing data to Javascript components.

## Javascript Component Linking

Every Javascript component should extend the core Element class in some way (mapped to [`uiElement`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uielement_concept.html) with RequireJS and located in [`Magento/Ui/view/base/web/js/lib/core/element/element.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/lib/core/element/element.js).  When this class initializes it runs an `initLinks()` method. That method, in turn, passes a few class properties into a method that handles linking components together. This file (`lib/core/element/link.js`) binds the values of those parameters to actual components.

The properties Magento will parse are:

-  `imports`
-  `exports`
-  `links`

The `links` property is the same as duplicating a value in both `imports` and `exports`. Each of those properties expect an object that contains key/value pairs to bind the expression to. In the example above, it would appear in the `defaults` property like this:

```js
imports: {
    totalRecords: '${ $.provider }:data.totalRecords'
}
```

When the Element class initializes, it will process the link that was declared in `imports`. Remember that one of the first things Magento does is process string literals, though, so it is actually working with something that looks more like the following (where `example` is the UI Component Name for clarity):

```js
imports: {
    totalRecords: 'example.example_data_source:data.totalRecords'
}
```

The `:` is a special separator that is used to divide the component name that it is to link to and the values it should access in the returned value. No `:` is necessary, though, and the expression, `$.provider` could be any key that was passed into the javascript configuration.

In the example above, it will return the `totalRecords` property of the `data` object in the `example.example_data_source` component. As a result of these connections, `totalRecords` will display the output of `DataProvider::getData()`.
