---
layout: default 
group: fedg
subgroup: G_Translate
title: Use translation dictionary to customize strings
menu_title: Use translation dictionary to customize strings
menu_order: 1
version: 2.0
github_link: frontend-dev-guide/translations/theme_dictionary.md
---

<h2>What's in this topic</h2>

This topic describes how default strings can be changed in your custom theme using <a href="{{page.baseurl}}frontend-dev-guide/translations/xlate.html#translate_terms">translation dictionaries</a>. It also gives a short overview of the order in which translations are searched and applied by the Magento application.

<h2>How Magento applies locales</h2>

When the locale is changed for a store, Magento searches for translations in the corresponding dictionaries in the following locations:

4. Module translations: `<module_dir>/i18n/`
4. Theme translations: 
	1. `<parent_theme_dir>/i18n/` (iterated through all ancestor themes)
	2. `<current_theme_dir>/i18n/`
4. Translation package: `app/i18n/`
5. Magento database

If there are different translations for one string, the theme dictionary translations have priority over the module translations, and child theme translations have priority over parent theme translations.

<h2>Creating a theme dictionary to override parent strings for default locale</h2>

The translations priority described earlier is applied for the default en_US locale as well. So you can use the `en_US.csv` dictionary to customize the strings used in the default locale.

<span id="luma_example">For example, this approach is used in the Magento Luma theme. It has the 
<a href="{{site.mage2000url}}app/design/frontend/Magento/luma/i18n/en_US.csv"><code>&lt;Magento_Luma_theme_dir&gt;/i18n/en_US.csv</code></a> file, where the left column contains the default values (keys), and the right columns contains the values to be used instead when the Luma theme is applied:
</span>

    "Add to Wish List",	"Wish List"
    "Add to Compare",	"Compare"
    "Your Checkout Progress",	"Checkout Progress"
    "Card Verification Number",	"CVV"
    ...

It is important to remember that if you generate a dictionary for your theme using the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">i18n tool</a> with the conventional names and locations for the dictionary, the existing dictionary gets overwritten. 

That is why the recommended flow for adding custom strings is the following:

1. <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">Generate the dictionary</a> for your theme.
2. Change the necessary values in the right column, or add rows if the strings you want to replace are not in the dictionary. The i18n tool does not create a dictionary, if the theme files do not contain any strings for translation. In this case, add the file manually. 

See the <a href="{{page.baseurl}}frontend-dev-guide/translations/translate_practice.html">Create a translation dictionary for a theme</a> topic for the practical illustration of the  procedure.



<h3>Custom strings and dictionaries for not default locales</h3>
Even if your theme uses `en_US.csv` to override certain default strings, the dictionaries for other locales for your theme should contain the default strings as keys, not the custom ones. 

Continuing the <a href="#luma_example">previous example</a> with the Luma theme, if the `de_DE.csv` dictionary will be added for the Luma theme, it will look like following:

    "Add to Wish List",	<translation>
    "Add to Compare",	<translation>
    "Your Checkout Progress",	<translation>
    "Card Verification Number",	<translation>
    ...

The default values (keys) are used in the left column.

## Recommended reading ##
- <a href="{{page.baseurl}}frontend-dev-guide/translations/xlate.html">Translations overview</a>
-  <a href="{{page.baseurl}}frontend-dev-guide/translations/translate_practice.html">Create a translation dictionary for a theme</a>
