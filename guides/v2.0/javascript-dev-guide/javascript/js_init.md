---
layout: default
group: jsdg
subgroup: 1_Javascript
title: JavaScript initialization
menu_title: JavaScript initialization
menu_order: 2
version: 2.0
github_link: javascript-dev-guide/javascript/js_init.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/js_init.html
  - guides/v1.0/frontend-dev-guide/javascript/js_init.html
---

<h2 id="js_init_overview">Overview</h2>

This topic talks about how to initialize a JavaScript component in the Magento 2 application. 
It covers initializing JavaScript components in a `.phtml` template and jQuery widget initialization in a JS script. We strongly recommend that you use the described approaches and do not add inline JavaScript.

Do not add JavaScript inline. Instead use the approaches described further.

<h2 id="init_phtml">Initialize a JS component in a PHTML template</h2>
In Magento 2, there are two ways to initialize a JS component in a `.phtml` template: using the `data-mage-init` attribute and using the `<script>` tag. Both ways are described in the following sections.

<h3 id="data_mage_init">Initialization using <code>data-mage-init</code></h3>

Use the <code>data-mage-init</code> attribute to initialize a JS component on a certain HTML element. The following code sample is an illustration. Here a JS component is initialized on the `<nav/>` element:
<pre>
&lt;nav data-mage-init='{ &quot;&lt;component_name&gt;&quot;: {...} }'&gt;&lt;/nav&gt;
</pre>

When initialized on a certain element, the script is called only for this particular element. It is not automatically initialized for other elements of this type on the page. 

<h4 id="init_process">How the JS initialization using <code>data-mage-init</code> is processed</h4>

On DOM ready, the `data-mage-init` attribute is parsed to extract components' names and configuration to be applied to the element. 
Depending on the type of the JS component initialized, processing is performed as follows:
<ul>

<li>If an object is returned, the initializer tries to find the <code>&lt;component_name&gt;</code> key. If the corresponding value is a function, the initializer passes the <code>config</code> and <code>element</code> values to this function.

For example:
<pre>
return {
    '&lt;component_name&gt;': function(config, element) { ... }
};
</pre>
</li>
<li>If a function is returned, the initializer passes the <code>config</code> and <code>element</code> values to this function. 

For example:

<pre>
return function(config, element) { ... };
</pre>

</li>
<li>If neither a function nor an object with the <code>"&lt;component_name&gt;"</code> key are returned, then the initializer tries to search for <code>"&lt;component_name&gt;"</code> in the jQuery prototype. If found, the initializer applies it as <code>$(element).&lt;component_name&gt;(config)</code>. 

For example:
<pre>
$.fn.&lt;component_name&gt; = function() { ... };
return;
</pre>
</li>

<li>If none of the previous cases is true, the component is executed with no further processing. 
Such a component does not require either <code>config</code> or <code>element</code>. The recommended way to declare such components is <a href="#init_script">using the &lt;script&gt; tag</a>.</li>
</ul>

<h3 id="init_script">Initialization using <code>&lt;script&gt;</code></h3>
To initialize a JS component on a HTML element without direct access to the element or with no relation to a certain element, use the <code>&lt;script type=&quot;text/x-magento-init&quot;&gt;</code> tag. An illustration follows:

<pre>
&lt;script type=&quot;text/x-magento-init&quot;&gt;
    // components initialized on the element defined by selector
	&quot;&lt;element_selector&gt;&quot;: {
		&quot;&lt;js_component1&gt;&quot;: ...,
		&quot;&lt;js_component2&gt;&quot;: ...
    },
    // components initialized without binding to an element
    &quot;*&quot;: {
        &quot;&lt;js_component3&gt;&quot;: ...
    }
&lt;/script&gt;
</pre>

Where:
<ul>
<li><code>&lt;element_selector&gt;</code> is a selector for the element on which the following JS components are initialized.</li>
<li><code>&lt;js_component1&gt;</code> and <code>&lt;js_component2&gt;</code> are the JS components being initialized on the element with the selector specified as <code>&lt;element_selector&gt;</code>.</li>
<li><code>&lt;js_component3&gt;</code> is the JS component initialized with no binding to an element.</li> 
</ul>

The following is an illustration of widget initialization using <code>&lt;script&gt;</code>. Here the accordion and navigation widgets are initialized on the element with the `#main-container` selector, and the `pageCache` script is initialized with no binding to any element.

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

To initialize a widget in JS code, use a notation similar to the following (the <a href="{{page.baseurl}}frontend-dev-guide/javascript/widget_accordion.html" target="_blank">accordion</a> widget is initialized on the `#main-container` element as illustration):

<pre>
$("#main-container").accordion();
</pre>

To initialize a widget with options, use notation similar to the following:

<pre>
$("#main-container").accordion({
    header : "#title-1",
    content : "#content-1",
    trigger : "#trigger-1,
    ajaxUrlElement: "a"
 });
</pre>


