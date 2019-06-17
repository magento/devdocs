---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Prompt widget
---

## Overview 

The Magento prompt [widget](https://glossary.magento.com/widget) implements a modal pop-up window with an input field, and a cancel and a confirmation button.

It extends the [Magento modal widget].

The prompt widget source is [`<Magento_Ui_module_dir>/view/base/web/js/modal/prompt.js`].

The widget can be used for implementing prompt windows for both, Admin and [storefront](https://glossary.magento.com/storefront). The design patterns for the modal pop-up windows in the Admin are described in the [Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]

## Initialize the prompt widget {#prompt_init}

The prompt widget can be initialized with or without binding to a certain element.

**Example 1**: initialization on an element

```javascript
$('#prompt_init').prompt({
    title: $.mage.__('Prompt title'),
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
```

**Example 2**: standalone initialization

```javascript
require([
    'Magento_Ui/js/modal/prompt'
], function(prompt) { // Variable that represents the `prompt` function

    prompt({
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

For details about how to initialize a widget in a `.phtml` template, refer to the [JavaScript initialization] topic.

## Options {#prompt_options}

-   [actions](#prompt_actions)
-   [autoOpen](#prompt_autoopen)
-   [clickableOverlay](#prompt_clickableOverlay)
-   [content](#prompt_content)
-   [focus](#prompt_focus)
-   [title](#prompt_title)

### `actions` {#prompt_actions}
Widget callbacks.

**Type**: Object.

**Default value**:
```javascript
actions: {
    confirm: function(){},
    cancel: function(){},
    always: function(){}
}
```

### autoOpen {#prompt_autoopen}

Automatically open the prompt window when the widget is initialized.

**Type**: Boolean

**Default value**: `false`

### clickableOverlay {#prompt_clickableOverlay}

Close the prompt window when a user clicks on the overlay.

**Type**: Boolean

**Default value**: `true`

### `content` {#prompt_content}

The prompt window content.

**Type**: String.

### `focus` {#prompt_focus}
The selector of the element to be in focus when the prompt window opens.
If `focus` is not specified or set to empty string, the focus is on the close button. If focusing is not required, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

### `title` {#prompt_title}
The title of the prompt window.

**Type**: String.

**Default value**: `''`

## Events {#prompt_events}

The prompt widget implements the following events:

- `confirm` callback: called when the confirmation button is clicked. The first argument is the value of the input field.
- `cancel` callback: called when the cancel button is clicked.
- `always` callback.

## Keyboard navigation {#prompt_key_navigation}

The keyboard navigation for the alert windows is similar to the [navigation of the modal widget].

[Magento modal widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_modal.html
[`<Magento_Ui_module_dir>/view/base/web/js/modal/prompt.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/modal/prompt.js
[Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]: {{page.baseurl}}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals
[JavaScript initialization]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
[navigation of the modal widget]: {{page.baseurl}}/javascript-dev-guide/widgets/widget_modal.html#key_navigation
