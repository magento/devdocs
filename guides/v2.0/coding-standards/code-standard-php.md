---
group: coding-standards
subgroup: 01_Coding standards
title: PHP coding standard
landing-page: Coding standards
menu_title: PHP coding standard
menu_order: 2
version: 2.0
github_link: coding-standards/code-standard-php.md
redirect_from: /guides/v1.0/coding-standards/code-standard-php.html
functional_areas:
  - Standards
---

The Magento core development team uses the [PSR-1: Basic Coding Standard](http://www.php-fig.org/psr/psr-1/){:target="_blank"} and [PSR-2: Coding Style Guide](http://www.php-fig.org/psr/psr-2/){:target="_blank"}.
Magento recommends that developers who create Magento extensions and customizations also use these standards.

Where possible, use [`PHP_CodeSniffer`](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank"} to automatically enforce these standards.
Otherwise, you must apply these standards and requirements through rigorous code review.

### Class name resolution standard

For class name resolution, use the [`::class`](http://php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class){:target="_blank"} {% glossarytooltip caa46cea-25d7-4e4f-bce1-11430ada59dc %}keyword{% endglossarytooltip %} instead of a string literal for every class name reference outside of that class.
This includes references to:

* Fully qualified class name
* Imported/non-imported class name
* {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}Namespace{% endglossarytooltip %} relative class name
* Import relative class name

Examples:

{% highlight php startinline=true %}
  $this->get(ClassName::class);
{% endhighlight %}

{% highlight php startinline=true %}
  $this->get(\Magento\Path\To\Class::class);
{% endhighlight %}
