---
group: jsdg
subgroup: 3_Widgets
title: Modal widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_modal.html
 - /guides/v1.0/frontend-dev-guide/javascript/widget_modal.html
---

## Overview {#modal_overview}

The Magento modal {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} implements a secondary window that opens on top of the main window. It contains the overlay and modal content. The modal widget configuration enables the following:

-   Configuring as popup or slide
-   Controlling stack of modal widgets
-   Setting buttons for action bar


The modal widget source is [`<Magento_Ui_module_dir>/view/base/web/js/modal/modal.js`].

The widget uses the following templates:

- [`<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-popup.html`] popup type template.
- [`<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-slide.html`] slide type template.

The design patterns for the modal pop-up windows in the Admin are described in the [Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.] 

## Initialize the modal widget {#modal_initialize}

To initialize the widget in your script, use the following general notation:
```javascript
$('#modal_content').modal({
    &lt;option1&gt;: &lt;value1&gt;,
    &lt;option2&gt;: &lt;value2&gt;,
    ...
});
```

For details about how to initialize the widget in a`.phtml` template, refer to the [Javascript initialization] topic.

## Options {#modal_options}

The modal widget has the following options:
-   [autoOpen](#modal_autoopen)
-   [buttons](#modal_buttons)
-   [clickableOverlay](#modal_clickableOverlay)
-   [focus](#modal_focus)
-   [innerScroll](#modal_innerScroll)
-   [modalClass](#modal_modalClass)
-   [modalLeftMargin](#modal_modalLeftMargin)
-   [responsive](#modal_responsive)
-   [title](#modal_title)
-   [type](#modal_type)

### autoOpen {#modal_autoopen}

Automatically open the modal window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

### `buttons` {#modal_buttons}
Array of buttons for action pane.

**Type**: Array 

**Structure**:
```javascript
buttons: [{
    text: '',
    class: '',
    click: function() {} //handler on button click
}]
```

**Default value**:
```javascript
buttons: [{
    text: 'Ok',
    class: '',
    click: function() {
        this.closeModal();
    }
}]
```

### clickableOverlay {#modal_clickableOverlay}

Close the modal window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`


### `focus` {#modal_focus}
Selector to focusing when a modal window opens or 'none' if focusing is not necessary.


**Type**: String 

**Default value**: `''`


### `innerScroll` {#modal_innerScroll}
Modal scroll position.

**Type**: Boolean 

**Default value**: `false`

### `modalClass` {#modal_modalClass}
Custom classes for modal window.

**Type**: String 

**Default value**: empty

### `modalLeftMargin` {#modal_modalLeftMargin}
Sets a margin between slide modal windows.

**Type**: Number 

**Default value**: 45

### `responsive` {#modal_responsive}
Turn popup modal window to slide panel on small screens. Available if the `type` option is set to `modal`.

**Type**: Boolean 

**Default value**: `false`

### `title` {#modal_title}
Translated title for popup window.

**Type**: String 

**Default value**: empty


### `type` {#modal_type}

The type of window: popup or slide.

**Type**: String 

**Default value**: `popup`

## Methods {#modal_methods}

The modal widget has the following methods:
-   [closeModal()](#modal_close)
-   [openModal()](#modal_open)

### `openModal()` {#modal_open}
Open the modal window.


### `closeModal()` {#modal_close}
Close the modal window.

## Events {#modal_events}

The modal widget is subscribed to the following events:
-   [closed](#modal_closed)
-   [opened](#modal_opened)

You can listen to these events in two ways:

Use jQuery's [`on`](http://api.jquery.com/on/) function:

```javascript
var modal = $( "#modal_content").modal({...});
modal.on( "modalclosed", function() {
    // Do some action when modal closed
});
```

Or assign a callback as a property when creating a modal instance:
```javascript
$('#modal_content').modal({
    ...
    closed: function(){
       // Do some action when modal closed
    }
});
```

### `closed` {#modal_closed}
Called when the modal window is closed.

### `opened` {#modal_opened}
Called when the modal window is opened.

### `always` {#modal_opened}
....

## Keyboard navigation {#key_navigation}

- the ESC key: close the current modal window
- the TAB key: set focus to the next focusable element (looped inside the modal window)
- the SHIFT+TAB keys combination: set focus to the previous focusable element (looped inside the modal window)


[`<Magento_Ui_module_dir>/view/base/web/js/modal/modal.js`]: {{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/modal/modal.js
[`<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-popup.html`]: {{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html
[`<Magento_Ui_module_dir>/view/base/web/templates/modal/modal-slide.html`]: {{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html
[Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]: {{page.baseurl}}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals
[Javascript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html