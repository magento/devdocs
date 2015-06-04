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

This article talks about how to define which widgets are used on a certain store page.

<p class="q">Are we talking about defining widgets only, or JS in general?</p>

<h2 id="locate_widget">Locate widgets</h2>

To locate widgets used on a certain page:
<p class="q">Can this approach be used for admin panel pages as well?</p>

<ol>
<li>Open the store page in a browser, and select to view the page source.</li>
<li>Search for <code>data-mage-init</code> occurencies, find the widget name. 
</li>
<li>
To find out, where is the source file of the widget:
<ol>
<li>In the <code>&lt;head&gt;&lt;/head&gt;</code> section of the page source view, click the link to <code>requirejs-config.js</code> file. The file contains ....</li>
<p class="q">What does it contain?</p>
<li>In the <code>var config = {...}</code> section find the required widget name, and view the path to its source file. The path is relative to either `lib/web` or  directories</li>

<p class="q">To what other directories?</p>

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