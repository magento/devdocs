---
group: mftf
title: Introduction to the Magento Functional Testing Framework
version: 2.2
github_link: magento-functional-testing-framework/release-2/introduction.md
functional_areas:
    - Testing
mftf-release: 2.2.0
---

_The latest MFTF release is [{{page.mftf-release}}]._
{: style="text-align: right"}

The Magento Functional Testing Framework (MFTF) aims to replace the [Functional Testing Framework] in future releases.
MFTF will make test creation easier for developers and will improve:

* **Traceability** for clear logging and reporting capabilities.
* **Modularity** to run tests based on installed modules and extensions.
* **Customizability** for existing tests.
* **Readability** using clear and declarative XML test steps.
* **Maintainability** based on simple test creation and overall structure.

Because MFTF tests are written in XML, you no longer need to learn PHP to write tests.

{%
include note.html
type="info"
content="We are actively developing functional tests.
Refer to _\<magento2 root dir\>/dev/tests/acceptance/_ for examples."
%}

## Audience

This MFTF guide is intended for Magento developers and software engineers, such as QA specialists, PHP developers, and system integrators.

## Goals

The purpose of MFTF is to:
-   Facilitate functional testing and minimize the effort it takes to perform regression testing.
-   Make it easier to support the extension and customization of tests via XML merging.

## Scope

MFTF will enable you to:

-   Test user interactions with web applications in testing.
-   Write functional tests located in _\<magento2 root dir\>/dev/tests/acceptance/_.
-   Cover basic functionality using out-of-the-box tests. You can test extended functionality using custom tests.
-   Automate regression testing.

## Use cases

As a Magento developer, test changes, such as extended search functionality, a new form attribute, or new product tags.

As a software engineer, perform regression testing before release to ensure that Magento works as expected with new functionality.

## Find your MFTF version

The MFTF is installed as a Composer dependency in _\<magento2 root dir\>/dev/tests/acceptance/composer.lock_.

Open the file and check the corresponding dependency:

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

## Contents of dev/tests/acceptance

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
RoboFile.php                    // MFTF CLI commands configutaion for Robo task runner
codeception.dist.yml            // Codeception configuration
pre-install.php                 // Script that checks the environment on whether pre-installation requirements are met
```

## MFTF output

- Generated PHP Codeception tests
- Codeception results and console logs
- Screenshots and HTML failure report
- Allure formatted XML results
- Allure report dashboard of results

## MFTF tests

The MFTF supports three different locations for storing the tests and test artifacts:
- `/dev/tests/acceptance/tests/functional/Magento/FunctionalTest/<Module>`
- `/app/code/Magento/<Module>/Test/Mftf`
- `/vendor/<Module>/Test/Mftf`

All tests and test data from these locations are merged in the order indicated in the above list.

The file structure under all three path cases is the same:
```
<Path>
├── ActionGroup
│   └── ...
├── Data
│   └── ...
├── Metadata
│   └── ...
├── Page
│   └── ...
├── Section
│   └── ...
└── Test
    └── ...
```

## MFTF on Github

Follow the [MFTF project](https://github.com/magento/magento2-functional-testing-framework) and [contribute on Github](../contribution-guidelines.html).


<!-- Link definitions -->
[Functional Testing Framework]: {{ page.baseurl }}/mtf/mtf_introduction.html
[MFTF project]: https://github.com/magento/magento2-functional-testing-framework
[contribute on Github]: ../contribution-guidelines.html

[{{page.mftf-release}}]: https://github.com/magento/magento2-functional-testing-framework/releases/tag/{{page.mftf-release}}