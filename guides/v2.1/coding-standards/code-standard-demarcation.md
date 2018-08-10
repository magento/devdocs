---
group: coding-standards
subgroup: 01_Coding standards
landing-page: Coding standards
title: Code demarcation standard
menu_title: Code demarcation standard
menu_order: 1
version: 2.1
redirect_from: /guides/v1.0/coding-standards/code-standard-demarcation.html
functional_areas:
  - Standards
---

<p>Magento core developers must follow the Magento code demarcation standard.</p>
<p>This standard is recommended for third-party {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers.</p>
<p>Some parts of Magento code might not comply with the standard, but we are working to gradually improve this.</p>
<p>The standard was developed in the scope of our efforts to ensure the following:</p>
<ul>
   <li>Decouple visual (CSS) layer from the functional (JavaScript) layer.</li>
   <li>Decouple functional (JavaScript) layer from the {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}markup{% endglossarytooltip %} (HTML).</li>
   <li>Reinstate emphasis on using of {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}jQuery{% endglossarytooltip %} templates.</li>
   <li>Reinstate emphasis on decoupling HTML, {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} and JS from {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} classes.</li>
</ul>
<p>Use <a href="http://www.ietf.org/rfc/rfc2119.txt">RFC 2119</a> to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" keywords.</p>

## Semantics

### For attribute names and values you must use meaningful unabbreviated lowercase words comprised of Latin characters concatenated with a hyphen (`-`)

<ul>
   <li>Helps simplify and unify naming conventions that are used to apply visual styles to page elements.</li>
</ul>

**Acceptable**
```html
<section id="information-dialog-tree">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#information-dialog-tree">Scroll to text</a></a>
```

**Unacceptable**
```html
<section id="заголовок">
   <p> ... </p>
   <p> ... </p>
</section>
<section id="some_id">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#some_id">Scroll to text</a>
```

### Semantic representation may rely on ID attribute

<ul>
   <li>Forces engineers to think about reusable page components instead of unique singleton components.</li>
   <li>Reduces long-term maintenance efforts.</li>
</ul>

**Acceptable {% glossarytooltip ae0f1f68-c466-4189-88fd-6cd8b23c804f %}PHTML{% endglossarytooltip %} template**

<p>The following acceptable example is terse and uses an Accessible Rich Internet Applications (ARIA) approach.</p>

```html
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
```


**Unacceptable combination of PHTML, JavaScript, and CSS files**

<p>The following unacceptable example replaces a single PHTML file with a combination of a PHTML, JavaScript, and CSS files.</p>
<p><b>PHTML file</b></p>

```php?start_inline=1
<ul id="my-special-menu">
   <li id="buttonId1" class="first" type="button">button 1</li>
   <li id="buttonId2" type="button">button 2</li>
   <li id="buttonId3" type="button">button 3</li>
</ul>
```

**JavaScript file**

```js
$('#my-special-menu').on('click','li[id^="button"]', function() { ... })
```

**CSS file**
```css
#my-special-menu { ... }
#my-special-menu > li { ... }
```

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

```html
<p>HTML has been created to <strong>semantically</strong> represent documents.</p>
<p><strong>Warning:</strong> Following the procedure described below may irreparably damage your equipment.</p>
```

**Unacceptable**:

```html
<p>HTML has been created to <b>semantically</b> represent documents.</p>
<p><b>Warning:</b> Following the procedure described below may irreparably damage your equipment.</p>
```

## Code demarcation

### Visual representation must rely only on HTML `class` attributes, CSS pseudo-classes and pseudo-elements, HTML tags, and form element's type attribute and form elements state attributes (example: `disabled`, `checked`).

As the first option, you are required to use {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} class attributes. In case this option is not applicable then it is recommended to use HTML tags and form element's type attribute.

<ul>
   <li>Enforces clean, strict separation between visual and business logic layers.</li>
   <li>Allows {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} and {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} teams to work independently.</li>
   <li>Allows changing look and feel without affecting business functionality, and vice versa.</li>
   <li>Enables frontend teams to clean up old styles quickly and easily when refactoring.</li>
</ul>

**Acceptable CSS selectors**

```css
.notices-wrapper { ... }
.page-header:after { ... }
.payment-list:first-child { ... }
.caution { ... }
.caution.link { ... }
form input[type="password"] { ... }
.control-text:focus { ... }
a:hover { ... }
nav li._active { ... }
```

**Unacceptable CSS selectors**

```css
#header { ... }
[data-action="delete"] { ... }
form input[name="password"] { ... }
section[role="main"] { ... }
[role="menu] [role="menuitem"] { ... }
[role="menu] [role="menuitem"].active { ... }
```

### You must not hard-code CSS styles in JavaScript files

<div class="bs-callout bs-callout-info" id="info">
   <p>Exception: CSS attributes where values must be calculated beyond the css-topics/LESS code.</p>
</div>
<ul>
   <li>Simplifies change of the default look and feel by adding CSS classes to and removing them from elements.</li>
   <li>Improves style extensibility.</li>
   <li>Reduces long-term maintenance efforts by containing CSS styles in a single place.</li>
</ul>

**Acceptable {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} {% glossarytooltip f0dcf847-ce21-4b88-8b45-83e1cbf08100 %}widget{% endglossarytooltip %} file**

```js
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
```

**Unacceptable JavaScript file**

```js
this.element.on('click', function() {
   if ($(this).is(':visible')) {
      $(this).css({ visibility: 'hidden' });
   } else {
      $(this).css({ visibility: 'visible' });
   }
});
```

### You must not use inline CSS styles inside HTML tags

<ul>
<li>Improves style extensibility allowing engineers to overload styles easier by toggling classes.</li>
<li>Enforces clean, strict separation between visual presentation and markup.</li>
<li>Enables frontend teams quickly and easily clean up old styles.</li></ul>

**Acceptable PHTML template**

```php?start_inline=1
<div class="no-display"> ... </div>
```

**Unacceptable PHTML template**

```php?start_inline=1
<div style="display: none;"> ... </div>
```

## Business logic and JavaScript

### Business logic must rely on only the form, form element name attributes, or data attributes

<ul>
<li>Enforces clean, strict separation between visual and business logic layers.</li>
<li>Allows frontend and backend teams to work independently.</li>
<li>Allows changing business logic without affecting styling and vice versa.</li></ul>

**Acceptable PHTML template**

```php?start_inline=1
<div data-action="delete" data-mage-init="{myWidget: [option1: 'string']}"></div>
<div data-role="tooltip">More details</div>
```

**Acceptable JavaScript file**

```js
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
```

**Unacceptable PHTML file**

```php?start_inline=1
<div id="my-widget"></div>
```

**Unacceptable JavaScript file**

```js
$('#my-widget').doSomething();
$('.parent').on('click', '.button', function() { ... });
$('form').validate();
$('[role="menu"]').navigation();
```

### You must assign HTML helper classes in JavaScript to modify presentation layer.

HTML helper class names added in JavaScript REQUIRE underscore symbol ("_") at the beginning and must be written in lowercase.

**Acceptable**

```html
<div class="tab-element _active">Content</div>
<div class="sales-transactions _open">Content</div>
<div class="billing-agreement _expanded">Content</div>
<div class="sales-report _hidden">Content</div>
```


**Unacceptable**

```html
<div class="tab-element active">Content</div>
<div class="sales-transactions open">Content</div>
<div class="billing-agreement expanded">Content</div>
<div class="sales-report hidden">Content</div>
```

### You must not select DOM elements based on HTML structure

<ul>
<li>Allows frontend teams to modify markup and themes without affecting business logic.</li></ul>

**Acceptable JavaScript file**

```js
this.element.find('[data-action="edit"]');
this.elements.closest('[data-container]');
```

**Unacceptable JavaScript file**

```js
this.element.children().children().html('hello world');
this.element.parent().find('[data-action="edit"]').data('entity_id');
```

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

```php?start_inline=1
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
```

**Acceptable PHTML template**

```php?start_inline=1
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
```

or

**Acceptable PHTML template**

```php?start_inline=1
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
```

**Unacceptable PHP file**

```php?start_inline=1
...
public function getAfterElementHtml()
{
    return <<<HTML
<script>
jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
</script>
...
```

**Unacceptable PHTML template**

```php?start_inline=1
<?php echo $this->getAfterElementHtml(); ?>
```

## PHTML templates and PHP files

### You must not hard-code inline CSS styles in PHP classes

<ul>
<li>Reduces long-term maintenance efforts by having styles stored in one place.</li>
<li>Simplifies debugging and reduces number of files to be modified.</li>
<li>Makes styles more extensible and easier to override when needed.</li></ul>

**Acceptable PHP file**

```php?start_inline=1
...
$fieldset->addField('new_category_parent', 'text', array(
    'label'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'title'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'required' => true,
    'class'    => 'parent category',
));
...
```

**Unacceptable PHP file**

```php?start_inline=1
...
$fieldset->addField('new_category_parent', 'text', array(
    'label'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'title'    => Mage::helper('Mage_Catalog_Helper_Data')->__('Parent Category'),
    'required' => true,
    'style'    => 'border: 1px solid #ccc;',
));
...
```

### You must not hard-code inline JavaScript in PHP classes

<ul>
<li>Reduces long term maintenance by having frontend business logic stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>

**Acceptable PHP file**

```php?start_inline=1
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
```

**Acceptable PHTML template**

```php?start_inline=1
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
```

**Unacceptable PHP file**

```php?start_inline=1
...
public function getAfterElementHtml()
{
    return <<<HTML
<script>
jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
</script>
...
```

**Unacceptable PHTML template**
```php?start_inline=1
<?php echo $this->getAfterElementHtml(); ?>
```

### You must not hard-code HTML markup (used in the `<body>` tag) in PHP classes

<ul>
<li>Reduces long-term maintenance efforts by having markup stored in one place.</li>
<li>Reduces the number of files to be modified.</li></ul>

**Acceptable PHP file**

```php?start_inline=1
...
public function getAttributeName($element)
{
    return ($element->getExtType() === 'multiple') ? $element->getId() . '_checkbox' : NULL;
}

public function getAttributeId($element)
{
    return $element->getId();
}
...
```

**Acceptable PHTML template**

```php?start_inline=1
<span class="attribute-change-checkbox">
<label>
   <input type="checkbox"
      <?php echo ($this->getAttributeName($element)) ? ' name="' . $this->getAttributeName($element) . '"' : NULL; ?>
      data-mage-init="{customToggleWidget: [elementSelector: "input[name='someCustomName']"]}" />
   <?php echo Mage::helper('Mage_Catalog_Helper_Data')->__('Change'); ?>
</label>
</span>
<!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. -->
```

**Unacceptable PHP file**

```php?start_inline=1
...
public function getCheckbox($elementName){
    $elementNameTag = $this->getAttributeName($elementName) ? 'name="' . $this->getAttributeName($elementName) . '"' : NULL;
    $tpl = "<input type=\"checkbox\" {$elementNameTag} data-mage-init=\"{customToggleWidget: [elementSelector: \"input[name='someCustomName']\"]}\" />";
    return $tpl;
}
...
```

**Unacceptable PHTML template**

```php?start_inline=1
<span class="attribute-change-checkbox">
	<label>
		<?php echo $this->getCheckbox($element)?>
		<?php echo Mage::helper('Mage_Catalog_Helper_Data')->__('Change'); ?>
	</label>
</span>
<!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. -->
```
