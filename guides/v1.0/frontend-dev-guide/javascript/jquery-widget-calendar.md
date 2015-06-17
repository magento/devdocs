---
layout: default
group: javascript
subgroup: JQuery widget details
title: Calendar widget
menu_title: Calendar widget
menu_order: 3
github_link: frontend-dev-guide/javascript/jquery-widget-calendar.md
---

<h2 id="fedg_jquery-widget_calendar-overview">Overview</h2>

The Calendar widget is a customized jQuery <a href="http://api.jQueryui.com/datepicker/" target="_blank">Datepicker Widget</a> that enables you to select a data using a pop-up or an in-line calendar. Calendar is also responsible for:

*	Merging the <a href="#fedg_calendar_config">global configuration</a> with the options that are passed from PHP when Calendar is initialized.
*	Taking into account server time zone offset.
*	Converting date and time formats to avoid inconsistency in Zend Date format and Datepicker format.
*	Making the calendar initialization easier.
*	The Calendar widget source is <a href="{{site.mage2000url}}lib/web/mage/calendar.js">lib/web/mage/calendar.js</a>.

<h2 id="fedg_calendar_init">Initialize the calendar widget</h2>

Example:

<pre>
   $("#calendar_id").calendar({
      dateFormat: "M/d/yy",
      showsTime: true,
      timeFormat: "h:mm a",
      buttonImage: "image.gif",
      buttonText: "Select Date"
   })
</pre>

<h2 id="fedg_calendar_config">Configure the calendar widget</h2>

The calendar widget's *global configuration* is a set of default options that are applied when each calendar instance is initialized. It includes the following:

*	Translations for days, months, and control buttons
*	Date and time format
*	Animation settings
*	Calendar pop-up mode
*	Server time zone offset

Global configuration for calendar is stored in a jQuery object as a hash of properties. Having global configuration set enables you to specify one time all translations and default options, and use it for all instances of calendar, and it enables usage of inline translation for the calendar. During initialization, the calendar widget merges the hash of options from the global configuration, and the options which are transferred from PHP, and then passes the merged options to datepicker.

<pre>require([
  'jquery',
  'mage/calendar'
], function ( $ ) {
  $.extend(true, $, {
    calendarConfig: { ... }
  });
});
</pre>

<p class="q">what is this code sample?A: calendar configuration </p>

<h2 id="fedg_calendar_options">Options, methods, and events</h2>

<p>Most options, methods, and events for the calendar widget correspond to the jQuery <a href="http://api.jqueryui.com/datepicker/" target="_blank">Datepicker Widget</a> options.</p>

<div class="bs-callout bs-callout-info" id="info">
  <p>Because Magento supports <a href="http://blog.jqueryui.com/2012/11/jquery-ui-1-9-2/" target="_blank">jQuery UI 1.9.2</a>, widget options available in later versions might be unavailable.</p>
</div>
