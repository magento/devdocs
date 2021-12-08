---
group: testing
title: Data fixture data provider annotation
---

{:.bs-callout-info}
Parameterized Data Fixtures currently only available for Magento Open Source contributors, and will be released for public with Magento Open Source 2.4.5.

## Format

`@magentoDataFixtureDataProvider` takes an argument that points to a Data Provider callable or contains inline JSON string for [Parameterized Data Fixture][parameterizedDataFixtures].

```php?start_inline=1
/**
 * @magentoDataFixtureDataProvider <callable>|{}
 */
```

## Principles

1. Callable Fixtures Data Provider must be publicly accessible.
1. Fixtures Data Provider must return an associative array with fixture aliases as key.
1. Fixtures Data Provider will not apply to a fixture that has an inline data provider with `with` directive.
1. Fixtures Data Provider declared at a test level have a higher priority than Fixtures Data Provider declared at a test case level.

## Usage

### Inline JSON as Data Provider

Example:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
    /**
     * @magentoDataFixture Magento\Catalog\Test\Fixture\Product as:product1
     * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product2
     * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product3
     * @magentoDataFixtureDataProvider {"product1":{"sku":"simple1"}}
     * @magentoDataFixtureDataProvider {"product2":{"sku":"simple2"}}
     * @magentoDataFixtureDataProvider {"product2":{"sku":"simple3","status":2}}
     */
    public function testGetProductsCount(): void
    {
    }
}
```

### A class method as data provider

Example:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
   /**
   * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product1
   * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product2
   * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product3
   * @magentoDataFixtureDataProvider getProductsCountFixtureDataProvider
   */
   public function testGetProductsCount(): void
   {
   }

   public function getProductsCountFixtureDataProvider(): array
   {
      return [
         [
             'product1' => [
                 'sku' => 'simple1'
             ],
             'product2' => [
                 'sku' => 'simple2'
             ],
             'product3' => [
                 'sku' => 'simple3',
                 'status' => Status::STATUS_DISABLED,
             ],
         ]
      ];
   }
}
```

### Test case and test method scopes

`@magentoDataFixtureDataProvider` does not recursively merge fixtures data, thus if multiple `@magentoDataFixtureDataProvider` declare the same fixture, only the latest value is used.

<!-- Link definitions -->

[parameterizedDataFixtures]: ../parameterized_data_fixtures.html
