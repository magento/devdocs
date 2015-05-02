---
layout: default
group: config-guide 
subgroup: CLI
title: Translation dictionaries and packages
menu_title: Translation dictionaries and packages
menu_node: 
menu_order: 15
github_link: config-guide/cli/config-cli-subcommands-i18n.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-configphp-prereq">Prerequisites</a>
*	<a href="#config-cli-subcommands-xlate-dict">Generate a translation dictionary</a>
*	<a href="#config-cli-subcommands-xlate-pack">Create a language package</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-subcommands-configphp-prereq">Prerequisites</h2>
TBD

<h2 id="config-cli-xlate-overview">Overview of translations</h2>
Magento translations enable you to customize and localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and maintain and reduced amount of code coupling and duplication.

For more information, see <a href="{{ site.gdeurl }}architecture/behavior/xlate.html">Translation</a>.

This topic discusses how to generate translation dictionaries and language packages.
  
<h2 id="config-cli-subcommands-xlate-dict">Generate a translation dictionary</h2>
See one of the following sections:

*	<a href="#config-cli-subcommands-xlate-dict-whatis">About translation dictionaries</a>
*	<a href="#config-cli-subcommands-xlate-dict-dict">Work with translation dictionaries</a>

<h3 id="config-cli-subcommands-xlate-dict-whatis">About translation dictionaries</h3>
Magento translates words and phrases when both of the following conditions are met:

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
  <p>To create a language pack, you the .csv file requires additional columns that specify the themes or modules in which the translations were found. More information about this is discussed in the next section.</p>
</div>

The Magento application automatically assembles translation dictionaries located in modules' `i18n` directory into a dictionary per language. For example, Brazilian Portugese (`pt_BR`) translation dictionaries night be located in module and theme directories similar to the following:

	app/code/Magento/Checkout/i18n/pt_BR.csv
	app/design/frontend/Magento/demo/i18n/pt_BR.csv

Assembling the preceding `pt_BR.csv` files across all modules and the current theme results in a Portugese translation of the entire application area (storefront or the Admin).

<h3 id="config-cli-subcommands-xlate-dict-dict">Work with translation dictionaries</h3>
To translate words and phrases, you must:

1.	Run the translation collection command to extract translatable words and phrases from enabled modules.
2.	Translate the words and phrases.

After that,

1.	You package the translation dictionaries into translation packages and provide them to the Magento store administrator.
2.	The store administrator configures the translations to be used in the Magento Admin.

Command options:

	php magento i18n:collect-phrases [-o|--output="<csv file path and name"] [-m|--magento] <path to directory to translate>

The following table discusses the meanings of this command's parameters and values. 

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		
	<tr>
		<td><p>&lt;path to directory to translate></p></td>
		<td><p>Path to a directory that has translatable code; in other words, PHP, PHTML, or XML files that have phrases to translate.</p>
		<p>The tool starts searching at the path you enter and searches all files and subdirectories it contains. </p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>-m|--magento</p></td>
		<td><p>If used, indicates the path you specified is the Magento installation root. This option adds themes or modules to each line in the dictionary. A sample follows:</p>
			<p><pre>"No Items Found","No Items Found",module,Magento_Wishlist</pre></p></td>
			<td><p>No</p></td>
</tr>
<tr>
		<td><p>-o|--output</p></td>
		<td><p>Specifies the absolute file system path and file name of the translation dictionary .csv file to create. <em>The value you enter is case-sensitive</em>.</p>
			<p>If you omit this parameter, the output is directed to stdout.</p>
		</td>
		<td>
			<p>No</p>
		</td>
	</tr>
	</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
  <p>To create a language pack, you <em>must</em> use the <code>-m|--magento</code> option.</p>
</div>

<h2 id="config-cli-subcommands-xlate-pack">Create a language package</h2>
A *language package* is basically a collection of translation dictionaries for a particular language. You can also distribute language packages to other merchants if you wish.

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


*	Translation packages that contain a entire dictionary in one directory. 

	You can distribute this language package as a standalone component (similar to modules and themes). Interestingly, it violates Magento's modularity principles on purpose; that is, so that a system integrator can translations variations provided by extensions. 

Command usage:

	php magento i18n:pack [-m|--mode={merge|replace}] [-d|--allow-duplicates] <source> <pack> <locale>

The following table discusses the meanings of this command's parameters and values. 

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		
	<tr>
		<td><p>&lt;source></p></td>
		<td><p>Absolute file system path and file name of a .csv file that contains the combined translation dictionary and meta-information necessary for breakdown into a language package. The file must have been generated using <code>generator.php with -m|--magento</code>.  </p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>&lt;pack></p></td>
		<td><p>Absolute file system path to the output directory. Files written to that directory replace existing files. All necessary nested directories are created automatically. </p></td>
			<td><p>Yes</p></td>
</tr>
<tr>
		<td><p>&lt;locale></p></td>
		<td><p><a href="http://www.iso.org/iso/home/standards/language_codes.htm" target="_blank">ISO 639-1</a> (language) and <a href="http://www.iso.org/iso/country_codes.htm" target="_blank">ISO 3166</a> (country) identifier of language used as file name for all resulting .csv files. Examples: `de_DE`, `pt_PT`, `pt_BR` </p>
		</td>
		<td>
			<p>Yes</p>
		</td>
	</tr>
	<tr>
		<td><p>-m|--mode</p></td>
		<td><p>If a target file already exists, specifies whether to replace the existing language pack or merge with the new language pack. Merging overrides any phrases that existed and adds new ones. </p>
			<p>Values: <code>merge</code> or <code>replace</code> (the default).</p>
		</td>
		<td>
			<p>No</p>
		</td>
	</tr>
	<tr>
		<td><p>-d|--allow-duplicates</p></td>
		<td><p>Include this option to allow duplicates in the language pack. Otherwise, the command fails with an error if it encounters the same phrase is translated in different ways in different lines.</p>
			<p>As a best practice, avoid using this parameter because duplicate translations can be confusing to users.</p>
		</td>
		<td>
			<p>No</p>
		</td>
	</tr>
	</tbody>
</table>

<h2 id="config-cli-subcommands-xlate-examples">Examples of using translation commands</h2>
The following sections provide end-to-end examples of using the commands discussed in this topic to create translation dictionaries and translation packages:

*	<a href="#config-cli-subcommands-xlate-example1">Create a translation dictionary for a module or theme</a>


<h3 id="config-cli-subcommands-xlate-example1">Create a translation dictionary for a module or theme</h3>
To add a German translation to module or theme you want to distribute to other merchants:

1.	Collect phrases from your module:

		php magento i18n:collect-phrases -o=de_DE.csv /var/www/html/magento2/ExampleCorp/SampleModule

2.	Translate the words and phrases using these guidelines TBD.
3.	Copy 'de_DE.csv' to `/var/www/html/magento2/ExampleCorp/SampleModule` or to the module's theme directory.

<h3 id="config-cli-subcommands-xlate-example2">Create a language package</h3>
TBD


#### Related topics


