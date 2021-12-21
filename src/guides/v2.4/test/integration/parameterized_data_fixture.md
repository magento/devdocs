---
group: testing
title: Parameterized Data Fixture
---

{:.bs-callout-info}
Parameterized Data Fixture is currently only available for Magento Open Source contributors. It will be released for general use with Magento Open Source 2.4.5.

## Overview

Parameterized data fixture is a dynamic and scalable data fixture that accepts parameters directly from annotations, and therefore eliminating the need of creating almost identical fixture every time a slight change is needed.

## Principles

1. Parameterized Data Fixture class MUST implement `Magento\TestFramework\Fixture\DataFixtureInterface` or  `Magento\TestFramework\Fixture\RevertibleDataFixtureInterface` if the data created by the fixture is revertible. For instance, a fixture that creates an entity (for example, product).
1. Parameterized Data Fixture class MUST be placed in the `<ModuleName>/Test/Fixture` folder of the corresponding module with namespace: `<VendorName>\<ModuleName>\Test\Fixture` (for example, `Magento\Catalog\Test\Fixture`).
1. Parameterized Data Fixture class SHOULD follow single responsibility principle.
1. Parameterized Data Fixture MUST NOT depend on another fixture.
1. Parameterized Data Fixture SHOULD be implemented using service APIs.
1. Parameterized Data Fixture SHOULD have dynamic default data to allow generating unique fixtures.

## Dynamic default data

In order to generate multiple fixtures of the same type without having to manually configure unique fields, you can use the placeholder `%uniqid%` in the default value of unique fields and `Magento\TestFramework\Fixture\Data\ProcessorInterface` to substitute the placeholder with unique sequence.

[`Magento\Catalog\Test\Fixture\Product`][] demonstrates the usage of `%uniqid%` (`sku`: `simple-product%uniqid%`) in the fixture default data.

In the following example, a unique `sku` is automatically generated for the first fixture (for example, `simple-product61c10b2e86f991`) and the second fixture (for example, `simple-product61c10b2e86f992`). The sequence is random and therefore unpredictable.

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product
     */
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

    /**
     * @magentoApiDataFixture Magento\Catalog\Test\Fixture\Product as:product
     * @magentoApiDataFixture Magento\Quote\Test\Fixture\GuestCart as:cart
     * @magentoApiDataFixture Magento\Quote\Test\Fixture\AddProductToCart as:item1
     * @magentoApiDataFixture Magento\Quote\Test\Fixture\SetBillingAddress with:{"cart_id":"$cart.id$"}
     * @magentoApiDataFixture Magento\Quote\Test\Fixture\SetShippingAddress with:{"cart_id":"$cart.id$"}
     * @magentoDataFixtureDataProvider {"item1":{"cart_id":"$cart.id$","product_id":"$product.id$","qty":2}}
     */
    public function testCollectTotals(): void
    {
    }
}
```

Example 2:

```php?start_inline=1
class PriceTest extends \PHPUnit\Framework\TestCase
{
    /**
     * Test for bundle with fixed price
     *
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price":10} as:p1
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price":20} as:p2
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product with:{"price":30} as:p3
     * @magentoDataFixture Magento\Bundle\Test\Fixture\Link with:{"sku":"$p1.sku$","price":10,"price_type":0} as:link1
     * @magentoDataFixture Magento\Bundle\Test\Fixture\Link with:{"sku":"$p2.sku$","price":25,"price_type":1} as:link2
     * @magentoDataFixture Magento\Bundle\Test\Fixture\Link with:{"sku":"$p3.sku$","price":25,"price_type":0} as:link3
     * @magentoDataFixture Magento\Bundle\Test\Fixture\Option as:opt1
     * @magentoDataFixture Magento\Bundle\Test\Fixture\Product as:bundle1
     * @magentoDataFixtureDataProvider {"opt1":{"product_links":["$link1$","$link2$","$link3$"]}}
     * @magentoDataFixtureDataProvider {"bundle1":{"price":50,"price_type":1,"_options":["$opt1$"]}}
     *
     * @return void
     */
    public function testBundleWithFixedPrice(): void
    {

    }
}
```

<!-- Link definitions -->

[`Magento\Catalog\Test\Fixture\Product`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Test/Fixture/Product.php