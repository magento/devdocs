---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Calendar widget
menu_title: Calendar widget
menu_order: 3
version: 2.0
github_link: javascript-dev-guide/widgets/widget_calendar.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_calendar.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_calendar.html
---

<h2 id="fedg_jquery-widget_calendar-overview">Overview</h2>

The Calendar widget is a customized jQuery <a href="http://api.jQueryui.com/datepicker/" target="_blank">Datepicker Widget</a> that enables selecting a data using a pop-up or an in-line calendar. Calendar is also responsible for:

*	Merging the <a href="#fedg_calendar_config">global configuration</a> with the options that are passed from PHP when Calendar is initialized.
*	Taking into account server time zone offset.
*	Converting date and time formats to avoid inconsistency in Zend Date format and Datepicker format.
*	Making the calendar initialization easier.
*	The Calendar widget source is <a href="{{site.mage2000url}}lib/web/mage/calendar.js" target="_blank">lib/web/mage/calendar.js</a>.

<h2 id="fedg_calendar_init">Initialize the calendar widget</h2>

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{page.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

<h2 id="fedg_calendar_config">Configure the calendar widget</h2>

The calendar widget's *global configuration* is a set of default options that are applied when each calendar instance is initialized. It includes the following:

*	Translations for days, months, and control buttons
*	Date and time format
*	Animation settings
*	Calendar pop-up mode
*	Server time zone offset

Global configuration for calendar is stored in a jQuery object as a hash of properties. Having global configuration set enables specifying all translations and default options at once, and use it for all instances of calendar, and it enables usage of inline translation for the calendar. During initialization, the calendar widget merges the hash of options from the global configuration, and the options which are transferred from PHP, and then passes the merged options to datepicker. 

Example of setting global widget configuration follows:
<pre>require([
  'jquery',
  'mage/calendar'
], function ( $ ) {
  $.extend(true, $, {
    calendarConfig: { ... }
  });
});
</pre>


<h2 id="fedg_calendar_options">Options, methods, and events</h2>

<p>Most options, methods, and events for the calendar widget correspond to the jQuery <a href="http://api.jqueryui.com/datepicker/" target="_blank">Datepicker Widget</a> options.</p>


