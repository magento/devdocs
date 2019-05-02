---
group: coding-standards
subgroup: 01_Coding standards
title: PHP coding standard
landing-page: Coding standards
menu_title: PHP coding standard
menu_order: 2
functional_areas:
  - Standards
---

The Magento core development team uses [Magento Coding Standard](https://github.com/magento/magento-coding-standard){:target="_blank"} and it is recommended that developers who create Magento extensions and customizations also use this standard.

The Magento Coding Standard provides a set of rules that covers the following:
* [PSR-1]{:target="_blank"} and [PSR-2]{:target="_blank"} compliance
* the use of insecure functions
* unescaped output
* the use of deprecated PHP functions
* PHP code syntax
* naming convention
* the use of PHP superglobals
* empty code blocks
* improper exception handling
* raw SQL queries and many other general PHP and Magento specific code issues.

### Coding Standard Compliance

Developers should consistently use [PHP_CodeSniffer]{:target="_blank"} to enhance the readability of the code and ensure that it meets Magento Coding Standard. [PHP_CodeSniffer]{:target="_blank"} is the most popular tool in use throughout the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} development community.
It provides the mechanism of checking code compliance with specific coding standard.

The set of Magento rules is located in [`ruleset.xml`][ruleset.xml]{:target="_blank"} file of Magento Coding Standard.

Learn more about using rule sets with PHP CodeSniffer [ruleset]{:target="_blank"}

### Literal Namespace Rule

For class name resolution, use the [`::class`](http://php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class){:target="_blank"} {% glossarytooltip caa46cea-25d7-4e4f-bce1-11430ada59dc %}keyword{% endglossarytooltip %} instead of a string literal for every class name reference outside of that class.
This includes references to:

* Fully qualified class name
* Imported/non-imported class name
* {% glossarytooltip 621ef86b-7314-4fbc-a80d-ab7fa45a27cb %}Namespace{% endglossarytooltip %} relative class name
* Import relative class name

Examples:

```php
  $this->get(ClassName::class);
```

```php
  $this->get(\Magento\Path\To\Class::class);
```

The [Coding standards overview]{:target="_blank"} introduces Magento-specific practices for PHP, JavaScript, and {% glossarytooltip 5bfa8a8e-6f3e-4fed-a43e-62339916f02e %}JQuery{% endglossarytooltip %}.

<!-- LINKS -->

[PHP_CodeSniffer]: http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php
[PSR-1]: http://www.php-fig.org/psr/psr-1/
[PSR-2]: http://www.php-fig.org/psr/psr-2/
[Coding standards overview]: {{ site.baseurl }}/guides/v2.0/coding-standards/bk-coding-standards.html
[ruleset]: http://pear.php.net/manual/en/package.php.php-codesniffer.annotated-ruleset.php
[ruleset.xml]: https://github.com/magento/magento-coding-standard/blob/develop/Magento2/ruleset.xml
[Magento Coding Standard]: https://github.com/magento/magento-coding-standard
