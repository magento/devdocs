---
layout: default
group: jsdg
subgroup: 2_UI_Components
title: Using UI components' client-side
menu_title: Using UI components' client-side
menu_order: 1
menu_node: parent
github_link: javascript-dev-guide/javascript/ui_components_js.md
---

<h2>What's in this topic</h2>
This topic is aimed for developers, who need to reuse the [Magento UI Components]({{site.gdeurl}}ui-library/ui-library-component.html). 

The topic covers the following:

- [UI componenents' configuration](#config).
- [The most important UI component's properties](#main_properties). 
- [UI components’ properties used for linking](#comp_link).
- [Description of the additional UI components](#comp_additional)
- [JS UI components debugging](#comp_debug).

## UI components' configuration {#config}

Component's behavior, configuration and structure is defined by the following:

 - The available configuration options and methods for components of a certain type, defined in the `defaults` section of the component's .js file.

 - The actual configuration and structure of a particular component, specified in the component's `.xml` configuration, in the scope of the `<argument></argument>` node. The configuration file also extends properties, configures template and component file.

<p class="q">What is meant by "configure template and component file"? it's clear about the template, but not about the file. The phrase is taken from your internal doc</p>

All these properties, options, and methods are available in components' templates.


## Basic UI components' properties {#main_properties}
The most important client-side properties of a UI component are the following:

 - `component`: the path to the component's `.js` file in terms of RequireJS.

Example:
The `.js` file of the bookmark component is [app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js]({{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js) 

So the `component` property  is set in the `.xml` configuration file like following:

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - `template`: path to the component's `.html` template.

Example:

The `.html` template of the bookmarks component is [app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/bookmarks.html]({{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/bookmarks.html). 

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="template" xsi:type="string">ui/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - children - is a general name for the nested components for a property. Children can be specified in the `.xml` configuration of a property (all nodes except `<argument/>` are considered children) and in the Knockout JS templates: children are the keys of the `elems` property.

<p class="q">are these  Knockout JS templates separate files or .html templates?</p>

## UI Components' properties used for linking {#comp_link}

The following properties are used for linking observable properties and methods of UI components:


- `exports`: used to notify some external entity about property changing. `exports`s value is an object, composed of the following:

  - `key`: name of the internal property or method which is tracked for changes.
  - `value`: name of the property or method which receives the notification. Can use string templates.

Example of setting `exports` in a component's `.js` file:

{% highlight js%}
{
  'exports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Example of using `exports` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="exports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

- `imports`: used for tracking changes of an external entity property. `imports`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which receives the notifications. 
  - `value`: name of the property or method which is tracked for changes. Can use string templates.

Example of using `imports` in a component's `.js` file:

{% highlight js%}
{
  'imports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Here `visible` is the `key`, `${ $.provider }.visibility` is the `value`.

Example of using `imports` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="imports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

In this example, `visible` is the `key`, `sample_config.sample_provider.visibility` is the `value`.

- `links`: used for mutual tracking property changes. `links`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which sends and receives the notifications. 
  - `value` - name of the internal property or method which sends and receives the notifications. CAn use string templates.

Example of using `links` in a component's `.js` file:

{% highlight js%}
{
  'links': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Example of using `links` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="links" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

- `listens`
  - `key` - name of the property which listens to the changes.
  - `value` - name of the property or method which is tracked for changes. Can use string templates.

Example of using `listens` in a component's `.js` file :

{% highlight js%}
{
  'listens': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight js%}

Example of using `listens` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="listens" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}


## Frequently used additional components {#comp_additional}
This section is a brief description of the most frequently used additional UI components.

### `uiClass`
Enables OOP pattern implementation.

### `uiElement`
Extends `uiClass`. Adds the following:

- the `defaults` property
- events handling
- handling properties linking (the `imports`, `exports`, `links` and `listens` properties)
- ability to add itself to the UI registry

### `uiCollection`

Extends `uiElement`. Adds the following:

- managing child elements (the `elems` property)
- by default uses the <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/collection.html">app/code/Magento/Ui/view/base/web/templates/collection.html</a> template

<p>is it an important info, about the template? why do we mention it?</p>


### `uiRegistry`
In-memory storage. Plain storage of entities by keys. Implements the `get()`, `set()`, and `has()` methods.


## JS UI components debugging {#comp_debug}
This section describes how to define what UI components are used on a particular page and what data they use.

To define the UI components used on a page, you can use browser built-in developer tools, or install addiotionally a plugin, for example Knockout JS context debugger for Google Chrome. 

**Note**: the similar plugins might exist for other browsers.

### Debug using browser built-in tools
1. Open the required page in a browser.
2. Select to view the page source.
3. Search for `data-bind="scope:`. The string after `scope` is the full name of the component.
5. Open developers tools and in the console tab run `require('uiRegistry').get('<full_component_name>')`. Where `<full_component_name>` is the name you defined on the previous step. The name and the configuration of the UI component instance is displayed once the command is executed.


### Debug using a Google Chrome plug-in

1. Install the Knockout JS context debugger for Google Chrome.
2. Open the required page in Chrome.
3. Point to the requiered element on the page, right-click and select **Inspect Element**. The developer tools panel opens.
4. In the right column of the panel, click the **Knockout context** tab. The tab displays the name and the configuration of the UI component instance.



