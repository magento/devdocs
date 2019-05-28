---
group: ui-library
subgroup: A_Using_UI
title: Using UI components client-side
menu_title: Using UI components client-side
menu_node: parent
redirect_from: /guides/v2.0/javascript-dev-guide/ui_components_js.html
---

## What's in this topic

This topic is aimed for developers, who need to reuse the [Magento UI Components]({{ page.baseurl }}/ui-library/ui-library-component.html). 

The topic covers the following:

- [UI component configuration](#config)
- [The most important UI component's properties](#main_properties)
- [UI component properties used for linking](#comp_link)
- [Description of the additional UI components](#comp_additional)
- [JS UI components debugging](#comp_debug)

## UI component configuration {#config}

A UI component's behavior, configuration and structure is defined by the following:

 - The available configuration options and methods for components of a certain type, defined in the component's .js file.

 - The actual configuration and structure of a particular component, specified in the component's configuration `.xml` file, in the scope of the `<argument></argument>` node. The configuration file also extends properties, specifies the component's template and the path to the component's `.js` file.

All these properties, options, and methods are available in the component template's scope.

## Most important UI component properties {#main_properties}

The most important client-side properties of a {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} are the following:

 - `component`: the path to the component's `.js` file in terms of RequireJS.

Example:
The `.js` file of the bookmark component is [Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/grid/controls/bookmarks/bookmarks.js) 

So the `component` property is set in the `.xml` configuration file like following:

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - `template`: path to the component's `.html` template.

Example:

The `.html` template of the bookmarks component is [Magento/Ui/view/base/web/templates/grid/controls/bookmarks/bookmarks.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/grid/controls/bookmarks/bookmarks.html). 

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="template" xsi:type="string">ui/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - children: is a general name for the nested components of a certain component. Children can be specified in the `.xml` configuration of the parent component (all nodes except `<argument/>` and `<dataSource/>` are considered children) and in the Knockout JS templates: children are the keys of the `elems` property.

 - `name`: the name of the component specified in the `.xml` configuration file of the parent UI component. In the run-time in a browser this value is transformed to a complex string. This string represents hierarchy of components in the run-time.
For example, [`app/code/Magento/Cms/view/adminhtml/ui_component/cms_block_listing.xml:57`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cms/view/adminhtml/ui_component/cms_block_listing.xml#L57):

{%highlight xml%} 
<component name="columns_controls">
{%endhighlight xml%} 

In the run-time `columns_controls` is transformed to the following string: `cms_block_listing.cms_block_listing.listing_top.columns_controls`. 

This string is constructed from the following values:

 - `cms_block_listing.cms_block_listing`: the full name of the root component.
 - `listing_top`: the value of the `name` attribute of the parent `<container name="listing_top">` component. 
 - `columns_controls`: the value of the `name` attribute of the component itself.

## UI Component properties used for linking {#comp_link}

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

Here `visible` is the `key`, `${ $.provider }.visibility` is the `value`.

Example of setting `exports` in a component's configuration `.xml` file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="exports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

In this example, `visible` is the `key`, `sample_config.sample_provider.visibility` is the `value`.

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


- `links`: used for mutual tracking property changes. `links`'s value is an object, composed of the following:

  - `key`: name of the internal property or method which sends and receives the notifications. 
  - `value` - name of the property or method which sends and receives the notifications. Can use string templates.

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

- `listens`: used to track the changes of a component's property.
  - `key` - name of the internal property which listens to the changes.
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
- by default uses the [app/code/Magento/Ui/view/base/web/templates/collection.html]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/collection.html) template

### `uiRegistry`
In-memory storage. Plain storage of entities by keys. Implements the `get()`, `set()`, and `has()` methods.

All the components described in this section are aliases in terms of RequireJS. So they can be directly requested in the component's `.js` file or used in a component's configuration `.xml` file (except `uiRegistry`, which by its nature is not expected to be used in a configuration file). 

Example for the `uiClass` property request:

{%highlight js%}
define( ['uiClass'], function (abstractClass) {
    return abstractClass.extend({ 
      ... // needed methods here
   };
});
{%endhighlight js%}

Example of using the `uiClass` property in a configuration file:
{%highlight js%}
  <container name="some_custom_component">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="component" xsi:type="string">uiClass</item>
            </item>
        </argument>
    </container>
{%endhighlight js%}

## JS UI components debugging {#comp_debug}

This section describes how to define what UI components are used on a particular page and what data they use.

To define the UI components used on a page, you can use browser built-in developer tools, or install additionally a plugin, for example Knockout JS context debugger for Google Chrome.

### Debug using browser built-in tools

1. Open the required page in a browser.
2. Select to view the page source.
3. Search for `data-bind="scope:`. The string after `scope` is the full name of the component.
5. Open developers tools and in the console tab run `require('uiRegistry').get('<full_component_name>')`. Where `<full_component_name>` is the name you defined on the previous step. The name and the configuration of the UI component instance is displayed once the command is executed.

For illustration, let's find out what UI components are used on the {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}Catalog{% endglossarytooltip %} page in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel:

![The catalog page]({{ site.baseurl }}/common/images/ui_debug1.png) 

According to the described procedure, open the page source and search for "`data-bind="scope:`"

![searching for data-bind=scope:]({{ site.baseurl }}/common/images/ui_debug2.png)

So we find out that the main UI component used on this page is product listing, with `product_listing.product_listing` as a full name. To see its configuration, child components and data source, in the in the **Console** tab we run `require('uiRegistry').get('product_listing.product_listing')`:

![run the command in Console]({{ site.baseurl }}/common/images/ui_debug3.png)

And we get the component's configuration:

![view the configuration]({{ site.baseurl }}/common/images/ui_debug4.png)

### Debug using a Google Chrome plug-in

1. Install the Knockout JS context debugger for Google Chrome.
2. Open the required page in Chrome.
3. Point to the required element on the page, right-click and select **Inspect Element**. The developer tools panel opens.
4. In the right column of the panel, click the **Knockout context** tab. The tab displays the name and the configuration of the UI component instance.



