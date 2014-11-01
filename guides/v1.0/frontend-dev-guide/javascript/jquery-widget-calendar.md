---
layout: howtom2devgde_chapters_fedg
title: jQuery calendar widget
---

<h1 id="fedg_jquery-calendar-widget">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/javascript/jquery-widget-calendar.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_jquery-widget_calendar-overview">About the Calendar jQuery Widget</h2>

The Calendar widget is a customized <a href="http://api.jQueryui.com/datepicker/" target="_blank">jQuery UI Datepicker widget</a> that enables you to select a data using a pop-up or an in-line calendar. Calendar is also responsible for:

*	Merging the <a href="#fedg_calendar_config">global configuration</a> with the options that are passed from PHP when Calendar is initialized.
*	Taking into account server time zone offset.
*	Converting date and time formats to avoid inconsistency in Zend Date format and Datepicker format.
*	Making the calendar initialization easier.
*	The Calendar widget source is `[your Magento install dir]/pub/lib/mage/calendar.js`.

<h2 id="fedg_calendar_init">Initializing the Calendar Widget</h2>

Example:

<pre>(function( $ ) {
   $("#calendar_id").calendar({
      dateFormat: "M/d/yy",
      showsTime: true,
      timeFormat: "h:mm a",
      buttonImage: "image.gif",
      buttonText: "Select Date"
   })
})(jQuery)</pre>

<h2 id="fedg_calendar_config">Calendar Global Configuration</h2>

The calendar widget's *global configuration* is a set of default options that are applied when each calendar instance is initialized. It includes the following:

*	Translations for days, months, and control buttons
*	Date and time format
*	Animation settings
*	Calendar pop-up mode
*	Server time zone offset

Global configuration for Calendar is stored in a jQuery object as a hash of properties. Having global configuration set enables you to specify one time all translations and default options, and use it for all instances of Calendar, and it enables usage of inline translation for the calendar. During initialization, the calendar widget merges the hash of options from the global configuration, and the options which are transferred from PHP, and then passes the merged options to Datepicker.

<pre>(function( $ ) {
$.extend(true, $, {
calendarConfig: {
...l
}
});
})( jQuery );</pre>

<h2 id="fedg_calendar_options">Calendar Widget Options, Methods, and Events</h2>

Calendar widget options, methods, and events mostly coincide with the <a href="http://api.jqueryui.com/datepicker/" target="_blank">jQuery UI Datepicker options</a>.

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Because Magento supports <a href="http://blog.jqueryui.com/2012/11/jquery-ui-1-9-2/" target="_blank">jQuery UI 1.9.2</a>, widget options available in later versions might be unavailable.</p></span>
</div>

#### Related topics

*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widgets-about.html">Magento jQuery widgets</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-loader.html">jQuery Loader widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-tabs.html">jQuery Tabs widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-translate-inline.html">jQuery TranslateInline widget</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/javascript/jquery-widget-standard.html">jQuery widget coding standard</a>

