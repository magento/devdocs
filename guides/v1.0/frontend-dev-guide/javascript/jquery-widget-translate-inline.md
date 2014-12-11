---
layout: default
group: fedg
subgroup: Javascript
title: jQuery translateInline widget
menu_title: jQuery translateInline widget
menu_order: 6
github_link: frontend-dev-guide/javascript/jquery-widget-translate-inline.md
---

<h2 id="fedg_translate-widget_overview">Overview</h2>

The translateinline widget enables users to provide translations for storefront page strings when browsing the pages. The translate inline functionality has the following UI elements:

*	Edit trigger, an element that activates the translation dialog box.
*	Translation form, which displays in the translation dialog box.

To implement these, translateinline uses editTrigger and dialog widgets as auxiliary components. You can customize the latter two using the options in translateinline itself.

translateinline source is `<your Magento install dir>/pub/lib/mage/translate-inline.js`.

<h2 id="fedg_translate-widget_init">Initialize the translateinline widget</h2>

To initialize translateinline:

<script src="https://gist.github.com/xcomSteveJohnson/8d3fc4e87110d345dccf.js"></script>

The default edit control looks like the following:

![Default inline translation control is a book icon]({{ site.baseurl }}common/images/widget_translateinline_default-control.png)

The default dialog and translation form look like the following:

![Default inline translation form]({{ site.baseurl }}common/images/widget_translateinline_default-form.png)

<h2 id="fedg_translate-widget_opt">Options for the translateinline widget</h2>

The translateinline widget has the following options:

*	<a href="#fedg_translate-widget_opt_ajaxUrl">ajaxUrl</a>
*	<a href="#fedg_translate-widget_opt_area">area</a>
*	<a href="#fedg_translate-widget_opt_translateForm">translateForm</a>
*	<a href="#fedg_translate-widget_opt_dialog">dialog</a>

<h4 id="fedg_translate-widget_opt_ajaxUrl">ajaxUrl</h4>

URL for Ajax request for saving the translation.

**Type**: String

<h4 id="fedg_translate-widget_opt_area">area</h4>

The application area for which the widget is used; typically, `adminhtml` or `frontend`.

**Type**: String

<h4 id="fedg_translate-widget_opt_translateForm">translateForm</h4>

An object that contains the translation form template and the data for this template.

**Type**: Object

*	`translateForm.template`

	HTML wrapper for the output; can be a DOM element selector.

	**Default value**: `#translate-form-template`

*	`translateForm.data`

	An object that contains the data for the translation form template, stored in the following options:

	*	`translateForm.data.id`&mdash;Translation form ID.

		**Type**: String

		**Default value**: `translate-inline-form`

	*	`translateForm.data.message`&mdash;The text of the message displayed in the bottom of the translation form.

		**Type**: String

		**Default value**: `Please refresh the page to see your changes after submitting this form`.

<h4 id="fedg_translate-widget_opt_dialog">dialog</h4>

Specifies options for the jQuery UI translation dialog box.

**Type**: Object

*	`dialog.modal`

	If set to `true`, specifies a modal dialog box.

	**Type**: Boolean
	**Default value**: `true`

*	`dialog.dialogClass`

	Adds the the specified class names to the dialog box. Space-delimited for more than one class; for example, `dialog dialog2`

	**Type**: String

	**Default value**: `dialog`

*	`dialog.width`

	The width of the dialog box in pixels.

	**Type**: Positive integer

	**Default value**: 650

*	`dialog.height`

	The height of the dialog box in pixels.

	**Type**: Positive integer

	**Default value**: 650

*	`dialog.title`

	The title of the dialog box.

	**Type**:  String

	**Default value**: `Translate`

*	`dialog.zIndex`

	The starting <a href="http://en.wikipedia.org/wiki/Z-index" target="_blank">z-index</a> for the dialog box.

	**Type**: Integer

	**Default value**: 2100

*	`dialog.buttons`

	Specifies which buttons should display on the translation form as key-value pairs, where a `key` is the text of the button.

	**Default value**:

	<pre>[{
		text: 'Submit',
		'class': 'form-button button'
	},
	{
		text: 'Close',
		'class': 'form-button button'
	}]</pre>

<h2 id="fedg_widget_translateinline_customize">Customize the translateinline widget</h2>

By changing widget options, you can customize translateinline components and behavior.

For example, you can change the templates for the edit trigger and translation form, or the translation dialog box properties (size and modal behavior).

An example follows:

<script src="https://gist.github.com/xcomSteveJohnson/4c100b4a78c2a91d9b18.js"></script>

The preceding sample dialog box is non-modal inline that displays for translatable items similar to the following:

![Default inline translation control is a book icon]({{ site.baseurl }}common/images/widget_translateinline_customize1.png)

The translation form displays as follows:

![Default inline translation control is a book icon]({{ site.baseurl }}common/images/widget_translateinline_customize2.png)

#### Related topics

*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widgets-about.html">Magento jQuery widgets</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-calendar.html">jQuery calendar widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-loader.html">jQuery loader widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-tabs.html">jQuery tabs widget</a>
*	<a href="{{ site.gdeurl }}coding-standards/code-standard-jquery-widgets.html">jQuery widget coding standard</a>
