---
layout: default
group: fedg
subgroup: Javascript
title: Use custom JavaScript
menu_order: 3
menu_title: Use custom JavaScript
github_link: frontend-dev-guide/javascript/custom_js.md
---

<h2 id="custom_js_overview">Overview</h2>
This topic talks about how to use custom JavaScript components together with Magento default ones or having replaced them with custom implementations.

We strongly recommend not changing the default Magento files. All customizations must be implemented in custom modules or themes.

<h2 id="js_replace">Replace a default JS component</h2>


To use a custom implementation of an existing Magento JS component:
<ol>
<li>Place the custom component source file in one of the following locations:
<ul>
<li>Your theme JS files: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/js</code></li>
<li>Your module view JS files: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend/web/js</code></li>
</ul>
</li>
<li>Create a RequireJS configuration file <code>requirejs-config.js</code>, having specified the following:

{% highlight JavaScript %}
var config = {
  "map": {
    "*": {
      "<custom_component>": "<default_component>"
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
</ul>
<li>Place your <code>requirejs-config.js</code> file in one of the following directories (according to the location of your custom script, see step 1 of this procedure):
<ul>
<li>Your theme files: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;</code></li>
<li>Your module view files: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend</code></li>
</ul>
</li>
</ol>

This way your custom JS component is used instead of the Magento component in all entries all over the frontend area.

<h2 id="extend_js">Extend a default JS component</h2>
You can add a custom JS component/widget, which will extend a default Magento component/widget.

<h3 id="extend_js_widget">Extend Magento widget</h3>

To extend a default Magento jQuery widget, your custom widget must contain the following:

`<your_widget_name>.js`:
<pre>
define([
  'jquery',
  'jquery/ui',
  'mage/&lt;widget.name&gt;' // usually widget can be found in /lib/web/mage dir
], function($){
 
  $.widget('&lt;your_namespace&gt;.&lt;your_widget_name&gt;', $.mage.&lt;widget.name&gt;, { ... });
 
  return $.&lt;your_namespace&gt;.&lt;your_widget_name&gt;;
});
</pre>

Where the following notation is used:
<ul>
<li><code>&lt;your_namespace&gt;.&lt;your_widget_name&gt;</code> - the name of your custom widget. According to the jQuery widgets naming convention, must contain a namespace and name.</li>

<li><code>mage.&lt;widget.name&gt;</code> - the name of the Magento widget which you extend.</li>
</ul>

For information about how to initialize your custom widget in a `.phtml` template, see the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

<h3 id="extend_js_component">Extend a default Ui component</h3>

<p class="q">What about other JS components, which do not reside in app/code/Magento/Ui/view/.../web? Can they be extended? Yes, but this chapter talks about Ui components</p>

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


For information about how to initialize your custom JS component in a `.phtml` template, see the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

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
<li>Put the <code>requirejs-config.js</code> file in one of the following locations
<ul>
<li>Your custom theme files: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;</code> </li>
<li>Your custom module files: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend</code></li>
</ul>
</li>
</ol>
If you need to enable the loading of default Magento JS components and widget initialization on a certain stage, add the following code in your JS script:

{% highlight JavaScript %}
$(mage.apply);
{% endhighlight %}


<h2>Related topics</h2>
<a href="{{site.gdeurl}}config-guide/config/js-resources.html" target="_blank">JavaScript resources configuration</a>
