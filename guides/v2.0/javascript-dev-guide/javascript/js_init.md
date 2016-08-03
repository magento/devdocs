---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Calling and initializing JavaScript
menu_title: Calling and initializing JavaScript
menu_order: 2
version: 2.0
github_link: javascript-dev-guide/javascript/js_init.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/js_init.html
  - guides/v1.0/frontend-dev-guide/javascript/js_init.html
---

<h2 id="js_init_overview">Overview</h2>

This topic talks about how to insert a [JavaScript component]({{site.gdeurl}}javascript-dev-guide/bk-javascript-dev-guide.html#js_terms) in `.phtml` page templates and `.js` files in Magento 2. 

It covers declarative notation, used when initialization is required, and imperative notation, used in other cases. 

We strongly recommend that you use the described approaches and do not add inline JavaScript. 


**Contents**

* TOC
{:toc}

## Insert a JS component in a PHTML template {#init_phtml}
Depending on your task, you might want to use declarative or imperative notation. Both ways are described in the following sections.


### Declarative notation

Using the declarative notation to insert a JS component allows preparing all the configuration on the backend side and outputting it to the page source using standard tools. You should use declarative notation if your JavaScript component requires initialization.

In Magento 2 there are two ways of declarative notation:

 - using the `data-mage-init` attribute
 - using the `<scrtipt type="text/x-magento-init" />` tag

Both ways are described further.

#### Declarative notation using the `data-mage-init` attribute {#data_mage_init}

Use the <code>data-mage-init</code> attribute to insert a JS component in a certain HTML element. The following code sample is an illustration. Here a JS component is inserted in the `<nav/>` element:
<pre>
&lt;nav data-mage-init='{ &quot;&lt;component_name&gt;&quot;: {...} }'&gt;&lt;/nav&gt;
</pre>

When inserted in a certain element, the script is called only for this particular element. It is not automatically called for other elements of this type on the page. 

##### How `data-mage-init` is processed {#init_process}

On DOM ready, the `data-mage-init` attribute is parsed to extract components' names and configuration to be applied to the element. 
Depending on the type of the inserted JS component, processing is performed as follows:
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

#### Declarative notation using the `<script type="text/x-magento-init" />` tag {decl_tag}

To call a JS component on a HTML element without direct access to the element or with no relation to a certain element, use the `<script type="text/x-magento-init">` tag and attribute. The syntax is following:

{%highlight html%}
<script type="text/x-magento-init">
{
    // components initialized on the element defined by selector
	"<element_selector>": {
		"<js_component1>": ...,
		"<js_component2>": ...
    },
    // components initialized without binding to an element
    "*": {
        "<js_component3>": ...
    }
}
</script>
{%endhighlight%}

Where:
<ul>
<li><code>&lt;element_selector&gt;</code> is a <a https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">selector</a> (in terms of querySelectorAll) for the element on which the following JS components are called.</li>
<li><code>&lt;js_component1&gt;</code> and <code>&lt;js_component2&gt;</code> are the JS components being initialized on the element with the selector specified as <code>&lt;element_selector&gt;</code>.</li>
<li><code>&lt;js_component3&gt;</code> is the JS component called with no binding to an element.</li> 
</ul>

The following is a working code sample of a widget call using `<script>`. Here the `accordion` and `navigation` widgets are added to the element with the `#main-container` selector, and the `pageCache` script is inserted with no binding to any element.

{%highlight html%}
<script type="text/x-magento-init">
{
    "#main-container": {
        "navigation": <?php echo $block->getNavigationConfig(); ?>,
        "accordion": <?php echo $block->getNavigationAccordionConfig(); ?>
    },
    "*": {
        "pageCache": <?php echo $block->getPageCacheConfig(); ?>
    }
}
</script>
{%endhighlight%}

### Imperative notation {#init_script}

Imperative notation allows using raw JavaScript code on the pages and executing particular business logic. The notation using the `<script>` tag, without the `type="text/x-magento-init` attribute, is the imperative notation. The syntax is following:

{%highlight html%}
<script>
require([
    'jquery',
    'accordion'  // the alias for "mage/accordion"
], function ($) {
    $(function () { // to ensure that code evaluates on page load
        $('[data-role=example]')  // we expect that page contains the <tag data-role="example">..</tag> markup
            .accordion({ // now we can use "accordion" as jQuery plugin
                header:  '[data-role=header]',
                content: '[data-role=content]',
                trigger: '[data-role=trigger]',
                ajaxUrlElement: "a"
            });
    });
});
</script>
{%endhighlight%}


## Calling JS components requiring initialization in JS files {#js_widget_init}

To call a widget in JS code, use a notation similar to the following ([accordion]({{site.gdeurl}}frontend-dev-guide/javascript/widget_accordion.html) widget is intiialized on the `[data-role=example]` element as illustration):

{%highlight js%}

$('[data-role=example]').accordion();

{%endhighlight%}

To initialize a widget with options, use notation similar to the following:

{%highlight js%}

$(function () { // to ensure that code evaluates on page load
    $('[data-role=example]')  // we expect that page contains markup <tag data-role="example">..</tag>
        .accordion({ // now we can use "accordion" as jQuery plugin
            header:  '[data-role=header]',
	    content: '[data-role=content]',
	    trigger: '[data-role=trigger]',
            ajaxUrlElement: 'a'
        });
});

{% endhighlight %}

In a similar way, you can initialize any JS component that a returns callback function accepting a `config` object and `element` (a DOM node).

For example:

{%highlight js%}
define ([
    'jquery',
    'mage/gallery/gallery'
], function ($, Gallery) {

    $(function () { // to ensure that code evaluates on page load
        $('[data-role=example]')  // we expect that page contains markup <tag data-role="example">..</tag>
            .each(function (index, element) {
                Gallery({
                    options:  {},
                    data: [{
                        img: 'https://c2.staticflickr.com/8/7077/27935031965_facd03b4cb_b_d.jpg'
                    }],
                    fullscreen: {}
                }, element);  // 'element' is simgle DOM node. 
            });
    });
});
{%endhighlight%}

