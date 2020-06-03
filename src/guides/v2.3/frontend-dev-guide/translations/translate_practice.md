---
group: frontend-developer-guide
title: Example theme translation dictionary
functional_areas:
  - Frontend
---

This topic is a step-by-step tutorial to create a default en_US [locale](https://glossary.magento.com/locale) [dictionary] for a custom [theme](https://glossary.magento.com/theme).

## Changing default strings {#theme}

OrangeCo created a custom `orange` theme that inherits from the Magento Blank theme. When customizing their theme, they want to rephrase certain strings used in the Blank theme and modules for the default locale.

Namely, they need the following changes:

-  Change **Add to Cart** label to **Purchase**.
-  Change **Add to Compare** label to **Compare**.
-  Change **Add to Wish List** label to **Wishlist**.

The following image shows a page where the current strings are used:

![Product page where the Add to Compare string is displayed]

To override the strings, OrangeCo plans to use the `en_US.csv` dictionary file.

1. Run the [i18n (internationalization) tool] to generate the en_US dictionary for the `orange` theme:

   ```bash
   php magento2/bin/magento i18n:collect-phrases --output="magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv" magento2/app/design/frontend/OrangeCo/orange
   ```

1. Open the newly generated `magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv` file and add the following rows:

   ```text
   "Add to Cart", "Purchase"
   "Add to Compare", "Compare"
   "Add to Wish List", "Wishlist"
   ```

1. Run the `deploy` command to get localization changes:

   ```bash
   bin/magento setup:static-content:deploy
   ```

## Results

When OrangeCo applies the orange theme, the custom strings are used instead of the default.

For example:

![Product page where the customized Compare string is displayed]

## Additional information

-  [Translations overview]
-  [Translation dictionaries and language packages]
-  [Use translation dictionary to customize strings]

[dictionary]: {{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#translate_terms
[Product page where the Add to Compare string is displayed]: {{site.baseurl}}/common/images/fdg_trans_bag.png
[i18n (internationalization) tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Product page where the customized Compare string is displayed]: {{site.baseurl}}/common/images/fdg_translations_bag2.png
[Translation dictionaries and language packages]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html
[Use translation dictionary to customize strings]: {{page.baseurl}}/frontend-dev-guide/translations/theme_dictionary.html
[Translations overview]: {{page.baseurl}}/frontend-dev-guide/translations/xlate.html
