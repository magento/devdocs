---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Calendar widget
menu_title: Calendar widget
menu_order: 3
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_calendar.html
---

## Overview   {#fedg_jquery-widget_calendar-overview}

The Calendar widget is a customized {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} <a href="http://api.jQueryui.com/datepicker/" target="_blank">Datepicker Widget</a> that enables selecting a data using a pop-up or an in-line calendar. Calendar is also responsible for:

*	Merging the <a href="#fedg_calendar_config">global configuration</a> with the options that are passed from {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} when Calendar is initialized.
*	Taking into account server time zone offset.
*	Converting date and time formats to avoid inconsistency in Zend Date format and Datepicker format.
*	Making the calendar initialization easier.
*	The Calendar {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/calendar.js" target="_blank">lib/web/mage/calendar.js</a>.

## Initialize the calendar widget   {#fedg_calendar_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

## Configure the calendar widget   {#fedg_calendar_config}

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

## Options, methods, and events   {#fedg_calendar_options}

<p>Most options, methods, and events for the calendar widget correspond to the jQuery <a href="http://api.jqueryui.com/datepicker/" target="_blank">Datepicker Widget</a> options.</p>


