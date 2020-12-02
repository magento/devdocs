---
group: software-update-guide
title: Safe upgrade tool developer guide
functional_areas:
  - Upgrade
---

Welcome to the Magento Safe Upgrade Tool (SUT).

SUT is a CLI tool that checks a magento instance against a specific version by analysing all the non-magento modules installed in it.

The goal of SUT is to identify which potential problems you will have to fix within your customized code when trying to upgrade to a newer Magento version. When running the tool you will get a list of errors and warnings that you will have to take into account to complete the upgrade to the desired version.

## Prerequisites

See the [prerequisites checklist for SUT](https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html) for the minimum requisites required to run SUT.

{:.bs-callout .bs-callout-info}
SUT should run in any operating system. It is not required to run the tool where your magento instance is located.

## Memory limitations

The usage of memory depends entirely on the magento instance you are running. If you are running a system with large third-party modules and files, expect SUT to require a high RAM amount.

See the [SUT usage](https://github.com/magento-commerce/safe-upgrade-tool#sut-usage) topic for more information.

## Documentation

See the [readme](https://github.com/magento-commerce/safe-upgrade-tool/blob/develop/docs/README.md) file for more technical information on SUT.

## SUT installation 

### Magento access keys

As mentioned earlier, check that you have the **Magento access keys** in your system. If you do not have them, create an account at [marketplace.magento.com](https://marketplace.magento.com/).

Then, you will be able to create these **Magento access keys**.

See the [access keys guide](https://devdocs.magento.com/marketplace/sellers/profile-information.html#access-keys) topic for more information.

Once you create the access keys, add them to your `auth.json` file, which is located by default `~/.composer`.

{:.bs-callout .bs-callout-warning}
Check your **COMPOSER_HOME** environment variable to see where the `auth.json` file is located.

The **public key** corresponds to the _username_ whereas the **private key** is the _password_:

> Example of Magento access keys

```
    "http-basic": {
        "repo.magento.com": {
            "username": "YOUR_MAGENTO_PUBLIC_KEY",
            "password": "YOUR_MAGENTO_PRIVATE_KEY"
        }
    },
```

### Composer

Clone this repository and, from the **safe-upgrade-tool** folder run `composer install` to install its dependencies. 

{:.bs-callout .bs-callout-warning}
If the **Magento access keys** are not correctly configured, SUT will not be fully installed and you will get errors when running the `composer install` command.

### Node.js

To install _Node.js_ in your system, check the [_Node.js_](https://nodejs.dev/learn/how-to-install-nodejs) page for more information.

## SUT usage

### Executing the tool

Execute the tool by running the following command:

> Run SUT

`bin/sut upgrade:check INSTALLATION_DIR`.

{:.bs-callout .bs-callout-info}
It is recommended to run `php -d memory_limit=-1 /bin/sut` to avoid memory limitations, as described earlier.

`INSTALLATION_DIR` is the directory where the Magento instance is located.

Run `bin/sut --help` to get all the different possibilities and options available when running SUT.

### GraphQL schema compatibility verification

SUT also provides the option to introspect two GraphQL endpoints and compare their schemas looking for breaking and dangerous changes between them:

> Run SUT GraphQL

`bin/sut graphql:compare https://domain1.com/graphql https://domain2.com/graphql`

### Arguments and options

#### Version

You can compare your current Magento 2 installation with Magento versions `>=2.3`.

You need to provide the version as a parameter when running the command:

> Providing the version

`bin/sut upgrade:check INSTALLATION_DIR -c 2.4.1`.

There are some limitations:

- This parameter refers to any tag that identifies a specific version of Magento.
- It is a requirement to provide this one explicitly; providing only the value of it will not work.
- Provide the tag version without any quotation marks (neither single nor double): ~~'2.4.1-develop'~~.
- You should NOT provide older versions than the one you have currently installed, nor older than 2.3, which is the oldest one supported at the moment.

#### Full report

You can also get a full report containing both _PHP-related_ errors and GraphQL. In this case, you need to provide at least the following options:

- --schema1=SCHEMA1
- --schema2=SCHEMA2
- INSTALLATION_DIR

> Example of bin/sut command

`bin/sut upgrade:check --schema1=https://domain1.com/graphql --schema2=https://domain2.com/graphql -c 2.4.1 INSTALLATION_DIR`

### Output

It provides a report identifying the affected non-magento modules, the severity and the description of the problem for every issue 
encountered:

> Example with a list of errors/warnings

```
File: /app/code/Custom/CatalogExtension/Controller/Index/Index.php
------------------------------------------------------------------

 *   [ERROR] Line 84: Used nonexistent or non Magento API interface 'Magento\Catalog\Model\ProductRepositoryInterface'
 * [WARNING] Line 6: Importing Magento @deprecated class 'Magento\Catalog\Model\ProductRepository'
```

Apart from that, the report also includes a detailed _summary_:

-  *Installed Version*: the version currently installed.
-  *Magento Version*: the version you want to upgrade to.
-  *Running time*: amount of time the analysis took to build the report (mm:ss).
-  *Checked modules*: amount of modules installed in the current magento version examined during the analysis.
-  *PHP errors found*: amount of PHP errors.
-  *PHP warnings found*: amount of PHP warnings.
-  *GraphQL errors found*: amount of GraphQL errors.
-  *GraphQL warnings found*: amount of GraphQL warnings.
-  *Total errors found*: total amount of errors found.
-  *Total warnings found*: total amount of warnings found.
-  *Complexity score*: a figure that indicates how difficult is to upgrade from the current version to the new one.

The lower this number is, the easier is to perform the upgrade.

> Example of a summary

```
 ------------------------ --------
  Installed version        2.3.5
  Magento version          2.4.1
  Running time             0m:48s
  Checked modules          60
  PHP errors found         162
  PHP warnings found       120
  GraphQL errors found     19
  GraphQL warnings found   0
  Total errors found       181
  Total warnings found     120
  Complexity score         482
 ------------------------ --------
```

Regarding the GraphQL schema compatibility comparison, the output would be very similar to the previous one:

> Example with a list of errors/warnings for GraphQL

```
 *   [ERROR] FIELD_CHANGED_KIND: ConfigurableProduct.gender changed type from Int to String.
 *   [WARNING] OPTIONAL_INPUT_FIELD_ADDED: An optional field sku on input type ProductAttributeSortInput was added.
```
## Design

This *diagram* shows how SUT has been designed and describes how it roughly works:
![MVP diagram - SUT](images/mvp-diagram.png)

### More resources
You can find more resources here: https://github.com/magento/safe-upgrade-tool/wiki 

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

## Third-party extensions

Magento recommends that you contact your search engine vendor to determine whether your extension is fully compatible with Magento 2.4.