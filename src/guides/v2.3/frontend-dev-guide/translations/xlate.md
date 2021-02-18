---
group: frontend-developer-guide
title: Translations overview
functional_areas:
  - Frontend
---

The Magento application enables you to localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and by maintaining a reduced amount of code coupling and duplication.

Also, we accept [Community Engineering contributions](#translations-project) using CrowdIn for translations. The project may include package creation and further support using the contributed translations.

## Translations terms {#translate_terms}

A *translation dictionary* is a comma-separated value (.csv) file with at least two columns: the original phrase in the `en_US` locale and a translation of that phrase in an another locale. Sample translation from English (`en_US`) to German (`de_DE`):

```text
"Add to Cart","Zum Warenkorb hinzufügen"
"Add to Compare","Hinzufügen um zu vergleichen"
"Add to Wishlist","Zum Wunschzettel hinzufügen"
"Additional Product Info","Zusätzliche Angaben zum Produkt"
"Address","Adresse"
"Address %1 of %2","Adresse %1 von %2"
```

*UI text strings* are the text elements in the Magento Admin, including field names, instructions, notifications, and table and grid labels. When localizing Magento, you replace these strings with translation dictionary content.

A *language package* is basically a collection of translation dictionaries for a particular language together with meta-information. You can also distribute language packages to other merchants if you wish. [More information about language packages](#m2devgde-xlate-languagepack).

{:.bs-callout-info}
To create a language package, the `.csv` file requires additional columns that specify the themes or modules in which the translations were found. For more information, see [Generate a translation dictionary].

## Benefits of Translations

Localizing Magento storefronts and the Admin panel gives your company global presence for support and sales.

*  Magento supports two types of language packages:

   *  Translated Module and theme packages.

      Magento auto-discovers packages included in the `i18n` directory of a module or theme. When installing themes and extensions, consider checking for multiple language versions to download and use.

   *  An entire dictionary in one directory.

      Use and distribute the dictionary as a standalone component (similar to modules and themes).

*  Customize the default strings in Magento. For example, changing "Add to Wish List" to "Wish List".
*  Use ready-to-use language packages prepared by other users or create your own. The [Magento Marketplace] offers language packs to download and install.
*  Localize strings based on existing, or parent, translations using [language inheritance].
*  Customize your translations further by creating more than one version of a translation for the same language to cover dialects and different phrasing.
*  Contribute to [Magento translations](#translations-project) through [Magento CrowdIn project] with Magento Community Engineering. We encourage translation contributions and efforts in the project for future language packs.

Depending on your needs, you can use the existing [language packages](#m2devgde-xlate-languagepack), [translate Magento by yourself](#m2devgde-xlate-translating), or [contribute](#translations-project).

## Programming notes

*  It is recommended, but not enforced, that you do not place variables inside `__()` functions or `new Phrase()` calls. The scanner that collects the phrases from the code cannot interpret and collect the value of the variable when it is in these locations. Instead, you should place the full text in the `__()` function or `new Phrase()` call. If you need to specify a variable in these cases, ensure that it is translated correctly wherever it is defined as a string literal.
*  The [language package](https://glossary.magento.com/language-package) (`i18n` directory) can be saved to any directory of your [extension](https://glossary.magento.com/extension).
*  The phrases for translations are enabled in the [Phrase] class.

## Theme dictionaries {#m2devgde-xlate-themes}

You might need to add a dictionary for the default language (en_US) in the following cases:

*  To replace or customize strings in the [parent theme]. For example, use "Compare" instead of "Add to Compare".
*  To prepare your [theme](https://glossary.magento.com/theme) for localization. More merchants may use your theme if it supports localization.

For an example of creating a dictionary for a theme for both cases, see [Example theme translation dictionary].

## Manually translate words and phrases {#m2devgde-xlate-translating}

To translate names, titles, and phrases used in Magento:

1. Generate a dictionary of your instance using the [translation dictionary tool]. Fully review [Translation dictionaries and packages] to understand all steps, commands, and best practices for generating the dictionary.
1. Translate the terms.
1. If desired, package your translations in a [language package].

 {:.bs-callout-info}
Only one variant of translation can be used for a word or phrase in a package. Otherwise, Magento returns an error.

Anyone can submit inline translations on the [storefront](https://glossary.magento.com/storefront) using the Text Editor. These inline translations overwrite a dictionary and save to your database (not in an instance's dictionary). Inline translations are theme-specific and do not apply if another theme is assigned.

To save and reuse translations, we recommend localizing in a dictionary.

## Translation dictionaries {#m2devgde-xlate-dictionaries}

Magento translates words and phrases when all of the following conditions are met:

*  The Magento code base has the necessary translation dictionaries for a language.
*  This language is configured by the store administrator to be used in specified scope (that is, storefront).

The Magento application automatically assembles translation dictionaries located in the modules' `i18n` directory into a dictionary per language. For example, Brazilian Portuguese (`pt_BR`) translation dictionaries might be located in [module](https://glossary.magento.com/module) and theme directories similar to the following:

*  `<Magento_Checkout_module_dir>/i18n/pt_BR.csv`
*  `<Magento_Checkout_module_dir>/<theme>/i18n/pt_BR.csv`

{:.bs-callout-info}
`<Magento_Checkout_module_dir>` stands for the `Magento_Checkout` module directory. The location of this directory depends on the way Magento was installed. See [Conventional notations for paths to modules and themes] for details.

Assembling the preceding `pt_BR.csv` files across all modules and the current theme results in a Portuguese translation of the entire application area (storefront or the Admin).

### Dictionary generator tool {#m2devgde-xlate-generatortool}

You can generate a translation dictionary to use by itself (for example, to translate words and phrases in a custom module) or for use by a [language package](https://glossary.magento.com/language-package). For more information, see [dictionary generator tool - We intend to publish more information on this technique at a later time].

## Language packages {#m2devgde-xlate-languagepack}

{:.bs-callout-tip}
Existing language packages can be installed using [Composer]({{ site.baseurl }}/cloud/howtos/install-components.html) like any other extension. You can search for package names on Packagist.

Magento enables you to create the following types of language packages:

*  A set of `.csv` files for modules and themes. These packages files are intended to be deployed in modules. For example:

   ```tree
   __/app
    |__/code
    | |__/Magento
    |   |__/Catalog
    |   | |__/i18n
    |   |   |-- pt_BR.csv
    |   |__/Checkout
    |   | |__/i18n
    |   |   |-- pt_BR.csv
    |   |__/Customer
    |     |__/i18n
    |       |-- pt_BR.csv
    |__/design
      |__/frontend
        |__/<Vendor>
          |__/<theme>
            |__/i18n
              |-- pt_BR.csv
   ```

*  Language packages that contain a entire dictionary in one directory.

   You can distribute this language package as a standalone component (similar to modules and themes). Interestingly, it violates Magento's modularity principles on purpose; that is, so that a system integrator can translate variations provided by extensions.

In addition to the `.csv` file that contains the language dictionary, the language package contains meta-information:

*  `composer.json` that contains any dependencies for the language package and a mapping to its defined [locale](https://glossary.magento.com/locale). [Sample composer.json]({{ page.baseurl }}/extension-dev-guide/package/package_module.html#sample-composerjson-file).

*  `language.xml`, in which you declare a language package.
   [Sample language.xml]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-example2).

## Community Engineering Translations project {#translations-project}

Community Engineering accepts translation contributions through the [Magento CrowdIn project] to localize all UI strings. Various Meet Magento and Contribution Day events include developers contributing translations.

1. Create a [CrowdIn account] and join the [Magento CrowdIn project].
1. Browse and select a language. A percentage displays tracking translation progress overall and per section of the Magento Admin.
1. Expand and locate an area of UI text strings to translate. Strings marked red need a translation, and marked green have existing translations.
1. Enter or review translations for strings as described in the [CrowdIn knowledge base].

Magento admins will review and approve translations as available. The project may include package creation and further support using the contributed and approved translations.

If you need help understanding the context or meaning of a UI string, or have questions about the project, chat with us in the Community Engineering [Translations Slack channel]. To join, send a request to [engcom@magento.com] or [self signup].

## Additional information

*  [Translation dictionaries and packages]
*  [Use translation dictionary to customize strings]
*  [Translate theme strings]
*  [Example theme translation dictionary]
*  [Magento translations GitHub project]

[Generate a translation dictionary]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[language inheritance]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#m2devgde-xlate-inheritancework
[parent theme]: {{page.baseurl}}/frontend-dev-guide/themes/theme-inherit.html
[Example theme translation dictionary]: {{page.baseurl}}/frontend-dev-guide/translations/translate_practice.html
[translation dictionary tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[language package]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack
[dictionary generator tool]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict
[Translation dictionaries and packages]: {{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html
[Magento CrowdIn project]: https://crowdin.com/project/magento-2
[CrowdIn account]: https://crowdin.com/join
[CrowdIn knowledge base]: https://support.crowdin.com/online-editor
[engcom@magento.com]: mailto:engcom@magento.com
[self signup]: https://tinyurl.com/engcom-slack
[Translations Slack channel]: https://magentocommeng.slack.com/messages/CD97DKBHS
[Magento Marketplace]: https://marketplace.magento.com/catalogsearch/result/?q=language%20packs#q=language%20pack&idx=m2_cloud_prod_default_products&p=0&nR%5Bvisibility_search%5D%5B%3D%5D%5B0%5D=1
[Conventional notations for paths to modules and themes]: {{page.baseurl}}/frontend-dev-guide/conventions.html
[Use translation dictionary to customize strings]: {{page.baseurl}}/frontend-dev-guide/translations/theme_dictionary.html
[Translate theme strings]: {{page.baseurl}}/frontend-dev-guide/translations/translate_theory.html
[Example theme translation dictionary]: {{page.baseurl}}/frontend-dev-guide/translations/translate_practice.html
[Magento translations GitHub project]: https://github.com/magento-l10n
