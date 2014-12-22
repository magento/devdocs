---
layout: default
group: fedg
subgroup: Translation
title: Translation
menu_title: Translation
menu_order: 1
menu_node: parent
github_link: architecture/behavior/xlate.md
---

<h2 id="m2devgde-xlate-intro">Introduction</h2>

The Magento translation functionality enables you to customize and localize your store for multiple regions and markets.

The translation functionality was changed to improve the localization and customization of Magento instances. Specifically, the dictionaries are easier to update and maintain and the code coupling and duplication are reduced.

How you can benefit from translation feature in Magento

*	You can translate any part of your store (that is, a module, theme) without influencing other parts.
*	You can use the ready-to-use language packages prepared by other users or create your own.
*	You can create localized version based on existing, or parent, translations by using language inheritance feature. Thus, if you missed or omitted localizing some phrases/terms, parent translations are used.
*	You can customize you translations even further by creating more than one version of translation for the same language.

Depending on your needs, you can use the existing <a href="#m2devgde-xlate-languagepack">language packages</a> or <a href="#m2devgde-xlate-translating">translate Magento by yourself</a>.

Changes made:

*	The language package (`i18n` folder) can now be moved and saved to any directory of your extension.
*	The phrases for translation are embodied in <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Phrase.php" target="_blank">Phrase</a> class.
*	The translation tool has been divided into two tools: one for the dictionary generator and one for uploading the language package.
*	The translation tool uses lazy loading.


<h2 id="m2devgde-xlate-translating">Manually translate Magento</h2>

Translating the names, titles and phrases used in Magento involves the following steps:

1.	Generate a dictionary of your instance by using the <a href="#m2devgde-xlate-generatortool">dictionary generator tool</a>.
2.	Translate the terms.
2.	Upload your new dictionary to Magento using the <a href="#m2devgde-xlate-packtool">language package tool</a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>Only one variant of translation can be used for a word or phrase in a pack. Otherwise, the system returns an error.</p>
</div>

Inline translation via the Text Editor is a customization tool used in the storefront. Changes made in the Text Editor are not recorded in an instance's dictionary; they are stored in the library in an instance's database.

In the storefront, an inline translation of a phrase overwrites the translation stated in a dictionary. However, inline translations are theme-specific and do not apply if another theme is assigned.

<h2 id="m2devgde-xlate-dictionaries">What is a dictionary?</h2>

A dictionary is a .csv file containing names/titles/phrases used in Magento. Depending on your configurations, a dictionary can contain all phrases used in Magento or phrases belonging to specified modules/themes.

In a dictionary, every phrase, name and title is mentioned only once, even if belongs to different modules or themes. The only exception to this rule is when a duplicate phrase belongs to a module(s) and a theme(s) at the same time.

Typically, a dictionary contains three columns:


*	Key. Contains the default/key meaning of a phrase (in en_US locale) and is used to assign a phrase's translation properly. Should not be changed.
*	Translation. Contains the translated/customized variant of a phrase. This is the only column a translator should edit.
*	Meta information. Retrieves the module(s) and theme(s) where a phrase is used. Should not be changed. You can opt to generate a dictionary without meta information for reference purposes only (refer to <a href="#m2devgde-xlate-generatortool">Using the dictionary generator tool</a> section for details).

Sample of a dictionary with meta information:

<pre>"Add New Block","Add New Block","module","Mage_Cms"
"Add New Page","Add New Page","module","Mage_Cms"
"All Countries","All Countries","theme","demo"
"An error occurred while saving the page.","An error occurred while saving the page.","module","Mage_Cms"
</pre>

Dictionary files can be located in different parts of the code base and are assembled into single language-specific dictionary automatically in the runtime.

Meta information in a dictionary file is necessary for defining where the translation of a phrase should be assigned. A dictionary file without the meta information must be uploaded manually to appropriate module. For example, if you create a dictionary file for a custom/extension module, this file does not have the meta information. Thus, to make a new dictionary available in a custom module, upload a dictionary file to `i18n` folder of this module, for instance: `app/code/<ModuleName>/<VendorName>/i18n/fr_FR.csv`.

<h3 id="m2devgde-xlate-generatortool">The dictionary generator tool</h3>

The dictionary generator tool compiles a list of all phrases, names, and titles used in Magento, that is, a dictionary. The generator tool gathers phrases and terms throughout entire Magento, that is, from all supported file types.

To generate a dictionary, use the command line:

<pre>php&nbsp;-f&nbsp;generator.php&nbsp;--&nbsp;-d&nbsp;&lt;directory&gt;&nbsp;[-m&nbsp;y]&nbsp;[-o&nbsp;&lt;filename&gt;]
php&nbsp;-f&nbsp;generator.php&nbsp;--&nbsp;--directory=&lt;directory&gt;&nbsp;[--magento=y]&nbsp;[--output=&lt;filename&gt;]
</pre>

For generating a dictionary, you should specify the following parameters:

*	`-d|directory` defines path to a directory to be parsed. This parameter is required.
*	`-o|output` defines the name of the output file (a dictionary); by default, the output file (dictionary) is saved in the directory from which the script was launched. This parameter is optional.
*	`-m|magento` defines whether a directory belongs to the root code base, that is, whether the meta information should be included into a dictionary; by default, the value is set to 'no'. The value can be set to 'yes' only for the Magento root directory, otherwise the parser cannot find the correct path. This parameter is optional.

<h2 id="m2devgde-xlate-languagepack">Language packs</h2>

The language pack is a dictionary divided into separate module-specific files. You can download the ready-to-use language packs and customize them, even if you do not have a Magento instance installed.

After the customization is done, copy the language pack and paste it in the appropriate directory in your Magento instance or use the <a href="#m2devgde-xlate-packtool">language pack tool</a>.

Find the language packs in the `app/i18n/<ModuleName>/<VendorName>` directory.

<pre>__/app/i18n
&nbsp;|__/magento
&nbsp;|&nbsp;|__/de_de
&nbsp;|&nbsp;|&nbsp;|--&nbsp;language.xml
&nbsp;|&nbsp;|&nbsp;|--&nbsp;composer.json
&nbsp;|&nbsp;|&nbsp;|--&nbsp;*.csv
&nbsp;|&nbsp;|__/fr_fr
&nbsp;|&nbsp;&nbsp;&nbsp;|--&nbsp;language.xml
&nbsp;|&nbsp;&nbsp;&nbsp;|--&nbsp;composer.json
&nbsp;|&nbsp;&nbsp;&nbsp;|--&nbsp;*.csv
&nbsp;|__/oxford-university
&nbsp;|&nbsp;|__/en_gb
&nbsp;|&nbsp;&nbsp;&nbsp;|--&nbsp;language.xml
&nbsp;|&nbsp;&nbsp;&nbsp;|--&nbsp;composer.json
&nbsp;|&nbsp;&nbsp;&nbsp;|--&nbsp;*.csv
</pre>

Apart from the `.csv` file that contains the language pack, the directory encompasses `composer.json` file, which allows the system composer to recognize a pack, and `language.xml` file, in which you declare a language pack.

<h3 id="m2devgde-xlate-inheritance">Declare a package and configure language inheritance</h3>

When declaring a language pack in `language.xml` configuration file, you must specify the sequence of the language inheritance for this pack.

Language inheritance ensures sustainability of localization and translations in your store. Also, it facilitates translating and customizing Magento for your needs. Inheritance means that you can create a new locale/translation based on the existing one (also known as _parent_). The child locales/translations override the parent. However, if the child locale/translation fails to upload or display for a user, parent locale/translation is used instead. Also, if some child translation lacks a phrase or a word, this phrase or word is taken from the parent locale.

To declare a pack, specify the following information:

<pre>&lt;?xml&nbsp;version=&quot;1.0&quot;?&gt;
&lt;language&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../&lt;path&gt;/Magento/Framework/App/Language/package.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;code&gt;en_GB&lt;/code&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;vendor&gt;magento&lt;/vendor&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;package&gt;en_gb&lt;/package&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;sort_order&gt;100&lt;/sort_order&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;use&nbsp;vendor=&quot;oxford-university&quot;&nbsp;package=&quot;en_us&quot;/&gt;
&lt;/language&gt;
</pre>

*	`<code>` - code of the language pack; this parameter is mandatory
*	`<vendor>` - name of a vendor, who created a package; this parameter is mandatory
*	`<package>` - name of the language pack; this parameter is mandatory
*	`<sort_order>` - priority of uploading a pack when there are several language packs available for a store; this parameter is optional
*	`<use>` - name and code of the parent language package; this parameter is optional

If necessary, you can specify several parent packs. The parent packs are applied on 'first listed - first used' basis.

<h4 id="m2devgde-xlate-inheritancework">Example: how language inheritance works</h4>

To understand how the language inheritance works, imagine a language pack that descends from two other packs, and those packs also have parent and 'grand-parent' packs.

**If a language pack descends from two packs:**

<pre>&lt;language&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../&lt;path&gt;/Magento/Framework/App/Language/package.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;code&gt;en_GB&lt;/code&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;vendor&gt;Magento&lt;/vendor&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;package&gt;language_pack&lt;/package&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;sort_order&gt;100&lt;/sort_order&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;use&nbsp;vendor=&quot;parent-pack-one&quot;&nbsp;package=&quot;language_pack_one&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;use&nbsp;vendor=&nbsp;&quot;parent-pack-two&quot;&nbsp;package=&quot;language_pack_two&quot;/&gt;
&lt;/language&gt;
</pre>

*	language_pack_one descends from en_au_pack and en_au_pack descends from en_ie_pack
*	language_pack_two descends from en_ca_pack and en_ca_pack descends from en_us_pack

**Then** after system fails to find a term in en_GB pack, it looks in other packs in following sequence:

1.	parent_pack_one/language_pack_one
1.	<VendorName>/en_au_pack
1.	<VendorName>/en_ie_pack
1.	parent_pack_two/language_pack_two
1.	<VendorName>/en_ca_pack
1.	<VendorName>/en_us_pack

Specifying all inheritances between the language packs might result in creating circular inheritance chains. Use <a href="{{ site.mage2000url }}dev/tests/static/testsuite/Magento/Test/Integrity/App/Language/CircularDependencyTest.php" target="_blank">Magento\Test\Integrity\App\Language\CircularDependencyTest</a> test to locate and fix such chains.

<h3 id="m2devgde-xlate-severalpacks">Configure multiple packages for a language</h3>

To help you to make your store more flexible, you can upload several language packages for the same language in your store. Thus, you can use different custom packs for different parts of your store because the system compiles a single pack from all packs that are available for a language.

To enable additional package for existing language, name the new package any name except for an existing language code name (to avoid confusion). Specify configurations of a pack in `language.xml` file as described in the <a href="#m2devgde-xlate-inheritance">Declaring a Pack and Configuring Language Inheritance</a>.

<h3 id="m2devgde-xlate-packtool">The language package tool</h3>

Use the language pack tool to upload the translated dictionary to your Magento instance. The language pack tool distributes translated names, titles, and phrases to appropriate modules.

Use the command line to invoke the language pack tool:

<pre>php&nbsp;-f&nbsp;pack.php&nbsp;--&nbsp;-s&nbsp;&lt;source_file&gt;&nbsp;-l&nbsp;&lt;language_code&gt;&nbsp;-p&nbsp;&lt;target_dir&gt;&nbsp;[-m&nbsp;{replace|merge}]&nbsp;[-d&nbsp;{yes|no}]
php&nbsp;-f&nbsp;pack.php&nbsp;--&nbsp;--source=&lt;source_file&gt;&nbsp;--locale=&lt;language_code&gt;&nbsp;--pack=&lt;target_dir&gt;&nbsp;[--mode={replace|merge}]&nbsp;[--allow_duplicates={yes|no}]
</pre>

To invoke the language pack tool, specify the following parameters:

*	`s|source` defines the path to the source dictionary file containing translation and meta information. This parameter is required.
*	`-l|locale` retrieves the locale of the target language of translation. This parameter is required.
*	`-p|pack` defines the path where the language package is to be located. This parameter is required.
*	`-m|mode` defines the save mode for a dictionary. Use `replace` to overwrite the old language pack with a new one (default option), or use `merge` to merge the old and new language packs. This parameter is optional.
*	`-d|allow_duplicates` defines whether the duplicates in translation should be saved; by default, the value is set to 'no.' This parameter is optional.

<h2 id="m2devgde-xlate-howtos">How-to scenarios</h2>

<h3 id="m2devgde-xlate-newpack">Create and upload a language pack to Magento</h3>

To create custom language package:

1.	Find a language pack on Magento-related websites or generate it from Magento by using <a href="#m2devgde-xlate-generatortool">generator tool</a>.
1.	Translate the terms/phrases as appropriate.
1.	Declare the pack in `app/i18n/<VendorName>/[Package name]/language.xml` file.
1.	Upload your language pack to appropriate directory in your Magento instance, for example, `app/i18n/<VendorName>/[Package name]`.
1.	Alternatively, run the <a href="#m2devgde-xlate-packtool">language pack tool</a> to upload the newly created pack.

<h3 id="m2devgde-xlate-translatetheme">Create a translation for a module or theme</h3>

To create a translation for a module or a theme:

1.	Run the <a href="#m2devgde-xlate-generatortool">dictionary generator tool</a> for a directory or a theme, for which you need to create a translation.
1.	Make the necessary translations for a module or a theme.
1.	Run the <a href="#m2devgde-xlate-packtool">language pack tool</a> to upload a dictionary. Alternatively, upload a dictionary file to `i18n` folder of a module or a theme, for instance: `app/code/Vendor/CustomModule/i18n/fr_FR.csv`.
