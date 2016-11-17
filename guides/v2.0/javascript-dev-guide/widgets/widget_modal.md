---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Modal widget
menu_order: 10
menu_title: Modal widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_modal.md
redirect_from:
  - guides/v2.0/frontend-dev-guide/javascript/widget_modal.html
  - guides/v1.0/frontend-dev-guide/javascript/widget_modal.html
---

<h2 id="modal_overview">Overview</h2>

The Magento modal widget implements a secondary window that opens on top of the main window. It contains the overlay and modal content. The modal widget configuration enables the following:

<ul>
<li>Configuring as popup or slide</li>
<li>Controlling stack of modal widgets</li> 
<li>Setting buttons for action bar</li>
</ul>


The modal widget source is <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/modal/modal.js" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/js/modal/modal.js</code></a>


The widget uses the following templates:

- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/templates/modal/modal-popup.html</code></a> popup type template.
- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/templates/modal/modal-slide.html</code></a> slide type template.

The design patterns for the modal pop-up windows in the Admin are described in the <a href="{{page.baseurl}}pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals">Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.</a> 

<h2 id="modal_initialize">Initialize the modal widget</h2>

To initialize the widget in your script, use the following general notation:
<pre>
$('#modal_content').modal({
    &lt;option1&gt;: &lt;value1&gt;,
    &lt;option2&gt;: &lt;value2&gt;,
    ...
});
</pre>

For details about how to initialize the widget in a`.phtml` template, refer to the <a href="{{page.baseurl}}javascript-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="modal_options">Options</h2>
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


<h3 id="modal_autoopen">autoOpen</h3>
Automatically open the modal window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

<h3 id="modal_buttons"><code>buttons</code></h3>
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

<h3 id="modal_clickableOverlay">clickableOverlay</h3>
Close the modal window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`


<h3 id="modal_focus"><code>focus</code></h3>
Selector to focusing when a modal window opens or 'none' if focusing is not necessary.


**Type**: String 

**Default value**: `''`


<h3 id="modal_innerScroll"><code>innerScroll</code></h3>
Modal scroll position.

**Type**: Boolean 

**Default value**: `false`

<h3 id="modal_modalClass"><code>modalClass</code></h3>
Custom classes for modal window.

**Type**: String 

**Default value**: empty

<h3 id="modal_modalLeftMargin"><code>modalLeftMargin</code></h3>
Sets a margin between slide modal windows.

**Type**: Number 

**Default value**: 45

<h3 id="modal_responsive"><code>responsive</code></h3>
Turn popup modal window to slide panel on small screens. Available if the `type` option is set to `modal`.

**Type**: Boolean 

**Default value**: `false`

<h3 id="modal_title"><code>title</code></h3>
Translated title for popup window.

**Type**: String 

**Default value**: empty


<h3 id="modal_type"><code>type</code></h3>

The type of window: popup or slide.

**Type**: String 

**Default value**: `popup`

<h2 id="modal_methods">Methods</h2>
The modal widget has the following methods:
<ul>
<li><a href="#modal_close">closeModal()</a></li>
<li><a href="#modal_open">openModal()</a></li>
</ul>

<h3 id="modal_open"><code>openModal()</code></h3>
Open the modal window.


<h3 id="modal_close"><code>closeModal()</code></h3>
Close the modal window.

<h2 id="modal_events">Events</h2>

The modal widget is subscribed to the following events:
<ul>
<li><a href="#modal_closed">closed</a></li>
<li><a href="#modal_opened">opened</a></li>
</ul>

<h3 id="modal_closed"><code>closed</code></h3>
Called when the modal window is closed.

<h3 id="modal_opened"><code>opened</code></h3>
Called when the modal window is opened.

<h3 id="modal_opened"><code>always</code></h3>
....

<h2 id="key_navigation">Keyboard navigation</h2>
- the ESC key: close the current modal window
- the TAB key: set focus to the next focusable element (looped inside the modal window)
- the SHIFT+TAB keys combination: set focus to the previous focusable element (looped inside the modal window)

