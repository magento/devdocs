---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Data set
menu_order: 8
version: 2.1
github_link: mtf/mtf_entities/mtf_dataset.md
---

<h2>Data set</h2>


## Data set overview {#overview}

A data set contains data used by a [test case] and [constraints].
A data set can have several variations.
Each variation has constraints that are called at the end of the test flow.

## Data set structure {#structure}

A data set is an XML file that contains test variations for a test case.

Each variation includes:

- Data used during the test flow and assertions
- Constraints that are called after the test flow

The following table shows structure of the data set:
{:#dataset_struct_table}


<table>
<col width="1*">
<col width="1*">
<col width="2*">
<tr><th>Node </th><th>Semantics </th><th>Attributes </th></tr>
<tr>
<td><code>config</code> </td>
<td>The root element that defines an XML namespace and an XML Schema. </td>
<td><ul>
<li><code> xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</code></li>
<li><code>xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd"</code></li>
</ul> </td>
</tr>
<tr>
<td><code>testCase</code> </td>
<td>Contains a reference to the test case class in attribute and variations in child elements. </td>
<td><ul>
<li><code>name</code> - full name of a test case class. Required.</li>
<li><code>summary</code> - description of a test case. Required.</li>
<li><code>ticketId</code> - identifier of related ticket. Optional.</li>
</ul> </td>
</tr>
<tr>
<td><code>variation</code></td>
<td>Contains variation description in attributes and data with constraints in child elements.</td>
<td><ul>
<li><code>name</code> - a variation name. Required.</li>
<li><code>firstConstraint</code> - a full name of constraint that is performed first. Optional.</li>
<li><code>method</code> - a name of the test method from the test class. Optional.</li>
<li><code>summary</code> - description of the variation. Optional.</li>
<li><code>ticketId</code> - an identifier of the related ticket. Optional.</li>
</ul></td>
</tr>
<tr>
<td><code>data</code> </td>
<td>Data to be used by a test case. </td>
<td><ul>
<li><code>name</code> - a name of variable with extra data. <a href="#data_node">More details.</a> Required.</li>
<li><code>xsi:type</code> - a type of the value. 
The following data types are available:
<ul>
<li><code>array</code></li>
<li><code>string</code></li>
<li><code>boolean</code></li>
<li><code>object</code></li>
<li><code>number</code></li>
<li><code>null</code></li>
</ul></li>Required.
</ul> </td>
</tr>
<tr>
<td><code>constraint</code></td>
<td>Reference to the constraint class performed after the test flow.  </td>
<td><ul>
<li><code>name</code> - a full name of the constraint class. Required.</li>
<li><code>next</code> - a full name of the constraint class performing next in a queue. Optional.</li>
<li><code>prev</code> - a full name of the constraint class performing previous in a queue. Optional.</li>
</ul></td></tr>
</table>

<div class="bs-callout bs-callout-warning">
  <p>A variation should contain only data that is required for its flow and constraints.</p>
</div>

A data set should be placed in the same directory with a corresponding test case.

### Example data set {#example}

Let's see an example for `CreateSimpleProductEntityTest`. A data set and its corresponding [test case][] must be placed in the `<magento2>/dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Product` directory.

<a href="{{ site.baseurl }}common/images/ftf/mtf_dataset_dir.png"><img src="{{ site.baseurl }}common/images/ftf/mtf_dataset_dir.png"/></a>

The `CreateSimpleProductEntityTest.xml` data set contains:

{%highlight xml%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/variations.xsd">
    <testCase name="Magento\Catalog\Test\TestCase\Product\CreateSimpleProductEntityTest" summary="Create Simple Product" ticketId="MAGETWO-23414">
        <variation name="CreateSimpleProductEntityTestVariation1" summary="Create product with custom options(fixed price)">
            <data name="product/data/url_key" xsi:type="string">simple-product-%isolation%</data>
            <data name="product/data/name" xsi:type="string">Simple Product %isolation%</data>
            <data name="product/data/sku" xsi:type="string">simple_sku_%isolation%</data>
            <data name="product/data/price/value" xsi:type="string">10000</data>
            <data name="product/data/price/dataset" xsi:type="string">drop_down_with_one_option_fixed_price</data>
            <data name="product/data/short_description" xsi:type="string">Simple Product short_description %isolation%</data>
            <data name="product/data/description" xsi:type="string">Simple Product description %isolation%</data>
            <data name="product/data/weight" xsi:type="string">50</data>
            <data name="product/data/quantity_and_stock_status/qty" xsi:type="string">657</data>
            <data name="product/data/custom_options/dataset" xsi:type="string">drop_down_with_one_option_fixed_price</data>
            <data name="product/data/checkout_data/dataset" xsi:type="string">simple_drop_down_with_one_option_fixed_price</data>
            <data name="tag" xsi:type="string">test_type:acceptance_test</data>
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductSaveMessage" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductInGrid" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductInCategory" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductPage" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductInCart" />
        </variation>
    </testCase>
</config>
{%endhighlight xml%}

This is a data set that:

- corresponds to the XSD schema `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/variations.xsd`
- relates to the `Magento\Catalog\Test\TestCase\Product\CreateSimpleProductEntityTest` test case (performs creation of the simple product). 
- relates to the ticket `MAGETWO-23414` in Jira
- contains variation `CreateSimpleProductEntityTestVariation1` that 
  - contains data to create product with fixed price (see descriptions in the following table) 
  - defines tag that can be used to customize the test suite run
  - defines [constraints][] that will be performed after the test flow in the order they are presented in the data set

The `CreateSimpleProductEntityTestVariation1` variation contains the following `$product` data:
{:#ex_variation_table}

<table>
<col width="1*">
<col width="2*">
<tr><th>Fixture field</th><th>Description</th></tr>
<tr>
<td><code>url_key</code> </td>
<td>field is assigned with <code>simple-product-%isolation%</code>. <a href="{{page.baseurl}}mtf/mtf_entities/mtf_fixture-repo.html#mtf_repo_isolation">More info about <code>%isolation%</code></a>.</td>
</tr>
<tr>
<td><code>name</code></td><td>field is assigned with <code>Simple Product %isolation%</code></td>
</tr>
<tr>
<td><code>sku</code></td><td>field is assigned with <code>simple_sku_%isolation%</code></td>
</tr>
<tr>
<td><code>price</code></td>
<td>
<ul>
<li> <code>product/data/price/value</code> is processed by a <a href="{{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_source">data source</a> <code>Magento\Catalog\Test\Fixture\Product\Price</code> and is assigned <code>10000</code></li>
<li><code>product/data/price/dataset</code> is assigned with a data set <code>drop_down_with_one_option_fixed_price</code> from the <code>Magento\Catalog\Test\Repository\CatalogProductSimple\Price</code> repository. This data set is used by a <a href="{{page.baseurl}}mtf/mtf_entities/mtf_constraint.html">constraint</a>.</li>
</ul>
</td>
</tr>
<tr>
<td><code>short_description</code></td>
<td>field is assigned with <code>Simple Product short_description %isolation%</code></td>
</tr>
<tr>
<td><code>description</code></td>
<td>field is assigned with <code>Simple Product description %isolation%</code></td>
</tr>
<tr>
<td><code>weight</code></td>
<td>field is assigned with <code>50</code></td>
</tr>
<tr>
<td><code>quantity_and_stock_status/qty</code></td>
<td>field is assigned with <code>657</code></td>
</tr>
<tr>
<td><code>custom_options</code></td>
<td>field is processed by a data source <code>Magento\Catalog\Test\Fixture\Product\CustomOptions</code> using a data set <code>drop_down_with_one_option_fixed_price</code> from the repository <code>Magento\Catalog\Test\Repository\Product\CustomOptions</code></td>
</tr>
<tr>
<td><code>checkout_data</code></td>
<td>fields are assigned with a data set <code>simple_drop_down_with_one_option_fixed_price</code> from the <code>Magento\Catalog\Test\Repository\CatalogProductSimple\CheckoutData</code> repository</td>
</tr>
</table>

### How to define `name` in the `<data>` node {#data_node}

As you can see in the [previous table](#dataset_struct_table), the `name` data has a specific structure. Why? To make your test more flexible.

Data mapping by `name` is performed for the test methods in test case  and `processAssert()` method in constraints. Let's see the logic of the `<data>` processing.

Slash `/` means array nesting. For example:

- `<data name=var/index1>value</data>` is converted as `var[index1 => value]`
- `<data name=var/index1/index2>value</data>` is converted as `var[index1 => [index2 => value]]`

where `var` is a name of an argument of a [test case][] or a [constraint][].

If a variable is assigned more than one value:

{%highlight xml%}
<data name="price/shopping_cart/total" xsi:type="string">50</data>
<data name="price/product_page/special_price/excluding_tax" xsi:type="string">6</data>
{%endhighlight xml%}

the value is processed as an array:

{%highlight php startinline=1%}
$price = [
    'data' => [
        'shopping_cart' => [
            'total' => '50'
        ],
        'product_page' => [
            'special_price' => [
                'excluding_tax' => '6'
            ]   
        ]
    ]
]
{%endhighlight php%}

Also, in similar cases you can use array type in a data set, like:

{%highlight xml%}
<data name="price" xsi:type="array">
    <item name="shopping_cart" xsi:type="array">
        <item name="total" xsi:type="string">50</item>
    <item name="product_type" xsi:type="array">
        <item name="special_price" xsi:type="array">
            <item name="excluding_tax" xsi:type="string">6</item>
        </item>
    </item>
</data>
{%endhighlight xml%}

#### Set a simple variable {#simple_var}

For example, if a [test case][] or constraint has an argument `$price`, then the test case takes from the data set all the `<data>` nodes with a name `price`. Assume a method with the `$price` argument.

{%highlight php%}
<?php
public function testCreate($price)
{
    //
}
?>
{%endhighlight php%}

To assign it with `10` in one of the variations, add the following field to a variation of the corresponding data set:

{%highlight xml%}
<data name="price" xsi:type="string">10</data>
{%endhighlight xml%}

#### Set data to a fixture field {#fixture_field}

In your test you often need to use injectable [fixture][] instances. For example:

{%highlight php%}
<?php
public function testCreate(\Magento\Catalog\Test\Fixture\CatalogProductSimple $product)
{
    //
}
?>
{%endhighlight php%}

In this case, the ObjectManager sends data to the [InjectableFixture][] constructor. It declares that your data can be passed to the fixture in `$data` variable as an array. For example, to assign the existing fixture field `weight` with `50` you can use the following notation:

{%highlight xml%}
 <data name="product/data/weight" xsi:type="string">50</data>
{%endhighlight xml%}

#### Set data to a fixture from a repository {#fixture_repository}

The [InjectableFixture][] class enables you to use a fixture [repository][]. It can be injected in a `$dataset` variable. For example, to use `dataset = product_with_special_symbols_in_name` from the repository assigned in the [fixture][], you can use:

{%highlight xml%}
<data name="product/dataset" xsi:type="string">product_with_special_symbols_in_name</data>
{%endhighlight xml%}

#### Set data to a fixture field from a repository {#fixture_field_repository}

You can assign data to a [fixture field from its repository][].
 
Let's see an example:

{%highlight xml%}
<data name="product/data/price/dataset" xsi:type="string">drop_down_with_one_option_fixed_price</data>
<data name="product/data/checkout_data/dataset" xsi:type="string">simple_drop_down_with_one_option_fixed_price</data>
{%endhighlight xml%}

A `CatalogProductSimple.xml` fixture contains the following declarations:

{%highlight xml%}
<field name="price" is_required="1" group="product-details" source="Magento\Catalog\Test\Fixture\Product\Price" repository="Magento\Catalog\Test\Repository\CatalogProductSimple\Price" />
<field name="checkout_data" group="null" repository="Magento\Catalog\Test\Repository\CatalogProductSimple\CheckoutData" />
{%endhighlight xml%}

The `price` fixture field contains the [data source][] that assigns values from a repository. After the [InjectableFixture][] class has passed data to the CatalogProductSimple fixture, `Magento\Catalog\Test\Fixture\Product\Price` data source receives `['dataset' => 'drop_down_with_one_option_fixed_price']` and assigns values from the `['dataset' => 'drop_down_with_one_option_fixed_price']` of the `Magento\Catalog\Test\Repository\CatalogProductSimple\Price` repository.

The `checkout_data` doesn't contain source and is assigned with values from the `Magento\Catalog\Test\Repository\CatalogProductSimple\CheckoutData` directly.

## Merge data sets {#merge}

The FTF enables you to merge data sets from different modules. For example, if you create a new module that adds a menu option to an existing module, the FTF allows you to merge the new data with the existing data sets. As a result, you don't have to edit the existing module to include the new information, and your tests continue to work. If you decide to later remove the same new module, you don't need to clean the data sets in other modules.
   
There are two options to merge data sets in the FTF:
 
- add a new variation
- extend an existing variation

### Add a new variation {#add_variation}

To add a new variation using merging, you should simply use the name of a [test case][] that you want to merge with. For example, you want to add a new variations from the Magento_ProductVideo module to the `Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest` that is placed in the Magento_Catalog module. You can create data set in the Magento_ProductVideo module, containing variations you need, and paste the test case name that you want to merge with:
 
 * Create `<magento2>/dev/tests/functional/tests/app/Magento/ProductVideo/Test/TestCase/Product/UpdateSimpleProductEntityTest.xml` with the following code:

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd">
    <testCase name="Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest" summary="Add Video to PCF" ticketId="PV-1">
        <variation name="DeleteVideoFromPCFTestVariation1" summary="Delete video youtube">
            <data name="initialProduct/dataset" xsi:type="string">product_with_video_youtube</data>
            <data name="product/data/sku" xsi:type="string">sku_simple_product_with_video_%isolation%</data>
            <data name="product/data/media_gallery/images" xsi:type="string" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductNoImageInGrid" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductForm" />
            <constraint name="Magento\ProductVideo\Test\Constraint\AssertNoVideoCategoryView" />
            <constraint name="Magento\ProductVideo\Test\Constraint\AssertNoVideoProductView" />
        </variation>
        <variation name="DeleteVideoFromPCFTestVariation2" summary="Delete video vimeo">
            <data name="initialProduct/dataset" xsi:type="string">product_with_video_vimeo</data>
            <data name="product/data/sku" xsi:type="string">sku_simple_product_with_video_%isolation%</data>
            <data name="product/data/media_gallery/images" xsi:type="string" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductNoImageInGrid" />
            <constraint name="Magento\Catalog\Test\Constraint\AssertProductForm" />
            <constraint name="Magento\ProductVideo\Test\Constraint\AssertNoVideoCategoryView" />
            <constraint name="Magento\ProductVideo\Test\Constraint\AssertNoVideoProductView" />
        </variation>
    </testCase>
</config>
{%endhighlight xml%}

Variations `DeleteVideoFromPCFTestVariation1` and `DeleteVideoFromPCFTestVariation2` will be used by the `Magento\Catalog\Test\TestCase\Product\UpdateSimpleProductEntityTest` class during the test run.

### Extend a variation with data {#extend_variation}

If you want to extend variation in another module using merging, you should use a [test case][] name that you want to merge with and a variation name that you want to extend.
 
For example, see how in `Magento/Catalog/Test/TestCase/Product/ValidateOrderOfProductTypeTest.xml`

 {%highlight xml%}
 {%remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/dev/tests/functional/tests/app/Magento/Catalog/Test/TestCase/Product/ValidateOrderOfProductTypeTest.xml%}
 {%endhighlight xml%}
 
 the variation `ValidateOrderOfProductTypeTestVariation1` is extended by the Magento_Bundle module:
 
 {%highlight xml%}
 {%remote_markdown https://raw.githubusercontent.com/magento/magento2/develop/dev/tests/functional/tests/app/Magento/Bundle/Test/TestCase/ValidateOrderOfProductTypeTest.xml%}
  {%endhighlight xml%}
  
### Replace a variation {#replace_variation}

You can replace one variation with another by using a `replace` attribute of the `variation` node. A `replace` attribute contains variation that must be replaced by a variation from a `name` attribute. 

{%highlight xml%}

<variation name="CreateSuperNewCustomerBackendEntityTestVariation1" replace="CreateCustomerBackendEntityTestVariation1" summary="Variation that replaces default CreateCustomerBackendEntityTestVariation1">

{%endhighlight xml%}

After a merge of a data set with the variation that is mentioned, a test will use `CreateSuperNewCustomerBackendEntityTestVariation1` instead of `CreateCustomerBackendEntityTestVariation1`.

<!-- LINK DEFINITIONS -->

[constraints]: {{page.baseurl}}mtf/mtf_entities/mtf_constraint.html
[constraint]: {{page.baseurl}}mtf/mtf_entities/mtf_constraint.html
[fixture]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html
[data source]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_source
[InjectableFixture]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Fixture/InjectableFixture.php
[repository]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture-repo.html
[test case]: {{page.baseurl}}mtf/mtf_entities/mtf_testcase.html
[fixture field from its repository]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy

<!-- ABBREVIATIONS -->

*[FTF]: Functional Testing Framework
