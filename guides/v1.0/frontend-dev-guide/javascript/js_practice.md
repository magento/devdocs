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

<p class="q">We do not customize in fact, we use a custom instead?</p>
In their Orange theme, OrangeCo wants to remove the "Click on image to view it full sized" message displayed on the product page. 

<span id="define_script">First, OrangeCo needs to define how the message is output. To do this, they take the following steps: 

<ol>
<li>Open a product page.</li>
<li>Select to view source.</li>
<li>Search for the "Click on image to view it full sized" string.</li>
<li>View that it is output by <code>gallery.js</code>
<br>
<img src="{{site.baseurl }}common/images/fdg_js_pr1.png" alt="Page source search result">
</li>
</ol>

So the script which OrangeCo needs to alter is `gallery.js`. OrangeCo will create a custom orange-gallery.js to alter the behavior of gallery.js. To add the orange-gallery.js to the RequireJS configuration, OrangeCo need to know the pass for <code>gallery.js</code>. The pass is defined in the <code>requirejs-config.js</code> configuration file, and is <code>mage/gallery</code>.

So OrangeCo adds the custom `app/design/OrangeCo/orange/requirejs-config.js`with the following content:
<pre>
var config = {
  "map": {
    "*": {
      "gallery": "js/orange-gallery"
    }
  }
};
</pre>

In the `app/design/OrangeCo/orange/web/js` OrangeCo adds `orange-gallery.js` with the following content:
<pre>
define([
  'jquery',
  'jquery/ui',
  'mage/gallery' // 'mage/<widget.name>
], function($){
 
  $.widget('orange.gallery', $.mage.gallery, {
    _create: function() { // special method of jQuery UI Widgets
      this._setOption('controls', {'notice': {}});
    }
  });
 
  return $.orange.gallery;
});
</pre>

The new behavior is applied once the store pages are reloaded.

<h2 id="use_custom_widget">Add and use a custom widget (jCarousel)</h2>
OrangeCo want to use the jCarousel widget to display product images on product pages.
The high level steps for this task are the following:

1. Define how product images are displayed by default.
2. Add the custom script to the file system.
3. Update RequireJS configuration to use the custom script instead of the default one.

Let's look closer at each step.
<h3>Step 1: Define what is the default implementation</h3>
Using the approach <a href="#define_sript">described in the previous section</a>, OrangeCo define that the product images are displayed by `gallery.js`.

<h3>Step 2: Add the custom script to the file system</h3>

For jcarousel to be able to use the config passed to the gallery widget, 
OrangeCo needs to add use a wrapper. 

So OrangeCo add the following files in the `app/design/OrangeCo/orange/web/js` directory:

<ul> 
<li>The jcarousel widget source file: <code>jcarousel.js</code></li>
<li>A "wrapper" <code>orange-carousel.js</code> with the following content:
<pre>
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
</pre>
</li>
</ul>

<h3>Step 3: Update RequireJS configuration</h3>
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


b)Put jquery.jcarousel.js in orange/web/js.

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