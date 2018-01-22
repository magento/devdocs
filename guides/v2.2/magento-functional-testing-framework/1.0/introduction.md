---
layout: default
group: mftf
title: Introduction to the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/1.0/introduction.md
functional_areas:
    - Testing
redirect_from: guides/v2.2/magento-functional-testing-framework/introduction.html
---

<div class="bs-callout bs-callout-info" markdown="1">
The Magento Functional Testing Framework (MFTF) is aimed to replace the [Functional Testing Framework] in far future releases to make test creation easier for developers and improve qualities like:

* **Traceability** for clear logging and reporting capabilities
* **Modularity** to run tests based on modules/extensions installed
* **Customizability** to have an ability to customize existed tests
* **Readability** using clear declarative XML test steps
* **Maintainability** based on simple test creation and overall structure

In the FTF you get used to code in PHP and XML to write tests.
With MFTF you need XML only! No need to learn PHP for tests writers anymore.
</div>

This guide provides instructions on installing and configuring the Magento Functional Testing Framework (MFTF).
Using MFTF, you can create and run functional tests to perform acceptance testing, smoke testing, regression testing, and so on.

MFTF is an open source cross-platform solution.

MFTF enables you to quickly develop functional tests for the Magento application.
These tests can be performed at any time.

You can run a single test independently, many tests together (that is, a test suite), or you can run all available tests.

MFTF can merge changes to tests to modify existing test flows.

MFTF does not contain tests.
All functional tests are located in _\<magento2 root dir\>/dev/tests/acceptance/_.

<div class="bs-callout bs-callout-info" markdown="1">
The tests haven't been released yet.
But you can find them for your experiments in the corresponding [`magento` repositories] on GitHub in `*-develop` branches starting from **2.2**.
</div>

## What tools do I need to run MFTF?

- PHP
- PHPUnit
- Java
- Codeception (downloaded via composer during installation)
- Robo (downloaded via composer during installation)
- Allure (downloaded via composer during installation)
- Selenium Standalone Server
- Allure CLI

## What output does MFTF produce?

- Generated PHP Codeception tests
- Codeception results and console logs
- Screenshots and HTML pages of failures
- Allure formatted XML results
- Allure report dashboard of results

## Audience

This guide is intended to be used by any Magento developer. In addition, it can be used by software engineers such as QA specialists, PHP developers, and system integrators.

## Goal

-   Facilitate functional testing and minimize efforts to perform regression testing.
-   Minimize efforts to support extension and customization of tests via XML merging.

## Scope

-   MFTF is purposed to test user interactions with web application under test.
-   MFTF works with functional tests located in _\<magento2 root dir\>/dev/tests/acceptance/_.
-   Out-of-the-box tests cover basic functionality. Extended functionality can be tested using customized tests, created with MFTF.

-   Relative to your software development lifecycle, the MFTF can help you:
    -   During the development phase, test any changes of functionality (new modules, update modules, fix bugs).
    -   During the maintenance phase, for periodic automated regression testing.

## Use Case Examples

As Magento developer you are able to cover implemented functionality with new tests (for example, added attribute on Customer Form, extended Search functionality, added tags for Products etc).

As a software engineer you are able to perform regression testing before release to be confident that Magento works as expected with new functionality.

## MFTF on Github

Follow the [MFTF project] and [contribute on Github].

<!-- LINK DEFINITIONS -->

[Functional Testing Framework]: ../mtf/mtf_introduction.html
[contribute on Github]: contribution-guidelines.html

[`magento` repositories]: https://github.com/magento
[MFTF project]: https://github.com/magento/magento2-functional-testing-framework

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
