---
layout: default
group: config-guide 
subgroup: CLI
title: Translation dictionaries and language packages
menu_title: Translation dictionaries and language packages
menu_node: 
menu_order: 250
github_link: config-guide/cli/config-cli-subcommands-i18n.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-i18n.html
---


#### Contents

*	<a href="#config-cli-xlate-overview">Overview of translations</a>
*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-xlate-dict">Generate a translation dictionary</a>
*	<a href="#config-cli-subcommands-xlate-pack">Create a language package</a>
*	<a href="#config-cli-subcommands-xlate-examples">Examples of using translation commands</a>

<h2 id="config-cli-xlate-overview">Overview of translations</h2>
Magento translations enable you to customize and localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and maintain and reduced amount of code coupling and duplication.

For more information, see <a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html">Translation</a>.

This topic discusses how to generate:

*	Translation dictionaries, which are a convenient way to translate *some* words and phrases, such as those for a custom module or theme
*	Language packages, which enable you to translate *all* words and phrases in the Magento application

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.
  
<h2 id="config-cli-subcommands-xlate-dict">Generate a translation dictionary</h2>
See one of the following sections:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html#m2devgde-xlate-dictionaries">About translation dictionaries</a>
*	<a href="#config-cli-subcommands-xlate-dict-dict">Work with translation dictionaries</a>

<h3 id="config-cli-subcommands-xlate-dict-dict">Work with translation dictionaries</h3>
To translate words and phrases, you must:

1.	Run the translation collection command to extract translatable words and phrases from enabled modules.
2.	Translate the words and phrases.

After that,

1.	You can package the translation dictionaries into a language package and provide the package to the Magento store administrator.
2.	In the Magento Admin, the store administrator configures the translations to be used.

Command options:

	magento i18n:collect-phrases [-o|--output="<csv file path and name>"] [-m|--magento] <path to directory to translate>

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
		<p>The tool starts searching at the path you enter and searches all files and subdirectories it contains. </p>
	<p>Do not use this parameter if you used <code>-m|--magento</code>.</p></td>
		
		<td><p>Yes (dictionaries), no (packages).</p></td>
	</tr>
	<tr>
		<td><p>-m|--magento</p></td>
		<td><p><em>Required to create a language package from this translation dictionary</em>. If used, searches the directories that contain <code>bin/magento</code>. This option adds themes or modules to each line in the dictionary. </p>
			<p>A sample follows:</p>
			<p><pre>"No Items Found","No Items Found",module,Magento_Wishlist</pre></p></td>
			<td><p>No</p></td>
</tr>
<tr>
		<td><p>-o|--output="&lt;path>"</p></td>
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
  <p>To create a language pack from a translation dictionary, you <em>must</em> use the <code>-m|--magento</code> option.</p>
</div>

<h3 id="config-cli-subcommands-xlate-dict-trans">Translation guidelines</h3>
Use the following guidelines when translating words and phrases:

*	Change the contents of the second column only. Translate the phrases from English (`US`) to the desired language.
*	While translating, pay attention to placeholders like `%1`, `%2` and so on. 

	They are used by the Magento application to insert context values; they are *not* used for translations. For example:

    	Product '%1' has been added to shopping cart.
    	->
    	Product 'Multimeter-2000' has been added to shopping cart.

    The resulting phrase must contain at least one of each placeholders. For example, suppose there are placeholders from `%1` to `%3` in the original phrase. The translation can have as many of these placeholders in any order, but there must be at least one occurrence of `%1`, `%2`, and `%3`. The translation cannot contain placeholder values not present in the original value (for example, `%4`, `%5`, and so on). 

    An example of translating a phrase:

    	"Buy %1 for %2 (%3 incl. tax) each","Compre %1 por %2 (%3 incl. imposto) cada"

<h2 id="config-cli-subcommands-xlate-pack">Create a language package</h2>
As opposed to a translation dictionary, you can translate all words and phrases in the Magento application using a language package. (You can translate a particular component&mdash;like a module or a theme&mdash;using a translation dictionary.) <a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html#m2devgde-xlate-languagepack">More information about language packages</a>.

This section discusses how to create a language package, which writes `.csv` files to modules and themes. To create a language package, you must perform the tasks discussed in the following sections:

1.	<a href="#config-cli-subcommands-xlate-dict">Collect and translate words and phrases</a>.

	(The `--magento` parameter is required.)
2.	<a href="#config-cli-subcommands-xlate-pack-cmd">Run the language package command</a>.
3.	<a href="#m2devgde-xlate-files">Create directories and files</a>.
4.	(Optional.) <a href="#m2devgde-xlate-severalpacks">Configure multiple packages for a language</a>.

<h3 id="config-cli-subcommands-xlate-pack-cmd">Run the language package command</h3>
Command usage:

	magento i18n:pack [-m|--mode={merge|replace}] [-d|--allow-duplicates] <source> <locale>

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
		<td><p>Absolute file system path and file name of a .csv file that contains the combined translation dictionary and meta-information necessary for breakdown into a language package.</p>
		<p>Use <a href="#config-cli-subcommands-xlate-dict-dict">magento i18n:collect-phrases</a> to create the .csv file then create the language package as discussed in <a href="#m2devgde-xlate-files">Create directories and files</a>. </p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>&lt;locale></p></td>
		<td><p><a href="http://www.iso.org/iso/home/standards/language_codes.htm" target="_blank">ISO 639-1</a> (language) and <a href="http://www.iso.org/iso/country_codes.htm" target="_blank">ISO 3166</a> (country) identifier of language used as file name for all resulting .csv files. Examples: <code>de_DE</code>, <code>pt_PT</code>, <code>pt_BR</code>. </p>
		</td>
		<td>
			<p>Yes</p>
		</td>
	</tr>
	<tr>
		<td><p>-m|--mode</p></td>
		<td><p>If a target file already exists, specifies whether to replace the existing language package or merge with the new language pack. Merging overrides any phrases that existed and adds new ones. </p>
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

<h3 id="m2devgde-xlate-files">Create directories and files</h3>
A language package is a directory under `app/i18n/<VendorName>` in the Magento file system with the following contents:

*	Required license files
*	`composer.json`
*	`registration.php` that <a href="{{ site.gdeurl }}extension-dev-guide/component-registration.html">registers</a> the language package
*	`language.xml` meta-information file

To create these files:

1.	Create a directory under `app/i18n`.

	For example, Magento language packages are located in `app/i18n/magento`

2.	Add any license files you require.
3.	Add <a href="{{ site.gdeurl }}extension-dev-guide/composer-integration.html">`composer.json`</a> that specifies dependencies for your language package.
4.	Register the language package with <a href="{{ site.gdeurl }}extension-dev-guide/component-registration.html">`registration.php`</a>
5.	Add `language.xml`meta-information file as discussed in the next section.

<h4 id="config-cli-subcommands-xlate-pack-meta-xml">Language package language.xml</h4>
When declaring a language package in the `language.xml` configuration file, you must specify the sequence of the language inheritance for this package.

Language inheritance enables you to create a new translation based on an existing one (the existing translation is referred to as the _parent_). The child translations override the parent. However, if the child translation fails to upload or display, the parent is used instead. If some child translation lacks a phrase or a word, this phrase or word is taken from the parent locale. <a href="#m2devgde-xlate-inheritancework">Examples of language package inheritance</a>.

To declare a package, specify the following information:

{% highlight xml %}
<?xml version="1.0"?>
<language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
    <code>en_GB</code>
    <vendor>magento</vendor>
    <package>en_gb</package>
    <sort_order>100</sort_order>
    <use vendor="oxford-university" package="en_us"/>
</language>
{% endhighlight %}

where

*	`<code>`: Language package locale (required)
*	`<vendor>`: Module's vendor name (required)
*	`<package>`: Language package name (required)
*	`<sort_order>`: Priority of uploading a package when there are several language packages available for a store
*	`<use>`: Parent language package locale from which to inherit dictionaries 

If necessary, you can specify several parent packages. The parent packages are applied on a first listed, first used basis.

<h4 id="config-cli-subcommands-xlate-pack-json">Language package composer.json</h4>
If a package "uses" another package, then the dependency on it must be declared in the `"require"` section. 

<a href="{{ site.mage2000url }}app/i18n/magento/de_de/composer.json" target="_blank">Sample composer.json</a>

The format of the name of a language package's `composer.json` must be the same as that of the language package.

For an example, see the <a href="{{ site.mage2000url }}app/i18n/magento/de_de/registration.php" target="_blank"><code>de_de</code> language package</a>

For more information, see <a href="#m2devgde-xlate-inheritancework">Example of language inheritance</a>.

<h3 id="m2devgde-xlate-severalpacks">Configure multiple packages for a language</h3>
To help you to make your store more flexible, you can upload several language packages for the same language in your store. Thus, you can use different custom packages for different parts of your store because the system compiles a single package from all packages that are available for a language.

To enable an additional package for an existing language, name the new package any name except for an existing language code name (to avoid confusion). Specify configurations of a package in the language package's `language.xml` meta-information file as discussed in the the next section.

<h4 id="m2devgde-xlate-inheritancework">Example of language inheritance</h4>
Suppose a language package descends from two other packages, and that those packages also have parent and "grandparent" packages.

If a language package descends from two packages, its `language.xml` might look like the following:

{% highlight xml %}

<language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
    <code>en_GB</code>
    <vendor>magento</vendor>
    <package>language_pack</package>
    <sort_order>100</sort_order>
    <use vendor="parent-package-one" package="language_package_one"/>
    <use vendor= "parent-package-two" package="language_package_two"/>
</language>
{% endhighlight %}

In the preceding example:

*	`language_package_one` descends from `en_au_package` and `en_au_package` descends from `en_ie_package`
*	`language_package_two` descends from `en_ca_package` and `en_ca_package` descends from `en_us_package`

If the Magento application cannot find word or phrase in the `en_GB` package, it looks in other packages in following sequence:

1.	`parent-package-one/language_package_one`
1.	`<vendorname>/en_au_package`
1.	`<vendorname>/en_ie_package`
1.	`parent-package-two/language_package_two`
1.	`<vendorname>/en_ca_package`
1.	`<vendorname>/en_us_package`

Specifying all inheritances between the language packages might result in creating circular inheritance chains. Use <a href="{{ site.mage2000url }}dev/tests/static/testsuite/Magento/Test/Integrity/App/Language/CircularDependencyTest.php" target="_blank">Magento\Test\Integrity\App\Language\CircularDependencyTest</a> test to locate and fix such chains.



<h2 id="config-cli-subcommands-xlate-examples">Examples of using translation commands</h2>
The following sections provide end-to-end examples of using the commands discussed in this topic to create translation dictionaries and translation packages:

*	<a href="#config-cli-subcommands-xlate-example1">Example: Create a translation dictionary for a module or theme</a>
*	<a href="#config-cli-subcommands-xlate-example2">Example: Create a language package</a>

<h3 id="config-cli-subcommands-xlate-example1">Example: Create a translation dictionary for a module or theme</h3>
To add a German translation to module or theme you want to distribute to other merchants:

1.	Collect phrases from your module:

		magento i18n:collect-phrases -o "/var/www/html/magento2/vendor/examplecorp/module-samplemodule/i18n/XX_XX.csv" /var/www/html/magento2/ExampleCorp/SampleModule

2.	Translate the words and phrases using <a href="#config-cli-subcommands-xlate-dict-trans">these guidelines</a>.
3.	If necessary, copy `XX_XX.csv` to `/var/www/html/magento2/ExampleCorp/SampleModule` or to the module's theme directory.

<h3 id="config-cli-subcommands-xlate-example2">Example: Create a language package</h3>
Similar to preceding example, generate a CSV file, but instead of a module or theme directory, specify the entire Magento application root directory. The resulting .csv contains any phrases that the command could find in the code.

1.	Collect phrases from your module:

		magento i18n:collect-phrases -o "/var/www/html/magento2/vendor/examplecorp/module-samplemodule/i18n/XX_XX.csv" --magento /var/www/html/magento2 /var/www/html/magento2/ExampleCorp/SampleModule

2.	Translate the words and phrases using <a href="#config-cli-subcommands-xlate-dict-trans">these guidelines</a>.
3.	Edit the file as you see fit (you can break it down into multiple files, delete or add lines, and so on).
4.	Create the language package.

		magento i18n:pack /var/www/html/magento2/ExampleCorp/SampleModule XX_XX

2.	Put the result in a directory.
7.	<a href="#m2devgde-xlate-register">Register the language package</a>.
8.	Optionally <a href="#m2devgde-xlate-severalpacks">configure multiple packages for a language</a>.
3.	<a href="#config-cli-subcommands-xlate-pack-meta">Add package meta-information files</a>.

	The resulting directory and containing files constitutes the language package. 

4.	Copy the file to `<your Magento install dir>/app/i18n` to enable the Magento application to automatically discover it.


#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html">Manage the indexers</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
