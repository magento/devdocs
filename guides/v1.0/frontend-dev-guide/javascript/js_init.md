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

In the Magento 2 application, there are two ways to initialize a JavaScript component on a DOM element: using the `data-mage-init` attribute and using the `<script>` tag.


This topic describes both approaches in details, and talks about when each of them is appropriate.

<h2 id="data_mage_init">Initialization using <code>data-mage-init</code></h2>

To initialize a JavaScript component in a .phtml template, add the following code:


<pre>
&lt;!-- Initializing a script for the &lt;nav/&gt; element--&gt;

&lt;nav data-mage-init=&quot;{ &quot;&lt;component_name&gt;&quot;: {..<component configuration/options>.} }&quot;&gt;&lt;/nav&gt;
</pre>

The script is called only for the specific element for which it is initialized. It is not automatically initialized for other elements of this type on the page. 

<h3 id >How the JS initialization is processed</h3>

On DOM ready, the `data-mage-init` attribute is parsed to extract components names and configuration to be applied to the node. 
Depending on the type of the JS component initialized, there are three behavior patterns:

<p class="q">if the following is up to date is being clarified by a SME</p>

<ul>

<li>If an object is returned, initializer tries to find "navigation" key if it's function, config and element will be passed to it.</li>
<li>If a function is returned, config and element are simply passed to it, as in above example.</li>
<li>if neither function nor object are exported from target module, initializer tries to search for "navigation" in jQuery prototype and if found, apply it as $(element).navigation(config).</li>
</ul>

<h2 id="init_script">Initialization using <code>&lt;script&gt;</code></h2>
In this approach you do not need to have explicit access to DOM node you want to initialize component on. Also, this type of init declaration lets us initialize components that do not require DOM element to bind to using "*" config node.
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

<p class="q"> Is it appropriate to have initialization in JS files and initialization in templates in one file? </p>



