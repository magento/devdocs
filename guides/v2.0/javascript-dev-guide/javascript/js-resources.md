---
layout: default
group: jsdg
subgroup: 1_Javascript
title: JavaScript resources in Magento
menu_title: JavaScript resources in Magento
menu_order: 5
version: 2.0
github_link: javascript-dev-guide/javascript/js-resources.md
redirect_from:
  - guides/v2.0/config-guide/config/js-resources.html
  - guides/v1.0/config-guide/config/js-resources.html
---

## Overview {#m2devgde-js-resources-intro}

This topic describes the general concepts of how work with JavaScript components is organized in Magento. 
Including JavaScript into the page headers might slow down uploading of the pages. To address this problem, we exclude JavaScript from the page headers and we added the ability to use the <a href="http://requirejs.org" target="_blank">RequireJS library</a>.

RequireJS improves the perceived page load time because it allows JavaScript to load in the background; in particular, because it enables asynchronous JavaScript loading.

## Explore JavaScript resources {#m2devgde-js-resources-configuring}

### JS resources location 

In Magento out of the box, you can find the JS components on the following levels:

*   Library level (`lib/web`). 
*	Module level (`<module_dir>/view/<areaname>/web`). If the module is enabled, resources added here are available in other modules and themes. 
*	Theme level, for a particular module (`<theme_dir>/<VendorName>_<ModuleName>/web`). Resources added here are available for [inheriting]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) themes.
*	Theme level  (`<theme_dir>/web`). Resources added here are available for [inheriting]({{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html) themes.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Library level can only contain core Magento resources. Do not put custom JS files in `lib/web` directory.
</div>


### Specifying JS 
We recommend specifying JavaScript resources in the templates rather than in the layout updates to ensure processing of the resources in body of a page.

## Accessing JS resources

JS resources are accessed using relative paths.

Examples:

Example 1:
1. File actual location:
    app/code/Magento/ConfigurableProduct/view/frontend/web/js/configurable.js
File published to pub/static:
    pub/static/frontend/Magento/<theme>/<locale>/Magento_Configurable/js/configurable.js

Called in script:

{%highlight js%}
require(["Magento_ConfigurableProduct/js/configurable"], function(Configurable){
   }); 

{%endhighlight%}


{% collapsible Example 2: %}
1. File actual location:
    app/code/design/frontend/Magento/blank/web/js/theme.js
File published to pub/static:
    pub/static/frontend/Magento/<theme>/<locale>/js/theme.js

Called in script:

{%highlight js%}
require(["js/theme.js"], function(){
   }); 

{%endhighlight%}

{% endcollapsible %}

<p class="q">need to improve example</p>

{% collapsible Example 3: %}
1. File actual location:
    lib/web/jquery.js
File published to pub/static:
    pub/static/<area>/Magento/<theme>/<locale>/jquery.js

Called in script:

{%highlight js%}
require(["jquery"], function($){
   }); 

{%endhighlight%}

{% endcollapsible %}

These relative paths are also used in for [mapping and setting `path` in requirejs-config.js configuration files]({{page.baseurl}}javascript-dev-guide/javascript/requirejs_concept.md). 

## Dependencies between JavaScript resources {#m2devgde-js-resources-dependencies}

To build a dependency on the third-party plugin, specify a <a href="http://requirejs.org/docs/api.html#config-shim" target="_blank">shim</a> in the following configuration files:

 - `requirejs-config.js`

{%highlight js%}
var config = {
  "shim": {
    "3-rd-party-plugin": ["jquery"]
  }
};
{%endhighlight%}
    

 - `<third-party-plugin>.js`

{%highlight js%}
!(function($){
  // plugin code
  // where $ == jQuery
})(jQuery);
{%endhighlight%}


## Where the RequireJS library is included {#m2devgde-js-resources-configrequirejs}

To be available for the entire Magento instance, RequireJS library is included `layout.xml` as follows:

<script src="https://gist.github.com/xcomSteveJohnson/5ec88ab806a29c85f1cf.js"></script>

<p class="q">it seems to me everything is completely different now. need info for 2.0 and 2.1 </p>

## JavaScript resources mapping {#m2devgde-js-resources-mapping}

For the RequireJS library to work with JS resource, they should be mapped in the `requirejs-config.js` configuration files. 

To make the configurations more precise and specific for different modules/themes, `requirejs-config.js` files can be placed in different [locations]({{page.baseurl}}#m2devgde-js-resources-configuring) depending on your needs. 

All configurations are collected and executed in the following order:

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

The `baseUrl` parameter is not specified in the configurations files, since it is generated automatically.

<p class="q">The example requires corrections (smth about the relative path)</p>

