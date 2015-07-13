---
layout: default
group: javascript
subgroup: JQuery widget details
title: Modal widget
menu_order: 8
menu_title: Modal widget
github_link: frontend-dev-guide/javascript/widget_modal.md
---

<h2 id="modal_overview">Overview</h2>

The Magento modal widget implements a secondary window that opens on top of the main window. It contains the overlay and modal content. The modal widget configuration enables the following:

<ul>
<li>Configuring as popup or slide</li>
<li>Controlling stack of modal widgets</li> 
<li>Setting buttons for action bar</li>
</ul>


The modal widget source is <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/modal/modal.js" target="_blank">app/code/Magento/Ui/view/base/web/js/modal/modal.js</a>


The widget uses the following templates:

- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html" target="_blank">app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html</a> popup type template.
- <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html" target="_blank">app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html</a> slide type template.

<h2 id="modal_initialize">Initialize the modal widget</h2>

To initialize the widget in your script, use the following general notation:
<pre>
$('#modal_content').modal({
    &lt;option1&gt;: &lt;value1&gt;,
    &lt;option2&gt;: &lt;value2&gt;,
    ...
});
</pre>

For details about how to initialize the widget in a` .phtml` template, refer to the <a href="{{site.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="modal_options">Options</h2>
The modal widget has the following options:
<ul>
<li><a href="#modal_buttons">buttons</a></li>
<li><a href="#modal_innerScroll">innerScroll</a></li>
<li><a href="#modal_modalClass">modalClass</a></li>
<li><a href="#modal_modalLeftMargin">modalLeftMargin</a></li>
<li><a href="#modal_responsive">responsive</a></li>
<li><a href="#modal_title">title</a></li>
<li><a href="#modal_type">type</a></li>
</ul>

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
<li><a href="#modal_closed">modalclosed</a></li>
<li><a href="#modal_opened">modalopened</a></li>
</ul>

<h3 id="modal_closed"><code>modalclosed</code></h3>
Triggered when the modal window is closed.

<h3 id="modal_opened"><code>modalopened</code></h3>
Triggered when the modal window is opened.


