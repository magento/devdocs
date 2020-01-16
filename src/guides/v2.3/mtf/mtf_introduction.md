---
group: functional-testing-framework-guide
title: Introduction to the Functional Testing Framework
landing-page: Functional Testing Framework Guide
---

{:.bs-callout-warning}
The Magento Testing Framework (MTF) is deprecated and is superseded by the Magento Functional Testing Framework ([MFTF][]).
This documentation is no longer updated to reflect changes in Magento functionality. Issues may arise if using MTF with the latest Magento code.

This guide provides instructions on installing and configuring the Functional Testing Framework (FTF). Using the FTF, you can create and run *functional* tests to make it easier to perform basic acceptance testing, smoke testing, regression testing, and so on.

FTF is an open source cross-platform solution (that is, does not depend on a specific operating system).

FTF enables you to quickly develop functional tests for the Magento application. These tests can be performed at any time.

You can run a single test independently, many tests together (that is, a test suite), or you can run all available tests.

FTF does not contain tests. All functional tests are located in `<magento2 root dir>/dev/tests/functional/`.

### What tools should I use to run tests with FTF? {#mtf_intro_extratools}

-  [PHPUnit][] (downloaded via [composer](https://glossary.magento.com/composer) during installation)

-  [Selenium Standalone Server][]

-  Web browser

### What do I have as output after running tests with FTF? {#mtf_intro_mtf-output}

-  Tested application

-  Basic PHPUnit results

-  Screenshots of failures

-  Logs of failures

## Audience {#mtf_intro_audi}

This guide is intended to be used by any Magento developer. In addition, it can be used by software engineers such as QA specialists, [PHP](https://glossary.magento.com/php) developers, and system integrators.

## Goal {#mtf_intro_goal}

Facilitate functional testing and minimize efforts to perform
regression testing.

## Scope {#mtf_intro_scope}

FTF is purposed to test user interactions with web application under
test.

FTF works with functional tests located in
`<magento2_root_dir>/dev/tests/functional/`.

Out-of-the-box tests cover basic functionality. Extended functionality
can be tested using customized tests, created with FTF.

Relative to your software development lifecycle, the FTF can help you:

1. During the development phase, test any changes of functionality (new modules, update modules, fix bugs).

1. During the maintenance phase, for periodic automated regression testing.

### FTF use cases examples {#mtf_intro_scope_use-case-ex}

1. As Magento developer I want to cover implemented functionality with new tests (for example, added attribute on Customer Form, extended Search functionality, added tags for Products etc).

1. As a software engineer I want to perform regression testing before release to be confident that Magento works as expected with new functionality.

### Non-functional testing {#mtf_intro_scope_non-func-test}

FTF works with tests from `<magento2_root_dir>/dev/tests/functional` only.

For other tests please see the following topics:

-  [How to run unit tests during development on the command line or PhpStorm.]({{ page.baseurl }}/test/unit/unit_test_execution.html)

-  [How to run unit and integration tests using `bin/magento` in continuous integration.]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)

-  [More information about JavaScript unit tests.]({{ page.baseurl }}/test/js/jasmine.html)

-  [More information about performance testing.]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)

## FTF on GitHub {#mtf_intro_github-link}

Follow the FTF project and contribute on GitHub
<https://github.com/magento/mtf>.

[Selenium Standalone Server]: http://www.seleniumhq.org/download/
[PHPUnit]: https://phpunit.de/
[MFTF]: https://devdocs.magento.com/mftf/docs/introduction.html
