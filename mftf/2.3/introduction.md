---
mftf-release: 2.3.14
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/introduction.html
---

# Introduction to the Magento Functional Testing Framework version 2.3

_The latest MFTF release is [{{page.mftf-release}}]._
{: style="text-align: right"}

{% include_relative include/note-2.2-docs.md %}

The Magento Functional Testing Framework (MFTF) aims to replace the [Functional Testing Framework] in future releases.
MFTF improves:

- **Traceability** for clear logging and reporting capabilities.
- **Modularity** to run tests based on installed modules and extensions.
- **Customizability** for existing tests.
- **Readability** using clear and declarative XML test steps.
- **Maintainability** based on simple test creation and overall structure.

Because MFTF tests are written in XML, you no longer need to learn PHP to write tests.

{:.bs-callout .bs-callout-info}
We are actively developing functional tests.
Refer to `<magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/` for examples.

## Audience

This MFTF guide is intended for Magento developers and software engineers, such as QA specialists, PHP developers, and system integrators.

## Goals

The purpose of MFTF is to:

- Facilitate functional testing and minimize the effort it takes to perform regression testing.
- Make it easier to support the extension and customization of tests via XML merging.

## Scope

MFTF will enable you to:

- Test user interactions with web applications in testing.
- Write functional tests located in `<magento_root>/app/code/<vendor_name>/<module_name>/Test/Mftf/`.
- Cover basic functionality using out-of-the-box tests. You can test extended functionality using custom tests.
- Automate regression testing.

## Use cases

As a Magento developer, test changes, such as extended search functionality, a new form attribute, or new product tags.

As a software engineer, perform regression testing before release to ensure that Magento works as expected with new functionality.

## Find your MFTF version {#find-version}

There are two options to find out your MFTF version:

- using the MFTF CLI
- using the Composer CLI

### MFTF CLI

```bash
cd <magento_root>/
```

```bash
vendor/bin/mftf --version
```

### Composer CLI

```bash
cd <magento_root>/
```

```bash
composer show magento/magento2-functional-testing-framework
```

## Contents of dev/tests/acceptance

```tree
tests
      _data                       // Additional files required for tests (e.g. pictures, CSV files for import/export, etc.)
      _output                     // The directory is generated during test run. It contains testing reports.
      _suite                      // Test suites.
      _bootstrap.php              // The script that executes essential initialization routines.
      functional.suite.dist.yml   // The Codeception functional test suite configuration (generated while running 'bin/mftf build:project')
utils                           // The test-running utilities.
.env.example                    // Example file for environmental settings.
.credentials.example            // Example file for credentials to be used by the third party integrations (generated while running 'bin/mftf build:project'; should be filled with the appropriate credentials in the corresponding sandboxes).
.gitignore                      // List of files ignored by git.
.htaccess.sample                // Access settings for the Apache web server to perform the Magento CLI commands.
codeception.dist.yml            // Codeception configuration (generated while running 'bin/mftf build:project')
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

The file structure under the both path cases is the same:

```tree
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
[contribute on Github]: https://github.com/magento/magento2-functional-testing-framework/blob/master/.github/CONTRIBUTING.md
[Functional Testing Framework]: {{ site.gdeurl23 }}mtf/mtf_introduction.html
[MFTF project]: https://github.com/magento/magento2-functional-testing-framework
[{{page.mftf-release}}]: https://github.com/magento/magento2-functional-testing-framework/releases/tag/{{page.mftf-release}}
