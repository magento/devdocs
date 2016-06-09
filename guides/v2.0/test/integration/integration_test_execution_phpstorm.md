---
layout: default
group: integration-testing
subgroup: 40_Running_Integration_Tests
title: Running Integration Tests in PHPStorm
menu_title: Running Integration Tests in PHPStorm
menu_node: parent
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.0
github_link: test/integration/integration_test_execution.md
---

## Running integration tests in PHPStorm

* TOC
{:toc}

When writing new integration tests or during debugging, it is convenient to execute tests from within the the PHPStorm IDE.

Please ensure you have [prepared the integration test environment]({{ site.gdeurl }}test/integration/integration_test_setup.html) before starting.

### Creating an integration test run configuration

Setting up a run configuration for integration tests is very similar to creating a run configuration for unit tests.  

Please refer to [Running Unit Tests in PHPStorm]({{ site.gdeurl }}test/unit/unit_test_execution_phpstorm.html) for instructions on how to create a basic run configuration.  
Then configure the integration test configuration file to be used.

#### Using the integration test configuration file

The only difference in the run configuration is the integration test `phpunit.xml.dist` or `phpunit.xml` configuration file from the directory `dev/tests/integration` has to be selected.  

<img src="{{ site.baseurl }}common/images/phpstorm_run_config_class_integration_tests.png" alt="Integration Test Class run configuration">{:width="600px"}

