---
group: testing
title: Running Integration Tests
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
functional_areas:
  - Testing
  - test
---

Integration tests require the Magento runtime environment, so they need a little preparation before they can be executed.
Once the system is prepared, the tests can be executed using either the command line interface or within an IDE like PhpStorm.

## Set up the integration test framework

In order to run the integration tests, create and configure a test database.
You might also want to adjust the PHPUnit configuration, depending on your requirements.

Refer to [Preparing Integration Test Execution][setup] for further information about setting up the test environment.

## Command Line Interface (CLI)

This option can be used for running the tests locally during development or on remote servers during Continuous Integration.

Please refer to [Running Integration Tests in the CLI][cli run] for further information.

## PhpStorm IDE

Running the integration tests inside an IDE like PhpStorm IDE is convenient during development. This is mostly used when writing a new integration test.

Other than convenience, there is no benefit over running the tests on the console.

Refer to [Running Integration Tests in PhpStorm][phpstorm run] for further information.

## Prepare integration test execution {#setup}

Before the Magento integration test framework can be used, the test environment must be prepared.
These prerequisites are required:

-  A dedicated integration test database
-  The test framework database configuration
-  The PHPUnit configuration matches the purpose of the integration test execution

## Integration test database

By default, for every integration test run, the test framework installs a fresh Magento test database.

{:.bs-callout-warning}
Do not use the same database as the real Magento instance. Any data (products, customers, orders, and everything else) will be lost!

For safety reasons it is recommended to use a dedicated database user for running the tests. That database user should not have access to any other databases.
Here are examples of SQL commands that create a test database and a dedicated test user account:

```sql
CREATE DATABASE magento_integration_tests;
GRANT ALL ON magento_integration_tests.* TO 'magento2_test_user'@'localhost' IDENTIFIED BY 'ftYx4pm6^x9.&^hB';
```

Replace the example database and username, and the example password, with something that matches your requirements and conventions.

### Configure the framework to use the test database

The Magento 2 integration test framework comes with a configuration file template, `mage2ce/dev/tests/integration/etc/install-config-mysql.php.dist`.

Copy this file to
`mage2ce/dev/tests/integration/etc/install-config-mysql.php`
(without the `.dist` suffix) and add your test database access credentials.

The contents will look something like the following. Use the DB access credentials for your test database instead of the example values below.

```php
<?php

return [
    'db-host' => 'localhost',
    'db-user' => 'magento2_test_user',
    'db-password' => 'ftYx4pm6^x9.&^hB',
    'db-name' => 'magento_integration_tests',
    'db-prefix' => '',
    'backend-frontname' => 'backend',
    'admin-user' => \Magento\TestFramework\Bootstrap::ADMIN_NAME,
    'admin-password' => \Magento\TestFramework\Bootstrap::ADMIN_PASSWORD,
    'admin-email' => \Magento\TestFramework\Bootstrap::ADMIN_EMAIL,
    'admin-firstname' => \Magento\TestFramework\Bootstrap::ADMIN_FIRSTNAME,
    'admin-lastname' => \Magento\TestFramework\Bootstrap::ADMIN_LASTNAME,
];
```

 {:.bs-callout-info}
Leave all the settings that do not start with `db-` at their default values.

## Adjust the PHPUnit configuration file

The default integration test configuration can be found at `dev/tests/integration/phpunit.xml.dist`.

Without adjustments it will run all core integration tests, which is useful for example on a continuous integration server.

When making adjustments to the configuration, copy the default file to `dev/tests/integration/phpunit.xml` (again, without the `.dist` suffix) and make your changes there. That way, your changes will not be overwritten during Magento upgrades.

There are many settings in the file.
This guide will only describe three common adjustments.
Refer to the [PHPUnit documentation], and the comments in the default file, for more information about the available configuration settings.

### TESTS_CLEANUP constant

Default value:

```xml
<const name="TESTS_CLEANUP" value="enabled"/>
```

If this constant is set to `enabled`, the integration test framework will clean the test database and reinstall Magento on every test run.
This way, any new modules will be automatically picked up, and any cruft that might have been left over from previous test runs will be removed.
It also causes the test framework to flush the test Magento configuration, the [cache](https://glossary.magento.com/cache) and the code generation before executing any tests.

The downside of setting `TEST_CLEANUP` to `enabled` is that the reinstallation of Magento takes time (the exact time depends on the host you are using to run the integration tests and the Magento version.)

During the development of new integration tests, where only a subset of the tests is executed repeatedly, that overhead of setting up a fresh execution environment for each run quickly becomes a burden.

In that case the `TEST_CLEANUP` constant can be set to `disabled`.
The test execution will start much quicker, but as a consequence the developer must manually flush the cache and the database when needed.

The integration test framework creates the temporary test files beneath the directory
`dev/tests/integration/tmp/sandbox-*` (followed by a long hash ID).

To force the test framework to regenerate the cache and the other files, remove the directory:

```bash
rm -r dev/tests/integration/tmp/sandbox-*
```

### PHP memory_limit

The default `phpunit.xml.dist` file does not contain any PHP `memory_limit` settings.
However, sometimes the [PHP](https://glossary.magento.com/php) configuration restricts the amount of memory PHP may consume.
This can make it impossible to run the integration tests.

The PHP memory limit can be turned off by adding the following configuration to the `<php>` section of the integration test `phpunit.xml` file:

```xml
<ini name="memory_limit" value="-1"/>
```

## Execute third party integration tests

The Magento code integration tests reside in the directory `dev/tests/integration/testsuite`.
For core tests it makes sense that the integration tests do not reside within individual modules, because most integration test execute code from many different modules.

Specific integration tests for shop implementation could also be placed within a different subdirectory of `dev/tests/integration/testsuite`, and then would be executed together with the core tests.

However, third party Magento extensions are contained within a single directory, and might supply custom integration tests too.
These tests usually are placed in the `Test/Integration/` subdirectory within the [module](https://glossary.magento.com/module) folder.

These third party integration tests are not picked up by the default integration test configuration.
A test suite configuration like the following can be added to the `<testsuites>` section of the `phpunit.xml` file so they are included during test execution.

```xml
<testsuite name="Third Party Integration Tests">
    <directory>../../../app/code/*/*/Test/Integration</directory>
    <directory>../../../vendor/*/module-*/Test/Integration</directory>
    <exclude>../../../app/code/Magento</exclude>
    <exclude>../../../vendor/magento</exclude>
</testsuite>
```

Such a test suite configuration can then be executed using the `--testsuite <name>` command option. For example, if you are in the `dev/tests/integration` directory:

```bash
php ../../../vendor/bin/phpunit --testsuite "Third Party Integration Tests"
```

## Run integration tests in the CLI {#cli-run}

Probably the most common way to execute integration tests is using the command line interface (CLI).

Ensure you have [prepared the integration test environment][setup] before starting.

The integration tests have to be executed with the current working directory being `dev/tests/integration`.
The test configuration resides in that directory and will be picked up by `phpunit` automatically, without the need to specify it as a command line option.

### Run all integration tests

By default, if no additional arguments are specified, the test configuration executes all integration tests in the directory `dev/tests/integration/testsuite`.

```bash
cd dev/tests/integration
```

```bash
../../../vendor/bin/phpunit
```

> Expected log

```terminal
PHPUnit 4.1.0 by Sebastian Bergmann.

Configuration read from /var/www/magento2/dev/tests/integration/phpunit.xml

..........................
```

The path to the `phpunit` executable installed by [Composer](https://glossary.magento.com/composer) into the vendor directory is used.

### Run only a custom testsuite

PHPUnit offers several ways to only execute a subset of tests.
For example, it is common to only execute a single test suite from the `phpunit.xml` configuration.

```bash
cd dev/tests/integration
```

```bash
../../../vendor/bin/phpunit --testsuite "Memory Usage Tests"
```

### Run tests from a specific directory tree

To execute only the tests within a specific directory (for example an extension), pass the path to that directory as an argument to `phpunit`:

```bash
cd dev/tests/integration
```

```bash
../../../vendor/bin/phpunit ../../../app/code/Acme/Example/Test/Integration
```

### Run a single test class

When developing a new integration test class, it is common to run only that single test many times.
Pass the path to the file containing the test class as an argument to `phpunit`:

```bash
cd dev/tests/integration
```

```bash
../../../vendor/bin/phpunit ../../../app/code/Acme/Example/Test/Integration/ExampleTest.php
```

### Run a single test within a test class

Running only a single test within a test class can be done by specifying the test class together with the `--filter` argument and the name to select the test currently being developed:

```bash
cd dev/tests/integration
```

```bash
../../../vendor/bin/phpunit --filter 'testOnlyThisOneIsExecuted' ../../../app/code/Acme/Example/Test/Integration/ExampleTest.php
```

## Common mistakes

### Can not read files specified as arguments

This happens if the integration tests are executed from a wrong directory.

### Could not read "dev/tests/integration/phpunit.xml"

This error happens if the integration tests are executed from a different directory than `dev/tests/integration`.
To fix the issue, change into the `dev/tests/integration` directory and run the tests from there with any relative paths adjusted accordingly.

### Unable to connect to MySQL

The [PHP](https://glossary.magento.com/php) interpreter must be able to connect to the test database. By default, this means the tests have to run on the same host as the MySQL server.
This problem most commonly crops up during development with Vagrant or Docker, where the Magento DB is running on a virtual machine.
If the tests then are executed using a PHP interpreter on the host system, the database might not be accessible.

The error usually looks something like:

```bash
phpunit
```

> Expected log

```bash
exception 'PDOException' with message 'SQLSTATE[HY000] [2002] No such file or directory' in /var/www/magento2/vendor/magento/zendframework1/library/Zend/Db/Adapter/Pdo/Abstract.php:129
```

There are many ways this problem can be resolved, but the easiest is to run the tests in the virtual machine as well.

## Run integration tests in PhpStorm {#phpstorm-run}

When writing new integration tests or during debugging, it is convenient to execute tests from within the PhpStorm IDE.

Ensure you have [prepared the integration test environment][setup] before starting.

### Create an integration test run configuration

Setting up a run configuration for integration tests is very similar to creating a run configuration for unit tests.

Refer to [Running Unit Tests in PhpStorm][phpstorm run] for instructions about how to create a basic run configuration.
Then configure the integration test configuration file to be used.

### Use the integration test configuration file

The only difference in the run configuration is that the integration test `phpunit.xml.dist` or `phpunit.xml` configuration file from the directory `dev/tests/integration` has to be selected.

![Integration Test Class run configuration]({{ site.baseurl }}/common/images/phpstorm_run_config_class_integration_tests.png){:width="600px"}

## Integration tests file structure

The root folder for the Magento integration tests suite —`<magento_root>/dev/tests/integration`—contains the following sub-folders and files:

This folder contains the following sub-folders and files:

-  `framework/` – Integration testing framework scripts, configuration files and classes.
-  `Magento/` – A set of classes that implement the Magento integration tests framework.
-  `bootstrap.php` – The PHPUnit bootstrap script.
-  `etc/install-config-<db_vendor>.php` – A configuration file that provides values for installing the Magento application.
-  `testsuite/` – The test suite.
-  `tmp/` – A writable directory for storing temporary data during test execution.
-  `sandbox-<hash>/` – The folder where each Magento instance stores temporary and configuration data.
-  `phpunit.xml.dist` – A PHPUnit configuration file.

<!-- LINK DEFINITIONS -->

[cli run]: #cli-run
[phpstorm run]: {{ page.baseurl }}/test/unit/unit_test_execution_phpstorm.html
[PHPUnit documentation]: https://phpunit.de/manual/4.1/en/appendixes.configuration.html
[setup]: #setup