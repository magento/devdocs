---
layout: default  
group: fedg
subgroup: G_Translate
title: Translate theme strings
menu_title: Translate theme strings
menu_order: 1
github_link: frontend-dev-guide/translations/translate_theory.md
---

## Overview ##

Your custom theme might contain new strings that are not present in the default themes. To ensure that your theme is displayed correctly with any language applied on a store view, you need to make sure that the unique strings of a theme are added to the translation <a href="{{site.gdeurl}}frontend-dev-guide/translations/xlate.html#translate_terms">dictionary</a> when the <a href="{{site.gdeurl}}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict" target="_blank">i18n tool</a> is run. 
Then when a new language package is created and used to translate a store view, all theme strings are translated as well.

This topic describes how to add theme strings in a way that they get collected by the i18n tool and are added to the dictionary.

### Contents ###

- [Strings added in `.phtml` templates](#add_strings_phtml)
- [Strings added in email templates](#add_strings_email)
- [Strings added in UI components' templates](#add_strings_ui_html)
- [Strings added in UI components configuration files](#add_strings_ui_xml)
- [Strings added in `.js` files](#add_strings_js)


<h2 id="add_strings_phtml">Strings added in <code>.phtml</code> templates</h2>

To add your new string to a dictionary, use the `__('<your_string>')` method when ouputting a string in a <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-overview.html" target="_blank">.phtml template</a>.

For example:

{% highlight html+php %}
	<h3><?php echo __('Create Backup') ?></h3>
{% endhighlight html+php %}

If your string contains a variable, to add a placeholder for this variable to the string stored in the dictionary, use syntax similar to the following:

{% highlight html+php%}
    sprintf(__('Hello %s'), $yourVariable);
{% endhighlight html+php%}

In this example, the <i>'Hello %s'</i> string is added to the dictionary when the i18n tool is run.

<h2 id="add_strings_email">Strings added in email templates</h2>

If your theme contains <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-email.html#customize-email-theme" target="_blank">custom email templates</a>, their strings can be added to the dictionary as well. 
To make sure the strings of an email template are added to the dictionary, use the `{% raw %}{{trans "<your_string>"}}{% endraw %}` directive. 
For example: 

    {% raw %}
    {{trans "Your Shipment #%shipment_id for Order #%order_id" shipment_id=$shipment.increment_id order_id=$order.increment_id}}
    {% endraw %}

Please note, that variable assignment must not contain spaces (" ").<br>

Correct:
    {% raw %}
    {{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}
    {% endraw %}
Incorrect:
    {% raw %}
    {{trans "Thank you for your order from %store_name." store_name = $store.getFrontendName()}}
    {% endraw %}

<div class="bs-callout bs-callout-info" id="info">
<p>
Custom email templates <a href="{{site.gdeurl}}frontend-dev-guide/templates/template-email.html#customize-email-admin" target="_blank">added using the Admin panel</a>, are not stored in the file system, and their stings are not added to the dictionary.
</p>
</div>

<h2 id="add_strings_ui_html">Strings added in UI components' templates</h2>

To ensure that the text you add in `.html` templates of UI components will be added to the dictionary, mark the text using the `i18n` custom binding. The following code samples illustrate how it should be used for different cases of adding a text:

- when a string is added in the scope of an HTML element, for example the *'Sign In'* string:
 
{% highlight HTML%}
    <span data-bind="i18n: 'Sign In'"></span>
{% endhighlight HTML%}

- when a string is added with no binding to an HTML element:

{% highlight HTML%}
    <!-- ko i18n: 'You have no items in your shopping cart.' --><!-- /ko -->
{% endhighlight HTML%}	

<h2 id="add_strings_ui_xml">Strings added in UI components configuration files</h2>

To ensure that the text you add in UI components configuration `.xml` files will be added to the dictionary, use the `translate` attribute: set `translate=true` for the corresponding element. The following code sample is an illustration:

{% highlight xml%}
    <item name="label" xsi:type="string" translate="true">Delete</item>
{% endhighlight xml%}

In this example, the *Delete* string will be added to the dictionary when the i18n tool is run.

<h2 id="add_strings_js">Strings added in <code>.js</code> files</h2>
To ensure that the text you add in a <code>.js</code> file will be collected by the i18n tool and added to the dictionary, you need to take the following steps:
<ol>
<li>Link the <code>mage/translate</code> library:

{% highlight js%}
	define (['jquery', 'mage/translate'], 
	function ($) { ...
{% endhighlight js%}
</li>
<li>Use the <code>$.mage.__('')</code> function when adding a string:

{% highlight js%}
	$.mage.__('<string>')
{% endhighlight js%}

If your string contains a variable, to add a placeholder for this variable to the string stored in the dictionary, use the syntax similar to the following:

{% highlight js%}
    $.mage.__('Hello %1').replace('%1', yourVariable);
{% endhighlight js%}

In this example, the <i>'Hello %1'</i> string is added to the dictionary when the i18n tool is run.

</li>
</ol>



