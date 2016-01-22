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

## Preface {#preface}

Magento testing framework works with functional tests only. Functional testing means checking that an application met specified business requirements. These requirements usually are collected in functional specifications that describe expected behaviour of the application. Role of functional testing is to validate this behavior.

Tests are used to cover functionality of a business entity. A goal is to find discrepancies between expected and real behaviour of the product.
    Magento already contains functional test in `<magento2>/dev/tests/functional/tests/app/Magento`. In this guide they are called `out-of-the-box` tests. You can use them to test default Magento functionality.

If you want to extend functionality you can modify existing tests or create your own functional tests using the MTF.
    
## Out-of-the-box test {#out-of-the-box-test}

The out-of-the-box tests are the ready to use functional tests developed by Magento. You can find them in the `<magento2>/dev/tests/functional` directory.

### Coverage {#coverage}

Test coverage of the out-of-the-box test depends on a module which it belongs to. The out-of-the-box tests cover basic functionality of Magento application. They test the CRUD functionality for all basic entities.  The most important modules are covered better.

### Usage {#oob-usage}

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
 
### How to use {#how-to-use}

Step 1. Check the functionality manually

Pass all the test steps defined in a test case you want to use.

Step 2. [Run the test][]

## New test {#new-test}
    
### Extending an out-of-the-box test {#extending-oob-test}

You can create a test extending from an out-of-the-box test. It is stored in the `<magento2>/dev/tests/functional/tests/app/Magento/<testing_module>` directory.

#### Usage {#ext-usage}

This approach is useful when the Magento functionality was extended, for example the minor changes were added to the existing functionality of a module. Also you can extend an out-of-the-box test to extend the current test coverage if functionality that you are interested in is not completely covered by the out-of-the-box test.

Example use cases:

- [variation addition][]
- [variation extension][]
- [fixture extension][]
- [repository addition][]
- [block overriding][]
- [handler overriding][]

### Creating a test {#create-test}

When new functionality or/and new modules were added to Magento you would need to create an absolutely new test to check the functionality. 

New tests must be stored in corresponding modules `<magento2>/dev/tests/functional/tests/app/Magento/<testing_module>`.

Each test consists of four main components: test object, test data, test flow, test assertions.

#### Test object

Test object is an object that you are going to test. All test actions will be performed under this object.
Test object is represented as a [fixture][].  The fixture defines properties of an object.

For example, in [CreateSimpleProductEntityTest][] the `\Magento\Catalog\Test\Fixture\CatalogProductSimple` is a test object.

#### Test data

Test data are data for the test and data for preconditions

 - Data for a test are stored in [data set][]
 - Preconditions include sample data that are stored in a [fixture repository][] and sample test entity that can be created by a [handler][]. 

#### Test flow

#### Test assertions

These components are discussed in the rest of this topic. To demonstrate usage of these components in the test creation process we will create step-by-step a new test . Example test will create a new simple product. This test already exists in functional tests directory, so you can track processes of its creation.


To create the test entity you must fill a product creation form with data from a data set. To do it correctly you need fixture for simple product entity. Learn more about Fixture.
Связать в рамках одного теста. Создаваемый продукт можно назначить существующей категории или создать новую категорию для этого продукта. Чтобы создать новую категорию нужен хендлер.
Often you need to create some entity in precondition of your test case. To do this you need to create handler for Category creation in Handler directory of your module.  Learn more about Handler.

#### Test flow

Test flow is declared in a test case as test steps and preconditions.

* [Create a test case file][]
* [Create a data set file][] with all variations for your test. A data set XML file should have the same name as your test case.

UI manipulation methods are contained in blocks. A page is composed from blocks.

тест степы - это действия на странице. Дальше про страницу
You need to create pages that you open. Learn about Page Creation.
All business logic (like click Save button or fill form) is stored in blocks. So you need to add blocks to your pages. Read about Block Creation.
After blocks creation you need to add them to pages and generate pages to be able to access blocks you added.
Once you have pages with blocks and fixture, you can start to develop preconditions and steps of your test case. Read about Test Case Creation.

#### Test assertions

Verification assertions are managed by constraints. Проверка того что мы сделали в степах. Констрейнты используют страницы и блоки, либо те же либо другие, в зависимости от декларируемой логики проверок.

Пример сценария для новой функциональности

тест дизайн. понимание того что хочешь автоматизировать.

создание фикстуры

дата сет. прикидываю какие данные хочу проверить, 

страницы и блоки для тест кейса

тест кейс. переплетается с созданием страниц и блоков.

страницы и блоки для ассерта

ассерты.

ран. дебаг. отладка. фикс

#### Example

<!-- LINK DEFINITIONS -->

[Run the test]: {{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_runtest.html
[variation addition]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#add_variation
[variation extension]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#extend_variation
[fixture extension]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_extend
[repository addition]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy
[block overriding]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html
[handler overriding]: {{site.gdeurl}}mtf/mtf_entities/mtf_handler.html

[fixture]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html
[data set]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html
[fixture repository]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html
[handler]: {{site.gdeurl}}mtf/mtf_entities/mtf_handler.html

[CreateSimpleProductEntityTest]: {{mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Product


[Create a test case file]: {{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html#how-to-create
[Create a data set file]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html



<!-- ABBREVIATIONS -->
*[MTF]: Magento Testing Framework
*[CRUD]: Create Read Update Delete