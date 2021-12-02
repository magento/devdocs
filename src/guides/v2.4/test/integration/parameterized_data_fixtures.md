---
group: testing
title: Parameterized Data Fixtures
---

{:.bs-callout-info}
Parameterized Data Fixtures currently only available for Magento Open Source contributors, and will be released for public with Magento Open Source 2.5.5.

### Decoupled fixtures class

Example 1:

```php?start_inline=1
class QuoteTest extends \PHPUnit\Framework\TestCase
{
   /**
   * @magentoDataFixture \Magento\Catalog\Fixture\CreateSimpleProduct with:{"sku": "simple1", "price": 5.0} as:product1
   * @magentoDataFixture \Magento\Catalog\Fixture\CreateSimpleProduct with:{"sku": "simple2", "price": 10.0} as:product2
   * @magentoDataFixture \Magento\Quote\Fixture\CreateEmptyCartForGuest as:cart
   * @magentoDataFixture \Magento\Quote\Fixture\AddSimpleProductToCart with:{"cart": "$cart", "product": "$product1", "qty": 2}
   * @magentoDataFixture \Magento\Quote\Fixture\AddSimpleProductToCart with:{"cart": "$cart", "product": "$product2", "qty": 1}
   */
   public function testGetProductsCount(): void
   {
   }
}
```

Example 2:

```php?start_inline=1
class QuoteTest extends \PHPUnit\Framework\TestCase
{
   /**
   * @magentoApiDataFixture Magento\Customer\Fixture\CreateCustomer as:customer
   * @magentoApiDataFixture Magento\Catalog\Fixture\CreateDropdownAttribute with:{"options":["option_a","option_b"]} as:attr1
   * @magentoApiDataFixture Magento\Catalog\Fixture\CreateDropdownAttribute with:{"options":["option_1","option_2"]} as:attr2
   * @magentoApiDataFixture Magento\Catalog\Fixture\CreateSimpleProduct with:{"sku":"simple1"} as:product1
   * @magentoApiDataFixture Magento\Catalog\Fixture\CreateSimpleProduct with:{"sku":"simple2"} as:product2
   * @magentoApiDataFixture Magento\ConfigurableProduct\Fixture\CreateConfigurableProduct as:configurable
   * @magentoApiDataFixture Magento\Quote\Fixture\CreateEmptyCartForCustomer with:{"customer":"$customer"} as:cart
   * @magentoApiDataFixture Magento\ConfigurableProduct\Fixture\AddConfigurableProductToCart with:{"cart":"$cart","product":"$configurable", "selection":"$product1"}
   * @magentoApiDataFixture Magento\ConfigurableProduct\Fixture\AddConfigurableProductToCart with:{"cart":"$cart","product":"$configurable", "selection":"$product2"}
   * @magentoApiDataFixture Magento\Quote\Fixture\AddShippingAddressToCart with:{"cart":"$cart"}
   */
   public function testCartWithConfigurable()
   {
   }

   public function cartWithConfigurableFixtureDataProvider(): array
   {
      return [
         'configurable' => [
             'attributes' => ['$attr1', '$attr2'],
             'products' => [
                 [
                     'product' => '$product1',
                     'options' => [
                         ['attribute' => '$attr1', 'option' => 'option_a'],
                         ['attribute' => '$attr2', 'option' => 'option_1']
                     ]
                 ],
                 [
                     'product' => '$product2',
                     'options' => [
                         ['attribute' => '$attr1', 'option' => 'option_a'],
                         ['attribute' => '$attr1', 'option' => 'option_2']
                     ]
                 ]
             ]
         ]
      ];
   }
}
```