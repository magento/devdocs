---
layout: howtom2devgde_chapters_fedg
title: Using the Magento jQuery Widget
---
 
<h1 id="fedg_using-ui-lib">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/javascript/jquery-plugin-translate-inline.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_translate-widget_overview">About the TranslateInline Widget</h2>

The TranslateInline widget enables users to provide translations for storefront page strings when browsing the pages. The translate inline functionality has the following UI elements: 

*	Edit trigger, an element that activates the translation dialog box.
*	Translation form, which displays in the translation dialog box. 

To implement these, translateInline uses editTrigger and dialog widgets as auxiliary components. You can customize the latter two using the options in translateInline itself.  

TranslateInline source is `[your Magento install dir]/pub/lib/mage/translate-inline.js`.

<h2 id="fedg_translate-widget_init">Initializating the translateInline Widget</h2>

To initialize translateInline:

<script src="https://gist.github.com/xcomSteveJohnson/8d3fc4e87110d345dccf.js"></script>

The default edit control looks like the following:

![Default inline translation control is a book icon]({{ site.baseurl }}common/images/widget_translateinline_default-control.png)

The default dialog and translation form look like the following: 

![Default inline translation form]({{ site.baseurl }}common/images/widget_translateinline_default-form.png)

<h2 id="fedg_translate-widget_opt">translateInline Options</h2>

The translateInline widget has the following options:

*	<a href="#fedg_translate-widget_opt_ajaxUrl">ajaxUrl</a>
*	TBD
*	TBD

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
		
	


#### Related Topics:

