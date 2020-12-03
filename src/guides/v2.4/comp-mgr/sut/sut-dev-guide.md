---
group: software-update-guide
title: Developer information for the safe upgrade tool
functional_areas:
  - Upgrade
---

This topic contains information for developers who want to know more technical information about the Magento Safe Upgrade Tool (SUT). With this knowledge you can familiarize yourself with SUT in order to customize any of the existing components in the tool.

## M-Ray integration

The integration with M-Ray is done through:

`Sut\Domain\MRay\MRayInterface`

Its implementation is through the `config/services.yaml` file. Its value decides where the response of methods `api()` and `modules()` comes from.

This file can be edited to customize the response according to your installation. Just replace the value assigned to `Sut\Domain\MRay\MRayInterface`:

> Example of a custom value

`Sut\Domain\MRay\MRayInterface : "@sut_mray_mock"`

In this example, SUT uses `MRayMock` as the `MRayInterface` implementation. Then, the responses of the methods `api()` and `modules()` come 
from:

- `dev/mray_mock_files/api.json`
- `dev/mray_mock_files/modules.json`

{:.bs-callout .bs-callout-info}
When you make changes in `services.yaml`, delete the cache folder (`var/cache`) to correctly apply them.

See the [magento extensions](https://docs.magento.com/user-guide/magento/magento-extensions.html) topic for more information on extensions developed and released by Magento.

## Unit testing

To run the unit tests, you could execute one of the following commands:

- `vendor/bin/phpunit tests/unit`

- `vendor/bin/phpunit -c tests/unit/phpunit.xml.dist tests/unit`

- `vendor/bin/phpunit -c tests/unit/phpunit.xml.dist --testsuite=unit-tests`

## Integration testing

To run the integration tests, you could execute one of the following commands:

- `vendor/bin/phpunit -c tests/integration/phpunit.xml.dist tests/integration`

- `vendor/bin/phpunit -c tests/integration/phpunit.xml.dist --testsuite=integration-tests`

## Acceptance testing

1. Before executing the acceptance tests, you need to set the magento url in the `phpunit` configuration file.
1. Copy the default file in `tests/acceptance/phpunit.xml` (without the .dist suffix)
1. Change the `TESTS_BASE_URL` to point to the magento url you want to test

Thenn, to run the acceptance tests, you could execute one of the following commands:

- `vendor/bin/phpunit -c tests/acceptance/phpunit.xml tests/acceptance`

- `vendor/bin/phpunit -c tests/acceptance/phpunit.xml --testsuite=acceptance-tests`

## JS Unit testing for graphql

We used the framework **jest** to create these tests: 
`https://jestjs.io/docs/en/getting-started.html`

To run the js unit tests for graphql you need to have NodeJS installed:

Go inside `graphql-schema-compatibility` folder and run `npm install` 

Then you can execute `npm run unit-test` or `jest`

The tests are inside `graphql-schema-compatibility/test/js/unit`

The string schemas for testing are inside `dev/graphql_schemas`

## Complexity score

The **complexity score** is a figure that indicates how difficult is to upgrade from the current version to the new one. 
*The lower this number is, the easier is to perform the upgrade*. 

Its lowest value will be 0, but it doesn't necessarily need to be a number between 0 and 100.

This score is based on the results extracted from the analysis: number of issues identified and severity of them.

SUT calculates this score according to the following **formulae**: 

``Complexity Score = 2 * (# of errors) + 1 * (# of warnings)``

## SUT Packaging and distribution

### Packaging
To package just execute
``
bin/package VERSION
``
Example:
``
bin/package 0.0.1
``

This will generate a `sut.zip` file that we should upload to https://repo.magento.com

### Distribution

Go to https://repo.magento.com/admin/packagist/web/ceeerelease/create and create new release with next parameters:

 - Name: magento/safe-upgrade-tool-VERSION
 - Availability Groups: By now it's internal

![Create Release](images/createrelease.png)

Go to https://repo.magento.com/admin/upload_m2_version to upload the `sut.zip` with next parameters:

 - Extension package: `sut.zip`
 - Release: magento/safe-upgrade-tool-VERSION
 - Edition: CE

![Create Release](images/uploadversion.png)

Finally, go to https://repo.magento.com/admin/packagist/web/version/list to check that the new version has been created.

![Create Release](images/versions.png)


For more information: https://wiki.corp.magento.com/x/8wiiBw

## SUT Tracking

SUT Tracking is a small AWS lambda done with GO, the code is inside sut-tracking folder.

### SUT Tracking develop and deploy

More information in https://github.com/magento-commerce/safe-upgrade-tool-tracking
