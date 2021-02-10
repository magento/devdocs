---
group: marketplace-sellers
title: MFTF Vendor Supplied Tests
---


## Overview

The Magento Functional Testing Framework Vendor-Supplied Tests are browser-based user acceptance testing framework used to validate the functionality on an operating Magento site. Running Vendor-Supplied MFTF tests helps ensure that the extension functionality is operating as expected for the end user.

For information on how to setup, create and modify MFTF tests, see [MFTF Devdocs](https://devdocs.magento.com/mftf/docs/introduction.html)


## What testing is for

To ensure that Extension submissions perform the expected behavior for a user, MFTF tests are used to describe and confirm the functionality expected via browser-based testing against an operational Magento instance.

MFTF runs tests in a browser, using Selenium and Codeception, to emulate user behavior. MFTF tests are designed to be extensible and be used in conjunction with Magento developed MFTF code coverage. This allows Vendor-Supplied extension MFTF tests to describe the behavior of the extension and to integrate with existing suites of MFTF coverage, leveraging reusable tests elements and modifying existing test flows as necessary.

Functional testing in this way helps ensure that the experience of the end-user is as described and intended by the extension developer, allowing for the customizability and extensibility of Magento as a platform.


## When testing is done

MFTF Vendor-Supplied Tests are run only where:

- There are MFTF tests included in the submission in the correct    directory ("Tests/Mftf")
- Only for MFTF v3.0 or greater
- Only for Magento v2.4.0 or greater


## What is being checked

Vendor-Supplied MFTF tests will be run on an installed Magento instance of the type listed above. These tests will help verify the functionality intended is testable and working on a Magento environment. The results of this testing can be used to inform Marketplace QA resources about the state of the extension, and what level of effort will be required in manually verifying the extension. A higher level of Vendor-supplied MFTF coverage will allow manual QA efforts to be focussed and potentially accelerate the progression of the extension through the Technical Review process.

## Tools and environments used

The Magento test infrastructure will execute Vendor-Supplied MFTF tests in the most up-to-date version of Magento in the 2.4.x release line, as well as the most up-to-date software compatible with that release. The test infrastructure follows the recommended setup for Magento installation and MFTF setup and configuration. You can use Magento Cloud Docker to create a similar environment.



## Reading the error report
MFTF returns two types of results
1. Simplified results showing the status of each test executed
2. Allure results (as XML)

See [MFTF Reporting](https://devdocs.magento.com/mftf/docs/reporting.html) for further information

To diagnose a test failure, you should first ascertain if you can replicate the failure in your local development environment. If you can not, this indicates a configuration and/or environment difference.

The Allure results returned to Marketplace can be downloaded and displayed as an Allure report for simple consumption and identification of failure points. 
 

## Troubleshooting
 - Ensure that your tests generate, execute and pass in the specified environment configuration

 - Tests must be in the correct directory structure to be identified and executed

 - Within your extension, there must be a `Test` directory. This directory must contain an `Mftf` directory

 - MFTF within this directory should follow the standard directory structure, separating ActionGroups, Tests, Pages, Sections etc into their own directories

 - Give that tests will be executed with Magento MFTF tests available for merging etc, please ensure that they will operate as expected in this configuration E.g. Ensure that test names do not clash with existing Magento tests
 - Ensure that if you are extending from, or merging onto, an existing Magento test (or relying upon it's entities), that it is required as a composer prerequisite

 - Remember that MFTF tests will be part of the final package that is made available to your customers

 - Don't include any sensitive or confidential data in test comments or code

 - If necessary, include a README or other instructions, within the `Test` directory, to explain any setup steps or caveats on running your MFTF tests

 - Ensure that any necessary credentials, user authorization (e.g. to communicate via API key to your backend) is explained and supported via Credential management in Tests

 - Always follow the [MFTF Best Practices] (https://devdocs.magento.com/mftf/docs/best-practices.html) and use the [MFTF Tips & Tricks](https://devdocs.magento.com/mftf/docs/tips-tricks.html).
 
