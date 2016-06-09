---
layout: default
group: arch-guide 
subgroup: Components 
title: Language packages
menu_title: Language packages
menu_order: 9
version: 2.0
github_link: architecture/components/arch_translations.md
redirect_from: /guides/v1.0/architecture/arch_translations.html
---

<h2 id="m2arch-translations-overview">Language packages and translation</h2>

Any text that is presented to the user can have several captions or labels on the control elements, notifications, and error messages.  By default, Magento renders all these phrases in English (`US`) language (`en_US`). But if you deploy a storefront in a different language (or use the Magento Admin panel in a different language), you can incorporate other dictionaries for translations. 

You can use the language packages provided with Magento, create your own, or obtain packages from the community. Check out the language packages, modules, and themes available on Magento Marketplace. 

Creating a language package is part of the process of <i>localizing</i> your storefront. 

<h3>Magento language packages</h3>

A <i>language package</i> is  a collection of translation dictionaries for a particular language together with additional information that tells Magento how to process the information, including:

* `.csv` file contains the actual strings that comprise the language dictionary. A translation dictionary is a comma-separated value (`.csv`) file with at least two columns: the original phrase in the `en_US` locale and a translation of that phrase to another locale.

* `composer.json` file contains any dependencies for the language package and a mapping to its defined locale.

* `language.xml` file, where you declare a language package and establish any inheritance rules, if you are installing multiple language packages. 

<h3>About localization and internationalization</h3>
<i>Localization</i>  is the process of adapting a product or service to a particular language, culture, and preferred local display characteristics.  Ideally, a product or service is developed so that localization is relatively easy to implement.  For example, you might design technical illustrations for manuals in which the text can easily be changed to another language. 

The process of structuring an application to support localization is termed <i>internationalization</i>. An internationalized product or service is easier to localize for a particular language than a product that has not been internationalized. The process of first enabling a product to be localized and then localizing it for different national audiences is also known as <i>globalization</i>.


For an overview of Magento translation-related issues, see <a href="{{ site.gdeurl }}frontend-dev-guide/translations/xlate.html">Translations overview</a>. 

Procedures for creating language packages and dictionaries are described in <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html#config-cli-subcommands-xlate-dict-trans">Translation dictionaries and language packages</a>.

<h2 id="m2arch-related">Related topics</h2>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_intro.html">Modules</a>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/arch_libraries.html">Libraries</a>

<a href="{{ site.gdeurl }}architecture/archi_perspectives/components/arch_themes.html">Themes</a>



