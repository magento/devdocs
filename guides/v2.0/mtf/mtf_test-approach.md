---
layout: default
group: mtf-guide
subgroup: 40_Approach
title: Test Approach in the Magento Testing Framework
menu_title: TEST APPROACH
menu_node: parent
github_link: mtf/mtf_test-approach.md
---

* TOC
{:toc}

## Preface

Magento testing framework works with functional tests only. Functional testing means checking that an application met specified business requirements. These requirements usually are collected in functional specifications that describe expected behaviour of the application. Role of functional testing is to validate this behavior.

Tests are used to cover functionality of a business entity. A goal is to find discrepancies between expected and real behaviour of the product.
    Magento already contains functional test in `<magento2>/dev/tests/functional/tests/app/Magento`. In this guide they are called `out-of-the-box` tests. You can use them to test default Magento functionality.

If you want to extend functionality you can modify existing tests or create your own functional tests using the MTF.
    
## Out-of-the-box test

The out-of-the-box tests are the ready to use functional tests developed by Magento. You can find them in the `<magento2>/dev/tests/functional` directory.

### Coverage

Test coverage of the out-of-the-box test depends on a module which it belongs to. The out-of-the-box tests cover basic functionality of Magento application. They test the CRUD functionality for all basic entities.  The most important modules are covered better.

### Usage

You can use out-of-the-box tests in:

- Regression testing
    - if new changes didn't break functionality
    - before release
    - for deep testing
    
- Sanity testing
    - after any changes were made
    - test the basic functionality
    
- Acceptance testing
    - in combination with own tests
    - to test new feature: show that feature works and it didn't break any functionality of the Magento application (all other tests passed)
 
### How to use

Step 1. Check the functionality manually

Pass all the test steps defined in a test case you want to use.

Step 2. [Run the test][]
    
## Extended out-of-the-box test

You can extend from an out-of-the-box test to create your own test that is an extended out-of-the-box test. It is stored in the same location as out-of-the-box test that you are extended from `<magento2>/dev/tests/functional/tests/app/Magento/<testing_module>`.

## Usage

This type of test is useful when the Magento functionality was extended, for example the minor changes were added to the existing functionality of a module. Also you can extend the out-of-the-box test to extend the current test coverage if functionality that you are interested in is not completely covered by the out-of-the-box test.

Example use cases:

- [variation addition][]
- [variation extension][]
- [fixture extension][]
- [repository addition][]
- [block overriding][]
- [handler overriding][]

## New test

### When should I use them?

- new functionality
    - new test flow
- new modules

### Where can I put them?

- dev/tests/functional/tests/app/Magento/<testing_module>

### How can I create them?

To create new test you need a test object, test flow, logic components, test data and verification logic.
 
Test object is represented as a fixture. Fixture defines object properties.

Logic components are contained in blocks and typified elements. Blocks are united in a page.

Test data are stored in data sets, sample data are stored in repositories, and sample test entities can be created by handlers.
 
Test flow is declared in a test case as test steps and preconditions.

Verification assertions are managed by constraints.

#### Test flow
   
* [Create a test case file][]
* [Create a data set file][] with all variations for your test. A data set XML file should have the same name as your test case.

#### Test data

To create the test entity you must fill a product creation form with data from a data set. To do it correctly you need fixture for simple product entity. Learn more about Fixture Creation.
fixtures
Very often you need to create some entity in precondition of your test case. To do this you need to create handler for simple product creation withing Handler directory of your module.  Learn more about Handler Creation.

#### Test data processing

You need to create pages that you open. Learn about Page Creation.
All business logic (like click Save button or fill form) is stored in blocks. So you need to add blocks to your pages. Read about Block Creation.
After blocks creation you need to add them to pages and generate pages to be able to access blocks you added.
Once you have pages with blocks and fixture, you can start to develop preconditions and steps of your test case. Read about Test Case Creation.

#### Test verification



<!-- LINK DEFINITIONS -->

[Run the test]: {{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_runtest.html
[variation addition]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#add_variation
[variation extension]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#extend_variation
[fixture extension]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_extend
[repository addition]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy
[block overriding]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html
[handler overriding]: {{site.gdeurl}}mtf/mtf_entities/mtf_handler.html

[Create a test case file]: {{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html#how-to-create
[Create a data set file]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html



<!-- ABBREVIATIONS -->
*[MTF]: Magento Testing Framework
*[CRUD]: Create Read Update Delete