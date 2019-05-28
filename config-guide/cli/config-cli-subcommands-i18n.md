---
group: configuration-guide
subgroup: 04_CLI
title: Translation dictionaries and language packages
menu_title: Translation dictionaries and language packages
menu_node:
menu_order: 260
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of translations

Magento translations enable you to customize and localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and maintain and reduced the amount of code coupling and duplication.

This topic discusses how to generate:

-   Translation dictionaries, which are a convenient way to translate *some* words and phrases, such as those for a custom {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} or {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.
-   Language packages, which enable you to translate *any or all* words and phrases in the Magento application.

For more information, see [Translation]({{ page.baseurl }}/frontend-dev-guide/translations/xlate.html).

## Generate a translation dictionary {#config-cli-subcommands-xlate-dict}

You can generate a translation dictionary to use by itself (for example, to translate words and phrases in a custom module) or for use by a {% glossarytooltip 9c4c7b9b-43f0-4454-8e8c-fb62ad40c35f %}language package{% endglossarytooltip %}. See one of the following sections:

-   [About translation dictionaries]({{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#m2devgde-xlate-dictionaries)
-   [Work with translation dictionaries](#config-cli-subcommands-xlate-dict-dict)

### Work with translation dictionaries {#config-cli-subcommands-xlate-dict-dict}

To translate words and phrases, you must:

1.  Run the translation collection command to extract translatable words and phrases from enabled components.
2.  Translate the words and phrases.

After that:

1.  You can package the translation dictionaries into a language package and provide the package to the Magento store administrator.
2.  In the Magento Admin, the store administrator [configures the translations](http://docs.magento.com/m2/ce/user_guide/stores/store-language-add.html?Highlight=translation){: target="_blank"}.

Command options:

	bin/magento i18n:collect-phrases [-o|--output="<csv file path and name>"] [-m|--magento] <path to directory to translate>

The following table explains this command's parameters and values:

<table>
	<col width="25%" />
	<col width="65%" />
	<col width="10%" />
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
	<p>Do not use this parameter if you use <code>-m|--magento</code>.</p></td>

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
		<td><p>Specifies the absolute file system path and file name of the translation dictionary .csv file to create. <em>The value you enter is case-sensitive</em>. The name of the .csv file must <em>exactly match</em> the locale name, including the characters' case.</p>
			<p>If you omit this parameter, the output is directed to stdout.</p>
		</td>
		<td>
			<p>No</p>
		</td>
	</tr>
	</tbody>
</table>

{: .bs-callout .bs-callout-info }
To create a language pack from a translation dictionary, you *must* use the `-m|--magento` option.

### Translation guidelines {#config-cli-subcommands-xlate-dict-trans}

Use the following guidelines when translating words and phrases:

-   Change the contents of the second column only. Translate the phrases from English (`US`) to the desired language.
-   While translating, pay attention to placeholders like `%1`, `%2` and so on.

	They are used by the Magento application to insert context values; they are *not* used for translations. For example:

    	Product '%1' has been added to shopping cart.
    	->
    	Product 'Multimeter-2000' has been added to shopping cart.

    The resulting phrase must contain at least one of each placeholder. For example, suppose there are placeholders from `%1` to `%3` in the original phrase. The translation can have as many of these placeholders in any order, but there must be at least one occurrence of `%1`, `%2`, or `%3`. The translation cannot contain placeholder values not present in the original value (for example, `%4`, `%5`, and so on).

    An example of translating a phrase:

    	"Buy %1 for %2 (%3 incl. tax) each","Compre %1 por %2 (%3 incl. imposto) cada"

## Create a language package {#config-cli-subcommands-xlate-pack}

As opposed to a translation dictionary, you can translate any or all words and phrases in the Magento application using a language package. (You can translate a particular component&mdash;like a module or a theme&mdash;using a translation dictionary.) [Learn more about language packages]({{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#m2devgde-xlate-languagepack).

This section discusses how to create a language package, which writes `.csv` files to modules and themes. To create a language package, you must perform the tasks discussed in the following sections:

1.  [Collect and translate words and phrases](#config-cli-subcommands-xlate-dict).

	(The `--magento` parameter is required.)
2.  [Run the language package command](#config-cli-subcommands-xlate-pack-cmd).
3.  [Create directories and files](#m2devgde-xlate-files).
4.  (Optional.) [Configure multiple packages for a language](#m2devgde-xlate-severalpacks).

### Run the language package command {#config-cli-subcommands-xlate-pack-cmd}

Command usage:

	bin/magento i18n:pack [-m|--mode={merge|replace}] [-d|--allow-duplicates] <source> <locale>

The following table explains this command's parameters and values:

<table>
	<col width="25%" />
	<col width="65%" />
	<col width="10%" />
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
			<td><p>&lt;source></p></td>
			<td><p>Absolute file system path and file name of a .csv file that contains the combined translation dictionary and meta-information necessary for breakdown into a language package.</p>
			<p>Use [bin/magento i18n:collect-phrases](#config-cli-subcommands-xlate-dict-dict) to create the .csv file then create the language package as discussed in [Create directories and files](#m2devgde-xlate-files). </p></td>
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
			</td>
			<td>
				<p>No</p>
			</td>
		</tr>
	</tbody>
</table>

### Create directories and files {#m2devgde-xlate-files}

A language package is a directory under `app/i18n/<VendorName>` in the Magento file system with the following contents:

-   Required license files
-   `composer.json`
-   `registration.php` that [registers]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html) the language package
-   [`language.xml`](#config-cli-subcommands-xlate-pack-meta-xml) meta-information file

{: .bs-callout .bs-callout-info }
The entire path must be all lowercase.

For an example, see the [`de_de` language package]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/i18n/magento/de_de/registration.php){: target="_blank"}.

To create these files:

1.  Create a directory under `app/i18n`.

	For example, Magento language packages are located in `app/i18n/magento`

2.  Add any license files you require.
3.  Add [`composer.json`]({{ page.baseurl }}/extension-dev-guide/build/composer-integration.html) that specifies dependencies for your language package.
4.  Register the language package with [`registration.php`]({{ page.baseurl }}/extension-dev-guide/build/component-registration.html)
5.  Add `language.xml` meta-information file as discussed in the next section.

#### Language package language.xml {#config-cli-subcommands-xlate-pack-meta-xml}

When declaring a language package in the `language.xml` configuration file, you must specify the sequence of the language inheritance for this package.

Language inheritance enables you to create a new translation based on an existing one (the existing translation is referred to as the _parent_). The child translations override the parent. However, if the child translation fails to upload or display, the parent is used instead. If a child translation lacks a phrase or a word, this phrase or word is taken from the parent {% glossarytooltip 05099dbb-d491-4e33-a065-16035cb2d4d9 %}locale{% endglossarytooltip %}. [Examples of language package inheritance](#m2devgde-xlate-inheritancework).

To declare a package, specify the following information:

```xml
<?xml version="1.0"?>
<language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
    <code>en_GB</code>
    <vendor>magento</vendor>
    <package>en_gb</package>
    <sort_order>100</sort_order>
    <use vendor="oxford-university" package="en_us"/>
</language>
```

Where:

-   **`<code>`:** Language package locale (required)
-   **`<vendor>`:** Module's vendor name (required)
-   **`<package>`:** Language package name (required)
-   **`<sort_order>`:** Priority of uploading a package when there are several language packages available for a store
-   **`<use>`:** Parent language package locale from which to inherit dictionaries

If necessary, you can specify several parent packages. The parent packages are applied on a first listed, first used basis.

#### Example of language inheritance {#m2devgde-xlate-inheritancework}

Suppose a language package descends from two other packages, and that those packages also have parent and "grandparent" packages.

If a language package descends from two packages, its `language.xml` might look like the following:

```xml
<language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
    <code>en_GB</code>
    <vendor>magento</vendor>
    <package>language_pack</package>
    <sort_order>100</sort_order>
    <use vendor="parent-package-one" package="language_package_one"/>
    <use vendor= "parent-package-two" package="language_package_two"/>
</language>
```

In the preceding example:

-   `language_package_one` descends from `en_au_package` and `en_au_package` descends from `en_ie_package`
-   `language_package_two` descends from `en_ca_package` and `en_ca_package` descends from `en_us_package`

If the Magento application cannot find word or phrase in the `en_GB` package, it looks in other packages in following sequence:

1.  `parent-package-one/language_package_one`
1.  `<vendorname>/en_au_package`
1.  `<vendorname>/en_ie_package`
1.  `parent-package-two/language_package_two`
1.  `<vendorname>/en_ca_package`
1.  `<vendorname>/en_us_package`

Specifying all inheritances between the language packages might result in creating circular inheritance chains. Use [Magento\\Test\\Integrity\\App\\Language\\CircularDependencyTest]({{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/static/testsuite/Magento/Test/Integrity/App/Language/CircularDependencyTest.php){: target="_blank"} test to locate and fix such chains.

### Configure multiple packages for a language {#m2devgde-xlate-severalpacks}

To help you to make your store more flexible, you can upload several language packages for the same language in your store. Thus, you can use different custom packages for different parts of your store because the system compiles a single package from all packages that are available for a language.

To enable an additional package for an existing language, name the new package any name except for an existing language code name (to avoid confusion). Specify configurations of a package in the language package's `language.xml` meta-information file as discussed in the next section.

## Examples of using translation commands

The following sections provide end-to-end examples of using the commands discussed in this topic to create translation dictionaries and translation packages:

-   [Example: Create a translation dictionary for a module or theme](#config-cli-subcommands-xlate-example1)
-   [Example: Create a language package](#config-cli-subcommands-xlate-example2)

### Example: Create a translation dictionary for a module or theme {#config-cli-subcommands-xlate-example1}

To add a German translation to a module or theme that you want to distribute to other merchants:

1.  Collect phrases from your module:

		bin/magento i18n:collect-phrases -o "/var/www/html/magento2/app/code/ExampleCorp/SampleModule/i18n/xx_YY.csv" /var/www/html/magento2/app/code/ExampleCorp/SampleModule

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  The .csv file name must _exactly match_ the locale, including the characters' case.
	</div>
2.  Translate the words and phrases using [these guidelines](#config-cli-subcommands-xlate-dict-trans).
3.  If necessary, copy `xx_YY.csv` to `/var/www/html/magento2/app/code/ExampleCorp/SampleModule/i18n` or to the module's theme directory (depending on whether the translation dictionary is for a module or a theme).

### Example: Create a language package {#config-cli-subcommands-xlate-example2}

Similar to the preceding example, generate a .csv file, but instead of specifying a module or theme directory, specify the entire Magento application root directory. The resulting .csv contains any phrases that the command could find in the code.

1.  Collect phrases from your module:

		bin/magento i18n:collect-phrases -o "/var/www/html/magento2/xx_YY.csv" -m

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  The .csv file name must _exactly match_ the locale, including the characters' case.
	</div>
2.  Translate the words and phrases using [these guidelines](#config-cli-subcommands-xlate-dict-trans).
3.  Create the language package.

    bin/magento i18n:pack /var/www/html/magento2/xx_YY.csv -d xx_YY

4.  Create a directory for the language package.

	For example, `/var/www/html/magento2/app/i18n/ExampleCorp/xx_yy`

5.  In that directory, add all of the following:

    -   A license, if required
    -   `composer.json` (sample following)
    -   `registration.php` (sample following)
    -   `language.xml` (sample following)

    **Sample `composer.json`:**

    ```json
    {
        "name": "examplecorp/language-xx_yy",
        "description": "Sample language",
        "version": "100.0.2",
        "license": [
            "OSL-3.0",
            "AFL-3.0"
        ],
        "require": {
            "magento/framework": "100.0.*"
        },
        "type": "magento2-language",
        "autoload": {
            "files": [
                "registration.php"
            ]
        }
    }
    ```

    **Sample `registration.php`:**

    ```php?start_inline=1
    /**
     * Copyright © 2015 Magento. All rights reserved.
     * See COPYING.txt for license details.
     */
    \Magento\Framework\Component\ComponentRegistrar::register(
        \Magento\Framework\Component\ComponentRegistrar::LANGUAGE,
        'magento_xx_yy',
        __DIR__
    );
    ```

    **Sample `language.xml`:**

    ```xml
    <?xml version="1.0"?>
    <!--
    /**
     * Copyright © 2015 Magento. All rights reserved.
     * See COPYING.txt for license details.
     */
    -->
    <language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
        <code>xx_YY</code>
        <vendor>examplecorp</vendor>
        <package>xx_yy</package>
    </language>
    ```

#### Related topics

-   [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
-   [Manage the indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
-   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
-   [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
-   [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
-   [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
-   [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
-   [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
-   [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
-   [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
-   [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html)
-   [Generate data for performance testing]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)
