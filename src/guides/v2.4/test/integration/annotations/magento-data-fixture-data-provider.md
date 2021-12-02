---
group: testing
title: Data fixture data provider annotation
---

{:.bs-callout-info}
Parameterized Data Fixtures currently only available for Magento Open Source contributors, and will be released for public with Magento Open Source 2.5.5.

## A class method as data provider

Example:

```php?start_inline=1
class ProductsList extends \PHPUnit\Framework\TestCase
{
   /**
   * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product1
   * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product2
   * @magentoDataFixture Magento\Catalog\Fixture\CreateSimpleProduct as:product3
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