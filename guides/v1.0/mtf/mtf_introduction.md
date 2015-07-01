---
layout: default
group: mtf-guide
subgroup: Magento Testing Framework Guide
title: Introduction to Magento Testing Framework
menu_title: INTRODUCTION
menu_order: 1
github_link: guides\v1.0\mtf\mtf_introduction.md
---

This guide provides instructions on installing and configuring the Magento Testing Framework (MTF). Also it specifies approach of creating and running tests with MTF. Detailed description of MTF tools may help to understand principles of MTF work, that allows developers to create high performance tests. MTF does not contain tests. All functional tests are within Magento application in `<magento_root>/dev/tests/functional/`. They are designed to improve quality of its implementation and to make it easier to perform basic acceptance testing, smoke testing, regression testing.

MTF is an open source cross-platform solution (does not depend on a
specific operating system).

MTF allows software engineers to quickly develop functional tests for
the Magento. These tests can be performed at any time.

You can run a single test independently, many tests together (that is, a
test suite), or you can run all available tests.

<h3 id="mtf_intro_extratools">What tools do I need to work with MTF?</h3>

-   [PHPUnit][] (downloaded via composer during installation)

-   [Selenium Standalone Server][]

-   Web browser

<h3 id="mtf_intro_mtf-output">What do I have as output working with MTF?</h3>

-   Tested application

-   Basic PHPUnit results

-   Screenshots of failures

-   Logs of failures

<h2 id="mtf_intro_audi">Audience</h2>

This guide is intended to be used by any Magento developer. In addition, it can be used by software engineers such as QA specialists, PHP developers, and system integrators.

<h2 id="mtf_intro_goal">Goal</h2>

Facilitate functional testing and minimize efforts to perform
regression testing. It should save time of Magento developers.

<h2 id="mtf_intro_scope">Scope</h2>

MTF is purposed to test user interactions with web application under
test.

MTF works with functional tests located in
`<magento_root>/dev/tests/functional/`.

Out-of-the-box tests cover basic functionality. Extended functionality
may be tested using customized tests, created with MTF.

Relatively to software life cycle the MTF could be useful on the following phases:

1.    During development phase use MTF to test any changes of functionality (new
    modules, extensions, bug fixing).

1.    During maintenance phase use MTF for periodical automated regression resting.

<h3 id="mtf_intro_scope_use-case-ex">MTF use cases examples</h3>

1.    As Magento developer I want to cover implemented functionality with
    new tests (e. g. added attribute on Customer Form, extended Search
    functionality, added tags for Products etc).

1.    As software engineer I want to perform regression testing before
    release to be confident that Magento works as expected with new
    functionality.
    
<h3 id="mtf_intro_scope_non-func-test">Non-functional testing</h3>

Magento 2 contains also other types of tests in `<magento_root>/dev/tests/` in corresponding folders. This guide does not describe testing other than
functional.


For other tests please see the following sections:

- <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">How to run tests from command line.</a> 

- <a href="{{ site.gdeurl }}extension-dev-guide/test/test_js-unit.html">More information about JavaScript unit tests.</a>

- <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-perf-data.html">More information about performance testing.</a>


<h2 id="mtf_intro_github-link">MTF on GitHub</h2>

Follow the MTF project and contribute on GitHub
<https://github.com/magento/mtf>


[Selenium Standalone Server]: http://www.seleniumhq.org/download/
[PHPUnit]: https://phpunit.de/