---
layout: howtom2devgde_chapters_fedg
title: Magento jQuery Widget Coding Standards
---
 
<h1 id="fedg_using-ui-lib">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/javascript/jquery-widget-coding-stnd.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_jq-widget-coding-stnd_overview">About Magento jQuery Coding Standards</h2>

Magento 2 system uses the <a href="http://jqueryui.com/widget/" target="_blank">jQuery UI Widget Factory</a> library for implementing user interface controls in JavaScript. Magento has developed a standard for widget implementing, which is mandatory for Magento 2 core developers. This article presents those requirements of the standard, which are recommended for 3rd-party Magento 2 developers. Some parts of Magento 2 code may not comply with the standard, but we are working to gradually improve this. 

The key words "must", "must not", "required", "shall", "shall not", "should", "should not", "recommended", "may", and "optional" in this document are to be interpreted as described in <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a>. 

All jQuery UI widgets and interactions are built on a simple, reusable base&mdash;the <a href="http://jqueryui.com/widget/" target="_blank">jQuery UI Widget Factory</a>. The factory provides a flexible base for building complex, stateful plugins with a consistent API. It is designed not only for plug-ins that are part of jQuery UI, but for general usage by developers who want to create object-oriented components without reinventing common infrastructure.

For more information, see the <a href="http://api.jqueryui.com/jQuery.widget/" target="_blank">jQuery Widget API documentation</a>.


<h2 id="fedg_jq-widget-coding-stnd_naming">Naming Conventions</h2>
<div id="accordion">
<h3>Widget names must consist of one or more non-abbreviated English words</h3>

<div>
<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>(function($) {
$.widget('mage.accordion', $.ui.accordion, {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
		<td><pre>(function($) {
   $.widget('mage.ak123', $.ui.accordion, {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
	</tr>
	
	</tbody>
</table>
</div>

<h3>Widget names must be formatted in camelCase</h3>

<div>
<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>(function($) {
   $.widget('mage.vdeHistoryToolbar', {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
		<td><pre>(function($) {
   $.widget('mage.vde_historyToolbar', {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
	</tr>
	
	</tbody>
</table>
</div>

<h3>Verbosity is generally encouraged</h3>
<div>
<p>Widget names should be as verbose as needed to fully describe their purpose and behavior.</p>

<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>(function($) {
   "use strict";
 
   $.widget('mage.advancedEventTrigger', $.ui.button, {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
		<td><pre>(function($) {
   "use strict";
 
   $.widget('ui.button', $.ui.button, {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
	</tr>
	
	</tbody>
</table>
</div>

<h2 id="fedg_widget-coding-stnd_instant">jQuery Widget Instantiation and Resources</h2>

<h3>You must use the <a href="{{ site.baseurl }}guides/m2fedg/v1.0.0.0/javascript/js-mage-plugin.html" target="_blank">Mage plug-in</a> to instantiate a widget or define resources for a widget</h3>


<h3>Verbosity is generally encouraged</h3>
<div>
<p>Widget names should be as verbose as needed to fully describe their purpose and behavior.</p>

<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>(function($) {
   "use strict";
 
   $.widget('mage.advancedEventTrigger', $.ui.button, {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
		<td><pre>(function($) {
   "use strict";
 
   $.widget('ui.button', $.ui.button, {
      // ... My custom code ...
   });
}) (jQuery);</pre></td>
	</tr>
	
	</tbody>
</table>
</div>

</div>



