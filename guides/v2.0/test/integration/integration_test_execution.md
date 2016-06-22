---
layout: default
group: integration-testing
subgroup: 10_Running_Integration_Tests
title: Running Integration Tests
menu_title: Running Integration Tests
menu_node: parent
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.0
github_link: test/integration/integration_test_execution.md
---

## Running integration tests

* TOC
{:toc}

Integration tests require the Magento runtime environment, so they need a little preparation before they can be executed.  
Once the system is prepared, the tests can be executed using either the command line interface or within an IDE like PHPStorm.

### Setting up the integration test framework

In order to run the integration tests, a test database has to be created and configured.  
Besides this, you might also want to adjust the PHPUnit configuration, depending on your requirements.

Please refer to [Preparing Integration Test Execution]({{page.baseurl}}test/integration/integration_test_setup.html) for further information on setting up the test environment.

### Command Line Interface (CLI)  

This option can be used for running the tests locally during development or on remote servers during Continuous Integration.  

Please refer to [Running Integration Tests in the CLI]({{page.baseurl}}test/integration/integration_test_execution_cli.html) for further information.

### PHPStorm IDE

Running the integration tests inside an IDE like PHPStorm IDE is convenient during development. This is mostly used when writing a new integration test.

Other then convenience there is no benefit over running the tests on the console.

Please refer to [Running Integration Tests in PHPStorm]({{page.baseurl}}test/integration/integration_test_execution_phpstorm.html) for further information.
