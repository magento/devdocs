---
group: testing
title: Data fixture data provider annotation
---

{:.bs-callout-info}
Parameterized Data Fixtures currently only available for Magento Open Source contributors, and will be released for public with Magento Open Source 2.5.5.

## Format

`@magentoDataFixtureDataProvider` takes an argument that points to a Data Provider callable or contains inline JSON string for Parameterized Data Fixtures.

```php?start_inline=1
/**
 * @magentoDataFixtureDataProvider <callable>|{}
 */
```

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

The `@magentoDataFixtureDataProvider` can be specified for a particular test or for an entire test case.
