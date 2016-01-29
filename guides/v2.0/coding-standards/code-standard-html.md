---
layout: default
group: coding-standards
subgroup: Coding standards
title: HTML style guide
menu_title: HTML style guide
menu_order: 8
github_link: coding-standards/code-standard-html.md
---

This style guide defines Magento internal requirements for HTML code style for teams that develop LESS and CSS code. It is based on the [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml) with certain modifications that are described further.


<p class="q">Do we stick to HTML5 in general?</p>
<p class="q">Do we have tests for correspondence to these guidelines?</p>

**Contents**

:TOC
{toc}

## Indentations

Use indentations to show parent/child relationships and emphasize hierarchy. Indent by four spaces at a time.
Do not use tabs or mix tabs and spaces for indentation.

**Recommended**
{%highlight html%}

<ul>
    <li>One</li>
    <li>Two</li>
</ul>
{%endhighlight%}

## End of file
Add a blank line at the end of file.

## Self-closing tags
Remember to close all self-closing tags.

**Inappropriate**
{%highlight html%}
<br>
<img src="image.png" alt="image">
<input type="text" name="username">
{%endhighlight%}


**Recommended**
{%highlight html%}
<br />
<img src="image.png" alt="image" />
<input type="text" name="username" />
{%endhighlight%}

<p class="q">Are self-closing tags ok in HTML5 </p>

## Line length
Avoid code lines longer than 120 characters. When using an editor, it is inconvenient to scroll right and left to read the HTML code. Align tag attributes one under another to increase code readability.

**Inappropriate**
{%highlight html%}
<input data-bind="attr: { id: 'cart-item-'+item_id+'-qty', 'data-cart-item': item_id, 'data-item-qty': qty }, value: qty" type="number" size="4" class="item-qty cart-item-qty" maxlength="12"/>
{%endhighlight%}

**Recommended**
{%highlight html%}
<input data-bind="attr: {
       id: 'cart-item-'+item_id+'-qty',
       'data-cart-item': item_id,
       'data-item-qty': qty
       }, value: qty"
       type="number"
       size="4"
       class="item-qty cart-item-qty"
       maxlength="12"/>
{%endhighlight%}

## Spaces around equals sign ("=")
Spaces around equals sign ("=") are acceptable, but not recommended, because the code without spaces is easier to read.

**Not recommended**
{%highlight html%}
<link rel = "stylesheet" href = "styles.css">
{%endhighlight%}

**Recommended**
{%highlight html%}
<link rel="stylesheet" href="styles.css">
{%endhighlight%}

## Spaces and colon in attributes
For the sake of readability, using no space before the colon and one space after the colon, because this way makes code more readable.

**Not recommended**
{%highlight html%}
<span data-bind="i18n : 'Update'"></span>
<span data-bind="i18n:'Update'"></span>
{%endhighlight%}

**Recommended**
{%highlight html%}
<span data-bind="i18n: 'Update'"></span>
{%endhighlight%}

## Block-level elements
Use appropriate HTML5 elements for blocks. The following diagram shows, how to define, what HTML5 element to use for a block:

<img src="{{ site.baseurl }}common/images/h5d-sectioning-flowchart.png">


## Class names
Use semantic class names and IDs. Avoid presentational classes.

**Inappropriate**
{%highlight html%}
<button type="submit" class="button-green">Submit</button>
{%endhighlight%}

**Recommended**
{%highlight html%}

<button type="submit" class="action-primary">Submit</button>
{%endhighlight%}

## Accessibility
All pages should be accessible for users with disabilities. For more information refer to [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/).

<p class="q">Do we keep up to this standard?</p>

## Microdata
All crucial pages (like product page) should contain [microdata](https://en.wikipedia.org/wiki/Microdata_(HTML)). Please pay attention to this recommendation when adding new functionality.

