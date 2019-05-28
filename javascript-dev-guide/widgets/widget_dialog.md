---
group: javascript-developer-guide
subgroup: 3_Widgets
title: DropdownDialog widget
menu_order: 6
menu_title: DropdownDialog widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_dialog.html
---
## Overview

Magento dropdownDialog {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} is a customization of the standard <a href="http://api.jqueryui.com/dialog/" target="_blank">jQuery UI Dialog</a>. As extra functionality it implements the following:
<ul>
<li>triggering {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} for opening</li>
<li>delaying to automatically close the drop-down on mouse out</li>
<li>clicking outside the area closes the drop-down</li>
</ul>

The dropdownDialog widget source is located in <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/dropdown.js" target="_blank">lib/web/mage/dropdown.js</a>.

## Initialize the dropdownDialog widget   {#dialog_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">Initialize JavaScript</a> topic.

## Options   {#dialog_options}

 
Magento customized Dialog widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">jQuery UI Dialog widget</a> options, plus several custom options:
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

Description of each option as follows below location.

### `autoPosition`   {#d_autoPosition}

Specifies if the <a href="http://api.jqueryui.com/dialog/#option-position" target="_blank"><code>position</code></a> option is used for calculating the drop-down offset. 

If set to `false` (default value), then `position` rules are not used and the drop-down is positioned under the element for which the widget is initialized. Otherwise the drop-down offset is calculated using the `position` rules.  

**Type**: Boolean

**Default value**: `false`


### `autoSize`   {#d_autoSize}


Specifies if the size of the drop-down is defined by widget options (<a href="http://api.jqueryui.com/dialog/#option-height" target="_blank">height</a>, <a href="http://api.jqueryui.com/dialog/#option-width" target="_blank">width</a>, <a href="http://api.jqueryui.com/dialog/#option-minHeight" target="_blank">minHeight</a>, <a href="http://api.jqueryui.com/dialog/#option-minWidth" target="_blank">minWidth</a>).

**Type**: Boolean

**Default value**: `false`


### `closeOnMouseLeave`   {#d_closeOnMouseLeave}

Specifies if the drop-down is closed when mouse pointer is moved out.

**Type**: Boolean

**Default value**: `true`

### `closeOnClickOutside`   {#d_closeOnClickOutside}

Specifies if the drop-down is closed on mouse click outside the drop-down.

**Type**: Boolean

**Default value**: `true`

### `createTitleBar`   {#d_createTitleBar}

Defines if the <a href="http://api.jqueryui.com/dialog/#option-title" target="_blank">title</a> option is used for displaying the title bar.

**Type**: Boolean

**Default value**: `false`

### `defaultDialogClass`   {#d_defaultDialogClass}

Class that is added to the drop-down, when it gets initialized.


**Type**: String

**Default value**: `mage-dropdown-dialog`

### `dialogContentClass`   {#d_dialogContentClass}

Class that is added/removed on drop-down content when it gets opened/closed.

**Type**: String

**Default value**: `null`

### `parentClass`   {#d_parentClass}

Class that is added/removed for the dropdown parent, when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

### `triggerClass`   {#d_triggerClass}

Class that is added/removed on the trigger element when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

### `triggerEvent`   {#d_triggerEvent}

Name of the event that triggers the `open()` function for drop-down.

**Type**: String

**Default value**: `click`


### `triggerTarget`   {#d_triggerTarget}

Element that triggers the drop-down.

**Type**: 

- String
- {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} object

**Default value**: `null`


### `timeout`   {#d_timeout}

The number of milliseconds until the dropdown is closed after mouse pointer moves out.

**Type**: Number

**Default value**: 500

## Methods   {#dialog_methods}

Magento customized dropdownDialog widget has default <a href="http://api.jqueryui.com/dialog/" target="_blank">jQuery UI Dialog widget</a> methods, though some of them are customized. 


Customized public methods:
<ul>
<li><a href="#d_open">open()</a></li>
<li><a href="#d_close">close()</a></li>
</ul>

### `open()`   {#d_open}

Beside default functionality, this method calls the `_mouseLeave()` and `_mouseEnter()` functions, adds classes on trigger and drop-down parent, and binds the close on mouse click outside drop-down to the `<body>` element.

### `close()`   {#d_close}

Beside default functionality, this method removes the classes from trigger and drop-down parent.Also clears the timeout if the latter exists.

