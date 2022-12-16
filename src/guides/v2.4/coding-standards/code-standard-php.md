---
group: coding-standards
subgroup: 01_Coding standards
title: PHP coding standard
landing-page: Coding standards
menu_title: PHP coding standard
menu_order: 2
functional_areas:
  - Standards
redirect_to: https://developer.adobe.com/commerce/php/coding-standards/php/
status: migrated
---

The Magento core development team uses the [Magento Coding Standard](https://github.com/magento/magento-coding-standard). We recommend that developers who create extensions and customizations also use this standard.

The Magento Coding Standard provides a set of rules that covers the following:

*  [PSR-1] and [PSR-2] compliance
*  The use of insecure functions
*  Unescaped output
*  The use of deprecated PHP functions
*  PHP code syntax
*  Naming convention
*  The use of PHP superglobals
*  Empty code blocks
*  Improper exception handling
*  Raw SQL queries and many other general PHP and Magento-specific code issues.

### Coding standard compliance

Developers should consistently use [PHP_CodeSniffer] to enhance the readability of the code and ensure that it meets the Magento Coding Standard. [PHP_CodeSniffer] is the most popular tool in use throughout the [PHP](https://glossary.magento.com/php) development community.
It provides the mechanism of checking code compliance with specific coding standard.

The set of Magento rules is located in [`ruleset.xml`][ruleset.xml] file of Magento Coding Standard.

Learn more about using rule sets with PHP CodeSniffer [ruleset]

### Literal Namespace Rule

For class name resolution, use the [`::class`](https://php.net/manual/en/language.oop5.basic.php#language.oop5.basic.class.class) [keyword](https://glossary.magento.com/keyword) instead of a string literal for every class name reference outside of that class.
This includes references to:

*  Fully qualified class name
*  Imported/non-imported class name
*  [Namespace](https://glossary.magento.com/namespace) relative class name
*  Import relative class name

Examples:

```php
  $this->get(ClassName::class);
```

```php
  $this->get(\Magento\Path\To\Class::class);
```

The [Coding standards overview] introduces Magento-specific practices for PHP, JavaScript, and [JQuery](https://glossary.magento.com/jquery).

<!-- LINKS -->

[PHP_CodeSniffer]: https://pear.php.net/manual/en/package.php.php-codesniffer.faq.php
[PSR-1]: https://www.php-fig.org/psr/psr-1/
[PSR-2]: https://www.php-fig.org/psr/psr-2/
[Coding standards overview]: {{ page.baseurl }}/coding-standards/bk-coding-standards.html
[ruleset]: https://pear.php.net/manual/en/package.php.php-codesniffer.annotated-ruleset.php
[ruleset.xml]: https://github.com/magento/magento-coding-standard/blob/develop/Magento2/ruleset.xml
[Magento Coding Standard]: https://github.com/magento/magento-coding-standard
