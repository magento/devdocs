---
group: software-update-guide
title: Developer mode for the safe upgrade tool
functional_areas:
  - Upgrade
---

## M-Ray integration

The integration with M-Ray is done through the interface: `Sut\Domain\MRay\MRayInterface`.

Its implementation is injected through `config/services.yaml` and its value decides where the response of methods
`api()` and `modules()` comes from.

You can edit this file to customize the response according to your needs.
Just replace the value assigned to `Sut\Domain\MRay\MRayInterface`.

For instance, you can do the following: `Sut\Domain\MRay\MRayInterface : "@sut_mray_mock"`

In this case, SUT is going to use `MRayMock` as the `MRayInterface` implementation 
and the response of the methods `api()` and `modules()` will come 
from `dev/mray_mock_files/api.json` and `dev/mray_mock_files/modules.json`.

**Note**: When you make changes in `services.yaml`,
don't forget to delete the cache folder (`var/cache`) to apply them.

## Unit testing

To run the unit tests, you could execute one of the following commands:

`vendor/bin/phpunit tests/unit`

`vendor/bin/phpunit -c tests/unit/phpunit.xml.dist tests/unit`

`vendor/bin/phpunit -c tests/unit/phpunit.xml.dist --testsuite=unit-tests`

## Integration testing

To run the integration tests, you could execute one of the following commands:

`vendor/bin/phpunit -c tests/integration/phpunit.xml.dist tests/integration`

`vendor/bin/phpunit -c tests/integration/phpunit.xml.dist --testsuite=integration-tests`

## Acceptance testing

Before executing this, you should need to set the magento url in the phpunit configuration file:

- Copy the default file in `tests/acceptance/phpunit.xml` (without the .dist suffix)

- Change the `TESTS_BASE_URL` to point to the magento url you want to test

To run the acceptance tests, you could execute one of the following commands:

`vendor/bin/phpunit -c tests/acceptance/phpunit.xml tests/acceptance`

`vendor/bin/phpunit -c tests/acceptance/phpunit.xml --testsuite=acceptance-tests`

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
