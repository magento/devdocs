---
layout: default
group: fedg
subgroup: Javascript
title: Locate JS components
menu_title: Locate JS components
menu_order: 2
github_link: frontend-dev-guide/javascript/js_debug.md
---

<h2 id="js_debug_overview">Overview</h2>

This article talks about how to define which JavaScript components (scripts) are used for a certain HTML element on a Magento store page.


<h2 id="locate_widget">Locate JS components: walkthrough</h2>

To locate scripts used for a certain element:

<ol>
<li>Open the store page in a browser, and locate the element's <code>class</code> or <code>id</code> using browser debugging tools.</li>

<li>Select to view the page source.</li>
<li>Find the corresponding element in the page source and see, if there are <code>data-mage-init</code> or <code>&lt;script type=&quot;text/x-magento-init&quot;&gt;</code> calls on this element, its children or parents. The calls contain the names of the scripts, as described in <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a>. 
</li>
<li>
To find out, where is the source file of the used script:
<ol>
<li>In the <code>&lt;head&gt;&lt;/head&gt;</code> section of the page source, click the link to <code>requirejs-config.js</code> file. The file contains Magento RequireJS configuration collected from all modules of the current theme.
<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
<p>Alternatively, you can open the <code>requirejs-config.js</code> file from the file system: <code>&lt;your_root&gt;/pub/static/_requirejs/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;/requirejs-config.js</code></p></span>
</div>
</li>
<li>In the <code>var config = {...}</code> section, find the required script name, and view the path to its source file. The path is relative to either:
<ul>
<li>If the module context is not specified: <code>lib/web</code>(library) or <code>app/design/frontend/&lt;Vendor&gt;_&lt;theme&gt;/web</code> (current theme) directories. 

According to the assets fallback, if there's a file in the current theme, the system uses it. If it is not found there, the system uses the file from the library.</li>
<li>If the module context is specified: <code>app/code/&lt;Namespace&gt;/&lt;Module&gt;</code> (module) or <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;Namespace&gt;_&lt;Module&gt;/web</code> (current theme module) directories. According to the assets fallback, if there's a file in the current theme module directory, the system uses it. If it is not found there, the system uses the file from the module directory.</li>

</ul>
</li>
</ol>
</ol>


<h2>Locating widgets: example</h2>

Let's find out what JS components are used for displaying the main navigation menu in the Luma theme. 

To do this, let's follow the steps described in the previous section:
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
<li>To find out where's the source file of <code>menu.js</code></li>, let's open <code>requirejs-config.js</code> by clicking the link to it in the <head></head> section of the page source. The path to <code>menu.js</code> is specified there as follows:
<pre>
"menu":                   "mage/menu",
</pre>

This means we should check for <code>mage/menu.js</code> the following locations, in the following priority order:
<ol>
<li><code>app/design/frontend/Magento/blank/web/js</code> (current theme JS files)</li>
<li><code>lib/web</code> (library files)</li>
</ol>
There is no <code>mage/menu.js</code> in the current theme JS files, so the source file for menu component used for the main navigation menu is <code>lib/web/mage/menu.js</code>