---
layout: default
group: jsdg
subgroup: Widgets
title: Prompt widget
menu_order: 12
menu_title: Prompt widget
github_link: javascript-dev-guide/widgets/widget_prompt.md
---

<h2>Overview </h2>
The Magento propmp widget implements a modal pop-up window with a cancel and a confirmation button. 

It extends the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html">Magento modal widget</a>.

The confirmation widget source is <a href="{{site.baseurl}}app/code/Magento/Ui/view/base/web/js/modal/prompt.js">app/code/Magento/Ui/view/base/web/js/modal/prompt.js</a>

The design patterns for the modal pop-up windows in the Admin are described in the <a href="{{site.gdeurl}}pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overalys.html#modals">Magento Admin Pattern Library, the Slide-out Panels, Modal Windows, and Overlays topic.</a> 

<h2>Initialize the prompt widget</h2>

Example:

{% highlight js %}
$('#prompt_content').prompt({
    title: 'Some title',
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
{% endhighlight js %}

For details about how to initialize the widget in a`.phtml` template, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="prompt_options">Options</h2>

<ul>
<li><a href="#prompt_actions">actions</a></li>
<li><a href="#prompt_content">content</a></li>
<li><a href="#prompt_focus">focus</a></li>
<li><a href="#prompt_title">title</a></li>
</ul>

<h3 id="prompt_actions"><code>actions</code></h3>
The array of buttons for the action panel.


**Type**: Object.

**Default value**: 
{% highlight js %}
actions: {
    confirm: function(){},
    cancel: function(){},
    always: function(){}
}
{% endhighlight %}

<h3 id="prompt_content"><code>content</code></h3>

The prompt window content.
<p class="q">Is it the text dispayed in the window?</p>

**Type**: String.

<h3 id="prompt_focus"><code>focus</code></h3>
The selector of the element to be in focus when the modal window opens.
If `focus` is not specified or set to empty string, the focus is on close button. If focusing is not requried, set `focus` to `none`.

**Type**: String.

**Default value**: `''`

<h3 id="prompt_content"><code>title</code></h3>
The title of the modal window.


**Type**: String.

**Default value**: `''`

<h2 id="prompt_events">Events</h2>

The prompt widget implements the following events:
- `confirm` callback: called when the confirmation button is clicked.
- `cancel` callback: called when the cancel button is clicked.
- `always` callback.


<h2 id="prompt_key_navigation">Keyboard navigation</h2>
The keyboard navigation for the prompt windows is similar to the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html#Keyboard navigation">general modal windows navigation implemented by the modal widget</a>.