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

The default edit trigger looks like this:


#### Related Topics:

