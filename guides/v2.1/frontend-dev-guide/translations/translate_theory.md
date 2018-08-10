---
group: fedg
subgroup: G_Translate
title: Translate theme strings
menu_title: Translate theme strings
menu_order: 1
version: 2.1
functional_areas:
  - Frontend
---

## What's in this topic ##

Your custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} might contain new strings that are not present in the Magento out of the box themes. To ensure that your theme is displayed correctly with any language applied on a store view, you need to make sure that the unique strings of your theme are added to the translation <a href="{{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#translate_terms">dictionary</a> when the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict" target="_blank">i18n tool</a> is run.
Then when a new {% glossarytooltip 9c4c7b9b-43f0-4454-8e8c-fb62ad40c35f %}language package{% endglossarytooltip %} is created and used to translate a store view, all theme strings are translated as well.

This topic describes how to add theme strings in a way that they get collected by the i18n tool and are added to the dictionary.

## Strings added in .phtml templates {#add_strings_phtml}

To ensure that your new string is added to the dictionary and translated, use the `__('<your_string>')` method when outputting a string in a <a href="{{ page.baseurl }}/frontend-dev-guide/templates/template-overview.html" target="_blank">.phtml template</a>.

For example:

{% highlight html+php %}
	### <?php echo __('Create Backup') ?>
{% endhighlight html+php %}

If your string contains a variable, to add a placeholder for this variable in the dictionary, use syntax similar to the following:

{% highlight html+php%}
    ### <?php echo sprintf(__('Hello %s'), $yourVariable) ?>
{% endhighlight html+php%}

In this example, the <i>'Hello %s'</i> string is added to the dictionary when the i18n tool is run.

## Strings added in email templates {#add_strings_email}

If your theme contains <a href="{{ page.baseurl }}/frontend-dev-guide/templates/template-email.html#customize-email-theme" target="_blank">custom email templates</a>, their strings can be added to the dictionary as well.
To make sure the strings of an email template are added to the dictionary, use the  {% raw %} {{trans}}  {% endraw %} <a href="{{ page.baseurl }}/frontend-dev-guide/templates/template-email.html#localization" target="_blank">directive</a>.

Custom email templates <a href="{{ page.baseurl }}/frontend-dev-guide/templates/template-email.html#customize-email-admin" target="_blank">added using the Admin panel</a>, are not stored in the file system, and their strings are not added to the dictionary.

## Strings added in UI component templates {#add_strings_ui_html}

To ensure that the text you add in `.html` templates of UI components is added to the dictionary, mark the text using the `i18n` custom binding. The following code samples illustrate how it should be used for different cases of adding a text:

- when a string is added in the scope of an HTML element:

{% highlight HTML%}
    <span data-bind="i18n: 'Sign In'"></span>
{% endhighlight HTML%}

- when a string is added with no binding to an HTML element:

{% highlight HTML%}
    <!-- ko i18n: 'You have no items in your shopping cart.' --><!-- /ko -->
{% endhighlight HTML%}

- when a string is added as an attribute of an HTML element:

{% highlight HTML%}
    <input type="text" data-bind="attr: {placeholder: $t('First Name')}" />
{% endhighlight HTML%}

## Strings added in UI components configuration files {#add_strings_ui_xml}

To ensure that the text you add in UI components configuration `.xml` files is added to the dictionary, use the `translate` attribute: set `translate=true` for the corresponding element. The following code sample is an illustration:

{% highlight xml%}
    <item name="label" xsi:type="string" translate="true">Delete</item>
{% endhighlight xml%}

In this example, the *Delete* string is added to the dictionary when the i18n tool is run.

Translated strings that originate from `.xml` files will not render unless they are called with a `__(<variable>)` method.
In this example, you would use a call similar to the following to display the translated *Delete* string.

{% highlight php startinline=true %}
__($this->config->getData('label'))
{% endhighlight %}

## Strings added in .js files {#add_strings_js}

To ensure that the text you add in a <code>.js</code> file is collected by the i18n tool and added to the dictionary, take the following steps:
<ol>
<li>Link the <code>mage/translate</code> library:

{% highlight js%}
	define (['jquery', 'mage/translate'], function ($) {...});
{% endhighlight js%}
</li>
<li>Use the <code>$.mage.__('')</code> function when adding a string:

{% highlight js%}
	$.mage.__('<string>');
{% endhighlight js%}

If your string contains a variable, to add a placeholder for this variable to the string stored in the dictionary, use the syntax similar to the following:

{% highlight js%}
    $.mage.__('Hello %1').replace('%1', yourVariable);
{% endhighlight js%}

In this example, the <i>'Hello %1'</i> string is added to the dictionary when the i18n tool is run.

</li>
</ol>
