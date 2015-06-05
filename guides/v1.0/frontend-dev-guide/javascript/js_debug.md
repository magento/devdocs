---
layout: default
group: fedg
subgroup: Javascript
title: Script debugging
menu_title: Script debugging
menu_order: 2
github_link: frontend-dev-guide/javascript/js_debug.md
---

<h2 id="js_debug_overview">Overview</h2>

This article talks about how to define which `.js` scripts are used for a certain HTML element on a store page.


<h2 id="locate_widget">Locate script</h2>

To locate scripts used for a certain element:
<p class="q">Can this approach be used for admin panel pages as well?</p>

<ol>
<li>Open the store page in a browser, and locate the element's class using browser debugging tools.</li>
<li>Select to view the page source.</li>
<li>Search for <code>data-mage-init</code> or <code>&lt;script type=&quot;text/x-magento-init&quot;&gt;occurencies</code>, which are used for JS scripts initialization. The names of the scripts are specified there. 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p>For information about JS scripts initializtion, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic</p></span>
<!--ADDLINK-->
</div>
</li>
<li>
To find out, where is the source file of the widget:
<ol>
<li>In the <code>&lt;head&gt;&lt;/head&gt;</code> section of the page source view, click the link to <code>requirejs-config.js</code> file. The file contains Magento RequireJS configuration collected from all modules of the current theme </li>
<li>In the <code>var config = {...}</code> section, find the required script name, and view the path to its source file. The path is relative to either:
<ul>
<li>If the module context is not specified: <code>lib/web</code> or <code>app/design/frontend/&lt;Vendor&gt;_&lt;theme&gt;/web</code> (the current theme) directories. According to the assets fallback, if there's a file in the current theme <code>web</code> directory, the system uses it. If it is not found there, the system uses the file from the <code><lib/web</code></li>
<li>If the module context is specified: app/code/<Namespace>/<Module> or <code>app/design/frontend/&lt;Vendor&gt;_&lt;theme&gt;/<Namespace>_<Module>/web. According to the assets fallback, if there's a file in the current theme module directory, the system uses it. If it is not found there, the system uses the file from the module directory.</li>

</ul>
</li>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p>Alternatively, you can open the <code>requirejs-config.js</code> file from the file system: <code>&lt;your_root&gt;/pub/static/_requirejs/frontend/&lt;Vendor&gt;/&lt;theme&gt;/&lt;locale&gt;/requirejs-config.js</code></p></span>
</div>

</ol>
</li>
</ol>

<h2>Locating widgets: example</h2>

Let's find out what widget is responsible for....
<p class="q">To wh?</p>