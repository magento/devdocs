---
layout: howtom2devgde_chapters_fedg
title: Using the Magento Calendar jQuery Plug-In
---
 
<h1 id="fedg_using-ui-lib">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/javascript/jquery-plugin-calendar.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_jquery-widget_calendar-overview">About the Calendar jQuery Widget</h2>

The Calendar widget is a customized <a href="http://api.jQueryui.com/datepicker/" target="_blank">jQuery UI Datepicker widget</a> that enables you to select a data using a pop-up or an in-line calendar. Calendar is also responsible for:

*	Merging global configuration with the options which are passed from PHP when Calendar is initialized.
*	Taking into account server time zone offset.
*	Converting date and time formats to avoid inconsistency in Zend Date format and Datepicker format.
*	Making the calendar initialization easier.
*	The Calendar widget source is `[your Magento install dir]/pub/lib/mage/calendar.js`.


#### Related Topics:

