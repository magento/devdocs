---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Test case
menu_order: 9
version: 2.0
github_link: mtf/mtf_entities/mtf_testcase.md
---

<h2>Test case</h2>

* TOC
{:toc}

## Test case overview {#mtf_testcase_overview}

The Magento Functional Testing Framework supports two types of functional tests:

- Injectable test: the main type of the FTF test that uses XML [data set][] files as inputs
- [Scenario test][]: supports a Magento modularity and enables you to inject one step into another test

This topic discusses the injectable test only. 

## Test case structure {#structure}

A test case class extends the [Mtf\TestCase\Injectable][] class. It contains one `test()` method and can optionally include `__prepare()`, `__inject()`, and `tearDown()` methods.

### Docblock {#docblock}

All out-of-the-box test cases contain description of a test flow at the beginning of a code. The description consists of the test steps and preconditions. Preconditions are the conditions to be performed before steps execution.
Usage of docblock is a good practice for your new tests. See [Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest][] class as an example.

### `__prepare()` (optional) {#prepare-method}

The `__prepare()` method can be useful to prepare the unchangeable data that is repeatedly used for different test variations. The most popular use case is to create a [fixture][] or a configuration setup that is used in the test.

This method is called one time only during the test launch and is optional to use. `__prepare` can return an array of arguments which can be used as arguments in the `test()` method of a test case and the `processAssert()` method in [constraints][]. The following example creates and returns the `$customer` fixture. 

{%highlight php startinline=1%}
public function __prepare(Customer $customer)
{
    $customer->persist();
    return ['customer' => $customer];
}
{%endhighlight%}

A returned argument `$customer` is available in the test and in [constraints][].

### `__inject()` (optional) {#inject-method}

The `__inject()` method is used to inject data in a test (usually to initialize a page). For an example:

{%highlight php startinline=1%}
public function __inject(
    CatalogProductIndex $productGrid,
    CatalogProductEdit $editProductPage
) {
    $this->productGrid = $productGrid;
    $this->editProductPage = $editProductPage;
}
{%endhighlight%}

 This method is run before each [variation][] test started. Returned arguments from this method are available in [constraints][] and in the test as well.

### `test()` (required) {#test-method}

The `test()` method must contain the test steps described in a [docblock](#docblock). The returned arguments from this method are available in [constraints][]. This method is run for each variation in a [data set][]. The `test()` method is required.

In the following example, the test includes preconditions and test steps. Preconditions contain a logic of different scenarios about creating a product (depending on the category state). Test steps are the following:

- opening of the product creation grid page
- searching by the `sku` parameter and opening of the product
- editing of the found product
- saving of the edited product

{% highlight php %}

<?php
/**
 * Run update product simple entity test.
 *
 * @param CatalogProductSimple $initialProduct
 * @param CatalogProductSimple $product
 * @param string $configData
 * @return array
 */
public function test(CatalogProductSimple $initialProduct, CatalogProductSimple $product, $configData = '')
{
    $this->configData = $configData;
    // Preconditions
    $initialProduct->persist();
    $initialCategory = $initialProduct->hasData('category_ids')
        ? $initialProduct->getDataFieldConfig('category_ids')['source']->getCategories()[0]
        : null;
    $category = $product->hasData('category_ids') && $product->getCategoryIds()[0]
        ? $product->getDataFieldConfig('category_ids')['source']->getCategories()[0]
        : $initialCategory;
    $this->objectManager->create(
        'Magento\Config\Test\TestStep\SetupConfigurationStep',
        ['configData' => $configData]
    )->run();
    // Steps
    $filter = ['sku' => $initialProduct->getSku()];
    $this->productGrid->open();
    $this->productGrid->getProductGrid()->searchAndOpen($filter);
    $this->editProductPage->getProductForm()->fill($product);
    $this->editProductPage->getFormPageActions()->save();
    return ['category' => $category];
}

{% endhighlight %}

A returned array is available in constraints within current variation.

### `tearDown()` (optional) {#teardown-method}

When [constraints][] of the variation have been performed, you can use the `tearDown()` method to get back the testing application to the initial state to be ready for the next variation execution (for example, logging out, clearing data, clearing cache).

For example, the following code deletes a sales rule after each variation:

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

All data required for the test are stored in variations of a data set. A `__prepare()` method is run first to prepare entities needed for a whole test. Arguments returned by a `__prepare()` method are available during all test including constraints. Further, the `__inject()` method injects data in the test. The `test()` method performs all the test steps using the data from the `variation 1`. Then, constraints listed in the `variation 1` are run in the order they are listed. After that, the `tearDown()` method "cleans up" to be ready for the next test or variation. When a variation fails, the test launches for the next variation in a queue.

![Test case flow diagram]({{site.baseurl}}common/images/mtf_test_case_flow.png)

## How to create a test case {#how-to-create}

__Step 1.__ Create a [data set][]

__Step 2.__ Create a PHP class in the `<magento2>/dev/tests/functional/tests/app/Magento/<module>/TestCase` directory

__Step 3.__ Give it a name using the following format:

<b><span style="color:blue">{action}</span><span style="color:red">{entityName}</span>Entity<span style="color:green">{additional_description_if_needed}</span>Test</b>

For example:
   
- <span style="color:blue">Create</span><span style="color:red">ConfigurableProduct</span>EntityTest
- <span style="color:blue">Create</span><span style="color:red">CatalogEvent</span>Entity<span style="color:green">FromCategoryPage</span>Test

__Step 4.__ If you have preconditions, prepare the data using a [__prepare()](#prepare-method) method

__Step 5.__ Inject the initial data for a test using a [__inject()](#inject-method) method

__Step 6.__ Declare all the test steps in the [test()](#test-method) method
 
__Step 7.__ If you want to perform any actions after constraints, use a [tearDown()](#teardown-method) method


<!-- LINK DEFINITIONS -->

[data set]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html
[variation]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html
[Mtf\TestCase\Injectable]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/TestCase/Injectable.php
[Scenario test]: {{page.baseurl}}mtf/mtf_entities/mtf_scenariotest.html
[processAssert()]:{{page.baseurl}}mtf/mtf_entities/mtf_constraint.html#mtf_constraint_assert
[constraints]: {{page.baseurl}}mtf/mtf_entities/mtf_constraint.html
[fixture]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html
[Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Product/UpdateSimpleProductEntityTest.php

<!-- ABBREVIATIONS -->

*[FTF]: Functional Testing Framework
