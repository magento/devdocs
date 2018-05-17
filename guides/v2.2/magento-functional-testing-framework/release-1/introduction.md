---
group: mftf
title: Introduction to the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-1/introduction.md
functional_areas:
    - Testing
redirect_from:
    - guides/v2.0/magento-functional-testing-framework/release-1/introduction.html
    - guides/v2.1/magento-functional-testing-framework/release-1/introduction.html
    - guides/v2.2/magento-functional-testing-framework/1.0/introduction.html
    - guides/v2.2/magento-functional-testing-framework/introduction.html
mftf-release: 1.0.0
---

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The Magento Functional Testing Framework (MFTF) aims to replace the [Functional Testing Framework] in future releases to make test creation easier for developers and improve qualities like:

* **Traceability** for clear logging and reporting capabilities
* **Modularity** to run tests based on installed modules and extensions
* **Customizability** for existing tests
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

The MFTF is installed as a Composer dependency in _\<magento2 root dir\>/dev/tests/acceptance/composer.json_.
Open the file and check the dependency in `"require"`. Example:

```json
{
    ...
    "require": {
        ...
        "magento/magento2-functional-testing-framework": "~1.0.0",
        ...
    }
    ...
}
```

## What output does the MFTF produce?

- Generated PHP Codeception tests
- Codeception results and console logs
- Screenshots and HTML failure report
- Allure formatted XML results
- Allure report dashboard of results

## Audience

The MFTF guide is intended for Magento developers and software engineers, such as QA specialists, PHP developer, and system integrators.

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
[Functional Testing Framework]: {{ page.baseurl }}/mtf/mtf_introduction.html

[`magento` repositories]: https://github.com/magento
[MFTF project]: https://github.com/magento/magento2-functional-testing-framework

<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework
