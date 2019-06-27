---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Loader widget
---

## Overview

The Loader [widget](https://glossary.magento.com/widget) blocks page content (all content or a part of it). Its intended use is blocking content when an Ajax request is being sent. But it can be initialized for non-Ajax tasks as well. 

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

## Methods {#loader_methods}

-   [show()](#method_show)
-   [hide()](#method_hide)

### `show()` {#method_show}

Show the loader.

Invoke the show method:

```javascript
$("#element").loader("show");
```

### `hide()` {#method_hide}

Hide the loader.

Invoke the hide method:

```javascript
$("#element").loader("hide");
```

## Events

Loader is subscribed to the following events:
-   [processStart](#l_processStart)
-   [processStop](#l_processStop)

### `processStart` {#l_processStart}
Display the loader. Can be triggered on any page element.

Start show loading:

```javascript
$("body").trigger('processStart');
```

### `processStop` {#l_processStop}
Hide the loader. Can be triggered on any page element.

Stop show loading:

```javascript
$("body").trigger('processStop');
```

[lib/web/mage/loader.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/loader.js
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
