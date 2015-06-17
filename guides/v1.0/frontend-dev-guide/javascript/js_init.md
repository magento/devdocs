---
layout: default
group: fedg
subgroup: Javascript
title: JavaScript initialization
menu_title: JavaScript initialization
menu_order: 2
github_link: frontend-dev-guide/javascript/js_init.md
---

<h2 id="js_init_overview">Overview</h2>

This topic talks about how to initialize a JavaScript component in the Magento 2 application.

The topic describes how to initialize a jQeury UI widget in a JS component, and two ways to initialize any JS component in a `.phtml` template, on a HTML element: using the `data-mage-init` attribute and using the `<script>` tag.

<h2 id="init_phtml">Initialize a JS component on HTML element</h2>
<h3 id="data_mage_init">Initialization using <code>data-mage-init</code></h3>

To initialize a JS component on certain HTML element, you need to specify the <code>data-mage-init</code> attribute for this element. Use the following sample as an example. In this sample a JS component is initialized for the `<nav/>` element:
<pre>
&lt;nav data-mage-init=&quot;{ &quot;&lt;component_name&gt;&quot;: {..<component configuration/options>.} }&quot;&gt;&lt;/nav&gt;
</pre>

The script is called only for the specific element for which it is initialized. It is not automatically initialized for other elements of this type on the page. 

<h4 id="init_process">How the JS initialization using <code>data-mage-init</code> is processed</h4>

On DOM ready, the `data-mage-init` attribute is parsed to extract components names and configuration to be applied to the node. 
Depending on the type of the JS component initialized, there are the following behavior patterns:
<ul>

<li>If an object is returned, initializer tries to find the "navigation" key. If the corresponding value is a function, then config and element are passed to it.</li>
<p class="q">need clarification</p>
For example:
<pre>
return {
    'navigation': function(config, element) { ... },
    'menu': function(config, element) { ... }
};
</pre>

<li>If a function is returned, config and element are simply passed to it. 

For example:

<pre>
return function(config, element) { ... };
</pre>

</li>
<li>If neither function nor object with "navigation" key are exported from the target module, then initializer tries to search for "navigation" in jQuery prototype. If found, initializer applies it as $(element). navigation (config). 

For example:
<pre>
$.fn.navigation = function() { ... };
return;
</pre>
</li>

<li>If neither of the previous is true, the component is executed with no further processing. This component does not require neither config nor element. The following is the recommended way to declare such a component: 
<pre>
&lt;script type=&quot;text/x-magento-init&quot;&gt;
{
  &quot;*&quot;: {
    &quot;component/to/path&quot;:{}
  }
}
&lt;/script&gt;
</pre>
</li>
<p class="q">Do we just say to use the second way of initialization?</p>
</ul>

<h3 id="init_script">Initialization using <code>&lt;script&gt;</code></h3>
In this approach you do not need to have explicit access to the HTML node you want to initialize component on. Also, this type of init declaration lets us initialize components that do not require HTNL element to bind to using "*" config node.
<p class="q">Need explanation here</p>

<pre>

something.phtml
&lt;script type=&quot;text/x-magento-init&quot;&gt;
    &quot;#main-container&quot;: {
        &quot;navigation&quot;: &lt;?php echo $block-&gt;getNavigationConfig(); ?&gt;,
        &quot;accordion&quot;: &lt;?php echo $block-&gt;getNavigationAccordionConfig(); ?&gt;
    },
    &quot;*&quot;: {
        &quot;pageCache&quot;: &lt;?php echo $block-&gt;getPageCacheConfig(); ?&gt;
    }
&lt;/script&gt;

</pre>

<h2>Widget initialization in JS</h2>

To initialize a widget JS file, use notation similar to the following: (the accordion widget is initilized as illustration):

<pre>
$("#element").accordion();
</pre>

To initialize a widget with options, use notation similar to the following:

<pre>
$("#element").accordion({
    header : "#title-1"
    content : "#content-1",
    trigger : "#trigger-1,
    ajaxUrlElement: "a"
 });
</pre>




