---
layout: default
group: jsdg
subgroup: Widgets
title: Confirmation widget
menu_order: 2
menu_title: Confirmation widget
github_link: javascript-dev-guide/widgets/widget_confirm.md
---

<h2>Overview</h2>

The Magento confirmation widget implements a modal window the the cancel and confirmation button.Is an extension of the <a href="{{site.gdeurl}}">Magento modal widget</a>.

Confirmation widget require a callback functions.
Specifically, the confirmation widgets implements:
Ability to simple initialization
Three types of callback(confirm, cancel, always)


<p class="q">need clarification</p>

The confirmation widget source is <a href="{{site.baseurl}}app/code/Magento/Ui/view/base/web/js/modal/confirm.js">app/code/Magento/Ui/view/base/web/js/modal/confirm.js</a>

<h2 id="confirm_initialize">Initialize the confirmation widget</h2>

Examples of the confirmation widget initialization.

Example 1:

{% highlight js %}
$('#confirm_content').confirm({
    title: 'Some title',
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
{% endhighlight %}

{% highlight js %}
new Confirm({
    title: 'Some title',
    content: 'Some content',
    actions: {
        confirm: function(){},
        cancel: function(){},
        always: function(){}
    }
});
{% endhighlight %}

<p class="q">need clarification</p>

For details about how to initialize the widget in a`.phtml` template, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="confirm_options">Options</h2>
<p class="q">According to the internal doc, they are similar to alert, except for the actions, true?</p>

<h2 id="key_navigation">Keyboard navigation</h2>
The keyboard navigation for the alert windows the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html#Keyboard navigation">general modal windows navigation implemented by the modal widget</a>.
