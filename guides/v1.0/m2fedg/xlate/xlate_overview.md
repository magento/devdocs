---
layout: howtom2devgde_chapters_fedg
title: Translating Magento 2
---
 
<h1 id="fedg_xlate">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/xlate/xlate_overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_xlate_overview">Overview of Magento Translations</h2>

In Magento 2, our primary goal when redesigning translation was to reduce global code coupling and dependencies. We determined that the <a href="{{ site.gdeurl }}m2fedg/xlate/xlate_mage1.html#fedg_xlate_mage1">Magento 1.x</a> module context is detrimental for the developer (and translator) and not valuable for the user; therefore, we eliminated the module context for translating phrases.

Our secondary goal is to provide solutions to the following:

*	Translation&mdash;translating a phrase to a different language without changing its meaning. 

	For example, changing `Add to Shopping Cart` to `Zum Warenkobrn hinzufügen`

*	Customization&mdash;Changing the meaning of a phrase but not the locale.

	For example, changing `Add to Shopping Cart` to `Add to Shopping Bag`

*	Placeholder substitution&mdash;Substituting defined values. 

	For example, changing `Product '%s' has been added to the shopping cart` to `Product 'Multimeter-2000'` has been added to the shopping cart
	

<h2 id="fedg_xlate_mage2_phrase">Using the Magento 2 Phrase Class</h2>

Magento 2 translations start with the abstract <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Phrase.php" target="_blank">\Magento\Phrase</a> class. 

This class implements the pattern `Replace Data Value with Object`, which basically replaces the string literal with an instance of `\Magento\Phrase` so you can use the `__toString()` method.

The layer of indirection that existed earlier in Magento 1.x is now encapsulated in the `\Magento\Phrase` class.

To translate a phrase, create an instance of the class as follows:

	`$message = new \Magento\Phrase('Value for "%1" is invalid: %2', array($code, $error));`
	$session->addError($message);
	
To simplify usage and reduce the impact on the existing code base, use the global function `__()` and its polymorphous interface. This serves as a shortcut to create a Phrase object:

	__('Value for "%1" is invalid: %2', $code, $error);
	
Note the difference in format of Magento 2 placeholders `%1, $2` compared to the <a href="{{ site.gdeurl }}m2fedg/xlate/xlate_mage1.html#fedg_xlate_source">Magento 1.x placeholder `%s`</a>.

<h3 id="fedg_xlate_mage2_phrase_render">Rendering Phrases</h3>

To render a translated phrase, your code should look like the following:

<script src="https://gist.github.com/xcomSteveJohnson/a59b30ed46e2cbf0a631.js"></script>

Although using a static setter in bootstrap has a number of issues and contradicts the principle of dependency injection, it works well in client code.

Behind the <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Phrase/RendererInterface.php" target="_blank">\Magento\Phrase\RendererInterface</a>, there is a composite pattern implemented as <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Phrase/Renderer/Composite.php" target="_blank">\Magento\Phrase\Renderer\Composite</a>. It stacks multiple renderers. Each has single responsibility: one for translating, another for placeholder replacement, and so on.

<h3 id="fedg_xlate_mage2_render_init">Initializing the Environment for Rendering</h3>

Initialize the `\Magento\Phrase` class as follows:

	\Magento\Phrase::setRenderer($this->_objectManager->get('Magento\Phrase\RendererInterface'));
	
The object manager and dependency injection framework do all the work to provide the implementation behind the interface&mdash;stacking the composition of renderers.

Because you use a global function `__()` and a static interface, you must rearrange some things in your tests. For convenience of assertions and fixtures, in unit tests use only the `Placeholder` renderer instead of `Composite`:

	\Magento\Phrase::setRenderer(new \Magento\Phrase\Renderer\Placeholder());

<h2 id="fedg_xlate_xml-client">Implementing XML Client Code</h2>

In some XML files, the only thing that changed was removing the module context, leaving the `translate` attribute the same:

<script src="https://gist.github.com/xcomSteveJohnson/eb51f75e0406d3a9b50d.js"></script>

<h2 id="fedg_xlate_dict">Using Translation Dictionary Tools</h2>

Magento developer tools include a static code analysis tool that generates a comma-seprated value (CSV) dictionary from Magento source code. The tool searches for any occurrences of `__()` in PHP files and translate attributes in XML files, and extracts literals for the dictionary.

The tool is available <a href="https://github.com/magento/magento2/tree/master/dev/tools/Magento/Tools/I18n" target="_blank">here</a>. It is intended for translators or extension developers who wish to provide language packs for the entire Magento application or a given module or theme. 

<h2 id="fedg_xlate_dict">Translation Dictionaries</h2>

The following table shows where Magento 1.x and Magento 2 translation dictionaries are located:

<table>
	<tbody>
		<tr class="table-headings">
			<th>Magento 1.x location</th>
			<th>Magento 2 location</th>
		</tr>
	<tr class="even">
		<td><code>app/locale/en_US/Mage_Checkout.csv</code></td>
		<td><code>app/design/frontend/default/modern/locale/en_US/translate.csv</code></td>
	</tr>
	<tr class="odd">
		<td><code>app/code/Magento/Checkout/i18n/pt_BR.csv</code></td>
		<td><code>app/design/frontend/magento_demo/i18n/en_US.csv</code></td>
		
	</tr>

	</tbody>
</table>

Notable differences (in the context of the translation subsystem):

*	The root directory now belongs to the respective modules or themes
*	The file name corresponds to the language code instead of the module name or `translate.csv`
	The `locale` directory is renamed to `i18n`

Dictionary files are located by convention so they don't need to be declared in your `config.xml`.

When translation CSV files are merged, if a phrase defined by one module is already defined in the merged result, the phrase is overridden by the latest occurrence.



#### Related Topics:

*	<a href="{{ site.gdeurl }}m2fedg/xlate/xlate_mage1.html">How Translation Works in Magento 1.x</a>
*	<a href="{{ site.gdeurl }}m2fedg/xlate/xlate_known-issues.html">Known Translation Issues and Workarounds</a>
	


