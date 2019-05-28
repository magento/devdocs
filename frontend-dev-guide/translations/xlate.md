---
group: frontend-developer-guide
subgroup: G_Translate
title: Translations overview
menu_title: Translations
menu_order: 1
menu_node: parent
redirect_from:
  - /guides/v2.0/architecture/behavior/xlate.html
functional_areas:
  - Frontend
---

## Overview of translations   {#m2devgde-xlate-intro}

The Magento application enables you to localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and by maintaining a reduced amount of code coupling and duplication.

### Terms used   {#translate_terms}

A *translation dictionary* is a comma-separated value (.csv) file with at least two columns: the original phrase in the `en_US` locale and a translation of that phrase in an another locale. Sample translation from English (`en_US`) to German (`de_DE`):

	"Add to Cart","Zum Warenkorb hinzufügen"
	"Add to Compare","Hinzufügen um zu vergleichen"
	"Add to Wishlist","Zum Wunschzettel hinzufügen"
	"Additional Product Info","Zusätzliche Angaben zum Produkt"
	"Address","Adresse"
	"Address %1 of %2","Adresse %1 von %2"

A *language package* is basically a collection of translation dictionaries for a particular language together with meta-information. You can also distribute language packages to other merchants if you wish. <a href="#m2devgde-xlate-languagepack">More information about language packages</a>.

{: .bs-callout .bs-callout-info }
To create a language package, the .csv file requires additional columns that specify the themes or modules in which the translations were found. For more information, see [Generate a translation dictionary]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict).

### Benefits

Benefits include:

*	Two types of language packages:

	*	Module and theme packages. Included in the `i18n` directory of a module or theme, the Magento application auto-discovers these packages.
	*	An entire dictionary in one directory. 

		This is intended to be used and distributed as a standalone component (similar to modules and themes).

*	You can use the ready-to-use language packages prepared by other users or you can create your own.
*	You can create localizations based on existing, or parent, translations using <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#m2devgde-xlate-inheritancework">language inheritance</a>. Inheritance means (among other things) that if you missed or omitted localizing some phrases or terms, parent translations are used.
*	You can customize your translations even further by creating more than one version of a translation for the same language.

Depending on your needs, you can use the existing <a href="#m2devgde-xlate-languagepack">language packages</a> or <a href="#m2devgde-xlate-translating">translate Magento by yourself</a>.

### Changes in Magento 2

Changes made:

*	The {% glossarytooltip 9c4c7b9b-43f0-4454-8e8c-fb62ad40c35f %}language package{% endglossarytooltip %} (`i18n` directory) can now be moved and saved to any directory of your {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}.
*	The phrases for translations are enabled in the <a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Phrase.php" target="_blank">Phrase</a> class.

### More information

See one of the following sections for more information:

* <a href="#m2devgde-xlate-themes">Why you might need to add a dictionary for a theme</a>
*	<a href="#m2devgde-xlate-translating">Manually translate words and phrases</a>
*	<a href="#m2devgde-xlate-dictionaries">Translation dictionaries</a>
*	<a href="#m2devgde-xlate-languagepack">Language packages</a>

## Why you might need to add a dictionary for a theme   {#m2devgde-xlate-themes}

You might need to add a dictionary for the default language (en_US) in the following cases:

- if you want to replace certain strings from the <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html">parent theme</a>. For example, use "Compare" instead of "Add to Compare".
- if you want your {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} to be ready for localization. 

For practical illustration of creating a dictionary for a theme for both cases, see the <a href="{{ page.baseurl }}/frontend-dev-guide/translations/translate_practice.html">Example theme translation dictionary</a> topic.

## Manually translate words and phrases   {#m2devgde-xlate-translating}

Translating the names, titles and phrases used in Magento involves the following steps:

1.	Generate a dictionary of your instance using the <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">translation dictionary tool</a>.
2.	Translate the terms.
2.	If desired, package your translations in a <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-pack">language package</a>.

{: .bs-callout .bs-callout-info }
Only one variant of translation can be used for a word or phrase in a package. Otherwise, Magento returns an error.

Anyone can submit translations on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} using the Text Editor. Changes made in the Text Editor are not recorded in an instance's dictionary; instead, they are stored in the database. In the storefront, an inline translation of a phrase overwrites the translation stated in a dictionary. However, inline translations are theme-specific and do not apply if another theme is assigned.

## Translation dictionaries   {#m2devgde-xlate-dictionaries}

Magento translates words and phrases when all of the following conditions are met:

*	The Magento code base has the necessary translation dictionaries for a language
*	This language is configured by the store administrator to be used in specified scope (that is, storefront)

The Magento application automatically assembles translation dictionaries located in modules' `i18n` directory into a dictionary per language. For example, Brazilian Portuguese (`pt_BR`) translation dictionaries might be located in {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and theme directories similar to the following:

	app/code/Magento/Checkout/i18n/pt_BR.csv
	app/design/frontend/Magento/demo/i18n/pt_BR.csv

Assembling the preceding `pt_BR.csv` files across all modules and the current theme results in a Portuguese translation of the entire application area (storefront or the Admin).

### The dictionary generator tool   {#m2devgde-xlate-generatortool}

<a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">More information about the dictionary generator tool</a>.

## Language packages   {#m2devgde-xlate-languagepack}

Magento enables you to create the following types of language packages:

*	A set of .csv files for modules and themes. These packages files are intended to be deployed in modules. For example:

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
		     |__/Magento
		       |__/demo
		         |__/i18n
		           |-- pt_BR.csv


*	Language packages that contain a entire dictionary in one directory. 

	You can distribute this language package as a standalone component (similar to modules and themes). Interestingly, it violates Magento's modularity principles on purpose; that is, so that a system integrator can translations variations provided by extensions. 

In addition to the `.csv` file that contains the language dictionary, the language package contains meta-information:

*	`composer.json` that contains any dependencies for the language package and a mapping to its defined {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %} 

	<a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/i18n/magento/de_de/composer.json" target="_blank">Sample composer.json</a>

*	`language.xml`, in which you declare a language package.

	<a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/app/i18n/magento/de_de/language.xml" target="_blank">Sample language.xml</a>

#### Next step

To create translation dictionaries and language packages, see <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and packages</a>.


