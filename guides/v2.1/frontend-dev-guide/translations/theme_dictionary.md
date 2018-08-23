---
group: fedg
title: Use translation dictionary to customize strings
functional_areas:
  - Frontend
  - Theme
---

## What's in this topic

This topic describes how default strings can be changed in your custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} using [translation dictionaries]. It also gives a short overview of the order in which translations are searched and applied by the Magento application.

## How Magento applies locales

When the {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} is changed for a store, Magento searches for translations in the corresponding dictionaries in the following locations:

1. Module translations: `<module_dir>/i18n/`
2. Theme translations: 
	1. `<parent_theme_dir>/i18n/` (iterated through all ancestor themes)
	2. `<current_theme_dir>/i18n/`
3. Translation package: `app/i18n/`
4. Magento database

If there are different translations for one string, the theme dictionary translations have priority over the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} translations, and child theme translations have priority over parent theme translations.

## Creating a theme dictionary to override parent strings for default locale

The translations priority described earlier is applied for the default en_US locale as well. So you can use the `en_US.csv` dictionary to customize the strings used in the default locale.

For example, this approach is used in the Magento Luma theme. It has the [`<Magento_Luma_theme_dir>/i18n/en_US.csv`] file, where the left column contains the default values (keys), and the right column contains the values to be used instead when the Luma theme is applied:
```text
"Add to Wish List",	"Wish List"
"Add to Compare",	"Compare"
"Your Checkout Progress",	"Checkout Progress"
"Card Verification Number",	"CVV"
```

It is important to remember that if you generate a dictionary for your theme using the [i18n tool] with the conventional names and locations for the dictionary, the existing dictionary gets overwritten. 

That is why the recommended flow for adding custom strings is the following:

1. [Generate the dictionary] for your theme.
2. Change the necessary values in the right column, or add rows if the strings you want to replace are not in the dictionary. The i18n tool does not create a dictionary, if the theme files do not contain any strings for translation. In this case, add the file manually. 

See the [Create a translation dictionary for a theme] topic for the practical illustration of the  procedure.

### Custom strings and dictionaries for not default locales

Even if your theme uses `en_US.csv` to override certain default strings, the dictionaries for other locales for your theme should contain the default strings as keys, not the custom ones. 

Continuing the [previous example](#luma_example) with the Luma theme, if the `de_DE.csv` dictionary will be added for the Luma theme, it will look like following:
```text
"Add to Wish List",	<translation>
"Add to Compare",	<translation>
"Your Checkout Progress",	<translation>
"Card Verification Number",	<translation>
```

The default values (keys) are used in the left column.

## Recommended reading ##

- [Translations overview]({{page.baseurl}}/frontend-dev-guide/translations/xlate.html)
- [Create a translation dictionary for a theme]


[translation dictionaries]: {{page.baseurl}}/frontend-dev-guide/translations/xlate.html#translate_terms
[`<Magento_Luma_theme_dir>/i18n/en_US.csv`]: {{site.mage2000url}}app/design/frontend/Magento/luma/i18n/en_US.csv
[i18n tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Generate the dictionary]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Create a translation dictionary for a theme]: {{page.baseurl}}/frontend-dev-guide/translations/translate_practice.html
