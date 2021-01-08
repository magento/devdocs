---
group: software-update-guide
title: Developer information
functional_areas:
  - Upgrade
---

This topic contains information for developers who want to know more technical information about the Magento Safe Upgrade Tool ALPHA (SUT). It is focused on developers who work closely with the Magento source code. You can use this knowledge to customize the SUT's components.

## Magento API index integration

Magento API index integration is an internal integration solution that comprehends a set of tools to explore Magento Extensions developed by Magento, an Adobe Company, Magento Partners and 3rd party vendors based on static code analysis.

The integration with Magento API index is done through:

`Sut\Domain\MRay\MRayInterface`

It is implemented through the `config/services.yaml` file. Its value decides where the response of methods `api()` and `modules()` comes from.

Edit this file to customize the response according to your installation. Just replace the value assigned to `Sut\Domain\MRay\MRayInterface`:

### Example of a custom value

`Sut\Domain\MRay\MRayInterface : "@sut_mray_mock"`

In the previous example, the SUT uses `@sut_mray_mock` as the `MRayInterface` implementation. The responses from the `api()` and `modules()` methods come from the following files:

*  `dev/mray_mock_files/api.json`
*  `dev/mray_mock_files/modules.json`

{:.bs-callout-info}
When you make changes to the `services.yaml` file, delete the `var/cache/` folder to correctly apply them.

## Unit testing

To run the unit tests, execute one of the following commands:

*  `vendor/bin/phpunit tests/unit`
*  `vendor/bin/phpunit -c tests/unit/phpunit.xml.dist tests/unit`
*  `vendor/bin/phpunit -c tests/unit/phpunit.xml.dist --testsuite=unit-tests`

## Integration testing

To run the integration tests, execute one of the following commands:

*  `vendor/bin/phpunit -c tests/integration/phpunit.xml.dist tests/integration`
*  `vendor/bin/phpunit -c tests/integration/phpunit.xml.dist --testsuite=integration-tests`

## Acceptance testing

1. Before executing acceptance tests, you must set the Magento URL in the `phpunit` configuration file.
1. Copy the default `tests/acceptance/phpunit.xml` file (without the .dist suffix).
1. Change the `TESTS_BASE_URL` value to point to the Magento URL that you want to test.
1. To run the acceptance tests, execute one of the following commands:

   *  `vendor/bin/phpunit -c tests/acceptance/phpunit.xml tests/acceptance`
   *  `vendor/bin/phpunit -c tests/acceptance/phpunit.xml --testsuite=acceptance-tests`

## JS unit testing for GraphQL

We used the [Jest](https://jestjs.io/docs/en/getting-started.html) framework to create these JS unit tests:

{:.bs-callout-info}
To run JS unit tests for GraphQL, you must have Node.js installed.

### Node.js

To install Node.js on your system, see the Node.js [documentation](https://nodejs.dev/learn/how-to-install-nodejs).

The following instructions are for MacOS systems:

1. Open a terminal and navigate to the `graphql-schema-compatibility/` directory.
1. Install project dependencies:

   ```bash
   npm install
   ```

1. Run unit tests or `jest`:

   ```bash
   npm run unit-test
   ```

The tests are inside `graphql-schema-compatibility/test/js/unit`.

The string schemas for testing are inside `dev/graphql_schemas`.

## Complexity score

The **complexity score** is a figure that indicates how difficult an upgrade from the current version to the new one might be. Lower numbers indicate easier upgrades.

{:.bs-callout-info}
Complexity scores range between 0 and 100.

This score is based on the results extracted from the analysis:

*  Number of issues identified
*  Severity of issues identified

The SUT calculates this score according to the following formula:

### Complexity score formula

`Complexity Score = 2 * (# of errors) + 1 * (# of warnings)`
