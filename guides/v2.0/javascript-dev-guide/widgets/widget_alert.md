---
layout: default
group: jsdg
subgroup: Widgets
title: Alert widget
menu_order: 2
menu_title: Alert widget
github_link: javascript-dev-guide/widgets/widget_alert.md
---
<h2 id="alert_overview">Overview</h2>

The Magento alert widget implements a modal window with a confirmation button. It extends the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html">Magento modal widget</a>.

The alert widget source is <a href="{{site.mage2000url}}app/code/Magento/Ui/view/base/web/js/modal/alert.js" target="_blank">app/code/Magento/Ui/view/base/web/js/modal/alert.js</a>

<p class="q">templates the same as for the modal widget?</p>

Specifically, the alert widgets implements:
Ability to simple initialization
One types of callback(always)

<p class="q">??</p>

<h2 id="modal_initialize">Initialize the alert widget</h2>

To initialize the widget in your script, use the following general notation:
<pre>
$('#modal_content').alert({
    &lt;option1&gt;: &lt;value1&gt;,
    &lt;option2&gt;: &lt;value2&gt;,
    ...
});
</pre>

<p class="q">what should be instead of modal_content?</p>

Example:

{% highlight js %}
$('#modal_content').alert({
    title: 'Warning',
    content: 'Warning content',
    actions: {
        always: function(){}
    }
});
{% endhighlight %}

For details about how to initialize the widget in a`.phtml` template, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="modal_options">Options</h2>
The alert widget has the following options:

<p class="q">other options of modal are unavailable?</p>

<ul>
<li><a href="#alert_actions">actions</a></li>
<li><a href="#alert_content">content</a></li>
<li><a href="#alert_focus">focus</a></li>
<li><a href="#alert_title">title</a></li>
</ul>

<h3 id="alert_actions"><code>actions</code></h3>
The array of buttons for the action pane.

**Type**: Object.

**Default value**: 
{% highlight js %}
actions: {
    always: function(){}
}
{% endhighlight %}

<h3 id="alert_content"><code>content</code></h3>

"Set content for confirmation widget(just for second example)."
<p class="q">obviously "alert", what else???</p>

**Type**: String.

<h3 id="alert_focus"><code>focus</code></h3>
The selector of the element to be in focus when the modal window opens.
If `focus` is not specified or set to empty string, the focus is on close button. If focusing is not requried, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

<h3 id="alert_content"><code>title</code></h3>
The title of the modal window.

<p class="q">What is meant by "translated"?</p>

**Type**: String.

**Default value**: `''`

<h2 id="key_navigation">Keyboard navigation</h2>
The keyboard navigation for the alert windows the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html#Keyboard navigation">general modal windows navigation implemented by the modal widget</a>.