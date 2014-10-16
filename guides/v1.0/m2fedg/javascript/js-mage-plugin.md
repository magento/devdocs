---
layout: howtom2devgde_chapters_fedg
title: Magento Mage plugin
---

<h1 id="fedg_js-mage">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/javascript/js-mage-plugin.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_js-mage_overview">Overview</h2>

The Mage plugin extends JavaScript and modifies initialization parameters on the fly in Magento.

Using the Mage plugin, you can:

*	Modify the list of resources for existing components.
*	Add a new component.
*	Extend an existing component.
*	Modify arguments (options) of a component's initialization method, including modification of the component's name.
*	Manage the order in which components initialize.
*	Initialize components using the data attribute of a DOM element.

Using Mage plugin decreases the amount of inline JavaScript by loading only the necessary components for a page.

<h2 id="fedg_js-mage_declare">Declare components</h2>

You can declare components for an entire Magento area or for specific pages as discussed in the sections that follow:

*	<a href="#fedg_js-mage_declare-area">Declare application-area components</a>
*	<a href="#fedg_js-mage_declare-page">Declare page-specific components</a>

<h3 id="fedg_js-mage_declare-area">Declare application-area components</h3>

In a layout file, a block declaring components is added as child <code>&lt;head</code> block.

For example, in the following `main.xml`, the `head.components` block, which contains the template with components declaration, is the child block of the `head` block.

<script src="https://gist.github.com/xcomSteveJohnson/977c1bfe19337b30d111.js"></script>

The `head.components` block template can be like following:

<script src="https://gist.github.com/xcomSteveJohnson/2050338cfc1735de73fd.js"></script>

This template contains the declaration of all common components for the whole application area. In the template  the `$.mage.component helper` is called, which stores components' dependencies on resources.

`$.mage.component` accepts any of the following as arguments:

*	An object, where `key` is a component's name, and `value` is an array of resources' URLs
*	Two arguments: first is a component's name (string), and second an array of resource URLs.

	(In the preceding example, components and resources URLs are passed to `$.mage.component` as objects.)

<h3 id="fedg_js-mage_declare-page">Declare page-specific components</h3>

To declare a particular component for a specific page:

1.	Add a new child block for the `head.components` block in the module layout file.
2.	Declare a new component or extend the existing one in the `.phtml` template of the newly added block.

Example:

1.	 Add the `cms_page_head_components` block as a child block of `head.components`: 	<script src="https://gist.github.com/xcomSteveJohnson/60e6e8b7b9566c09ae22.js"></script>

2.	Extend the existing form and validation components by adding the components' resources to the template:

	<script src="https://gist.github.com/xcomSteveJohnson/b8918c00a29cd567506a.js"></script>

<h2 id="fedg_js-mage_widgets">Instantiate widgets</h2>

This section discusses different ways to instantiate widgets:

*	<a href="#fedg_js-mage_widgets_typ">Typical Widget Instantiation</a>
*	<a href="#fedg_js-mage_widgets_mage">Instantiating Widgets Using the Mage plugin</a>
*	<a href="#fedg_js-mage_widgets_dataattrib">Instantiating Widgets Using the data Attribute</a>

<h3 id="fedg_js-mage_widgets_typ">Typical widget instantiation</h3>

Typically, widgets are instantiated like this:

<pre>jQuery('#datepicker').datepicker();</pre>

where

`datepicker` is the name of the widget.
`#datepicker` is the element's selector.

You can also pass options to instantiate a widget:

<pre>jQuery('#datepicker').datepicker({showButtonPanel: true});</pre>

And using chaining:

<pre>jQuery('#datepicker')
.datepicker({showButtonPanel: true})
.draggable({axis: 'y'});</pre>

<h3 id="fedg_js-mage_widgets_mage">Use the Mage plugin to instantiate widgets</h3>

To instantiate a widget using the Mage plugin, use the following syntax:

<pre>jQuery('#datepicker').mage('datepicker');</pre>

To instantiate a widget, and specify init options using Mage plugin:

<pre>jQuery('#datepicker').mage('datepicker', {showButtonPanel: true});</pre>

Using chaining in widget instantiating with Mage plugin:

<pre>jQuery('#datepicker')
.mage('datepicker', {showButtonPanel: true})
.mage('draggable', {axis: 'y'});</pre>

<h3 id="fedg_js-mage_widgets_dataattrib">Use the data attribute to instantiate widgets</h3>

To instantiate a widget using the HTML element `data` attribute, use the following syntax:

<pre>&lt;input data-mage-init="{datepicker: []}" /></pre>

To instantiate a widget with options:

<pre>&lt;input data-mage-init="{datepicker: {showButtonPanel: true}}" /></pre>

Using chaining:

<pre>&lt;input data-mage-init="{datepicker: {showButtonPanel: true}, draggable: {axis: 'y'}}" /></pre>

<h2 id="fedg_js-mage_widgets_plugin">Instantiate plugins</h2>

Unlike widgets, plugins do not not have a strict structure; plugin constructors accept more than one argument.

Generally, plugins are instantiated like this:

<pre>jQuery('#someElement').myPlugin(options, {width: '70px'}, true);</pre>

Where `myPlugin` is the plugin name.

<h3 id="fedg_js-mage_widgets_mage">Use the Mage plugin to instantiate Magento plugins</h3>

To instantiate a plugin using the Mage plugin, use the following syntax:

<pre>jQuery('#someElement').mage('myPlugin', {width: '70px'}, true);</pre>

<h3 id="fedg_js-mage_widgets_dataattrib">Use the data attribute to instantiate Magento plugins</h3>

To instantiate a plugin using the data attribute, use the following syntax:

<pre>&lt;input data-mage-init="{myPlugin: [{width: '70px'}, true]}" /></pre>

<h2 id="fedg_js-mage_init-data">Customize initialization data</h2>

You can use the `$.mage.onInit()` helper method to customize initialization data.

`$.mage.onInit()` accepts the following parameters:

*	`component`&mdash;Name of the component to be customized.
*	`selector`&mdash;(Optional.) Specify to customize a particular element (in other words, not all components of a certain type).
*	`handler`&mdash;Callback function with customization logic.

Pass arguments to a component's initialization method the callback function the same way as in the original initialization method.

In the handler function, you can modify the following:

*	Passed arguments (for the case of scalar argument(s) see next entry)
*	Properties:
	*	`this.args`&mdash;Property for accessing scalar arguments. Example of changing such an argument: `this.args[1] = false`
	*	`this.name`&mdash;Component name
	*	`this.resources`&mdash;List of resources required for that component.

See the following sections for more information:

*	<a href="#fedg_js-mage_init-data_mod">Example of Modifying Options</a>
*	<a href="#fedg_js-mage_init-data_substitut">Substituting Components</a>

<h3 id="fedg_js-mage_init-data_mod">Example - Modify options</h3>

The following sections provide some examples of modifying options:

*	<a href="#fedg_js-mage_init-data_mod_all">Change initialization options for a specified instance type</a>
*	<a href="#fedg_js-mage_init-data_mod_el">Change initialization options for a specified element</a>
*	<a href="#fedg_js-mage_init-data_mod_args">Modify arguments</a>
*	<a href="#fedg_js-mage_init-data_stop">Stop component from initialization</a>

<h4 id="fedg_js-mage_init-data_mod_all">Change initialization options for a specified instance type</h4>

Changing the showButtonPanel option for all instances of the Datepicker widget on a page:

<pre>$.mage.onInit('datepicker', function(options) {
    options.showButtonPanel = false;
});</pre>

<h4 id="fedg_js-mage_init-data_mod_el">Change initialization options for a specified element</h4>

To change options of a particular instance on a page, use the second argument of `$.mage.onInit()` as a jQuery selector.

Example:

<pre>$.mage.onInit('datepicker', '[role=date-of-birth]', function(options) {
    options.showButtonPanel = false;
});</pre>

<h4 id="fedg_js-mage_init-data_mod_args">Modify arguments</h4>

If an argument is scalar, you can modify it over a built-in array of arguments:

<pre>$.mage.onInit('myPlugin', function() {
    this.args[1] = false;
});</pre>

<h4 id="fedg_js-mage_init-data_stop">Stop component from initialization</h4>

You can stop a component from initializing by deleting the component name.

Example:

<pre>$.mage.onInit('datepicker', '[role=date-of-birth]', function() {
    this.name = null;
});</pre>

<h3 id="fedg_js-mage_init-data_substitut">Substitute components</h3>

You can substitute components in the following ways:

* <a href="#fedg_js-mage_init-data_substitut_new">Substitute a component by declaring a new one</a>
* <a href="#fedg_js-mage_init-data_resource">Substitute a component by modifying a resource list</a>

<h4 id="fedg_js-mage_init-data_substitut_new">Substitute a component by declaring a new one</h4>

To modify arguments and business logic, you can declare a new component that extends the original one, and substitute the component name inside the initiation-callback.

Example:

<script src="https://gist.github.com/xcomSteveJohnson/fd1970f840c255cd27e8.js"></script>

In the preceding example, `datepicker` is the previously existing component, and `datepickerDob` is the newly declared one.

<h4 id="fedg_js-mage_init-data_resource">Substitute a component by modifying a resource list</h4>

You can substitute a component by modifying the list of components resources on the fly:

<script src="https://gist.github.com/xcomSteveJohnson/e6867a6fba96ec49a0d7.js"></script>

<h2 id="fedg_js-mage-attribs">Handle data-mage-init attributes</h2>

To handle all `data-mage-init` attributes, use the `$.mage.init()` method. It should be called immediately before the closing `</body>` tag, or on the document ready event:

<pre>jQuery(function(){
    $.mage.init();
});</pre>

`$.mage.init()` finds all elements with the `data-mage-init` attribute and initializes them. It also subscribes to the `contentUpdated` event which enables processing all dynamically modified elements; for example, in the consequence of Ajax request.

When the `contentUpdated` event is triggered, it goes up to the `<body>` node, and then is automatically handled by `$.mage.init()`.

<pre>(function($) {
    $.ajax({
        url: 'test.php',
        context: $('#container')
    }).done(function(html) {
        $(this).html(html).trigger('contentUpdated');
    });
})(jQuery);</pre>


#### Related topics

* <a href="{{ site.gdeurl }}m2fedg/javascript/js-coding-guidelines.html">JavaScript coding guidelines</a>
* <a href="{{ site.gdeurl }}m2fedg/javascript/jquery-widgets-about.html">Magento jQuery widgets</a>
* <a href="{{ site.gdeurl }}m2fedg/javascript/jquery-widget-guidelines.html">jQuery widget coding standards</a>
