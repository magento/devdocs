---
layout: default
group: UI_Components_guide
subgroup: concepts
title: The DataSource Component
menu_title: Providing Data to UI Components
menu_order: 5
contributor_name: SwiftOtter Studios
contributor_link: https://swiftotter.com/
version: 2.1
github_link: ui_comp_guide/concepts/ui_comp_data_source.md
---


## {{page.title}}
{:.no_toc}


## Overview
Magento provides a component that is designed to interact with data in your component. Many of the core UI Components use this DataSource component. Many UI components also require that this component is included. However, there are specific requirements it has in order for it to work correctly. 

In this guide, we will explain how to take advantage of the powerful functionality of the data provider in a UI Component.

### Declaring the XML

The DataSource component can be included with the `<dataSource />` node in the component's top-level configuration file. The `name` attribute is recommended and should follow the `%instance_name%_data_source` pattern where `%instance_name%` is the name of the component.

Inside the `<dataSource />` node declare the component's data provider class. This is done like this:

```
<argument name="dataProvider" xsi:type="configurableObject">
    <argument name="class" xsi:type="string">[YourNameSpace]\[YourModule]\Ui\DataProvider\[YourComponentName]DataProvider</argument>
    <argument name="name" xsi:type="string">[YourComponentName]_data_source</argument>
    <argument name="primaryFieldName" xsi:type="string">entity_id</argument>
    <argument name="requestFieldName" xsi:type="string">id</argument>
</argument>
```

In the block of code above [YourNameSpace]\[YourModule] is the directory that contains all of the module's files and directories. [YourComponentName] is the name of this instance of a component, which should be the file name as well.

The main node of interest is `<argument name="class" />.` This references a PHP class that must implement `\Magento\Framework\View\Element\UiComponent\DataProvider\DataProviderInterface` (or extend `\Magento\Ui\DataProvider\AbstractDataProvider`). If you extend the `AbstractDataProvider` class, there are no required methods to implement. This class will be the primary source of any data or metadata that the component needs. 

While the XML tells Magento about the component's data provider, Magento doesn't do anything with that unless you hook it up to the component's main PHP class. Add a `getDataSourceData()` method to the UI component's PHP class and return `$this->getContext()->getDataProvider()->getData()`. This will output the result of the data provider's `getData()` method into the JSON that is sent to the browser along with the rest of the UI component's configuration. 

Declare a `getData()` method in the data provider class that was just set up and return a value. Since that value will be part of the JSON rendered on the page, it is accessible via the javascript class that is associated with the UI component and handles its behavior. Magento's Form Provider javascript component is often a good place to start. 

```
<div class="bs-callout bs-callout-info" id="info">
    <p>A Javascript "component" is actually a Javascript file loaded through RequireJS. It should return a Javascript object that defines a module or function. Do not confuse Javascript components with UI components.</p>
</div>
```
Include the Form Provider Javascript component by adding this inside the `<dataSource />` node:

```
<argument name="data" xsi:type="array">
    <item name="js_config" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
    </item>
</argument>
``` 

This will include `Magento/Ui/view/base/web/js/form/provider.js` on the page as part of this DataSource component. The Form Provider Javascript can also be extended if the functionality doesn't do what is necessary in your case. 

Remember that this data provider is still, technically speaking, a completely separate UI Component. There are few things that need to happen in order to fully link it to the "base" component so that it can use the data provided by the data provider. 

First, we need to declare a "provider" in our base component so it will be able to find that data provider component. Under the `<argument name="data" />` node, add a node like this (where `[ComponentName]` is the name of the component):

```
<item name="js_config" xsi:type="array">
    <item name="provider" xsi:type="string">[ComponentName].[ComponentName]_data_source</item>
</item>
```

Take note of that item as it is a useful way to connect the UI component, not just the data provider, but other components and sub-components as well.

# Javascript Template Literals

Throughout Magento's core Javascript components there are strings like this: `'${ $.provider }:data.totalRecords'`. These are ES2015 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). The `${ }` surrounds an expression that will be parsed as Javascript. `$.provider` is the expression, in this example. 

The template literal is in a single-quote string, however, not the back-ticks which are standard for ES2015. As a result, they would normally be treated as a string. Since Magento needs to support browsers that don't recognize template literals a special interpreter was built for them. If the browser does support standard back-tick template literals, Magento will use that, and if not, it evaluates the value manually. 

When the component is initialized, it will automatically evaluate all string literals in properties. In the example above, `$.provider` will become  `[ComponentName].[ComponentName]_data_source`. The value of this `provider` was declared in the `js_config` block in the XML above. It is possible to pass nearly any configuration value this way and access it using template literals. 

But, XML is static and while that gets us the name of the data provider component, it still doesn't actually provide data. There is one more important step in providing data to Javascript components.

# Javascript Component Linking

Every Javascript component should extend the core Element class in some way (mapped to `uiElement` with RequireJS and located in `Magento/Ui/view/base/web/js/lib/core/element/element.js`.  When this class initializes it runs an `initLinks()` method. That method, in turn, passes a few class properties into a method that handles linking components together. This file (`lib/core/element/link.js`) binds the values of those parameters to actual components. 

The properties Magento will parse are: 
- `imports`
- `exports`
-  `links`

The `links` property is the same as duplicating a value in both `imports` and `exports`. Each of those properties expect an object that contains key/value pairs to bind the expression to. In the example above, it would appear in the `defaults` property like this:

```
imports: {
    totalRecords: '${ $.provider }:data.totalRecords'
}
```

When the Element class initializes, it will process the link that was declared in `imports`. Remember that one of the first things Magento does is process string literals, though, so it is actually working with something that looks more like the following (where `example` is the Component Name for clarity):

```
imports: {
    totalRecords: 'example.example_data_source:data.totalRecords'
}
```

The `:` is a special separator that is used to divide the component name that it is to link to and the values it should access in the returned value. No `:` is necessary, though, and the expression, `$.provider` could be any key that was passed into the javascript configuration. 

In the example above, it will return the `totalRecords` property of the `data` object in the `example.example_data_source` component. As a result of these connections, `{{totalRecords}}` will display the output of `DataProvider::getData()`.
