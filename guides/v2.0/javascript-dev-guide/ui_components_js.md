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

- The structure of componenents configuration.
- The most important component's client-side properties. 
- Description of the additional UI components.
- How to link components.
- How to debug a UI component's client side.

## Component's configuration ##

Component's behavior, configuration and structure is defined by the following:

 - The available components configuration options are defined by component.js -> defaults.
 - The actual configuration and structure of a particular component's `app/code/Magento/<Module>/view/<area>ui_component/*.xml` configuration from xml  == content from <argument/> node <p class="q">need more explanation</p>
	xml describes structure of components, their real names. Also it extends properties, configures template and component file.
 - Componet methods descibed in component.js
 
All of these are available in template's scope.
<p class="q">in what way</p>

<p class="q">Need to add info about how to customize configuration in JS: create a new JS handling this + specify this JS in the XML config</p>

## Main UI components' properties ##
The most important client-side properties of a UI component are the following:

 - `component`: the path to the JavaScript implementation of a component path in terms of RequireJS. JS component should return Class
<p class="q">Not clear about class</p>

	Example:

{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="component" xsi:type="string">Magento_Ui/js/grid/controls/bookmarks/bookmarks</item>
</argument>
{% endhighlight xml%}

 - `template`: path to the html template.The html template is based on top of Knockout
<p class="q">Not clear</p>
	Example:
{% highlight xml%}
<argument name="data" xsi:type="array">
        <item name="template" xsi:type="string">ui/grid/controls/bookmarks/bookmarks.html</item>
</argument>
{% endhighlight xml%}

 - `children` -  is a fantom property that contains nested/linked components. In the xml configuration, all nodes that are not `<argument/>` are children. In Knockout JS templates children are the keys of the `elems` property.


## UI Components' properties used for linking
The following properties are used for linking observable properties and methods of UI components:

<ul>
<li><code>exports</code>: used to notify some external entity about property changing. <code>Exports</code>'s value is an object, composed of the following:
<ul>
<li>key - name of the property or method from which is tracked for changes. Only internal property.</li>
<li>value - name of the property or method which receives the notification. Could use string templates.</li>
<p class="q">need to add an illustration of a string template</p>
</ul>
Example of using <code>export</code> in component.js:
{% highlight php%}
{
  'exports': {
   'visible': '${ $.provider }.visibility'
  }
}
{% endhighlight php%}

Example of using <code>export</code> in configuration.xml file:
{% highlight php%}
&lt;argument name=&quot;data&quot; xsi:type=&quot;array&quot;&gt;
       &lt;item name=&quot;config&quot; xsi:type=&quot;array&quot;&gt;
                    &lt;item name=&quot;links&quot; xsi:type=&quot;array&quot;&gt;
                        &lt;item name=&quot;visible&quot; xsi:type=&quot;string&quot;&gt;sample_config.sample_provider.visibility&lt;/item&gt;
                    &lt;/item&gt;
       &lt;/item&gt;
&lt;/argument&gt;
{% endhighlight php%}
</li>
 -- imports 

-
 -- links
 -- listen
</ul>

## Frequently used components
- uiElement
- uiCollection
- uiRegistry
- uiClass


- adfdf