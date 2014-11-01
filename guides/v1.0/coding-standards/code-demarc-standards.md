---
layout: howtom2devgde_chapters
title: Code demarcation standard
---

<h1 id="m2devgde-stnd_code-demarc">{{ page.title }}</h1>

Magento 2 core developers must follow the Magento code demarcation standard.

These standard are recommended for third-party Magento 2 developers.

Some parts of Magento 2 code might not comply with the standard, but we are working to gradually improve this.

The standard was developed in the scope of our efforts to ensure the following:

* Decouple visual (CSS) layer from the functional (JavaScript) layer.
* Decouple functional (JavaScript) layer from the markup (HTML).
* Reinstate emphasis on using of jQuery templates.
* Reinstate emphasis on decoupling HTML, CSS and JS from PHP classes.

Interpret the keywords "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" as described in RFC 2119.

<h2>Semantics</h2>

<p><b>You must create non-user-oriented string literals from unabbreviated English words concatenated with a hyphen (<code>-</code>).</b></p>

* Helps simplify and unify naming conventions that are used to apply visual styles to page elements.

<p><b>Acceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;section id="some-id">
   &lt;p> ... &lt;/p>
   &lt;p> ... &lt;/p>
&lt;/div>
&lt;a href="#some-id">Scroll to text</a>
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;section id="загаловок">
   &lt;p> ... &lt;/p>
   &lt;p> ... &lt;/p>
&lt;/div>
&lt;section id="some_id">
   &lt;p> ... &lt;/p>
   &lt;p> ... &lt;/p>
&lt;/div>
&lt;a href="#some_id">Scroll to text&lt;/a>
</pre>
</blockquote>

<p><b>Semantic representation may rely on ID attribute.</b></p>

* Forces engineers to think about reusable page components instead of unique singleton components.
* Reduces long-term maintenance efforts.

<p><b>Acceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;ul>
   &lt;li class="first" role="button" aria-pressed="false" aria-controls="some-id">button 1&lt;/li>
   &lt;li role="button" aria-pressed="false" aria-controls="some-id">button 2&lt;/li>
   &lt;li role="button" aria-pressed="true" aria-controls="some-id">button 3&lt;/li>
&lt;/ul>
&lt;div>
   &lt;label for="some-id">Enter text&lt;/label>
   &lt;textarea id="some-id">&lt;/textarea>
&lt;/div>
&lt;a href="#some-id">Scroll to text</a>
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;ul id="my-special-menu">
   &lt;li id="buttonId1" class="first" role="button">button 1&lt;/li>
   &lt;li id="buttonId2" role="button">button 2&lt;/li>
   &lt;li id="buttonId3" role="button">button 3&lt;/li>
&lt;/ul>
</pre>
</blockquote>

<p>JavaScript file</p>
<blockquote>
<pre>
$('#my-special-menu').on('click','li[id^="button"]', function() { ... })
</pre>
</blockquote>

<p>CSS file</p>
<blockquote>
<pre>
#my-special-menu { ... }
#my-special-menu > li { ... }
</pre>
</blockquote>

<h2>Code demarcation</h2>

<p><b>Visual representation must rely on only form element type attributes, HTML tags, CSS classes, or pseudo-classes.</b></p>

* Enforces clean, strict separation between visual and business logic layers.
* Allows frontend and backend teams to work independently.
* Allows changing look and feel without affecting business functionality, and vice versa.
* Enables frontend teams to clean up old styles quickly and easily when refactoring.

<p><b>Acceptable:</b></p>
<p>CSS file</p>
<blockquote>
<pre>
section h1 { ... }
ul > li.first { ... }
.caution { ... }  // Actions such as delete, remove, which remove data from the site.
.caution.link { ... } // if custom styles are needed
.caution.button { ... } // if custom styles are needed
form .field.password { ... }
form input[type="password"] { ... }
section.content { ... }
nav li { ... }
nav li.active { ... }
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>CSS file</p>
<blockquote>
<pre>
#header { ... }
[data-action="delete"] { ... }
form input[name="password"] { ... }
section[role="main"] { ... }
[role="menu] [role="menuitem"] { ... }
[role="menu] [role="menuitem"].active { ... }
</pre>
</blockquote>

<p><b>You must not hard-code CSS styles in JavaScript files.</b></p>

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Exception: CSS attributes where values must be calculated beyond the css-topics/LESS code.</p></span>
</div>

* Simplifies change of the default look and feel by adding CSS classes to and removing them from elements.
* Improves style extendibility.
* Reduces long-term maintenance efforts by containing CSS styles in a single place.

<p><b>Acceptable:</b></p>

<p>JavaScript widget file</p>
<blockquote>
<pre>
...
   options: {
      hOffset: 0,
      myCustomElement: '[data-container="my-custom-element"]'
   }
...
   this.element.toggleClass('hidden');
...
   this.options.hOffset = /* calculation based on dimensions of some DOM elements within a widget */
   this.element.find(this.options.myCustomElement).css({'margin-top', this.options.hOffset + 'px'})
...
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>JavaScript file</p>
<blockquote>
<pre>
this.element.on('click', function() {
  if ($(this).is(':visible')) {
    $(this).css({ visibility: 'hidden' });
  } else {
    $(this).css({ visibility: 'visible' });
  }
});
</pre>
</blockquote>

<p><b>You must not use inline CSS styles inside HTML tags.</b></p>

* Improves style extensibility allowing engineers to overload styles easier by toggling classes.
* Enforces clean, strict separation between visual presentation and markup.
* Enables frontend teams quickly and easily clean up old styles.

<p><b>Acceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;div class="no-display"> ... &lt;/div>
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;div style="display: none;"> ... &lt;/div>
</pre>
</blockquote>


<h2>Business logic and JavaScript</h2>

<p><b>Business logic must rely on only the form, form element name attributes, or data attributes.</b></p>

* Enforces clean, strict separation between visual and business logic layers.
* Allows frontend and backend teams to work independently.
* Allows changing business logic without affecting styling and vice versa.

<p><b>Acceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;div data-mage-init="{myWidget: [option1: 'hi']}">&lt;/div>
</pre>
</blockquote>

<p>JavaScript file</p>
<blockquote>
<pre>
...
this.element.find('[data-action="delete"]').on( ... );
this.element.on('click', '[data-action="delete"]', function() { ... });
...
// Globally initialized widgets
$('[data-role="tooltip]').tooltip();  //Globally for ALL tooltip elements
...
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>PHTML file</p>
<blockquote>
<pre>
&lt;div id="my-widget">&lt;/div>
</pre>
</blockquote>

<p>JavaScript file</p>
<blockquote>
<pre>
$('#my-widget').doSomething();
$('.parent').on('click', '.button', function() { ... });
$('form').validate();
$('[role="menu"]').navigation();
</pre>
</blockquote>


<p><b>You must not select DOM elements based on HTML structure.</b></p>

* Allows frontend teams to modify markup and themes without affecting business logic.

<p><b>Acceptable:</b></p>
<p>JavaScript file</p>
<blockquote>
<pre>
this.element.find('[data-action="edit"]');
this.elements.closest('[data-container]');
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>JavaScript file</p>
<blockquote>
<pre>
this.element.children().children().html('hello world');
this.element.parent().find('[data-action="edit"]').data('entity_id');
</pre>
</blockquote>

<p><b>You must use jQuery templates to insert recurring markup into DOM structure.</b></p>

* Reinstates emphasis on jQuery templates. For more information, see JavaScript Coding Best Practices.
* Reduces long-term maintenance efforts by having markup code stored in one place.
* Simplifies frontend debugging efforts.

<p><b>You must not hard-code inline JavaScript in PHP classes.</b></p>

* Reduces long term maintenance by having frontend business logic stored in one place.
* Reduces the number of files to be modified.

<p><b>Acceptable:</b></p>

<p>PHP file</p>

<blockquote>
<pre>
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
</pre>
</blockquote>

<p>PHTML template</p>

<blockquote>
<pre>
...
&lt;div data-mage-init="{treeSuggest: [&lt;?php echo $this->getSelectorOptions(); ?>]}">&lt;/div>
...
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>PHP file</p>
<blockquote>
<pre>
...
public function getAfterElementHtml()
{
return &lt;&lt;&lt;HTML
    &lt;script>
        jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
    &lt;/script>
...
</pre>
</blockquote>

<p>PHTML file</p>

<blockquote>
<pre>
&lt;?php echo $this->getAfterElementHtml(); ?>
</pre>
</blockquote>

<h2>PHTML templates and PHP files</h2>

<p><b>You must not hard-code inline CSS styles in PHP classes.</b></p>

* Reduces long-term maintenance efforts by having styles stored in one place.
* Simplifies debugging and reduces number of files to be modified.
* Makes styles more extensible and easier to override when needed.

<p><b>Acceptable:</b></p>
<p>PHP file</p>
<blockquote>
<pre>...
   $fieldset->addField('new_category_parent', 'text', array(
      'label'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
      'title'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
      'required' => true,
      'class'    => 'parent category',
   ));
...
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>
<p>PHP file</p>
<blockquote>
<pre>...
   $fieldset->addField('new_category_parent', 'text', array(
      'label'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
      'title'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
      'required' => true,
      'style'    => 'border: 1px solid #ccc;',
   ));
...
</pre>
</blockquote>

<p><b>You must not hard-code inline JavaScript in PHP classes.</b></p>

* Reduces long term maintenance by having frontend business logic stored in one place.
* Reduces the number of files to be modified.

<p><b>Acceptable:</b></p>
<p>PHP file</p>
<blockquote>
<pre>
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
</pre>
</blockquote>

<p>PHTML template</p>
<blockquote>
<pre>
...
&lt;div data-mage-init="{treeSuggest: [&lt;?php echo $this->getSelectorOptions(); ?>]}">&lt;/div>
...
</pre>
</blockquote>

<p><b>Unacceptable:</b></p>

<p>PHP file</p>

<blockquote>
<pre>
...
public function getAfterElementHtml()
{
return &lt;&lt;&lt;HTML
    &lt;script>
        jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
    &lt;/script>
...
</pre>
</blockquote>

<p>PHTML file</p>
<blockquote>
<pre>
&lt;?php echo $this->getAfterElementHtml(); ?>
</pre>
</blockquote>

<p><b>You must not hard-code HTML markup (used in the &lt;BODY> tag) in PHP classes.</b></p>

* Reduces long-term maintenance efforts by having markup stored in one place.
* Reduces the number of files to be modified.

<p><b>Acceptable:</b></p>
<p>PHP file</p>
<blockquote>
<pre>
public function getAttributeName($element) {
   return ($element->getExtType() === 'multiple') ? $element->getId() . '_checkbox' : NULL;
}

public function getAttributeId($element) {
   return $element->getId();
}
</pre>
</blockquote>

<p>PHTML file</p>
<blockquote>
<pre>
&lt;span class="attribute-change-checkbox">
    &lt;label>
        &lt;input type="checkbox" &lt;?php echo ($this->getAttributeName($element)) ? ' name="' . $this->getAttributeName($element).'"' : NULL; ?> data-mage-init="{customToggleWidget: [elementSelector: "input[name='someCustomName']"]}" />&lt;?php echo Mage::helper('Mage_Catalog_Helper_Data')->__('Change'); ?>&lt;/label>
&lt;/span>
&lt;!--jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements.-->
</pre>
</blockquote>

