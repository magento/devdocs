---
layout: default
group: mftf
title: Introduction to the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/introduction.md
functional_areas:
    - Testing
mftf-release: 2.0.2
---

_This topic corresponds to the MFTF {{page.mftf-release}} release._
{: style="text-align: right"}

The Magento Functional Testing Framework (MFTF) is aimed to replace the [Functional Testing Framework] in future releases to make test creation easier for developers and improve qualities like:

* **Traceability** for clear logging and reporting capabilities
* **Modularity** to run tests based on installed modules/extensions
* **Customizability** to have to customize existing tests
* **Readability** using clear, declarative XML test steps
* **Maintainability** based on simple test creation and overall structure

Because MFTF tests are written in XML, you no longer need to learn PHP to write tests.

{%
include note.html
type="info"
content="We are actively developing functional tests.
Refer to _\<magento2 root dir\>/dev/tests/acceptance/_ for examples."
%}

## What version of the MFTF do I use?

The MFTF is installed as a Composer dependency in _\<magento2 root dir\>/dev/tests/acceptance/composer.lock_.
Open the file and check the corresponding dependency. Example:

```json
{
    ...
    "packages": [
        ...
        {
            "name": "magento/magento2-functional-testing-framework",
            "version": "2.0.2",
            ...
        }
        ...
    ]
    ...
}
```

## What's in the "`dev/tests/acceptance`"

```
tests
    _data                       // Additional files required for tests (e.g. pictures, CSV files for import/export, etc.)
    _output                     // The directory is generated during test run. It contains testing reports.
    _suite                      // Test suites
    functional                  // Functional acceptance tests
    _bootstrap.php              // Script that executes essential initialization routines
    functional.suite.dist.yml   // Codeception functional test suite configuration
utils                           // Test running utilities
.env.example                    // Example file with environmental settings
.gitignore                      // List of files ignored by git
.htaccess.sample                // Access settings for Appache web server to perform CLI commands on Magento application
RoboFile.php                    // MFTF CLI commands configutaion for Robo task runner.
codeception.dist.yml            // Codeception configuration.
pre-install.php                 // Script that checks the environment on whether pre-installation requirements are met
```

## What output does the MFTF produce?

- Generated PHP Codeception tests
- Codeception results and console logs
- Screenshots and HTML failure report
- Allure formatted XML results
- Allure report dashboard of results

## Audience

This guide is intended to be used by any Magento developer.
In addition, it can be used by software engineers such as QA specialists, PHP developers, and system integrators.

## Goals

-   Facilitate functional testing and minimize efforts to perform regression testing
-   Minimize efforts to support extension and customization of tests via XML merging

## Scope

-   Test user interactions with web application under test
-   Write functional tests located in _\<magento2 root dir\>/dev/tests/acceptance/_
-   Cover basic functionality using out-of-the-box tests.
You can test extended functionality using custom tests.
-   Automated regression testing

## Use Case Examples

As a Magento developer, test changes (for example, added attribute on Customer Form, extended Search functionality, added tags for Products, etc).

As a software engineer, perform regression testing before release to ensure that Magento works as expected with new functionality.

## MFTF on Github

Follow the [MFTF project] and [contribute on Github].

<!-- LINK DEFINITIONS -->

[contribute on Github]: ../contribution-guidelines.html
[Functional Testing Framework]: {{page.baseurl}}mtf/mtf_introduction.html

[`magento` repositories]: https://github.com/magento
[MFTF project]: https://github.com/magento/magento2-functional-testing-framework

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
