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

<h2 id="init_phtml">Initialize a JS component in a PHTML template</h2>
In Magento 2, there are two ways to initialize a JS component in a `.phtml` template: using the `data-mage-init` attribute and using the `<script>` tag. Both ways are described in the following sections.


<h3 id="data_mage_init">Initialization using <code>data-mage-init</code></h3>

To initialize a JS component on certain HTML element, you need to specify the <code>data-mage-init</code> attribute for this element. The following code sample is an illustration. Here a JS component is initialized on the `<nav/>` element:
<pre>
&lt;nav data-mage-init=&quot;{ &quot;&lt;component_name&gt;&quot;: {..<component configuration/options>.} }&quot;&gt;&lt;/nav&gt;
</pre>

When initialized on a certain element, the script is called only for this particular element. It is not automatically initialized for other elements of this type on the page. 

<h4 id="init_process">How the JS initialization using <code>data-mage-init</code> is processed</h4>

On DOM ready, the `data-mage-init` attribute is parsed to extract components' names and configuration to be applied to the element. 
Depending on the type of the JS component initialized, processing is performed as follows:
<ul>

<li>If an object is returned, initializer tries to find the "navigation" key. If the corresponding value is a function, intializer passes the `config` and `element` values to this function.</li>
<p class="q">1. Need clarification about "navigation" key, why in quotes?</p>
<p class="q">1. What if the corresponding value is not a function?</p>
For example:
<pre>
return {
    'navigation': function(config, element) { ... },
    'menu': function(config, element) { ... }
};
</pre>

<li>If a function is returned, intializer passes the <code>config</code> and <code>element</code> values to this function. 
/code
For example:

<pre>
return function(config, element) { ... };
</pre>

</li>
<li>If neither a function nor an object with "navigation" key are exported from the target module, then initializer tries to search for "navigation" in the jQuery prototype. If found, initializer applies it as <code>$(element).navigation(config)</code>. 
<p class="q">We call it a "module" unexpectedly. Is it understood for a user, or do we need to provide additional explanations?</p>

For example:
<pre>
$.fn.navigation = function() { ... };
return;
</pre>
</li>

<li>If none of the previous cases is true, the component is executed with no further processing. 
Such a component does not require neither <code>config</code> nor <code>element</code>, so the recommended way to declare it is the following:
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
<p class="q">Do we just advise to use the second way of initialization for the components which do not require any configuration and element?</p>
</ul>

<h3 id="init_script">Initialization using <code>&lt;script&gt;</code></h3>
To initialize a JS component on a HTML element without direct access to the element or with no relation to a certain element, use the <code>&lt;/script type=&quot;text/x-magento-init&quot;&gt;</code> tag. An illustration follows:

<pre>
&lt;script type=&quot;text/x-magento-init&quot;&gt;
    // components initialized on the element defined by selector
	&quot;&lt;element_selector&gt;&quot;: {
        &quot;&lt;js_component1&gt;&quot;: ...,
        &quot;&lt;js_component2&gt;&quot;: ...
    },
    // components initialized without binding to an element
    &quot;*&quot;: {
        &quot;js_component3&quot;: ...
    }
&lt;/script&gt;
</pre>

Where:
 
- `<element_selector>` is a selector for the element on which the following JS component(s) are initialized.
- `<js_component1>` and `<js_component2>` are the JS components being initialized on the element with the selector specified as `<element_selector>`.
- `<js_component3>` is the JS component initialized with no binding to an element.  

The following is an illustration of widget initialization using `<script>`. Here the accordion and navigation widgets are initialized on the element with the `main-container` selector, and the `pageCache` script is initialized with no binding to any element.

<pre>
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


<h2 id="widget_init">Widget initialization in JS</h2>

To initialize a widget in a JS code, use a notation similar to the following (the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/widget_accordion.html" target="_blank">accordion</a> widget is initialized on the `#main-container` element as illustration):

<pre>
$("#main-container").accordion();
</pre>

To initialize a widget with options, use notation similar to the following:

<pre>
$("#main-container").accordion({
    header : "#title-1"
    content : "#content-1",
    trigger : "#trigger-1,
    ajaxUrlElement: "a"
 });
</pre>


