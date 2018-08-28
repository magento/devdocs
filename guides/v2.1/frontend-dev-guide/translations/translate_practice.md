---
group: fedg
title: Create a translation dictionary for a theme
functional_areas:
  - Frontend
---

## What's in this topic

This topic is a step-by-step illustration of creating a default en_US {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} [dictionary]({{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#translate_terms) for a custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}. 

## Changing default strings {#theme}

OrangeCo created a custom `orange` theme that inherits from the Magento Blank theme.
Among the other changes, they want to rephrase certain strings used in the Blank theme and modules for the default locale. 

Namely, they need the following changes:
-   Change **Add to Cart** label to **Purchase**
-   Change **Add to Compare** label to **Compare**
-   Change **Add to Wish List** label to **Wishlist**


The following image shows a page where the strings meant to be changed are used:

![Product page where the Add to Compare string is displayed]

To override the strings, OrangeCo plan to use the en_US dictionary file. 

So OrangeCo take the following steps:

1. Run the [i18n (internationalization) tool] to generate the en_US dictionary for the `orange` theme:
    ```bash
    php magento2/bin/magento i18n:collect-phrases --output="magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv" magento2/app/design/frontend/OrangeCo/orange
    ```
2. Open the newly generated `magento2/app/design/frontend/OrangeCo/orange/i18n/en_US.csv` file and add the following rows:
    ```text
    "Add to Cart", "Purchase"
    "Add to Compare", "Compare"
    "Add to Wish List", "Wishlist"
    ```

Now you can run deploy command to get changes of localization,
```bash
php bin/magento setup:static-content:deploy
```

When the OrangeCo apply the orange theme, the custom strings are used instead default ones. 

For example:

![Product page where the customized Compare string is displayed]

##  Recommended reading 

-   [Translations overview]
-   [Translation dictionaries and language packages]
-   [Using translation dictionary to customize strings]



[Product page where the Add to Compare string is displayed]: {{site.baseurl}}/common/images/fdg_trans_bag.png {width="700px"}
[i18n (internationalization) tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Product page where the customized Compare string is displayed]: {{site.baseurl}}/common/images/fdg_translations_bag2.png {width="700px"}
[Translation dictionaries and language packages]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Using translation dictionary to customize strings]: {{page.baseurl}}/frontend-dev-guide/translations/theme_dictionary.html
[Translations overview]: {{page.baseurl}}/frontend-dev-guide/translations/xlate.html
