---
layout: default
group: javascript
subgroup: JQuery widget details
title: Loader widget
menu_order: 3
menu_title: Loader widget
github_link: frontend-dev-guide/javascript/widget_loader.md
---

<h2>Overview</h2>
The Loader widget blocks page content (all content or a part of it). Its intended use is blocking content when an Ajax request is being sent. But it can be initialized for non-Ajax tasks as well. 

The Loader widget source is <a href="{{site.mage2000url}}lib/web/mage/loader.js">lib/web/mage/loader.js</a>.

<h2 id="loader_init">Initialization</h2>
The loader widget is initialized as described in Widget initializaiton.
<!--ADDLINK-->

<h2 id="loader_options">Options</h2>

<ul>
<li><a href="#l_icon">icon</a></li>
<li><a href="#l_texts">texts</a></li>
<li><a href="#l_template">template</a></li>
</ul>

<h3 id="#l_icon">icon</h3>
The URL to the loader image. This image is displayed when the widget is active; that is, between the `ajaxSend` and `ajaxComplete` events. 

**Type**: String 

**Default value**: No image by default.

<h3 id="#l_texts">texts</h3>

An object that contains translations for loader text:
<ul>
<li><code>texts.loaderText</code>: 
The text that is displayed under the loader image. <br>

<b>Default value</b>: <i>'Please wait...'</i></li>

<li><code>texts.imgAlt</code>: The text that is set as the <code>alt</code> attribute value of the loader image. 
<b>Default value</b>: <i>'Loading...'</i></li>
</ul>

<h3 id="#l_template">template</h3>
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

<h2>Events</h2>
<h3>processStart</h3>
Display the loader. Can be triggered for/on any page element.

<h3>processStop</h3>
Hide the loader. Can be triggered for/on any page element.