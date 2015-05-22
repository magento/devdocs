---
layout: default
group: fedg
subgroup: Javascript
title: Magento Loader widget
menu_order: 3
menu_title: Magento Loader widget
github_link: frontend-dev-guide/javascript/widget_loader.md
---

<h2>Overview</h2>
The Loader widget blocks page content (all content or a  part of it). Its intended use is blocking content when an Ajax request is being sent, but it can be initialized for non-Ajax tasks as well. 

The Loader widget source is <a href="{{site.mage2000url}}lib/web/mage/loader.js">lib/web/mage/loader.js</a>.
<h2>Options</h2>

<ul>
<li><a href="#l_icon">icon</a></li>
<li><a href="#l_texts">texts</a></li>
<li><a href="#l_template">template</a></li>
</ul>

<h3 id="#l_icon">icon</h3>
The URL to the loader image. This image is displayed when the widget is active; that is, between the ajaxSend and ajaxComplete events. 

Type: String 

Default value: No image by default.

<h3 id="#l_texts">texts</h3>

An object that contains translations for loader text:
<ul>
<li>texts.loaderText: 
The text that is displayed under the loader image. 
Default value: 'Please wait...'</li>

<li>texts.imgAlt: The text that is set as the alt attribute value of the loader image. 
Default value: 'Loading...'</li>
</ul>

<h3 id="#l_template">template</h3>
HTML wrapper for output, or a DOM element selector. 
Default value: null
<p class="q">The following paragraphs talk about handlebars, but you mentioned that "we eliminate use of Handlebars.js library." How should we correct the description?</p>
This template will be set using handlebars.js templates. You must pass this option in using a reference to the handlebars template id:
<pre>
&lt;script id=&quot;loader-template&quot; type=&quot;text/x-handlebars-template&quot;&gt;
    template content
&lt;/script&gt;
  
&lt;body data-mage-init='{&quot;loader&quot;:{&quot;template&quot;:&quot;#loader-template&quot;}}'&gt;
</pre>

The default handlebars template for loaders will be:
<pre>
&lt;div class=&quot;loading-mask&quot; data-role=&quot;loader&quot;&gt;
     
&lt;div class=&quot;loader&quot;&gt;
        &lt;img alt=&quot;{{imgAlt}}&quot; src=&quot;{{icon}}&quot;&gt;
         
&lt;p&gt;{{loaderText}}&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
Each expression (i.e. {{ expression }} ) grabs the value from the options in the widget. These options are passed into the template in the _render() method.
{{imgAlt}} - references the texts.imgAlt option
{{icon}} - references the icon option
{{loaderTest}} - references the texts.loaderText option