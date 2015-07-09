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
This topic features a step-by-step illustration of how to customize a jQuery widget, include your own custom widget (jCarousel), and set up your own script to communicate with built-in Magento widgets.

<h2>Customize a default Magento jQuery widget</h2>

Remove the "Click on image to view it full sized" message on the product page. 

Open a product page > view source > search for "Click to..." > see that it is displayed by the gallery.js.

In the requirejs-config.js find "gallery", the path is "mage/gallery"

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


