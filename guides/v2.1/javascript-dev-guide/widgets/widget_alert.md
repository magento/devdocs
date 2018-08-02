---
group: jsdg
subgroup: 3_Widgets
title: Alert widget
menu_order: 2
menu_title: Alert widget
version: 2.1
github_link: javascript-dev-guide/widgets/widget_alert.md
---
## Overview {#alert_overview}

The Magento alert widget implements a modal pop-up window with a confirmation button. It extends the [Magento modal widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html).

The alert {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} source is [<code>&lt;Magento_Ui_module_dir&gt;/view/base/web/js/modal/alert.js</code>]({{ site.mage2000url }}app/code/Magento/Ui/view/base/web/js/modal/alert.js" target="_blank)

The widget can be used for implementing alert windows for both Admin and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. The design patterns for the pop-up modal windows in the Admin are described in the [Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.]({{ page.baseurl }}/pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals) 

## Initialize the alert widget {#alert_initialize}

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

For details about how to initialize a widget in a`.phtml` template, refer to the [Javascript initialization]({{ page.baseurl }}/javascript-dev-guide/javascript/js_init.html" target="_blank) topic.

## Options {#alert_options}
The alert widget has the following options:

<ul>
<li>[actions](#alert_actions)</li>
<li>[autoOpen](#alert_autoopen)</li>
<li>[clickableOverlay](#alert_clickableOverlay)</li>
<li>[content](#alert_content)</li>
<li>[focus](#alert_focus)</li>
<li>[title](#alert_title)</li>
</ul>

### <code>actions</code> {#alert_actions}

Widget callbacks.

**Type**: Object.

**Default value**: 
{% highlight js %}
actions: {
    always: function(){}
}
{% endhighlight %}

### autoOpen {#alert_autoopen}
Automatically open the alert window when the widget is initialized.

**Type**: Boolean 

**Default value**: `false`

### clickableOverlay {#alert_clickableOverlay}
Close the alert window when a user clicks on the overlay.

**Type**: Boolean 

**Default value**: `true`

### <code>content</code> {#alert_content}

The text displayed in the alert window.


**Type**: String.

### <code>focus</code> {#alert_focus}
The selector of the element to be in focus when the alert window opens.
If `focus` is not specified or set to empty string, the focus is on the close button. If focusing is not requried, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

### <code>title</code> {#alert_title}
The title of the alert window.


**Type**: String.

**Default value**: `''`

## Events {#alert_events}

The alert widget implements a single event: the `always` callback.

## Keyboard navigation {#alert_key_navigation}
The keyboard navigation for the alert windows is similar to the [navigation of the modal widget]({{ page.baseurl }}/javascript-dev-guide/widgets/widget_modal.html#key_navigation).
