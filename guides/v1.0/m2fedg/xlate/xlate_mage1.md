---
layout: howtom2devgde_chapters_fedg
title: How Translation Works in Magento 1.x
---
 
<h1 id="fedg_xlate_mage1">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/xlate/xlate_mage1.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_xlate_mage1_overview">Overview of Translations in Magento 1.x</h2>

Magento 1.x translates system messages, error messages, and labels for display in the Magento Admin Panel and storefront without modifying Magento source code. (Messages that display in logs don't need to be translated.) 

By convention, in the source code, the labels and system messages for UI are expressed in the US English locale (`en_US`).

To replace these phrases with different languages when the source code is interpreted, Magento has a layer of indirection that specifies dictionary files that contain phrases from `en_US` translated into a different language. The dictionary packages in other languages either ship with Magento code out of the box or are provided by the community.

You can customize the result using the Inline Translation Tool in the Magento Admin Panel.

<h2 id="fedg_xlate_source">Translating Strings in Source Code</h2>

In PHP code, the intent of translating a phrase is indicated by using a `__()` method which is available in interfaces of various helpers, blocks, and controllers.

For example:

	Mage::helper('catalog')->__('Attribute "%s" is required.', $code)

Use the following in PHTML templates:

	$this->__('The product %s has been removed from comparison list.', $helper->escapeHtml($product->getName())
	
In XML files, the conventional `translate` and `module` attributes indicate the contents of a node that must be translated, as the following example shows:

<script src="https://gist.github.com/xcomSteveJohnson/c22321284b4022f16189.js"></script>

`translate` indicates a child node that contains the phrase, and `module` indicates the context of a module. The context indicates a kind of namespace for this phrase.

<h2 id="fedg_xlate_csv_mage1">CSV Dictionaries</h2>

The dictionaries are located in the source code in the files `app/locale/[locale]/[your namespace]_[your module].csv`. It's a two-column, comma-separated values (CSV), such as `app/locale/en_US/Mage_Checkout.csv`:

	"Add to Cart","Add to Cart"
	"Add to Compare","Add to Compare"
	"Add to Wishlist","Add to Wishlist"
	"Additional Product Info","Additional Product Info"
	"Address","Address"
	"Address %s of %s","Address %s of %s"

The dictionary that contains translated phrases is located in a different directory. The second column has the same phrases in a different language. The following example from German can be found in the file `[your Magento install dir]/app/locale/de_DE/Mage_Checkout.csv`:

	"Add to Cart","Zum Warenkobrn hinzufügen"
	"Add to Compare","Hinzufügen um zu vergleichen"
	"Add to Wishlist","Zum Wunschzettel hinzufügen"
	"Additional Product Info","Zusätzliche  Angaben zum Produkt"
	"Address","Adresse"
	"Address %s of %s","Adresse %s von %s"

For the Magento software to recognize a dictionary, you must declare it in the module configuration; for example, in `app/code/core/Mage/Catalog/etc/config.xml`. A sample follows:

<script src="https://gist.github.com/xcomSteveJohnson/47d1ee0c247287633f41.js"></script>

A similar CSV dictionary can be found in a theme by a conventional name that doesn't need to be declared in `config.xml`, such as `app/design/frontend/default/modern/locale/en_US/translate.csv`. This dictionary would match phrases found in theme `.phtml` or `.xml` files.

<h2 id="fedg_xlate_dict_mage1">About Translation Dictionaries</h2>

Translation dictionaries are also stored in the database in the `core_translate` table:

<table>
	<tbody>
		<tr class="table-headings">
			<th>key_id</th> 
			<th>string</th>
			<th>store_id</th>
			<th>translate</th>
			<th>locale</th>
			<th>crc_string</th>
		</tr>
	<tr class="even">
		<td>1</td>
		<td>Mage_Core::Enter search keyword	</td>
		<td>1</td>
		<td>Введите поисковый запрос</td>
		<td>ru_RU</td>
		<td>-1839809583</td>
	</tr>
	</tbody> 
</table>

The relevant fields are:

*	`string`&mdash;the original phrase in the default locale (`en_US`). It can also contains the optional module context (`Mage_Core::`)
*	`translate`&mdash;the translation phrase
*	`locale`&mdash;language identifier

<h2 id="fedg_xlate_phrase_mage1">How Magento 1.x Translates Phrases</h2>

To translate a phrase, you use a *context* that consists of the following variables:

*	Application context: current locale, application area, theme, store view
*	Invocation context (arguments of `__())`: module context, the string literal
 
Based on the context, Magento 1.x first attempts to load the translated phrase from cache. If it is not there, the dictionary is built by combining the following:

*	Merge CSV dictionaries of all active modules
*	Merge CSV dictionaries of the active theme
*	Load dictionary from the database for the current store view
 
Finally, the phrase is replaced if a match is found in the dictionary. Otherwise, the original value displays.

<h2 id="fedg_xlate_inline_mage1">Using Magento 1.x Inline Translation</h2>

Magento 1.x's Inline Translation tool enables you to edit phrases in-line. After you edit the phrases, they are stored in the database dictionaries.

Out of the box, this tool is the only mechanism to edit database dictionaries.

The only relation of this mechanism to translations is that it is coupled to the invocation of `__()` calls. In other words, in-line translation logic is incorporated into the `__()` method because it happens to provide a layer of indirection.

#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/xlate/xlate_mage2.html">Magento 2 Translation, Known Issues, and Workarounds</a>
