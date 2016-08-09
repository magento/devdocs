---
layout: default
group: coding-standards
subgroup: Coding standards
title: PHP coding standard
menu_title: PHP coding standard
menu_order: 2
version: 2.0
github_link: coding-standards/code-standard-php.md
redirect_from: /guides/v1.0/coding-standards/code-standard-php.html
---

The Magento core development team uses the [Basic Coding Standard](http://www.php-fig.org/psr/psr-1/){:target="_blank"} and [Coding Style Guide](http://www.php-fig.org/psr/psr-2/){:target="_blank"}. Magento recommends that developers who create Magento extensions and customizations also use these standards.

Where possible, use [`PHP_CodeSniffer`](https://github.com/squizlabs/PHP_CodeSniffer){:target="_blank"} to automatically enforce these standards. Otherwise, you must apply these standards and requirements through rigorous code review.

### Class name resolution standard

For class name resolution, use the [`::class`](http://php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class){:target="_blank"} keyword instead of a string literal for every class name reference outside of that class. This includes references to:

* Fully qualified class name
* Imported/non-imported class name
* Namespace relative class name
* Import relative class name

Examples:

{% highlight php startinline=true %}
  $this->get(ClassName::class);
{% endhighlight %}

{% highlight php startinline=true %}
  $this->get(\Magento\Path\To\Class::class);
{% endhighlight %}
