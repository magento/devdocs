---
layout: default
group: fedg
subgroup: Javascript
title: Customize JavaScript: practical illustration
menu_title: Customize JavaScript: practical illustration
menu_order: 5
github_link: frontend-dev-guide/javascript/js_practice.md
---

<h2 id="practice_overview">Overview</h2>
This topic features a step-by-step illustration of how to customize a jQuery widget and how to use a custom widget instead the default Magento one. 

<h2>Customize a default Magento jQuery widget</h2>

In their Orange theme, OrangeCo wants to remove the "Click on image to view it full sized" message displayed on the product page. 

First, OrangeCo needs to define how the message is output. To do this, they take the following steps: 

1. Open a product page.
2. Select to view source.
3. Search for the "Click on image to view it full sized" string.
3. View that it is output by `gallery.js`

<img src="{{site.baseurl }}common/images/fdg_js_pr1.png" alt="Page source search result">

5. In require-config.js find the path for gallery: "mage/gallery"

So MAge
In the Orange theme create ...orange/requirejs-config.js
with the following content:
<pre>
var config = {
  "map": {
    "*": {
      "gallery": "js/orange-gallery"
    }
  }
};
</pre>

In the orange/web/js create orange-gallery.js with the following content:
<pre>
define([
  'jquery',
  'jquery/ui',
  'mage/gallery' // 'mage/<widget.name>
], function($){
 
  $.widget('orange.gallery', $.mage.gallery, {
    _create: function() { // special methoid of jQuery UI Widgets
      this._setOption('controls', {'notice': {}});
    }
  });
 
  return $.orange.gallery;
});
</pre>

Reload the page and see the result.

<h2>Add and use your custom widget (jCarousel)</h2>
Use the jCarousel widget to display product images on product pages.

Find the gallery.js widget as described earlier.

Put jquery.jcarousel.js in orange/web/js.

In the Orange theme create ...orange/requirejs-config.js
with the following content:
<pre>
var config = {
  "map": {
    "*": {
      "gallery": "js/jquery.jcarousel"
    }
  },
  "shim": {
    "js/jquery.jcarousel": ["jquery"] // as our jquery.jcarousel isn't an AMD module
  }
};
</pre>


b) Use a wrapper, for jcarousel to be able to use the config passed to gallery.

Open a product page > view source > see that images are displayed by the gallery.js.

In the Orange theme create ...orange/requirejs-config.js
with the following content:
<pre>
var config = {
  "map": {
    "*": {
      "gallery": "js/orange-gallery"
    }
  },
  "shim": {
    "js/jquery.jcarousel": ["jquery"] // as our jquery.jcarousel isn't an AMD module
  }
};
</pre>

In the orange/web/js create orange-gallery.js with the following content:
<pre>
define([
  'jquery',
  'js/jquery.jcarousel'
], function($){
 
  return function (config, element) {
   var jCarouselConfig = {};
   // Anton's dept ... 
   $(element).jcarousel(jCarouselConfig);
  }
});
</pre>


