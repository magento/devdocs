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
This topic is aimed for developers, who need to reuse the Magento UI Components. 

The topic covers the following:

- [UI componenents' configuration](#config).
- [The most important UI component's properties](#main_properties). 
- [UI components’ properties used for linking](#comp_link).
- [Description of the additional UI components](#comp_additional)
- [JS UI components debugging](#comp_debug).

## UI components' configuration {#config}

Component's behavior, configuration and structure is defined by the following:

 - The available components configuration options are defined by a component's JS file -> defaults.
<p class="q">is it really named components.js or is it a generalization? if so, what is the file we are talking about </p>
 - The actual configuration and structure of a particular component `app/code/Magento/<Module>/view/<area>ui_component/*.xml` configuration from xml  == content from <argument/> node <p class="q">need more explanation</p>
	xml describes structure of components, their real names. Also it extends properties, configures template and component file.
 - Componet methods descibed in component.js
 
All of these are available in template's scope.
<p class="q">in what way</p>

<p class="q">Need to add info about how to customize configuration in JS: create a new JS handling this + specify this JS in the XML config</p>

## Basic UI components' properties {#main_properties}
The most important client-side properties of a UI component are the following:

 - `component`: the path to the JavaScript implementation of a component in terms of RequireJS. <p class="q">JS component file itself should return constructor..(move to improvements)...</p>


	Example:

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - `template`: path to the html template.The html template is based on top of Knockout
<p class="q">Not clear.A: uses Knockout syntax</p>
	Example:
{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="template" xsi:type="string">ui/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - children -  is a fantom property (the property with this name does not exist) that contains nested/linked components. In the xml configuration, all nodes that are not `<argument/>` are children. In Knockout JS templates children are the keys of the `elems` property.


## UI Components' properties used for linking {#comp_link}
The following properties are used for linking observable properties and methods of UI components:

<ul>
<li><code>exports</code>: used to notify some external entity about property changing. <code>exports</code>'s value is an object, composed of the following:
<ul>
<li><code>key</code> - name of the property or method which is tracked for changes. Only internal property.</li>
<li><code>value</code> - name of the property or method which receives the notification. Could use string templates.</li>
<p class="q">need to add an illustration of a string template
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings</p>
</ul>
Example of setting <code>exports</code> in <code>component.js</code>:
{% highlight php%}
{
  'exports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight php%}

Example of using <code>exports</code> in <code>configuration.xml</code> file:

{% highlight php%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="exports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight php%}
</li>
<li><code>imports</code>: used for tracking changes of an external entity property. <code>imports</code>'s value is an object, composed of the following:
<ul>
<li><code>key</code> - name of the property or method which receives the notifications. Only internal property.</li>
<li><code>value</code> - name of the property or method which is tracked for changes. Could use string templates.</li>
<p class="q">need to add an illustration of a string template</p>
</ul>

Example of using <code>imports</code> in <code>component.js</code>:

{% highlight php%}
{
  'imports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight php%}

Here `visible` is the `key`, `${ $.provider }.visibility` is the `value`.

Example of using <code>exports</code> in <code>configuration.xml</code> file:

{% highlight php%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="imports" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight php%}

In these examples, `visible` is the `key`, `sample_config.sample_provider.visibility` is the value.

</li>

<li>
<code>links</code> used for mutual tracking property changes. <code>links</code>'s value is an object, composed of the following:
<p class="q">Is it the same for links? If yes, are both key and value just equivalent properties? both key and value can change or track changes</p>
<ul>
<li><code>key</code> - name of the property or method which receives the notifications. Only internal property.</li>
<li><code>value</code> - name of the property or method which is tracked for changes. Could use string templates.</li>
<p class="q">need to add an illustration of a string template</p>
</ul>

Example of using <code>links</code> in <code>component.js</code>:

{% highlight php%}
{
  'links': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight php%}

Example of using <code>links</code> in <code>configuration.xml</code> file:

{% highlight xml%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="links" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight xml%}

</li>
<li>
<code>listens</code> 
<ul>
<li><code>key</code> - name of the property which listens to the changes.</li>
<li><code>value</code> - name of the property or method which is tracked for changes. Could use string templates.</li>
<p class="q">What is the difference between listens and imports?</p>
</ul>
Example of using <code>listens</code> in <code>component.js</code>:

{% highlight php%}
{
  'listens': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight php%}

Example of using <code>listens</code> in <code>configuration.xml</code> file:

{% highlight php%}
<argument name="data" xsi:type="array">
       <item name="config" xsi:type="array">
                    <item name="listens" xsi:type="array">
                        <item name="visible" xsi:type="string">sample_config.sample_provider.visibility</item>
                    </item>
       </item>
</argument>
{% endhighlight php%}
</li>

</ul>

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

Extends uiElement. Adds the following:

- managing child elements (the `elems` property)
- by default uses the <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/collection.html">app/code/Magento/Ui/view/base/web/templates/collection.html</a> template.


### `uiRegistry`
In-memory storage. Plain storage of entities by keys. Implements the `get()`, `set()`, and `has()` methods.


## JS UI components debugging {#comp_debug}
This section describes how to define what UI components are involved for a particular page generation and what data they use.

To define the UI components used on a page, you can analyze the page source a browser plug-in, like Knockout JS context debugger, or the . Both approached are described further.

### Debug using browser built-in tools
1. Open the required page in browser
2. Select to view the page source.
3. Search for `data-bind="scope:`. The string after `scope` is the full name of the component.
5. Open developers tools and in the console tab run `require('uiRegistry').get('<component_component.name')`. Where `<full_component_name>` is the name you defined on the previous step.

6. View the name and the configuration of the UI component instance.

Alternatively, on the step 4, copy the content of the `<script></script>` tag to the json viewer/formatter and view the the name and the configuration of the UI component instance.

### Debug using a Google Chrome plug-in

1. Install the Knockout JS context debugger for Google Chrome.
2. Open the required page in Chrome.
3. Point to the requiered element on the page, right-click and select Inspect Element. The developer tools panel opens.
4. In the right column of the panel, click the Knockout context tab. The tab displays the name and the configuration of the UI component instance.

<p class="q">illustration</p>

