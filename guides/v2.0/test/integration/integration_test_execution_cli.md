---
layout: default
group: integration-testing
subgroup: 20_Running_Integration_Tests
title: Running Integration Tests in the CLI
menu_title: Running Integration Tests in the CLI
menu_node: parent
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.0
github_link: test/integration/integration_test_execution.md
---

## Running integration tests on the command line interface (CLI)


Probably the most common way to execute integration tests is using the command line.  

Please ensure you have [prepared the integration test environment]({{page.baseurl}}test/integration/integration_test_setup.html) before starting.

The integration tests have to be executed with the current working directory being `dev/tests/integration`.  
The test configuration resides in that directory and will be picked up by `phpunit` automatically, without the need to specify it as a command line option.

### Running all integration tests

By default, if no additional arguments are specified, the test configuration executes all integration tests in the directory `dev/tests/integration/testsuite`.

{%highlight bash%}
$ cd dev/tests/integration
$ ../../../vendor/bin/phpunit
PHPUnit 4.1.0 by Sebastian Bergmann.

Configuration read from /var/www/magento2/dev/tests/integration/phpunit.xml

..........................
{%endhighlight%}

Note the path to the `phpunit` executable installed by composer into the vendor directory is used.

### Running only a custom testsuite

PHPUnit offers several ways to only execute a subset of tests.  
For example, it is common to only execute a single testsuite from the `phpunit.xml` configuration.

{%highlight bash%}
$ cd dev/tests/integration
$ ../../../vendor/bin/phpunit --testsuite "Memory Usage Tests"
{%endhighlight%}

### Running a tests from a specific directory tree

To execute only the tests within a specific directory (for example an extension), pass the path to that directory as an argument to `phpunit`.

{%highlight bash%}
$ cd dev/tests/integration
$ ../../../vendor/bin/phpunit ../../../app/code/Acme/Example/Test/Integration
{%endhighlight%}

### Running a single test class

When developing a new integration test class, it is common to run only that single test many times.  
Pass the path to the file containing the test class as an argument to `phpunit`.

{%highlight bash%}
$ cd dev/tests/integration
$ ../../../vendor/bin/phpunit ../../../app/code/Acme/Example/Test/Integration/ExampleTest.php
{%endhighlight%}

### Running a single test within a test class

Running only a single test within a test class can be done by specifying the test class together with the `--filter` argument and the name to select the test currently being developed.  

{%highlight bash%}
$ cd dev/tests/integration
$ ../../../vendor/bin/phpunit --filter 'testOnlyThisOneIsExecuted' ../../../app/code/Acme/Example/Test/Integration/ExampleTest.php
{%endhighlight%}

### Common mistakes

#### Can't read files specified as arguments

This happens if the integration tests are executed from a wrong directory.  

`Could not read "dev/tests/integration/phpunit.xml".`

This error happens if the integration tests are executed from a different directory then `dev/tests/integration`.  
To fix the issue, change into the directory `dev/tests/integration` and run the tests from there with any relative paths adjusted accordingly.

#### Unable to connect to MySQL

The PHP interpreter has to be able to connect to the test database. By default this means the tests have to run on the same host as the MySQL server.  
This problem most commonly crops up during development with vagrant or docker, where the Magento DB is running on a virtual machine.  
If the tests then are executed using a PHP interpreter on the host system, the database might not be accessible.  

The error usually looks something like this.
{%highlight bash%}
$ phpunit
exception 'PDOException' with message 'SQLSTATE[HY000] [2002] No such file or directory' in /var/www/magento2/vendor/magento/zendframework1/library/Zend/Db/Adapter/Pdo/Abstract.php:129
{%endhighlight%}

There are many ways this problem can be resolved, but the easiest is to run the tests in the virtual machine, too.  

