---
mftf-release: 2.2.0
redirect_from: /guides/v2.2/magento-functional-testing-framework/2.2/introduction.html
---

# Introduction to the Magento Functional Testing Framework version 2.2

_The latest MFTF 2.2 release is [{{page.mftf-release}}]._
{: style="text-align: right"}

{% include_relative include/note-2.3-docs.md %}

The Magento Functional Testing Framework (MFTF) aims to replace the [Functional Testing Framework] in future releases.
MFTF improves:

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
Refer to `<magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/` for examples."
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
-   Write functional tests located in `<magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/`.
-   Cover basic functionality using out-of-the-box tests. You can test extended functionality using custom tests.
-   Automate regression testing.

## Use cases

As a Magento developer, test changes, such as extended search functionality, a new form attribute, or new product tags.

As a software engineer, perform regression testing before release to ensure that Magento works as expected with new functionality.

## Find your MFTF version {#find-version}

The MFTF is installed as a Composer dependency in `<magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/composer.lock`.

To find out the version, run:

```bash
cd <magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/
```
```bash
composer show magento/magento2-functional-testing-framework
```

## Contents of dev/tests/acceptance

```
tests
    _data                       // Additional files required for tests (e.g. pictures, CSV files for import/export, etc.)
    _output                     // The directory is generated during test run. It contains testing reports.
    _suite                      // Test suites
    _bootstrap.php              // Script that executes essential initialization routines
    functional.suite.dist.yml   // Codeception functional test suite configuration
utils                           // Test running utilities
.env.example                    // Example file with environmental settings
.gitignore                      // List of files ignored by git
.htaccess.sample                // Access settings for Apache web server to perform CLI commands on Magento application
RoboFile.php                    // MFTF CLI commands configuration for Robo task runner
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

The MFTF supports two different locations for storing the tests and test artifacts:
- `<magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/` is the directory to create new tests.
- `<magento_root>/vendor/<vendor_name>/<module_name>/Test/Mftf/` is the directory with the out of the box tests (fetched by the Composer).

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

Follow the [MFTF project] and [contribute on Github].


<!-- Link definitions -->
[Functional Testing Framework]: {{ site.gdeurl22 }}mtf/mtf_introduction.html
[MFTF project]: https://github.com/magento/magento2-functional-testing-framework
[contribute on Github]: contribution-guidelines.html

[{{page.mftf-release}}]: https://github.com/magento/magento2-functional-testing-framework/releases/tag/{{page.mftf-release}}