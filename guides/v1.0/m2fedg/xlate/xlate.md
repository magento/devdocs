---
layout: howtom2devgde_chapters_fedg 
title: Translation
---
 
<h1 id="fedg-localization">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/xlate/xlate.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<p>This article discusses the translation mechanism in Magento 2, and contrasts it with that of Magento 1.x. The intended audience is Magento developers who would like to better learn the Magento architecture.</p>

The Magento 2 source code described here has been available since Magento 2.0.0.0-dev46 release and can be viewed on the GitHub at [magento/magento2](https://github.com/magento/magento2/commit/0849373d7636cfa17b70b8188bfc36d13ae749c1) or later commits.

## Implementation overview in Magento 1.x

Magento 1.x can present the user interface in different languages without modifying the actual application source code—it translates the system messages, error messages, and labels for display in the UI. Some messages may be displayed in logs for a system administrator or a developer—those don't need to be translated. By convention, in the source code, the labels and system messages for UI are expressed in English (en_US).

To replace these phrases with alternatives in different languages when the source code is interpreted, Magento has a layer of indirection. It allows for translation by providing dictionary files that contain phrases from en_US translated into a different language. The dictionary packages in other languages either ship with Magento code out of the box or are [provided by the community](http://www.magentocommerce.com/translations).

The business user might need to customize the result through the administrative UI, known as the *Inline Translation Tool*.

### Trigger translation in source code

In PHP-code, the intent of translating a phrase is indicated by using a __() method, which is available in interfaces of various helpers, blocks and controllers.

For example:

<blockquote>
<pre>
Mage::helper('catalog')->__('Attribute "%s" is required.', $code)
</pre>
</blockquote>

Or in PHTML templates:

<blockquote>
<pre>
$this->__('The product %s has been removed from comparison list.', $helper->escapeHtml($product->getName())
</pre>
</blockquote>

In XML files, the conventional "translate" and "module" attributes indicate that the contents of a node must be translated:

<blockquote>
<pre>
&lt;?xml version="1.0"?>
&lt;config>
    &lt;tabs>
        &lt;catalog translate="label" module="catalog">
            &lt;label>Catalog&lt;/label>
            &lt;sort_order>200&lt;/sort_order>
        &lt;/catalog>
    &lt;/tabs>
    &lt;sections>
        &lt;catalog translate="label" module="catalog">
            &lt;class>separator-top&lt;/class>
            &lt;label>Catalog&lt;/label>
...
</pre>
</blockquote>

The translate indicates a child node that contains the phrase, and "module" indicates context of a module. Context indicates a kind of namespace for this phrase.

### CSV dictionaries

The dictionaries are located in the source code in the `app/locale/<locale>/Namespace_Module.csv` files. The format is a CSV file with two columns, such as `app/locale/en_US/Mage_Checkout.csv`:

<blockquote>
<pre>
"Add to Cart","Add to Cart"
"Add to Compare","Add to Compare"
"Add to Wishlist","Add to Wishlist"
"Additional Product Info","Additional Product Info"
"Address","Address"
"Address %s of %s","Address %s of %s"
</pre>
</blockquote>

When translated to another language, the dictionary is in a different directory and the second column has the same phrases but in a different language. In this case, German, as found in the file `app/locale/de_DE/Mage_Checkout.csv`:

<blockquote>
<pre>
"Add to Cart","Zum Warenkobrn hinzufügen"
"Add to Compare","Hinzufügen um zu vergleichen"
"Add to Wishlist","Zum Wunschzettel hinzufügen"
"Additional Product Info","Zusätzliche Angaben zum Produkt"
"Address","Adresse"
"Address %s of %s","Adresse %s von %s"
</pre>
</blockquote>

For the system to recognize a dictionary, it is declared in the module configuration. For example, in `app/code/core/Mage/Catalog/etc/config.xml`:

<blockquote>
<pre>
&lt;?xml version="1.0"?>
&lt;config>
    &lt;frontend>
        &lt;translate>
            &lt;modules>
                &lt;Mage_Catalog>
                    &lt;files>
                        &lt;default>Mage_Catalog.csv&lt;/default>
                    &lt;/files>
                &lt;/Mage_Catalog>
            &lt;/modules>
        &lt;/translate>
</pre>
</blockquote>

A similar CSV dictionary can be found in a theme by a conventional name that doesn't need to be declared in config.xml, such as `app/design/frontend/default/modern/locale/en_US/translate.csv`. This dictionary would match phrases found in theme .phtml or .xml files.

### Database dictionaries

Translation dictionaries are also stored in the database in the `core_translate` table:

<table>
<thead>
<tr>
<th>key_id</th>
<th>
	
string</th>
<th>
	
store_id</th>
<th>
	
translate</th>
<th>
	
locale</th>
<th>
	
crc_string
</th>
</thead>
<tbody>
<tr>
<td>1</td><td> 	Mage_Core::Enter search keyword </td><td>	1 </td><td>	Введите поисковый запрос </td><td>	ru_RU </td><td>	-1839809583</td>
</tr>
</tbody>
</table>


The semantically significant fields are:

*     string—the original phrase in default language (en_US). Also it contains optional context of a module (Mage_Core:: in the example)
*     translate—the translation phrase
*     locale—language identifier

 
### Context of translating a phrase

To translate a phrase, a certain context is used that consists of different variables:

*     Application context: current locale, application area, theme, store view
*     Invocation context (arguments of the __()): module context, the string literal

Based on the context, Magento system first attempts to load it from the cache. If it is not there, the dictionary is built by combining the following:

*     Merge CSV dictionaries of all active modules
*     Merge CSV dictionaries of the active theme
*     Load dictionary from DB for current store view 

Finally, the phrase is replaced if a match is found in the dictionary. Otherwise, the original value is rendered.

### Inline translation feature

The "Inline Translation" tool allows inline editing of phrases that are passed through the translation mechanism. The business user edits the phrases and stores them in database dictionaries.

Out of the box, this tool is the only mechanism to edit database dictionaries.

The only relation of this mechanism to translations is that it is coupled to invocation of `__()` calls: the logic of "inline translation" is incorporated into the `__()` method, because it happens to provide a layer of indirection.

## Revisit the Magento 2 approach

In Magento 2, the translation mechanism is revisited considerably.

The primary goal regarding changing the translation mechanism was to reduce global code coupling and dependencies. The module's context was deemed detrimental for the developer (and translator) and not that valuable for the user—so context of modules for translating phrases was abolished for simplicity.

The secondary goal was separation of concerns in the implementation. Analysis showed the following different concerns:

*     translation—when a phrase is intended to be translated to a different language without changing meaning. For example: Add to Shopping Cart - Zum Warenkobrn hinzufügen
*     customization—when the meaning of a phrase is intended to be changed without changing language. For example: Add to Shopping Cart - Add to Shopping Bag
*     placeholder substitution—when a phrase literal contains placeholders, replace them with variable values which come from context. For example: Product '%s' has been added to shopping cart. - Product 'Multimeter-2000' has been added to shopping cart

Other possible improvements were considered:

*     Shrink and simplify dictionaries by removing area scope. For example, a "My Account" phrase is both valid for the customer account area in the storefront or for the admin account form in the admin UI, so viewing it in the context of area (or module) doesn't seem necessary.
*     "Convention over configuration" for declaring dictionaries would allow reduce configuration footprint and keep the dictionaries.
*     Simplifying format of placeholders in phrases and emphasizing their order of appearance. For example, a translation from English to French may require different order of emerging phrase elements:
<blockquote><pre>sprintf("This is a %1$s %2$s\n", adj, noun); // ex: adj="nice" noun = "car"
VS
sprintf("C'est une %2$s %1$s \n", adj, noun); // ex: adj="verte" noun = "voiture"</pre></blockquote>

The sophisticated formatting options of sprintf() were not necessary for placeholders.

### The Phrase class

When a developer deals with a phrase in source code, he or she decides whether to display it to the user. So there must be a distinction made in source code.

The solution for that was to create an abstraction—the `\Magento\Phrase` class. This class implements pattern "Replace Data Value with Object"—basically replacing the string literal with an instance of this class, which has `__toString()` method.

The layer of indirection that existed earlier in Magento 1.x is now encapsulated in Magento 2 in the Phrase class.

To distinguish such a phrase for the UI, the developer would have to create an instance of such class:

<blockquote>
<pre>
$message = new \Magento\Phrase('Value for "%1" is invalid: %2', array($code, $error));
$session->addError($message);
</pre>
</blockquote>

To simplify usage and reduce the impact on the existing code base, a global function `__()` was created with a polymorphous interface. The purpose of this function is to serve as a shortcut to create a Phrase object:

<blockquote>
<pre>
__('Value for "%1" is invalid: %2', $code, $error);
</pre>
</blockquote>

Note the difference in format of Magento 2 placeholders (`%1, $2`) vs. Magento 1.x placeholders (`%s`).

### Render phrases

But how to make the Phrase render properly when `__toString()` is triggered? Where is this logic supposed to be? How a layer of indirection could be organized (and encapsulated)?

Hard-coding all this inside the Phrase class without separating concerns was considered not as an option. Logic must be delegated to other classes. With that decided, the ways Phrase can delegate this logic would be:

*     Inject all necessary dependencies to Phrase in constructor
*     Inject them through an API (dependencies as arguments)
*     Inject them through a static interface as part of bootstrap

The first two options were considered too expensive and cumbersome:

*     Because the Phrase object is a replacement for primitive (string literal), it is transient
*     Creating such an object with a proper constructor injection would require involving a factory and referencing each Phrase object to renderers—but isn't that too much infrastructure for the former string literal?
*     Using API injection would make impossible to use automatic type casting `__toString()` (and lazy initialization)—and would have significant impact on existing client code

So implementation of the Phrase class ended up looking like the following:

<blockquote>
<pre>
<?php
/**
 * Phrase (for replacing Data Value with Object)
 *
 */
namespace Magento;
class Phrase
{
    /**
     * Default phrase renderer. Allows stacking renderers that "don't know about each other"
     *
     * @var \Magento\Phrase\RendererInterface
     */
    private static $_renderer;
    /**
     * String for rendering
     *
     * @var string
     */
    private $_text;
    /**
     * Arguments for placeholder values
     *
     * @var array
     */
    private $_arguments;
    /**
     * Set default Phrase renderer
     *
     * @param \Magento\Phrase\RendererInterface $renderer
     */
    public static function setRenderer(\Magento\Phrase\RendererInterface $renderer)
    {
        self::$_renderer = $renderer;
    }
    /**
     * Phrase construct
     *
     * @param string $text
     * @param array $arguments
     */
    public function __construct($text, array $arguments = array())
    {
        $this->_text = (string)$text;
        $this->_arguments = $arguments;
    }
    /**
     * Render phrase
     *
     * @return string
     */
    public function render()
    {
        return self::$_renderer ? self::$_renderer->render($this->_text, $this->_arguments) : $this->_text;
    }
    /**
     * Defers rendering to the last possible moment (when converted to string)
     *
     * @return string
     */
    public function __toString()
    {
        return $this->render();
    }
}
</pre>
</blockquote>

So while using the static setter in bootstrap has a number of issues and contradicts the principle of dependency injection, this implementation is considered optimally usable in client code.

Behind the `\Magento\Phrase\RendererInterface`, there is a composite pattern implemented as `\Magento\Phrase\Renderer\Composite`. It stacks multiple renderers. Each has single responsibility: one for translating, another for placeholders replacement, and so on.

### Initialize rendering environment

For use in Magento application, the `\Magento\Phrase` is initialized as follows:

<blockquote>
<pre>
\Magento\Phrase::setRenderer($this->_objectManager->get('Magento\Phrase\RendererInterface'));
</pre>
</blockquote>

The object manager and dependency injection framework do all the legwork to provide the implementation behind the interface—stacking the composition of renderers.

Because the usage of a global `__()` function  and static interface takes place, some rearrangements have to be made in unit tests. For convenience of assertions and fixtures, in unit tests only the "placeholder" renderer is used instead of the "composite":

<blockquote>
<pre>
\Magento\Phrase::setRenderer(new \Magento\Phrase\Renderer\Placeholder());
</pre>
</blockquote>

### XML client code

In some XML files, the only thing that changed was removing module context, while the "translate" attribute stayed the same:

<blockquote>
<pre>
&lt;field id="lister_widget_scroll" translate="label comment" sortOrder="20" showInDefault="1" showInWebsite="1" showInStore="1">
    &lt;label>Events to Scroll per Click in Event Slider Widget&lt;/label>
    &lt;comment>You can override this default value in CMS using the limit="x" variable.&lt;/comment>
&lt;/field>
</pre>
</blockquote>

In other files, parent nodes don't know about their child nodes anymore. Instead, translate="true" is used in a node, the value of which is intended to be translated:

<blockquote>
<pre>
&lt;block class="Magento\Backend\Block\Widget\Grid\Column" as="display_state">
    &lt;arguments>
        &lt;argument name="header" xsi:type="string" translate="true">Countdown Ticker&lt;/argument>
        &lt;argument name="type" xsi:type="string">options&lt;/argument>
        &lt;argument name="index" xsi:type="string">display_state&lt;/argument>
...
    &lt;/arguments>
&lt;/block>
</pre>
</blockquote>

## Translation dictionary tools

Magento developer tools include a static code analysis tool that enables generating a CSV dictionary out of Magento source code. It searches for any occurrences of `__()` in PHP files and translate attributes in XML files, and extracts literals for the dictionary.

The tool is available at `https://github.com/magento/magento2/tree/master/dev/tools/Magento/Tools/I18n`. It is intended for translators or extension developers who wish to provide language packs for the entire Magento application or a given module/theme. Description of the tool interface and use cases is omitted here intentionally, as it deserves a dedicated article.

### Dictionary files location

The CSV dictionary files in Magento 2 were relocated this way:

<table>
<thead>
<tr>
<th>Was in Magento 1.x</th>
<th>Became in Magento 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>`app/locale/en_US/Mage_Checkout.csv`
`app/code/Magento/Checkout/i18n/pt_BR.csv`</td>
<td>`app/design/frontend/default/modern/locale/en_US/translate.csv`
`app/design/frontend/magento_demo/i18n/en_US.csv`</td>
</tr>
</tbody>
</table>

Notable differences (in context of translation subsystem):

*     Root directory now belongs to respective modules (or themes)
*     File name corresponds to language code instead of module name or "translate.csv"
*     The "locale" directory renamed into "i18n"

"Convention over configuration" principle is used: location of dictionary files is conventional, so they don't need to be declared in configuration (the former config.xml).

With respect to keeping dictionary files per module, the possible collisions of the same phrase with different translation are handled during assembly of the dictionaries into one. During merging of the CSV files, if a phrase declared by a module is already defined in the merged result, it is overridden by the latest occurrence.

## Known issues and workarounds

Despite many improvements, the architecture of translation subsystem in Magento 2 is of course still not perfect. The team concentrated primarily on the developer experience—that is, reducing code coupling and improving usability in client code. As mentioned, other issues had secondary priority.

### Currently known issues:

*     The `__toString()` method is not always invoked automatically because of specifics of client code. For example if Phrase object leaks into a `json_encode()`, it is cast to an object in JSON instead of a string. As a workaround, the `__()` function forcefully casts the Phrase object to string.
*     The "en_US to en_US" dictionaries actually rendered useless, because using the dictionary tool would be more efficient and wouldn't require maintenance by the Magento Core team.
*     In some XML files, labels are defined as attributes. It is impossible to use translate="true" for them, as it would be ambiguous:
<blockquote><pre>
&lt;config>
     &lt;option name="text" label="Text" renderer="Magento\Adminhtml\Block\Catalog\Product\Edit\Tab\Options\Type\Text">
        &lt;inputType name="field" label="Field" />
         &lt;inputType name="area"  label="Area" />
     &lt;/option></pre></blockquote>

As a result, the dictionary tools do not detect some phrases in XML files.

*     Not all concerns are separated in the implementation. Specifically, the "translation" and "customization" operations are still not segregated. The notion of "translate" is equated with distinguishing a phrase for the UI (but these are different concerns and uniting them is misleading)
*     There is still a big fat JavaScript array of phrases loaded into every page, but only some of them are used, and then only on certain pages

### Possible improvements

There can be many more architectural improvements for the translation mechanism. Or, to generalize, for the mechanism of presenting phrases in the user interface:

Actually distinguish phrase customization and translation concerns. For the developer, it would mean breaking down `\Magento\Core\Model\Translate` into three different concerns: translation, customization, and inline editing. For the user—"Inline Translation" tool must be renamed to "Inline Text Editing" tool or possibly consolidated with another WYSIWYG tool. The user sees the phrases in current language of user interface instead of the original entries in English.

**Implication**: the "Inline Text Editing" tool could become the only way to customize phrases—that would be a user-only capability. But the feature could be still retained for developers, too—for example, in these files:

<blockquote>
<pre>
__/
|__/app
| |__/code/Mage/Catalog
|   |__/phrases.csv
|__/design
   |__/frontend/magento_demo
       |__/phrases.csv
</pre>
</blockquote>

These files would contain phrases only in English (because it is in the source code by convention) and could have replacements for these phrases also only in English. And these phrases would be invoked before translation.

*     In JavaScript on a page, don't load any kind of dictionaries. Instead, all the translation can occur in the server-side on demand. But for the client side, leave only placeholders replacement. As result, the entire component $.mage.translate can be deleted.
*     Delete the en_US CSV dictionaries. They can be always created out of the current code base using the dictionary tools.
*     "Convention over Configuration" for distinguishing phrases in XML-configuration files: in the dictionary generator tool, instead of looking for special "translate" attribute, conventionally scan nodes and attributes called "label", "title", "description", etc. It makes the translation dictionary tools much simpler and more dependable.
*     Other new features of translation that didn't exist before in Magento framework—for example, declension of nouns based on numeral argument value:
<blockquote><pre>%1 [%1|cat|cats] -> 1 cat / 2 cats
%1 [%1|кот|кота|котов] -> 1 кот / 2 кота / 9 котов</pre></blockquote>

It could be yet another renderer behind `\Magento\Phrase\RendererInterface` but encapsulating a library like Zend_Translate_Plural or similar.

### Conclusions

The translation mechanism in Magento 2 is improved with abstractions, separation of concerns, and reduced dependencies. It provides an overall better experience for developer and translator, and empowers them to create a better user experience than with its predecessor.

<p>Should readers have questions or more ideas of improving architecture of translations in Magento platform—feel free to comment on this page. Contributions with fixes for the known issues are certainly welcome through Magento 2 GitHub repository.</p></span>
</div>

