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
<li>Search for <code>mage-data-init</code> calls, find the widget name.
</li>
<li>Click the ...link in the page head</li>
</ol>