---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Confirmation widget
---

The Magento confirmation widget implements a modal pop-up window with the cancel and confirmation button.It is an [extension](https://glossary.magento.com/extension) of the [Magento modal widget].

The confirmation [widget](https://glossary.magento.com/widget) source is [`<Magento_Ui_module_dir>/view/base/web/js/modal/confirm.js`].

The widget can be used for implementing confirmation windows for both, Admin and [storefront](https://glossary.magento.com/storefront). The design patterns for the modal pop-up windows in the Admin are described in the [Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]

## Initialize the confirmation widget {#confirm_initialize}

The confirmation widget can be initialized with or without binding to a certain element.

**Example1**: initialization on an element

```javascript
$('#confirm_init').confirm({
    title: $.mage.__('Confirmation title'),
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
```

**Example2**: standalone initialization

```javascript
require([
    'jquery',
    'Magento_Ui/js/modal/confirm'
], function($, confirmation) { // Variable that represents the `confirm` widget

    confirmation({
        title: $.mage.__('Some title'),
        content: $.mage.__('Some content'),
        actions: {
            confirm: function(){},
            cancel: function(){},
            always: function(){}
        }
    });

});
```

For details about how to initialize a widget in a`.phtml` template, refer to the [JavaScript initialization] topic.

## Options {#confirm_options}

-  [actions](#confirm_actions)
-  [autoOpen](#confirm_autoopen)
-  [clickableOverlay](#confirm_clickableOverlay)
-  [content](#confirm_content)
-  [focus](#confirm_focus)
-  [title](#confirm_title)
-  [modalClass](#confirm_modalClass)
-  [buttons](#confirm_buttons)

### `actions` {#confirm_actions}
Widget callbacks.

**Type**: Object

**Default value**:
```javascript
actions: {
    confirm: function(){},
    cancel: function(){},
    always: function(){}
}
```

### `autoOpen` {#confirm_autoopen}

Automatically open the confirmation window when the widget is initialized.

**Type**: Boolean

**Default value**: `false`

### `buttons` {#confirm_buttons}
The buttons list.

**Type**: Array of Objects.

**Default value**:

```javascript
buttons: [{
    text: $t('Cancel'),
    class: 'action-secondary action-dismiss',
    click: function (event) {
        this.closeModal(event);
    }
}, {
    text: $t('OK'),
    class: 'action-primary action-accept',
    click: function (event) {
        this.closeModal(event, true);
    }
}]
```

### `clickableOverlay` {#confirm_clickableOverlay}

Close the confirmation window when a user clicks on the overlay.

**Type**: Boolean

**Default value**: `true`

### `content` {#confirm_content}
The confirmation window content.

**Type**: String.

### `focus` {#confirm_focus}
The selector of the element to be in focus when the confirmation window opens.
If `focus` is not specified or set to empty string, the focus is on close button. If focusing is not required, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

### `title` {#confirm_title}
The title of the confirmation window.

**Type**: String.

**Default value**: `''`

### `modalClass` {#confirm_modalClass}

The CSS class of the confirm window.

**Type**: String.

**Default value**: `'confirm'`

## Events {#confirm_events}

The confirmation widget implements the following events:

-  `confirm` callback: called when the confirmation button is clicked.
-  `cancel` callback: called when the cancel button is clicked.
-  `always` callback: called when the popup is closed.

## Keyboard navigation {#confirm_key_navigation}

The keyboard navigation for the alert windows is similar to the [navigation of the modal widget].

**Example 2**: standalone initialization

```html
<div class="confirmation-modal-content">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<script>
require([
    'jquery',
    'Magento_Ui/js/modal/confirm'
], function ($, confirmation) {
    'use strict';

    confirmation({
        title: $.mage.__('Confirmation Title'),
        content: $('.confirmation-modal-content'),
        actions: {
            confirm: function() {
                // do something when the confirmation button is clicked
            },
            cancel: function() {
                // do something when the cancel button is clicked
            },
            always: function() {
                // do something when the modal is closed
            }
        },
        buttons: [{
            text: $.mage.__('Cancel'),
            class: 'action-secondary action-dismiss',
            click: function (event) {
                this.closeModal(event);
            }
        }, {
            text: $.mage.__('OK'),
            class: 'action-primary action-accept',
            click: function (event) {
                this.closeModal(event, true);
            }
        }, {
            text: $.mage.__('New Action'),
            class: 'action primary action-new',
            click: function (event) {
                // New action
            }
        }]
    });
});
</script>
```

**Example 1**: initialization on an element

```html
<div class="confirmation-modal-content">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<script>
require([
    'jquery',
    'Magento_Ui/js/modal/confirm'
], function ($) {
    'use strict';

    $('.confirmation-modal-content').confirm({
        title: $.mage.__('Confirmation Title'),
        actions: {
            confirm: function() {
                // do something when the confirmation button is clicked
            },
            cancel: function() {
                // do something when the cancel button is clicked
            },
            always: function() {
                // do something when the modal is closed
            }
        },
        buttons: [{
            text: $.mage.__('Cancel'),
            class: 'action-secondary action-dismiss',
            click: function (event) {
                this.closeModal(event);
            }
        }, {
            text: $.mage.__('OK'),
            class: 'action primary action-accept',
            click: function (event) {
                this.closeModal(event, true);
            }
        }, {
            text: $.mage.__('New Action'),
            class: 'action new',
            click: function (event) {
                // New action
            }
        }]
    });
});
</script>
```

## Result

![Confirmation Widget]({{ site.baseurl }}/common/images/widget/confirm-widget-result.png)

[Magento modal widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_modal.html
[`<Magento_Ui_module_dir>/view/base/web/js/modal/confirm.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/modal/confirm.js
[Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]: {{page.baseurl}}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[navigation of the modal widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_modal.html#key_navigation
