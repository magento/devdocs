---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Use custom JavaScript
menu_order: 3
menu_title: Use custom JavaScript
version: 2.0
github_link: javascript-dev-guide/javascript/custom_js.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/custom_js.html
  - guides/v1.0/frontend-dev-guide/javascript/custom_js.html
---

<h2 id="custom_js_overview">Overview</h2>
This topic discusses about how to use custom JavaScript components with the components provided by Magento or having replaced them with custom implementations.

We strongly recommend not changing the source code of default Magento components and widgets. All customizations must be implemented in custom modules or themes.

<h2 id="js_replace">Replace a default JS component</h2>


To use a custom implementation of an existing Magento JS component:
<ol>
<li>Place the custom component source file in one of the following locations:
<ul>
<li>Your theme JS files: <code>&lt;theme_dir&gt;/web/js</code></li>
<li>Your module view JS files: <code>&lt;module_dir&gt;/view/frontend/web/js</code></li>
</ul>
</li>
<li>Create a RequireJS configuration file <code>requirejs-config.js</code>, having specified the following:

{% highlight JavaScript %}
var config = {
  "map": {
    "*": {
      "<default_component>": "<custom_component>"
    }
  }
};

{% endhighlight %}

Where the following notation is used:
<ul>
<li><code>&lt;default_component&gt;</code>: the name of the default component you replace</li>
<li><code>&lt;custom_component&gt;</code>: the name of the custom component</li>
</ul>

For example, if you want to use custom <code>navigation-menu.js</code> script instead of the default menu widgets, your <code>requirejs-config.js</code> should contain the following:
{% highlight JavaScript %}
var config = {
  "map": {
    "*": {
      "menu": "js/navigation-menu",
      "mage/backend/menu": "js/navigation-menu",
    }
  }
};
{% endhighlight %}



</li>

<li>Place your <code>requirejs-config.js</code> file in one of the following directories (according to the location of your custom script, see step 1 of this procedure):
<ul>
<li>Your theme files: <code>&lt;theme_dir&gt;</code></li>
<li>Your module view files: &lt;module_dir&gt;/view/frontend</code></li>
</ul>
</li>
</ol>

This way your custom JS component is used instead of the Magento component in all entries all over the frontend area.

<h2 id="extend_js">Extend a default JS component</h2>
You can add a custom JS component/widget, which will extend a default Magento component/widget.

<h3 id="extend_js_widget">Extend Magento widget</h3>

To extend a default Magento jQuery widget, create `<your_widget_name>.js` with the following contents:

{% highlight JavaScript %}
define([
  'jquery',
  'jquery/ui',
  'mage/<widget.name>' // usually widget can be found in /lib/web/mage dir
], function($){
 
  $.widget('<your_namespace>.<your_widget_name>', $.mage.<widget.name>, { ... });
 
  return $.<your_namespace>.<your_widget_name>;
});
{% endhighlight %}

Where the following notation is used:
<ul>
<li><code>&lt;your_namespace&gt;.&lt;your_widget_name&gt;</code> - the name of your custom widget. According to the jQuery widgets naming convention, must contain a namespace and name.</li>

<li><code>mage.&lt;widget.name&gt;</code> - the name of the Magento widget that you extend.</li>
</ul>

For information about how to initialize your custom widget in a `.phtml` template, see the <a href="{{page.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

<h3 id="extend_js_component">Extend a default Ui component</h3>

To extend a default JS Ui component, your custom script must contain the following:

{% highlight JavaScript %}
define([
  '<component_path>'
], function(<component_alias>){
 
  return <component_alias>.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
{% endhighlight %}

Where the following notation is used:

<ul>
<li><code>&lt;component_path&gt;</code>: path to the default component that you extend</li>
<li><code>&lt;component_alias&gt;</code>: variable containing the default component that you extend</li>
</ul>

For example, <code>Filters.js</code> script extends the default <code>filters.js</code>:

{% highlight JavaScript %}
define([
  'Magento_Ui/js/grid/filters/filters'
], function(Filters){
 
  return Filters.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
{% endhighlight %}


For information about how to initialize your custom JS component in a `.phtml` template, see the <a href="{{page.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

<h2 id="disable_default_js">Disable default Magento JS</h2>

To disable the auto-loading of default Magento JS components and widget initialization:
<ol>
<li>Create a <code>requirejs-config.js</code> file with the following content:
{% highlight JavaScript %}
var config = {
    deps: [
    ]
};
{% endhighlight %}
</li>
<li>Put the <code>requirejs-config.js</code> file in one of the following locations:
<ul>
<li>Your custom theme files: <code>&lt;theme_dir&gt;</code> </li>
<li>Your custom module files: <code>&lt;module_dir&gt;/view/frontend</code></li>
</ul>
</li>
</ol>
If you need to enable the loading of default Magento JS components and widget initialization on a certain stage, add the following code in your JS script:

{% highlight JavaScript %}
$(mage.apply);
{% endhighlight %}


#### Related topic
[Configure JavaScript resources]({{ page.baseurl }}javascript-dev-guide/javascript/js-resources.html)

