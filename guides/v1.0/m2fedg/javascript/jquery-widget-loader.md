---
layout: howtom2devgde_chapters_fedg
title: Using the jQuery Loader Widget
---
 
<h1 id="fedg_jquery_loader">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/javascript/jquery-widget-loader.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_loader_widget_overview">About the Loader Widget</h2>

The Loader widget blocks some or all page content when an Ajax request is being sent; however, you can also use it for non-Ajax tasks. 

The loader source is `[your Magento install dir]/pub/lib/mage/loader.js`.

<h2 id="fedg_loader_init">Initializing the Loader Widget</h2>

Example:

<pre>$('[data-container="some-location"]').loader({
    icon: 'icon.gif',
    texts: {
        loaderText: 'Please wait...',
        imgAlt: 'Loading...'
    }
});</pre>

<h2 id="fedg_loader_options">Loader Widget Options</h2>

The loader widget has the following options:

*	<a href="#fedg_loader_options-icon">icon</a>
*	<a href="#fedg_loader_options-text">texts</a>
*	<a href="#fedg_loader_options-template">template</a>

<h4 id="fedg_loader_options-icon">icon</h4>

The URL to the loader image. This image is displayed when the widget is active; that is, between the `ajaxSend` and `ajaxComplete` events. 

**Type**: String 
**Default value**: No image by default.

<h4 id="fedg_loader_options-text">texts</h4>

An object that contains translations for loader text:

*	`texts.loaderText`

	The text that is displayed under the loader image. 

	Default value: `Please wait...`

*	`texts.imgAlt`

	The text that is set as the `alt` attribute value of the loader image. 
	Default value: Loading...

<h4 id="fedg_loader_options-template">template</h4>

HTML wrapper for output, or a DOM element selector. 

Default value:

<script src="https://gist.github.com/xcomSteveJohnson/0cfe5b6cc79bd36cea5b.js"></script>

<h2 id="fedg_loader_details">Implementing the Loader Widget</h2>

The loader widget is automatically subscribed to the `ajaxSend` and `ajaxComplete` events, although it can also be triggered manually using the `processStart` and `processStop` events. 

To enable the loader for an Ajax request, set the `showLoader` Ajax call option to `true`.

See the following sections for more information:

*	<a href="#fedg_loader_details_block-part">Using the Loader to Block Page Content</a>
*	<a href="#fedg_loader_details_non-ajax">Using Loader for Ajax and Non-Ajax Calls</a>

<h3 id="fedg_loader_details_block-part">Using the Loader to Block Page Content</h3>

The loader can be used to lock all page content, or only lock certain forms or certain blocks. Specify the elements to be blocked using the `loaderContext` Ajax call option. 

In the following example, an Ajax request loader is triggered and set to block only the element for which the `date-role` attribute value is `translation-form`: 
 
<pre>jQuery.ajax({
    url: url,
    type: 'POST',
    data: parameters,
    showLoader: true,
    loaderContext: '[data-role="translation-form"]'
})</pre>

<h3 id="fedg_loader_details_non-ajax">Using Loader for Ajax and Non-Ajax Calls</h3>

To have the loader to span multiple Ajax calls or to show it when non-Ajax tasks are underway, trigger it manually: 
 
<pre>...
$(this.element).trigger("processStart");
// do multiple ajax calls
// or other work
$(this.element).trigger("processStop");</pre>
 
Where `this.element` is the element on which the loader is dependent.


#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/javascript/jquery-widgets-about.html">Using Magento jQuery Widgets</a>
*	<a href="{{ site.gdeurl }}m2fedg/javascript/jquery-widget-calendar.html">Using the Calendar jQuery Widget</a>
*	<a href="{{ site.gdeurl }}m2fedg/javascript/jquery-widget-tabs.html">Using the Tabs jQuery Widget</a>
*	<a href="{{ site.gdeurl }}m2fedg/javascript/jquery-widget-translate-inline.html">Using the jQuery TranslateInline Widget</a>	
*	<a href="{{ site.gdeurl }}m2fedg/javascript/magento-js-coding-stnds-abt.html">Magento JavaScript Coding Standards and Best Practices</a>	