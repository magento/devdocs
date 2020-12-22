---
group: coding-standards
subgroup: 01_Coding standards
landing-page: Coding standards
title: Code demarcation standard
menu_title: Code demarcation standard
menu_order: 1
functional_areas:
  - Standards
---

Magento core developers must follow the Magento code demarcation standard.

This standard is recommended for third-party [extension](https://glossary.magento.com/extension) developers.

Some parts of Magento code might not comply with the standard, but we are working to gradually improve this.

The standard was developed in the scope of our efforts to ensure the following:

-  Decouple visual (CSS) layer from the functional (JavaScript) layer.
-  Decouple functional (JavaScript) layer from the [markup](https://glossary.magento.com/markup) (HTML).
-  Reinstate emphasis on using of [jQuery](https://glossary.magento.com/jquery) templates.
-  Reinstate emphasis on decoupling HTML, [CSS](https://glossary.magento.com/css) and JS from [PHP](https://glossary.magento.com/php) classes.

Use [RFC 2119](http://www.ietf.org/rfc/rfc2119.txt) to interpret the "MUST," "MUST NOT," "REQUIRED," "SHALL," "SHALL NOT," "SHOULD," "SHOULD NOT," "RECOMMENDED," "MAY," and "OPTIONAL" keywords.

## Semantics

### For attribute names and values you must use meaningful unabbreviated lowercase words comprised of Latin characters concatenated with a hyphen (`-`)

-  Helps simplify and unify naming conventions that are used to apply visual styles to page elements.

**Acceptable:**

```html
<section id="information-dialog-tree">
   <p> ... </p>
   <p> ... </p>
</section>
<a href="#information-dialog-tree">Scroll to text</a>
```

**Unacceptable:**

```html
<section id="some_id">
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

-  Forces engineers to think about reusable page components instead of unique singleton components.
-  Reduces long-term maintenance efforts.

**Acceptable [PHTML](https://glossary.magento.com/phtml) template:**

The following acceptable example is terse and uses an Accessible Rich Internet Applications (ARIA) approach.

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

**Unacceptable combination of PHTML, JavaScript, and CSS files:**

The following unacceptable example replaces a single PHTML file with a combination of a PHTML, JavaScript, and CSS files.

**PHTML file:**

```php
<ul id="my-special-menu">
   <li id="buttonId1" class="first" type="button">button 1</li>
   <li id="buttonId2" type="button">button 2</li>
   <li id="buttonId3" type="button">button 3</li>
</ul>
```

**JavaScript file:**

```js
$('#my-special-menu').on('click','li[id^="button"]', function() { ... })
```

**CSS file:**

```css
#my-special-menu { ... }
#my-special-menu > li { ... }
```

### You must follow the separation of presentation and content methodology

The following list will help you make a distinction between the actual meaning of a document, and how this meaning is presented to its readers:

**Content (Semantics)** includes:

-  logic
-  information
-  data
-  model
-  outline
-  message

**Presentation** includes:

-  aesthetic
-  graphics
-  design
-  style
-  visualization
-  view

### You must use semantic HTML markup only, and must not use presentation markup

**Acceptable:**

```html
<p>HTML has been created to <strong>semantically</strong> represent documents.</p>
<p><strong>Warning:</strong> Following the procedure described below may irreparably damage your equipment.</p>
```

**Unacceptable:**

```html
<p>HTML has been created to <b>semantically</b> represent documents.</p>
<p><b>Warning:</b> Following the procedure described below may irreparably damage your equipment.</p>
```

## Code demarcation

### Visual representation must rely only on HTML `class` attributes, CSS pseudo-classes and pseudo-elements, HTML tags, and form element's type attribute and form elements state attributes (example: `disabled`, `checked`).

As the first option, you are required to use [HTML](https://glossary.magento.com/html) class attributes. In case this option is not applicable then it is recommended to use HTML tags and form element's type attribute.

-  Enforces clean, strict separation between visual and business logic layers.
-  Allows [frontend](https://glossary.magento.com/frontend) and [backend](https://glossary.magento.com/backend) teams to work independently.
-  Allows changing look and feel without affecting business functionality, and vice versa.
-  Enables frontend teams to clean up old styles quickly and easily when refactoring.

**Acceptable CSS selectors:**

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

**Unacceptable CSS selectors:**

```css
#header { ... }
[data-action="delete"] { ... }
form input[name="password"] { ... }
section[role="main"] { ... }
[role="menu] [role="menuitem"] { ... }
[role="menu] [role="menuitem"].active { ... }
```

### You must not hard-code CSS styles in JavaScript files

{%
include note.html
type='info'
content='Exception: CSS attributes where values must be calculated beyond the css-topics/LESS code.

-  Simplifies change of the default look and feel by adding CSS classes to and removing them from elements.
-  Improves style extensibility.
-  Reduces long-term maintenance efforts by containing CSS styles in a single place.'

%}

**Acceptable [JavaScript](https://glossary.magento.com/javascript) [widget](https://glossary.magento.com/widget) file:**

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
   this.element.find(this.options.myCustomElement).css({'margin-top', this.options.hOffset + 'px'});
...
```

**Unacceptable JavaScript file:**

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

-  Improves style extensibility allowing engineers to overload styles easier by toggling classes.
-  Enforces clean, strict separation between visual presentation and markup.
-  Enables frontend teams quickly and easily clean up old styles.

**Acceptable PHTML template:**

```php
<div class="no-display"> ... </div>
```

**Unacceptable PHTML template:**

```php
<div style="display: none;"> ... </div>
```

## Business logic and JavaScript

### Business logic must rely on only the form, form element name attributes, or data attributes

-  Enforces clean, strict separation between visual and business logic layers.
-  Allows frontend and backend teams to work independently.
-  Allows changing business logic without affecting styling and vice versa.

**Acceptable PHTML template:**

```php
<div data-action="delete" data-mage-init="{myWidget: [option1: 'string']}"></div>
<div data-role="tooltip">More details</div>
```

**Acceptable JavaScript file:**

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

**Unacceptable PHTML file:**

```html
<div id="my-widget"></div>
```

**Unacceptable JavaScript file:**

```js
$('#my-widget').doSomething();
$('.parent').on('click', '.button', function() { ... });
$('form').validate();
$('[role="menu"]').navigation();
```

### You must assign HTML helper classes in JavaScript to modify presentation layer

HTML helper class names added in JavaScript REQUIRE underscore symbol ("_") at the beginning and must be written in lowercase.

**Acceptable:**

```html
<div class="tab-element _active">Content</div>
<div class="sales-transactions _open">Content</div>
<div class="billing-agreement _expanded">Content</div>
<div class="sales-report _hidden">Content</div>
```

**Unacceptable:**

```html
<div class="tab-element active">Content</div>
<div class="sales-transactions open">Content</div>
<div class="billing-agreement expanded">Content</div>
<div class="sales-report hidden">Content</div>
```

### You must not select DOM elements based on HTML structure

-  Allows frontend teams to modify markup and themes without affecting business logic.

**Acceptable JavaScript file:**

```js
this.element.find('[data-action="edit"]');
this.elements.closest('[data-container]');
```

**Unacceptable JavaScript file:**

```js
this.element.children().children().html('hello world');
this.element.parent().find('[data-action="edit"]').data('entity_id');
```

### You must use jQuery templates to insert recurring markup into DOM structure

-  Reinstates emphasis on jQuery templates. For more information, see JavaScript Coding Best Practices.
-  Reduces long-term maintenance efforts by having markup code stored in one place.
-  Simplifies frontend debugging efforts.

## PHTML templates and PHP files

### You must not hard-code inline CSS styles in PHP classes

-  Reduces long-term maintenance efforts by having styles stored in one place.
-  Simplifies debugging and reduces number of files to be modified.
-  Makes styles more extensible and easier to override when needed.

**Acceptable PHP file:**

```php
...
$fieldset->addField('new_category_parent', 'text', [
    'label'    => __('Parent Category'),
    'title'    => __('Parent Category'),
    'required' => true,
    'class'    => 'parent category',
]);
...
```

**Unacceptable PHP file:**

```php
...
$fieldset->addField('new_category_parent', 'text', [
    'label'    => __('Parent Category'),
    'title'    => __('Parent Category'),
    'required' => true,
    'style'    => 'border: 1px solid #ccc;',
]);
...
```

### You must not hard-code inline JavaScript in PHP classes

-  Reduces long term maintenance by having frontend business logic stored in one place.
-  Reduces the number of files to be modified.

**Acceptable PHP file:**

```php
...
public function getSelectorOptions()
{
    return $selectorOptions;
}
...
```

**Acceptable PHTML template:**

```php
...
<div data-mage-init="{treeSuggest: [<?php echo $this->getSelectorOptions(); ?>]}"></div>
...
```

or

**Acceptable PHTML template:**

```php
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

**Unacceptable PHP file:**

```php
...
public function getAfterElementHtml()
{
    return <<<HTML
<script>
jQuery('#{$htmlId}-suggest').treeSuggest({$selectorOptions});
</script>
...
```

**Unacceptable PHTML template:**

```php
<?php echo $this->getAfterElementHtml(); ?>
```

### You must not hard-code HTML markup (used in the `<body>` tag) in PHP classes

-  Reduces long-term maintenance efforts by having markup stored in one place.
-  Reduces the number of files to be modified.

**Acceptable PHP file:**

```php
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

**Acceptable PHTML template:**

```php
<span class="attribute-change-checkbox">
<label>
   <input type="checkbox"
      <?php echo ($this->getAttributeName($element)) ? ' name="' . $this->getAttributeName($element) . '"' : NULL; ?>
      data-mage-init="{customToggleWidget: [elementSelector: "input[name='someCustomName']"]}" />
   <?php echo __('Change'); ?>
</label>
</span>
<!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. -->
```

**Unacceptable PHP file:**

```php
...
public function getCheckbox($elementName){
    $elementNameTag = $this->getAttributeName($elementName) ? 'name="' . $this->getAttributeName($elementName) . '"' : NULL;
    $tpl = "<input type=\"checkbox\" {$elementNameTag} data-mage-init=\"{customToggleWidget: [elementSelector: \"input[name='someCustomName']\"]}\" />";
    return $tpl;
}
...
```

**Unacceptable PHTML template:**

```php
<span class="attribute-change-checkbox">
   <label>
      <?php echo $this->getCheckbox($element)?>
      <?php echo __('Change'); ?>
   </label>
</span>
<!-- jQuery.hide() code can be either located in the widget itself OR can ask PHP Block class whether or not 'weight_and_type_switcher' should be visible. Based on this condition CSS can be applied to hide/show those elements. -->
```
