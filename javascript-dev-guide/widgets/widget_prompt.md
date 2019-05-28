---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Prompt widget
menu_order: 12
menu_title: Prompt widget
---

## Overview

The Magento prompt {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} implements a modal pop-up window with an input field, and a cancel and a confirmation button.

It extends the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html">Magento modal widget</a>.

The prompt widget source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/modal/prompt.js">&lt;Magento_Ui_module_dir&gt;/view/base/web/js/modal/prompt.js</a>

The widget can be used for implementing prompt windows for both, Admin and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. The design patterns for the modal pop-up windows in the Admin are described in the <a href="{{ page.baseurl }}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals">Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.</a>

## Initialize the prompt widget   {#prompt_init}

The prompt widget can be initialized with or without binding to a certain element.

**Example1**: initialization on an element

{% highlight js %}
$('#prompt_init').prompt({
    title: 'Prompt title',
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
{% endhighlight js %}

**Example2**: standalone initialization

{% highlight js %}
require([
    'Magento_Ui/js/modal/prompt'
], function(prompt) { // Variable that represents the `prompt` function

    prompt({
        title: 'Some title',
        content: 'Some content',
        actions: {
            confirm: function(){},
            cancel: function(){},
            always: function(){}
        }
    });

});
{% endhighlight %}

For details about how to initialize a widget in a `.phtml` template, refer to the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

## Options   {#prompt_options}

<ul>
<li><a href="#prompt_actions">actions</a></li>
<li><a href="#prompt_autoopen">autoOpen</a></li>
<li><a href="#prompt_clickableOverlay">clickableOverlay</a></li>
<li><a href="#prompt_content">content</a></li>
<li><a href="#prompt_focus">focus</a></li>
<li><a href="#prompt_title">title</a></li>
</ul>

### `actions`   {#prompt_actions}

Widget callbacks.

**Type**: Object.

**Default value**:
{% highlight js %}
actions: {
    confirm: function(){},
    cancel: function(){},
    always: function(){}
}
{% endhighlight %}

### autoOpen   {#prompt_autoopen}

Automatically open the prompt window when the widget is initialized.

**Type**: Boolean

**Default value**: `false`

### clickableOverlay   {#prompt_clickableOverlay}

Close the prompt window when a user clicks on the overlay.

**Type**: Boolean

**Default value**: `true`

### `content`   {#prompt_content}


The prompt window content.

**Type**: String.

### `focus`   {#prompt_focus}

The selector of the element to be in focus when the prompt window opens.
If `focus` is not specified or set to empty string, the focus is on the close button. If focusing is not required, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

### `title`   {#prompt_title}

The title of the prompt window.


**Type**: String.

**Default value**: `''`

## Events   {#prompt_events}

The prompt widget implements the following events:

- `confirm` callback: called when the confirmation button is clicked. The first argument is the value of the input field.
- `cancel` callback: called when the cancel button is clicked.
- `always` callback.

## Keyboard navigation   {#prompt_key_navigation}

The keyboard navigation for the alert windows is similar to the <a href="{{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html#key_navigation">navigation of the modal widget</a>.
