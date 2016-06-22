---
layout: default
group: jsdg
subgroup: 3_Widgets
title: Alert widget
menu_order: 2
menu_title: Alert widget
version: 2.0
github_link: javascript-dev-guide/widgets/widget_alert.md
---
<h2 id="alert_overview">Overview</h2>

The Magento alert widget implements a modal pop-up window with a confirmation button. It extends the <a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_modal.html">Magento modal widget</a>.

The alert widget source is <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/modal/alert.js" target="_blank"><code>&lt;Magento_Ui_module_dir&gt;/view/base/web/js/modal/alert.js</code></a>

The widget can be used for implementing alert windows for both Admin and storefront. The design patterns for the pop-up modal windows in the Admin are described in the <a href="{{page.baseurl}}pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals">Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.</a> 

<h3>Contents</h3>

- <a href="#alert_initialize">Initialize the alert widget</a>
- <a href="#alert_options">Options</a>
- <a href="#alert_events">Events</a>
- <a href="#alert_key_navigation">Keyboard navigation</a>

<h2 id="alert_initialize">Initialize the alert widget</h2>

The alert widget can be initialized with or without binding to a certain element.

**Example1**: initialization on an element

{% highlight js %}
$('#init_element').alert({
    title: 'Warning',
    content: 'Warning content',
    actions: {
        always: function(){}
    }
});
{% endhighlight %}

**Example2**: standalone initialization

{% highlight js %}
require([
    'Magento_Ui/js/modal/alert'
], function(alert) { // Variable that represents the `alert` function
 
    alert({
        title: 'Some title',
        content: 'Some content',
        actions: {
            always: function(){}
        }
    });
 
});
{% endhighlight %}

For details about how to initialize a widget in a`.phtml` template, refer to the <a href="{{page.baseurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="alert_options">Options</h2>
The alert widget has the following options:

<ul>
<li><a href="#alert_actions">actions</a></li>
<li><a href="#alert_autoopen">autoOpen</a></li>
<li><a href="#alert_clickableOverlay">clickableOverlay</a></li>
<li><a href="#alert_content">content</a></li>
<li><a href="#alert_focus">focus</a></li>
<li><a href="#alert_title">title</a></li>
</ul>

<h3 id="alert_actions"><code>actions</code></h3>

Widget callbacks.

**Type**: Object.

**Default value**: 
{% highlight js %}
actions: {
    always: function(){}
}
{% endhighlight %}

<h3 id="alert_autoopen">autoOpen</h3>
Automatically open the alert window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

<h3 id="alert_clickableOverlay">clickableOverlay</h3>
Close the alert window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`

<h3 id="alert_content"><code>content</code></h3>

The text displayed in the alert window.


**Type**: String.

<h3 id="alert_focus"><code>focus</code></h3>
The selector of the element to be in focus when the alert window opens.
If `focus` is not specified or set to empty string, the focus is on the close button. If focusing is not requried, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

<h3 id="alert_title"><code>title</code></h3>
The title of the alert window.


**Type**: String.

**Default value**: `''`

<h2 id="alert_events">Events</h2>

The alert widget implements a single event: the `always` callback.

<h2 id="alert_key_navigation">Keyboard navigation</h2>
The keyboard navigation for the alert windows is similar to the <a href="{{page.baseurl}}javascript-dev-guide/widgets/widget_modal.html#key_navigation">navigation of the modal widget</a>.
