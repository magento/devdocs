---
group: javascript-developer-guide
subgroup: 3_Widgets
title: DropdownDialog widget
---

Magento dropdownDialog [widget](https://glossary.magento.com/widget) is a customization of the standard [jQuery UI Dialog](http://api.jqueryui.com/dialog/){:target="_blank"}. As extra functionality it implements the following:

-  triggering [event](https://glossary.magento.com/event) for opening
-  delaying to automatically close the drop-down on mouse out
-  clicking outside the area closes the drop-down

The dropdownDialog widget source is located in [lib/web/mage/dropdown.js].

## Initialize the dropdownDialog widget {#dialog_init}

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript] topic.

## Options {#dialog_options}

Magento customized Dialog widget has default [jQuery UI Dialog widget](http://api.jqueryui.com/dialog/){:target="_blank"} options, plus several custom options:

-  [autoPosition](#d_autoPosition)
-  [autoSize](#d_autoSize)
-  [autoOpen](#d_autoOpen)
-  [closeOnClickOutside](#d_closeOnClickOutside)
-  [closeOnMouseLeave](#d_closeOnMouseLeave)
-  [createTitleBar](#d_createTitleBar)
-  [defaultDialogClass](#d_defaultDialogClass)
-  [dialogContentClass](#d_dialogContentClass)
-  [parentClass](#d_parentClass)
-  [timeout](#d_timeout)
-  [triggerClass](#d_triggerClass)
-  [triggerEvent](#d_triggerEvent)
-  [triggerTarget](#d_triggerTarget)

Description of each option as follows below location.

### `autoPosition`   {#d_autoPosition}

Specifies if the [`position`] option is used for calculating the drop-down offset.

If set to `false` (default value), then `position` rules are not used and the drop-down is positioned under the element for which the widget is initialized. Otherwise the drop-down offset is calculated using the `position` rules.

**Type**: Boolean

**Default value**: `false`

### `autoOpen` {#d_autoOpen}

Specifies if the drop-down should open after page load.

**Type**: Boolean

**Default value**: `false`

### `autoSize` {#d_autoSize}

Specifies if the size of the drop-down is defined by widget options ([height], [width], [minHeight], [minWidth]).

**Type**: Boolean

**Default value**: `false`

### `closeOnMouseLeave` {#d_closeOnMouseLeave}
Specifies if the drop-down is closed when mouse pointer is moved out.

**Type**: Boolean

**Default value**: `true`

### `closeOnClickOutside` {#d_closeOnClickOutside}
Specifies if the drop-down is closed on mouse click outside the drop-down.

**Type**: Boolean

**Default value**: `true`

### `createTitleBar` {#d_createTitleBar}
Defines if the [title] option is used for displaying the title bar.

**Type**: Boolean

**Default value**: `false`

### `defaultDialogClass` {#d_defaultDialogClass}
Class that is added to the drop-down, when it gets initialized.

**Type**: String

**Default value**: `mage-dropdown-dialog`

### `dialogContentClass` {#d_dialogContentClass}
Class that is added/removed on drop-down content when it gets opened/closed.

**Type**: String

**Default value**: `null`

### `parentClass` {#d_parentClass}
Class that is added/removed for the dropdown parent, when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

### `triggerClass` {#d_triggerClass}
Class that is added/removed on the trigger element when the drop-down gets opened/closed.

**Type**: String

**Default value**: `null`

### `triggerEvent` {#d_triggerEvent}
Name of the event that triggers the `open()` function for drop-down.

**Type**: String

**Default value**: `click`

### `triggerTarget` {#d_triggerTarget}
Element that triggers the drop-down.

**Type**:

-  String
-  jQuery object

**Default value**: `null`

### `timeout` {#d_timeout}
The number of milliseconds until the dropdown is closed after mouse pointer moves out.

**Type**: Number

**Default value**: 500

## Methods {#dialog_methods}

Magento customized dropdownDialog widget has default [jQuery UI Dialog widget] methods, though some of them are customized.

Customized public methods:

-  [open()](#d_open)
-  [close()](#d_close)

### `open()` {#d_open}

Beside default functionality, this method calls the `_mouseLeave()` and `_mouseEnter()` functions, adds classes on trigger and drop-down parent, and binds the close on mouse click outside drop-down to the `<body>` element.

Invoke the open method:

```javascript
$("#element").dropdownDialog("open");
```

### `close()` {#d_close}

Beside default functionality, this method removes the classes from trigger and drop-down parent.Also clears the timeout if the latter exists.

Invoke the close method:

```javascript
$("#element").dropdownDialog("close");
```

## Code sample

The following example shows how to initialize the dropdown dialog widget and pass options during the initialization.
This example uses some CSS classes that are used for minicart.

```html
<div data-block="dropdown" class="minicart-wrapper">
    <button type="button" class="action" data-trigger="trigger">
        <span data-bind="i18n: 'Click Here'"></span>
    </button>
</div>
<div class="block block-minicart"
     data-mage-init='{
        "dropdownDialog": {
            "appendTo": "[data-block=dropdown]",
            "triggerTarget":"[data-trigger=trigger]",
            "timeout": 2000,
            "closeOnMouseLeave": false,
            "closeOnEscape": true,
            "autoOpen": true,
            "triggerClass": "active",
            "parentClass": "active",
            "buttons": []
        }
     }'>
    <div id="minicart-content-wrapper">
        Here is our content
    </div>
</div>
```

### Result

The result is a dropdown dialog and a button (_Click Here_) that opens the dialog.

![DropdownDialog Widget]({{ site.baseurl }}/common/images/widget/dropdown-dialog-widget-result.png)

[lib/web/mage/dropdown.js]: {{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/mage/dropdown.js
[Initialize JavaScript]: {{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html
[`position`]: http://api.jqueryui.com/dialog/#option-position
[height]: http://api.jqueryui.com/dialog/#option-height
[width]: http://api.jqueryui.com/dialog/#option-width
[minHeight]: http://api.jqueryui.com/dialog/#option-minHeight
[minWidth]: http://api.jqueryui.com/dialog/#option-minWidth
[title]: http://api.jqueryui.com/dialog/#option-title
[jQuery UI Dialog widget]: http://api.jqueryui.com/dialog/
