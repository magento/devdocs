---
layout: default
group: integration-testing
subgroup: 40_Integration_Test_Setup
title: Preparing Integration Test Execution
menu_title: Integration Test Setup
menu_node: parent
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.1
github_link: test/integration/integration_test_setup.md
---

## Preparing Integration Test Execution

* TOC
{:toc}

Before the Magento integration test framework can be used, the test environment has to be prepared.  
The following prerequisites are required:

* A dedicated integration test database
* The test framework database configuration
* The PHPUnit configuration has to match the purpose of the integration test execution

### The integration test database

By default, for every integration test run, the test framework installs a fresh Magento test database.  

<div class="bs-callout bs-callout-warning">
    <p>Do not use the same database as the real Magento instance.  
    Any data (products, customers, orders and everything else) will be lost!</p>
</div>

For safety reasons it is recommended to use a dedicated database user for running the tests. That db user should not have access to any other databases.  
Here are example SQL commands to create a test database and a dedicated test user account.

{%highlight sql%}
CREATE DATABASE magento_integration_tests;
GRANT ALL ON magento_integration_tests.* TO 'magento2_test_user'@'localhost' IDENTIFIED BY 'ftYx4pm6^x9.&^hB';
{%endhighlight%}

Replace the example database and user name and the example password with something that matches your requirements and conventions.  

### Configuring the framework to use the test database

The Magento 2 integration test framework comes with a configuration file template located at  
`mage2ce/dev/tests/integration/etc/install-config-mysql.php.dist`.  

Copy this file to  
`mage2ce/dev/tests/integration/etc/install-config-mysql.php`  
(without the `.dist` suffix) and add your test database access credentials.

The contents will look something like the following. Use the DB access credentials for your test database instead of the example values below.

{%highlight php%}
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
{%endhighlight%}

<div class="bs-callout bs-callout-info" id="info">
  <p>Be sure to leave all the settings that do not start with <code>db-</code> at their default values.</p>
</div>

### Adjusting the PHPUnit configuration file

The default integration test configuration can be found at `dev/tests/integration/phpunit.xml.dist`.  

Without adjustments it will run all core integration tests, which is useful for example on a continuous integration server.  

When making adjustments to the configuration, copy the default file to `dev/tests/integration/phpunit.xml` (again, without the `.dist` suffix) and make your changes there. That way your changes will not be overwritten during Magento upgrades.  

There are many settings in the file.  
This guide will only describes three common adjustments.  
Please refer to the [PHPUnit documentation](https://phpunit.de/manual/4.1/en/appendixes.configuration.html) and the comments in the default file for more information on the available configuration settings.

#### The TESTS_CLEANUP Constant

Default value:

{%highlight xml%}
<const name="TESTS_CLEANUP" value="enabled"/>
{%endhighlight%}

If this constant is set to `enabled`, the integration test framework will clean the test database and re-install Magento on every test run.  
That way any new modules will be automatically picked up, and any cruft that might have been left over from previous test runs will be removed.  
It also causes the test framework to flush the test Magento configuration, the cache and the code generation before executing any tests.  

The downside of setting `TEST_CLEANUP` to `enabled` is that the re-installation of Magento takes time (the exact time depends on the host you are using to run the integration tests and the Magento version.)  

During the development of new integration tests, where only a subset of the tests is executed repeatedly, that overhead of setting up a fresh execution environment for each run quickly becomes a burden.  

In that case the `TEST_CLEANUP` constant can be set to `disabled`.  
The test execution will start much quicker, but as a consequence the developer has to flush the cache and the database when needed manually.  

The integration test framework creates the temporary test files beneath the directory  
`dev/tests/integration/tmp/sandbox-*` (followed by a long hash ID).  

To force the test framework to regenerate the cache and the other files, it is enough to remove the directory.

{%highlight bash%}
$ rm -r dev/tests/integration/tmp/sandbox-*
{%endhighlight%}

#### The PHP memory_limit

The default `phpunit.xml.dist` file does not contain any PHP `memory_limit` settings.  
However, sometimes the PHP configuration restricts the amount of memory PHP may consume.  
This can make it impossible to run the integration tests.  

The PHP memory limit can be turned off by adding the following configuration to the `<php>` section of the integration test `phpunit.xml` file:

{%highlight xml%}
<ini name="memory_limit" value="-1"/>
{%endhighlight%}

#### Executing third party integration tests

The Magento code integration tests reside in the directory `dev/tests/integration/testsuite`.  
For core tests it makes sense that the integration tests do not reside within individual modules, because most integration test execute code from many different modules.  

Shop implementation specific integration tests could also be placed within a different subdirectory of `dev/tests/integration/testsuite` and then would be executed together with the core tests.  

However, third party Magento extensions are contained within a single directory, and might supply custom integration tests, too.  
These tests usually are placed in the subdirectory `Test/Integration/` within the module folder.  

These third party integration tests are not picked up by the default integration test configuration.  
A testsuite configuration like the following can be added to the `<testsuites>` section of the `phpunit.xml` file so they are included during test execution.

{%highlight xml%}
<testsuite name="Third Party Integration Tests">
    <directory>../../../app/code/*/*/Test/Integration</directory>
    <directory>../../../vendor/*/module-*/Test/Integration</directory>
    <exclude>../../../app/code/Magento</exclude>
    <exclude>../../../vendor/magento</exclude>
</testsuite>
{%endhighlight%}

Such a test suite configuration can then be executed using the `--testsuite` command option, for example `--testsuite "Third Party Integration Tests"`.


