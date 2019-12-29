---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Alert widget
---

The Magento alert widget implements a modal pop-up window with a confirmation button. It extends the [Magento confirmation widget] which in turn extends the [Magento modal widget].

The alert widget source is [`<Magento_Ui_module_dir>/view/base/web/js/modal/alert.js`].

The widget can be used for implementing alert windows for both Admin and [storefront](https://glossary.magento.com/storefront). The design patterns for the pop-up modal windows in the Admin are described in the [Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]

## Initialize the alert widget {#alert_initialize}

The alert widget can be initialized with or without binding to a certain element.

**Example1**: initialization on an element

```javascript
$('#init_element').alert({
    title: $.mage.__('Warning'),
    content: $.mage.__('Warning content'),
    actions: {
        always: function(){}
    }
});
```

**Example2**: standalone initialization

```javascript
require([
    'Magento_Ui/js/modal/alert'
    'jquery'
], function(alert, $) { // Variable that represents the `alert` function

    alert({
        title: $.mage.__('Some title'),
        content: $.mage.__('Some content'),
        actions: {
            always: function(){}
        }
    });

});
```

For details about how to initialize a widget in a`.phtml` template, refer to the [JavaScript initialization] topic.

## Options {#alert_options}

The alert widget has the following options:

-  [actions]
-  [autoOpen]
-  [clickableOverlay]
-  [content]
-  [focus]
-  [title]
-  [modalClass]
-  [buttons]

### `actions` {#alert_actions}

Widget callbacks.

**Type**: Object.

**Default value**:

```javascript
actions: {
    always: function(){}
}
```

### `autoOpen` {#alert_autoopen}

Automatically open the alert window when the widget is initialized.

**Type**: Boolean

**Default value**: `false`

### `buttons` {#alert_buttons}

The buttons list.

**Type**: Array of Objects.

**Default value**:

```javascript
buttons: [{
    text: $.mage.__('OK'),
    class: 'action-primary action-accept',
    click: function () {
        this.closeModal(true);
    }
}]
```

### `clickableOverlay` {#alert_clickableOverlay}

Close the alert window when a user clicks on the overlay.

**Type**: Boolean

**Default value**: `true`

### `content` {#alert_content}

The text displayed in the alert window.

**Type**: String.

### `focus` {#alert_focus}
The selector of the element to be in focus when the alert window opens.
If `focus` is not specified or set to empty string, the focus is on the close button. If focusing is not required, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

### `title` {#alert_title}

The title of the alert window.

**Type**: String.

**Default value**: `''`

### `modalClass` {#alert_modalClass}

The CSS class of the alert window.

**Type**: String.

**Default value**: `'confirm'`

## Events {#alert_events}

The alert widget implements a single event: the `always` callback.
The `always` callback is invoked when a modal window is closed.

## Keyboard navigation {#alert_key_navigation}

The keyboard navigation for the alert windows is similar to the [navigation of the modal widget].

## Code Sample

### Code sample of standalone initialization

```html
<div class="alert-modal-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>

<script>
require([
    'jquery',
    'Magento_Ui/js/modal/alert'
], function ($, alert) {
    'use strict';

    alert({
        title: 'Alert Title',
        content: $('.alert-modal-content'),
        modalClass: 'alert',
        actions: {
            always: function() {
                // do something when the modal is closed
            }
        },
        buttons: [{
            text: $.mage.__('Accept'),
            class: 'action primary accept',

            /**
             * Click handler.
             */
            click: function () {
                this.closeModal(true);
            }
        }, {
            text: $.mage.__('New Action'),
            class: 'action',

            /**
             * Click handler.
             */
            click: function () {
                // New action
            }
        }]
    });
});
</script>
```

### Code sample of initialization on an element

```html
<div class="alert-modal-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</div>

<script>
require([
    'jquery',
    'Magento_Ui/js/modal/alert'
], function ($) {
    'use strict';

    $('.alert-modal-content').alert({
        title: 'Alert Title',
        modalClass: 'alert',
        actions: {
            always: function() {
                // do something when the modal is closed
            }
        },
        buttons: [{
            text: $.mage.__('Accept'),
            class: 'action primary accept',

            /**
             * Click handler.
             */
            click: function () {
                this.closeModal(true);
            }
        }, {
            text: $.mage.__('New Action'),
            class: 'action',

            /**
             * Click handler.
             */
            click: function () {
                // New action
            }
        }]
    });
});
</script>
```

## Result

![Alert Widget]({{ site.baseurl }}/common/images/widget/alert-widget-result.png)

[Magento confirmation widget]: {{ page.baseurl }}/javascript-dev-guide/widgets/widget_confirm.html
[Magento modal widget]: {{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html
[`<Magento_Ui_module_dir>/view/base/web/js/modal/alert.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/modal/alert.js
[Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]: {{ page.baseurl }}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals
[JavaScript initialization]: {{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html
[actions]: #alert_actions
[autoOpen]: #alert_autoopen
[clickableOverlay]: #alert_clickableOverlay
[content]: #alert_content
[focus]: #alert_focus
[title]: #alert_title
[modalClass]: #alert_modalClass
[buttons]: #alert_buttons
[navigation of the modal widget]: {{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html#key_navigation
