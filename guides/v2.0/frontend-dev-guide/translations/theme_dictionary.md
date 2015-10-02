---
layout: default 
group: fedg
subgroup: G_Translate
title: Using translation dictionary to customize strings
menu_title: Using translation dictionary to customize strings
menu_order: 1
github_link: frontend-dev-guide/translations/theme_dictionary.md
---

<h2>Overview</h2>

This topic gives information about how <a href="{{site.gdeurl}}frontend-dev-guide/translations/#translate_terms">translation dictionaries</a> are used for overriding the default strings in a theme.

<h2>How Magento applies locales</h2>

When the locale is changed for a store, Magento searches for translations in the corresponding dictionaries in the following locations:

4. Module tranlsations: `app/code/<Vendor>/<Module/i18n/>`.
4. Theme translations: 
	1. `app/design/frontend/<Vendor>/<parent_theme>/i18n/` (iterated through all ancestor themes)
	2. `app/design/frontend/<Vendor>/<current_theme>/i18n/`
4. Translation package: `app/i18n/`.
5. Magento database.

The translations in theme dictionaries have priority over the module dictionaries, and child theme tranlsations have priority over parent theme translations.

<h2>Creating a theme dictionary to override the default strings</h2>

This priority is applied for the default en_US locale as well. So your can use the `en_US.csv` to customize the strings used in the default locale.

<span id="luma_example">For example, this approach is used in the Magento Luma theme. It contains the 
<a href="{{site.mage2000url}}app/design/frontend/Magento/luma/i18n/en_US.csv"><code>app/design/frontend/Magento/luma/i18n/en_US.csv</code></a> file, where the left column contains the default values (keys), and the right columns contains the values to be used instead when the Luma theme is applied:

    Add to Wish List	Wish List
    Add to Compare	Compare
    Your Checkout Progress	Checkout Progress
    Card Verification Number	CVV
    ...
</span>
It is important to remember that if you generate a dictionary for your theme using the i18n tool with the conventional names and locations for the dictionary, the existing dictionary gets overwritten. 

That is why the recommended flow for adding custom strings is the following:

1. Generate the dictionary for your theme.
2. Change the necessary values in the left column, or add rows if the strings you want to replace are not in the dictionary. 
The i18n tool does not create a dictionary, if the theme files do not contain any strings for translation. In this case, add the file manually. 

See the <a href="{{site.gdeurl}}frontend-dev-guide/translations/translate_practice.html">Create a translation dictionary for a theme</a> topic for the practical illustration of this procedure.

<h3>Custom strings and dictionaries for not default locales</h3>
Even if your theme uses the en_US.csv to overwrite certain default strings, the dictionaries for other locales for your theme, shoudl contain the default strings as keys, not the custom ones. 

Continuing the <a href="#luma_example">previous example</a> with the Luma theme, if the `de_DE.csv` dictionary will be added for the Luma theme, it will look like following:
    Add to Wish List	<translation>
    Add to Compare	<translation>
    Your Checkout Progress	<translation>
    Card Verification Number	<translation>
    ...