---
layout: default
group: fedg
subgroup: Javascript
title: Tabs widget
menu_title: Tabs widget
menu_order: 5
github_link: frontend-dev-guide/javascript/jquery-widget-tabs.md
---

<h2 id="fedg_tabs-widget_overview">Overview</h2>

The Magento tabs widget is a customization of the jQuery <a href="http://api.jqueryui.com/tabs/" target="_blank">Tabs Widget</a>, which implements tab pages as single content area with multiple panels, each associated with a header in a list.

Specifically, the tabs widget implements the following:

*	Switching between tab pages
*	Loading static tab content, or loading tab content by Ajax requests, when clicking on the tab
*	Setting active tab on initialization
*	Rendering tab pages vertically or horizontally

The Tabs widget source is located in the `<your Magento install dir>/pub/lib/mage/backend` directory. All tab pages in Magento Admin panel are implemented using the tabs widget.

<h2 id="fedg_tabs_init">Initialize the tabs widget</h2>

Example 1, where the first tab is active by default:

<pre>$('#tabs').tabs();  </pre>

Example 2:

<pre>$('#tabs').tabs({destination:'#edit_form'});  </pre>

<h2 id="fedg_tabs_options">Options for the tabs widget</h2>

The tabs widget has the following options:

*	<a href="#fedg_tabs_options-spinner">icon</a>
*	<a href="#fedg_tabs_options-destination">destination</a>
*	<a href="#fedg_tabs_options-ajaxOptions">ajaxOptions</a>
*	<a href="#fedg_tabs_options-tabIdArgument">tabIdArgument</a>
*	<a href="#fedg_tabs_options-tabsBlockPrefix">tabsBlockPrefix</a>
*	<a href="#fedg_tabs_options-shadowTabsShadow">shadowTabsShadow</a>

The Magento tabs widget has the same options as the jQuery <a href="http://api.jqueryui.com/tabs/" target="_blank">Tabs Widget</a>, plus several custom options that are discussed in the sections that follow.

<div class="bs-callout bs-callout-info" id="info">
  <p>Because Magento supports <a href="http://blog.jqueryui.com/2012/11/jquery-ui-1-9-2/" target="_blank">jQuery UI 1.9.2</a>, widget options available in later versions might be unavailable.</p>
</div>

<h4 id="fedg_tabs_options-spinner">spinner</h4>

Whether a spinner is displayed on a tab when the tab content is loading using Ajax.

**Type**: Boolean

**Default value**: `false`

<h4 id="fedg_tabs_options-destination">destination</h4>

All tabs in the Magento Admin specific behavior. When a page is rendered, all tab pages are in the tabs container, but on tabs initialization all tab pages should be moved to another container (form). `destination` is a selector of the element that specifies to which container the tab page will be moved.

**Type**: String

<h4 id="fedg_tabs_options-ajaxOptions">ajaxOptions</h4>

Additional data for loading tabs content using Ajax.

**Type**: Object
**Structure**:

<pre>ajaxOptions: {
    / jQuery ajax setting /
}</pre>

**Default value**:

<pre>ajaxOptions: {
    data: {
        isAjax: true,
        form_key: typeof FORM_KEY !== 'undefined' ? FORM_KEY : null
    }
}</pre>

<h4 id="fedg_tabs_options-tabIdArgument">tabIdArgument</h4>

The name of the argument (in the address line) to define active tab.

**Type**: String
**Default value**: `tab`

<h4 id="fedg_tabs_options-tabsBlockPrefix">tabsBlockPrefix</h4>

Prefix for tab ID's.

**Type**: String

<h4 id="fedg_tabs_options-shadowTabsShadow">shadowTabsShadow</h4>

shadowTabsShadow tabs load in the background.

**Type**: Object

**Structure**:

<pre>shadowTabs: {
    {tabId}:[
        {shadowTabId1},
        {shadowTabId2},
        ...
    ],
    ...
}</pre>

<h2 id="fedg_tabs_events-methods">Events and methods for the tabs widget</h2>

The Magento tabs widget has the same events and methods as the jQuery <a href="http://api.jqueryui.com/tabs/" target="_blank">Tabs Widget</a>, plus custom events that are discussed in this section.

<div class="bs-callout bs-callout-info" id="info">
  <p>Because Magento supports <a href="http://blog.jqueryui.com/2012/11/jquery-ui-1-9-2/" target="_blank">jQuery UI 1.9.2</a>, widget options available in later versions might be unavailable.</p>
</div>

The tabs widget is subscribed to the following events:

*	`changed`&mdash;Can be triggered by a change in the value of a field on a tab page. When the event is triggered, the tabs widget processes it and displays the "changed" icon in the tab page.
*	`highlight.validate`&mdash;Triggered by a field validation error. The tabs displays an error icon on the tab page.
*	`focusin`&mdash;Used to open a tab with the first invalid field highlighted. When the event is triggered on a field in a hidden tab panel, the tabs widget opens this hidden panel.
*	`beforeSubmit`&mdash;Listens for the `beforeSubmit` event and adds active tab ID to the event data.


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widgets-about.html">Magento jQuery widgets</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-calendar.html">jQuery calendar widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-loader.html">jQuery loader widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-translate-inline.html">jQuery translateInline widget</a>
*	<a href="{{ site.gdeurl }}coding-standards/code-standard-jquery-widgets.html">jQuery widget coding standard</a>