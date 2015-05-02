---
layout: default
group: arch-guide
subgroup: Behavior
title: Translation
menu_title: Translation
menu_order: 5
menu_node: 
github_link: architecture/behavior/xlate.md
---

#### Contents

*	<a href="#m2devgde-xlate-intro">Overview of translations</a>
*	<a href="#m2devgde-xlate-translating">Manually translate words and phrases</a>
*	<a href="#m2devgde-xlate-dictionaries">Translation dictionaries</a>
*	<a href="#m2devgde-xlate-languagepack">Language packages</a>


<h2 id="m2devgde-xlate-intro">Overview of translations</h2>
Magento translations enable you to customize and localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and maintain and reduced amount of code coupling and duplication.

Benefits include:

*	Two types of translation packages:

	*	Module and theme packages. Included in the `i18n` directory of a module or theme, the Magento application auto-discovers these packages.
	*	An entire dictionary in one directory. 

		This is intended to be used and distributed as a standalone component (similar to modules and themes).

*	You can use the ready-to-use language packages prepared by other users or create your own.
*	You can create localized version based on existing, or parent, translations using language inheritance. Thus, if you missed or omitted localizing some phrases or terms, parent translations are used.
*	You can customize you translations even further by creating more than one version of a translation for the same language.

Depending on your needs, you can use the existing <a href="#m2devgde-xlate-languagepack">language packages</a> or <a href="#m2devgde-xlate-translating">translate Magento by yourself</a>.

Changes made:

*	The language package (`i18n` folder) can now be moved and saved to any directory of your extension.
*	The phrases for translation are embodied in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Phrase.php" target="_blank">Phrase</a> class.

See one of the following sections for more information:

*	<a href="#m2devgde-xlate-translating">Manually translate words and phrases</a>
*	<a href="#m2devgde-xlate-dictionaries">Translation dictionaries</a>
*	<a href="#m2devgde-xlate-languagepack">Language packages</a>

<h2 id="m2devgde-xlate-translating">Manually translate words and phrases</h2>
Translating the names, titles and phrases used in Magento involves the following steps:

1.	Generate a dictionary of your instance by using the <a href="#m2devgde-xlate-generatortool">dictionary generator tool</a>.
2.	Translate the terms.
2.	Upload your new dictionary to Magento using the <a href="#m2devgde-xlate-packtool">language package tool</a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>Only one variant of translation can be used for a word or phrase in a package. Otherwise, the system returns an error.</p>
</div>

Inline translation via the Text Editor is a customization tool used in the storefront. Changes made in the Text Editor are not recorded in an instance's dictionary; they are stored in the library in an instance's database.

In the storefront, an inline translation of a phrase overwrites the translation stated in a dictionary. However, inline translations are theme-specific and do not apply if another theme is assigned.

<h2 id="m2devgde-xlate-dictionaries">Translation dictionaries</h2>
Magento translates words and phrases when all of the following conditions are met:

*	The Magento code base has the necessary translation dictionaries for a language
*	This language is configured by the store administrator to be used in specified scope (that is, storefront)

A *translation dictionary* is a comma-separated value (.csv) file with at least two columns: the original phrase in the `en_US` locale and a translation of that phrase in an another locale. Sample translation from English (`en_US`) to German (`de_DE`):

	"Add to Cart","Zum Warenkobrn hinzufügen"
	"Add to Compare","Hinzufügen um zu vergleichen"
	"Add to Wishlist","Zum Wunschzettel hinzufügen"
	"Additional Product Info","Zusätzliche Angaben zum Produkt"
	"Address","Adresse"
	"Address %1 of %2","Adresse %1 von %2"

<div class="bs-callout bs-callout-info" id="info">
  <p>To create a language package, you the .csv file requires additional columns that specify the themes or modules in which the translations were found. For more information, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">Generate a translation dictionary</a>.</p>
</div>

In a dictionary, every phrase is used only once even if belongs to different modules or themes. The only exception to this is when a duplicate phrase belongs to one or more modules and a themes at the same time.

The Magento application automatically assembles translation dictionaries located in modules' `i18n` directory into a dictionary per language. For example, Brazilian Portuguese (`pt_BR`) translation dictionaries night be located in module and theme directories similar to the following:

	app/code/Magento/Checkout/i18n/pt_BR.csv
	app/design/frontend/Magento/demo/i18n/pt_BR.csv

Assembling the preceding `pt_BR.csv` files across all modules and the current theme results in a Portuguese translation of the entire application area (storefront or the Admin).

<h3 id="m2devgde-xlate-generatortool">The dictionary generator tool</h3>
<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict">More information about the dictionary generator tool</a>.

<h2 id="m2devgde-xlate-languagepack">Language packages</h2>
A *language package* is basically a collection of translation dictionaries for a particular language together with meta-information. You can also distribute language packages to other merchants if you wish.

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

*	`composer.json` that contains any dependencies for the language package and a mapping to its defined locale 

	<a href="{{ site.mage2000url }}app/i18n/magento/de_de/composer.json" target="_blank">Sample composer.json</a>

*	`language.xml`, in which you declare a language package.

	<a href="{{ site.mage2000url }}app/i18n/magento/de_de/language.xml" target="_blank">Sample language.xml</a>

#### Next step

To create translation dictionaries and language packages, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and packages</a>.


