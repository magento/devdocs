---
group: software-update-guide
title: Developer information
functional_areas:
  - Upgrade
---

This topic contains information for developers who want to know more technical information about the Magento Safe Upgrade Tool (SUT). You can use this knowledge to customize the SUT's components.

## M-Ray integration

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
To run the js unit tests for graphql you need to have NodeJS installed.

### Node.js

To install _Node.js_ in your system, check the [_Node.js_](https://nodejs.dev/learn/how-to-install-nodejs) page for more information.

In case you have a MacOS system:

1. Go inside `graphql-schema-compatibility` folder and run `npm install`
1. Then, you can execute `npm run unit-test` or `jest`
1. The tests are inside `graphql-schema-compatibility/test/js/unit`
1. The string schemas for testing are inside `dev/graphql_schemas`

## Complexity score

The **complexity score** is a figure that indicates how difficult is to upgrade from the current version to the new one. The lower this number is, the easier is to perform the upgrade.

{:.bs-callout-info}
Its lowest value will be 0, but it doesn't necessarily need to be a number between 0 and 100.

This score is based on the results extracted from the analysis:

*  Number of issues identified
*  Severity of issues identified

SUT calculates this score according to the following formula:

### Complexity score formula

``Complexity Score = 2 * (# of errors) + 1 * (# of warnings)``

## Packaging

1. To package SUT execute:

`bin/package VERSION`

### An exampple of packaging

`bin/package 0.0.1`

1. This generates a `sut.zip` file that we it is uploaded to the [Magento repo page](https://repo.magento.com).

## Distribution

In order to distribute SUT:

1. Go to the [Magento create repo](https://repo.magento.com/admin/packagist/web/ceeerelease/create) topic and create a new release with the following parameters:

   *  Name: `magento/safe-upgrade-tool-VERSION`

1. Go to the [Magento upload repo](https://repo.magento.com/admin/upload_m2_version) topic to upload the `sut.zip` with the following parameters:

   *  Extension package: `sut.zip`
   *  Release: `magento/safe-upgrade-tool-VERSION`
   *  Edition: CE

1. Finally, go to the [Magento version repo](https://repo.magento.com/admin/packagist/web/version/list) topic to check that the new version has been created.

## Tracking

SUT tracking is a small AWS lambda done with GO. The code is available in the the [SUT github repository](https://github.com/magento-commerce/safe-upgrade-tool), inside the `sut-tracking` folder.

See the [Tracking guide]({{page.baseurl}}/sut/tracking.html) for detailed information about SUT tracking.
