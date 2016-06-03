---
layout: default
group: coding-standards
subgroup: Coding standards
title: Code demarcation standard
menu_title: Code demarcation standard
menu_order: 1
github_link21: coding-standards/code-standard-demarcation.md
---

<p>Magento core developers must follow the Magento code demarcation standard.</p>
<p>This standard is recommended for third-party extension developers.</p>
<p>Some parts of Magento code might not comply with the standard, but we are working to gradually improve this.</p>
<p>The standard was developed in the scope of our efforts to ensure the following:</p>
<ul>
   <li>Decouple visual (CSS) layer from the functional (JavaScript) layer.</li>
   <li>Decouple functional (JavaScript) layer from the markup (HTML).</li>
   <li>Reinstate emphasis on using of jQuery templates.</li>
   <li>Reinstate emphasis on decoupling HTML, CSS and JS from PHP classes.</li>
</ul>
<p>Use <a href="http://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a> to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" keywords.</p>
<h2>Semantics</h2>
<h3>You must create non-user-oriented string literals from unabbreviated English words concatenated with a hyphen (<code>-</code>)</h3>
<ul>
   <li>Helps simplify and unify naming conventions that are used to apply visual styles to page elements.</li>
</ul>
<p><b>Acceptable PHTML file</b></p>
{% highlight html %}
<section id="some-id">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#some-id">Scroll to text</a></a>
{% endhighlight %}
<p><b>Unacceptable PHTML file</b></p>
{% highlight html %}
<section id="загаловок">
   <p> ... </p>
   <p> ... </p>
</section>
<section id="some_id">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#some_id">Scroll to text</a>
{% endhighlight %}
<h3>Semantic representation may rely on ID attribute</h3>
<ul>
   <li>Forces engineers to think about reusable page components instead of unique singleton components.</li>
   <li>Reduces long-term maintenance efforts.</li>
</ul>
<p><b>Acceptable PHTML file</b></p>
<p>The following acceptable example is terse and uses an Accessible Rich Internet Applications (ARIA) approach.</p>
{% highlight html %}
<ul>
   <li class="first" type="button" aria-pressed="false" aria-controls="some-id">button 1</li>
   <li type="button" aria-pressed="false" aria-controls="some-id">button 2</li>
   <li type="button" aria-pressed="true" aria-controls="some-id">button 3</li>
</ul>
<div>
   <label for="some-id">Enter text</label>
   <textarea id="some-id"></textarea>
</div>
<a href="#some-id">Scroll to text</a>
{% endhighlight %}
<p><b>Unacceptable combination of PHTML, JavaScript, and CSS files</b></p>
<p>The following unacceptable example replaces a single PHTML file with a combination of a PHTML, JavaScript, and CSS files.</p>
<p><b>PHTML file</b></p>
{% highlight html %}
<ul id="my-special-menu">
   <li id="buttonId1" class="first" type="button">button 1</li>
   <li id="buttonId2" type="button">button 2</li>
   <li id="buttonId3" type="button">button 3</li>
</ul>
{% endhighlight %}
<p><b>JavaScript file</b></p>
{% highlight javascript %}
$('#my-special-menu').on('click','li[id^="button"]', function() { ... })
{% endhighlight %}
<p><b>CSS file</b></p>
{% highlight css %}
#my-special-menu { ... }
#my-special-menu > li { ... }
{% endhighlight %}
<h2>Code demarcation</h2>
<h3>Visual representation must rely on only form element type attributes, HTML tags, CSS classes, or pseudo-classes</h3>
<ul>
   <li>Enforces clean, strict separation between visual and business logic layers.</li>
   <li>Allows frontend and backend teams to work independently.</li>
   <li>Allows changing look and feel without affecting business functionality, and vice versa.</li>
   <li>Enables frontend teams to clean up old styles quickly and easily when refactoring.</li>
</ul>
<p><b>Acceptable CSS file</b></p>
{% highlight css %}
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
{% endhighlight %}
<p><b>Unacceptable CSS file</b></p>
{% highlight css %}
#header { ... }
[data-action="delete"] { ... }
form input[name="password"] { ... }
section[role="main"] { ... }
[role="menu] [role="menuitem"] { ... }
[role="menu] [role="menuitem"].active { ... }
{% endhighlight %}

<h3>You must not hard-code CSS styles in JavaScript files</h3>
<div class="bs-callout bs-callout-info" id="info">
   <p>Exception: CSS attributes where values must be calculated beyond the css-topics/LESS code.</p>
</div>
<ul>
   <li>Simplifies change of the default look and feel by adding CSS classes to and removing them from elements.</li>
   <li>Improves style extensibility.</li>
   <li>Reduces long-term maintenance efforts by containing CSS styles in a single place.</li>
</ul>
<p><b>Acceptable JavaScript widget file</b></p>
{% highlight javascript %}
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
{% endhighlight %}
<p><b>Unacceptable JavaScript file</b></p>
{% highlight javascript %}
this.element.on('click', function() {
   if ($(this).is(':visible')) {
      $(this).css({ visibility: 'hidden' });
   } else {
      $(this).css({ visibility: 'visible' });
   }
});
{% endhighlight %}



<h3>You must not use inline CSS styles inside HTML tags</h3>
<ul>
<li>Improves style extensibility allowing engineers to overload styles easier by toggling classes.</li>
<li>Enforces clean, strict separation between visual presentation and markup.</li>
<li>Enables frontend teams quickly and easily clean up old styles.</li></ul>
<p><b>Acceptable PHTML file</b></p>
{% highlight html %}
<div class="no-display"> ... </div>
{% endhighlight %}
<p><b>Unacceptable PHTML file</b></p>
{% highlight html %}
<div style="display: none;"> ... </div>
{% endhighlight %}
<h2>Business logic and JavaScript</h2>
<h3>Business logic must rely on only the form, form element name attributes, or data attributes</h3>
<ul>
<li>Enforces clean, strict separation between visual and business logic layers.</li>
<li>Allows frontend and backend teams to work independently.</li>
<li>Allows changing business logic without affecting styling and vice versa.</li></ul>
<p><b>Acceptable PHTML file</b></p>
{% highlight html %}
<div data-mage-init="{myWidget: [option1: 'hi']}"></div>
{% endhighlight %}
<p><b>Acceptable JavaScript file</b></p>
{% highlight javascript %}
...
this.element.find('[data-action="delete"]').on( ... );
this.element.on('click', '[data-action="delete"]', function() { ... });
...
// Globally initialized widgets
$('[data-role="tooltip]').tooltip();  // Globally for ALL tooltip elements
...
{% endhighlight %}
<p><b>Unacceptable PHTML file</b></p>
{% highlight html %}
<div id="my-widget"></div>
{% endhighlight %}
<p><b>Unacceptable JavaScript file</b></p>
{% highlight javascript %}
$('#my-widget').doSomething();
$('.parent').on('click', '.button', function() { ... });
$('form').validate();
$('[role="menu"]').navigation();
{% endhighlight %}
<h3>You must not select DOM elements based on HTML structure</h3>
<ul>
<li>Allows frontend teams to modify markup and themes without affecting business logic.</li></ul>
<p><b>Acceptable JavaScript file</b></p>
{% highlight javascript %}
this.element.find('[data-action="edit"]');
this.elements.closest('[data-container]');
{% endhighlight %}
<p><b>Unacceptable JavaScript file</b></p>
{% highlight javascript %}
this.element.children().children().html('hello world');
this.element.parent().find('[data-action="edit"]').data('entity_id');
{% endhighlight %}
<h3>You must use jQuery templates to insert recurring markup into DOM structure</h3>
<ul>
<li>Reinstates emphasis on jQuery templates. For more information, see JavaScript Coding Best Practices.</li>
<li>Reduces long-term maintenance efforts by having markup code stored in one place.</li>
<li>Simplifies frontend debugging efforts.</li></ul>
<h3>You must not hard-code inline JavaScript in PHP classes</h3>
<ul>
<li>Reduces long term maintenance by having frontend business logic stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>
<p><b>Acceptable PHP file</b></p>
{% highlight php startinline=true %}
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
{% endhighlight %}
<p><b>Acceptable PHTML template</b></p>
{% highlight php startinline=true %}
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
{% endhighlight %}
<p><b>Unacceptable PHP file</b></p>
{% highlight php startinline=true %}
...
public function getAfterElementHtml()
{
    return <<<HTML
<script>
jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
</script>
...
{% endhighlight %}
<p><b>Unacceptable PHTML file</b></p>
{% highlight php startinline=true %}
<?php echo $this->getAfterElementHtml(); ?>
{% endhighlight %}
<h2>PHTML templates and PHP files</h2>
<h3>You must not hard-code inline CSS styles in PHP classes</h3>
<ul>
<li>Reduces long-term maintenance efforts by having styles stored in one place.</li>
<li>Simplifies debugging and reduces number of files to be modified.</li>
<li>Makes styles more extensible and easier to override when needed.</li></ul>
<p><b>Acceptable PHP file</b></p>
{% highlight php startinline=true %}
...
$fieldset->addField('new_category_parent', 'text', array(
    'label'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'title'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'required' => true,
    'class'    => 'parent category',
));
...
{% endhighlight %}
<p><b>Unacceptable PHP file</b></p>
{% highlight php startinline=true %}
...
$fieldset->addField('new_category_parent', 'text', array(
    'label'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'title'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'required' => true,
    'style'    => 'border: 1px solid #ccc;',
));
...
{% endhighlight %}
<h3>You must not hard-code inline JavaScript in PHP classes</h3>
<ul>
<li>Reduces long term maintenance by having frontend business logic stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>
<p><b>Acceptable PHP file</b></p>
{% highlight php startinline=true %}
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
{% endhighlight %}
<p><b>Acceptable PHTML template</b></p>
{% highlight php startinline=true %}
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
{% endhighlight %}
<p><b>Unacceptable PHP file</b></p>
{% highlight php startinline=true %}
...
public function getAfterElementHtml()
{
    return <<<HTML
<script>
jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
</script>
...
{% endhighlight %}
<p><b>Unacceptable PHTML file</b></p>
{% highlight php startinline=true %}
<?php echo $this->getAfterElementHtml(); ?>
{% endhighlight %}
<h3>You must not hard-code HTML markup (used in the <BODY> tag) in PHP classes</h3>
<ul>
<li>Reduces long-term maintenance efforts by having markup stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>
<p><b>Acceptable PHP file</b></p>
<pre>
public function getAttributeName($element)
{
    return ($element->getExtType() === 'multiple') ? $element->getId() . '_checkbox' : NULL;
}

public function getAttributeId($element)
{
    return $element->getId();
}
</pre>
<p><b>Acceptable PHTML file</b></p>

{% highlight php startinline=true %}
<span class="attribute-change-checkbox”>
<label>
   <input type="checkbox” 
      <?php echo ($this->getAttributeName($element)) ? ' name="' . $this->getAttributeName($element) . '"' : NULL; ?>
      data-mage-init="{customToggleWidget: [elementSelector: "input[name='someCustomName']"]}" />
   <?php echo Mage::helper('Mage_Catalog_Helper_Data')->__('Change'); ?>
</label>
</span>
<!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. -->

{% endhighlight %}






