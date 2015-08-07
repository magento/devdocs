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

Your theme might contain the strings, not present in the default themes. To ensure your theme is displayed correctly with any language applied on a store view, you need to make sure that the unique strings of a theme are added to the module <a href="{{site.gdeurl}}frontend-dev-guide/translations/xlate.html#translate_terms">dictionary</a>. Then once a language package different from the original is used to translate a store view, all theme strings are translated as well.

This topic describes how to add the theme strings to a dictionary.

<p class="q">Need to think about a case when the theme is created not in the default language at once</p>

<h2 id="add_strings">Add your theme strings to a dictionary</h2>

If your theme design implies adding new strings, they are typically added in templates. The following paragraphs describe how to add strings in each of these template so that they get added to the dictionary. 

<h3 id="add_strings_phtml">Strings added in <code>.phtml</code> templates</h3>

To add your new string to a dictionary, use the `__('<your_string>')` construction when echoing a string in a template.

<p class="q">Is it a method or smth?</p>

For example:

	<h3><?php echo __('Create Backup') ?></h3>

<h3 id="add_strings_email">Strings added in email templates</h3>

To make sure the strings of an email template are added to the dictionary, use the `{% raw %}{{trans "<your_string>"}}{% endraw %}` directive. 
For example: 

    {% raw %}
    {{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}
    {% endraw %}

<p class="q">Can variables be added instead of strings in email templates?</p>
<p class="q">Are the strings from the email templates added to the module dictionary?</p>

<h3 id="add_strings_js">Strings added in Knockout templates</h3>

To ensure that the text you add in `.html` templates for a Knockout component will be added to the dictionary, mark the text using the `i18n` custom binding. The following code samples illustrate how i18n is used for different cases of adding a text:

- when a string is added in the scope of an HTML element, for example the *'Sign In'* string:
	<span data-bind="i18n: 'Sign In'"></span>

- when a string is added with no binding to an HTML element:

	<!-- ko i18n: 'You have no items in your shopping cart.' --><!-- /ko -->

- when a variable is added. For example the `label` variable:
	<span data-bind="i18n: label"></span>


<h3 id="add_strings_js">Strings added in .js files</h3>
To ensure that the text you add in a .js file will be added to the dictionary, you need to take the following steps:
1. Connect the `mage/translate` library:

	define (['jquery', 'mage/translate'], 
	function ($) { ...

2. Use the library when adding the string:

	$.mage.__('<string>')

<p class="q">What about variables in JS?</p>