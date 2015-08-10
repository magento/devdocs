---
layout: default  
group: fedg
subgroup: G_Translate
title: Translations
menu_title: Translations
menu_order: 1
github_link: frontend-dev-guide/translations/translate_theory.md
---

## Overview ##

Your custom theme might contain new strings, not present in the default themes. To ensure that your theme is displayed correctly with any language applied on a store view, you need to make sure that the unique strings of a theme are added to the translation<a href="{{site.gdeurl}}frontend-dev-guide/translations/xlate.html#translate_terms">dictionary</a> when the <a href="{{site.gdeurl}}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict" target="_blank">i18n tool</a> is run to generate the dictionary. 
Then when a new language package is created and used to translate a store view, all theme strings are translated as well.

This topic describes how to add theme string in a way that they get collected by the i18n tool and are added to the dictionary.

<h2 id="add_strings_phtml">Strings added in <code>.phtml</code> templates</h2>

To add your new string to a dictionary, use the `__('<your_string>')` method when echoing a string in a template.

For example:

{% highlight HTML%}
	<h3><?php echo __('Create Backup') ?></h3>
{% endhighlight HTML%}

<h2 id="add_strings_email">Strings added in email templates</h2>

If your theme contains <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-email.html#customize-email-theme">custom email templates</a>, their strings can be added to the dictionary as well. 
To make sure the strings of an email template are added to the dictionary, use the `{% raw %}{{trans "<your_string>"}}{% endraw %}` directive. 
For example: 

    {% raw %}
    {{trans "Your Shipment #%shipment_id for Order #%order_id" shipment_id=$shipment.increment_id order_id=$order.increment_id}}
    {% endraw %}

Please note, that variable assignment must not contain spaces (" ").<br>

Correct:
    {% raw %}
    {{trans &quot;Thank you for your order from %store_name.&quot; store_name=$store.getFrontendName()}}
    {% endraw %}
Incorrect:
    {% raw %}
    {{trans &quot;Thank you for your order from %store_name.&quot; store_name = $store.getFrontendName()}}
    {% endraw %}

<div class="bs-callout bs-callout-info" id="info">
<p>
Custom email templates <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-email.html#customize-email-admin" target="_blank">added using the Admin panel</a>, are not stored in the file system, and their stings are not added to the dictionary.
</p>
</div>

<h2 id="add_strings_js">Strings added in UI components' templates</h2>

To ensure that the text you add in `.html` templates of UI components will be added to the dictionary, mark the text using the `i18n` custom binding. The following code samples illustrate how it shoul be used for different cases of adding a text:

- when a string is added in the scope of an HTML element, for example the *'Sign In'* string:
 
{% highlight HTML%}
    <span data-bind="i18n: 'Sign In'"></span>
{% endhighlight HTML%}

- when a string is added with no binding to an HTML element:

{% highlight HTML%}
    <!-- ko i18n: 'You have no items in your shopping cart.' --><!-- /ko -->
{% endhighlight HTML%}	

- when a variable is added. For example the `label` variable:
	
{% highlight HTML%}
    <span data-bind="i18n: label"></span>
{% endhighlight HTML%}

<p class="q">What is translated in case of a variable?</p>

<h2 id="add_strings_js">Strings added in <code>.js</code> files</h2>
To ensure that the text you add in a <code>.js</code> file will be collected by the i18n tool and added to the dictionary, you need to take the following steps:

1. Link the `mage/translate` library:

{% highlight js%}
	define (['jquery', 'mage/translate'], 
	function ($) { ...
{% endhighlight js%}

2. Use the `$.mage.__('')` function when adding a string:

{% highlight js%}
	$.mage.__('<string>')
{% endhighlight js%}

