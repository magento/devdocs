---
layout: default
group: fedg
subgroup: Javascript
title: Magento dropdownDialog widget
menu_order: 3
menu_title: Magento dropdownDialog widget
github_link: frontend-dev-guide/javascript/widget_dialog.md
---
<p class="q">дроп даун с валютами, языками, product detailed page MAP</p>
<h2>Overview</h2>
Magento dropdownDialog widget is a customization of the standard <a href="http://api.jqueryui.com/dialog/">jQuery UI Dialog</a>. As extra functionality it implements the following:
<ul>
<li>triggering event for opening</li>
<li>delay to automatically close the dropdown on mouse out</li>
<li>clicking outside the area closes the dropdown</li>
</ul>

<img src="{{site.baseurl}}common/images/"/>
The Dropdown  widget source is located in <a href="{{site.baseurl}}lib/web/mage/dropdown.js" target="_blank">lib/web/mage/dropdown.js</a>.

<h2>Initialization</h2>

Generally the dropdown widget is instantiated like follows:
<pre>
$("#dialog_id").dropdownDialog();
</pre>
Where <code>#dialog_id</code> is the element's selector

Widget can be instantiated with options:
$("#dialog_id").dropdownDialog({
    appendTo :".column.main",
    dialogContentClass : 'active',
    timeout: "2000",
    autoPosition: true,
    "dialogClass" : "popup"
});

Widget instantiation using data attributes:
<div id="dialog" data-mage-init='{"dropdownDialog":{}}'>

Widget instantiated using data attributes with options passed:
<div id="dialog" data-mage-init='{"dropdownDialog":{"appendTo":"[data-block=minicart]", "triggerTarget":".showcart", "timeout": "2000", "triggerClass":"active", "parentClass":"active"}}'/>

<h2>Options</h2>
 
Magento customized Dialog widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">Query UI Dialog widget</a> options, plus several custom options:
<ul>
<li><a href="#d_triggerEvent">triggerEvent</a></li>
<li><a href="#d_triggerClass">triggerClass</a></li>
<li><a href="#d_parentClass">parentClass</a></li>
<li><a href="#d_triggerTarget">triggerTarget</a></li>
<li><a href="#d_defaultDialogClass">defaultDialogClass</a></li>
<li><a href="#d_dialogContentClass">dialogContentClass</a></li>
<li><a href="#d_shadowHinter">shadowHinter</a></li>
<li><a href="#d_closeOnMouseLeave">closeOnMouseLeave</a></li>
<li><a href="#d_closeOnClickOutside">closeOnClickOutside</a></li>

<li><a href="#d_timeout">timeout</a></li>

<li><a href="#d_createTitleBar">createTitleBar</a></li>
<li><a href="#d_autoPosition">autoPosition</a></li>
<li><a href="#d_autoSize">autoSize</a></li>
</ul>

<h3 id="#d_triggerEvent">triggerEvent</h3>
Specifies the event which will trigger the open function for dropdown.
Type: String
Default value: click
<h3 id="#d_triggerClass">triggerClass</h3>
Specifies the class that will be added/removed on trigger when dropdown gets open/close.
Type: String
Default value: null
<h3 id="#d_parentClass">parentClass</h3>
Specifies the class that will be added/removed on dropdown parent when it(dropdown) gets open/close.
Type: String
Default value: null
<h3 id="#d_triggerTarget">triggerTarget</h3>
Specifies the handler which will be triggered for opening the dropdown.
Type: String
Default value: null
<h3 id="#d_defaultDialogClass">defaultDialogClass</h3>
Specifies the class that will be added to the dialog when gets initialized.
Type: String
Default value: mage-dropdown-dialog
<h3 id="#d_dialogContentClass">dialogContentClass</h3>
Specifies the class that will be added/removed on dropdown content when it(dropdown) gets open/close.
Type: String
Default value: null
<h3 id="#d_shadowHinter">shadowHinter</h3>
<p class="q">plz help to describe</p>
<h3 id="#d_closeOnMouseLeave">closeOnMouseLeave</h3>
Specifies if the dropdown will be close on mouse out.
Type: Boolean
Default value: true
<h3 id="#d_closeOnClickOutside">closeOnClickOutside</h3>
Specifies if the dropdown will be close on click outside.
Type: Boolean
Default value: true


<h3 id="#d_timeout">timeout</h3>
The number of milliseconds until the dropdown will be closed after mouse out
Type: Number
Default value: 500

<h3 id="#d_createTitleBar">createTitleBar</h3>
<p class="q">plz help to describe</p>

<h3 id="#d_autoPosition">autoPosition</h3>
<p class="q">plz help to describe</p>

<h3 id="#d_autoSize">autoSize</h3>
<p class="q">plz help to describe</p>

<h2>Methods</h2>
Magento customized Dropdown widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">Query UI Dialog widget</a> methods, plus several custom methods:

New
<ul>
<li><a href="#d_mouseEnter">mouseEnter()</li></a>
<li><a href="#d_mouseLeave">mouseLeave()</li></a>
</ul>

Customized
<ul>
<li><a href="#d_create">_create()</a></li>
<li><a href="#d_open">open()</a></li>
<li><a href="#d_close">close()</a></li>
<li><a href="#d_position">_position()</a></li>
<li><a href="#d_createTitleBar">_createTitleBar()</a></li>
<li><a href="#d_size">_size()</a></li>
</ul>

<h3 id="#d_mouseEnter">mouseEnter()</h3>
This function prevents the dropdown to be closed by clearing the timeout set on the mouseLeave method when mouse enters on the specified object area.
Param: DOM object
Visibility: private

<h3 id="#d_mouseLeave">mouseLeave()</h3>
This function closes the dropdown with custom delay if the mouse leaves the parameter area.
Param: DOM object
Visibility: private

<h3 id="#d_create">_create()</h3>
Beside default functionality, this method sets the trigger for the opener handler. 
<h3 id="#d_open">open()</h3>
Beside default functionality, this method calls the mouseLeave and mouseEnter functions, adds classes on trigger and dropdown parent, and binds the body to close the dropdown when click outside the modal.
<h3 id="#d_close">close()</h3>
Beside default functionality, this method removes the classes from trigger and dropdown parent and clears the timeout if exists.

<p class="q"></p>
<h3 id="#d_position">_position()</h3>
The default functionality can be prevented from being executed  by setting the autoPosition option to false.
<h3 id="#d_createTitleBar">_createTitleBar()</h3>
The default functionality can be prevented from being executed  by setting the createTitleBar option to false.
<h3 id="#d_size">_size()</h3>
The default functionality can be prevented from being executed  by setting the autoSize option to false.