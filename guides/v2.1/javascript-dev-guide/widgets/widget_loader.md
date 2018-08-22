---
group: jsdg
subgroup: 3_Widgets
title: Loader widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_loader.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_loader.html
---

## Overview

The Loader {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} blocks page content (all content or a part of it). Its intended use is blocking content when an Ajax request is being sent. But it can be initialized for non-Ajax tasks as well. 

The Loader widget source is [lib/web/mage/loader.js].

## Initialize the loader widget {#loader_init}

The loader widget is initialized as described in [JavaScript initialization].

## Options {#loader_options}

The loader widget has the following options:
-   [icon](#l_icon)
-   [template](#l_template)
-   [texts](#l_texts)

### `icon` {#l_icon}
The URL to the loader image. This image is displayed when the widget is active; that is, between the `ajaxSend` and `ajaxComplete` events. 

**Type**: String 

**Default value**: No image by default.


### `template` {#l_template}
HTML wrapper for the output, or a DOM element selector. 

**Default value**:
```html
<div class="loading-mask" data-role="loader">
    <div class="loader">
         <img alt="<%- data.texts.imgAlt %>" src="<%- data.icon %>">
        <p><%- data.texts.loaderText %></p>
    </div>
</div>
```

### `texts` {#l_texts}

An object that contains translations for loader text:
-   `texts.loaderText`: The text that is displayed under the loader image.
    **Default value**: *'Please wait...'*
-   `texts.imgAlt`: The text that is set as the `alt` attribute value of the loader image.
    **Default value**: *'Loading...'*

## Events

Loader is subscribed to the following events:
-   [processStart](#l_processStart)
-   [processStop](#l_processStop)
-   [texts](#l_texts)

### `processStart` {#l_processStart}
Display the loader. Can be triggered on any page element.

### `processStop` {#l_processStop}
Hide the loader. Can be triggered on any page element.


[lib/web/mage/loader.js]: {{site.mage2000url}}lib/web/mage/loader.js
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html