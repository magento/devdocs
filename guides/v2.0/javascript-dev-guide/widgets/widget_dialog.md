---
layout: default
group: jsdg
subgroup: 3_Widgets
title: DropdownDialog widget
menu_order: 6
menu_title: DropdownDialog widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_dialog.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_dialog.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_dialog.html
---
<h2>Overview</h2>
Magento dropdownDialog widget is a customization of the standard <a href="http://api.jqueryui.com/dialog/">jQuery UI Dialog</a>. As extra functionality it implements the following:
<ul>
<li>triggering event for opening</li>
<li>delaying to automatically close the drop-down on mouse out</li>
<li>clicking outside the area closes the drop-down</li>
</ul>

The dropdownDialog widget source is located in <a href="{{site.mage2000url}}lib/web/mage/dropdown.js" target="_blank">lib/web/mage/dropdown.js</a>.

<h2 id="dialog_init">Initialize the dropdownDialog widget</h2>

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{page.baseurl}}javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

<h2 id="dialog_options">Options</h2>
 
Magento customized Dialog widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">Query UI Dialog widget</a> options, plus several custom options:
<ul>
<li><a href="#d_autoPosition">autoPosition</a></li>
<li><a href="#d_autoSize">autoSize</a></li>
<li><a href="#d_closeOnClickOutside">closeOnClickOutside</a></li>
<li><a href="#d_closeOnMouseLeave">closeOnMouseLeave</a></li>
<li><a href="#d_createTitleBar">createTitleBar</a></li>
<li><a href="#d_defaultDialogClass">defaultDialogClass</a></li>
<li><a href="#d_dialogContentClass">dialogContentClass</a></li>
<li><a href="#d_parentClass">parentClass</a></li>
<li><a href="#d_triggerClass">triggerClass</a></li>
<li><a href="#d_triggerEvent">triggerEvent</a></li>
<li><a href="#d_triggerTarget">triggerTarget</a></li>
</ul>

Description of each option follows.

<h3 id="d_autoPosition"><code>autoPosition</code></h3>
Specifies if the <a href="http://api.jqueryui.com/dialog/#option-position" target="_blank"><code>position</code></a> option is used for calculating the drop-down offset. 

If set to `false` (default value), then `position` rules are not used and the drop-down is positioned under the element for which the widget is initialized. Otherwise the drop-down offset is calculated using the `position` rules.  

**Type**: Boolean

**Default value**: `false`


<h3 id="d_autoSize"><code>autoSize</code></h3>

Specifies if the size of the drop-down is defined by widget options (<a href="http://api.jqueryui.com/dialog/#option-height" target="_blank">height</a>, <a href="http://api.jqueryui.com/dialog/#option-width" target="_blank">width</a>, <a href="http://api.jqueryui.com/dialog/#option-minHeight" target="_blank">minHeight</a>, <a href="http://api.jqueryui.com/dialog/#option-minWidth" target="_blank">minWidth</a>).

**Type**: Boolean

**Default value**: `false`


<h3 id="d_closeOnMouseLeave"><code>closeOnMouseLeave</code></h3>
Specifies if the drop-down is closed when mouse pointer is moved out.

**Type**: Boolean

**Default value**: `true`

<h3 id="d_closeOnClickOutside"><code>closeOnClickOutside</code></h3>
Specifies if the drop-down is closed on mouse click outside the drop-down.

**Type**: Boolean

**Default value**: `true`

<h3 id="d_createTitleBar"><code>createTitleBar</code></h3>
Defines if the <a href="http://api.jqueryui.com/dialog/#option-title" target="_blank">title</a> option is used for displaying the title bar.

**Type**: Boolean

**Default value**: `false`

<h3 id="d_defaultDialogClass"><code>defaultDialogClass</code></h3>
Class that is added to the drop-down, when it gets initialized.


**Type**: String

**Default value**: `mage-dropdown-dialog`

<h3 id="d_dialogContentClass"><code>dialogContentClass</code></h3>
Class that is added/removed on drop-down content when it gets opened/closed.

**Type**: String

**Default value**: `null`

<h3 id="d_parentClass"><code>parentClass</code></h3>
Class that is added/removed for the dropdown parent, when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

<h3 id="d_triggerClass"><code>triggerClass</code></h3>
Class that is added/removed on the trigger element when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

<h3 id="d_triggerEvent"><code>triggerEvent</code></h3>
Name of the event that triggers the `open()` function for drop-down.

**Type**: String

**Default value**: `click`


<h3 id="d_triggerTarget"><code>triggerTarget</code></h3>
Element that triggers the drop-down.

**Type**: 

- String
- jQuery object

**Default value**: `null`


<h3 id="d_timeout"><code>timeout</code></h3>
The number of milliseconds until the dropdown is closed after mouse pointer moves out.

**Type**: Number

**Default value**: 500


<h2 id="dialog_methods">Methods</h2>
Magento customized dropdownDialog widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">Query UI Dialog widget</a> methods, though some of them are customized. 


Customized public methods:
<ul>
<li><a href="#d_open">open()</a></li>
<li><a href="#d_close">close()</a></li>
</ul>

<h3 id="d_open"><code>open()</code></h3>
Beside default functionality, this method calls the `_mouseLeave()` and `_mouseEnter()` functions, adds classes on trigger and drop-down parent, and binds the close on mouse click outside drop-down to the `<body>` element.

<h3 id="d_close"><code>close()</code></h3>
Beside default functionality, this method removes the classes from trigger and drop-down parent and clears the timeout if the latter exists.

