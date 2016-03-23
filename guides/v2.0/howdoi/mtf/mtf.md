---
layout: default
group: howdoi
subgroup: Magento test development
title: Magento test development
menu_title: Magento test development
menu_node: parent
menu_order: 1
github_link: howdoi/mtf/mtf.md
---

## Magento test development

When talking about testing in Magento 2, we have to distinguish between different test types.

* **Functional** and **API Functional**
  Functional tests are mainly used for system tests at a very high level by remote controlling a browser. Magento is treated as a black box, and tests happen from a user perspective.  
  For more information, see the [Functional Testing Framework]({{ site.gdeurl }}mtf/mtf_introduction.html) guide.
* **Integration**
  Integration tests run Magento PHP code in varying degrees of isolation. They tend to be a lot more low-level then functional tests. Because they do not utilize a browser to execute the tests, they can be a lot more granular. They also tend to run a lot quicker then functional tests.
* **JavaScript**
  Much of the functionality in Magento 2 is provided with the help of sophisticated JavaScript. JavaScript tests ensure the frontend portion of Magento functions as expected.
* **Static**
  Static code analysis checks that PHP code follows the Magento 2 coding standards and best practices.
* **Unit**
  Unit tests check one unit of PHP code in isolation. They are usually written during module development using TDD (Test Driven Development).
  Because they do not require the full Magento application to be initialized during execution, they run an order of magnitude faster then integration tests, and are useful to give developers a quick feedback loop during development. They also are very valuable during refactoring.  
  For more information, see [Running Unit Tests]({{ site.gdeurl }}test/unit/unit_test_execution.html).

Each of these corresponds to a [subdirectory in `dev/tests`](https://github.com/magento/magento2/tree/develop/dev/tests).

    dev/tests  
    ├── api-functional  
    ├── functional  
    ├── integration  
    ├── js  
    ├── static  
    └── unit  

Each one has different requirements to be set up and differs in how they can be executed.

