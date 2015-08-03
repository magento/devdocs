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

A translation dictionary is a comma-separated value (.csv) file with at least two columns: the original phrase in the en_US locale and a translation of that phrase in an another locale. 

To ensure your theme is applied correctly with any language applied, you need to make sure that the original strings of a theme are added to the module dictionary. Then once a language package is used to translate a store, the theme strings are translated as well.

The module dictionary is stored in the `app/code/<Vendor>/<module>/i18n` directory.

<p class="q">Need to think about a case when the theme is created not in the default language at once</p>

<h2>Add your theme strings to a dictionary</h2>

<h3>Strings added in .phtml templates</h3>
Your custom theme might contain the strings, not present in the default themes. 
Typically, this strings are added in `.phtml` templates.

To add your new string to a dictionary, use the `__('<your_string>')` construction when echoing the string in a template.

<p class="q">Is it a method or smth?</p>

For example:

	<h3><?php echo __('Create Backup') ?></h3>

<h3>Strings added in email templates</h3>

To make sure the strings of an email template are added to the dictionary, use the `{{trans "<your_string>"}}` directive. 
For example, 

	{{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}

<p class="q">Are the strings from the email templates added to the module dictionary?</p>

<h3>Strings added in a .js template (Knockout JS templates) </h3>