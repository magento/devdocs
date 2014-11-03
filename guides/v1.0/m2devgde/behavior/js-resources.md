---
layout: howtom2devgde_chapters
title: JavaScript resources  
---

<h1 id="m2devgde-js-resources">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/behavior/js-resources.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-js-resources-intro">Overview</h2>

JavaScript (JS) is important for making your storefront dynamic and interactive. However, including JS into the page headers may slow down uploading of the pages. To address this problem, we excluded JS from the page headers. Moreover, we added ability to use <a href="http://requirejs.org" target="_blank">RequireJS library</a>. RequireJS speeds up loading of the pages (in particular, asynchronous loading is used) and facilitates specifying dependencies between JS resources in your store.

<h2 id="m2devgde-js-resources-configuring">Explore and configure JS resources</h2>

You must specify and configure all JS resources used in modules and themes that you added or customized. To ensure correct work of themes and modules, do not edit the JS resources belonging to other modules and themes.

JS resources can be specified at several levels:

*	at the library level for all libraries in Magento code base (`lib/web`)
*	at the module level for all libraries within a module (`app/code/[Vendor name]/[Module name]/view/{area}/web`)
*	at the theme module level for all libraries within a theme (`app/design/{area}/[Vendor name]/{theme}/[Vendor name]_[Module name]/web`)
*	at the theme level for all libraries within a theme  (`app/design/{area}/[Vendor name]/{theme}/web`). We do not recommend using this level to specify JS resources.

We recommend specifying JS resources in the templates rather than in the layout updates to ensure processing of the resources in body of a page.

JS resources generated in Magento have IDs of two types:  RequireJS ID and Magento modular ID. For example JS resources for configurable product will have the following IDs:

<blockquote><pre>// Regular ID
require(["jquery"], function($){
    // ...
});
 
// Modular ID (Magento module: Magento_ConfigurableProduct, resource: js/configurable)
require(["magento!Magento_ConfigurableProduct::js/configurable"], function(Configurable){
    // ...
});
</pre></blockquote>

The modular ID has `magento!` prefix and is used for loading the JS modules. ID Normalizer plugin converts the modular IDs into the file paths, which are used by RequireJS to load the JS modules.

<h3 id="m2devgde-js-resources-dependencies">Specifying Dependencies between JS Resources</h3>
Specifying all dependencies between JS resources might be time consuming. To facilitate this task we implemented ability to build the dependencies via plugin: thus, you will need to specify only dependency of your resource on a plugin, and the latter will pick up all necessary dependencies on other resources automatically.

When creating a new resource, you can select a plugin, on which your resources are to depend, from the <a href="https://github.com/magento/magento2/tree/master/lib/web/mage" target="_blank">ready-to-go plugin library</a> or write a plugin by yourself. Observe the following rules, when declaring a plugin:
<ol>
<li>To declare a plugin, use <code>define</code> function:</li>
<blockquote><pre>define([&ldquo;jquery&rdquo;],&nbsp;function($){
&nbsp;&nbsp;//&nbsp;plugin&nbsp;code
&nbsp;&nbsp;//&nbsp;where&nbsp;$&nbsp;==&nbsp;&ldquo;jquery&rdquo;
})(jQuery);&nbsp; 
</pre></blockquote>

<li>If you need a plugin to be used in various environments, specify it as follows:</li>

<blockquote><pre>(function&nbsp;(factory)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(typeof&nbsp;define&nbsp;===&nbsp;'function'&nbsp;&amp;&amp;&nbsp;define.amd)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;AMD.&nbsp;Register&nbsp;as&nbsp;an&nbsp;anonymous&nbsp;module.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;define(['jquery'],&nbsp;factory);
&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Browser&nbsp;globals
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;factory(jQuery);
&nbsp;&nbsp;&nbsp;&nbsp;}
}(function&nbsp;($)&nbsp;{
&nbsp;&nbsp;//&nbsp;plugin&nbsp;code
&nbsp;&nbsp;//&nbsp;where&nbsp;$&nbsp;==&nbsp;jQuery
}));
</pre></blockquote>

<li>To build a dependency on the third-party plugin, specify a <a href="http://requirejs.org/docs/api.html#config-shim" target="_blank">shim</a> in the following configuration files:</li>
<ul>
<li><code>requirejs-config.js</code></li>

<blockquote><pre>var&nbsp;config&nbsp;=&nbsp;{
&nbsp;&nbsp;&ldquo;shim&rdquo;:&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;3-rd-party-plugin&rdquo;:&nbsp;[&ldquo;jquery&rdquo;]
&nbsp;&nbsp;}
};
</pre></blockquote>

<li><code>{third-party-plugin}.js</code></li>

<blockquote><pre>!(function($){
&nbsp;&nbsp;//&nbsp;plugin&nbsp;code
&nbsp;&nbsp;//&nbsp;where&nbsp;$&nbsp;==&nbsp;jQuery
})(jQuery);
</pre></blockquote>
</ul>
</ol>
<h2 id="m2devgde-js-resources-configrequirejs">Configuring RequireJS Library</h2>

<a href="http://requirejs.org" target="_blank">RequireJS library</a> serves to load the JS files and modules. To make this library available for Magento instance, you will need to specify this library along with specific RequireJS configurations in `layout.xml` file:

<blockquote><pre>&lt;referenceBlock&nbsp;name=&quot;head&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Theme\Block\Html\Head\Script&quot;&nbsp;name=&quot;requirejs&quot;&nbsp;before=&quot;-&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;RequireJs&nbsp;library&nbsp;enabled&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;file&quot;&nbsp;xsi:type=&quot;string&quot;&gt;requirejs/require.js&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Special&nbsp;block&nbsp;with&nbsp;necessary&nbsp;config&nbsp;is&nbsp;added&nbsp;on&nbsp;the&nbsp;page&nbsp;--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\RequireJs\Block\Html\Head\Config&quot;&nbsp;name=&quot;requirejs-config&quot;&nbsp;after=&quot;requirejs&quot;/&gt;
&lt;/referenceBlock&gt;
</pre></blockquote>

<h2 id="m2devgde-js-resources-mapping">Specifying JS Resources Mapping</h2>

To work with RequireJS library, you will need to specify the mapping of JS resources, that is, to assign the aliases to resources. Use `requires-config.js` file to create the mapping.

To make your configurations more precise and specific for different modules/themes, you can identify mapping in `requires-config.js` file at several <a href="#m2devgde-js-resources-configuring">levels</a> depending on your needs. All configurations will be collected and executed in the following order:
<ol>
<li>Library configurations.</li>

<li>Configurations at the module level.</li>

  <div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
    <p>Dependencies between the modules/themes will be considered as well.</p></span>
  </div>
  
<li>Configurations at the theme module level for the ancestor themes.</li>

<li>Configurations at the theme module level for a current theme.</li>

<li>Configurations at the theme level for the ancestor themes.</li>

<li>Configurations at the theme level for a current theme.</li>
</ol>

In addition to standard aliases of RequireJS library, Magento uses module notations or relative paths. You will have to specify in RequireJS configurations the relative paths to JS resources belonging to the module and the theme module levels. For instance, specifying the path in `app/code/Magento/Catalog/view/frontend/requirejs-config.js` will look as follows:

<blockquote><pre>var config = {
    paths: {
        // configuration for resource 'app/code/Magento/Catalog/view/frontend/product/product.js'
        "product": "./product/product"
    }
};
</pre></blockquote>

In the example above, `./product/product` is relative path to JS resources of `Catalog` module.

You should not specify `baseUrl` parameter in the configurations files, since it is generated automatically.

<h2 id="m2devgde-js-resources-adjusting">Adjusting RequireJS</h2>

You can adjust RequireJS for your needs in two ways:

*	Via fallback mechanism: general rules on customizing URLs/paths for static view files apply to JS, since JS files are static view files
*	Via configuration files as described above in <a href="#m2devgde-js-resources-configrequirejs">Configuring RequireJS Library</a> section

