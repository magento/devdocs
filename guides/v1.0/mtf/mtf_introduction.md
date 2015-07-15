---
layout: default
group: mtf-guide
subgroup: A_Introduction
title: Introduction to Magento Testing Framework
menu_title: INTRODUCTION
menu_node: parent
menu_order:
github_link: guides/v1.0/mtf/mtf_introduction.md
---

This guide provides instructions on installing and configuring the Magento Testing Framework (MTF). With the Magento Testing Framework you can create and run functional tests to make it easier to perform basic acceptance testing, smoke testing, regression testing, etc.  MTF does not contain tests. All functional tests are within Magento code in `<magento_root>/dev/tests/functional/`.

MTF is an open source cross-platform solution (that is, does not depend on a specific operating system).

MTF enables you to quickly develop functional tests for the Magento application. These tests can be performed at any time.

You can run a single test independently, many tests together (that is, a test suite), or you can run all available tests.

<h3 id="mtf_intro_extratools">What tools should I use to run tests with MTF?</h3>

-   [PHPUnit][] (downloaded via composer during installation)

-   [Selenium Standalone Server][]

-   Web browser

<h3 id="mtf_intro_mtf-output">What do I have as output after running tests with MTF?
</h3>

-   Tested application

-   Basic PHPUnit results

-   Screenshots of failures

-   Logs of failures

<h2 id="mtf_intro_audi">Audience</h2>

This guide is intended to be used by any Magento developer. In addition, it can be used by software engineers such as QA specialists, PHP developers, and system integrators.

<h2 id="mtf_intro_goal">Goal</h2>

Facilitate functional testing and minimize efforts to perform
regression testing.

<h2 id="mtf_intro_scope">Scope</h2>

MTF is purposed to test user interactions with web application under
test.

MTF works with functional tests located in
`<magento_root>/dev/tests/functional/`.

Out-of-the-box tests cover basic functionality. Extended functionality
can be tested using customized tests, created with MTF.

Relative to your software development lifecycle, the MTF can help you:

1.    During the development phase, test any changes of functionality (new modules, update modules, fix bugs).

1.    During the maintenance phase, for periodic automated regression testing.

<h3 id="mtf_intro_scope_use-case-ex">MTF use cases examples</h3>

1.    As Magento developer I want to cover implemented functionality with new tests (for example, added attribute on Customer Form, extended Search functionality, added tags for Products etc).

1.    As a software engineer I want to perform regression testing before release to be confident that Magento works as expected with new functionality.
    
<h3 id="mtf_intro_scope_non-func-test">Non-functional testing</h3>

MTF works with tests from `<magento_root>/dev/tests/functional` only.

For other tests please see the following topics:

- <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">How to run tests from command line.</a> 

- <a href="{{ site.gdeurl }}extension-dev-guide/test/test_js-unit.html">More information about JavaScript unit tests.</a>

- <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">More information about performance testing.</a>


<h2 id="mtf_intro_github-link">MTF on GitHub</h2>

Follow the MTF project and contribute on GitHub
<https://github.com/magento/mtf>


[Selenium Standalone Server]: http://www.seleniumhq.org/download/
[PHPUnit]: https://phpunit.de/