---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Loader widget
menu_order: 8
menu_title: Loader widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_loader.html
---

## Overview

The Loader {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} blocks page content (all content or a part of it). Its intended use is blocking content when an Ajax request is being sent. But it can be initialized for non-Ajax tasks as well. 

The Loader widget source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/loader.js" target="_blank">lib/web/mage/loader.js</a>.

## Initialize the loader widget   {#loader_init}

The loader widget is initialized as described in <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a>.

## Options   {#loader_options}

The loader widget has the following options:
<ul>
<li><a href="#l_icon">icon</a></li>
<li><a href="#l_template">template</a></li>
<li><a href="#l_texts">texts</a></li>
</ul>

### `icon`   {#l_icon}

The {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} to the loader image. This image is displayed when the widget is active; that is, between the `ajaxSend` and `ajaxComplete` events. 

**Type**: String 

**Default value**: No image by default.


### `template`   {#l_template}

{% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} wrapper for the output, or a DOM element selector. 

**Default value**:
<pre>
'&lt;div class=&quot;loading-mask&quot; data-role=&quot;loader&quot;&gt;' +
    '&lt;div class=&quot;loader&quot;&gt;' +
         '&lt;img alt=&quot;&lt;%- data.texts.imgAlt %&gt;&quot; src=&quot;&lt;%- data.icon %&gt;&quot;&gt;' +
        '&lt;p&gt;&lt;%- data.texts.loaderText %&gt;&lt;/p&gt;' +
    '&lt;/div&gt;' +
'&lt;/div&gt;'
</pre>

### `texts`   {#l_texts}


An object that contains translations for loader text:
<ul>
<li><code>texts.loaderText</code>: 
The text that is displayed under the loader image. <br>

<b>Default value</b>: <i>'Please wait...'</i></li>

<li><code>texts.imgAlt</code>: The text that is set as the <code>alt</code> attribute value of the loader image. <br>
<b>Default value</b>: <i>'Loading...'</i></li>
</ul>

## Events

Loader is subscribed to the following events:
<ul>
<li><a href="#l_processStart">processStart</a></li>
<li><a href="#l_processStop">processStop</a></li>
<li><a href="#l_texts">texts</a></li>
</ul>

### `processStart`   {#l_processStart}

Display the loader. Can be triggered on any page element.

### `processStop`   {#l_processStop}

Hide the loader. Can be triggered on any page element.
