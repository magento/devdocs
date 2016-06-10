---
layout: default
group: unit-testing
subgroup: 10_Running_Unit_Tests
title: Running Unit Tests
menu_title: Running Unit Tests
menu_node: parent
contributor_name: Vinai Kopp
contributor_link: http://vinaikopp.com/
version: 2.0
github_link: test/unit/unit_test_execution.md
---

##Running unit tests

* TOC
{:toc}

Executing the Magento 2 unit tests is straight forward.
They can be executed in several different ways.

### Command Line Interface (CLI)  

This option is useful for running the tests during Continuous Integration or on remote servers, or if no IDE with PHPUnit support is available. It only requires a minimum amount of setup.  

Please refer to [Running Unit Tests in the CLI]({{ site.gdeurl }}test/unit/unit_test_execution_cli.html) for further information.

### PHPStorm IDE  
Running the tests inside an IDE like PHPStorm IDE is convenient for developers, since it allows for easier navigation in the code and debugging.

Other then convenience there is no benefit over running the tests on the console.

Please refer to [Running Unit Tests in PHPStorm]({{ site.gdeurl }}test/unit/unit_test_execution_phpstorm.html) for further information.
