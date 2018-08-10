---
group: fedg
subgroup: C_Templates
title: Templates XSS security
menu_title: Templates XSS security
menu_order: 5
version: 2.0
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-security.html
functional_areas:
  - Frontend
---

## Security measures against XSS attacks

To prevent <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a> issues Magento recommends the following rules for escaping output in templates:

* If a method indicates that the contents is escaped, do not escape: `getTitleHtml()`, `getHtmlTitle()` (the title is ready for the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} output)

* Type casting and {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}php{% endglossarytooltip %} function `count()` don't need escaping  (for example `echo (int)$var`, `echo (bool)$var`, `echo count($var)`)

* Output in single quotes doesn't need escaping (for example `echo 'some text'`)

* Output in double quotes without variables doesn't need escaping (for example `echo "some text"`)

* For all other cases, escape the data using [specific escape functions](#escape-functions-for-templates).

The following code sample illustrates the XSS-safe output in templates:

{% highlight php %}
<?php echo $block->getTitleHtml() ?>
<?php echo $block->getHtmlTitle() ?>
<?php echo $block->escapeHtml($block->getTitle()) ?>
# <?php echo (int)$block->getId() ?>
<?php echo count($var); ?>
<?php echo 'some text' ?>
<?php echo "some text" ?>
<a href="<?php echo $block->escapeXssInUrl($block->getUrl()) ?>"><?php echo $block->getAnchorTextHtml() ?
></a>
{% endhighlight %}

#### Escape functions for templates

For the following output cases, use the specified function to generate XSS-safe output.

<div class="bs-callout bs-callout-warning" markdown="1">
  The upcoming release of Magento 2.2 will deprecate these functions.

  Please check back on this page after the 2.2 release for updated documentation on new escape functions.
</div>


**Case:** JSON output\\
**Function:** No function needed for JSON output.

{% highlight html %}
  <!-- In this example $postData is a JSON string -->
  <button class="action" data-post='<?php /* @noEscape */ echo $postData ?>' />
{% endhighlight %}

**Case:** String output that should not contain HTML\\
**Function:** `escapeHtml` 

{% highlight html %}
  <span class="label"><?php echo $block->escapeHtml($block->getLabel()) ?></span>
{% endhighlight %}

**Case:** {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} output\\
**Function:** `escapeUrl`

{% highlight html %}
  <a href="<?php echo $block->escapeUrl($block->getCategoryUrl()) ?>">Some Link</a>
{% endhighlight %}

**Case:** HTML attributes\\
**Function:** `escapeQuote`

{% highlight html %}
  <span class="<?php $block->escapeQuote($block->getSpanClass()) ?>">Product Description</span>
{% endhighlight %}

#### Static Test

To check your template for XSS vulnerabilities, you can use the static test `XssPhtmlTemplateTest.php` in `dev\tests\static\testsuite\Magento\Test\Php\`.  

This static test finds all echo calls in PHTML-templates and determines if the output is properly escaped.

It covers the following cases:

* `/* @noEscape */` before output. Output doesn't require escaping. Test is green.

* `/* @escapeNotVerified */` before output. Output escaping is not checked and should be verified. Test is green.

* Methods which contain `"html"` in their names (for example `echo $object->{suffix}Html{postfix}()`). Data is ready for the HTML output. Test is green.

* AbstractBlock methods `escapeHtml`, `escapeUrl`, `escapeQuote`, `escapeXssInUrl` are allowed. Test is green.

* Type casting and php function `count()` are allowed (for example `echo (int)$var`, `(bool)$var`, `count($var)`). Test is green.

* Output in single quotes (for example `echo 'some text'`). Test is green.

* Output in double quotes without variables (for example `echo "some text"`). Test is green.

* Other of previously mentioned. Output is not escaped. Test is red.
