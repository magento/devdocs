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

<h2>Contents</h2>

* TOC
{:toc}


## Semantics

### For attribute names and values you must use meaningful unabbreviated lowercase words comprised of Latin characters concatenated with a hyphen (`-`)
<ul>
   <li>Helps simplify and unify naming conventions that are used to apply visual styles to page elements.</li>
</ul>

**Acceptable**
{% highlight html %}
<section id="information-dialog-tree">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#information-dialog-tree">Scroll to text</a></a>
{% endhighlight %}

**Unacceptable**
{% highlight html %}
<section id="заголовок">
   <p> ... </p>
   <p> ... </p>
</section>
<section id="some_id">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#some_id">Scroll to text</a>
{% endhighlight %}

### Semantic representation may rely on ID attribute
<ul>
   <li>Forces engineers to think about reusable page components instead of unique singleton components.</li>
   <li>Reduces long-term maintenance efforts.</li>
</ul>

**Acceptable PHTML template**

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


**Unacceptable combination of PHTML, JavaScript, and CSS files**

<p>The following unacceptable example replaces a single PHTML file with a combination of a PHTML, JavaScript, and CSS files.</p>
<p><b>PHTML file</b></p>
{% highlight html %}
<ul id="my-special-menu">
   <li id="buttonId1" class="first" type="button">button 1</li>
   <li id="buttonId2" type="button">button 2</li>
   <li id="buttonId3" type="button">button 3</li>
</ul>
{% endhighlight %}

**JavaScript file**

{% highlight javascript %}
$('#my-special-menu').on('click','li[id^="button"]', function() { ... })
{% endhighlight %}

**CSS file**
{% highlight css %}
#my-special-menu { ... }
#my-special-menu > li { ... }
{% endhighlight %}

### You must follow the separation of presentation and content methodology.

The following list will help you make a distinction between the actual meaning of a document, and how this meaning is presented to its readers:

**Content (Semantics)** includes:

- logic
- information
- data
- model
- outline
- message

**Presentation** includes:

- aesthetic
- graphics
- design
- style
- visualization
- view

### You must use semantic HTML markup only, and must not use presentation markup.


**Acceptable**:

{%highlight html%}
<p>HTML has been created to <b>semantically</b> represent documents.</p>
<p><strong>Warning:</strong> Following the procedure described below may irreparably damage your equipment.</p>
{%endhighlight%}

**Unacceptable**:

{%highlight html%}
<p>HTML has been created to <strong>semantically</strong> represent documents.</p>
<p><b>Warning:</b> Following the procedure described below may irreparably damage your equipment.</p>
{%endhighlight%}

##Code demarcation 

### Visual representation must rely only on HTML `class` attributes, CSS pseudo-classes and pseudo-elements, HTML tags, and form element's type attribute and form elements state attributes (example: `disabled`, `checked`).

As the first option, you are required to use HTML class attributes. In case this option is not applicable then it is recommended to use HTML tags and form element's type attribute.

<ul>
   <li>Enforces clean, strict separation between visual and business logic layers.</li>
   <li>Allows frontend and backend teams to work independently.</li>
   <li>Allows changing look and feel without affecting business functionality, and vice versa.</li>
   <li>Enables frontend teams to clean up old styles quickly and easily when refactoring.</li>
</ul>

**Acceptable CSS selectors**

{% highlight css %}
.notices-wrapper { ... }
.page-header:after { ... }
.payment-list:first-child { ... }
.caution { ... }
.caution.link { ... }
form input[type="password"] { ... }
.control-text:focus { ... }
a:hover { ... }
nav li._active { ... }
{% endhighlight %}

**Unacceptable CSS selectors**

{% highlight css %}
#header { ... }
[data-action="delete"] { ... }
form input[name="password"] { ... }
section[role="main"] { ... }
[role="menu] [role="menuitem"] { ... }
[role="menu] [role="menuitem"].active { ... }
{% endhighlight %}

### You must not hard-code CSS styles in JavaScript files
<div class="bs-callout bs-callout-info" id="info">
   <p>Exception: CSS attributes where values must be calculated beyond the css-topics/LESS code.</p>
</div>
<ul>
   <li>Simplifies change of the default look and feel by adding CSS classes to and removing them from elements.</li>
   <li>Improves style extensibility.</li>
   <li>Reduces long-term maintenance efforts by containing CSS styles in a single place.</li>
</ul>

**Acceptable JavaScript widget file**
{% highlight javascript %}
...
   options: {
      hOffset: 0,
      myCustomElement: '[data-container="my-custom-element"]',
 hiddenClass: '_hidden'
  }
...
   this.element.toggleClass(this.options.hiddenClass);
...
   this.options.hOffset = /* calculation based on dimensions of some DOM elements within a widget */
   this.element.find(this.options.myCustomElement).css({'margin-top', this.options.hOffset + 'px'})
...
{% endhighlight %}

**Unacceptable JavaScript file**

{%highlight js%}
this.element.on('click', function() {
   if ($(this).is(':visible')) {
      $(this).css({ visibility: 'hidden' });
   } else {
      $(this).css({ visibility: 'visible' });
   }
});
{%endhighlight%}

### You must not use inline CSS styles inside HTML tags
<ul>
<li>Improves style extensibility allowing engineers to overload styles easier by toggling classes.</li>
<li>Enforces clean, strict separation between visual presentation and markup.</li>
<li>Enables frontend teams quickly and easily clean up old styles.</li></ul>

**Acceptable PHTML template**

{% highlight html %}
<div class="no-display"> ... </div>
{% endhighlight %}

**Unacceptable PHTML template**

{% highlight html %}
<div style="display: none;"> ... </div>
{% endhighlight %}

## Business logic and JavaScript

### Business logic must rely on only the form, form element name attributes, or data attributes

<ul>
<li>Enforces clean, strict separation between visual and business logic layers.</li>
<li>Allows frontend and backend teams to work independently.</li>
<li>Allows changing business logic without affecting styling and vice versa.</li></ul>

**Acceptable PHTML template**

{% highlight html %}
<div data-action="delete" data-mage-init="{myWidget: [option1: 'string']}"></div>
<div data-role="tooltip">More details</div>
{% endhighlight %}

**Acceptable JavaScript file**

{% highlight javascript %}
options {
 deleteAction:  '[data-action="delete"]',
 tooltip: '[data-role="tooltip]'  
}
...
this.element.find(this.options.deleteAction).on( ... );
this.element.on('click', this.options.deleteAction , function() { ... });
...
// Globally initialized widgets
$( this.options.tooltip).tooltip();  // Globally for ALL tooltip elements
...
{% endhighlight %}

**Unacceptable PHTML file**

{% highlight html %}
<div id="my-widget"></div>
{% endhighlight %}

**Unacceptable JavaScript file**

{% highlight javascript %}
$('#my-widget').doSomething();
$('.parent').on('click', '.button', function() { ... });
$('form').validate();
$('[role="menu"]').navigation();
{% endhighlight %}

### You must assign HTML helper classes in JavaScript to modify presentation layer.

HTML helper class names added in JavaScript REQUIRE underscore symbol ("_") at the beginning and must be written in lowercase.

**Acceptable**

{% highlight html %}
<div class="tab-element _active">Content</div>
<div class="sales-transactions _open">Content</div>
<div class="billing-agreement _expanded">Content</div>
<div class="sales-report _hidden">Content</div>
{% endhighlight %}


**Unacceptable**

{% highlight html %}
<div class="tab-element active">Content</div>
<div class="sales-transactions open">Content</div>
<div class="billing-agreement expanded">Content</div>
<div class="sales-report hidden">Content</div>
{% endhighlight %}


### You must not select DOM elements based on HTML structure
<ul>
<li>Allows frontend teams to modify markup and themes without affecting business logic.</li></ul>

**Acceptable JavaScript file**

{% highlight javascript %}
this.element.find('[data-action="edit"]');
this.elements.closest('[data-container]');
{% endhighlight %}

**Unacceptable JavaScript file**

{% highlight javascript %}
this.element.children().children().html('hello world');
this.element.parent().find('[data-action="edit"]').data('entity_id');
{% endhighlight %}

### You must use jQuery templates to insert recurring markup into DOM structure
<ul>
<li>Reinstates emphasis on jQuery templates. For more information, see JavaScript Coding Best Practices.</li>
<li>Reduces long-term maintenance efforts by having markup code stored in one place.</li>
<li>Simplifies frontend debugging efforts.</li></ul>

### You must not hard-code inline JavaScript in PHP classes
<ul>
<li>Reduces long term maintenance by having frontend business logic stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>

**Acceptable PHP file**

{% highlight php startinline=true %}
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
{% endhighlight %}

**Acceptable PHTML template**

{% highlight php startinline=true %}
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
{% endhighlight %}

or 

**Acceptable PHTML template**

{% highlight php startinline=true %}
...
<div data-role="treeSuggest"></div>
<script type="text/x-magento-init">
{
    "[data-role='treeSuggest']": {
        "treeSuggest": <?php echo $this->getSelectorOptions(); ?>
    }
}
</script>
...
{% endhighlight %}

**Unacceptable PHP file**

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

**Unacceptable PHTML template**

{% highlight php startinline=true %}
<?php echo $this->getAfterElementHtml(); ?>
{% endhighlight %}


## PHTML templates and PHP files

### You must not hard-code inline CSS styles in PHP classes
<ul>
<li>Reduces long-term maintenance efforts by having styles stored in one place.</li>
<li>Simplifies debugging and reduces number of files to be modified.</li>
<li>Makes styles more extensible and easier to override when needed.</li></ul>

**Acceptable PHP file**

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

**Unacceptable PHP file**

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

### You must not hard-code inline JavaScript in PHP classes
<ul>
<li>Reduces long term maintenance by having frontend business logic stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>

**Acceptable PHP file**

{% highlight php startinline=true %}
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
{% endhighlight %}

**Acceptable PHTML template**

{% highlight php startinline=true %}
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
{% endhighlight %}

**Unacceptable PHP file**

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

**Unacceptable PHTML template**
{% highlight php startinline=true %}
<?php echo $this->getAfterElementHtml(); ?>
{% endhighlight %}

### You must not hard-code HTML markup (used in the `<body>` tag) in PHP classes
<ul>
<li>Reduces long-term maintenance efforts by having markup stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>

**Acceptable PHP file**
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

**Acceptable PHTML template**

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

**Unacceptable PHP file**

{%highlight php%}
...
 public function getCheckbox($elementName){
    $elementNameTag = $this->getAttributeName($elementName) ? 'name="' . $this->getAttributeName($elementName) . '"' : NULL;
    $tpl = "<input type=\"checkbox\" {$elementNameTag} data-mage-init=\"{customToggleWidget: [elementSelector: \"input[name='someCustomName']\"]}\" />";
    return $tpl;
}
...
{%endhighlight%}

**Unacceptable PHTML template**

{%highlight php%}
<span class="attribute-change-checkbox”>
	<label>
		<?php echo $this->getCheckbox($element)?>
		<?php echo Mage::helper('Mage_Catalog_Helper_Data')->__('Change'); ?>
	</label>
</span>
<!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. -->

{%endhighlight%}


