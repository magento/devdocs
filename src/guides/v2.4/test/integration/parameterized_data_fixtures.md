---
group: testing
title: Parameterized Data Fixtures
---

{:.bs-callout-info}
Parameterized Data Fixtures currently only available for Magento Open Source contributors, and will be released for public with Magento Open Source 2.5.5.

## Overview

Parameterized data fixtures is a scalable and flexible way to create a data fixture for integration tests. Such fixtures can accept parameters directly from annotations, like, but not limited to, entity name, status, quantity and so on,
therefore eliminating the need of creating almost identical fixtures every time a slight change is needed.

### Benefits

Parameterized data fixtures allows developers to:

-  Reduce duplicated codes in integration fixture files.
-  Reduce the number of fixture files.
-  Remove fixtures coupling.
-  Write reusable and customizable data fixtures.
-  Focus on test scenarios and not fixtures.
-  Save time in development and code review process.

### Decoupling fixtures
Fixtures must be written in the way that they only use one API to generate data. For example, the fixture that creates a product should only call "create product" API and return the product created. This fixture should not add any extra logic beyond the "create product" API capabilities, such logic should be implemented in a separate fixture and take advantage of fixtures binding to link fixtures.
#### Examples

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
   public function testCollectTotals(): void
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