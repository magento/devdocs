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

All out-of-the-box test cases contain description of a test flow at the beginning of a code. That is a good practice. See [Magento\Catalog\Test\TestCase\Product\CreateSimpleProductEntityTest][] class as an example.

The description consists of the test steps and preconditions. Preconditions are the conditions that need to be done before steps.

### `__inject()` {#inject-method}

The `__inject()` method must be used to inject data in a test (usually pages initialization as in the following example). This method is run for all [data set][] variations before the `test()` method has been run. Returned arguments from this method are available in [constraints][] and in the test as well.

{%highlight php startinline=1%}
public function __inject(
    CatalogProductIndex $productGrid,
    CatalogProductEdit $editProductPage
) {
    $this->productGrid = $productGrid;
    $this->editProductPage = $editProductPage;
}
{%endhighlight%}

### `test()` {#test-method}

The `test()` method must contain test steps described in a [docblock](#docblock). Returned arguments from this method are available in [constraints][]. This method runs for all variations in a [data set][]. The `test()` method is required.

### `__prepare()` {#prepare-method}

The `__prepare()` method can be useful to prepare unchangeable data that is repeatedly used for different test variations. The most popular use case is to create [fixture][] that is used in the test.

This method is called once during test launch and is optional to use. `__prepare` can return an array of arguments which then can be used as arguments of the `test()` method and the `processAssert()` method in [constraints][]. The following example creates and returns the `$customer` fixture.

{%highlight php startinline=1%}
public function __prepare(Customer $customer)
{
    $customer->persist();
    return ['customer' => $customer];
}
{%endhighlight%}

### `tearDown()` {#teardown-method}

If you need to perform some actions after [constraints][] of each [data set][] variation completed you should use the method `tearDown()` (example actions are logging out, clearing data, clearing cache)

For example, the following code deletes created sales rule after each variation:

{%highlight php startinline=1%}
public function tearDown()
{
    $this->promoQuoteIndex->open();
    $this->promoQuoteIndex->getPromoQuoteGrid()->searchAndOpen(['name' => $this->salesRuleName]);
    $this->promoQuoteEdit->getFormPageActions()->delete();
    $this->promoQuoteEdit->getModalBlock()->acceptAlert();
}
{%endhighlight%}

## How to create a test case {#how-to-create}

__Step 1.__ Create a PHP class in the `<magento2>/dev/tests/functional/tests/app/Magento/<module>/TestCase` directory.

__Step 2.__ Give it a name in the following format:

<b><span style="color:blue">{action}</span><span style="color:red">{entityName}</span>Entity<span style="color:green">{additional_description_if_needed}</span>Test</b>

For example:
   
- <span style="color:blue">Create</span><span style="color:red">ConfigurableProduct</span>EntityTest
- <span style="color:blue">Create</span><span style="color:red">CatalogEvent</span>Entity<span style="color:green">FromCategoryPage</span>Test

__Step 3.__ If you have preconditions, prepare data using a [__prepare()](#prepare-method) method

__Step 4.__ Inject initial data for the test using a [__inject()](#inject-method) method

__Step 5.__ Implement all the test steps in the [test()](#test-method) method
 
__Step 6.__ If you need to perform any actions after constraints run, use a [tearDown()](#teardown-method) method

__Step 7.__ Create a [data set][]

[data set]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html
[Mtf\TestCase\Injectable]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/TestCase/Injectable.php
[Scenario test]: {{site.gdeurl}}mtf/mtf_entities/mtf_scenariotest.html
[processAssert()]:{{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html#mtf_constraint_assert
[constraints]: {{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html
[fixture]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html
[Magento\Catalog\Test\TestCase\Product\CreateSimpleProductEntityTest]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Product/UpdateSimpleProductEntityTest.php

*[MTF]: Magento testing Framework
