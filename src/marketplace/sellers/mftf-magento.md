---
group: marketplace-sellers
title: MFTF Magento-supplied Tests
---

## Overview

The Magento Functional Testing Framework (MFTF) is a browser-based acceptance testing framework used to validate the functionality of a Magento site. Running Magento-supplied MFTF tests aids Extension Quality Program (EQP) QA efforts in assessing critical functionality of a Magento instance with the extension installed.

For information on how to setup, create and modify MFTF tests, see [Introduction to the Magento Functional Testing Framework](https://devdocs.magento.com/mftf/docs/introduction.html)

## What testing is for

Magento-supplied MFTF tests validate critical user flows via browser-based testing against an operational Magento instance.

MFTF runs tests in a browser, using Selenium and Codeception, to emulate user behavior. MFTF tests are designed to be extensible and can be used in conjunction with other Magento-developed MFTF code coverage or your own vendor-supplied tests. The results of this testing will inform QA about the state of the extension and allow them to prioritize manual testing.

## Tools and environments used

Magento-supplied MFTF tests are run on all Marketplace extension submissions on:

-  Magento in 2.3 and 2.4 release lines
-  Open source and Commerce editions

The Magento test infrastructure executes Magento-supplied MFTF tests in the most up-to-date version of Magento in the 2.4.x and 2.3.x release lines, as well as the most up-to-date software compatible with that release. The test infrastructure follows the recommended setup for a Magento installation, MFTF setup, and system configuration. You can use [Magento Cloud Docker](https://github.com/magento/magento-cloud-docker) to create a similar environment.

## Reading the error report

-  MFTF returns two types of results
   -  Simplified results showing the status of each test executed
   -  Allure XML results
  
See [MFTF Reporting](https://devdocs.magento.com/mftf/docs/reporting.html) for further information.

-  Test failures are generally due to:
   -  The MFTF test flow being breaking due to changes to Magento user flows as intended by the extension under test. These can be fixed by using vendor-supplied MFTF Tests.
   -  A failure in the Magento user flow due to an unintended side-effect of the extension under test. This may be a type of regression bug and will be tested and verified by manual QA as part of EQP technical review.
-  The Allure results returned to Marketplace can be downloaded and displayed as an Allure report for simple consumption and identification of failure points.

## Troubleshooting

-  Ensure that your tests generate, execute and pass in the specified environment configuration
-  Tests must be in the `Test/Mftf` directory within the extension
-  MFTF tests within this directory must follow the standard directory structure, separating ActionGroups, Tests, Pages, Sections, etc into their own directories
-  Ensure that tests names do not clash with existing Magento tests
-  If you are extending from, or merging into, an existing Magento test (or relying upon its entities), it must be required as a Composer prerequisite
-  The MFTF tests will be part of the final package that is made available to your customers. Do not include any sensitive or confidential data in test comments or code
-  If necessary, include a README, or other instructions, within the `Test` directory, to explain any setup steps or caveats for running your MFTF tests
-  Ensure that any necessary credentials or user authorization (e.g. to communicate via API key to your backend) is explained and supported via credential management in tests
-  Always follow the [MFTF Best Practices](https://devdocs.magento.com/mftf/docs/best-practices.html) and use the [MFTF Tips & Tricks](https://devdocs.magento.com/mftf/docs/tips-tricks.html).
