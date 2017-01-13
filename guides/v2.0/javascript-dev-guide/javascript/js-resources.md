---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Configure JavaScript resources
menu_title: Configure JavaScript resources
menu_order: 1
version: 2.0
github_link: javascript-dev-guide/javascript/js-resources.md
redirect_from:
  - guides/v2.0/config-guide/config/js-resources.html
  - guides/v1.0/config-guide/config/js-resources.html
---

## Overview {#m2devgde-js-resources-intro}

JavaScript is important for making your storefront dynamic and interactive. However, including JavaScript into the page headers might slow down uploading of the pages. To address this problem, we exclude JavaScript from the page headers and we added the ability to use the <a href="http://requirejs.org" target="_blank">RequireJS library</a>.

RequireJS improves the perceived page load time because it allows JavaScript to load in the background; in particular, because it enables asynchronous or "lazy" JavaScript loading.

## Explore and configure JavaScript resources {#m2devgde-js-resources-configuring}

You must specify and configure all JavaScript resources used in modules and themes that you added or customized. To ensure correct work of themes and modules, do not edit the JavaScript resources belonging to other modules and themes.

JavaScript resources can be added on the following levels:

*	Module level (`<module_dir>/view/<areaname>/web`). If the module is enabled, resources added here are available in other modules and themes. 
*	Theme level, for a particular module (`<theme_dir>/<VendorName>_<ModuleName>/web`). Resources added here are available for [inheriting]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) themes.
*	Theme level  (`<theme_dir>/web`). Resources added here are available for [inheriting]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) themes.


We recommend specifying JavaScript resources in the templates rather than in the layout updates to ensure processing of the resources in body of a page.

JavaScript resources generated in Magento have IDs of two types:  a RequireJS ID and a Magento modular ID. For example JavaScript resources for configurable product will have the following IDs:

{%highlight js%}
// Regular ID
require(["jquery"], function($){
    // ...
});

// Modular ID (Magento module: Magento_ConfigurableProduct/js/configurable)
require(["Magento_ConfigurableProduct/js/configurable"], function(Configurable){
    // ...
});

{%endhighlight%}


### Specify dependencies between JavaScript resources {#m2devgde-js-resources-dependencies}

Specifying all dependencies between JavaScript resources might be time consuming. To facilitate this task we implemented ability to build the dependencies via plugin: thus, you will need to specify only dependency of your resource on a plugin, and the latter will pick up all necessary dependencies on other resources automatically.

When creating a new resource, you can select a plugin, on which your resources are to depend, from the [ready-to-go plugin library]({{site.mage2000url}}lib/web/mage) or write a plugin by yourself. Observe the following rules when declaring a plugin:
<ol>
<li>To declare a plugin, use the <code>define</code> function:</li>
<pre>define(["jquery"],&nbsp;function($){
&nbsp;&nbsp;//&nbsp;plugin&nbsp;code
&nbsp;&nbsp;//&nbsp;where&nbsp;$&nbsp;==&nbsp;"jquery"
});&nbsp;
</pre>

<li>If you need a plugin to be used in various environments, specify it as follows:</li>

<pre>(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  // plugin code
  // where $ == jQuery
}));
</pre>

<li>To build a dependency on the third-party plugin, specify a <a href="http://requirejs.org/docs/api.html#config-shim" target="_blank">shim</a> in the following configuration files:</li>
<ul>
<li><code>requirejs-config.js</code></li>

<pre>var&nbsp;config&nbsp;=&nbsp;{
&nbsp;&nbsp;"shim":&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;"3-rd-party-plugin":&nbsp;["jquery"]
&nbsp;&nbsp;}
};
</pre>

<li><code>{third-party-plugin}.js</code></li>

<pre>!(function($){
&nbsp;&nbsp;//&nbsp;plugin&nbsp;code
&nbsp;&nbsp;//&nbsp;where&nbsp;$&nbsp;==&nbsp;jQuery
})(jQuery);
</pre>
</ul>
</ol>

## Configure the RequireJS library {#m2devgde-js-resources-configrequirejs}

The <a href="http://requirejs.org" target="_blank">RequireJS library</a> loads JavaScript files and modules. To make this library available in your Magento instance, specify this library along with specific RequireJS configurations in `layout.xml` as follows:

<script src="https://gist.github.com/xcomSteveJohnson/5ec88ab806a29c85f1cf.js"></script>

## Specify JavaScript resources mapping {#m2devgde-js-resources-mapping}

To work with the RequireJS library, specify the mapping of JavaScript resources; that is, assign the aliases to resources. Use `requirejs-config.js` to create the mapping.

To make your configurations more precise and specific for different modules/themes, you can identify mapping in `requirejs-config.js` file at several <a href="#m2devgde-js-resources-configuring">levels</a> depending on your needs. All configurations will be collected and executed in the following order:

<ol>
<li>Library configurations.</li>

<li>Configurations at the module level.</li>

  <div class="bs-callout bs-callout-warning" id="warning">
    <p>Dependencies between the modules or themes are considered as well.</p>
  </div>

<li>Configurations at the theme module level for the ancestor themes.</li>

<li>Configurations at the theme module level for a current theme.</li>

<li>Configurations at the theme level for the ancestor themes.</li>

<li>Configurations at the theme level for the current theme.</li>
</ol>

In addition to standard aliases of RequireJS library, Magento uses module notations or relative paths. You must specify in RequireJS configurations the relative paths to JavaScript resources belonging to the module and the theme module levels. For instance, specifying the path in `app/code/Magento/Catalog/view/frontend/requirejs-config.js` will look as follows:

<pre>var config = {
    paths: {
        // configuration for resource 'app/code/Magento/Catalog/view/frontend/product/product.js'
        "product": "./product/product"
    }
};
</pre>

In the example above, `./product/product` is relative path to JavaScript resources of `Catalog` module.

You should not specify `baseUrl` parameter in the configurations files, since it is generated automatically.

## Adjust RequireJS {#m2devgde-js-resources-adjusting}

You can adjust RequireJS for your needs in two ways:

*	Fallback mechanism: general rules on customizing URLs or paths for static view files apply to JavaScript, because JavaScript files are static view files
*	Configuration files as described earlier in <a href="#m2devgde-js-resources-configrequirejs">Configure the RequireJS library</a>
