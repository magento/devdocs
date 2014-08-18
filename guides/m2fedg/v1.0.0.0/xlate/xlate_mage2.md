---
layout: howtom2devgde_chapters_fedg
title: Magento 2 Translation, Known Issues, and Workarounds
---
 
<h1 id="fedg_xlate_mage2">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/xlate/xlate_mage2.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_xlate_mage2_overview">About Magento 2 Translations</h2>

The Magento 2 translation mechanism differs from <a href="{{ site.baseurl }}guides/v1.0.0.0/m2fedg/v1.0.0.0/xlate/xlate_mage1.html#fedg_xlate_mage1">Magento 1.x</a> considerably.

Our primary goal is to reduce global code coupling and dependencies. The module's context was deemed detrimental for the developer (and translator) and not that valuable for the user; therefore, we eliminated the module context for translating phrases.

Our secondary goal was to provide good solutions to the following:

*	Translation&mdash;translating a phrase to a different language without changing its meaning. 

	For example, changing `Add to Shopping Cart` to `Zum Warenkobrn hinzufügen`

*	Customization&mdash;Changing the meaning of a phrase but not the locale.

	For example, changing `Add to Shopping Cart` to `Add to Shopping Bag`

*	Placeholder substitution&mdash;Substituting defined values. 

	For example, changing `Product '%s' has been added to the shopping cart` to `Product 'Multimeter-2000'` has been added to the shopping cart

<h2 id="fedg_xlate_mage2_phrase">Using the Magento 2 Phrase Class</h2>

Magento 2 translations start with the abstract <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Phrase.php" target="_blank">\Magento\Phrase</a> class. 

This class implements the pattern `Replace Data Value with Object`, which basically replaces the string literal with an instance of this class, which has the `__toString()` method.

The layer of indirection that existed earlier in Magento 1.x is now encapsulated in Magento 2 in the Phrase class.

To translate a phrase, create an instance of the class as follows:

	`$message = new \Magento\Phrase('Value for "%1" is invalid: %2', array($code, $error));`
	$session->addError($message);
	
To simplify usage and reduce the impact on the existing code base, use the global function `__()` and its polymorphous interface. This serves as a shortcut to create a Phrase object:

	__('Value for "%1" is invalid: %2', $code, $error);
	
Note the difference in format of Magento 2 placeholders `%1, $2`` compared to the Magento 1.x placeholder `%s`.

<h3 id="fedg_xlate_mage2_phrase_render">Rendering Phrases</h3>

To render a translated phrase, you code should look like the following:

<script src="https://gist.github.com/xcomSteveJohnson/a59b30ed46e2cbf0a631.js"></script>

Although using a static setter in bootstrap has a number of issues and contradicts the principle of dependency injection, it works well in client code.

Behind the <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Phrase/RendererInterface.php" target="_blank">\Magento\Phrase\RendererInterface</a>, there is a composite pattern implemented as <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/Phrase/Renderer/Composite.php" target="_blank">\Magento\Phrase\Renderer\Composite</a>. It stacks multiple renderers. Each has single responsibility: one for translating, another for placeholder replacement, and so on.

<h3 id="fedg_xlate_mage2_render_init">Initializing the Environment for Rendering</h3>

Initialize the \Magento\Phrase class as follows:

	\Magento\Phrase::setRenderer($this->_objectManager->get('Magento\Phrase\RendererInterface'));
	
The object manager and dependency injection framework do all the legwork to provide the implementation behind the interface—stacking the composition of renderers.

Because the use of the global function `__()` and static interface, some rearrangements have to be made in unit tests. For convenience of assertions and fixtures, in unit tests only the "placeholder" renderer is used instead of the "composite":

	\Magento\Phrase::setRenderer(new \Magento\Phrase\Renderer\Placeholder());

<h2 id="fedg_xlate_xml-client">Implementing XML Client Code</h2>

In some XML files, the only thing that changed was removing the module context, leaving the `translate` attribute the same:

<script src="https://gist.github.com/xcomSteveJohnson/eb51f75e0406d3a9b50d.js"></script>

<h2 id="fedg_xlate_dict">Using Translation Dictionary Tools</h2>

Magento developer tools include a static code analysis tool that generates a CSV dictionary from Magento source code. The tool searches for any occurrences of `__()` in PHP files and translate attributes in XML files, and extracts literals for the dictionary.

The tool is available at <a href="https://github.com/magento/magento2/tree/master/dev/tools/Magento/Tools/I18n" target="_blank">here</a>. It is intended for translators or extension developers who wish to provide language packs for the entire Magento application or a given module or theme. 

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

Notable differences (in context of translation subsystem):

*	Root directory now belongs to respective modules (or themes)
*	The file name corresponds to language code instead of module name or `translate.csv`
	The `locale` directory is renamed to `i18n`

Dictionary files are located by convention so they don't need to be declared in your `config.xml`.

When translation CSV files are merged, if a phrase defined by one module is already defined in the merged result, the phrase is overridden by the latest occurrence.

<h2 id="fedg_xlate_known-issues">Known Issues and Workarounds</h2>

Current known issues:

*	The `__toString()` method is not always invoked automatically because of specifics of client code. 

	For example, if a `Phrase` object leaks into a `json_encode()`, it is cast to an object in JSON instead of to a string. 
	
	As a workaround, the `__()` function forcefully casts the `Phrase` object to a string.
	
*	The `en_US` to `en_US` dictionaries are useless because using the dictionary tool would be more efficient and wouldn't require maintenance by the Magento Core team.

*	In some XML files, labels are defined as attributes. You cannot use `translate="true"` for them because it would be ambiguous:

	<script src="https://gist.github.com/xcomSteveJohnson/32e7e40d0cbdb768fd8b.js"></script>
	
	As a result, the dictionary tools do not detect some phrases in XML files.
	
*	The `translation` and `customization` operations are still not segregated. The notion of "translate" means to display a phrase to display on a web page.



	
#### Related Topics:


