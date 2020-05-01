---
group: configuration-guide
title: Translation dictionaries and language packages
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## Overview of translations

Magento translations enable you to customize and localize your store for multiple regions and markets. We improved the localization and customization of Magento instances by making translation dictionaries easier to update and maintain and reduced the amount of code coupling and duplication.

This topic discusses how to generate:

-  Translation dictionaries, which are a convenient way to customize or translate *some* words and phrases, such as those for a custom [module](https://glossary.magento.com/module) or [theme](https://glossary.magento.com/theme).
-  Language packages, which enable you to translate *any or all* words and phrases in the Magento application.

See [Translations overview].

We also accept [Community Engineering contributions] using CrowdIn for translations. The project may include package creation and further support using the contributed translations. Join us and other contributors around the globe working to localize Magento!

## Generate a translation dictionary {#config-cli-subcommands-xlate-dict}

You can generate a [translation dictionary] to customize existing strings, translate words and phrases in a custom module, localize a theme, or create  [language packages](https://glossary.magento.com/language-package).

### Work with translation dictionaries {#config-cli-subcommands-xlate-dict-dict}

To begin translating, use a command to generate a dictionary `.csv` file with a collected list of all existing phrases and words.

Generate the dictionary and translate:

1. Extract translatable words and phrases from enabled components using the translation collection command. Content extracts into a `.csv` file.
1. Translate the existing words and phrases. You can also add additional custom terms as needed.

   You have options for using the translated dictionary:

1. You can package the translation dictionaries into a language package and provide the package to the Magento store administrator.

1. In the Magento Admin, the store administrator [configures the translations].

Command options:

```bash
    bin/magento i18n:collect-phrases [-o|--output="<csv file path and name>"] [-m|--magento] <path to directory to translate>
```

The following table explains this command's parameters and values:

|Parameter|Value|Required?|
|--- |--- |--- |
|`<path to directory to translate>`|Path to a directory that has translatable code; in other words, PHP, PHTML, or XML files that have phrases to translate.<br><br>The tool starts searching at the path you enter and searches all files and subdirectories it contains.<br><br>Do not use this parameter if you use `-m --magento`.|Yes (dictionaries), no (packages).|
|`-m --magento`|Required to create a language package from this translation dictionary. If used, searches the directories that contain bin/magento. This option adds themes or modules to each line in the dictionary.<br><br>A sample follows:<br><br>"No Items Found","No Items Found",module,Magento_Wishlist|No|
|`-o --output="<path>"`|Specifies the absolute file system path and file name of the translation dictionary .csv file to create. The value you enter is case-sensitive. The name of the .csv file must exactly match the locale name, including the characters' case.<br><br>If you omit this parameter, the output is directed to stdout.|No|

{:.bs-callout-info}
To create a language pack from a translation dictionary, you *must* use the `-m|--magento` option.

### Translation guidelines {#config-cli-subcommands-xlate-dict-trans}

Use the following guidelines when translating words and phrases:

-  Change the contents of the second column only. Translate the phrases from English (`US`) to the desired language.
-  When creating dictionaries for locales, use the default Magento strings.
-  While translating, pay attention to placeholders like `%1`, `%2` and so on.

Magento uses the placeholders to insert context values; they are *not* used for translations. For example:

```text
Product '%1' has been added to shopping cart.
```

Populates with a value:

```text
Product 'Multimeter-2000' has been added to shopping cart.
```

The resulting phrase must contain at least one of each placeholder.
For example, suppose there are placeholders from `%1` to `%3` in the original phrase.
 The translation can have as many of these placeholders in any order, but there must be at least one occurrence of `%1`, `%2`, and `%3`.
The translation cannot contain placeholder values not present in the original value (for example, `%4`, `%5`, and so on).

An example of translating a phrase:

```text
"Buy %1 for %2 (%3 incl. tax) each","Compre %1 por %2 (%3 incl. imposto) cada"
```

## Create a language package {#config-cli-subcommands-xlate-pack}

As opposed to a translation dictionary, you can translate any or all words and phrases in the Magento application using a language package. You can translate a particular component---like a module or a theme---using a translation dictionary. [Learn more about language packages].

This section discusses how to create a language package, which writes `.csv` files to modules and themes. To create a language package, you must perform the tasks discussed in the following sections:

1. [Collect and translate words and phrases](#config-cli-subcommands-xlate-dict).

  (The `--magento` parameter is required.)

1. [Run the language package command](#config-cli-subcommands-xlate-pack-cmd).
1. [Create directories and files](#m2devgde-xlate-files).
1. (Optional.) [Configure multiple packages for a language](#m2devgde-xlate-severalpacks).

### Run the language package command {#config-cli-subcommands-xlate-pack-cmd}

Command usage:

```bash
bin/magento i18n:pack [-m|--mode={merge|replace}] [-d|--allow-duplicates] <source> <locale>
```

The following table explains this command's parameters and values:

|Parameter|Value|Required?|
|--- |--- |--- |
|`<source>`|Absolute file system path and file name of a .csv file that contains the combined translation dictionary and meta-information necessary for breakdown into a language package.<br><br>Use [`bin/magento i18n:collect-phrases`](#config-cli-subcommands-xlate-dict-dict) to create the .csv file then create the language package as discussed in [Create directories and files](#m2devgde-xlate-files).|Yes|
|`<locale>`|[ISO 639-1] (language) and [ISO 3166] (country) identifier of language used as file name for all resulting .csv files. Examples: `de_DE`, `pt_PT`, `pt_BR`.|Yes|
|`-m --mode`|If a target file already exists, specifies whether to replace the existing language package or merge with the new language pack. Merging overrides any phrases that existed and adds new ones. <br><br>Values: merge or replace (default).|No|
|`-d --allow-duplicates`|Include this option to allow duplicates in the language pack. Otherwise, the command fails with an error if it encounters the same phrase in multiple entries with different translations.|No|

### Create directories and files {#m2devgde-xlate-files}

Language packages are located in a directory under `app/i18n/<VendorName>` in the Magento file system with the following contents:

-  Required license files
-  `composer.json`
-  `registration.php` that [registers] the language package
-  [`language.xml`](#config-cli-subcommands-xlate-pack-meta-xml) meta-information file

{:.bs-callout-info}
You must lowercase the entire path. For example, see [`de_de`].

To create these files:

1. Create a directory under `app/i18n`.

   For example, Magento language packages are located in `app/i18n/magento`

1. Add any license files you require.
1. Add [`composer.json`] that specifies dependencies for your language package.
1. Register the language package with [`registration.php`]
1. Add `language.xml` meta-information file as discussed in the next section.

#### Language package language.xml {#config-cli-subcommands-xlate-pack-meta-xml}

When declaring a language package in the `language.xml` configuration file, you must specify the sequence of the language inheritance for this package.

Language inheritance enables you to create a new translation called a _child_ based on an existing translation called a _parent_. The child translations override the parent. However, if the child translation fails to upload or display or is missing a phrase or word, Magento uses the parent [locale](https://glossary.magento.com/locale). [Examples of language package inheritance](#m2devgde-xlate-inheritancework).

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

-  **`<code>`:** Language package locale (required)
-  **`<vendor>`:** Module's vendor name (required)
-  **`<package>`:** Language package name (required)
-  **`<sort_order>`:** Priority of uploading a package when there are several language packages available for a store
-  **`<use>`:** Parent language package locale from which to inherit dictionaries

If necessary, you can specify several parent packages. The parent packages are applied on a first listed, first used basis.

#### Example of language inheritance {#m2devgde-xlate-inheritancework}

Suppose a language package inherits from two other packages, and that those packages also have parent and "grandparent" packages.

If a language package inherits from two packages, its `language.xml` might look like the following:

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

-  `language_package_one` inherits from `en_au_package` and `en_au_package` inherits from `en_ie_package`
-  `language_package_two` inherits from `en_ca_package` and `en_ca_package` inherits from `en_us_package`

If the Magento application cannot find word or phrase in the `en_GB` package, it looks in other packages in following sequence:

1. `parent-package-one/language_package_one`
1. `<vendorname>/en_au_package`
1. `<vendorname>/en_ie_package`
1. `parent-package-two/language_package_two`
1. `<vendorname>/en_ca_package`
1. `<vendorname>/en_us_package`

Specifying all inheritances between the language packages might result in creating circular inheritance chains. Use [Magento\Test\Integrity\App\Language\CircularDependencyTest] test to locate and fix such chains.

### Configure multiple packages for a language {#m2devgde-xlate-severalpacks}

To help you to make your store more flexible, you can upload several language packages for the same language in your store. Thus, you can use different custom packages for different parts of your store because the system compiles a single package from all packages that are available for a language.

To enable an additional package for an existing language, name the new package any name except for an existing language code name (to avoid confusion). Specify configurations of a package in the language package's `language.xml` meta-information file as discussed in the next section.

## Examples of using translation commands

The following sections provide end-to-end examples of using the commands discussed in this topic to create translation dictionaries and translation packages:

-  [Example: Create a translation dictionary for a module or theme](#config-cli-subcommands-xlate-example1)
-  [Example: Create a language package](#config-cli-subcommands-xlate-example2)

### Example: Create a translation dictionary for a module or theme {#config-cli-subcommands-xlate-example1}

To add a German translation to a module or theme that you want to distribute to other merchants:

1. Collect phrases from your module:

   ```bash
   bin/magento i18n:collect-phrases -o "/var/www/html/magento2/app/code/ExampleCorp/SampleModule/i18n/xx_YY.csv" /var/www/html/magento2/app/code/ExampleCorp/SampleModule
   ```

   {:.bs-callout-info}
   The .csv file name must _exactly match_ the locale, including the characters' case.

1. Translate the words and phrases using [these guidelines](#config-cli-subcommands-xlate-dict-trans).
1. If necessary, copy `xx_YY.csv` to `/var/www/html/magento2/app/code/ExampleCorp/SampleModule/i18n` or to the module's theme directory (depending on whether the translation dictionary is for a module or a theme).

### Example: Create a language package {#config-cli-subcommands-xlate-example2}

Similar to the preceding example, generate a `.csv` file, but instead of specifying a module or theme directory, specify the entire Magento application root directory. The resulting `.csv` contains any phrases that the command could find in the code.

1. Collect phrases from your module:

   ```bash
   bin/magento i18n:collect-phrases -o "/var/www/html/magento2/xx_YY.csv" -m
   ```

   {:.bs-callout-info}
   The `.csv` file name must _exactly match_ the locale, including the characters' case.

1. Translate the words and phrases using [these guidelines](#config-cli-subcommands-xlate-dict-trans).
1. Create the language package.

   ```bash
   bin/magento i18n:pack /var/www/html/magento2/xx_YY.csv -d xx_YY
   ```

1. Create a directory for the language package.

   For example, `/var/www/html/magento2/app/i18n/ExampleCorp/xx_yy`

1. In that directory, add all of the following:

   -  A license, if required
   -  `composer.json` (sample following)
   -  `registration.php` (sample following)
   -  `language.xml` (sample following)

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
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
   use \Magento\Framework\Component\ComponentRegistrar;
   ComponentRegistrar::register(ComponentRegistrar::LANGUAGE, 'magento_xx_yy', __DIR__);
   ```

   **Sample `language.xml`:**

   ```xml
   <?xml version="1.0"?>
   <!--
   /**
    * Copyright © Magento, Inc. All rights reserved.
    * See COPYING.txt for license details.
    */
   -->
   <language xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/Language/package.xsd">
       <code>xx_YY</code>
       <vendor>examplecorp</vendor>
       <package>xx_yy</package>
   </language>
   ```

## Additional information

-  [Translations overview]
-  [Translate theme strings]

[Translate theme strings]: {{ page.baseurl }}/frontend-dev-guide/translations/translate_theory.html
[Translations overview]: {{ page.baseurl }}/frontend-dev-guide/translations/xlate.html
[Community Engineering contributions]: {{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#translations-project
[translation dictionary]: {{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#m2devgde-xlate-dictionaries
[configures the translations]: http://docs.magento.com/m2/ce/user_guide/stores/store-language-add.html?Highlight=translation
[Learn more about language packages]: {{ page.baseurl }}/frontend-dev-guide/translations/xlate.html#m2devgde-xlate-languagepack
[ISO 639-1]: http://www.iso.org/iso/home/standards/language_codes.htm
[ISO 3166]: http://www.iso.org/iso/country_codes.htm
[registers]: {{ page.baseurl }}/extension-dev-guide/build/component-registration.html
[`de_de`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/i18n/Magento/de_DE/registration.php
[`composer.json`]: {{ page.baseurl }}/extension-dev-guide/build/composer-integration.html
[`registration.php`]: {{ page.baseurl }}/extension-dev-guide/build/component-registration.html
[Magento\Test\Integrity\App\Language\CircularDependencyTest]: {{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/static/testsuite/Magento/Test/Integrity/App/Language/CircularDependencyTest.php
