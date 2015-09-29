---
layout: default
group: jsdg
subgroup: Widgets
title: Confirm widget
menu_order: 5
menu_title: Confirm widget
github_link: javascript-dev-guide/widgets/widget_confirm.md
---

<h2>Overview</h2>

The Magento confirm widget implements a modal pop-up window the the cancel and confirmation button.It is an extension of the <a href="{{site.gdeurl}}">Magento modal widget</a>.

The confirm widget source is <a href="{{site.baseurl}}app/code/Magento/Ui/view/base/web/js/modal/confirm.js">app/code/Magento/Ui/view/base/web/js/modal/confirm.js</a>

The widget can be used for implementing confirmation windows for both, Admin and storefront. The design patterns for the modal pop-up windows in the Admin are described in the <a href="{{site.gdeurl}}pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals">Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.</a> 

<h3>Contents</h3>

- <a href="#confirm_initialize">Initialize the confirmation widget</a>
- <a href="#confirm_options">Options</a>
- <a href="#confirm_events">Events</a>
- <a href="#confirm_key_navigation">Keyboard navigation</a>


<h2 id="confirm_initialize">Initialize the confirm widget</h2>

The confirm widget can be initialized with or without binding to a certain element.

**Example1**: initialization on an element

{% highlight js %}
$('#confirm_init').confirm({
    title: 'Confirmation title',
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
{% endhighlight %}

**Example2**: standalone initialization
{% highlight js %}
new Confirm({
    title: 'Confirmation title',
    content: 'Confirmation content',
    actions: {
        confirm: function(){},
        cancel: function(){},
        always: function(){}
    }
});
{% endhighlight %}


For details about how to initialize a widget in a`.phtml` template, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="confirm_options">Options</h2>

<ul>
<li><a href="#confirm_actions">actions</a></li>
<li><a href="#confirm_autoopen">autoOpen</a></li>
<li><a href="#confirm_clickableOverlay">clickableOverlay</a></li>
<li><a href="#confirm_content">content</a></li>
<li><a href="#confirm_focus">focus</a></li>
<li><a href="#confirm_title">title</a></li>
</ul>

<h3 id="confirm_actions"><code>actions</code></h3>
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

<h3 id="confirm_autoopen">autoOpen</h3>
Automatically open the confirmation window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

<h3 id="confirm_clickableOverlay">clickableOverlay</h3>
Close the confirmation window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`


<h3 id="confirm_content"><code>content</code></h3>

The confirmation window content.

**Type**: String.

<h3 id="confirm_focus"><code>focus</code></h3>
The selector of the element to be in focus when the confirmation window opens.
If `focus` is not specified or set to empty string, the focus is on close button. If focusing is not requried, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

<h3 id="alert_content"><code>title</code></h3>
The title of the confirmation window.


**Type**: String.

**Default value**: `''`


<h2 id="confirm_events">Events</h2>

The confirmation widget implements the following events:

- `confirm` callback: called when the confirmation button is clicked.
- `cancel` callback: called when the cancel button is clicked.
- `always` callback.

<h2 id="confirm_key_navigation">Keyboard navigation</h2>
The keyboard navigation for the confirmation windows is similar to the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html#key_navigation">general modal windows navigation implemented by the modal widget</a>.
