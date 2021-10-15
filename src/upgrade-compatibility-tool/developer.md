---
group: software-update-guide
title: Developer information
ee_only: True
redirect_from:
  - /safe-upgrade-tool/developer.html
functional_areas:
  - Upgrade
---

This topic contains information for developers who work closely with the {{site.data.var.ee}} code and want to learn detailed information about the {{site.data.var.uct}}. You can use this knowledge to customize the tool's components.

## {{site.data.var.ee}} API index integration

{{site.data.var.ee}} API index integration is an internal integration solution that encompasses a set of tools to explore {{site.data.var.ee}} extensions developed by Adobe, {{site.data.var.ee}} Partners, and 3rd-party vendors based on static code analysis.

The integration with the {{site.data.var.ee}} API index is done through:

`sut\Domain\MRay\MRayInterface`

It is implemented through the `config/services.yaml` file. Its value decides where the response of methods `api()` and `modules()` comes from.

Edit this file to customize the response according to your installation. Just replace the value assigned to `sut\Domain\MRay\MRayInterface`:

### Example of a custom value

`sut\Domain\MRay\MRayInterface : "@sut_mray_mock"`

In the previous example, the {{site.data.var.uct}} uses `@sut_mray_mock` as the `MRayInterface` implementation. The responses from the `api()` and `modules()` methods come from the following files:

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

1. Before executing acceptance tests, you must set the {{site.data.var.ee}} URL in the `phpunit` configuration file.
1. Copy the default `tests/acceptance/phpunit.xml` file (without the .dist suffix).
1. Change the `TESTS_BASE_URL` value to point to the {{site.data.var.ee}} URL that you want to test.
1. To run the acceptance tests, execute one of the following commands:

   *  `vendor/bin/phpunit -c tests/acceptance/phpunit.xml tests/acceptance`
   *  `vendor/bin/phpunit -c tests/acceptance/phpunit.xml --testsuite=acceptance-tests`

## GraphQL unit testing and Eslint code analysis

### Requirements
{:.bs-callout-info}
You must have Node.js on your system, see the [documentation](https://nodejs.dev/learn/how-to-install-nodejs).

The following instructions are for MacOS systems:

1. Open a terminal and navigate to the root directory of the project.
1. Install project dependencies:

   ```bash
   npm install
   ```

### GraphQL unit testing
The [Jest](https://jestjs.io/docs/en/getting-started.html) framework was used to create these JS unit tests:

The tests are inside `dev/tests/Js`.

The string schemas for testing are inside `dev/tests/Acceptance/_files/graphql_schemas`.

Run unit tests or `jest` as follows:

   ```bash
   npm run unit-test
   ```
### Eslint code analysis
[Eslint](https://eslint.org/docs/user-guide/getting-started) is a static code analysis tool for identifying 
problematic patterns found in JavaScript code, with the goal of making code more consistent and avoiding bugs.

Run `eslint` code analysis as follows:

   ```bash
   npm run eslint -- path/to/analyse 
   ```

## Complexity score

The **complexity score** is a figure that indicates how difficult an upgrade from the current version to the new one might be. Lower numbers indicate easier upgrades.

{:.bs-callout-info}
Complexity scores range between 0 and ∞.

This score is based on the results extracted from the analysis:

*  Number of issues identified
*  Severity of issues identified

The {{site.data.var.uct}} calculates this score according to the complexity score formula below.

### Complexity score formula

`Complexity Score = ({{site.data.var.ee}} core errors) * 4 + (Critical errors) * 4 + [(PHP errors)+(GraphQL errors)] * 2 + [(PHP warnings)+(GraphQL warnings)] * 1`

{:.bs-callout-warning}
These are absolute values.
