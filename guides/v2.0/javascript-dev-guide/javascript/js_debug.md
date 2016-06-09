---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Locate JavaScript components
menu_title: Locate JavaScript components
menu_order: 4
version: 2.0
github_link: javascript-dev-guide/javascript/js_debug.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/js_debug.html
  - guides/v1.0/frontend-dev-guide/javascript/js_debug.html
---

<h2 id="js_debug_overview">Overview</h2>

This topic discusses how to define which JavaScript components and widgets are used on a particular Magento store page.


<h2 id="locate_widget">Locate JS components: walkthrough</h2>

To locate scripts used for a certain element:

<ol>
<li>Open the store page in a browser, and locate the element's <code>class</code> or <code>id</code> using browser debugging tools, such as Firebug (Firefox) or Inspect Element (Chrome).</li>

<li>Select to view the page source.</li>
<li>Find the corresponding element in the page source and see if there are <code>data-mage-init</code> or <code>&lt;script type=&quot;text/x-magento-init&quot;&gt;</code> calls on this element, its children or parents. The calls contain the names of the scripts, as described in <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html#init_phtml" target="_blank">JavaScript initialization</a>. 
</li>
<li>
To find the source file of the used script:
<ol>
<li>In the <code>&lt;head&gt;&lt;/head&gt;</code> section of the page source, click link to <code>requirejs-config.js</code> file. The file contains the Magento RequireJS configuration, collected from all modules of the current theme.
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
<p>Alternatively, you can open the <code>requirejs-config.js</code> file from the file system: <code>pub/static/_requirejs/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;/requirejs-config.js</code></p></span>
</div>
</li>
<li>In the <code>var config = {...}</code> section of <code>requirejs-config.js</code>, find the required script name, and view the path to its source file. This path is relative to certain directories, depending on whether it contains module reference:
<ul>
<li>If the module context is not specified, the path is relative to <code>&lt;theme_dir&gt;/web</code> (current theme). If the file is not found there, according to the <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static">assets fallback</a>, it is searched for in parent theme <code>web</code> directory, and then <code>lib/web</code>(library) directory.</li>

<li>If the module context is specified, the path is relative to  <code>&lt;theme_dir&gt;/&lt;Namespace&gt;_&lt;Module&gt;/web</code> (current theme module). If the file is not found there, according to the assets fallback, it is searched for in the same location in the parent theme files, and then in the <code>&lt;module_dir&gt;</code> (module) directory.</li>

</ul>
</li>
</ol>
</ol>


<h2>Locate JS component: example</h2>

As we discussed in the preceding section, you use browser debugging tools to define which JavaScript component or widget is used for an element. An example follows.
To find what JS components are used for displaying the main navigation menu in the Luma theme: 

<ol>
<li>Using the Inspect Element feature of the browser, define that the menu section <code>id</code> is <code>store.menu</code>:

<p>
<img src="{{site.baseurl}}common/images/fdg_js_debug1.png" alt="Using the Inspect Element define the id">
</p>


</li>
<br>
<li>Search the page source for <code>store.menu</code> (illustration follows): 
<p>
<img src="{{site.baseurl}}common/images/fdg_js_debug2.png" alt="Search the page source for the store.menu string">
</p>

We can see that there's a <code>data-mage-init</code> attribute in the scope of the <code>&lt;div id= &quot;store.menu&quot;&gt;&lt;/div&gt;</code> 

<pre>
data-mage-init='{"menu":{"responsive":true, "expanded":true, "position":{"my":"left top","at":"left bottom"}}}'
</pre>

According to the JS components initialization notation, this means that this code calls <code>menu.js</code>. 
</li>
<li>To find the source file of <code>menu.js</code></li>, let's open <code>requirejs-config.js</code> by clicking the link to it in the <head></head> section of the page source. The path to <code>menu.js</code> is specified there as follows:
<pre>
"menu":                   "mage/menu",
</pre>

This means we should check for <code>mage/menu.js</code> the following locations, in the following priority order (according to the <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html#theme-inherit-static">assets fallback rules</a>):
<ol>
<li><code>&lt;Magento_Luma_theme_dir&gt;/web/js</code> (current theme JS files)</li>
<li><code>&lt;Magento_Blank_theme_dir&gt;/web/js</code> (parent theme JS files)</li>
<li><code>lib/web</code> (library files)</li>
</ol>
There is no <code>mage/menu.js</code> in the current theme or parent theme JS files, so the source file for menu component used for the main navigation menu is <code>lib/web/mage/menu.js</code>
