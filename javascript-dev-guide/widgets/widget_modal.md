---
group: javascript-developer-guide
subgroup: 3_Widgets
title: Modal widget
menu_order: 10
menu_title: Modal widget
redirect_from:
 - /guides/v2.0/frontend-dev-guide/javascript/widget_modal.html
---

## Overview   {#modal_overview}

The Magento modal {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} implements a secondary window that opens on top of the main window. It contains the overlay and modal content. The modal widget configuration enables the following:

<ul>
<li>Configuring as popup or slide</li>
<li>Controlling stack of modal widgets</li> 
<li>Setting buttons for action bar</li>
</ul>


The modal widget source is <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/modal/modal.js" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/js/modal/modal.js</code></a>


The widget uses the following templates:

- <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/templates/modal/modal-popup.html</code></a> popup type template.
- <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/templates/modal/modal-slide.html</code></a> slide type template.

The design patterns for the modal pop-up windows in the Admin are described in the <a href="{{ page.baseurl }}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals">Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.</a> 

## Initialize the modal widget   {#modal_initialize}

To initialize the widget in your script, use the following general notation:
<pre>
$('#modal_content').modal({
    &lt;option1&gt;: &lt;value1&gt;,
    &lt;option2&gt;: &lt;value2&gt;,
    ...
});
</pre>

For details about how to initialize the widget in a`.phtml` template, refer to the <a href="{{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank">JavaScript initialization</a> topic.

## Options   {#modal_options}

The modal widget has the following options:
<ul>
<li><a href="#modal_autoopen">autoOpen</a></li>
<li><a href="#modal_buttons">buttons</a></li>
<li><a href="#modal_clickableOverlay">clickableOverlay</a></li>
<li><a href="#modal_focus">focus</a></li>
<li><a href="#modal_innerScroll">innerScroll</a></li>
<li><a href="#modal_modalClass">modalClass</a></li>
<li><a href="#modal_modalLeftMargin">modalLeftMargin</a></li>
<li><a href="#modal_responsive">responsive</a></li>
<li><a href="#modal_title">title</a></li>
<li><a href="#modal_type">type</a></li>
</ul>

### autoOpen   {#modal_autoopen}

Automatically open the modal window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

### `buttons`   {#modal_buttons}

Array of buttons for action pane.

**Type**: Array 

**Structure**:
<pre>
buttons: [{
    text: '',
    class: '',
    click: function() {} //handler on button click
}]
</pre>

**Default value**:
<pre>
buttons: [{
    text: 'Ok',
    class: '',
    click: function() {
        this.closeModal();
    }
}]
</pre>

### clickableOverlay   {#modal_clickableOverlay}

Close the modal window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`


### `focus`   {#modal_focus}

Selector to focusing when a modal window opens or 'none' if focusing is not necessary.


**Type**: String 

**Default value**: `''`


### `innerScroll`   {#modal_innerScroll}

Modal scroll position.

**Type**: Boolean 

**Default value**: `false`

### `modalClass`   {#modal_modalClass}

Custom classes for modal window.

**Type**: String 

**Default value**: empty

### `modalLeftMargin`   {#modal_modalLeftMargin}

Sets a margin between slide modal windows.

**Type**: Number 

**Default value**: 45

### `responsive`   {#modal_responsive}

Turn popup modal window to slide panel on small screens. Available if the `type` option is set to `modal`.

**Type**: Boolean 

**Default value**: `false`

### `title`   {#modal_title}

Translated title for popup window.

**Type**: String 

**Default value**: empty


### `type`   {#modal_type}


The type of window: popup or slide.

**Type**: String 

**Default value**: `popup`

## Methods   {#modal_methods}

The modal widget has the following methods:
<ul>
<li><a href="#modal_close">closeModal()</a></li>
<li><a href="#modal_open">openModal()</a></li>
</ul>

### `openModal()`   {#modal_open}

Open the modal window.


### `closeModal()`   {#modal_close}

Close the modal window.

## Events   {#modal_events}

The modal widget is subscribed to the following events:
<ul>
<li><a href="#modal_closed">closed</a></li>
<li><a href="#modal_opened">opened</a></li>
</ul>

### `closed`   {#modal_closed}

Called when the modal window is closed.

### `opened`   {#modal_opened}

Called when the modal window is opened.

### `always`   {#modal_opened}

....

## Keyboard navigation   {#key_navigation}

- the ESC key: close the current modal window
- the TAB key: set focus to the next focusable element (looped inside the modal window)
- the SHIFT+TAB keys combination: set focus to the previous focusable element (looped inside the modal window)

