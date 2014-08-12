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
</div>

<h2 id="fedg_widget-coding-stnd_instant">jQuery Widget Instantiation and Resources</h2>
<p>You must use the <a href="{{ site.baseurl }}guides/m2fedg/v1.0.0.0/javascript/js-mage-plugin.html" target="_blank">Mage plug-in</a> to instantiate a widget or define resources for a widget</p>
<div id="accordion2">
<h3>Additional JavaScript files used as resources by a widget</h3>
<div>
<p>Additional JavaScript files used as resources must be dynamically loaded using the <code>$.mage.components()</code> method and must not be included in the <code>&lt;head></code> block.</p>
<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>
(function($) {
    "use strict";
    $.mage.components({
        validation: [
            '<?php echo $this->getViewFileUrl('jquery/jquery.validate.js') ?>',
            '<?php echo $this->getViewFileUrl('mage/translate.js') ?>',
            '<?php echo $this->getViewFileUrl('mage/validation.js') ?>',
            '<?php echo $this->getViewFileUrl('mage/backend/validation.js') ?>'
        ] /* ... */
    });
})(jQuery);</pre></td>
		<td><pre>&lt;layout>
    &lt;default>
        &lt;block type="Mage_Adminhtml_Block_Page" name="root" output="1" template="admin/page.phtml">
            &lt;block type="Mage_Adminhtml_Block_Page_Head" name="head" as="head" template="page/head.phtml">
                &lt;action method="addJs">&lt;file>jquery/jquery.validate.js&lt;/file>&lt;/action>
                &lt;action method="addJs">&lt;file>mage/translate.js&lt;/file>&lt;/action>
                &lt;action method="addJs">&lt;file>mage/validation.js&lt;/file>&lt;/action>
                &lt;action method="addJs">&lt;file>mage/backend/validation.js&lt;/file>&lt;/action>
                ...
            &lt;/block>
        &lt;/block>
    &lt;/default>
&lt;/layout></pre></td>
	</tr>
	
	</tbody>
</table>
</div>

<h3>You must use <code>$.mage.extend()</code> to extend an existing set of widget resources</h3>
<div>
<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>
&lt;script type="text/javascript">
(function($) {
    $.mage
        .extend('myForm', 'form',
            '&lt;?php echo $this->getViewFileUrl('Enterprise_Cms::page/js/form.js') ?>')
        .extend('validation', 'validation',
            '&lt;?php echo $this->getViewFileUrl('Enterprise_Cms::page/js/validation.js') ?>');
})(jQuery);
&lt;/script></pre></td>
		<td><pre>&lt;layout>
    &lt;default>
        &lt;block type="Mage_Adminhtml_Block_Page" name="root" output="1" template="admin/page.phtml">
            &lt;block type="Mage_Adminhtml_Block_Page_Head" name="head" as="head" template="page/head.phtml">
                &lt;action method="addJs">&lt;file>Enterprise_Cms::page/js/form.js&lt;/file>&lt;/action>
                &lt;action method="addJs">&lt;file>Enterprise_Cms::page/js/validation.js&lt;/file>&lt;/action>
            &lt;/block>
        &lt;/block>
    &lt;/default>
&lt;/layout></pre></td>
	</tr>
	
	</tbody>
</table>
</div>

<h3>You must instantiate widgets using the <code>data-mage-init</code> attribute</h3>
<div>
<p><strong>Note</strong>: You can use the <code>.mage()</code> plugin to instantiate widgets that use callback methods.</p>
<p>Benefits:</p>
<ul><li>You leverage benefits of <code>$.mage.extend()</code> and <code>$.mage.components()</code></li>
<li>Using <code>data-mage-init</code> minimizes inline JavaScript code footprint.</li>
<li>You can modify widget initialization parameters.</li></ul>
<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even">
		<td><pre>&lt;form data-mage-init="{form:[], validation:{ignore:':hidden'}}">&lt;/form></pre>
		<pre>&lt;script type="text/javascript">
(function($) {
    $('selector').mage('dialog', {
        close: function(e) {
            $(this).dialog('destroy');
        }
    });
})(jQuery);
&lt;/script></pre></td>
		<td><pre>&lt;script type="text/javascript">
(function($) {
    $('[data-role="form"]')
        .form()
        .validation({
            ignore: ':hidden'
        });
})(jQuery);
&lt;/script></pre></td>
	</tr>
	
	</tbody>
</table>
</div>

<h3>Methods and widgets must not be declared using inline JavaScript</h3>
<div>
<p><strong>Note</strong>: Callback methods may be declared inline.</p>
<table>
	<tbody>
		<tr class="table-headings">
			<th>Correct</th>
			<th>Incorrect</th>
		</tr>
	<tr class="even"><td>
		<pre>$('selector').mage('dialog', {
    close: function(e) {
        $(this).dialog('destroy');
    }
});</pre>
<pre>$('selector').mage('dialog').on('dialogclose', {
    $(this).dialog('destroy');
});</pre>
<pre>$.widget('mage.dialog', $.ui.dialog, {
    close: function() {
        this.destroy();
    }
});</pre>
<pre>&lt;script type="text/javascript">
(function($) {
    $.mage
        .extend('dialog', 'dialog',
            '&lt;?php echo $this->getViewFileUrl('Enterprise_\*Module\*::page/js/dialog.js') ?>')
})(jQuery);
</script></pre></td>
		<td><pre>$('selector').dialog();
$('selector')
    .find('.ui-dialog-titlebar-close')
    .on('click', function() {
        $('selector').dialog('destroy');
    });</pre></li></ul></td>
	</tr>
	
	</tbody>
</table>
</div>
</div>

<h2 id="fedg_widget-coding-stnd_devgde">jQuery Widget Development Guidelines</h2>





