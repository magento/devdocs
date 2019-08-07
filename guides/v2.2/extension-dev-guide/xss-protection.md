---
group: php-developer-guide
subgroup: Security
title: XSS prevention strategies
menu_title: XSS prevention strategies
menu_order: 1100
---

### Overview

[Cross-site scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)){:target="_blank"}, or XSS, is a security vulnerability that can be found in web applications. This vulnerability allows attackers to inject malicious code/styles into a web page viewed by users. Magento [extension](https://glossary.magento.com/extension) developers should be aware of these vulnerabilities to avoid introducing them in their code.

There are mainly three types of XSS vulnerabilities:

* **Persisted XSS** - In this type of vulnerability, the source of unvalidated data comes from the Database or [Backend](https://glossary.magento.com/backend) permanent store.
* **Reflected (non-persistent) XSS** - This type of vulnerability occurs when data provided by a web client is used immediately by server-side scripts to parse and display a page to a user without properly sanitizing the request.
* **DOM XSS** - For this vulnerability, the malicious data does not touch the web server. Rather, it is being reflected by the [JavaScript](https://glossary.magento.com/javascript) code, fully on the client side.

### Preventing XSS

XSS vulnerabilities can be prevented by validating and sanitizing user input as well as sanitizing dynamic values when rendering view
(HTML, mobile).

#### Input Processing

Any request data can be manipulated by attackers and can contain malicious values like form fields filled with control characters ("<", ">" etc), headers containg false IDs, URIs contaings fake parts/query parameters, tempred cookies and so on. To combat this developers
must validate any value coming from requests making sure it is inside allowed list, symbols range, type.
 
It is better to validate/sanitize values as close as possible to view context because only then you can be sure of restrictions you have to impose on dynamic values and you are not risking security requirements contradicting buisness requirements.
For instance there is no reason from business standpoints not to allow "<" ">" symbols in your users' "About me" section and by escaping control symbols when rendering HTML you would not force this requirement. Furthermore users' "About me" data may be delivered via RESTful API and used in a mobile application where restricted symbols would be "{" "}" and if sanitized earlier user data would be damaged and contain HTML control symbols (\&gt;\&lt;).

#### Output Processing

Output processing involves sanitizing strings that may have come from external data sources before using it to render view. It is the main method of protecting your extension from XSS attacks.
 
In general - you cannot trust any dynamic values.
 
##### PHTML templates
Escaper class is provided to be used inside .phtml templates and PHP classes responsible for generating HTML, it contains multiple HTML sanitization methods for different contexts.
\$block local variable available inside .phtml templates duplicates these methods.
See [Template guide](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/templates/template-overview.html) to read more about templates in Magento
 
Follow the rules below when using the Escaper:
 
* If a method indicates that the content is escaped, do not escape: getTitleHtml(), getHtmlTitle() (the title is ready for the HTML
  output)
* Type casting and php function count() don’t need escaping (for example echo (int)$var, echo (bool)$var, echo count($var))
* Output in single quotes doesn’t need escaping (for example echo 'some text')
* Output in double quotes without variables doesn’t need escaping (for example echo "some text")
* For all other cases, escape the data using context-specific escape functions.
 
__The following code sample illustrates XSS-safe output in templates:__
 
```php
<?php echo $block->getTitleHtml() ?>
<?php echo $block->getHtmlTitle() ?>
<?php echo $block->escapeHtml($block->getTitle()) ?>
<?php echo (int)$block->getId() ?>
<?php echo count($var); ?>
<?php echo 'some text' ?>
<?php echo "some text" ?>
<a href="<?php echo $block->escapeUrl($block->getUrl()) ?>"><?php echo $block->getAnchorTextHtml() ?></a>
```
 
__When to use Escaper methods:__
 
__Case__: JSON inside an HTML attribute
__Escaper method__: escapeHtmlAttribute
 
```php
<div data-bind='settings: <?= $block->escapeHtmlAttribute($myJson) ?>'></div>
```
 
__Case__: JSON inside script tag
__Escaper method__: _no sanitization needed_
 
```php
<script>
let settings = <?= $myJson ?>
</script>
```
 
__Case__: HTML tag content that should not contain HTML
__Escaper method__: escapeHtml
 
You can pass in an optional array of allowed tags that will not be escaped.
 
If a tag is allowed, the following attributes will not be escaped: id, class, href, target, style and title. Any other attribute for that allowed tag will be escaped.
 
embed, iframe, video, source, object, audion, script and img tags will not be allowed regardless of the content of this array.
 
```php
 <span class="label"><?php echo $block->escapeHtml($block->getLabel()) ?></span>
  
  // Escaping translation
  <div id='my-element'>
      <?php echo $block->escapeHtml(__('Only registered users can write reviews. Please <a href="%1">Sign in</a> or <a href="%2">create an account</a>', $block->getLoginUrl(), $block->getCreateAccountUrl()), ['a']) ?>
  </div>
```
 
__Case__: URL inside certain HTML attributes
__Escaper method__: escapeUrl
 
Certain attributes like a.href accept URIs of various types and must be sanitized
 
```php
<a href="<?= $block->escapeUrl($myUrl) ?>">Click me</a>
<div attr-js-extracts="<?= $block->escapeHtmlAttribute($myOtherUrl) ?>"></div>
```
 
__Case__: JavaScript string that must not contain JS/HTML
__Escaper method__: escapeJS
 
```php
<script>
let phrase = "Hi, my name is <?= $block->escapeJs($myName) ?>";
//Do not use HTMl context methods like escapeUrl
let redirectUrl = "<?= $block->escapeJs($myUrl) ?>";
location.href = redirectUrl;
</script>
```
 
__Case__: JavaScript variable that must not contain JS/HTML
__Escaper method__: escapeJS
 
```php
<script>
let <?= $block->escapeJs($dynamicVariable) ?> = <?= $myJson ?>;
settings.<?= $block->escapeJs($myProperty) ?> = true;
</script>
```
 
##### Knockout templates
In knockout templates out can bind a UI component's property/function as inner HTML of an element, such properties may contain dynamic
data and must be sanitized inside componenets. See [Magento binding syntax](https://devdocs.magento.com/guides/v2.3/ui_comp_guide/concepts/magento-bindings.html) to learn more about UI components' templates.
 
In order to notify developers that these properties/function results may contain HTML Magento requires (with the help of a static test)
that you name such properties/functions using "UnsanitizedHtml" suffix.
 
```html
<div data-bind="html: propUnsanitizedHtml"></div>
<p html="returnUnsanitizedHtml()"></p>
```
 
##### Dynamically created DOM elements
When using variables that are not supposed to contain HTML the most safe way to generate DOM elements is to create them programatically using appropriate APIs instead of using the _innerHtml_ property or jQuery's _.html()_ function.
 
```javascript
let newDiv = document.createElement("div");
newDiv.innerText = userName;
newDiv.setAttribute("custom-attribute", myAttribute);
parentElement.appendChild(newDiv);
```
 
##### UI component data providers
UI component data providers pass dynamic (user generated) data to UI components. The data they return is being rendered in order to support components dynamic linking. But since user data is supposed to be treated a a literal value which is not refering to any other component rendering of such properties must be disabled. See [UI component data providers](https://devdocs.magento.com/guides/v2.3/ui_comp_guide/concepts/ui_comp_data_source.html) to read more about data providers and component linking.
 
```php
$uiData = ['linkProperty' => '${ $.otherComponent.value }'];
$uiData['customer'] = $customer->getData();
//Customer data will be taken as is, linkProperty will be retrieved from otherComponent and taken as is
$uiData['__disableTmpl'] = ['customer' => true, 'linkProperty' => 1];

return $uiData;
```
 
#### Static Test
To check your .phtml template for XSS vulnerabilities, you can use the _Magento2.Security.XssTemplate_ sniff from [Magento Coding Standard](https://github.com/magento/magento-coding-standard).
 
This sniff finds all _echo_ calls in PHTML-templates and determines if the output is properly escaped.
 
It covers the following cases:
 
* /* @noEscape */ before output. Output doesn’t require escaping. Test is green.

* /* @escapeNotVerified */ before output. Output escaping is not checked and should be verified. Test is green.

* Methods which contain "html" in their names (for example echo $object->{suffix}Html{postfix}()). Data is ready for the HTML output. Test is green.

* AbstractBlock methods escapeHtml, escapeHtmlAttr, escapeUrl, escapeJs are allowed. Test is green.

* Type casting and php function count() are allowed (for example echo (int)$var, (bool)$var, count($var)). Test is green.

* Output in single quotes (for example echo 'some text'). Test is green.

* Output in double quotes without variables (for example echo "some text"). Test is green.

* Other of previously mentioned. Output is not escaped. Test is red.
