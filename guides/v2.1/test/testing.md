---
layout: default
group: testing
title: Magento Testing Guide
version: 2.1
github_link: test/testing.md
---

## Magento Testing Guide

When talking about testing in Magento 2, we have to distinguish between different test types.

* **Functional**
  Functional tests are mainly used for system tests at a very high level by remote controlling a browser. Magento is treated as a black box, and tests happen from a user perspective.  

  For more information, see the [Functional Testing Framework Guide]({{ site.gdeurl21 }}mtf/mtf_introduction.html).

* **API Functional** 
  The Web API testing framework enables you to test the Magento Web API from the client application point of view.
  
  For more information, see the [Web API functional testing]({{ site.gdeurl21 }}get-started/web-api-functional-testing.html).
  
* **Integration**  
  Integration tests run Magento PHP code in varying degrees of isolation. They tend to be a lot more low-level then functional tests. Because they do not utilize a browser to execute the tests, they can be a lot more granular in what they test. They also tend to run a lot quicker then functional tests.
  
  For more information, see [Running Integration Tests]({{ site.gdeurl21 }}test/integration/integration_test_execution.html).
  
* **JavaScript**  
  Much of the functionality in Magento 2 is provided with the help of sophisticated JavaScript. JavaScript tests ensure the frontend portion of Magento functions as expected.  

  For more information, please see the [Extension Developer Guide on JavaScript Tests]({{ site.gdeurl21 }}extension-dev-guide/test/test_js-unit.html).
  
* **Static**  
  Static code analysis checks that PHP code follows the Magento 2 coding standards and best practices. They usually are executed during continuous integration using the `bin/magento` tool. 

  Please see the [`magento dev:tests:run`]({{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-test.html) documentation for more information, using the test type `static`. 

* **Unit**  
  Unit tests are used to check a single unit of PHP code in isolation. They are usually written during development using [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development){:target="_blank"} (TDD).  

  Because they do not require the full Magento application stack to be initialized, they run an order of magnitude faster then integration tests.  

  For more information, see [Running Unit Tests]({{ site.gdeurl21 }}test/unit/unit_test_execution.html).

  Please refer to the article [Writing testable code]({{ site.gdeurl21 }}test/unit/writing_testable_code.html) for more information on what to keep in mind when starting with TDD.

The `bin/magento` tool provides a common entry point to execute any of the tests, which can be useful for continuous integration. Please see the [System Administrators Guide on Running Tests]({{ site.gdeurl21 }}config-guide/cli/config-cli-subcommands-test.html) for more information. 

#### Where to find the tests in the file system

Each of the test types listed above corresponds to a subdirectory in `<magento2 root dir>/dev/tests`.

    dev/tests  
    ├── api-functional  
    ├── functional  
    ├── integration  
    ├── js  
    ├── static  
    └── unit  

Each one of these test types has different requirements that must be satisfied before they can be executed.  
