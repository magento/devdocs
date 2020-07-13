---
group: frontend-developer-guide
title: Use translation dictionary to customize strings
functional_areas:
  - Frontend
  - Theme
---

Modify default strings in your custom [theme](https://glossary.magento.com/theme) to load and use [translation dictionaries]. Learn more about locales, modifying strings, and how Magento searches and applies translations.

## How Magento applies locales

When the [locale](https://glossary.magento.com/locale) is changed for a store, Magento searches and applies translations in the corresponding dictionaries in the following sequence:

1. Module translations: `<module_dir>/i18n/`
1. Translation package: `app/i18n/`
1. Theme translations:
   1. `<parent_theme_dir>/i18n/` (iterated through all ancestor themes)
   1. `<current_theme_dir>/i18n/`
1. Magento database (translations located in this database take precedence and override translations stored in other locations.)  Refer to the [user guide](https://docs.magento.com/m2/ce/user_guide/system/translate-inline.html) for more information.

{:.bs-callout-info}
Translation priority follows the inverse sequence, with "module translations" having the lowest priority and "magento database" having the highest priority.

If there are competing translations for one string, the theme dictionary translations have priority over the [module](https://glossary.magento.com/module) translations, and child theme translations have priority over parent theme translations.

## Creating a theme dictionary to override parent strings for default locale

The translations priority described earlier is applied for the default `en_US` locale as well. So you can use the `en_US.csv` dictionary to customize the strings used in the default locale.

For example, this approach is used in the Magento Luma theme. It has the [`<Magento_Luma_theme_dir>/i18n/en_US.csv`] file, where the left column contains the default values (keys), and the right column contains the values to be used instead when the Luma theme is applied:

```text
"Add to Wish List", "Wish List"
"Add to Compare", "Compare"
"Your Checkout Progress", "Checkout Progress"
"Card Verification Number", "CVV"
```

It is important to remember that if you generate a dictionary for your theme using the [i18n tool] with the conventional names and locations for the dictionary, the existing dictionary gets overwritten.

To add custom strings:

1. [Generate the dictionary] for your theme.
1. Change the necessary values in the right column.
1. Add custom strings as rows if the strings you want to replace are not in the dictionary.

The i18n tool does not create a dictionary if the theme files do not contain strings for translation. In this case, add the file manually.

See the [Example theme translation dictionary] topic for the practical illustration of the procedure.

## Creating locale dictionaries

When creating locale dictionaries for your theme, use the default strings as keys. Do not create translations using the custom keys you may have created and overwritten in your default locale dictionary.

Continuing the previous example with the Luma theme, we changed "Add to Wish List" to "Wish List" in `en_US.csv`. In the `de_DE.csv` dictionary, use the original, default key of "Add to Wish List" to enter your translation. Do not use the custom value "Wish List" for translations.

The locale dictionary would use the default values (keys) in the left column followed by the translation:

```text
"Add to Wish List", <translation>
"Add to Compare", <translation>
"Your Checkout Progress", <translation>
"Card Verification Number", <translation>
```

## Element translations per module

You can translate the same element in different ways for different modules:

```text
"Add to Cart", "Add to Cart", module, Magento_Review
"Add to Cart", "Add to Shopping Cart", module, Magento_Catalog
```

## Additional information

-  [Translations overview]
-  [Example theme translation dictionary]

[translation dictionaries]: {{page.baseurl}}/frontend-dev-guide/translations/xlate.html#translate_terms
[`<Magento_Luma_theme_dir>/i18n/en_US.csv`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/design/frontend/Magento/luma/i18n/en_US.csv
[i18n tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Generate the dictionary]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Example theme translation dictionary]: {{page.baseurl}}/frontend-dev-guide/translations/translate_practice.html
[Translations overview]: {{page.baseurl}}/frontend-dev-guide/translations/xlate.html
