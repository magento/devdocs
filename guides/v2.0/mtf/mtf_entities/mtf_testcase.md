---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Test case
menu_order: 9
github_link: mtf/mtf_entities/mtf_testcase.md
---

<h2>Test case</h2>

* TOC
{:toc}

## Test case overview {#mtf_testcase_overview}

The Magento Testing Framework supports two types of functional tests:

- Injectable test: the main type of the MTF test, that uses XML [data set][] files as inputs.
- [Scenario test][]: supports a Magento modularity and enables you to inject one step into another test.

## Test case structure {#structure}

A test case class extends the [Mtf\TestCase\Injectable][] class.

### Docblock {#docblock}

All out-of-the-box test cases contain description of a test flow at the beginning of a code. That is a good practice. See [Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest][] class as an example.

The description consists of the test steps and preconditions. Preconditions are the conditions that need to be done before steps.

### `__prepare()` (optional) {#prepare-method}

The `__prepare()` method can be useful to prepare unchangeable data that is repeatedly used for different test variations. The most popular use case is to create [fixture][] that is used in the test.

This method is called once during test launch and is optional to use. `__prepare` can return an array of arguments which then can be used as arguments of the `test()` method and the `processAssert()` method in [constraints][]. The following example creates and returns the `$customer` fixture. 

{%highlight php startinline=1%}
public function __prepare(Customer $customer)
{
    $customer->persist();
    return ['customer' => $customer];
}
{%endhighlight%}

Returned argument `$customer` is available in a test globally and also in [constraints][].

### `__inject()` (optional) {#inject-method}

The `__inject()` method is used to inject data in a test (usually pages initialization as in the following example).

{%highlight php startinline=1%}
public function __inject(
    CatalogProductIndex $productGrid,
    CatalogProductEdit $editProductPage
) {
    $this->productGrid = $productGrid;
    $this->editProductPage = $editProductPage;
}
{%endhighlight%}

 This method is run before the [data set][] variations has been run. Returned arguments from this method are available in [constraints][] and in the test as well.

### `test()` (required) {#test-method}

The `test()` method must contain test steps described in a [docblock](#docblock). Returned arguments from this method are available in [constraints][]. This method runs for all variations in a [data set][]. The `test()` method is required.

In the following example, the test includes preconditions and test steps. Preconditions contain logic of different scenarios of creating a product, depending on the category state. Test steps perform:

- opening of the page creation grid
- filtering by `sku`
- editing of the founded product
- saving of the edited product

<script src="https://gist.github.com/dshevtsov/27fae7c912604030e574.js"></script>

Returned array is available for the test case methods and constraints within current variation.

### `tearDown()` (optional) {#teardown-method}

After [constraints][] of the variation have been performed, you can use the `tearDown()` method to get back the testing application to the initial state, to be ready for the next variation execution (for example, logging out, clearing data, clearing cache).

For example, the following code deletes sales rule after each variation:

{%highlight php startinline=1%}
public function tearDown()
{
    $this->promoQuoteIndex->open();
    $this->promoQuoteIndex->getPromoQuoteGrid()->searchAndOpen(['name' => $this->salesRuleName]);
    $this->promoQuoteEdit->getFormPageActions()->delete();
    $this->promoQuoteEdit->getModalBlock()->acceptAlert();
}
{%endhighlight%}

## Test case flow {#flow}

All data required for the test are stored in variations of a data set. A `__prepare()` method is run first to prepare entities needed for a whole test. Arguments returned by `__prepare()` are available during all test including constraints. Further, the method `__inject()` injects data in the test from the `variation 1`. The method `test()` performs all the test steps with the data from the `variation 1`. Then, constraints listed in the `variation 1` are run in the order they are listed. After that, `tearDown()` "cleans the territory" to be ready for the `variation 2`, if it exists in a data set. When a variation fails, the test runs for the next variation in a queue.

![Test case flow diagram]({{site.baseurl}}common/images/mtf_test_case_flow.png)

## How to create a test case {#how-to-create}

__Step 1.__ Create a [data set][]

__Step 2.__ Create a PHP class in the `<magento2>/dev/tests/functional/tests/app/Magento/<module>/TestCase` directory.

__Step 3.__ Give it a name in the following format:

<b><span style="color:blue">{action}</span><span style="color:red">{entityName}</span>Entity<span style="color:green">{additional_description_if_needed}</span>Test</b>

For example:
   
- <span style="color:blue">Create</span><span style="color:red">ConfigurableProduct</span>EntityTest
- <span style="color:blue">Create</span><span style="color:red">CatalogEvent</span>Entity<span style="color:green">FromCategoryPage</span>Test

__Step 4.__ If you have preconditions, prepare data using a [__prepare()](#prepare-method) method

__Step 5.__ Inject initial data for the test using a [__inject()](#inject-method) method

__Step 6.__ Implement all the test steps in the [test()](#test-method) method
 
__Step 7.__ If you need to perform any actions after constraints run, use a [tearDown()](#teardown-method) method


[data set]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html
[Mtf\TestCase\Injectable]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/TestCase/Injectable.php
[Scenario test]: {{site.gdeurl}}mtf/mtf_entities/mtf_scenariotest.html
[processAssert()]:{{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html#mtf_constraint_assert
[constraints]: {{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html
[fixture]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html
[Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Product/UpdateSimpleProductEntityTest.php

*[MTF]: Magento testing Framework
