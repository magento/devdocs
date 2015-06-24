---
layout: default
group: javascript
subgroup: JQuery widget details
title: Modal widget
menu_order: 3
menu_title: Modal widget
github_link: frontend-dev-guide/javascript/widget_modal.md
---

<h2 id="modal_overview">Overview</h2>

The Magento modal widget is a secondary window that opens on top of the page. It contains the overlay and modal content, and implements the following:

<ul>
<li>Configuring as popup or slide</li>
<li>Controlling stack of modal widgets</li> 
<li>Setting buttons for action bar</li>
</ul>


The modal widget source is <code>app/code/Magento/Ui/view/base/web/js/modal/modal.js</code>


The widget uses the following templates:

app/code/Magento/Ui/view/base/web/templates/modal/modal-popup.html - popup type template
app/code/Magento/Ui/view/base/web/templates/modal/modal-slide.html - slide type template

<h2 id="modal_initialize">Initialize the modal widget</h2>

To initialize the widget in your script, use the following general notation:
<pre>
$('#modal_content').modal({
    &lt;option1&gt;: &lt;value1&gt;,
    &lt;option2&gt;: &lt;value2&gt;,
    ...
});
</pre>

For details about how to initialize the widget in a .phtml template, refer to the <a href="{{site.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="modal_options">Options</h2>

<ul>
<li><a href="#modal_type">type</a></li>
<li><a href="#modal_title">title</a></li>
<li><a href="#modal_modalClass">modalClass</a></li>
<li><a href="#modal_buttons">buttons</a></li>
<li><a href="#modal_responsive">responsive</a></li>
<li><a href="#modal_innerScroll">innerScroll</a></li>
<li><a href="#modal_modalLeftMargin">modalLeftMargin</a></li>
</ul>

<h3 id="modal_type"><code>type</code></h3>

The type of window: popup or slide.

**Type**: String 

**Default value**: *'popup'*


<h3 id="modal_title"><code>title</code></h3>
Translated title for popup widget.
<p class="q">tranlsated?popup widget or window?</p>

**Type**: String 

**Default value**: ''

<h3 id="modal_modalClass"><code>modalClass</code></h3>
Custom classes for modal widget.
<p class="q">widget or window?</p>


**Type**: String 

**Default value**: ''

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

<h3 id="modal_responsive"><code>responsive</code></h3>
Turn popup modal window to slide panel on small screens. Available if the `type` option is set to *modal*.
Type: Boolean Default value: false

<h3 id="modal_innerScroll"><code>innerScroll</code></h3>
Modal scroll position.

**Type**: Boolean 

**Default value**: false

<h3 id="modal_modalLeftMargin"><code>modalLeftMargin</code></h3>
Set a margin between slide modal windows.


**Type**: Number 

**Default value**: 45

<h2 id="modal_methods">Methods</h2>

<ul>
<li><a href="#modal_open">openModal()</a></li>
<li><a href="#modal_close">closeModal()</a></li>
</ul>

<h3 id="modal_open"><code>openModal()</code></h3>
Open the modal window.


<h3 id="modal_close"><code>closeModal()</code></h3>
Close the modal window.

<h2 id="modal_events">Events</h2>

The modal widget is subscribed to the following events:
<ul>
<li>modalopened - triggered when the modal window is opened.</li>
<li>modalclosed - triggered when the modal window is closed.</li>
</ul>