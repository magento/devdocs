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

The module dictionary is stored in the `app/code/<Vendor>/<module>/i18n` directory.

<p class="q">Need to think about a case when the theme is created not in the default language at once</p>

<h2 id="add_strings">Add your theme strings to a dictionary</h2>

If your theme design implies adding new strings, they are typically added in templates: `.phtml`, `.html` (email) templates or `.js`. The following paragraphs describe how to add strings in each of these template so that they get added to the dictionary. 

<h3 id="add_strings_phtml">Strings added in <code>.phtml</code> templates</h3>

To add your new string to a dictionary, use the `__('<your_string>')` construction when echoing a string in a template.

<p class="q">Is it a method or smth?</p>

For example:

	<h3><?php echo __('Create Backup') ?></h3>

<h3 id="add_strings_email">Strings added in email templates</h3>

To make sure the strings of an email template are added to the dictionary, use the `{{trans "<your_string>"}}` directive. 
For example, 

	{{trans "Thank you for your order from %store_name." store_name=$store.getFrontendName()}}

<p class="q">Are the strings from the email templates added to the module dictionary?</p>

<h3 id="add_strings_js">Strings added in a `.js` template (Knockout JS templates) </h3>