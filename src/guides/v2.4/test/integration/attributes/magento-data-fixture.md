---
group: testing
title: Data fixture attribute
redirect_from: 
  - /guides/v2.4/test/integration/annotations/magento-data-fixture-data-provider.html
  - /guides/v2.4/test/integration/parameterized_data_fixture.html
redirect_to: https://developer.adobe.com/commerce/testing/guide/integration/attributes/data-fixture/
layout: migrated
---

## Overview

Data fixture attributes apply fixtures that implement `Magento\TestFramework\Fixture\DataFixtureInterface` or `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`.
It takes two more optional parameters alongside the fixture class name.
The second parameter is the data that is used to customize the fixture and the third parameter is the alias (ID) of the fixture that is used to retrieve the data returned by the fixture and also as a reference in other fixture parameters.

Use data fixtures to prepare a database for tests. The Integration Testing Framework (ITF) reverts the database to its initial state automatically.
To set up a date fixture, use the `DataFixture` attribute.

## Format

```php?start_inline=1
#[
    DataFixture(string $type, array $data = [], ?string $as = null)
]
```

### Parameters

-  **type**
   -  Name of a class that implements `Magento\TestFramework\Fixture\DataFixtureInterface` or `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`.
-  **data**
   -  The optional array of data passed on to the fixture.
-  **as**
   -  The fixture alias that will be used as a reference to retrieve the data returned by the fixture and also as a reference in other fixtures parameters.

## Fixture Usage

### Retrieve fixture data in the test

A test can retrieve data that was returned by a Data Fixture using `Magento\TestFramework\Fixture\DataFixtureStorageManager` and the fixture alias.

The following example shows how to retrieve data that was returned by the fixtures:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    #[
        DataFixture(ProductFixture::class, as: 'product1'),
        DataFixture(ProductFixture::class, as: 'product2'),
        DataFixture(ProductFixture::class, as: 'product3')
    ]
    public function testGetProductsCount(): void
    {
        $fixtures = DataFixtureStorageManager::getStorage();
        $product1 = $fixtures->get('product1');
        $product2 = $fixtures->get('product2');
        $product3 = $fixtures->get('product3');
    }
}
```

### Supply data to data fixture as a variable

It is possible to supply data as a variable from one fixture to another using the fixture alias in one of the following formats:

-  `$fixtureAlias$` is a reference to the data that was returned by the fixture with alias `fixtureAlias`.
-  `$fixtureAlias.snake_case_property_name$` is a reference to the property `snake_case_property_name` in the data that was returned by the fixture with alias `fixtureAlias`.

The following example shows how a fixture can use the data of another fixture:

```php?start_inline=1
class QuoteTest extends \PHPUnit\Framework\TestCase
{
    #[
        DataFixture(GuestCartFixture::class, as: 'cart'),
        DataFixture(SetBillingAddressFixture::class, ['cart_id' => '$cart.id$']),
    ]
    public function testCollectTotals(): void
    {
    }
}
```

### Test class and test method scopes

The `DataFixture` can be specified for a particular test or for an entire test case.
The basic rules for fixture attributes at different levels are:

-  `DataFixture` at a test case level makes the framework apply the declared fixtures to each test in the test case.
   When the final test is complete, all class-level fixtures are reverted.
-  `DataFixture` for a particular test signals the framework to revert the fixtures declared on a test case level and applies the fixtures declared at a test method level instead.
   When the test is complete, the ITF reverts the applied fixtures.

{:.bs-callout-info}
The integration testing framework interacts with a database to revert the applied fixtures.

## Creating the fixture

Data Fixture is a PHP class that implements `Magento\TestFramework\Fixture\DataFixtureInterface` or  `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface`. Its main purpose is to seed the database with the data needed to run a test.

### Principles

1. Data Fixture class MUST implement `Magento\TestFramework\Fixture\DataFixtureInterface` or  `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface` if the data created by the fixture is revertible. For instance, a fixture that creates an entity (for example, product).
1. Data Fixture class MUST be placed in the `<ModuleName>/Test/Fixture` folder of the corresponding module with namespace: `<VendorName>\<ModuleName>\Test\Fixture` (for example, `Magento\Catalog\Test\Fixture`).
1. Data Fixture class SHOULD follow single responsibility principle.
1. Data Fixture class MUST depend only on services from modules that are declared in the `require` section of its module's composer.json file.
1. Data Fixture MUST NOT depend on another fixture.
1. Data Fixture SHOULD be implemented using service APIs.
1. Data Fixture SHOULD have dynamic default data to allow generating unique fixtures.

### Dynamic default data

In order to generate multiple fixtures of the same type without having to manually configure unique fields, you can use the placeholder `%uniqid%` in the default value of unique fields and `Magento\TestFramework\Fixture\Data\ProcessorInterface` to substitute the placeholder with a unique sequence.

[`Magento\Catalog\Test\Fixture\Product`][] demonstrates the usage of `%uniqid%` (`sku`: `simple-product%uniqid%`) in the fixture default data.

In the following example, a unique `sku` is automatically generated for the first fixture (for example, `simple-product61c10b2e86f991`) and the second fixture (for example, `simple-product61c10b2e86f992`). The sequence is random and therefore unpredictable.

```php?start_inline=1
class ProductsListTest extends \PHPUnit\Framework\TestCase
{
     #[
        DataFixture(ProductFixture::class),
        DataFixture(ProductFixture::class)
     ]
    public function testGetProductsCount(): void
    {
    }
}
```

### Decoupling fixtures

Fixtures must be written in the way that they only use one API to generate data. For example, the fixture that creates
a product should only invoke the "Create Product" API and return the product created. This fixture should not add any extra
logic beyond the "create product" API capabilities, such logic should be implemented in a separate fixture.

### Examples

Example 1:

```php?start_inline=1
class QuoteTest extends \PHPUnit\Framework\TestCase
{

    #[
        DataFixture(ProductFixture::class, as: 'p'),
        DataFixture(GuestCartFixture::class, as: 'cart'),
        DataFixture(AddProductToCartFixture::class, ['cart_id' => '$cart.id$', 'product_id' => '$p.id$', 'qty' => 2]),
        DataFixture(SetBillingAddressFixture::class, ['cart_id' => '$cart.id$']),
        DataFixture(SetShippingAddressFixture::class, ['cart_id' => '$cart.id$']),
    ]
    public function testCollectTotals(): void
    {
    }
}
```

Example 2:

```php?start_inline=1
class PriceTest extends \PHPUnit\Framework\TestCase
{
    #[
        DataFixture(ProductFixture::class, ['sku' => 'simple1', 'price' => 10], 'p1'),
        DataFixture(ProductFixture::class, ['sku' => 'simple2', 'price' => 20], 'p2'),
        DataFixture(ProductFixture::class, ['sku' => 'simple3', 'price' => 30], 'p3'),
        DataFixture(BundleSelectionFixture::class, ['sku' => '$p1.sku$', 'price' => 10, 'price_type' => 0], 'link1'),
        DataFixture(BundleSelectionFixture::class, ['sku' => '$p2.sku$', 'price' => 25, 'price_type' => 1], 'link2'),
        DataFixture(BundleSelectionFixture::class, ['sku' => '$p3.sku$', 'price' => 25, 'price_type' => 0], 'link3'),
        DataFixture(BundleOptionFixture::class, ['product_links' => ['$link1$', '$link2$', '$link3$']], 'opt1'),
        DataFixture(
            BundleProductFixture::class,
            ['sku' => 'bundle1','price' => 50,'price_type' => 1,'_options' => ['$opt1$']],
            'bundle1'
        ),
    ]
    public function testBundleWithFixedPrice(): void
    {

    }
}
```

### Fixture rollback

A fixture that contains database transactions only are reverted automatically.
Otherwise, when a fixture creates files or performs any actions other than a database transaction, provide the corresponding rollback logic,
in the `revert` method of the revertible data fixture.
Rollbacks are run after reverting all the fixtures related to database transactions.

{:.bs-callout-info}
See the [`Magento\Catalog\Test\Fixture\Product`][] fixture for an example.

### Restrictions

Do not rely on and do not modify an application state from within a fixture. The [application isolation attribute][magentoAppIsolation] can reset the application state at any time.

<!-- Link definitions -->

[magentoAppIsolation]: magento-app-isolation.html
[`Magento\Catalog\Test\Fixture\Product`]: {{ site.mage2bloburl }}/{{ page.guide_version }}-develop/app/code/Magento/Catalog/Test/Fixture/Product.php