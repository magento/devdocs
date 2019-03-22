---
group: graphql
title: GraphQL functional testing
---

Magento provides API functional tests that can verify extension points in GraphQL. These tests serve as an example for exposing new queries via GraphQL.

## Creating a new GraphQL functional test

All GraphQL functional tests should inherit from the generic test case `Magento\TestFramework\TestCase\GraphQlAbstract`. It defines the `graphQlQuery()` method, which should be used to perform Web API calls from tests.

The following test verifies that the schema returns the correct attribute type, given the `attribute_code` and corresponding `entity_type`.

{% highlight php inline=true %}
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

{% endhighlight %}

## Using the default GraphQlQueryTest

The `\Magento\GraphQl\TestModule\GraphQlQueryTest.php` test case uses two test modules to determine whether the mechanisms for GraphQL extensibility work as expected. It illustrates best practices for extending an existing GraphQL endpoint.

* `TestModuleGraphQlQuery` - This bare-bones module defines a `testItem` endpoint with the queryable attributes `item_id` and `name`. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQuery`.
* `TestModuleGraphQlQueryExtension` - This module extends `TestModuleGraphQlQuery`, adding the `integer_list` extension attribute. It's located at `<installdir>/dev/tests/api-functional/_files/TestModuleGraphQlQueryExtension`.


## Using fixtures

Fixture is a part of the testing framework. Fixtures prepare a precondition in the system for further testing. For example, upon testing of adding a product to the shopping cart, the precondition is the product that can be used for the testing. 

The following fixture creates a simple product with predefined attributes.

```php
<?php
use Magento\Catalog\Model\ProductFactory;
use Magento\TestFramework\Helper\Bootstrap;
use Magento\Catalog\Model\ResourceModel\Product as ProductResource;

$productFactory = Bootstrap::getObjectManager()->get(ProductFactory::class);
$product = $productFactory->create();
$product->setTypeId(\Magento\Catalog\Model\Product\Type::TYPE_VIRTUAL)
    ->setId(21)
    ->setAttributeSetId(4)
    ->setWebsiteIds([1])
    ->setName('Virtual Product')
    ->setSku('virtual-product')
    ->setPrice(10)
    ->setTaxClassId(0)
    ->setVisibility(\Magento\Catalog\Model\Product\Visibility::VISIBILITY_BOTH)
    ->setStatus(\Magento\Catalog\Model\Product\Attribute\Source\Status::STATUS_ENABLED)
    ->setStockData(
        [
            'qty' => 100,
            'is_in_stock' => 1,
            'manage_stock' => 1,
        ]
    );
/** @var ProductResource $productResource */
$productResource = Bootstrap::getObjectManager()->create(ProductResource::class);
$productResource->save($product);
```

To use this fixture in a test, it should be added to the test's annotation in the following way:

```php
    /**
     * @magentoApiDataFixture Magento/Catalog/_files/product_virtual.php
     */
    public function testAddVirtualProductToShoppingCart()
    {
      // Test body
    }
```

Once the fixture added, it executes on every test run. 

Every fixture should have a rollback. The rollback is a set of operations that remove changes introduced by the fixture from the system once the test is completed. 

The following fixture rollback removes the newly created product from the database.

```php
<?php
use Magento\Catalog\Api\ProductRepositoryInterface;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\Exception\StateException;
use Magento\TestFramework\Helper\Bootstrap;

$registry = Bootstrap::getObjectManager()->get(\Magento\Framework\Registry::class);

$registry->unregister('isSecureArea');
$registry->register('isSecureArea', true);

$productRepository = Bootstrap::getObjectManager()
    ->create(ProductRepositoryInterface::class);

try {
    $product = $productRepository->get('virtual-product', false, null, true);
    $productRepository->delete($product);
} catch (NoSuchEntityException $exception) {
    //Product already removed
} catch (StateException $exception) {
}

$registry->unregister('isSecureArea');
$registry->register('isSecureArea', false);

```

A fixture rollback filename should correspond the original fixture filename postfixed by `_rollback` keyword i.e `virtual_product_rollback.php`.
The existing fixtures can be found in the `dev/tests/integration/testsuite/Magento/{ModuleName}/_files` directory. The good practice is to reuse the existing fixtures whenever it's possible. In case of creating a new fixture, it should have a proper rollback.