---
layout: default
group: mtf-guide
subgroup: Magento Testing Framework Guide
title: Introduction to Magento Testing Framework
menu_title: INTRODUCTION
menu_order: 1
github_link: guides\v1.0\mtf\mtf_introduction.md
---

This guide provides instructions on installing, configuring and applying
of all components required for the Magento Testing Framework (MTF) to
create and run tests.

MTF is an open source project facilitating the improvement of Magento
products. This is a cross-platform solution (i. e. does not depend on a
specific operating system).

MTF is configurable tool used for running repeatable functional tests
against the Magento application being tested. Although, it can be useful
to create functional tests to any web application. It is used for writing test automation scripts and for performing actual testing.
Test automation scripts created within the framework can be used for
testing Magento functionality.

The Magento Test Framework includes nearly 170 automated functional
tests, which are designed to improve the quality of implementations and
to make it easier to perform basic acceptance testing, smoke testing,
regression testing, when adding extensions, making customizations, or
upgrading Magento.

Magento itself contains out-of-the box tests, but the user can also
create customized tests using MTF.

MTF allows software engineers to quickly develop functional tests for
the Magento, that can be performed at any time.

You can run a single test independently, or a bunch of tests together (a
test suite), or run all available tests.

What tools do I need to work with MTF?

-   PHPUnit (downloaded via composer during installation)

-   Selenium

-   Web browser

What do I have as output working with MTF?

-   Tested application

-   Basic PHPUnit results

-   Screenshots of failures (**\[magento\_root\] &gt; dev &gt; tests &gt;
    functional &gt; var &gt; log &gt; magento**)

-   Logs of failures (**\[magento\_root\] &gt; dev&gt; tests &gt;
    functional &gt; var &gt; log**)

<h2 id="mtf_intro_audi">Audience</h2>


This guide will be useful for Magento developers primarily. Although,
software engineers such as QA specialists, PHP developers, system
integrators working with Magento may find this guide helpful.

<h2 id="mtf_intro_goal">Goal</h2>

Facilitate functional testing and minimize efforts to perform
regression testing. It should save time of Magento developers.

<h2 id="mtf_intro_scope">Scope</h2>

MTF is purposed to test user interactions with web application under
test.

MTF works with functional tests located in
**\[magento\_root\] &gt; dev &gt; tests &gt; functional**

Out-of-the-box tests cover basic functionality. Extended functionality
may be tested using customized tests, created with MTF.

Relatively to software life cycle the MTF could be useful on the following phases:

1)  development phase – to test any changes of functionality (new
    modules, extensions, bug fixing)

2)  maintenance phase – for periodical automated regression resting.

<h3 id="mtf_intro_scope_use-case-ex">MTF use cases examples</h3>

1)  As Magento developer I want to cover implemented functionality with
    new tests (e. g. added attribute on Customer Form, extended Search
    functionality, added tags for Products etc.)

2)  As software engineer I want to perform regression testing before
    release to be confident that Magento works as expected with new
    functionality
    
<h3 id="mtf_intro_scope_non-func-test">Non-functional testing</h3>

Magento 2 contains also other types of tests in **\[magento\_root\] &gt; dev &gt; tests** in corresponding folders. This guide does not describe testing other than
functional.

For other tests please see [devdocs.magento.com &gt; Guides &gt; V1.0 &gt; Config-guide &gt; Cli &gt; Config-cli-subcommands-test](http://devdocs.magento.com/guides/v1.0/config-guide/cli/config-cli-subcommands-test.html).

Also,

-   JavaScript tests ([devdocs.magento.com &gt; Guides &gt; V1.0 &gt;
    Extension-dev-guide &gt; Test &gt; Test
    js-unit](http://devdocs.magento.com/guides/v1.0/extension-dev-guide/test/test_js-unit.html)),

-   Performance tests([devdocs.magento.com &gt; Guides &gt; V1.0 &gt;
    Config-guide &gt; Cli &gt;
    Config-cli-subcommands-perf-data](http://devdocs.magento.com/guides/v1.0/config-guide/cli/config-cli-subcommands-perf-data.html)).


<h2 id="mtf_intro_github-link">MTF on GitHub</h2>

Follow the MTF project and contribute on GitHub
<https://github.com/magento/mtf>
