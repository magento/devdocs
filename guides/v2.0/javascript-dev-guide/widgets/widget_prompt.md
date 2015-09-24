---
layout: default
group: jsdg
subgroup: Widgets
title: Prompt widget
menu_order: 2
menu_title: Prompt widget
github_link: javascript-dev-guide/widgets/widget_prompt.md
---

<h2>Overview </h2>
The Magento propmp widget is an extension for modal window widget It contains a cancel and a confirmation button. Prompt widget require a callback functions.


The confirmation widget source is <a href="{{site.baseurl}}app/code/Magento/Ui/view/base/web/js/modal/prompt.js">app/code/Magento/Ui/view/base/web/js/modal/prompt.js</a>

<h2>Initialize the prompt widget</h2>

Example:

$('#prompt_content').prompt({
    title: 'Some title',
    actions: {
        confirm: function(){}, //callback on 'Ok' button click
        cancel: function(){}, //callback on 'Cancel' button click
        always: function(){}
    }
});
{% endhighlight %}

For details about how to initialize the widget in a`.phtml` template, refer to the <a href="{{site.gdeurl}}frontend-dev-guide/javascript/js_init.html" target="_blank">Javascript initialization</a> topic.

<h2 id="prompt_options">Options</h2>

<p class="q">Similar to confirmation?</p>

<h2 id="key_navigation">Keyboard navigation</h2>
The keyboard navigation for the prompt windows the <a href="{{site.gdeurl}}javascript-dev-guide/widgets/widget_modal.html#Keyboard navigation">general modal windows navigation implemented by the modal widget</a>.