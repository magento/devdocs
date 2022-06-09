---
group: testing
title: Parameterized Data Fixture
---

{:.bs-callout-info}
Parameterized Data Fixture is currently only available for Magento Open Source contributors. It will be released for general use with Magento Open Source 2.4.5.

## Overview

Parameterized data fixture is a dynamic and scalable data fixture that accepts parameters directly from the fixture declaration. It eliminates the need to create almost identical fixtures every time you need a slight change.

## Principles

1. Parameterized Data Fixture class MUST implement `Magento\TestFramework\Fixture\DataFixtureInterface` or  `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface` if the data created by the fixture is revertible. For instance, a fixture that creates an entity (for example, product).
1. Parameterized Data Fixture class MUST be placed in the `<ModuleName>/Test/Fixture` folder of the corresponding module with namespace: `<VendorName>\<ModuleName>\Test\Fixture` (for example, `Magento\Catalog\Test\Fixture`).
1. Parameterized Data Fixture class SHOULD follow single responsibility principle.
1. Parameterized Data Fixture class MUST depend only on services from modules that are declared in the `require` section of its module's composer.json.
1. Parameterized Data Fixture MUST NOT depend on another fixture.
1. Parameterized Data Fixture SHOULD be implemented using service APIs.
1. Parameterized Data Fixture SHOULD have dynamic default data to allow generating unique fixtures.

## Dynamic default data

In order to generate multiple fixtures of the same type without having to manually configure unique fields, you can use the placeholder `%uniqid%` in the default value of unique fields and `Magento\TestFramework\Fixture\Data\ProcessorInterface` to substitute the placeholder with unique sequence.

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

## Decoupling fixtures

Fixtures must be written in the way that they only use one API to generate data. For example, the fixture that creates
a product should only invoke "Create Product" API and return the product created. This fixture should not add any extra
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

<!-- Link definitions -->

[`Magento\Catalog\Test\Fixture\Product`]: {{ site.mage2bloburl }}/{{ page.guide_version }}-develop/app/code/Magento/Catalog/Test/Fixture/Product.php