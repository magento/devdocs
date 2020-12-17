---
group: software-update-guide
title: Developer information
functional_areas:
  - Upgrade
---

This topic contains information for developers who want to know more technical information about the Magento Safe Upgrade Tool (SUT). It is focused on developers who work closely with the Magento source code. You can use this knowledge to customize the SUT's components.

## M-Ray integration


M-Ray integration is an internal integration solution.

The integration with M-Ray is done through:

`Sut\Domain\MRay\MRayInterface`

Its implementation is through the `config/services.yaml` file. Its value decides where the response of methods `api()` and `modules()` comes from.

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

## Packaging

A package is essentially a directory containing something. It contains a package description which has a name and a version. The name and the version are used to identify the package.

It is possible to create a `sut.zip` file of the SUT to distribute it with partners as a composer package.

In order to upload it to be able to distribute it, you need first to create the package:

1. To package the SUT execute the following command:

   ```bash
   bin/package VERSION`
   ```

### An example of a package

`bin/package 0.0.1`

1. This generates an `sut.zip` file that you can upload (or distribute with) to the [Magento Composer repository](https://repo.magento.com).

{:.bs-callout-info}
A repository is a package source. Composer will look in all your repositories to find the packages your SUT requires.

If you need access to the [Magento Composer repository](https://repo.magento.com), submit a [Magento Support ticket]({{site.baseurl}}/cloud/trouble/trouble.html) to request permissions and an account.

For more information about Composer, see the [Introduction to Magento Composer]({{site.baseurl}}/guides/v2.4/extension-dev-guide/intro/intro-composer.html) topic.

## Distribution

One the SUT package is generated. You can upload it to the [Magento Composer repository](https://repo.magento.com).

In order to distribute SUT:

1. Go to the [Magento create repo](https://repo.magento.com/admin/packagist/web/ceeerelease/create) topic and create a new release with the following parameters:

   *  Name: `magento/safe-upgrade-tool-VERSION`

2. Go to the [Magento upload repo](https://repo.magento.com/admin/upload_m2_version) topic to upload the `sut.zip` with the following parameters:

   *  Extension package: `sut.zip`
   *  Release: `magento/safe-upgrade-tool-VERSION`
   *  Edition: CE

3. Finally, go to the [Magento version repo](https://repo.magento.com/admin/packagist/web/version/list) topic to check that the new version has been created.
