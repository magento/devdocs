---
group: coding-standards
subgroup: 01_Coding standards
landing-page: Coding standards
title: Contributing
menu_title: Contributing
menu_order: 10
functional_areas:
- Standards
redirect_to: https://developer.adobe.com/commerce/php/coding-standards/contributing/
status: migrated
---

Like many large projects, Magento has coding standards.

Use the [Magento coding standards]({{site.baseurl}}/guides/v2.4/coding-standards/bk-coding-standards.html) when you contribute to the Magento codebase or create an extension. It is possible that a rule that you consider important is not covered yet.

You can add your own custom rules, using either PHPCS or ESLint, and contribute those to the [magento-coding-standard](https://github.com/magento/magento-coding-standard) repository so everyone can use those custome rules.

To start your contribution:

1. Fork the code and clone this fork into your local environment.
1. Create a new branch and add changes.
1. Merge changes into the magento-coding-standard repository.

## Creating a new PHPCS sniff

PHPCS rules are called sniffs. A sniff is just a static code analyzer that will process our custom logic every time it finds an occurrence or any tokens we choose. This custom logic is in charge of identifying if there's a violation of a certain rule in an specific code, and will return an **error** or **warning** depending on the severity of that issue.

Follow the [official PHPCS guide](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Coding-Standard-Tutorial) steps to write a sniff.

{:.bs-callout-info}
The [magento-coding-standard](https://github.com/magento/magento-coding-standard) repository has examples at the `Magento2/Sniffs` directory.

Sniffs must be also covered by a unit test to ensure its behaviour is correct. This unit test defines a set of line numbers, each of them with a number of expected errors or warnings, which will be compared with the results obtained from executing the sniff against one or several fixtures containing real code.

The unit test must extend the `AbstractSniffUnitTest` class and its file name must be equal to the sniff's file name, excluding the `sniff` suffix. Fixture files must follow the same rule, changing its extension to `.inc` in the case of PHP fixtures.

> Example of Sniff

The sniff called `Sniffs/Legacy/MageEntitySniff.php` has its unit test at `Tests/Legacy/MageEntityUnitTest.php`, which in turn will use the fixture at `Tests/Legacy/MageEntityUnitTest.inc`.

Add your new sniff to the `Magento2/ruleset.xml` file, so it is executed alongside the other existing coding standards.

Depending on the type of issue returned, the rule will have assigned a type of *warning* or *error*, as well as a severity level from 10 to 1, being 10 the most severe. This number is assigned based on your own judgment, but make sure to review the current sniffs and their assigned levels beforehand to get an idea of in which severity your new issue fits better.

{:.bs-callout-warning}
Rules are sorted by severity.

## Creating a new ESLint rule

ESLint rules are similar in purpose to PHPCS sniffs, but this time targeted against Javascript files. Again, the best way to learn how to write your custom rules is by following the [official guide](https://eslint.org/docs/developer-guide/working-with-rules).

Rules must be added to the `eslint/rules` directory, and also registered in one of the `.eslintrc-*` files, depending on which area the
rule focuses on.

As with PHPCS sniffs, ESLint rules need to be covered by a unit test in order to be considered for merging into the mainline. In this case, unit tests itself are written in PHP instead of Javascript, and follow a similar structure than their PHP counterparts. Test classes extend from `AbstractEslintTestCase` and must implement the `testExecute()` method, which basically asserts that checking the passed JS file will return the expected error message. You can check examples at `Tests/Eslint`.

## Contributing

1. When your code is ready, open a pull request against the magento-coding-standard from your branch into the upstream `develop`.
1. PR will be reviewed by the repository's maintainers and merged.

{:.bs-callout-info}
Review general [Adobe Commerce documentation for contributors]({{ site.baseurl }}/contributor-guide/contributing.html).
