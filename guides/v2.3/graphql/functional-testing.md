---
group: graphql
title: GraphQL functional testing
---

Magento provides API functional tests that can verify extension points in GraphQL. These tests serve as an example for exposing new queries via GraphQL.

## Creating a new GraphQL functional test

All GraphQL functional tests should inherit from the generic test case `Magento\TestFramework\TestCase\GraphQlAbstract`. It defines the `graphQlQuery()` method, which should be used to perform Web API calls from tests.

The following test verifies that the schema returns the correct attribute type, given the `attribute_code` and corresponding `entity_type`.

```php
namespace Magento\GraphQl\Catalog;

use Magento\TestFramework\TestCase\GraphQlAbstract;

class ProductAttributeTypeTest extends GraphQlAbstract
{
    public function testAttributeTypeResolver()
    {
        $query
            = <<<QUERY
{
  customAttributeMetadata(attributes:
  [
    {
      attribute_code:"description",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"status",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"special_price",
      entity_type:"catalog_product"
    },
    {
      attribute_code:"disable_auto_group_change",
      entity_type:"customer"
    }
    {
      attribute_code:"special_price",
      entity_type:"Magento\\\\Catalog\\\\Api\\\\Data\\\\ProductInterface"
    }
  ]
  )
  {
    items
    {
      attribute_code
      attribute_type
      entity_type
    }
  }
 }
QUERY;
        $response = $this->graphQlQuery($query);
        $expectedAttributeCodes = [
            'description',
            'status',
            'special_price',
            'disable_auto_group_change',
            'special_price'
        ];
        $entityType = [
            'catalog_product',
            'catalog_product',
            'catalog_product',
            'customer',
            \Magento\Catalog\Api\Data\ProductInterface::class
        ];
        $attributeTypes = ['String', 'Int', 'Float','Boolean', 'Float'];
        $this->assertAttributeType($attributeTypes, $expectedAttributeCodes, $entityType, $response);
    }
```

## Fixtures
Use fixtures in situations when you need how check how your GraphQL module works with real store data and you should emulate them for test. 

Fixture consists of 2 files:
- fixture
- rollback

You emulate your particular test case in the `fixture` file and revert all changes back in the `fixture's rollback`. 

**Fixture file**
According to best practices a fixture file should be located in the appropriate module folder. For example, a fixture that create a customer account locates in  
```
dev/tests/integration/testsuite/Magento/Customer/_files/customer.php
```

**Fixture rollback file**
Each `fixture` should have a rollback for changes that have been created. Fixture's rollback locates in the same folder and has `_rollback` word in the file name. For example, a rollback for mentioned `customer` fixture is
```
dev/tests/integration/testsuite/Magento/Customer/_files/customer_rollback.php
```

**Invoke fixture**
To invoke fixture in your test please use `@magentoApiDataFixture` in the test annotation
```php
    /**
     * @magentoApiDataFixture Magento/Customer/_files/customer.php
     */
    public function testCreateEmptyCart()
    {
        ...
    }
```

You can use a few of `@magentoApiDataFixture` to invoke more than one fixture in your test:
```php
    /**
     * @magentoApiDataFixture Magento/Checkout/_files/quote_with_simple_product_saved.php
     * @magentoApiDataFixture Magento/Customer/_files/customer.php
     */
    public function testSetNewBillingAddressByRegisteredCustomer()
    {
        ...
    }
```

## Using the default GraphQlQueryTest

The `\Magento\GraphQl\TestModule\GraphQlQueryTest.php` test case uses two test modules to determine whether the mechanisms for GraphQL extensibility work as expected. It illustrates best practices for extending an existing GraphQL endpoint.

* `TestModuleGraphQlQuery` - This bare-bones module defines a `testItem` endpoint with the queryable attributes `item_id` and `name`. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQuery`.
* `TestModuleGraphQlQueryExtension` - This module extends `TestModuleGraphQlQuery`, adding the `integer_list` extension attribute. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQueryExtension`.
