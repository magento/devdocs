---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Customizing JavaScript illustration
menu_title: Customizing JavaScript illustration
menu_order: 25
version: 2.0
github_link: javascript-dev-guide/javascript/js_practice.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/js_practice.html
  - guides/v1.0/frontend-dev-guide/javascript/js_practice.html
---

<h2 id="practice_overview">Overview</h2>
This topic features a step-by-step illustration of how to customize a jQuery widget and how to use a custom widget instead the default Magento one. 

<h2>Customize a default Magento jQuery widget</h2>

In their Orange theme, OrangeCo wants to remove the "Click on image to view it full sized" message displayed on the product page. 

The high-level steps for this task are the following:

1. Define how the message is output.
2. Add the custom script extending the default one.
3. Update RequireJS configuration to use the custom script instead of the default one.

Let's look at each step in more detail.

<h3 id="define_script1">Step 1: Define how the message is output</h3>

OrangeCo needs to define how the message is output. To do this, they take the following steps: 

<ol>
<li>Open a product page.</li>
<li>Select to view the page source.</li>
<li>Search for the "Click on image to view it full sized" string. The illustration of the search result follows:
<br>
<img src="{{ site.baseurl }}common/images/fdg_js_pr1.png" alt="Page source search result">
</li>
<li>View that it is output by <code>gallery.js</code>.

</li>
</ol>


We see that the script which OrangeCo needs to alter is `gallery.js`. 

To be able to extend `gallery.js`, OrangeCo needs to know the path to it. To get this info, they refer to `requirejs-config.js`, which <a href="{{page.baseurl}}javascript-dev-guide/javascript/custom_js.html#config_file">can be reached from the page source view or from the file system</a>. According to the configuration, the path for `gallery` is `mage/gallery`. The illustration follows:

<img src="{{ site.baseurl }}common/images/fdg_pr_2.png" alt="RequireJS config file">

<h3 id="add_code1">Step 2: Add the custom widget extending the gallery widget</h3>

In the `app/design/OrangeCo/orange/web/js` OrangeCo adds `orange-gallery.js` with the following content:
<pre>
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
</pre>

<h3 id="config1">Step 3: Update the RequireJS configuration</h3>
OrangeCo adds the custom `app/design/OrangeCo/orange/requirejs-config.js` with the following content:
<pre>
var config = {
  "map": {
    "*": {
      "gallery": "js/orange-gallery"
    }
  }
};
</pre>

The new behavior is applied once the store pages are reloaded.

<h2 id="use_custom_widget">Add and use a custom widget (jCarousel)</h2>
OrangeCo wants to use the <a href="http://sorgalla.com/jcarousel/" target="_blank">jCarousel widget</a> to display product images on product pages.
The high level steps for this task are the following:

1. Define how product images are displayed by default.
2. Add the custom script to the file system.
3. Update RequireJS configuration to use the custom script instead of the default one.

Let's look at each step in more detail.
<h3>Step 1: Define what is the default implementation</h3>
Using the approach <a href="#define_sript">described in the previous section</a>, OrangeCo defines that the product images are displayed by `gallery.js`, and the configuration path for it is `mage/gallery`.

<h3>Step 2: Add the custom script to the file system</h3>

For the jCarousel widget to be able to use the configuration passed to the gallery widget, 
OrangeCo needs to add a "wrapper" script. 

To do this, OrangeCo adds the following files in the `app/design/OrangeCo/orange/web/js` directory:

<ul> 
<li>The jCarousel widget source file: <code>jquery.jcarousel.js</code></li>
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
In the `app/design/OrangeCo/orange` directory OrangeCo adds `requirejs-config.js` with the following content:

<pre>
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
</pre>

## Recommended reading ##
<a href="{{page.baseurl}}frontend-dev-guide/javascript/custom_js.html" target="_blank">Use custom JavaScript</a>
