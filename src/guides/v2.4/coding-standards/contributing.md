---
group: coding-standards
subgroup: 01_Coding standards
landing-page: Coding standards
title: Contributing
menu_title: Contributing
menu_order: 10
functional_areas:
- Standards
---

Although we try to cover as many issues as possible, it may happen that a rule that you consider important is not covered yet.
Fortunately, you can add your own custom rules, using either PHPCS or ESLint, 
and contribute those to the [magento-coding-standard](https://github.com/magento/magento-coding-standard) repository so everyone can take advantage of your work.

To start your contribution, first fork the code and clone this fork into your local environment, then create a new branch and start adding your 
changes to it which, eventually, may end up merged into magento-coding-standard.

## Creating a new PHPCS sniff

PHPCS' rules are called _sniffs_. Basically, a _sniff_ is just a static code analyzer that will process our custom logic
every time it finds an occurrence of any tokens we choose. This custom logic is in charge of identifying if there's a violation
of a certain rule in the analysed code, and will return an *error* or *warning* depending on the severity of that issue.

How to write a sniff is way out the scope of this document,
but you can follow the [official PHPCS guide](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Coding-Standard-Tutorial) 
to learn more. The coding standards repository has also plenty of examples at `Magento2/Sniffs` directory.

Sniffs must be also covered by a unit test to ensure its behaviour is correct. In a nutshell, this test defines a set
of line numbers, each of them with a number of expected errors or warnings, which will be compared with the results
obtained from executing the sniff against one or several fixtures.

The unit test must extend the `AbstractSniffUnitTest` class and its file name must be equal to the sniff's file name, 
excluding the `sniff` suffix. Fixture files must follow the same rule, changing its extension to `.inc` in the 
case of PHP fixtures. E.g: the sniff called `Sniffs/Legacy/MageEntitySniff.php` has its unit test at `Tests/Legacy/MageEntityUnitTest.php`,
which in turn will use the fixture at `Tests/Legacy/MageEntityUnitTest.inc`.

Finally, add your new sniff to the `Magento2/ruleset.xml` file, so it is executed alongside the other existing coding standards. Depending 
on the type of issue returned, the rule will have assigned a type of *warning* or *error*, as well as a severity level from
10 to 1, being 10 the most severe. This number is assigned based on your own judgment, but make sure to review the current
sniffs and their assigned levels beforehand to get an idea of in which severity your new issue fits better. Also, rules are sorted
by severity, so place yours accordingly.

## Creating a new ESLint rule

ESLint rules are similar in purpose to PHPCS sniffs, but this time targeted against Javascript files. Again, the best way
to learn how to write your custom rules is by following the [official guide](https://eslint.org/docs/developer-guide/working-with-rules).
Rules must be added to the `eslint/rules` directory, and also registered in one of the `.eslintrc-*` files, depending on which area the
rule focuses on.

As with PHPCS sniffs, ESLint rules need to be covered by a unit tests in order to be considered for merging into the mainline.
In this case, unit tests itself are written in PHP instead of Javascript, and follow a similar structure than their PHP counterparts.
Test classes extend from `AbstractEslintTestCase` and must implement the `testExecute()` method, which basically asserts that
checking the passed JS file will return the expected error message. You can check examples at `Tests/Eslint`.

## Making a pull request

Once your code is ready and properly tested, it is time to open a pull request against magento-coding-standard from your
branch into upstream's `develop` one. It will be reviewed by one of the repository's maintainers and, if review is positive, merged.