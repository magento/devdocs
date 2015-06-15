---
layout: default
group: fedg
subgroup: Javascript
title: DropdownDialog widget
menu_order: 3
menu_title: DropdownDialog widget
github_link: frontend-dev-guide/javascript/widget_dialog.md
---
<p class="q">currency, language drop-down, product detailed page MAP</p>
<h2>Overview</h2>
Magento dropdownDialog widget is a customization of the standard <a href="http://api.jqueryui.com/dialog/">jQuery UI Dialog</a>. As extra functionality it implements the following:
<ul>
<li>triggering event for opening</li>
<li>delaying to automatically close the drop-down on mouse out</li>
<li>clicking outside the area closes the drop-down</li>
</ul>

<img src="{{site.baseurl}}common/images/"/>
The Dropdown  widget source is located in <a href="{{site.baseurl}}lib/web/mage/dropdown.js" target="_blank">lib/web/mage/dropdown.js</a>.

<h2>Initialization</h2>

Generally the dropdownDialog widget is instantiated like follows:
<pre>
$("#dialog_id").dropdownDialog();
</pre>
Where <code>#dialog_id</code> is the element's selector.

For details about instantiating with options and instatiating using `data-*` attributes, see Widget instantion.
<!--ADDLINK-->

<h2 id="dialog_options">Options</h2>
 
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
Event that triggers the `open()` function for drop-down.

<p class="q">for drop-down or the dropdownDialog?</p>

**Type**: String

**Default value**: *"click"*

<p class="q">Do we need to describe widget initialization with options, like in collapsible?></p>

<h3 id="#d_triggerClass">triggerClass</h3>
Class that is added/removed on trigger when drop-down gets open/close.

**Type**: String

**Default value**: `null`

<h3 id="#d_parentClass">parentClass</h3>
Class that is added/removed for the dropdown parent, when the drop-down gets open/close.

**Type**: String

**Default value**: `null`

<h3 id="#d_triggerTarget">triggerTarget</h3>
Handler which is triggered for opening the drop-down.

**Type**: String

**Default value**: `null`

<h3 id="#d_defaultDialogClass">defaultDialogClass</h3>
Class that is added to the dialog when it gets initialized.

<p class="q">dialog and drop-down (in the previous options) are they different entities?</p>

**Type**: String

**Default value**: *"mage-dropdown-dialog"*

<h3 id="#d_dialogContentClass">dialogContentClass</h3>
Class that is added/removed on dropdown content when it(dropdown) gets open/close.

**Type**: String

**Default value**: `null`
<h3 id="#d_shadowHinter">shadowHinter</h3>
<p class="q">plz help to describe</p>

<h3 id="#d_closeOnMouseLeave">closeOnMouseLeave</h3>
Specifies if the drop-down is closed when mouse pointer is moved out.

**Type**: Boolean

**Default value**: `true`
<h3 id="#d_closeOnClickOutside">closeOnClickOutside</h3>
Specifies if the drop-down is closed on mouse click outside the drop-down.

**Type**: Boolean
**Default value**: `true`


<h3 id="#d_timeout">timeout</h3>
The number of milliseconds until the dropdown is closed after mouse pointer moves out.

**Type**: Number

**Default value**: 500

<h3 id="#d_createTitleBar">createTitleBar</h3>
<p class="q">plz help to describe</p>

<h3 id="#d_autoPosition">autoPosition</h3>
<p class="q">plz help to describe</p>

<h3 id="#d_autoSize">autoSize</h3>
<p class="q">plz help to describe</p>

<h2 id="dialog_methods">Methods</h2>
Magento customized Dropdown widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">Query UI Dialog widget</a> methods, though some of them are customized. 


Customized public methods:
<ul>
<li><a href="#d_open">open()</a></li>
<li><a href="#d_close">close()</a></li>
</ul>

<h3 id="#d_open">open()</h3>
Beside default functionality, this method calls the `_mouseLeave()` and `_mouseEnter()` functions, adds classes on trigger and drop-down parent, and binds the body to close the drop-down on mouse click outside the modal.

<p class="q">binds?</p>

<h3 id="#d_close">close()</h3>
Beside default functionality, this method removes the classes from trigger and drop-down parent and clears the timeout if the latter exists.

