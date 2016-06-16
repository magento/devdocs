---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Loader widget
menu_order: 8
menu_title: Loader widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_loader.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_loader.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_loader.html
---

<h2>Overview</h2>
The Loader widget blocks page content (all content or a part of it). Its intended use is blocking content when an Ajax request is being sent. But it can be initialized for non-Ajax tasks as well. 

The Loader widget source is <a href="{{site.mage2000url}}lib/web/mage/loader.js" target="_blank">lib/web/mage/loader.js</a>.

<h2 id="loader_init">Initialize the loader widget</h2>
The loader widget is initialized as described in <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a>.

<h2 id="loader_options">Options</h2>
The loader widget has the following options:
<ul>
<li><a href="#l_icon">icon</a></li>
<li><a href="#l_template">template</a></li>
<li><a href="#l_texts">texts</a></li>
</ul>

<h3 id="l_icon"><code>icon</code></h3>
The URL to the loader image. This image is displayed when the widget is active; that is, between the `ajaxSend` and `ajaxComplete` events. 

**Type**: String 

**Default value**: No image by default.


<h3 id="l_template"><code>template</code></h3>
HTML wrapper for the output, or a DOM element selector. 

**Default value**:
<pre>
'&lt;div class=&quot;loading-mask&quot; data-role=&quot;loader&quot;&gt;' +
    '&lt;div class=&quot;loader&quot;&gt;' +
         '&lt;img alt=&quot;&lt;%- data.texts.imgAlt %&gt;&quot; src=&quot;&lt;%- data.icon %&gt;&quot;&gt;' +
        '&lt;p&gt;&lt;%- data.texts.loaderText %&gt;&lt;/p&gt;' +
    '&lt;/div&gt;' +
'&lt;/div&gt;'
</pre>

<h3 id="l_texts"><code>texts</code></h3>

An object that contains translations for loader text:
<ul>
<li><code>texts.loaderText</code>: 
The text that is displayed under the loader image. <br>

<b>Default value</b>: <i>'Please wait...'</i></li>

<li><code>texts.imgAlt</code>: The text that is set as the <code>alt</code> attribute value of the loader image. <br>
<b>Default value</b>: <i>'Loading...'</i></li>
</ul>

<h2>Events</h2>
Loader is subscribed to the following events:
<ul>
<li><a href="#l_processStart">processStart</a></li>
<li><a href="#l_processStop">processStop</a></li>
<li><a href="#l_texts">texts</a></li>
</ul>

<h3 id="l_processStart"><code>processStart</code></h3>
Display the loader. Can be triggered on any page element.

<h3 id="l_processStop"><code>processStop</code></h3>
Hide the loader. Can be triggered on any page element.
