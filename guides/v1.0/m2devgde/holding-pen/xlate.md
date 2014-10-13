---
layout: howtom2devgde_chapters
title: Translation
---
 
<h1 id="m2devgde-xlate">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2devgde/holding-pen/xlate.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-xlate-intro">Introduction to Magento 2 translations</h2>

<p class="q">Reviewer: Can this topic be combined with <a href="{{ site.gdeurl }}m2fedg/xlate/xlate_overview.html" target="_blank">this one</a>?</p>

Magento 2 enables you to customize and localize your store for multiple regions and markets. In Magento 2, the dictionaries are easier to update and maintain and the code coupling and duplication are reduced.

As a result, you have the following benefits:

*	You can translate any part of your store using a module or theme without affecting other parts.
*	You can use language packs prepared by other users or you can create your own.
*	You can create localized version based on existing (that is, parent) translations by using language inheritance. 

	That means that if you missed or omitted localizing some phrases, the parent translations is used.
	
*	You can customize you translations even further by creating more than one version of translation for the same language.

<h2 id="m2devgde-xlate-over">Translation overview</h2>

Use the following steps to translate names, titles, and phrases:

1.	Generate a dictionary of your instance by using the dictionary generator tool. TBD XREF
2.	Translate the terms.
2.	Upload your new dictionary to Magento using the language pack tool.

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Only one variant of a translation should be used for any word or phrase in a translation pack; otherwise, errors result.</p></span>
</div>

The in-line using text editor is a customization tool used in the storefront. Changes made in the text editor are not recorded in an instance's dictionary; they are stored in the library in your Magento database.

In the storefront, an inline translation of a phrase overwrites the translation stated in a dictionary. However, inline translations are theme-specific, and do not apply if another theme is assigned.

<h2 id="m2devgde-xlate-dict">Translation dictionaries</h2>

A *dictionary* is a comma-separated value (`.csv`) file consisting of three values:

*	Key. The default/key meaning of a phrase (in the `en_US` locale) and is used to assign a phrase's translation properly. Do not change this value.
*	Translation. Translated variant of a phrase. This is the only column a translator should edit.
*	Meta information. Retrieves the module and theme where a phrase is used. Do not change this value. 

	You can generate a dictionary without meta information for reference purposes only (for more information, see TBD DICTIONARY TOOl).

	Sample of a dictionary with meta information:
	
	<pre>"Add New Block","Add New Block","module","Mage_Cms"
	"Add New Page","Add New Page","module","Mage_Cms"
	"All Countries","All Countries","theme","demo"
	"An error occurred while saving the page.","An error occurred while saving the page.","module","Mage_Cms"</pre>

Dictionary files can be located in different parts of the code base and are assembled into single language-specific dictionary automatically at runtime.

Meta information in a dictionary file defines where a phrase is translated. 

If your custom dictionary lacks meta information, you must manually place it in the module's `i18n` directory. 

Depending on your configuration, a dictionary can contain all phrases used in Magento or only phrases belonging to specified modules or themes.

In a dictionary, every phrase, name, and title is mentioned only once, even if it is used in different modules or themes. The only exception to this rule is when a duplicate phrase belongs to a module and a theme at the same time.








