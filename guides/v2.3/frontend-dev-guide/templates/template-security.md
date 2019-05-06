---
group: frontend-developer-guide
title: Templates XSS security
functional_areas:
  - Frontend
---

## Security measures against XSS attacks

To prevent [XSS] issues Magento recommends the following rules for escaping output in templates:

* If a method indicates that the content is escaped, do not escape: `getTitleHtml()`, `getHtmlTitle()` (the title is ready for the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} output)

* Type casting and {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}php{% endglossarytooltip %} function `count()` don't need escaping  (for example `echo (int)$var`, `echo (bool)$var`, `echo count($var)`)

* Output in single quotes doesn't need escaping (for example `echo 'some text'`)

* Output in double quotes without variables doesn't need escaping (for example `echo "some text"`)

* For all other cases, escape the data using [specific escape functions](#escape-functions-for-templates).

The following code sample illustrates the XSS-safe output in templates:

```php
<?php echo $block->getTitleHtml() ?>
<?php echo $block->getHtmlTitle() ?>
<?php echo $block->escapeHtml($block->getTitle()) ?>
# <?php echo (int)$block->getId() ?>
<?php echo count($var); ?>
<?php echo 'some text' ?>
<?php echo "some text" ?>
<a href="<?php echo $block->escapeUrl($block->getUrl()) ?>"><?php echo $block->getAnchorTextHtml() ?></a>
```

#### Escape functions for templates

For the following output cases, use the specified function to generate XSS-safe output.

**Case:** JSON output\\
**Function:** No function needed for JSON output.


```html
  <!-- In this example $postData is a JSON string -->
  <button class="action" data-post='<?php /* @noEscape */ echo $postData ?>' />
```


**Case:** String output that should not contain HTML\\
**Function:** `escapeHtml` 

You can pass in an optional array of allowed tags that will not be escaped.

If a tag is allowed, the following attributes will not be escaped: `id`, `class`, `href`, `target`, `style` and `title`.
Any other attribute for that allowed tag will be escaped.

`embed`, `iframe`, `video`, `source`, `object`, `audion`, `script` and `img` tags will not be allowed regardless of the content of this array.

If your text contains special characters, they must be encoded as HTML entities, such as `<` for **<** or `>` for **>**.

```html
  <span class="label"><?php echo $block->escapeHtml($block->getLabel()) ?></span>
  
  // Escaping translation
  <div id='my-element'><?php echo $block->escapeHtml(__('Only registered users can write reviews. Please <a href="%1">Sign in</a> or <a href="%2">create an account</a>', $block->getLoginUrl(), $block->getCreateAccountUrl()), ['a']) ?></div>
```


**Case:** URL output\\
**Function:** `escapeUrl`


```html
  <a href="<?php echo $block->escapeUrl($block->getCategoryUrl()) ?>">Some Link</a>
  <script>
    var categoryUrl = '<?php echo $block->escapeJs($block->escapeUrl($block->getCategoryUrl())) ?>';
  </script>
```

**Case:** Strings inside JavaScript\\
**Function:** In a JavaScript context, use the `escapeJs` function.

In cases where the JavaScript code outputs content onto the page, use the `escapeUrl` or the `escapeHtml` function where appropriate.

For example, when a URL output string is inside a JavaScript context, use both `escapeJs` and `escapeUrl`. If you insert the output string from inside a JavaScript context into the DOM, use both `escapeJs` and `escapeHtml`. 

```js
  var field<?php echo $block->escapeJs($block->getFieldNamePostfix()) ?> = window.document.getElementById('my-element');

  var categoryUrl = '<?php echo $block->escapeJs($block->escapeUrl($block->getCategoryUrl())) ?>';

  // Escaping content that will be inserted into DOM
  var string = <?php echo $block->escapeJs($block->escapeHtml(__('Only registered users can write reviews. Please <a href="%1">Sign in</a> or <a href="%2">create an account</a>', $block->getLoginUrl(), $block->getCreateAccountUrl()), ['a'])) ?>
  jQuery('#my-element').append(string);
 
  // Here we are not inserting the translated string into the DOM, so it is ok if the string contains non-allowed tags or 
  // JavaScript because it will be handled as a string. Do not use escapeHtml here, the browser will display quotes 
  // and other symbols as HTML entities (&#039;, &quot;, &amp;, etc)
  alert('<?php echo $block->escapeJs(__('You are not authorized to perform this action.')) ?>');
```

**Case:** Strings inside HTML attributes\\
**Function:** `escapeHtmlAttr`

```html
  <span class="<?php echo $block->escapeHtmlAttr($block->getSpanClass()) ?>">Product Description</span>
  <input name="field" value="<?php echo $block->escapeHtmlAttr($block->getFieldValue()) ?>" />

  <!--  Escaping translation inside attributes -->
  <img src="product-blue.jpg" alt="<?php echo $block->escapeHtmlAttr(__('A picture of the product in blue')) ?>" />
```

#### Static Test

To check your template for XSS vulnerabilities, you can use the `Magento2.Security.XssTemplate` sniff from [Magento Coding Standard](https://github.com/magento/magento-coding-standard).

This sniff finds all `echo` calls in PHTML-templates and determines if the output is properly escaped.

It covers the following cases:

* `/* @noEscape */` before output. Output doesn't require escaping. Test is green.

* Methods which contain `"html"` in their names (for example `echo $object->{suffix}Html{postfix}()`). Data is ready for the HTML output. Test is green.

* AbstractBlock methods `escapeHtml`, `escapeHtmlAttr`, `escapeUrl`, `escapeJs` are allowed. Test is green.

* Type casting and php function `count()` are allowed (for example `echo (int)$var`, `(bool)$var`, `count($var)`). Test is green.

* Output in single quotes (for example `echo 'some text'`). Test is green.

* Output in double quotes without variables (for example `echo "some text"`). Test is green.

* Other of previously mentioned. Output is not escaped. Test is red.


[XSS]: https://en.wikipedia.org/wiki/Cross-site_scripting
