---
group: marketplace-sellers
title: MFTF Magento Supplied Tests
---

## Overview

The Magento Functional Testing Framework Magento supplied Tests are a browser-based user acceptance testing framework used to validate the functionality of an operating Magento site. Running Magento supplied MFTF tests aids EQP QA efforts in assessing critical fucntionality of a Magento instance with the extension installed.

For information on how to setup, create and modify MFTF tests, see [MFTF Devdocs](https://devdocs.magento.com/mftf/docs/introduction.html)

## What testing is for

Magento Supplied MFTF tests validate critical user flows via browser-based testing against an operational Magento instance.

MFTF runs tests in a browser, using Selenium and Codeception, to emulate user behavior. MFTF tests are designed to be extensible and be used in conjunction with other Magento developed MFTF code coverage or your own vendor supplied Tests. The results of this testing will inform QA about the state of various components and functional areas and allow them to prioritize manual testing accordingly.

## When testing is done

MFTF Magento supplied Tests will be run for all Marketplace extension submissions for:

-  Magento in 2.3 and 2.4 release lines
-  OpenSource and Commerce editions

## What is being checked

Magento supplied MFTF tests are a small set of Critical MFTF tests. These are tests which are part of the Magento MFTF codebase. The list of tests is under review and will be published when confirmed.

## Tools and environments used

The Magento test infrastructure will execute Magento supplied MFTF tests in the most up-to-date version of Magento in the 2.4.x and 2.3.x release lines, as well as the most up-to-date software compatible with that release. The test infrastructure follows the recommended setup for Magento installation and MFTF setup and configuration. You can use Magento Cloud Docker to create a similar environment.

## Reading the error report

-  MFTF returns two types of results
    -  Simplified results showing the status of each test executed
    -  Allure results (as XML)
    -  See [MFTF Reporting](https://devdocs.magento.com/mftf/docs/reporting.html)  for further information
-  Test failures will be due to either:
    -  MFTF test flow being broken due to changes to Magento user flows as intended by the extension under test. These can be fixed by using Vendor-Supplied MFTF Tests.
    -  An failure in Magento user flows due to an unintended side-effect of the extension under test. This may be a type of regression bug and will be tested and verified by manual QA as part of EQP technical review.
-  The Allure results returned to Marketplace can be downloaded and displayed as an Allure report for simple consumption and identification of failure points. 

## Troubleshooting

-  Ensure that your tests generate, execute and pass in the specified environment configuration
-  Tests must be in the correct directory structure to be identified and executed
-  Within your extension, there must be a `Test` directory. This directory must contain an `Mftf` directory
-  MFTF within this directory should follow the standard directory structure, separating ActionGroups, Tests, Pages, Sections etc into their own directories
-  Give that tests will be executed with Magento MFTF tests available for merging etc, please ensure that they will operate as expected in this configuration e.g. Ensure that test names do not clash with existing Magento tests
-  Ensure that if you are extending from, or merging onto, an existing Magento test (or relying upon it's entities), that it is required as a composer prerequisite
-  Remember that MFTF tests will be part of the final package that is made available to your customers
-  Don't include any sensitive or confidential data in test comments or code
-  If necessary, include a README or other instructions, within the `Test` directory, to explain any setup steps or caveats on running your MFTF tests
-  Ensure that any necessary credentials, user authorization (e.g. to communicate via API key to your backend) is explained and supported via Credential management in Tests
-  Always follow the [MFTF Best Practices] (https://devdocs.magento.com/mftf/docs/best-practices.html) and use the [MFTF Tips & Tricks](https://devdocs.magento.com/mftf/docs/tips-tricks.html).