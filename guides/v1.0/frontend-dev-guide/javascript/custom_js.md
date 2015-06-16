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
This topic talks about how to use custom Javascript components, together with the default ones used in Magento or having replaced them with custom implementations.

We strongly recommend not to change the default Magento files. All customizations must be implemented in custom modules or themes.

<h2 id="js_replace">Use custom implementations instead of default JS components</h2>


To use a custom implementation of a certain existing Magento JS component:
<ol>
<li>Place the custom component source file in one of the following locations:
<ul>
<li>Your theme JS files: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/web/js</code></li>
<li>Your module view JS files: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend/web/js</code></li>
</ul>
</li>
<li>Create a RequireJS configuration file <code>requirejs-config.js</code>, having specified the following:

<p class="q">Need help to create a general sample</p>

For example, if you want to use the custom implementation of <code>navigation-menu.js</code> 
<pre>
var config = {
  &quot;map&quot;: {
    &quot;*&quot;: {
      &quot;menu&quot;: &quot;js/navigation-menu&quot;,
      &quot;mage/backend/menu&quot;: &quot;js/navigation-menu&quot;,
    }
  }
};
</pre>

<p class="q">What is navigation-menu.js?</p>

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
  'jquery/ui'
], function($){
 
  $.widget('&lt;your_namespace&gt;.&lt;your_widget_name&gt;', $.mage.&lt;widget.name&gt;, { ... });
 
  return $.&lt;your_namespace&gt;.&lt;your_widget_name&gt;;
});
</pre>

Where the following notation is used:
<ul>
<li><code>&lt;your_namespace&gt;.&lt;your_widget_name&gt;</code> - the name of your custom widget. According to the jQuery widgets naming convenvtion, must contain a namespace and name.</li>

<li><code>mage.&lt;widget.name&gt;</code> - the name of the Magento widget which you extend.</li>
</ul>

For innformation about how to initialize your custom widget in a `.phtml` template, see the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

<h3 id="extend_js_component">Extend a default UI component</h3>

To extend a default UI component, your custom JS component must contain the following:

<pre>
define([
  '&lt;default_component&gt;'
], function(&lt;your_component&gt;){
 
  return &lt;your_component&gt;.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
</pre>

Where the following notation is used:

<ul>
<li><code>&lt;default_component&gt;</code>: the name of the default Magento component that you extend</li>
<li><code>&lt;your_component&gt;</code>: your custom component</li>
</ul>

<p class="q">Need verification</p>

For example, if your custom component extends the default 
<pre>
define([
  'Magento_Ui/js/grid/filters/filters'
], function(Filters){
 
  return Filters.extend({
 
    defaults: { ... }, // properties with default values
    ... // methods of your component
  });
});
</pre>


For innformation about how to initialize your custom JS component in a `.phtml` template, see the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

<h2 id="disable_default_js">Disable default Magento JS</h2>

To disable the auto-loading of default Magento JS components and widget initialization:
<ol>
<li>Create a <code>requirejs-config.js</code> file with the following content:
<pre>
var config = {
    deps: [
    ]
};
</pre>
</li>
<li>Put the <code>requirejs-config.js</code> file in one of the following locations
<ul>
<li>Your custom theme files: <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;</code> </li>
<li>Your custom module files: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;/view/frontend</code></li>
</ul>
</li>
</ol>
If you need to enable the loading of default Magento JS components and widget initialization on a certain stage, add the following code in your JS script:

<pre>
$(mage.apply);
</pre>


<h2>Related topics</h2>
<a href="{{site.gdeurl}}config-guide/config/js-resources.html" target="_blank">JavaScript resources configuration</a>
