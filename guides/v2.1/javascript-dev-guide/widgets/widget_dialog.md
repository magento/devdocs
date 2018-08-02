---
group: jsdg
subgroup: 3_Widgets
title: DropdownDialog widget
menu_order: 6
menu_title: DropdownDialog widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_dialog.md
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_dialog.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_dialog.html
---
## Overview
Magento dropdownDialog {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} is a customization of the standard [jQuery UI Dialog](http://api.jqueryui.com/dialog/" target="_blank). As extra functionality it implements the following:
<ul>
<li>triggering {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} for opening</li>
<li>delaying to automatically close the drop-down on mouse out</li>
<li>clicking outside the area closes the drop-down</li>
</ul>

The dropdownDialog widget source is located in [lib/web/mage/dropdown.js]({{ site.mage2000url }}lib/web/mage/dropdown.js" target="_blank).

## Initialize the dropdownDialog widget {#dialog_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.

## Options {#dialog_options}
 
Magento customized Dialog widget has default [jQuery UI Dialog widget](http://api.jqueryui.com/dialog/" target="_blank) options, plus several custom options:
<ul>
<li>[autoPosition](#d_autoPosition)</li>
<li>[autoSize](#d_autoSize)</li>
<li>[closeOnClickOutside](#d_closeOnClickOutside)</li>
<li>[closeOnMouseLeave](#d_closeOnMouseLeave)</li>
<li>[createTitleBar](#d_createTitleBar)</li>
<li>[defaultDialogClass](#d_defaultDialogClass)</li>
<li>[dialogContentClass](#d_dialogContentClass)</li>
<li>[parentClass](#d_parentClass)</li>
<li>[triggerClass](#d_triggerClass)</li>
<li>[triggerEvent](#d_triggerEvent)</li>
<li>[triggerTarget](#d_triggerTarget)</li>
</ul>

Description of each option as follows below location.

### <code>autoPosition</code> {#d_autoPosition}
Specifies if the [<code>position</code>](http://api.jqueryui.com/dialog/#option-position" target="_blank) option is used for calculating the drop-down offset. 

If set to `false` (default value), then `position` rules are not used and the drop-down is positioned under the element for which the widget is initialized. Otherwise the drop-down offset is calculated using the `position` rules.  

**Type**: Boolean

**Default value**: `false`


### <code>autoSize</code> {#d_autoSize}

Specifies if the size of the drop-down is defined by widget options ([height](http://api.jqueryui.com/dialog/#option-height" target="_blank), [width](http://api.jqueryui.com/dialog/#option-width" target="_blank), [minHeight](http://api.jqueryui.com/dialog/#option-minHeight" target="_blank), [minWidth](http://api.jqueryui.com/dialog/#option-minWidth" target="_blank)).

**Type**: Boolean

**Default value**: `false`


### <code>closeOnMouseLeave</code> {#d_closeOnMouseLeave}
Specifies if the drop-down is closed when mouse pointer is moved out.

**Type**: Boolean

**Default value**: `true`

### <code>closeOnClickOutside</code> {#d_closeOnClickOutside}
Specifies if the drop-down is closed on mouse click outside the drop-down.

**Type**: Boolean

**Default value**: `true`

### <code>createTitleBar</code> {#d_createTitleBar}
Defines if the [title](http://api.jqueryui.com/dialog/#option-title" target="_blank) option is used for displaying the title bar.

**Type**: Boolean

**Default value**: `false`

### <code>defaultDialogClass</code> {#d_defaultDialogClass}
Class that is added to the drop-down, when it gets initialized.


**Type**: String

**Default value**: `mage-dropdown-dialog`

### <code>dialogContentClass</code> {#d_dialogContentClass}
Class that is added/removed on drop-down content when it gets opened/closed.

**Type**: String

**Default value**: `null`

### <code>parentClass</code> {#d_parentClass}
Class that is added/removed for the dropdown parent, when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

### <code>triggerClass</code> {#d_triggerClass}
Class that is added/removed on the trigger element when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

### <code>triggerEvent</code> {#d_triggerEvent}
Name of the event that triggers the `open()` function for drop-down.

**Type**: String

**Default value**: `click`


### <code>triggerTarget</code> {#d_triggerTarget}
Element that triggers the drop-down.

**Type**: 

- String
- {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} object

**Default value**: `null`


### <code>timeout</code> {#d_timeout}
The number of milliseconds until the dropdown is closed after mouse pointer moves out.

**Type**: Number

**Default value**: 500


## Methods {#dialog_methods}
Magento customized dropdownDialog widget has default [jQuery UI Dialog widget](http://api.jqueryui.com/dialog/" target="_blank) methods, though some of them are customized. 


Customized public methods:
<ul>
<li>[open()](#d_open)</li>
<li>[close()](#d_close)</li>
</ul>

### <code>open()</code> {#d_open}
Beside default functionality, this method calls the `_mouseLeave()` and `_mouseEnter()` functions, adds classes on trigger and drop-down parent, and binds the close on mouse click outside drop-down to the `<body>` element.

### <code>close()</code> {#d_close}
Beside default functionality, this method removes the classes from trigger and drop-down parent.Also clears the timeout if the latter exists.

