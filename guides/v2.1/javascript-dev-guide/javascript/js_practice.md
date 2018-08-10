---
group: jsdg
subgroup: 1_Javascript
title: Customizing JavaScript illustration
version: 2.1
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/js_practice.html
 - /guides/v1.0/frontend-dev-guide/javascript/js_practice.html
---

## Overview {#practice_overview}

This topic features a step-by-step illustration of how to customize a {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} and how to use a custom widget instead the default Magento one.

## Customize a default Magento jQuery widget

In their Orange theme, OrangeCo wants to remove the "Click on image to view it full sized" message displayed on the product page.

The high-level steps for this task are the following:

1. Define how the message is output.
2. Add the custom script extending the default one.
3. Update RequireJS configuration to use the custom script instead of the default one.

Let's look at each step in more detail.

### Step 1: Define how the message is output {#define_script1}

OrangeCo needs to define how the message is output. To do this, they take the following steps:

1.  Open a product page.
2.  Select to view the page source.
3.  Search for the "Click on image to view it full sized" string. The illustration of the search result follows: ![Page source search result]
4.  View that it is output by [`gallery.js`].

We see that the script which OrangeCo needs to alter is `gallery.js`.

To be able to extend `gallery.js`, OrangeCo needs to know the path to it. To get this info, they refer to `requirejs-config.js`, which [can be reached from the page source view or from the file system]. According to the configuration, the path for `gallery` is `mage/gallery`. The illustration follows:

![RequireJS config file]

### Step 2: Add the custom widget extending the gallery widget {#add_code1}

In the `app/design/OrangeCo/orange/web/js` OrangeCo adds `orange-gallery.js` with the following content:
```javascript
define([
  'jquery',
  'jquery/ui',
  'mage/gallery'
], function($){

  $.widget('orange.gallery', $.mage.gallery, {
    _create: function() { // special method of jQuery UI Widgets
      this._setOption('controls', {'notice': {}});
    }
  });

  return $.orange.gallery;
});
```

### Step 3: Update the RequireJS configuration {#config1}

OrangeCo adds the custom `app/design/OrangeCo/orange/requirejs-config.js` with the following content:
```javascript
var config = {
  "map": {
    "*": {
      "gallery": "js/orange-gallery"
    }
  }
};
```

The new behavior is applied once the store pages are reloaded.

## Add and use a custom widget (jCarousel) {#use_custom_widget}

OrangeCo wants to use the [jCarousel widget] to display product images on product pages. The high level steps for this task are the following:

1. Define how product images are displayed by default.
2. Add the custom script to the file system.
3. Update RequireJS configuration to use the custom script instead of the default one.

Let's look at each step in more detail.

### Step 1: Define what is the default implementation

Using the approach described in the previous section, OrangeCo defines that the product images are displayed by [`gallery.js`], and the configuration path for it is `mage/gallery`.

### Step 2: Add the custom script to the file system

For the jCarousel widget to be able to use the configuration passed to the gallery widget,
OrangeCo needs to add a "wrapper" script.

To do this, OrangeCo adds the following files in the `app/design/OrangeCo/orange/web/js` directory:

-   The jCarousel widget source file: `jquery.jcarousel.js`
-   A \"wrapper\" `orange-carousel.js` with the following content:
    ```javascript
        define([
          'jquery',
          'js/jquery.jcarousel'
        ], function($){

          return function (config, element) {
           var jCarouselConfig = {
             list: '.items.thumbs',
             items: '.item.thumb'
           };
           $(element).jcarousel(jCarouselConfig);
          }
        });
    ```

### Step 3: Update RequireJS configuration

In the `app/design/OrangeCo/orange` directory OrangeCo adds `requirejs-config.js` with the following content:

```javascript
var config = {
  "map": {
    "*": {
      "gallery": "js/orange-gallery"
    }
  },
  "shim": {
    "js/jquery.jcarousel": ["jquery"] // as jquery.jcarousel isn't an AMD module
  }
};
```

## Recommended reading ##
[Use custom JavaScript]


[Page source search result]: {{site.baseurl}}/common/images/fdg_js_pr1.png
[`gallery.js`]: {{site.mage2100url}}lib/web/mage/gallery/gallery.js
[can be reached from the page source view or from the file system]: {{page.baseurl}}/javascript-dev-guide/javascript/custom_js.html#config_file
[RequireJS config file]: {{site.baseurl}}/common/images/fdg_pr_2.png
[jCarousel widget]: http://sorgalla.com/jcarousel/
[`gallery.js`]: {{site.mage2100url}}lib/web/mage/gallery/gallery.js
[Use custom JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/custom_js.html