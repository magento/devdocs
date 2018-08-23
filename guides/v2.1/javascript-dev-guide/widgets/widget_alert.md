---
group: jsdg
subgroup: 3_Widgets
title: Alert widget
---
## Overview {#alert_overview}

The Magento alert widget implements a modal pop-up window with a confirmation button. It extends the [Magento modal widget].

The alert widget source is [`<Magento_Ui_module_dir>/view/base/web/js/modal/alert.js`].

The widget can be used for implementing alert windows for both Admin and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. The design patterns for the pop-up modal windows in the Admin are described in the [Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]

## Initialize the alert widget {#alert_initialize}

The alert widget can be initialized with or without binding to a certain element.

**Example1**: initialization on an element

```javascript
$('#init_element').alert({
    title: 'Warning',
    content: 'Warning content',
    actions: {
        always: function(){}
    }
});
```

**Example2**: standalone initialization
```javascript
require([
    'Magento_Ui/js/modal/alert'
], function(alert) { // Variable that represents the `alert` function
 
    alert({
        title: 'Some title',
        content: 'Some content',
        actions: {
            always: function(){}
        }
    });
 
});
```

For details about how to initialize a widget in a`.phtml` template, refer to the [Javascript initialization] topic.

## Options {#alert_options}

The alert widget has the following options:

-   [actions]
-   [autoOpen]
-   [clickableOverlay]
-   [content]
-   [focus]
-   [title]

### `actions` {#alert_actions}
Widget callbacks.

**Type**: Object.

**Default value**: 
```javascript
actions: {
    always: function(){}
}
```

### autoOpen {#alert_autoopen}

Automatically open the alert window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

### clickableOverlay {#alert_clickableOverlay}

Close the alert window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`

### `content` {#alert_content}
The text displayed in the alert window.


**Type**: String.

### `focus` {#alert_focus}
The selector of the element to be in focus when the alert window opens.
If `focus` is not specified or set to empty string, the focus is on the close button. If focusing is not requried, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

### `title` {#alert_title}
The title of the alert window.


**Type**: String.

**Default value**: `''`

## Events {#alert_events}

The alert widget implements a single event: the `always` callback.

## Keyboard navigation {#alert_key_navigation}

The keyboard navigation for the alert windows is similar to the [navigation of the modal widget].


[Magento modal widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_modal.html
[`<Magento_Ui_module_dir>/view/base/web/js/modal/alert.js`]: {{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/modal/alert.js
[Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]: {{page.baseur}}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals
[Javascript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[actions]: #alert_actions
[autoOpen]: #alert_autoopen
[clickableOverlay]: #alert_clickableOverlay
[content]: #alert_content
[focus]: #alert_focus
[title]: #alert_title
[navigation of the modal widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_modal.html#key_navigation